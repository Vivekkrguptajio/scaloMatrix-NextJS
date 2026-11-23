import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

// User text goes into an HTML email, so escape it
const esc = (v = '') =>
  String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

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

    if (!name || (!phone && !email)) {
      return NextResponse.json({ success: false, error: 'Name and Phone/Email are required.' }, { status: 400 });
    }

    console.log('[LEAD RECEIVED]:', JSON.stringify(data, null, 2));

    // If Resend API Key is configured, dispatch notification email
    if (resend) {
      const { data: resendData, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: process.env.CONTACT_TO_EMAIL || 'info@krafficgroup.com',
        replyTo: email || undefined,
        subject: `🔥 New D2C Lead: ${String(name).slice(0, 50)} (${businessType || 'General'})`,
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
        console.error('Resend Error:', error);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead received successfully.',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
