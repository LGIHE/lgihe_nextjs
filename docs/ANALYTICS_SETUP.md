# Analytics Dashboard Setup Guide

## Overview

Your website now includes comprehensive analytics tracking and an admin dashboard to monitor website performance, user behavior, and errors.

## Features Implemented

### 1. Image Loading Effects
- All images (except hero images) now have smooth loading animations
- Skeleton loaders with shimmer effects during image load
- Graceful error handling for missing images
- Progressive image loading for better UX

### 2. Analytics Dashboard
Access the dashboard at: `/dashboard/analytics`

**Features:**
- Real-time visitor tracking
- Page view statistics
- Error logging and monitoring
- Event tracking (button clicks, form submissions, etc.)
- Severity-based error categorization
- Historical data visualization

**Dashboard Sections:**
- **Overview**: Summary statistics and trends
- **Errors**: Detailed error logs with stack traces
- **Events**: User interaction tracking

### 3. SEO Optimization

**Implemented:**
- ✅ Comprehensive meta tags (Open Graph, Twitter Cards)
- ✅ Structured data (JSON-LD) for search engines
- ✅ Dynamic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration (`/robots.txt`)
- ✅ Canonical URLs
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast page load times with Next.js optimization
- ✅ Image optimization with modern formats (AVIF, WebP)

**Vercel Analytics Integration:**
- Automatic visitor tracking
- Performance monitoring
- Speed insights
- Core Web Vitals tracking

## Usage

### Accessing the Dashboard

1. Navigate to `/dashboard/analytics` in your browser
2. View real-time statistics and logs
3. Monitor errors and user interactions
4. Data refreshes automatically every 30 seconds

### Tracking Custom Events

Add custom event tracking in your components:

```typescript
import { trackButtonClick, trackPageView, trackFormSubmission } from '@/lib/analytics';

// Track button clicks
trackButtonClick('Apply Now', 'Homepage Hero');

// Track page views
trackPageView('Admissions Page');

// Track form submissions
trackFormSubmission('Contact Form', true);
```

### Logging Custom Errors

```typescript
import { logCustomError } from '@/lib/analytics';

try {
  // Your code
} catch (error) {
  logCustomError('Failed to submit form', 'high');
}
```

## Data Storage

- Analytics data is stored locally in `/logs` directory
- Error logs: `/logs/errors.json` (max 1000 entries)
- Event logs: `/logs/events.json` (max 5000 entries)
- Logs are automatically rotated to prevent excessive storage

## Security

The dashboard is currently accessible to anyone. To secure it:

1. Add authentication middleware
2. Restrict access to admin users only
3. Consider using environment variables for sensitive data

### Recommended: Add Authentication

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Add your authentication logic here
    const isAuthenticated = checkAuth(request);
    
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}
```

## SEO Best Practices

### Update Before Launch

1. **Update Google Verification Code**
   - File: `app/layout.tsx`
   - Replace `"your-google-verification-code"` with your actual code from Google Search Console

2. **Update Contact Information**
   - File: `components/StructuredData.tsx`
   - Add actual phone number and verify email address

3. **Add Social Media Links**
   - File: `components/StructuredData.tsx`
   - Update with actual social media profile URLs

4. **Create OG Image**
   - Create an image at `/public/images/og-image.jpg`
   - Recommended size: 1200x630px
   - Should represent your institution well

### Submit to Search Engines

After deployment:

1. **Google Search Console**
   - Submit your sitemap: `https://lgihe.ac.ug/sitemap.xml`
   - Verify ownership using the verification code

2. **Bing Webmaster Tools**
   - Submit your sitemap
   - Verify ownership

3. **Monitor Performance**
   - Check indexing status regularly
   - Monitor Core Web Vitals
   - Review search performance

## Vercel Deployment

When deployed to Vercel, you'll automatically get:

1. **Vercel Analytics Dashboard**
   - Access via Vercel dashboard
   - Real-time visitor data
   - Geographic distribution
   - Referrer tracking

2. **Speed Insights**
   - Core Web Vitals monitoring
   - Performance scores
   - Optimization recommendations

## Monitoring Checklist

- [ ] Check dashboard daily for critical errors
- [ ] Review weekly analytics trends
- [ ] Monitor page load performance
- [ ] Check for broken links or images
- [ ] Review user behavior patterns
- [ ] Update content based on popular pages
- [ ] Fix high-severity errors immediately

## Performance Tips

1. **Image Optimization**
   - Use WebP/AVIF formats
   - Implement lazy loading (already done)
   - Compress images before upload

2. **Code Optimization**
   - Minimize JavaScript bundles
   - Use dynamic imports for large components
   - Enable caching strategies

3. **SEO Maintenance**
   - Update content regularly
   - Add new pages to sitemap
   - Monitor search rankings
   - Build quality backlinks

## Support

For issues or questions:
- Check error logs in the dashboard
- Review browser console for client-side errors
- Monitor Vercel deployment logs
- Check Next.js documentation for framework-specific issues

## Next Steps

1. Deploy to production
2. Set up authentication for dashboard
3. Configure Google Search Console
4. Add actual contact information
5. Create OG image
6. Monitor analytics regularly
7. Optimize based on user behavior data
