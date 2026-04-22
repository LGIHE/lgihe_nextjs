# Single View Implementation for Events, News, Jobs, and Tenders

## Overview
This document describes the implementation of single view (detail) pages for Events, News, Jobs, and Tenders. All data is fetched from the API with no demo/hardcoded data.

## Implemented Pages

### 1. Events Detail Page (`/events/[id]/page.tsx`)
**Route:** `/events/[id]`

**Features:**
- Fetches event data from API using `eventsApi.getById()`
- Displays event status badge (upcoming, ongoing, completed, cancelled)
- Shows featured image if available
- Event details card with:
  - Date (start and end dates)
  - Location
  - Category
- Full event description
- Call-to-action for upcoming events (contact button)
- Loading state with skeleton
- Error handling with "Event Not Found" page
- Back button to return to events listing

**API Integration:**
```typescript
const data = await eventsApi.getById(params.id as string);
```

---

### 2. News Detail Page (`/news/[id]/page.tsx`)
**Route:** `/news/[id]` (supports both slug and ID)

**Features:**
- Fetches news article from API using `newsApi.getBySlug()`
- Displays featured image if available
- Article metadata:
  - Category badge
  - Published date
  - Author information
- Excerpt highlight (if available)
- Full article content (rendered as HTML)
- Share functionality:
  - Native share API support
  - Copy link to clipboard
- Newsletter signup section
- Loading state with skeleton
- Error handling with "News Not Found" page
- Back button to return to news listing

**API Integration:**
```typescript
const data = await newsApi.getBySlug(params.id as string);
```

---

### 3. Jobs Detail Page (`/jobs/[id]/page.tsx`)
**Route:** `/jobs/[id]`

**Features:**
- Fetches job posting from API using `jobsApi.getById()`
- Job status badge (active/closed)
- Job overview card with:
  - Department
  - Employment type
  - Location
  - Salary range (if available)
  - Application deadline
- Full job description
- Key responsibilities section
- Requirements section
- Application section (for active jobs):
  - Apply now button (links to contact page)
  - Share job functionality
- Closed job notice (for expired/closed positions)
- Loading state with skeleton
- Error handling with "Job Not Found" page
- Back button to return to jobs listing

**API Integration:**
```typescript
const data = await jobsApi.getById(params.id as string);
```

---

### 4. Tenders Detail Page (`/tenders/[id]/page.tsx`)
**Route:** `/tenders/[id]`

**Features:**
- Fetches tender from API using `tendersApi.getById()`
- Tender status badge (open, closed, awarded)
- Tender information card with:
  - Reference number
  - Submission deadline
  - Status
  - Published date
- Full tender description
- Requirements & qualifications section
- Submission guidelines
- Document download section (if document URL available)
- Action section (for open tenders):
  - Procurement office contact information
  - Contact button
- Closed/awarded tender notice
- Loading state with skeleton
- Error handling with "Tender Not Found" page
- Back button to return to tenders listing

**API Integration:**
```typescript
const data = await tendersApi.getById(params.id as string);
```

---

## Updated Listing Pages

### Events Listing (`/events/page.tsx`)
- Updated "Learn More" button to be a Link component
- Links to `/events/[id]` for each event
- Added Link import from next/link

### News Listing (`/news/page.tsx`)
- **Completely refactored** to use API data instead of hardcoded data
- Fetches news from `newsApi.getAll()`
- Dynamic category filtering based on actual data
- Links to `/news/[slug]` or `/news/[id]` for each article
- Loading state with skeleton
- Empty state when no articles found
- Uses `getMediaUrl()` helper for featured images

### Jobs Listing (`/jobs/page.tsx`)
- Already had API integration
- Links already pointing to `/jobs/[id]`
- No changes needed

### Tenders Listing (`/tenders/page.tsx`)
- Already had API integration
- Links already pointing to `/tenders/[id]`
- No changes needed

---

## Common Features Across All Detail Pages

1. **Loading States:** Skeleton loaders while fetching data
2. **Error Handling:** User-friendly error pages with back navigation
3. **Responsive Design:** Mobile-first approach with Tailwind CSS
4. **Navigation:** Back buttons to return to listing pages
5. **Status Indicators:** Visual badges showing current status
6. **Call-to-Actions:** Contextual CTAs based on status (active/closed/expired)
7. **API Integration:** All data fetched from Laravel backend
8. **No Demo Data:** Zero hardcoded content

---

## API Client Usage

All pages use the centralized API client (`lib/api-client.ts`) which provides:

- Type-safe interfaces for all data models
- Consistent error handling
- Caching with Next.js revalidation
- Helper functions (`getMediaUrl`, `formatDate`)

---

## User Experience Flow

### Events
1. User views events listing → Clicks "Learn More"
2. Navigates to `/events/[id]`
3. Views full event details
4. Can contact for registration (if upcoming)
5. Can return to events listing

### News
1. User views news listing → Clicks "Read More"
2. Navigates to `/news/[slug]`
3. Reads full article
4. Can share article or copy link
5. Can subscribe to newsletter
6. Can return to news listing

### Jobs
1. User views jobs listing → Clicks "View Details & Apply"
2. Navigates to `/jobs/[id]`
3. Views full job description and requirements
4. Can apply (if active) or view other jobs (if closed)
5. Can share job posting
6. Can return to jobs listing

### Tenders
1. User views tenders listing → Clicks "View Details"
2. Navigates to `/tenders/[id]`
3. Views full tender information
4. Can download tender documents
5. Can contact procurement office (if open)
6. Can return to tenders listing

---

## Technical Implementation

### Dynamic Routes
All detail pages use Next.js dynamic routes with the `[id]` parameter:
```
app/
  events/[id]/page.tsx
  news/[id]/page.tsx
  jobs/[id]/page.tsx
  tenders/[id]/page.tsx
```

### Data Fetching Pattern
```typescript
useEffect(() => {
  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getById(params.id);
      setData(data);
    } catch (err) {
      setError('Failed to load...');
    } finally {
      setLoading(false);
    }
  }
  
  if (params.id) {
    fetchData();
  }
}, [params.id]);
```

### Error Handling
All pages include comprehensive error handling:
- Network errors
- 404 Not Found
- Invalid IDs
- User-friendly error messages
- Navigation back to listing

---

## Testing Checklist

- [ ] Events detail page loads correctly
- [ ] News detail page loads correctly
- [ ] Jobs detail page loads correctly
- [ ] Tenders detail page loads correctly
- [ ] Loading states display properly
- [ ] Error states display properly
- [ ] Back buttons work correctly
- [ ] Links from listing pages work
- [ ] Status badges display correctly
- [ ] CTAs work based on status
- [ ] Share functionality works (where applicable)
- [ ] Responsive design works on mobile
- [ ] Images load correctly (where available)
- [ ] API errors are handled gracefully

---

## Future Enhancements

1. **SEO Optimization:** Add metadata and Open Graph tags
2. **Related Content:** Show related events/news/jobs/tenders
3. **Breadcrumbs:** Add breadcrumb navigation
4. **Print Functionality:** Add print-friendly versions
5. **Social Sharing:** Add specific social media share buttons
6. **Comments/Feedback:** Allow user engagement
7. **Bookmarking:** Let users save items for later
8. **Email Notifications:** Alert users about new opportunities

---

## Conclusion

All four content types (Events, News, Jobs, Tenders) now have fully functional single view pages that:
- Fetch data exclusively from the API
- Provide excellent user experience
- Handle errors gracefully
- Are fully responsive
- Follow consistent design patterns
- Include appropriate calls-to-action
