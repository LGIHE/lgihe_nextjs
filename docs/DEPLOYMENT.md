# Deploying LGIHE Website to Vercel

## Quick Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket (recommended) or email

2. **Push Your Code to Git** (if not already done)
   ```bash
   cd lgihe
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Click "Add New Project" in Vercel dashboard
   - Import your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Done!** 
   - Your site will be live in ~2 minutes
   - You'll get a URL like: `your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd lgihe
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? Press Enter (uses folder name)
   - Directory? Press Enter (current directory)
   - Override settings? **N**

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Custom Domain Setup

After deployment, you can add your custom domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `lgihe.edu` or `www.lgihe.edu`)
4. Follow DNS configuration instructions
5. Vercel provides free SSL certificates automatically

## Environment Variables (if needed later)

If you add API keys or secrets:
1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy for changes to take effect

## Automatic Deployments

Once connected to Git:
- **Every push to main branch** = automatic production deployment
- **Pull requests** = automatic preview deployments
- **Rollback** = one-click in Vercel dashboard

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally first
- Verify all dependencies are in `package.json`

### Images Not Loading
- Ensure images are in `/public` folder
- Check `next.config.ts` image domains are correct
- Use Next.js `<Image>` component for optimization

### 404 Errors
- Vercel automatically handles Next.js routing
- Check file names match route structure
- Ensure `page.tsx` files exist in route folders

## Performance Tips

Your site will automatically get:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS/SSL
- ✅ Image optimization
- ✅ Edge caching
- ✅ Automatic compression

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Community: https://github.com/vercel/next.js/discussions
