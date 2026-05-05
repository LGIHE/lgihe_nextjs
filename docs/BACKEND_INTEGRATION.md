# Backend Integration Guide

## Overview

This guide covers how the Next.js frontend integrates with the Laravel backend API.

## API Configuration

### Base URL Setup

Configure in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

### API Client

Located at `lib/api-client.ts`:
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function fetchFromAPI(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error('API request failed');
  return response.json();
}
```

## Data Models

### Tender Interface

```typescript
interface Tender {
  id: number;
  title: string;
  description: string;
  requirements: string;
  deadline: string;
  status: 'open' | 'closed';
  
  // RFP Document
  has_rfp_document: boolean;
  rfp_download_url?: string;
  rfp_document_name?: string;
  rfp_document_size?: number;
  
  // ToR Document
  has_tor_document: boolean;
  tor_download_url?: string;
  tor_document_name?: string;
  tor_document_size?: number;
}
```

### News/Events Interface

```typescript
interface NewsItem {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image_url?: string;
  published_at: string;
  category: string;
}
```

### Job Interface

```typescript
interface Job {
  id: number;
  title: string;
  description: string;
  requirements: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  deadline: string;
  status: 'open' | 'closed';
}
```

## API Endpoints

### Tenders

**GET** `/tenders`
- Returns list of all tenders
- Response: `{ data: Tender[] }`

**GET** `/tenders/:id`
- Returns single tender details
- Response: `{ data: Tender }`

**GET** `/tenders/:id/download-rfp`
- Downloads RFP document
- Returns file stream

**GET** `/tenders/:id/download-tor`
- Downloads ToR document
- Returns file stream

### News

**GET** `/news`
- Returns list of news items
- Response: `{ data: NewsItem[] }`

**GET** `/news/:id`
- Returns single news item
- Response: `{ data: NewsItem }`

### Events

**GET** `/events`
- Returns list of events
- Response: `{ data: Event[] }`

**GET** `/events/:id`
- Returns single event
- Response: `{ data: Event }`

### Jobs

**GET** `/jobs`
- Returns list of job openings
- Response: `{ data: Job[] }`

**GET** `/jobs/:id`
- Returns single job details
- Response: `{ data: Job }`

### Applications

**POST** `/applications`
- Submit application form
- Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+256700000000",
  "programme": "Bachelor of Education",
  "message": "Optional message"
}
```
- Response: `{ success: true, message: "Application submitted" }`

### Contact

**POST** `/contact`
- Submit contact form
- Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Message content"
}
```
- Response: `{ success: true, message: "Message sent" }`

## HTML Content Handling

The frontend automatically detects and renders HTML content from the backend.

### Backend Sends HTML

```json
{
  "description": "<p>This is <strong>formatted</strong> content.</p><ul><li>Item 1</li><li>Item 2</li></ul>"
}
```

### Frontend Renders Safely

```typescript
import { isHtmlContent, renderContent } from '@/lib/html-utils';

{isHtmlContent(tender.description) ? (
  <div dangerouslySetInnerHTML={renderContent(tender.description)} />
) : (
  <div className="whitespace-pre-wrap">{tender.description}</div>
)}
```

### Security

HTML is sanitized to remove:
- `<script>` tags
- `<iframe>` tags
- Event handlers (onclick, onload, etc.)
- Dangerous attributes

Safe tags preserved:
- Paragraphs, headings, lists
- Bold, italic, underline
- Links (with rel="noopener noreferrer")
- Tables, blockquotes

## Document Handling

### Backend Response Format

```json
{
  "has_rfp_document": true,
  "rfp_download_url": "http://localhost:8000/api/v1/tenders/1/download-rfp",
  "rfp_document_name": "tender_rfp.docx",
  "rfp_document_size": 126980,
  "has_tor_document": true,
  "tor_download_url": "http://localhost:8000/api/v1/tenders/1/download-tor",
  "tor_document_name": "tender_tor.docx",
  "tor_document_size": 193460
}
```

### Frontend Processing

```typescript
const buildDocumentsArray = (): TenderDocument[] => {
  const docs: TenderDocument[] = [];
  
  if (tender.has_rfp_document && tender.rfp_download_url) {
    docs.push({
      type: 'rfp',
      url: tender.rfp_download_url,
      name: tender.rfp_document_name || 'RFP Document',
      size: tender.rfp_document_size || 0
    });
  }
  
  if (tender.has_tor_document && tender.tor_download_url) {
    docs.push({
      type: 'tor',
      url: tender.tor_download_url,
      name: tender.tor_document_name || 'ToR Document',
      size: tender.tor_document_size || 0
    });
  }
  
  return docs;
};
```

## Error Handling

### API Errors

```typescript
try {
  const data = await fetchFromAPI('/tenders');
  setTenders(data.data);
} catch (error) {
  console.error('Failed to fetch tenders:', error);
  setError('Unable to load tenders. Please try again later.');
}
```

### Loading States

```typescript
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  setLoading(true);
  fetchFromAPI('/tenders')
    .then(data => setTenders(data.data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
}, []);
```

## CORS Configuration

Backend must allow frontend origin:

```php
// Laravel: config/cors.php
'allowed_origins' => [
    'http://localhost:3000',
    'https://lgihe.ac.ug',
],
```

## Testing

### Test API Connection

```bash
# Test from command line
curl http://localhost:8000/api/v1/tenders

# Test from browser console
fetch('http://localhost:8000/api/v1/tenders')
  .then(r => r.json())
  .then(console.log);
```

### Common Issues

**CORS errors?**
- Check backend CORS configuration
- Verify allowed origins include frontend URL

**404 errors?**
- Verify API endpoint exists
- Check API base URL in `.env.local`

**Empty responses?**
- Check backend returns data in `{ data: [] }` format
- Verify database has records

## Best Practices

1. **Always handle loading states**
2. **Show user-friendly error messages**
3. **Validate data before rendering**
4. **Use TypeScript interfaces**
5. **Sanitize HTML content**
6. **Cache API responses when appropriate**
7. **Implement retry logic for failed requests**

---

**Last Updated**: May 5, 2026
