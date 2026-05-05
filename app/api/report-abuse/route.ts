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

    const formData = await request.json();

    // Validate required fields
    if (!formData.incidentType || !formData.incidentDate || !formData.incidentLocation || 
        !formData.personsInvolved || !formData.detailedDescription) {
      return NextResponse.json(
        { success: false, message: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // Generate a unique report ID for tracking
    const reportId = `ABR-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const submissionDate = new Date().toLocaleString('en-GB', { 
      dateStyle: 'full', 
      timeStyle: 'short' 
    });

    // Determine if this is an anonymous report
    const isAnonymous = formData.anonymousReport || (!formData.reporterName && !formData.reporterEmail);

    // Build the email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #f5f5f5;">
        <!-- Header -->
        <div style="background-color: #dc2626; color: white; padding: 30px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">⚠️ CONFIDENTIAL ABUSE REPORT</h1>
          <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">This report requires immediate attention</p>
        </div>
        
        <!-- Report ID Banner -->
        <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 20px;">
          <p style="margin: 0; font-size: 14px; color: #92400e;">
            <strong>Report ID:</strong> <span style="font-family: monospace; font-size: 16px;">${reportId}</span><br>
            <strong>Submitted:</strong> ${submissionDate}<br>
            <strong>Report Type:</strong> ${isAnonymous ? '🔒 Anonymous Report' : '📋 Identified Report'}
          </p>
        </div>

        <div style="padding: 20px;">
          ${!isAnonymous ? `
          <!-- Reporter Information -->
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #3d4d6f; margin-top: 0; border-bottom: 2px solid #3d4d6f; padding-bottom: 10px;">
              👤 Reporter Information
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #4b5563;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.reporterName || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  ${formData.reporterEmail ? `<a href="mailto:${formData.reporterEmail}" style="color: #3d4d6f;">${formData.reporterEmail}</a>` : 'Not provided'}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.reporterPhone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Relationship:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.reporterRelationship || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Preferred Contact:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.preferredContact || 'Not specified'}</td>
              </tr>
            </table>
          </div>
          ` : `
          <!-- Anonymous Report Notice -->
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-left: 4px solid #6366f1;">
            <h2 style="color: #3d4d6f; margin-top: 0;">
              🔒 Anonymous Report
            </h2>
            <p style="margin: 0; color: #4b5563;">
              This report was submitted anonymously. No contact information was provided by the reporter.
            </p>
          </div>
          `}

          <!-- Incident Details -->
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #dc2626; margin-top: 0; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
              🚨 Incident Details
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #4b5563;">Type of Incident:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <span style="background-color: #fee2e2; color: #991b1b; padding: 4px 12px; border-radius: 12px; font-weight: 600;">
                    ${formData.incidentType}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Date of Incident:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.incidentDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Location:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.incidentLocation}</td>
              </tr>
            </table>
          </div>

          <!-- Persons Involved -->
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">👥 Person(s) Involved</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; border-left: 3px solid #3d4d6f;">
              <p style="margin: 0; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${formData.personsInvolved}</p>
            </div>
          </div>

          <!-- Detailed Description -->
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">📝 Detailed Description</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; border-left: 3px solid #3d4d6f;">
              <p style="margin: 0; line-height: 1.8; color: #1f2937; white-space: pre-wrap;">${formData.detailedDescription}</p>
            </div>
          </div>

          ${formData.witnessesPresent ? `
          <!-- Witnesses -->
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">👁️ Witnesses Present</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; border-left: 3px solid #3d4d6f;">
              <p style="margin: 0; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${formData.witnessesPresent}</p>
            </div>
          </div>
          ` : ''}

          ${formData.previouslyReported ? `
          <!-- Previous Reports -->
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">📋 Previously Reported</h3>
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 4px; border-left: 3px solid #f59e0b;">
              <p style="margin: 0; line-height: 1.6; color: #78350f; white-space: pre-wrap;">${formData.previouslyReported}</p>
            </div>
          </div>
          ` : ''}

          ${formData.evidenceAvailable ? `
          <!-- Evidence -->
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">📎 Evidence Available</h3>
            <div style="background-color: #dbeafe; padding: 15px; border-radius: 4px; border-left: 3px solid #2563eb;">
              <p style="margin: 0; line-height: 1.6; color: #1e3a8a; white-space: pre-wrap;">${formData.evidenceAvailable}</p>
            </div>
          </div>
          ` : ''}

          <!-- Action Required Notice -->
          <div style="background-color: #fef2f2; border: 2px solid #dc2626; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #dc2626; margin-top: 0; font-size: 18px; display: flex; align-items: center;">
              ⚠️ IMMEDIATE ACTION REQUIRED
            </h3>
            <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #7f1d1d; line-height: 1.8;">
              <li>Review this report immediately and assess the severity</li>
              <li>Contact the safeguarding team and relevant authorities</li>
              <li>Document all actions taken in response to this report</li>
              <li>Ensure confidentiality is maintained throughout the process</li>
              ${!isAnonymous && formData.reporterEmail ? `<li>Follow up with the reporter within 24-48 hours</li>` : ''}
            </ul>
          </div>

          <!-- Confidentiality Notice -->
          <div style="background-color: #1f2937; color: white; padding: 20px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 12px; line-height: 1.6;">
              <strong>⚠️ CONFIDENTIAL DOCUMENT ⚠️</strong><br>
              This report contains sensitive information and must be handled in accordance with LGIHE's safeguarding policies 
              and data protection regulations. Unauthorized disclosure or distribution is strictly prohibited.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #3d4d6f; color: white; padding: 20px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">Luigi Giussani Institute of Higher Education</p>
          <p style="margin: 5px 0;">Safeguarding & Student Welfare Department</p>
          <p style="margin: 5px 0;">Email: safeguarding@lgihe.ac.ug | Emergency: (+256) 414 222 517</p>
        </div>
      </div>
    `;

    // Send email to safeguarding team
    await resend.emails.send({
      from: 'LGIHE Safeguarding <noreply@lgihe.org>',
      to: 'safeguarding@lgihe.ac.ug',
      replyTo: formData.reporterEmail || 'safeguarding@lgihe.ac.ug',
      subject: `🚨 URGENT: Abuse Report [${reportId}] - ${formData.incidentType}`,
      html: emailHtml,
    });

    // Log the report submission (without sensitive details)
    console.log(`Abuse report submitted: ${reportId} - Type: ${formData.incidentType} - Anonymous: ${isAnonymous}`);

    return NextResponse.json({ 
      success: true, 
      message: 'Report submitted successfully',
      reportId: reportId 
    });
  } catch (error) {
    console.error('Error submitting abuse report:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit report' },
      { status: 500 }
    );
  }
}
