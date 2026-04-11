# Email Setup Guide

This guide explains how to set up email functionality for the LGIHE website using Resend.

## Prerequisites

1. A Resend account (sign up at https://resend.com)
2. A verified domain in Resend (or use their testing domain for development)

## Setup Steps

### 1. Get Your Resend API Key

1. Go to https://resend.com/api-keys
2. Create a new API key
3. Copy the API key (it starts with `re_`)

### 2. Configure Environment Variables

1. Create a `.env.local` file in the root of your project:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### 3. Domain Verification (For Production)

For production use, you need to verify your domain with Resend:

1. Go to https://resend.com/domains
2. Add your domain (e.g., `lgihe.ac.ug`)
3. Add the DNS records provided by Resend to your domain's DNS settings
4. Wait for verification (usually takes a few minutes)

### 4. Update Email Addresses

Once your domain is verified, update the `from` addresses in the API routes:

- `app/api/submit-application/route.ts`
- `app/api/contact/route.ts`

Change from:
```typescript
from: 'LGIHE Applications <noreply@lgihe.ac.ug>'
```

To your verified domain email.

### 5. Testing

#### Development Testing

During development, you can use Resend's testing features:

1. Emails sent to any address will be captured in your Resend dashboard
2. You can view the email content without actually sending them
3. Use the Resend dashboard to preview emails: https://resend.com/emails

#### Local Testing

```bash
npm run dev
```

Then:
1. Fill out the application form at `/admissions/apply`
2. Fill out the contact form at `/contact`
3. Check your Resend dashboard to see the emails

### 6. Vercel Deployment

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add `RESEND_API_KEY` with your API key value
4. Redeploy your application

The environment variable will be automatically available to your API routes.

## Email Features

### Application Form Emails

When someone submits an application:

1. **Email to Admissions (ar@lgihe.ac.ug)**
   - Contains a PDF attachment with all application data
   - Includes a quick summary in the email body
   - Formatted professionally

2. **Email to Applicant**
   - Confirmation of application receipt
   - List of required documents to submit
   - Payment details for application fee
   - Contact information for support

### Contact Form Emails

When someone submits a contact form:

1. **Email to Info (info@lgihe.ac.ug)**
   - Contains all contact form data
   - Formatted for easy reading
   - Reply-to address set to the sender's email

2. **Email to Sender**
   - Confirmation that message was received
   - Expected response time
   - Contact information for urgent matters

## Troubleshooting

### Emails Not Sending

1. Check that `RESEND_API_KEY` is set correctly in `.env.local`
2. Verify your domain is verified in Resend (for production)
3. Check the Resend dashboard for error logs
4. Ensure you're not exceeding Resend's rate limits

### PDF Generation Issues

If PDFs are not generating correctly:

1. Check the browser console for errors
2. Verify all required form fields are filled
3. Check the server logs in Vercel or your terminal

### Domain Verification Issues

If domain verification fails:

1. Double-check DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Use Resend's DNS checker tool
4. Contact Resend support if issues persist

## Rate Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month

For production use, consider upgrading to a paid plan.

## Security Notes

1. Never commit `.env.local` to version control
2. Keep your API key secret
3. Rotate API keys periodically
4. Use environment variables for all sensitive data
5. Monitor your Resend dashboard for unusual activity

## Support

- Resend Documentation: https://resend.com/docs
- Resend Support: https://resend.com/support
- LGIHE Technical Support: tech@lgihe.ac.ug
