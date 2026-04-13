# System Architecture

## Overview

This document explains how all the new features work together.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         User's Browser                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Website    │  │   Images     │  │  Dashboard   │        │
│  │    Pages     │  │  (Loading)   │  │  (Analytics) │        │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘        │
│         │                  │                  │                 │
│         └──────────────────┴──────────────────┘                │
│                            │                                    │
└────────────────────────────┼────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    AnalyticsProvider                            │
│              (Tracks page views automatically)                  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Analytics Service                          │
│                      (lib/analytics.ts)                         │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │    Track     │  │     Log      │  │    Store     │        │
│  │    Events    │  │    Errors    │  │     Data     │        │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘        │
│         │                  │                  │                 │
└─────────┼──────────────────┼──────────────────┼─────────────────┘
          │                  │                  │
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API Routes                               │
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐           │
│  │  /api/analytics/     │  │  /api/analytics/     │           │
│  │      event           │  │      error           │           │
│  │   (POST/GET)         │  │   (POST/GET)         │           │
│  └──────────┬───────────┘  └──────────┬───────────┘           │
│             │                          │                        │
└─────────────┼──────────────────────────┼────────────────────────┘
              │                          │
              ▼                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                      File System                                │
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐           │
│  │   logs/events.json   │  │   logs/errors.json   │           │
│  │   (Max 5000 entries) │  │   (Max 1000 entries) │           │
│  └──────────────────────┘  └──────────────────────┘           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Component Flow

### 1. Image Loading Flow

```
User visits page
      │
      ▼
ImageWithLoader component renders
      │
      ├─► Shows skeleton loader
      │   └─► Animated shimmer effect
      │
      ▼
Image starts loading
      │
      ├─► Success
      │   └─► Fade in animation
      │       └─► Display image
      │
      └─► Error
          └─► Show fallback UI
              └─► "Image unavailable"
```

### 2. Analytics Tracking Flow

```
User action occurs
      │
      ├─► Page view
      │   └─► AnalyticsProvider
      │       └─► trackPageView()
      │
      ├─► Button click
      │   └─► trackButtonClick()
      │
      ├─► Form submit
      │   └─► trackFormSubmission()
      │
      └─► Error occurs
          └─► logCustomError()
                │
                ▼
        Analytics Service
                │
                ▼
        API Route (/api/analytics/*)
                │
                ▼
        File System (logs/*.json)
                │
                ▼
        Dashboard displays data
```

### 3. SEO Flow

```
Search Engine Crawler visits site
      │
      ▼
Reads robots.txt
      │
      ├─► Allowed: Continue
      │   │
      │   ▼
      │   Reads sitemap.xml
      │   │
      │   ▼
      │   Crawls pages
      │   │
      │   ▼
      │   Reads meta tags
      │   │
      │   ├─► Title
      │   ├─► Description
      │   ├─► Keywords
      │   ├─► Open Graph
      │   └─► Structured Data
      │       │
      │       ▼
      │   Indexes content
      │   │
      │   ▼
      │   Ranks in search results
      │
      └─► Blocked: Skip
```

## Data Flow

### Event Tracking

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  User    │────▶│ Component│────▶│ Analytics│────▶│   API    │
│  Action  │     │  Calls   │     │  Service │     │  Route   │
└──────────┘     └──────────┘     └──────────┘     └────┬─────┘
                                                         │
                                                         ▼
                                                   ┌──────────┐
                                                   │   File   │
                                                   │  System  │
                                                   └────┬─────┘
                                                        │
                                                        ▼
                                                   ┌──────────┐
                                                   │Dashboard │
                                                   │  Reads   │
                                                   └──────────┘
```

### Error Tracking

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│JavaScript│────▶│  Window  │────▶│ Analytics│────▶│   API    │
│  Error   │     │ Listener │     │  Service │     │  Route   │
└──────────┘     └──────────┘     └──────────┘     └────┬─────┘
                                                         │
┌──────────┐     ┌──────────┐     ┌──────────┐         │
│ Promise  │────▶│  Window  │────▶│ Analytics│────▶────┘
│Rejection │     │ Listener │     │  Service │
└──────────┘     └──────────┘     └──────────┘
                                                         │
                                                         ▼
                                                   ┌──────────┐
                                                   │   File   │
                                                   │  System  │
                                                   └────┬─────┘
                                                        │
                                                        ▼
                                                   ┌──────────┐
                                                   │Dashboard │
                                                   │  Shows   │
                                                   └──────────┘
```

## File Structure

```
lgihe_nextjs/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with SEO & analytics
│   ├── page.tsx                 # Homepage
│   ├── sitemap.ts               # Dynamic sitemap generator
│   ├── robots.ts                # Robots.txt generator
│   │
│   ├── api/                     # API Routes
│   │   └── analytics/
│   │       ├── error/
│   │       │   └── route.ts     # Error logging endpoint
│   │       └── event/
│   │           └── route.ts     # Event tracking endpoint
│   │
│   └── dashboard/               # Admin Dashboard
│       └── analytics/
│           └── page.tsx         # Analytics dashboard UI
│
├── components/                   # React Components
│   ├── AnalyticsProvider.tsx   # Auto page view tracking
│   ├── ImageWithLoader.tsx     # Image with loading effects
│   ├── StructuredData.tsx      # SEO structured data
│   ├── CampusGallery.tsx       # Updated with loading
│   └── NewsSection.tsx         # Updated with loading
│
├── lib/                         # Utilities
│   └── analytics.ts            # Analytics service & helpers
│
└── logs/                        # Data Storage (gitignored)
    ├── errors.json             # Error logs
    └── events.json             # Event logs
```

## Technology Stack

### Frontend
- **Next.js 16.2.3**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations

### Analytics
- **Custom Service**: Event & error tracking
- **Vercel Analytics**: Visitor tracking
- **Speed Insights**: Performance monitoring

### SEO
- **Next.js Metadata API**: Meta tags
- **JSON-LD**: Structured data
- **Dynamic Sitemap**: Auto-generated
- **Robots.txt**: Crawler control

### Storage
- **File System**: Local JSON files
- **Automatic Rotation**: Prevents overflow

## Integration Points

### 1. Layout Integration
```typescript
// app/layout.tsx
import AnalyticsProvider from '@/components/AnalyticsProvider';
import StructuredData from '@/components/StructuredData';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <StructuredData />
      </head>
      <body>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### 2. Component Integration
```typescript
// Any component
import ImageWithLoader from '@/components/ImageWithLoader';
import { trackButtonClick } from '@/lib/analytics';

export default function MyComponent() {
  return (
    <>
      <ImageWithLoader src="/image.jpg" alt="..." fill />
      <button onClick={() => trackButtonClick('CTA', 'Section')}>
        Click Me
      </button>
    </>
  );
}
```

### 3. API Integration
```typescript
// API routes automatically handle:
// - Reading existing logs
// - Adding new entries
// - Rotating old entries
// - Returning data to dashboard
```

## Security Considerations

### Current State
- ✅ Logs stored locally (not in database)
- ✅ No external tracking (except Vercel)
- ✅ No personal data collected
- ⚠️ Dashboard publicly accessible

### Recommended Improvements
1. Add authentication to dashboard
2. Rate limit API endpoints
3. Sanitize logged data
4. Add CORS headers
5. Implement access control

## Performance Characteristics

### Image Loading
- **Initial Load**: Skeleton visible immediately
- **Image Load**: Progressive enhancement
- **Error State**: Instant fallback

### Analytics
- **Event Tracking**: Async, non-blocking
- **Error Logging**: Async, non-blocking
- **Dashboard**: 30-second auto-refresh
- **API Response**: < 100ms typical

### SEO
- **Sitemap Generation**: Build time
- **Metadata**: Server-side rendered
- **Structured Data**: Inline in HTML

## Scalability

### Current Limits
- **Error Logs**: 1,000 entries
- **Event Logs**: 5,000 entries
- **File Size**: ~500KB max per file

### Scaling Options
1. **Database**: Move to PostgreSQL/MongoDB
2. **Cloud Storage**: Use S3 or similar
3. **Analytics Service**: Use dedicated platform
4. **Caching**: Add Redis for dashboard

## Monitoring

### What to Monitor
- Dashboard accessibility
- API response times
- Log file sizes
- Error rates
- Page load times

### Tools
- Vercel Dashboard
- Analytics Dashboard
- Browser DevTools
- Lighthouse

## Maintenance

### Daily
- Check dashboard for critical errors
- Monitor visitor stats

### Weekly
- Review error trends
- Check log file sizes
- Update content

### Monthly
- Full system audit
- Performance review
- SEO check

---

**Architecture Version:** 1.0
**Last Updated:** April 13, 2026
