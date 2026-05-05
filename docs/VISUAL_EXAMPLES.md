# Visual Examples - Tender Document Display

## Example 1: Tender with Both RFP and ToR Documents

### Backend Response
```json
{
  "id": 1,
  "title": "Supply of Office Equipment and Furniture",
  "reference_number": "LGIHE/KLASRV/001/2026",
  "description": "<p>The Luigi Giussani Institute of Higher Education invites qualified suppliers to submit proposals for the supply of <strong>office equipment and furniture</strong>.</p>",
  "has_rfp_document": true,
  "rfp_download_url": "http://localhost:8000/api/v1/tenders/1/download-rfp",
  "rfp_document_name": "lgiheklasrv0012026_rfp_052026.docx",
  "rfp_document_size": 126980,
  "has_tor_document": true,
  "tor_download_url": "http://localhost:8000/api/v1/tenders/1/download-tor",
  "tor_document_name": "lgiheklasrv0012026_tor_052026.docx",
  "tor_document_size": 193460
}
```

### Frontend Display

```
┌─────────────────────────────────────────────────────────────────────┐
│ Supply of Office Equipment and Furniture                            │
│ Tender Opportunity                                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ [← Back to Tenders]                                                 │
│                                                                     │
│ [Open] ✓                                                            │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Tender Information                                              │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │ #  Reference Number                                             │ │
│ │    LGIHE/KLASRV/001/2026                                        │ │
│ │                                                                 │ │
│ │ 📅 Submission Deadline                                          │ │
│ │    Friday, June 30, 2026                                        │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Tender Description                                                  │
│ ─────────────────────────────────────────────────────────────────  │
│ The Luigi Giussani Institute of Higher Education invites qualified │
│ suppliers to submit proposals for the supply of office equipment   │
│ and furniture.                                                      │
│                                                                     │
│ Tender Documents                                                    │
│ ─────────────────────────────────────────────────────────────────  │
│ Download the complete tender document package including             │
│ specifications, terms, and conditions.                              │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ 📄  Request for Proposal (RFP)              [Download] ⬇       │ │
│ │     lgiheklasrv0012026_rfp_052026.docx • 124.00 KB             │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ 📄  Terms of Reference (ToR)                [Download] ⬇       │ │
│ │     lgiheklasrv0012026_tor_052026.docx • 188.93 KB             │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Example 2: Tender with RFP Only

### Backend Response
```json
{
  "id": 2,
  "title": "Consultancy Services for IT Infrastructure",
  "has_rfp_document": true,
  "rfp_download_url": "http://localhost:8000/api/v1/tenders/2/download-rfp",
  "rfp_document_name": "it_consultancy_rfp.pdf",
  "rfp_document_size": 2048576,
  "has_tor_document": false
}
```

### Frontend Display

```
┌─────────────────────────────────────────────────────────────────────┐
│ Tender Documents                                                    │
├─────────────────────────────────────────────────────────────────────┤
│ Download the complete tender document package including             │
│ specifications, terms, and conditions.                              │
│                                                                     │
│ [📄 Download Tender Documents]                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Example 3: Tender with ToR Only

### Backend Response
```json
{
  "id": 3,
  "title": "Research Project Implementation",
  "has_rfp_document": false,
  "has_tor_document": true,
  "tor_download_url": "http://localhost:8000/api/v1/tenders/3/download-tor",
  "tor_document_name": "research_project_tor.pdf",
  "tor_document_size": 1536000
}
```

### Frontend Display

```
┌─────────────────────────────────────────────────────────────────────┐
│ Tender Documents                                                    │
├─────────────────────────────────────────────────────────────────────┤
│ Download the complete tender document package including             │
│ specifications, terms, and conditions.                              │
│                                                                     │
│ [📄 Download Tender Documents]                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Example 4: List Page with Documents

### Frontend Display

```
┌─────────────────────────────────────────────────────────────────────┐
│ Active Tenders                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Ref: LGIHE/KLASRV/001/2026                                      │ │
│ │                                                                 │ │
│ │ Supply of Office Equipment and Furniture                        │ │
│ │                                                                 │ │
│ │ The Luigi Giussani Institute of Higher Education invites        │ │
│ │ qualified suppliers to submit proposals for the supply of...    │ │
│ │                                                                 │ │
│ │ 📅 Deadline: June 30, 2026                                      │ │
│ │                                                                 │ │
│ │                              [View Details →]  [📄 Download]    │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Ref: LGIHE/IT/002/2026                                          │ │
│ │                                                                 │ │
│ │ Consultancy Services for IT Infrastructure                      │ │
│ │                                                                 │ │
│ │ We are seeking experienced IT consultants to provide...         │ │
│ │                                                                 │ │
│ │ 📅 Deadline: July 15, 2026                                      │ │
│ │                                                                 │ │
│ │                              [View Details →]  [📄 Download]    │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## HTML Content Rendering Example

### Backend Response
```json
{
  "description": "<p>The Luigi Giussani Institute of Higher Education invites qualified suppliers to submit proposals.</p><h4>Scope of Work</h4><ul><li>Supply of office desks and chairs</li><li>Installation and setup</li><li>Warranty and maintenance</li></ul>",
  "requirements": "<h4>Eligibility Criteria</h4><ol><li>Valid business license</li><li>Minimum 5 years experience</li><li>References from at least 3 clients</li></ol><p><strong>Note:</strong> All documents must be certified.</p>"
}
```

### Frontend Display

```
┌─────────────────────────────────────────────────────────────────────┐
│ Tender Description                                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ The Luigi Giussani Institute of Higher Education invites qualified │
│ suppliers to submit proposals.                                      │
│                                                                     │
│ Scope of Work                                                       │
│                                                                     │
│ • Supply of office desks and chairs                                │
│ • Installation and setup                                           │
│ • Warranty and maintenance                                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ Requirements & Qualifications                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ Eligibility Criteria                                                │
│                                                                     │
│ 1. Valid business license                                          │
│ 2. Minimum 5 years experience                                      │
│ 3. References from at least 3 clients                              │
│                                                                     │
│ Note: All documents must be certified.                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Responsive Mobile View

### Mobile Display (Both Documents)

```
┌─────────────────────────┐
│ Tender Documents        │
├─────────────────────────┤
│                         │
│ ┌─────────────────────┐ │
│ │ 📄 Request for      │ │
│ │    Proposal (RFP)   │ │
│ │                     │ │
│ │ lgiheklasrv001...   │ │
│ │ 124.00 KB           │ │
│ │                     │ │
│ │   [Download] ⬇      │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ 📄 Terms of         │ │
│ │    Reference (ToR)  │ │
│ │                     │ │
│ │ lgiheklasrv001...   │ │
│ │ 188.93 KB           │ │
│ │                     │ │
│ │   [Download] ⬇      │ │
│ └─────────────────────┘ │
│                         │
└─────────────────────────┘
```

## Hover States

### Desktop Hover Effect

```
Normal State:
┌─────────────────────────────────────────────────────┐
│ 📄 Request for Proposal (RFP)      [Download] ⬇    │
│    lgiheklasrv0012026_rfp_052026.docx • 124.00 KB  │
└─────────────────────────────────────────────────────┘

Hover State (border changes to blue):
┌═════════════════════════════════════════════════════┐
│ 📄 Request for Proposal (RFP)      [Download] ⬇    │
│    lgiheklasrv0012026_rfp_052026.docx • 124.00 KB  │
└═════════════════════════════════════════════════════┘
```

## Color Scheme

- **Primary Color:** `#3d4d6f` (Dark blue)
- **Hover Color:** `#2f3d57` (Darker blue)
- **Border Color:** `#e5e7eb` (Light gray)
- **Hover Border:** `#3d4d6f` (Primary blue)
- **Background:** `#f9fafb` (Very light gray)
- **Text:** `#111827` (Almost black)
- **Secondary Text:** `#6b7280` (Medium gray)
