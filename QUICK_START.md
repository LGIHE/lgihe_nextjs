# Quick Start Guide - Email Functionality

Get the email functionality up and running in 5 minutes!

## Step 1: Install Dependencies (Already Done)

The required packages are already installed:
- `resend` - Email sending service
- `@react-pdf/renderer` - PDF generation

## Step 2: Get Your Resend API Key

1. Go to https://resend.com and sign up (it's free!)
2. Verify your email address
3. Go to https://resend.com/api-keys
4. Click "Create API Key"
5. Give it a name (e.g., "LGIHE Development")
6. Copy the API key (starts with `re_`)

## Step 3: Set Up Environment Variable

1. Create a `.env.local` file in the root of your project:
   ```bash
   touch .env.local
   ```

2. Add your API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. Save the file

## Step 4: Start the Development Server

```bash
npm run dev
```

## Step 5: Test It Out!

### Test Application Form
1. Open http://localhost:3000/admissions/apply
2. Fill out the form
3. Submit it
4. Check your Resend dashboard at https://resend.com/emails
5. You should see two emails:
   - One to ar@lgihe.ac.ug (with PDF attachment)
   - One to the email you entered in the form

### Test Contact Form
1. Open http://localhost:3000/contact
2. Fill out the form
3. Submit it
4. Check your Resend dashboard
5. You should see two emails:
   - One to info@lgihe.ac.ug
   - One to the email you entered in the form

## That's It! 🎉

You now have fully functional email sending for both forms!

## What Happens When You Submit?

### Application Form
1. Form data is sent to `/api/submit-application`
2. A PDF is generated with all the application data
3. Email #1 is sent to ar@lgihe.ac.ug with the PDF attached
4. Email #2 is sent to the applicant with:
   - Confirmation of submission
   - List of required documents
   - Payment details
   - Next steps
5. Success modal shows with all the information

### Contact Form
1. Form data is sent to `/api/contact`
2. Email #1 is sent to info@lgihe.ac.ug with the message
3. Email #2 is sent to the sender with confirmation
4. Success message shows at the top of the page

## Viewing Sent Emails

During development, all emails are captured in your Resend dashboard:

1. Go to https://resend.com/emails
2. Click on any email to view:
   - Email content (HTML preview)
   - Recipients
   - Delivery status
   - Attachments (for application emails)

## Next Steps

### For Production Deployment

1. **Verify Your Domain**
   - Go to https://resend.com/domains
   - Add lgihe.ac.ug
   - Add the DNS records to your domain
   - Wait for verification

2. **Update Email Addresses**
   - Edit `app/api/submit-application/route.ts`
   - Edit `app/api/contact/route.ts`
   - Change `from` addresses to use your verified domain

3. **Deploy to Vercel**
   - See `VERCEL_DEPLOYMENT.md` for detailed instructions
   - Add `RESEND_API_KEY` to Vercel environment variables
   - Deploy!

## Troubleshooting

### "RESEND_API_KEY is not defined"
- Make sure `.env.local` exists in the root directory
- Make sure the API key is correct
- Restart the development server

### Emails Not Showing in Dashboard
- Check that you're logged into the correct Resend account
- Verify the API key is correct
- Check the browser console for errors

### PDF Not Generating
- Check the browser console for errors
- Make sure all required form fields are filled
- Check the server terminal for errors

## Need Help?

- Read `EMAIL_SETUP.md` for detailed setup instructions
- Read `IMPLEMENTATION_SUMMARY.md` for technical details
- Check Resend documentation: https://resend.com/docs
- Contact: tech@lgihe.ac.ug

## Testing Checklist

- [ ] Created `.env.local` file
- [ ] Added RESEND_API_KEY
- [ ] Started development server
- [ ] Tested application form
- [ ] Received email to ar@lgihe.ac.ug
- [ ] Received email to applicant
- [ ] PDF attachment is correct
- [ ] Tested contact form
- [ ] Received email to info@lgihe.ac.ug
- [ ] Received confirmation email
- [ ] All emails display correctly

## Pro Tips

1. **Use Test Emails**
   - During development, use your own email addresses
   - This way you can see exactly what applicants will receive

2. **Check Spam Folders**
   - Sometimes emails might go to spam
   - Mark them as "Not Spam" to improve deliverability

3. **Monitor Your Dashboard**
   - Keep an eye on your Resend dashboard
   - Check for any delivery issues
   - Monitor your usage (free tier: 100 emails/day)

4. **Test Thoroughly**
   - Test with different form data
   - Test with long messages
   - Test with special characters
   - Make sure everything looks good!

---

**Ready to go?** Start your development server and test it out! 🚀
