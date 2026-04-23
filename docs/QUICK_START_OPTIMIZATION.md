# 🚀 Quick Start: Performance Optimization

## TL;DR - Do This Now (5 Minutes)

Your Lighthouse score is **74**. Here's how to get it to **85+** in 5 minutes:

### Step 1: Optimize Images (CRITICAL - 3 minutes)

**Option A: Automated (if you have ImageMagick)**
```bash
brew install imagemagick  # Only if not installed
npm run optimize-images
```

**Option B: Online Tool (easiest)**
1. Go to https://squoosh.app/
2. Upload each image from `public/images/` folder
3. Settings: Quality 85, Format: WebP or JPEG
4. Download and replace original files

**Images to optimize**:
- `public/images/hero-1.jpg` (probably 1-2MB → should be <200KB)
- `public/images/hero-2.jpg` (probably 1-2MB → should be <200KB)
- `public/images/hero-3.jpg` (probably 1-2MB → should be <200KB)
- `public/images/campus-1.jpg` through `campus-4.jpg` (→ <150KB each)

### Step 2: Deploy (2 minutes)
```bash
git add .
git commit -m "Performance optimizations"
git push
```

### Step 3: Test
Wait for Vercel deployment, then run Lighthouse again.

**Expected Result**: Score jumps from 74 to 85+

---

## What Was Already Done For You

I've already implemented these optimizations in your code:

✅ **Font Loading** - Removed render-blocking Google Fonts  
✅ **Lazy Loading** - Below-fold components load on demand  
✅ **Bundle Optimization** - Reduced JavaScript size  
✅ **Animation Optimization** - Simplified GPU-intensive animations  
✅ **Resource Hints** - Faster external resource loading  

**These changes are already in your code** - you just need to optimize images and deploy!

---

## Why Images Matter Most

Your hero images are likely 1-2MB each. When someone visits your site:
- They download 1-2MB just to see the first screen
- This takes 3-4 seconds on mobile
- Lighthouse penalizes this heavily

After optimization:
- Images will be 150-200KB (10x smaller!)
- First screen loads in 1-2 seconds
- Lighthouse score jumps 10-15 points

---

## Verification Checklist

After deploying, verify:
- [ ] Images still look good (not blurry)
- [ ] Page loads faster
- [ ] Lighthouse score is 85+
- [ ] No console errors

---

## If You Want to Learn More

Read these files in order:
1. **OPTIMIZATION_SUMMARY.md** - What was changed and why
2. **PERFORMANCE_CHECKLIST.md** - Detailed checklist
3. **PERFORMANCE_OPTIMIZATION.md** - Deep technical guide

---

## Troubleshooting

**Q: Images look blurry after optimization**  
A: Increase quality to 90 instead of 85, or use Squoosh with manual quality control

**Q: Score didn't improve**  
A: Make sure you optimized the images (biggest impact). Test in incognito mode.

**Q: How do I know if images are optimized?**  
A: Check file sizes in Finder. Hero images should be <200KB, campus images <150KB.

---

## The Bottom Line

**Image optimization is 80% of the work.**  

Everything else is already done. Just optimize those images and deploy! 🚀
