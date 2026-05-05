# Backend Integration Guide - Tender Documents

## Backend Response Structure

The frontend now supports the actual backend response format for tender documents. Here's how the backend sends document information:

### Actual Backend Response Format

```json
{
  "id": 1,
  "title": "Tender Title",
  "description": "<p>HTML content</p>",
  "requirements": "<ul><li>Requirement 1</li></ul>",
  "deadline": "2026-06-30",
  "status": "open",
  
  // RFP Document Fields
  "rfp_document_path": "tender-documents/rfp/lgiheklasrv0012026_rfp_052026.docx",
  "rfp_document_name": "lgiheklasrv0012026_rfp_052026.docx",
  "rfp_document_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "rfp_document_size": 126980,
  "has_rfp_document": true,
  "rfp_download_url": "http://localhost:8000/api/v1/tenders/1/download-rfp",
  "formatted_rfp_file_size": "124 KB",
  
  // ToR Document Fields
  "tor_document_path": "tender-documents/tor/lgiheklasrv0012026_tor_052026.docx",
  "tor_document_name": "lgiheklasrv0012026_tor_052026.docx",
  "tor_document_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "tor_document_size": 193460,
  "has_tor_document": true,
  "tor_download_url": "http://localhost:8000/api/v1/tenders/1/download-tor",
  "formatted_tor_file_size": "188.93 KB",
  
  "created_at": "2026-05-01T10:00:00Z",
  "updated_at": "2026-05-01T10:00:00Z"
}
```

## How Frontend Handles Backend Data

### 1. Document Array Construction

The frontend automatically builds a documents array from the backend fields:

```typescript
const buildDocumentsArray = (): TenderDocument[] => {
  const docs: TenderDocument[] = [];
  
  // Add RFP document if available
  if (tender.has_rfp_document && tender.rfp_download_url) {
    docs.push({
      id: 1,
      name: tender.rfp_document_name || 'RFP Document',
      type: 'rfp',
      url: tender.rfp_download_url,
      size: tender.rfp_document_size,
      created_at: tender.created_at
    });
  }
  
  // Add ToR document if available
  if (tender.has_tor_document && tender.tor_download_url) {
    docs.push({
      id: 2,
      name: tender.tor_document_name || 'ToR Document',
      type: 'tor',
      url: tender.tor_download_url,
      size: tender.tor_document_size,
      created_at: tender.created_at
    });
  }
  
  return docs;
};
```

### 2. Display Logic

**No Documents:**
- Document section is hidden

**Single Document (RFP only or ToR only):**
```
┌─────────────────────────────┐
│ Tender Documents            │
├─────────────────────────────┤
│ [📄 Download Tender Docs]   │
└─────────────────────────────┘
```

**Multiple Documents (RFP + ToR):**
```
┌─────────────────────────────────────────┐
│ Tender Documents                        │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │ 📄 Request for Proposal (RFP)       │ │
│ │    lgiheklasrv0012026_rfp_052026... │ │
│ │    124 KB                [Download] │ │
│ └─────────────────────────────────────┘ │
│ ┌─────────────────────────────────────┐ │
│ │ 📄 Terms of Reference (ToR)         │ │
│ │    lgiheklasrv0012026_tor_052026... │ │
│ │    188.93 KB             [Download] │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

## Backend Field Mapping

| Backend Field           | Frontend Usage                          |
|------------------------|------------------------------------------|
| `has_rfp_document`     | Check if RFP exists                     |
| `rfp_download_url`     | Download link for RFP                   |
| `rfp_document_name`    | Display name for RFP                    |
| `rfp_document_size`    | File size in bytes (formatted to KB/MB)|
| `has_tor_document`     | Check if ToR exists                     |
| `tor_download_url`     | Download link for ToR                   |
| `tor_document_name`    | Display name for ToR                    |
| `tor_document_size`    | File size in bytes (formatted to KB/MB)|

## Document Type Labels

The frontend automatically converts document types to user-friendly labels:

| Type  | Display Label                    |
|-------|----------------------------------|
| `rfp` | Request for Proposal (RFP)      |
| `tor` | Terms of Reference (ToR)        |

## File Size Formatting

The frontend formats file sizes from bytes to human-readable format:

```typescript
formatFileSize(126980)  // Returns "124.00 KB"
formatFileSize(193460)  // Returns "188.93 KB"
formatFileSize(2097152) // Returns "2.00 MB"
```

## List Page Behavior

On the `/tenders` page, the download button shows the first available document:

**Priority Order:**
1. RFP document (if available)
2. ToR document (if RFP not available)
3. Legacy `document_url` (if neither RFP nor ToR available)

## Detail Page Behavior

On the `/tenders/[id]` page:

- **Both RFP and ToR available:** Shows both in card layout
- **Only RFP available:** Shows single download button
- **Only ToR available:** Shows single download button
- **Neither available:** Document section is hidden

## Backend Requirements

For the frontend to work correctly, the backend should:

1. ✅ Set `has_rfp_document: true` when RFP exists
2. ✅ Set `has_tor_document: true` when ToR exists
3. ✅ Provide `rfp_download_url` for RFP downloads
4. ✅ Provide `tor_download_url` for ToR downloads
5. ✅ Include file sizes in bytes (`rfp_document_size`, `tor_document_size`)
6. ✅ Include file names (`rfp_document_name`, `tor_document_name`)
7. ✅ Support HTML content in `description` and `requirements` fields

## Testing Scenarios

### Scenario 1: Tender with Both Documents
```json
{
  "has_rfp_document": true,
  "rfp_download_url": "http://localhost:8000/api/v1/tenders/1/download-rfp",
  "has_tor_document": true,
  "tor_download_url": "http://localhost:8000/api/v1/tenders/1/download-tor"
}
```
**Expected:** Two document cards displayed

### Scenario 2: Tender with RFP Only
```json
{
  "has_rfp_document": true,
  "rfp_download_url": "http://localhost:8000/api/v1/tenders/1/download-rfp",
  "has_tor_document": false
}
```
**Expected:** Single download button

### Scenario 3: Tender with ToR Only
```json
{
  "has_rfp_document": false,
  "has_tor_document": true,
  "tor_download_url": "http://localhost:8000/api/v1/tenders/1/download-tor"
}
```
**Expected:** Single download button

### Scenario 4: Tender with No Documents
```json
{
  "has_rfp_document": false,
  "has_tor_document": false
}
```
**Expected:** Document section hidden

## HTML Content Support

The backend can send HTML in these fields:

```json
{
  "description": "<p>This is a <strong>tender</strong> for office supplies.</p><ul><li>Item 1</li><li>Item 2</li></ul>",
  "requirements": "<h4>Eligibility Criteria</h4><ol><li>Valid license</li><li>5 years experience</li></ol>"
}
```

The frontend will:
1. Detect HTML content automatically
2. Sanitize dangerous tags (scripts, iframes)
3. Render with proper formatting
4. Apply typography styles

## API Endpoints Expected

Based on the backend response, these endpoints should be available:

- `GET /api/v1/tenders` - List all tenders
- `GET /api/v1/tenders/{id}` - Get single tender details
- `GET /api/v1/tenders/{id}/download-rfp` - Download RFP document
- `GET /api/v1/tenders/{id}/download-tor` - Download ToR document

## Security Considerations

1. **Download URLs:** Should be authenticated if needed
2. **File Access:** Backend should validate user permissions
3. **HTML Content:** Frontend sanitizes, but backend should also validate
4. **File Types:** Backend should validate uploaded file types

## Future Enhancements

If the backend needs to support additional document types in the future:

1. Add new fields (e.g., `specification_document_*`)
2. Update `buildDocumentsArray()` function
3. Add new type to `getDocumentTypeLabel()` function
4. No other changes needed - UI adapts automatically
