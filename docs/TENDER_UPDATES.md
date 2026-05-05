# Tender Pages Updates

## Summary
Updated the tender pages to properly format HTML content from the backend and support multiple document downloads (RFP, ToR, etc.).

## Changes Made

### 1. Created HTML Utilities (`lib/html-utils.ts`)
- **sanitizeHtml()**: Removes dangerous HTML tags and attributes (scripts, iframes, inline event handlers)
- **isHtmlContent()**: Detects if content contains HTML tags
- **createMarkup()**: Creates safe props for `dangerouslySetInnerHTML`
- **formatPlainText()**: Preserves line breaks in plain text
- **renderContent()**: Intelligently renders content as HTML or formatted plain text

### 2. Updated API Client (`lib/api-client.ts`)
Added support for multiple documents:

```typescript
export interface TenderDocument {
  id: number;
  name: string;
  type: string; // 'rfp', 'tor', 'specification', 'other'
  url: string;
  size?: number;
  created_at: string;
}

export interface Tender {
  // ... existing fields
  document_url?: string; // Legacy single document support
  documents?: TenderDocument[]; // NEW: Multiple documents support
}
```

### 3. Updated Tenders List Page (`app/tenders/page.tsx`)

#### HTML Content Rendering
- Detects if description contains HTML tags
- Renders HTML content safely using `dangerouslySetInnerHTML`
- Falls back to plain text rendering for non-HTML content
- Applies proper prose styling for HTML content

#### Multiple Documents Support
- Shows download button if any documents are available
- Prioritizes new `documents` array over legacy `document_url`
- Downloads first document from list on the listing page

### 4. Updated Tender Detail Page (`app/tenders/[id]/page.tsx`)

#### HTML Content Rendering
Both description and requirements fields now support HTML:
- Automatically detects HTML content
- Sanitizes and renders HTML safely
- Preserves formatting for plain text content
- Applies consistent prose styling

#### Multiple Documents Support
Intelligent document display logic:

**Single Document:**
- Shows simple download button
- Works with both new `documents` array and legacy `document_url`

**Multiple Documents:**
- Displays each document in a card layout
- Shows document type labels:
  - RFP → "Request for Proposal (RFP)"
  - ToR → "Terms of Reference (ToR)"
  - specification → "Technical Specifications"
  - other → "Tender Document"
- Displays document name and file size
- Individual download button for each document
- Hover effects for better UX

#### Helper Functions
```typescript
// Get human-readable document type labels
getDocumentTypeLabel(type: string): string

// Format file size from bytes to KB/MB
formatFileSize(bytes?: number): string
```

## Backend Data Structure Expected

### Single Document (Legacy)
```json
{
  "id": 1,
  "title": "Office Supplies Tender",
  "description": "<p>We are seeking suppliers for...</p>",
  "requirements": "<ul><li>Valid license</li><li>Experience</li></ul>",
  "document_url": "https://example.com/tender-doc.pdf",
  ...
}
```

### Multiple Documents (New)
```json
{
  "id": 1,
  "title": "Office Supplies Tender",
  "description": "<p>We are seeking suppliers for...</p>",
  "requirements": "<ul><li>Valid license</li><li>Experience</li></ul>",
  "documents": [
    {
      "id": 1,
      "name": "RFP_Office_Supplies.pdf",
      "type": "rfp",
      "url": "https://example.com/rfp.pdf",
      "size": 2048576,
      "created_at": "2026-05-01T10:00:00Z"
    },
    {
      "id": 2,
      "name": "ToR_Office_Supplies.pdf",
      "type": "tor",
      "url": "https://example.com/tor.pdf",
      "size": 1536000,
      "created_at": "2026-05-01T10:00:00Z"
    }
  ],
  ...
}
```

## Features

### HTML Content Support
✅ Safely renders HTML from backend
✅ Sanitizes dangerous tags and attributes
✅ Preserves formatting for plain text
✅ Applies proper typography styling
✅ Works on both list and detail pages

### Multiple Documents Support
✅ Detects single vs multiple documents
✅ Shows appropriate UI for each case
✅ Human-readable document type labels
✅ File size formatting (KB/MB)
✅ Individual download buttons
✅ Backward compatible with legacy `document_url`

### Security
✅ Removes `<script>` tags
✅ Removes `<iframe>` tags
✅ Removes inline event handlers (onclick, onload, etc.)
✅ Safe HTML rendering with React

## Testing Recommendations

1. **Test HTML Content:**
   - Create tender with HTML in description
   - Create tender with plain text in description
   - Verify both render correctly

2. **Test Multiple Documents:**
   - Create tender with no documents
   - Create tender with single document (legacy)
   - Create tender with single document (new format)
   - Create tender with multiple documents (RFP + ToR)
   - Verify all scenarios display correctly

3. **Test Document Types:**
   - Test with type: "rfp"
   - Test with type: "tor"
   - Test with type: "specification"
   - Test with type: "other"
   - Verify labels display correctly

4. **Test File Sizes:**
   - Test with small files (< 1 MB)
   - Test with large files (> 1 MB)
   - Test without size information
   - Verify formatting is correct
