# Quick Start Guide - Tender Documents

## 🎯 What's New

1. **RFP & ToR Documents** - Tenders now show separate Request for Proposal and Terms of Reference documents
2. **HTML Content** - Descriptions and requirements can include formatted HTML
3. **Smart Display** - Automatically shows the right UI based on available documents

## 🔍 How It Works

### Backend Sends This:
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

### Frontend Shows This:
```
┌─────────────────────────────────────────┐
│ 📄 Request for Proposal (RFP)          │
│    tender_rfp.docx • 124 KB [Download] │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 📄 Terms of Reference (ToR)            │
│    tender_tor.docx • 188.93 KB [Download]│
└─────────────────────────────────────────┘
```

## ✅ Checklist for Backend

Make sure your backend response includes:

- [ ] `has_rfp_document: true` when RFP exists
- [ ] `rfp_download_url` with download link
- [ ] `rfp_document_name` with file name
- [ ] `rfp_document_size` in bytes
- [ ] `has_tor_document: true` when ToR exists
- [ ] `tor_download_url` with download link
- [ ] `tor_document_name` with file name
- [ ] `tor_document_size` in bytes

## 🎨 What Users See

### Both Documents Available
Two separate download buttons with clear labels

### One Document Available
Single download button

### No Documents
Document section is hidden

## 🔧 Troubleshooting

**Documents not showing?**
- Check `has_rfp_document` is `true`
- Check `rfp_download_url` is provided
- Same for ToR document

**HTML not rendering?**
- HTML is automatically detected
- No special configuration needed
- Dangerous tags are removed automatically

**File size not showing?**
- Provide size in bytes
- Frontend converts to KB/MB automatically

## 📱 Responsive Design

Works perfectly on:
- Desktop computers
- Tablets
- Mobile phones

## 🔐 Security

- HTML is sanitized automatically
- Scripts and iframes are removed
- Event handlers are stripped
- Safe content is preserved

## 🚀 No Setup Required

- Works immediately with backend data
- No configuration needed
- No environment variables
- No database changes

## 📖 More Information

- **Backend Integration:** See `docs/BACKEND_INTEGRATION.md`
- **Visual Examples:** See `docs/VISUAL_EXAMPLES.md`
- **Complete Summary:** See `docs/FINAL_SUMMARY.md`
