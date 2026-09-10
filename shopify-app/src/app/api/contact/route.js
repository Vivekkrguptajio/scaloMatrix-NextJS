import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gkumvivek@gmail.com',
      subject: `New Contact Submission from ${name}`,
      html: `
        <h2>New Contact Request from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
