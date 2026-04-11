// Simple test script to verify Resend API is working
// Run with: node test-resend.js

const { Resend } = require('resend');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const resend = new Resend(process.env.RESEND_API_KEY);

async function testResend() {
  console.log('Testing Resend API...');
  console.log('API Key:', process.env.RESEND_API_KEY ? 'Set (starts with ' + process.env.RESEND_API_KEY.substring(0, 5) + '...)' : 'NOT SET');
  
  try {
    const result = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: 'delivered@resend.dev', // Resend test email
      subject: 'Test Email from LGIHE',
      html: '<p>This is a test email to verify Resend is working!</p>',
    });
    
    console.log('✅ Email sent successfully!');
    console.log('Result:', result);
  } catch (error) {
    console.error('❌ Error sending email:');
    console.error(error);
  }
}

testResend();
