# 📋 Deployment Checklist

Use this checklist to ensure everything is set up correctly before going live.

## Pre-Deployment Setup

### 1. Resend Account Setup
- [ ] Created Resend account at https://resend.com
- [ ] Verified email address
- [ ] Created API key
- [ ] Saved API key securely

### 2. Local Development Setup
- [ ] Created `.env.local` file
- [ ] Added `RESEND_API_KEY` to `.env.local`
- [ ] Installed dependencies (`npm install`)
- [ ] Started dev server (`npm run dev`)

### 3. Local Testing
- [ ] Tested application form submission
- [ ] Verified email sent to ar@lgihe.ac.ug
- [ ] Verified email sent to applicant
- [ ] Checked PDF attachment is correct
- [ ] Verified all application data in PDF
- [ ] Tested contact form submission
- [ ] Verified email sent to info@lgihe.ac.ug
- [ ] Verified confirmation email to sender
- [ ] Checked all emails display correctly
- [ ] Verified success modals/messages work

## Email Configuration

### 4. Email Addresses Setup
- [ ] Confirmed ar@lgihe.ac.ug is active and monitored
- [ ] Confirmed info@lgihe.ac.ug is active and monitored
- [ ] Set up email forwarding if needed
- [ ] Tested receiving emails at both addresses

### 5. Domain Verification (For Production)
- [ ] Added lgihe.ac.ug to Resend domains
- [ ] Added DNS records to domain provider
- [ ] Waited for DNS propagation (24-48 hours)
- [ ] Verified domain in Resend dashboard
- [ ] Updated `from` addresses in API routes to use verified domain

## Content Verification

### 6. Document Requirements
- [ ] Verified application fee amount (UGX 50,000)
- [ ] Confirmed bank details are correct:
  - [ ] Bank name: Stanbic Bank Uganda
  - [ ] Account name: Luigi Giussani Institute of Higher Education
  - [ ] Account number: 9030006791234
  - [ ] Branch: Kampala Road
- [ ] Verified document list is complete
- [ ] Confirmed submission address is correct
- [ ] Verified office hours are accurate

### 7. Contact Information
- [ ] Phone number is correct: (+256) 414 222 517
- [ ] Email addresses are correct
- [ ] Physical address is accurate
- [ ] Office hours are up to date
- [ ] Map location is correct

## Vercel Deployment

### 8. Vercel Account Setup
- [ ] Created Vercel account
- [ ] Connected Git repository
- [ ] Imported project to Vercel

### 9. Environment Variables
- [ ] Added `RESEND_API_KEY` to Vercel
- [ ] Set for all environments (Production, Preview, Development)
- [ ] Verified variable is saved

### 10. Initial Deployment
- [ ] Deployed to Vercel
- [ ] Build completed successfully
- [ ] No build errors
- [ ] Deployment URL is accessible

### 11. Production Testing
- [ ] Visited deployed site
- [ ] Tested application form on production
- [ ] Verified emails sent successfully
- [ ] Checked PDF attachment
- [ ] Tested contact form on production
- [ ] Verified all emails received
- [ ] Checked email formatting on mobile
- [ ] Tested on different browsers

## Domain Configuration (Optional)

### 12. Custom Domain Setup
- [ ] Added custom domain in Vercel
- [ ] Updated DNS records
- [ ] Waited for DNS propagation
- [ ] Verified SSL certificate is active
- [ ] Tested site on custom domain

## Monitoring Setup

### 13. Resend Monitoring
- [ ] Bookmarked Resend dashboard
- [ ] Set up email notifications for issues
- [ ] Checked rate limits
- [ ] Reviewed pricing plan

### 14. Vercel Monitoring
- [ ] Bookmarked Vercel dashboard
- [ ] Set up deployment notifications
- [ ] Reviewed function logs
- [ ] Checked analytics

## Documentation

### 15. Team Documentation
- [ ] Shared `QUICK_START.md` with team
- [ ] Shared `EMAIL_SETUP.md` with technical team
- [ ] Shared `DOCUMENT_REQUIREMENTS.md` with admissions team
- [ ] Documented API key location (securely)
- [ ] Created runbook for common issues

### 16. User Communication
- [ ] Updated website with new application process
- [ ] Notified admissions team about new system
- [ ] Trained staff on receiving and processing emails
- [ ] Created FAQ for applicants

## Security

### 17. Security Checklist
- [ ] `.env.local` is in `.gitignore`
- [ ] API key is not committed to repository
- [ ] Environment variables are secure in Vercel
- [ ] Access to Resend account is restricted
- [ ] Access to Vercel account is restricted
- [ ] Regular API key rotation scheduled

## Backup Plan

### 18. Contingency Planning
- [ ] Documented manual application process
- [ ] Created backup email addresses
- [ ] Set up monitoring alerts
- [ ] Documented rollback procedure
- [ ] Created support contact list

## Post-Deployment

### 19. First Week Monitoring
- [ ] Monitor email delivery daily
- [ ] Check for spam folder issues
- [ ] Review Resend dashboard daily
- [ ] Check Vercel function logs
- [ ] Collect user feedback

### 20. Ongoing Maintenance
- [ ] Schedule weekly email delivery checks
- [ ] Review monthly usage statistics
- [ ] Update documentation as needed
- [ ] Monitor for errors or issues
- [ ] Plan for scaling if needed

## Troubleshooting Preparation

### 21. Common Issues Documented
- [ ] Created troubleshooting guide
- [ ] Documented common error messages
- [ ] Listed support contacts
- [ ] Created escalation procedure

## Final Checks

### 22. Pre-Launch Verification
- [ ] All forms work correctly
- [ ] All emails are being received
- [ ] PDF generation works
- [ ] Success messages display
- [ ] Error handling works
- [ ] Mobile responsive
- [ ] Cross-browser compatible

### 23. Stakeholder Sign-Off
- [ ] Admissions team approved
- [ ] IT team approved
- [ ] Management approved
- [ ] Legal/compliance approved (if required)

## Launch Day

### 24. Go Live
- [ ] Announced new system to users
- [ ] Monitoring dashboards open
- [ ] Support team ready
- [ ] Backup plan ready
- [ ] Celebration planned! 🎉

## Post-Launch (First 24 Hours)

### 25. Immediate Monitoring
- [ ] Checked first application submission
- [ ] Verified emails received
- [ ] Confirmed PDF quality
- [ ] Monitored for errors
- [ ] Collected initial feedback

### 26. First Week Review
- [ ] Reviewed all submissions
- [ ] Checked email delivery rate
- [ ] Analyzed any issues
- [ ] Made necessary adjustments
- [ ] Documented lessons learned

## Success Metrics

### 27. Track These Metrics
- [ ] Number of applications submitted
- [ ] Email delivery success rate
- [ ] Average response time
- [ ] User satisfaction
- [ ] System uptime
- [ ] Error rate

## Continuous Improvement

### 28. Regular Reviews
- [ ] Monthly system review scheduled
- [ ] Quarterly feature review scheduled
- [ ] Annual security audit scheduled
- [ ] User feedback collection process
- [ ] Documentation update schedule

---

## Quick Reference

### Important Links
- Resend Dashboard: https://resend.com/emails
- Vercel Dashboard: https://vercel.com/dashboard
- Documentation: See README_EMAIL_IMPLEMENTATION.md

### Support Contacts
- Technical Issues: tech@lgihe.ac.ug
- Admissions: ar@lgihe.ac.ug
- General: info@lgihe.ac.ug

### Emergency Contacts
- Resend Support: https://resend.com/support
- Vercel Support: https://vercel.com/support

---

**Status:** [ ] Not Started | [ ] In Progress | [ ] Complete

**Deployment Date:** _______________

**Deployed By:** _______________

**Verified By:** _______________

**Notes:**
_____________________________________________
_____________________________________________
_____________________________________________
