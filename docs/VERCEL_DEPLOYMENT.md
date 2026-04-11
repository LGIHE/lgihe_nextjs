# Vercel Deployment Guide for LGIHE Website

This guide will help you deploy the LGIHE website to Vercel with email functionality.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. A Resend account with API key (see EMAIL_SETUP.md)
3. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect Your Repository to Vercel

1. Go to https://vercel.com/new
2. Import your Git repository
3. Select the repository containing the LGIHE website
4. Vercel will automatically detect it's a Next.js project

### 2. Configure Environment Variables

Before deploying, add your environment variables:

1. In the Vercel import screen, expand "Environment Variables"
2. Add the following variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (starts with `re_`)
   - **Environment:** Select all (Production, Preview, Development)

3. Click "Add" to save the variable

### 3. Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a URL like `https://your-project.vercel.app`

### 4. Configure Custom Domain (Optional)

To use your custom domain (e.g., lgihe.ac.ug):

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions provided by Vercel
5. Wait for DNS propagation (can take up to 48 hours)

### 5. Verify Email Functionality

After deployment:

1. Visit your deployed site
2. Test the application form at `/admissions/apply`
3. Test the contact form at `/contact`
4. Check your Resend dashboard to verify emails are being sent
5. Check the recipient email addresses (ar@lgihe.ac.ug and info@lgihe.ac.ug)

## Important Configuration for Production

### Update Email Domain

Once you have your domain verified with Resend:

1. Update the `from` addresses in:
   - `app/api/submit-application/route.ts`
   - `app/api/contact/route.ts`

2. Change from testing addresses to your verified domain:
   ```typescript
   from: 'LGIHE Applications <noreply@lgihe.ac.ug>'
   ```

3. Commit and push the changes
4. Vercel will automatically redeploy

### Verify Recipient Email Addresses

Make sure these email addresses are set up and monitored:
- `ar@lgihe.ac.ug` - Receives application submissions
- `info@lgihe.ac.ug` - Receives contact form messages

## Vercel Environment Variables Management

### Adding Variables After Deployment

1. Go to your project in Vercel dashboard
2. Click "Settings"
3. Navigate to "Environment Variables"
4. Add or edit variables
5. Redeploy for changes to take effect

### Environment Types

- **Production:** Used for your main domain
- **Preview:** Used for preview deployments (pull requests)
- **Development:** Used when running `vercel dev` locally

## Monitoring and Logs

### View Deployment Logs

1. Go to your project in Vercel
2. Click on "Deployments"
3. Select a deployment
4. View the build and runtime logs

### View Function Logs (API Routes)

1. Go to your project in Vercel
2. Click on "Functions"
3. Select a function (e.g., `/api/submit-application`)
4. View real-time logs and errors

### Monitor Email Delivery

1. Go to your Resend dashboard
2. Navigate to "Emails"
3. View sent emails, delivery status, and any errors

## Troubleshooting

### Build Failures

If your build fails:

1. Check the build logs in Vercel
2. Ensure all dependencies are in `package.json`
3. Verify TypeScript types are correct
4. Check for any missing environment variables

### Email Not Sending

If emails aren't sending in production:

1. Verify `RESEND_API_KEY` is set in Vercel environment variables
2. Check Resend dashboard for error logs
3. Verify your domain is verified in Resend
4. Check function logs in Vercel for errors

### 500 Internal Server Error

If you get 500 errors on form submission:

1. Check Vercel function logs
2. Verify environment variables are set correctly
3. Check Resend API key is valid
4. Ensure recipient email addresses are correct

## Performance Optimization

### Edge Functions

The API routes are automatically deployed as serverless functions. For better performance:

1. Keep API routes lightweight
2. Use edge runtime where possible
3. Monitor function execution time in Vercel dashboard

### Caching

Vercel automatically caches static assets. For dynamic content:

1. Use Next.js ISR (Incremental Static Regeneration) where appropriate
2. Configure cache headers for API routes if needed

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Rotate API keys regularly** - Update in Vercel settings
3. **Use environment variables** - Never hardcode sensitive data
4. **Monitor usage** - Check Resend and Vercel dashboards regularly
5. **Set up alerts** - Configure Vercel to notify you of deployment failures

## Automatic Deployments

Vercel automatically deploys when you push to your repository:

- **Main branch** → Production deployment
- **Other branches** → Preview deployments
- **Pull requests** → Preview deployments with unique URLs

## Rollback

If you need to rollback to a previous version:

1. Go to "Deployments" in Vercel
2. Find the previous working deployment
3. Click the three dots menu
4. Select "Promote to Production"

## Cost Considerations

### Vercel Pricing

- **Hobby (Free):** 
  - 100 GB bandwidth
  - 100 hours serverless function execution
  - Unlimited deployments

- **Pro ($20/month):**
  - 1 TB bandwidth
  - 1000 hours serverless function execution
  - Advanced analytics

### Resend Pricing

- **Free:**
  - 100 emails/day
  - 3,000 emails/month

- **Paid plans:** Start at $20/month for higher volumes

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs
- Resend Documentation: https://resend.com/docs

## Post-Deployment Checklist

- [ ] Website is accessible at the deployed URL
- [ ] Application form submits successfully
- [ ] Contact form submits successfully
- [ ] Emails are received at ar@lgihe.ac.ug
- [ ] Emails are received at info@lgihe.ac.ug
- [ ] Applicants receive confirmation emails
- [ ] Contact form senders receive confirmation emails
- [ ] PDF attachments are generated correctly
- [ ] All pages load without errors
- [ ] Custom domain is configured (if applicable)
- [ ] SSL certificate is active (automatic with Vercel)
- [ ] Environment variables are set correctly
- [ ] Monitoring is set up in Vercel and Resend dashboards
