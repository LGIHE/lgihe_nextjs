# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Method 1: Via Vercel Dashboard

1. **Create Vercel Account**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended)

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Import to Vercel**
   - Click "Add New Project"
   - Import your repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

4. **Done!** Site live in ~2 minutes at `your-project.vercel.app`

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd lgihe_nextjs
vercel

# Deploy to production
vercel --prod
```

## 🌐 Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your domain (e.g., `lgihe.ac.ug`)
3. Configure DNS records as instructed
4. SSL certificate auto-generated

## 🔐 Environment Variables

If using API keys or secrets:

1. Go to Project Settings → Environment Variables
2. Add variables for each environment:
   - Production
   - Preview
   - Development
3. Redeploy for changes to take effect

**Example variables:**
```
NEXT_PUBLIC_API_URL=https://api.lgihe.ac.ug
ADMIN_EMAIL=admin@lgihe.ac.ug
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

## 🔄 Automatic Deployments

Once connected to Git:
- **Push to main** → Production deployment
- **Pull requests** → Preview deployments
- **Rollback** → One-click in dashboard

## 🏗️ Build Configuration

Vercel automatically detects Next.js settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

## ⚡ Performance Features

Automatic optimizations:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS/SSL
- ✅ Image optimization
- ✅ Edge caching
- ✅ Compression (Brotli/Gzip)
- ✅ HTTP/2 & HTTP/3

## 🐛 Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Verify `npm run build` works locally
3. Ensure all dependencies in `package.json`
4. Check Node.js version compatibility

### Images Not Loading
1. Images must be in `/public` folder
2. Check `next.config.ts` image domains
3. Use Next.js `<Image>` component

### 404 Errors
1. Verify file structure matches routes
2. Ensure `page.tsx` files exist
3. Check dynamic route syntax `[id]`

### Environment Variables Not Working
1. Redeploy after adding variables
2. Use `NEXT_PUBLIC_` prefix for client-side variables
3. Check variable names match exactly

## 📊 Monitoring

### Vercel Dashboard
- Build logs
- Deployment history
- Performance metrics
- Error tracking

### Analytics
- Visit `/dashboard/analytics` for custom analytics
- Vercel Analytics for visitor stats
- Speed Insights for performance

## 🔒 Security Checklist

Before going live:
- [ ] Environment variables configured
- [ ] Custom domain with SSL
- [ ] API routes secured
- [ ] Rate limiting enabled
- [ ] Error logging configured
- [ ] Backup strategy in place

## 🎯 Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Build succeeds locally
- [ ] Environment variables documented
- [ ] Database migrations ready (if applicable)
- [ ] API endpoints tested
- [ ] Images optimized
- [ ] SEO metadata complete
- [ ] Analytics configured
- [ ] Error tracking setup

## 📈 Post-Deployment

1. **Verify deployment**
   - Test all major pages
   - Check forms and submissions
   - Verify API endpoints
   - Test on mobile devices

2. **Monitor performance**
   - Check Lighthouse scores
   - Review Core Web Vitals
   - Monitor error rates
   - Track user analytics

3. **Set up alerts**
   - Deployment failures
   - Error spikes
   - Performance degradation

## 🆘 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Community**: https://github.com/vercel/next.js/discussions
- **LGIHE IT**: tech@lgihe.ac.ug

---

**Last Updated**: May 5, 2026
