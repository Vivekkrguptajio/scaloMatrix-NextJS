import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

// User text goes into an HTML email, so escape it
const esc = (v = '') =>
  String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Automatic WhatsApp confirmation through the WhatsApp Business Cloud API.
// Needs WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID and WHATSAPP_TEMPLATE_NAME (an approved template whose
// body has one variable, the visitor's first name). Optional: WHATSAPP_TEMPLATE_LANG (default "en").
// Returns true only when WhatsApp accepted the message; it never blocks the lead itself.
async function sendWhatsAppConfirmation({ name, phone }) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const template = process.env.WHATSAPP_TEMPLATE_NAME;
  const digits = String(phone || '').replace(/\D/g, '');
  if (!token || !phoneId || !template || digits.length < 10) return false;

  try {
    const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: `91${digits.slice(-10)}`,
        type: 'template',
        template: {
          name: template,
          language: { code: process.env.WHATSAPP_TEMPLATE_LANG || 'en' },
          components: [
            { type: 'body', parameters: [{ type: 'text', text: String(name).trim().split(/\s+/)[0].slice(0, 30) }] },
          ],
        },
      }),
    });
    if (!res.ok) {
      console.error('[WHATSAPP NOT SENT]', res.status, (await res.text()).slice(0, 300));
      return false;
    }
    return true;
  } catch (err) {
    console.error('[WHATSAPP NOT SENT]', err);
    return false;
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      name,
      phone,
      email,
      businessType,
      gstStatus,
      monthlyRevenue,
      productCategory,
      city,
      message,
      source = 'Website Lead',
    } = data;

    // FAQ "ask a question" box sends only the question, no contact details
    const isFaqQuestion = businessType === 'FAQ question' && String(message || '').trim().length > 0;

    if (!isFaqQuestion && (!name || (!phone && !email))) {
      return NextResponse.json({ success: false, error: 'Name and Phone/Email are required.' }, { status: 400 });
    }

    console.log('[LEAD RECEIVED]:', JSON.stringify(data, null, 2));

    // Confirm on WhatsApp straight away (not for FAQ questions, which have no phone)
    const whatsappPromise = isFaqQuestion ? Promise.resolve(false) : sendWhatsAppConfirmation({ name, phone });

    // No email service configured: never pretend the lead was delivered on the live site.
    // (Locally we still return success so the form can be tested; the lead is in the log above.)
    if (!resend) {
      console.error('[LEAD NOT EMAILED] RESEND_API_KEY is not set.');
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ success: false, error: 'Email service not configured.' }, { status: 500 });
      }
      return NextResponse.json({ success: true, emailSent: false, whatsappSent: await whatsappPromise, message: 'Lead logged (email not configured locally).' });
    }

    {
      const { data: resendData, error } = await resend.emails.send({
        // Must be an address on a domain verified in Resend. onboarding@resend.dev only delivers
        // to the Resend account owner's own inbox, so set CONTACT_FROM_EMAIL on the live site.
        from: process.env.CONTACT_FROM_EMAIL || 'scaloMATRIX Leads <onboarding@resend.dev>',
        to: process.env.CONTACT_TO_EMAIL || 'info@krafficgroup.com',
        replyTo: email || undefined,
        subject: isFaqQuestion
          ? `❓ New FAQ question: ${String(message).slice(0, 60)}`
          : `🔥 New D2C Lead: ${String(name).slice(0, 50)} (${businessType || 'General'})`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #141210;">
            <h2 style="color: #FD5800; border-bottom: 2px solid #FD5800; padding-bottom: 8px;">New D2C scaloMATRIX Lead</h2>
            <p><strong>Name:</strong> ${esc(name)}</p>
            <p><strong>Phone:</strong> <a href="tel:${esc(phone)}">${esc(phone)}</a> | <a href="https://wa.me/91${esc(phone)?.replace(/\D/g, '')}">WhatsApp</a></p>
            ${email ? `<p><strong>Email:</strong> ${esc(email)}</p>` : ''}
            <p><strong>Business Type:</strong> ${esc(businessType)}</p>
            <p><strong>Active GST:</strong> ${esc(gstStatus)}</p>
            <p><strong>Monthly Revenue:</strong> ${esc(monthlyRevenue)}</p>
            ${productCategory ? `<p><strong>Category:</strong> ${esc(productCategory)}</p>` : ''}
            ${city ? `<p><strong>City / Location:</strong> ${esc(city)}</p>` : ''}
            ${message ? `<p><strong>Note:</strong> ${esc(message)}</p>` : ''}
            <hr style="border: none; border-top: 1px solid #E7E0D4; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6B655C;">Source: ${esc(source)} | scaloMATRIX D2C Lead Generation</p>
          </div>
        `,
      });

      if (error) {
        // Tell the form it failed, so the visitor sees the WhatsApp fallback instead of a fake 'thank you'.
        console.error('[LEAD NOT EMAILED] Resend error:', error);
        return NextResponse.json({ success: false, error: 'Could not send. Please try WhatsApp.' }, { status: 502 });
      }
    }

    return NextResponse.json({
      success: true,
      whatsappSent: await whatsappPromise,
      message: 'Lead received successfully.',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
