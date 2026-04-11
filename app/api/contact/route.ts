import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    // Validate API key at runtime
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'placeholder_for_build') {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, message: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email to info@lgihe.ac.ug
    await resend.emails.send({
      from: 'LGIHE Contact Form <noreply@lgihe.org>',
      to: 'info@lgihe.ac.ug',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #3d4d6f; color: white; padding: 20px;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: white; padding: 20px; border-radius: 5px; margin-bottom: 15px;">
              <h3 style="color: #3d4d6f; margin-top: 0;">Contact Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
                  <td style="padding: 8px 0;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 5px;">
              <h3 style="color: #3d4d6f; margin-top: 0;">Message</h3>
              <div style="line-height: 1.6; color: #333;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 15px; padding: 15px; background-color: #fff9e6; border-left: 4px solid #ffd700; border-radius: 3px;">
              <p style="margin: 0; font-size: 14px;">
                <strong>💡 Tip:</strong> You can reply directly to this email to respond to ${name}
              </p>
            </div>
          </div>
          
          <div style="padding: 15px; text-align: center; font-size: 12px; color: #666; background-color: #f5f5f5;">
            <p style="margin: 5px 0;">Submitted on: ${new Date().toLocaleString('en-GB', { 
              dateStyle: 'full', 
              timeStyle: 'short' 
            })}</p>
            <p style="margin: 5px 0;">Luigi Giussani Institute of Higher Education</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error sending contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
