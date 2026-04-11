import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { renderToBuffer } from '@react-pdf/renderer';
import { ApplicationPDF } from '@/lib/pdf-generator';

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

    const formData = await request.json();

    // Generate PDF
    const pdfBuffer = await renderToBuffer(<ApplicationPDF data={formData} />);

    // Email to admissions with PDF attachment
    await resend.emails.send({
      from: 'LGIHE Applications <noreply@lgihe.org>',
      to: 'ar@lgihe.ac.ug',
      subject: `New Application: ${formData.surname} ${formData.givenName} - ${formData.programmeChoice1}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3d4d6f;">New Application Received</h2>
          <p>A new application has been submitted. Please find the details in the attached PDF.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #3d4d6f;">Quick Summary</h3>
            <p><strong>Applicant:</strong> ${formData.surname} ${formData.givenName} ${formData.otherNames}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Programme Type:</strong> ${formData.programmeType}</p>
            <p><strong>First Choice:</strong> ${formData.programmeChoice1}</p>
            ${formData.programmeChoice2 ? `<p><strong>Second Choice:</strong> ${formData.programmeChoice2}</p>` : ''}
            <p><strong>Study Mode:</strong> ${formData.studyMode}</p>
            <p><strong>Intake:</strong> ${formData.intakeSession}</p>
          </div>
          
          <p style="color: #666; font-size: 12px;">
            Submitted on: ${new Date().toLocaleString('en-GB', { 
              dateStyle: 'full', 
              timeStyle: 'short' 
            })}
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `Application_${formData.surname}_${formData.givenName}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    // Email to applicant with instructions
    await resend.emails.send({
      from: 'LGIHE Admissions <noreply@lgihe.org>',
      to: formData.email,
      subject: 'Application Received - Luigi Giussani Institute of Higher Education',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #3d4d6f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Luigi Giussani Institute of Higher Education</h1>
          </div>
          
          <div style="padding: 20px;">
            <h2 style="color: #3d4d6f;">Dear ${formData.givenName},</h2>
            
            <p>Thank you for submitting your application to Luigi Giussani Institute of Higher Education!</p>
            
            <p>We have successfully received your application for <strong>${formData.programmeChoice1}</strong>.</p>
            
            <div style="background-color: #f0f7ff; border-left: 4px solid #3d4d6f; padding: 15px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #3d4d6f;">Next Steps</h3>
              <ol style="line-height: 1.8;">
                <li>Pay the application fee (details below)</li>
                <li>Prepare and submit the required documents</li>
                <li>Wait for our admissions team to review your application</li>
                <li>You will receive a response within 2-3 weeks</li>
              </ol>
            </div>
            
            <div style="background-color: #fff9e6; border: 1px solid #ffd700; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #3d4d6f;">📋 Required Documents</h3>
              <p>Please prepare and submit the following documents to complete your application:</p>
              <ul style="line-height: 1.8;">
                <li><strong>Application Fee Payment Slip</strong> (see payment details below)</li>
                <li>Certified copies of O-Level certificates</li>
                <li>Certified copies of A-Level certificates</li>
                <li>Copy of National ID or Passport</li>
                <li>Two recent passport-size photographs</li>
                <li>Birth certificate (certified copy)</li>
                ${formData.otherQualifications.length > 0 ? '<li>Copies of other qualifications mentioned in your application</li>' : ''}
                ${formData.currentEmployment === 'yes' ? '<li>Letter from current employer (if employed)</li>' : ''}
              </ul>
            </div>
            
            <div style="background-color: #e8f5e9; border: 1px solid #4caf50; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #2e7d32;">💰 Application Fee Payment</h3>
              <p><strong>Amount:</strong> UGX 50,000</p>
              <p><strong>Bank Details:</strong></p>
              <ul style="list-style: none; padding-left: 0;">
                <li>Bank: Bank Of Africa</li>
                <li>Account Name: Luigi Giussani Institute of Higher Education</li>
                <li>Account Number: 9133750003</li>
                <li>Branch: Luzira</li>
              </ul>
              <p style="color: #d32f2f; font-weight: bold;">
                ⚠️ Important: Please keep your payment slip and submit it with your documents
              </p>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #3d4d6f;">📍 Document Submission</h3>
              <p>You can submit your documents in person or by post:</p>
              <p>
                <strong>Luigi Giussani Institute of Higher Education</strong><br>
                Admissions Office<br>
                Sentamu Road 822-829, Luzira<br>
                Along Port Bell Road<br>
                Kampala, Uganda
              </p>
              <p><strong>Office Hours:</strong> Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
            
            <div style="background-color: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <h3 style="margin-top: 0;">📞 Need Help?</h3>
              <p>If you have any questions, please contact our admissions office:</p>
              <p>
                <strong>Email:</strong> ar@lgihe.ac.ug<br>
                <strong>Phone:</strong> (+256) 414 222 517
              </p>
            </div>
            
            <p>We look forward to welcoming you to LGIHE!</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>Admissions Office</strong><br>
              Luigi Giussani Institute of Higher Education
            </p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
            <p>Luigi Giussani Institute of Higher Education</p>
            <p>Sentamu Road 822-829, Luzira | (+256) 414 222 517 | info@lgihe.ac.ug</p>
            <p>www.lgihe.ac.ug</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
