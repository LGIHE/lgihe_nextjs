# Tender Pages Architecture

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        BACKEND API                              │
│                    (Laravel Application)                        │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ JSON Response
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    lib/api-client.ts                            │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ interface TenderDocument {                                │ │
│  │   id: number                                              │ │
│  │   name: string                                            │ │
│  │   type: 'rfp' | 'tor' | 'specification' | 'other'        │ │
│  │   url: string                                             │ │
│  │   size?: number                                           │ │
│  │ }                                                         │ │
│  │                                                           │ │
│  │ interface Tender {                                        │ │
│  │   description: string  // Can contain HTML               │ │
│  │   requirements?: string  // Can contain HTML             │ │
│  │   document_url?: string  // Legacy support               │ │
│  │   documents?: TenderDocument[]  // New format            │ │
│  │ }                                                         │ │
│  └───────────────────────────────────────────────────────────┘ │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ Typed Data
                         │
        ┌────────────────┴────────────────┐
        │                                 │
        ▼                                 ▼
┌──────────────────┐            ┌──────────────────┐
│  /tenders page   │            │ /tenders/[id]    │
│  (List View)     │            │ (Detail View)    │
└────────┬─────────┘            └────────┬─────────┘
         │                               │
         │ Uses                          │ Uses
         │                               │
         ▼                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    lib/html-utils.ts                            │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ isHtmlContent(content)                                    │ │
│  │   └─> Detects if content has HTML tags                   │ │
│  │                                                           │ │
│  │ sanitizeHtml(html)                                        │ │
│  │   └─> Removes dangerous tags & attributes                │ │
│  │       • <script> tags                                     │ │
│  │       • <iframe> tags                                     │ │
│  │       • Event handlers (onclick, onload, etc.)            │ │
│  │                                                           │ │
│  │ renderContent(content)                                    │ │
│  │   └─> Returns safe HTML for dangerouslySetInnerHTML      │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Component Architecture

### List Page (`app/tenders/page.tsx`)

```
┌─────────────────────────────────────────────────────────────────┐
│                         TendersPage                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Fetch tenders from API                                      │
│     └─> tendersApi.getAll()                                     │
│                                                                 │
│  2. Filter open tenders                                         │
│     └─> tender.status === 'open'                                │
│                                                                 │
│  3. For each tender:                                            │
│     ┌─────────────────────────────────────────────────────┐    │
│     │ Tender Card                                         │    │
│     ├─────────────────────────────────────────────────────┤    │
│     │ • Reference Number                                  │    │
│     │ • Title                                             │    │
│     │ • Description (HTML or plain text)                  │    │
│     │   └─> isHtmlContent() checks format                │    │
│     │   └─> renderContent() sanitizes & formats          │    │
│     │ • Deadline                                          │    │
│     │ • [View Details] button                            │    │
│     │ • [Download] button (if documents exist)           │    │
│     │   └─> Shows first document or document_url         │    │
│     └─────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Detail Page (`app/tenders/[id]/page.tsx`)

```
┌─────────────────────────────────────────────────────────────────┐
│                      TenderDetailPage                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Fetch tender by ID                                          │
│     └─> tendersApi.getById(id)                                  │
│                                                                 │
│  2. Analyze documents                                           │
│     ┌─────────────────────────────────────────────────────┐    │
│     │ hasMultipleDocuments = documents.length > 1         │    │
│     │ hasSingleDocument = documents.length === 1 || url   │    │
│     │ hasDocuments = hasMultiple || hasSingle             │    │
│     └─────────────────────────────────────────────────────┘    │
│                                                                 │
│  3. Render sections:                                            │
│     ┌─────────────────────────────────────────────────────┐    │
│     │ Status Badge (Open/Closed/Awarded)                  │    │
│     └─────────────────────────────────────────────────────┘    │
│     ┌─────────────────────────────────────────────────────┐    │
│     │ Tender Information                                  │    │
│     │ • Reference Number                                  │    │
│     │ • Deadline                                          │    │
│     │ • Status                                            │    │
│     │ • Published Date                                    │    │
│     └─────────────────────────────────────────────────────┘    │
│     ┌─────────────────────────────────────────────────────┐    │
│     │ Description (HTML rendered)                         │    │
│     │ └─> dangerouslySetInnerHTML={renderContent(...)}   │    │
│     └─────────────────────────────────────────────────────┘    │
│     ┌─────────────────────────────────────────────────────┐    │
│     │ Requirements (HTML rendered)                        │    │
│     │ └─> dangerouslySetInnerHTML={renderContent(...)}   │    │
│     └─────────────────────────────────────────────────────┘    │
│     ┌─────────────────────────────────────────────────────┐    │
│     │ Submission Guidelines                               │    │
│     └─────────────────────────────────────────────────────┘    │
│     ┌─────────────────────────────────────────────────────┐    │
│     │ Documents Section                                   │    │
│     │                                                     │    │
│     │ IF hasMultipleDocuments:                           │    │
│     │   ┌───────────────────────────────────────────┐    │    │
│     │   │ Document Card 1                           │    │    │
│     │   │ • Type Label (RFP/ToR/etc)                │    │    │
│     │   │ • File name                               │    │    │
│     │   │ • File size                               │    │    │
│     │   │ • [Download] button                       │    │    │
│     │   └───────────────────────────────────────────┘    │    │
│     │   ┌───────────────────────────────────────────┐    │    │
│     │   │ Document Card 2                           │    │    │
│     │   │ ...                                       │    │    │
│     │   └───────────────────────────────────────────┘    │    │
│     │                                                     │    │
│     │ ELSE IF hasSingleDocument:                         │    │
│     │   [Download Tender Documents] button               │    │
│     │                                                     │    │
│     └─────────────────────────────────────────────────────┘    │
│     ┌─────────────────────────────────────────────────────┐    │
│     │ Action Section (Contact/Submit)                     │    │
│     └─────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Security Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    HTML Content Security                        │
└─────────────────────────────────────────────────────────────────┘

Backend HTML
    │
    ▼
┌─────────────────────────────────────────────────────────────────┐
│ "<p>Content</p><script>alert('XSS')</script>"                   │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                   sanitizeHtml()                                │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ 1. Remove <script> tags                                   │ │
│  │ 2. Remove <iframe> tags                                   │ │
│  │ 3. Remove event handlers (onclick, onload, etc.)          │ │
│  │ 4. Preserve safe tags (p, div, ul, li, strong, etc.)     │ │
│  └───────────────────────────────────────────────────────────┘ │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│ "<p>Content</p>"  ✅ Safe HTML                                  │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│ dangerouslySetInnerHTML={{ __html: sanitizedHtml }}            │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Rendered in Browser                          │
│                    (Safe Content Only)                          │
└─────────────────────────────────────────────────────────────────┘
```

## Document Type Resolution

```
┌─────────────────────────────────────────────────────────────────┐
│                  Document Type Mapping                          │
└─────────────────────────────────────────────────────────────────┘

Backend Type          Frontend Label
─────────────────────────────────────────────────────────────────
"rfp"          ──────> "Request for Proposal (RFP)"
"tor"          ──────> "Terms of Reference (ToR)"
"specification"──────> "Technical Specifications"
"other"        ──────> "Tender Document"
(unknown)      ──────> "Tender Document" (fallback)
```

## File Size Formatting

```
┌─────────────────────────────────────────────────────────────────┐
│                  File Size Formatting                           │
└─────────────────────────────────────────────────────────────────┘

Bytes (Backend)       Display (Frontend)
─────────────────────────────────────────────────────────────────
512               ──> "0.50 KB"
51200             ──> "50.00 KB"
1048576           ──> "1.00 MB"
2097152           ──> "2.00 MB"
10485760          ──> "10.00 MB"
undefined         ──> "" (empty string)
```

## Backward Compatibility Strategy

```
┌─────────────────────────────────────────────────────────────────┐
│              Document Resolution Priority                       │
└─────────────────────────────────────────────────────────────────┘

1. Check if tender.documents exists and has items
   ├─ YES: Use tender.documents array
   │       └─ Multiple items? Show card layout
   │       └─ Single item? Show simple button
   │
   └─ NO: Check if tender.document_url exists
          ├─ YES: Use tender.document_url (legacy)
          │       └─ Show simple button
          │
          └─ NO: No documents available
                 └─ Hide document section
```

## Performance Considerations

```
┌─────────────────────────────────────────────────────────────────┐
│                    Optimization Points                          │
└─────────────────────────────────────────────────────────────────┘

1. HTML Detection
   └─> Regex check: /<[a-z][\s\S]*>/i
       • Fast pattern matching
       • Runs once per content field

2. HTML Sanitization
   └─> String replacement operations
       • Minimal overhead
       • Only runs for HTML content

3. Document Rendering
   └─> Conditional rendering
       • Only renders if documents exist
       • Efficient map() for multiple docs

4. API Caching
   └─> Next.js revalidation: 60 seconds
       • Reduces backend load
       • Faster page loads
```
