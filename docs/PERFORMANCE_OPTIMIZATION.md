# Performance Optimization Guide for LGIHE Website

## Current Status
- **Lighthouse Score**: 74/100
- **Main Issues**: Image optimization, render-blocking resources, JavaScript bundle size

## Optimizations Implemented

### 1. Font Loading Optimization ✅
**Before**: Google Fonts loaded via CSS `@import` (render-blocking)
**After**: Next.js font optimization with `next/font/google`

**Benefits**:
- Eliminates render-blocking font requests
- Automatic font subsetting
- Self-hosted fonts with optimal caching
- Font display swap for better perceived performance

### 2. Next.js Configuration Enhancements ✅
Added the following optimizations to `next.config.ts`:

```typescript
compiler: {
  removeConsole: process.env.NODE_ENV === 'production',
},
swcMinify: true,
productionBrowserSourceMaps: false,
modularizeImports: {
  'lucide-react': {
    transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
  },
},
```

**Benefits**:
- Removes console logs in production
- Faster minification with SWC
- Smaller bundle size
- Tree-shaking for icon imports

### 3. Hero Component Animation Optimization ✅
**Before**: Complex scale animations on large images
**After**: Simple opacity transitions

**Benefits**:
- Reduced GPU usage
- Smoother animations on mobile devices
- Lower Cumulative Layout Shift (CLS)

### 4. Image Quality Adjustment ✅
**Before**: quality={75}
**After**: quality={85}

**Benefits**:
- Better balance between quality and file size
- AVIF/WebP formats already configured for modern browsers

## Additional Optimizations Needed

### 5. Image Optimization (CRITICAL) 🔴
Your hero images and campus images need to be optimized:

**Action Required**:
1. Compress all images in `/public/images/` folder
2. Use tools like:
   - [Squoosh](https://squoosh.app/) - Online image optimizer
   - [ImageOptim](https://imageoptim.com/) - Mac app
   - [TinyPNG](https://tinypng.com/) - Online PNG/JPEG optimizer

**Target**:
- Hero images: < 200KB each
- Campus images: < 150KB each
- Logo: < 50KB

**Commands** (if you have ImageMagick installed):
```bash
# Install ImageMagick (if not installed)
brew install imagemagick

# Optimize all JPG images
cd public/images
for img in *.jpg; do
  convert "$img" -quality 85 -strip "optimized-$img"
done
```

### 6. Lazy Loading Components 🟡
Consider lazy loading heavy components:

```typescript
// In app/page.tsx
import dynamic from 'next/dynamic';

const CampusGallery = dynamic(() => import('@/components/CampusGallery'), {
  loading: () => <div>Loading...</div>,
});

const EventsSection = dynamic(() => import('@/components/EventsSection'));
```

### 7. Reduce Framer Motion Usage 🟡
Framer Motion adds ~50KB to your bundle. Consider:
- Using CSS animations for simple transitions
- Lazy loading Framer Motion components
- Using `framer-motion/dist/framer-motion` for tree-shaking

### 8. Preconnect to External Domains 🟢
Add to `app/layout.tsx` in the `<head>`:

```tsx
<link rel="preconnect" href="https://admin.lgihe.org" />
<link rel="dns-prefetch" href="https://admin.lgihe.org" />
```

### 9. Add Resource Hints 🟢
For critical resources, add preload hints:

```tsx
<link rel="preload" as="image" href="/images/hero-1.jpg" />
```

### 10. Enable Compression on Vercel 🟢
Vercel automatically enables Brotli compression, but verify in your deployment settings.

## Performance Monitoring

### Vercel Speed Insights
Already installed ✅ - Monitor real user metrics in Vercel dashboard

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## Testing Commands

```bash
# Build for production
npm run build

# Analyze bundle size
npm run build -- --profile

# Test production build locally
npm run start
```

## Lighthouse Testing
Run Lighthouse in:
1. **Incognito mode** (no extensions)
2. **Throttled network** (Slow 4G)
3. **Mobile device** simulation

## Expected Improvements

After implementing all optimizations:
- **Performance Score**: 85-95/100
- **LCP**: 1.5-2.5s (from 3-4s)
- **Total Bundle Size**: Reduced by 20-30%
- **First Contentful Paint**: < 1.5s

## Next Steps

1. ✅ Font optimization (DONE)
2. ✅ Next.js config optimization (DONE)
3. ✅ Animation optimization (DONE)
4. 🔴 **Compress images manually** (CRITICAL - DO THIS NEXT)
5. 🟡 Implement lazy loading for below-fold components
6. 🟡 Consider reducing Framer Motion usage
7. 🟢 Add preconnect hints
8. 🟢 Monitor with Vercel Speed Insights

## Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web.dev Performance](https://web.dev/performance/)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
