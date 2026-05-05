# Tender Document Display Examples

## Visual Layout Examples

### Single Document Display
```
┌─────────────────────────────────────────────────────────────┐
│ Tender Documents                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Download the complete tender document package including    │
│ specifications, terms, and conditions.                      │
│                                                             │
│  ┌──────────────────────────────────────┐                  │
│  │  📄  Download Tender Documents       │                  │
│  └──────────────────────────────────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Multiple Documents Display
```
┌─────────────────────────────────────────────────────────────┐
│ Tender Documents                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Download the complete tender document package including    │
│ specifications, terms, and conditions.                      │
│                                                             │
│ ┌───────────────────────────────────────────────────────┐  │
│ │ 📄  Request for Proposal (RFP)         [Download] ⬇  │  │
│ │     RFP_Office_Supplies.pdf • 2.00 MB                │  │
│ └───────────────────────────────────────────────────────┘  │
│                                                             │
│ ┌───────────────────────────────────────────────────────┐  │
│ │ 📄  Terms of Reference (ToR)           [Download] ⬇  │  │
│ │     ToR_Office_Supplies.pdf • 1.46 MB                │  │
│ └───────────────────────────────────────────────────────┘  │
│                                                             │
│ ┌───────────────────────────────────────────────────────┐  │
│ │ 📄  Technical Specifications           [Download] ⬇  │  │
│ │     Technical_Specs.pdf • 512.00 KB                  │  │
│ └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Document Type Mapping

The system automatically converts backend document types to user-friendly labels:

| Backend Type    | Display Label                    | Use Case                          |
|----------------|----------------------------------|-----------------------------------|
| `rfp`          | Request for Proposal (RFP)      | Proposal requests                 |
| `tor`          | Terms of Reference (ToR)        | Project scope and requirements    |
| `specification`| Technical Specifications         | Detailed technical requirements   |
| `other`        | Tender Document                  | General tender documents          |

## File Size Formatting

The system automatically formats file sizes for readability:

| Bytes      | Display    | Example                           |
|-----------|------------|-----------------------------------|
| 512       | 0.50 KB    | Small text file                   |
| 51200     | 50.00 KB   | Small PDF                         |
| 1048576   | 1.00 MB    | Medium document                   |
| 2097152   | 2.00 MB    | Large document with images        |
| 10485760  | 10.00 MB   | Very large document               |

## HTML Content Rendering

### Plain Text Example
**Input:**
```
This is a tender for office supplies.

Requirements:
- Valid business license
- 5 years experience
- References from 3 clients
```

**Output:**
Renders with preserved line breaks and formatting.

### HTML Content Example
**Input:**
```html
<p>This is a tender for <strong>office supplies</strong>.</p>
<h4>Requirements:</h4>
<ul>
  <li>Valid business license</li>
  <li>5 years experience</li>
  <li>References from 3 clients</li>
</ul>
```

**Output:**
Renders with proper HTML formatting, bold text, headings, and bullet lists.

## Security Features

### Dangerous Content Removed
The following are automatically stripped from HTML content:

❌ `<script>alert('XSS')</script>` → Removed
❌ `<iframe src="malicious.com"></iframe>` → Removed
❌ `<button onclick="malicious()">Click</button>` → onclick removed
❌ `<div onload="malicious()">Content</div>` → onload removed

### Safe Content Preserved
✅ `<p>`, `<div>`, `<span>` → Preserved
✅ `<h1>` through `<h6>` → Preserved
✅ `<ul>`, `<ol>`, `<li>` → Preserved
✅ `<strong>`, `<em>`, `<b>`, `<i>` → Preserved
✅ `<a href="...">` → Preserved (without onclick)
✅ `<table>`, `<tr>`, `<td>` → Preserved

## Backward Compatibility

The system supports both old and new document formats:

### Legacy Format (Still Supported)
```json
{
  "document_url": "https://example.com/tender.pdf"
}
```
✅ Works perfectly
✅ Shows single download button
✅ No migration needed

### New Format (Recommended)
```json
{
  "documents": [
    {
      "id": 1,
      "name": "RFP.pdf",
      "type": "rfp",
      "url": "https://example.com/rfp.pdf",
      "size": 2048576
    }
  ]
}
```
✅ Enhanced UI
✅ Multiple documents support
✅ Better user experience

### Mixed Format (Supported)
```json
{
  "document_url": "https://example.com/tender.pdf",
  "documents": [
    {
      "id": 1,
      "name": "RFP.pdf",
      "type": "rfp",
      "url": "https://example.com/rfp.pdf"
    }
  ]
}
```
✅ Prioritizes `documents` array
✅ Falls back to `document_url` if documents array is empty
✅ Smooth migration path
