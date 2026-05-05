# Analytics System

## Overview

Custom analytics system for tracking user behavior, page views, and errors.

## Features

- **Automatic page view tracking**
- **Custom event tracking**
- **Error logging**
- **Real-time dashboard**
- **Privacy-focused** (no external tracking except Vercel)

## Quick Start

### Track a Custom Event

```typescript
import { trackButtonClick, trackFormSubmission } from '@/lib/analytics';

// Track button clicks
<button onClick={() => trackButtonClick('Apply Now', 'Admissions')}>
  Apply Now
</button>

// Track form submissions
<form onSubmit={(e) => {
  e.preventDefault();
  trackFormSubmission('Contact Form', true);
}}>
  {/* form fields */}
</form>
```

### Log Custom Errors

```typescript
import { logCustomError } from '@/lib/analytics';

try {
  // your code
} catch (error) {
  logCustomError(error, { context: 'Payment Processing' });
}
```

## API Endpoints

### POST /api/analytics/event
Track custom events

**Request:**
```json
{
  "type": "button_click",
  "label": "Apply Now",
  "category": "Admissions"
}
```

### POST /api/analytics/error
Log errors

**Request:**
```json
{
  "message": "Failed to load data",
  "stack": "Error: ...",
  "url": "/admissions"
}
```

### GET /api/analytics/stats
Get analytics summary

**Response:**
```json
{
  "totalEvents": 1250,
  "totalErrors": 15,
  "topPages": [...],
  "recentErrors": [...]
}
```

## Dashboard

Access the analytics dashboard at `/dashboard/analytics`

**Features:**
- Total events and errors
- Top pages by visits
- Recent errors with details
- Auto-refresh every 30 seconds

## Data Storage

- Events stored in `logs/events.json` (max 5,000 entries)
- Errors stored in `logs/errors.json` (max 1,000 entries)
- Automatic rotation when limits reached

## Privacy

- No personal data collected
- No cookies used
- No third-party tracking (except Vercel Analytics)
- All data stored locally

## Performance

- Non-blocking async tracking
- Minimal performance impact
- Efficient file-based storage

---

**Last Updated**: May 5, 2026
