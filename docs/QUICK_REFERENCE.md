# Tender Pages - Quick Reference Guide

## 🎯 What Was Implemented

### 1. HTML Content Formatting ✅
- Tender descriptions and requirements can now contain HTML tags
- Content is automatically sanitized for security
- Plain text content is also supported (backward compatible)

### 2. Multiple Document Downloads ✅
- Tenders can have multiple documents (RFP, ToR, etc.)
- Each document gets its own download button
- Document types are labeled clearly
- File sizes are displayed in human-readable format

## 🔧 How It Works

### For HTML Content
```typescript
// Backend sends HTML
{
  "description": "<p>This is <strong>important</strong></p>"
}

// Frontend automatically:
// 1. Detects it's HTML
// 2. Sanitizes dangerous content
// 3. Renders with proper formatting
```

### For Multiple Documents
```typescript
// Backend sends array of documents
{
  "documents": [
    {
      "id": 1,
      "name": "RFP.pdf",
      "type": "rfp",
      "url": "https://example.com/rfp.pdf",
      "size": 2048576
    },
    {
      "id": 2,
      "name": "ToR.pdf",
      "type": "tor",
      "url": "https://example.com/tor.pdf",
      "size": 1536000
    }
  ]
}

// Frontend automatically:
// 1. Detects multiple documents
// 2. Shows card layout
// 3. Labels each document type
// 4. Formats file sizes
// 5. Provides individual download buttons
```

## 📋 Document Types Supported

| Type Code       | Display Label                    |
|----------------|----------------------------------|
| `rfp`          | Request for Proposal (RFP)      |
| `tor`          | Terms of Reference (ToR)        |
| `specification`| Technical Specifications         |
| `other`        | Tender Document                  |

## 🔐 Security Features

**Automatically Removed:**
- `<script>` tags
- `<iframe>` tags
- Event handlers (onclick, onload, etc.)

**Safely Preserved:**
- Paragraphs, headings, lists
- Bold, italic, emphasis
- Links (without event handlers)
- Tables

## 🎨 UI Behavior

### List Page (`/tenders`)
- Shows tender cards with formatted descriptions
- Download button appears if documents exist
- Downloads first document from the list

### Detail Page (`/tenders/[id]`)

**With Single Document:**
```
┌─────────────────────────────┐
│ Tender Documents            │
├─────────────────────────────┤
│ [📄 Download Tender Docs]   │
└─────────────────────────────┘
```

**With Multiple Documents:**
```
┌─────────────────────────────────────────┐
│ Tender Documents                        │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │ 📄 Request for Proposal (RFP)      │ │
│ │    RFP.pdf • 2.00 MB    [Download]  │ │
│ └─────────────────────────────────────┘ │
│ ┌─────────────────────────────────────┐ │
│ │ 📄 Terms of Reference (ToR)         │ │
│ │    ToR.pdf • 1.46 MB    [Download]  │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

## 🔄 Backward Compatibility

**Old Format (Still Works):**
```json
{
  "document_url": "https://example.com/tender.pdf"
}
```
✅ Shows single download button
✅ No changes needed to existing data

**New Format (Enhanced):**
```json
{
  "documents": [...]
}
```
✅ Shows enhanced UI with multiple documents
✅ Better user experience

## 📦 Files Changed

1. `lib/api-client.ts` - Added document types
2. `lib/html-utils.ts` - NEW - HTML utilities
3. `app/tenders/page.tsx` - HTML rendering + multi-docs
4. `app/tenders/[id]/page.tsx` - HTML rendering + multi-docs

## 🚀 No Migration Needed

- Works with existing data immediately
- No database changes required
- No breaking changes
- Progressive enhancement

## 💡 Usage Tips

### For Backend Developers
1. Send HTML in `description` and `requirements` fields
2. Use `documents` array for multiple files
3. Set proper `type` for each document (rfp, tor, etc.)
4. Include `size` in bytes for file size display

### For Content Editors
1. HTML content will render with formatting
2. Multiple documents will show separately
3. Each document type gets a clear label
4. File sizes display automatically

## ❓ Common Questions

**Q: Can I still use plain text?**
A: Yes! Plain text works perfectly and line breaks are preserved.

**Q: What if I only have one document?**
A: Works great! Shows a simple download button.

**Q: Do I need to update existing tenders?**
A: No! Existing tenders work as-is. New format is optional.

**Q: Is HTML safe?**
A: Yes! Dangerous content is automatically removed.

**Q: Can I mix old and new formats?**
A: Yes! The system handles both gracefully.
