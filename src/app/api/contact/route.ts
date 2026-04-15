// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL || 'arunreddy.co@gmail.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, message, budget, source } = body;

    // Server-side validation
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'arunreddy.co Contact Form <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0057FF; color: white; padding: 16px 24px; border-radius: 12px 12px 0 0;">
            <h2 style="margin: 0; font-size: 18px;">New Project Enquiry</h2>
          </div>
          <div style="background: #fafafa; border: 1px solid #e4e4e7; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #71717a; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #71717a; font-size: 13px;">Company</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 15px;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #71717a; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #0057FF;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #71717a; font-size: 13px;">Budget</td>
                <td style="padding: 8px 0; font-size: 15px;">${budget || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #71717a; font-size: 13px;">Found via</td>
                <td style="padding: 8px 0; font-size: 15px;">${source || 'Not specified'}</td>
              </tr>
            </table>

            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e4e4e7;">
              <p style="color: #71717a; font-size: 13px; margin: 0 0 8px;">Their message:</p>
              <p style="font-size: 15px; line-height: 1.6; color: #09090b; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 20px; padding: 16px; background: #eff4ff; border-radius: 8px; border-left: 3px solid #0057FF;">
              <p style="margin: 0; font-size: 13px; color: #0057FF;">
                💡 Reply directly to this email to respond to ${name}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
