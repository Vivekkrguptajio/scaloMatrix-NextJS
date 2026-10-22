import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// user text goes into an HTML email, so escape it
const esc = (v = '') =>
  String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      // Set CONTACT_TO_EMAIL (e.g. info@krafficgroup.com) once that domain is verified in Resend
      to: process.env.CONTACT_TO_EMAIL || 'gkumvivek@gmail.com',
      replyTo: email,
      subject: `New Contact Submission from ${String(name).slice(0, 80)}`,
      html: `
        <h2>New Contact Request from Website</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Service Requested:</strong> ${esc(service)}</p>
        <p><strong>Message:</strong></p>
        <p>${esc(message)}</p>
      `
    });

    // Resend reports failures in `error` without throwing — never tell the visitor it was sent when it wasn't
    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
