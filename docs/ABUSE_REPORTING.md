# Abuse Reporting System

## Overview

A confidential platform for reporting incidents of abuse, harassment, and safety concerns at LGIHE.

## Features

- **Anonymous reporting** (optional)
- **Confidential submission**
- **Email notifications** to admin
- **Secure data handling**
- **Accessible UI**

## User Flow

1. User visits `/report-abuse`
2. Fills out the form (name optional)
3. Submits report
4. Admin receives email notification
5. Confirmation shown to user

## Form Fields

- **Type of Incident** (required) - Dropdown selection
- **Description** (required) - Detailed incident description
- **Date of Incident** (required)
- **Location** (required)
- **Reporter Name** (optional) - For anonymous reporting
- **Contact Email** (optional)

## Backend Integration

### API Endpoint

**POST** `/api/report-abuse`

**Request Body:**
```json
{
  "incidentType": "harassment",
  "description": "Detailed description...",
  "incidentDate": "2026-05-05",
  "location": "Main Campus",
  "reporterName": "John Doe",
  "contactEmail": "john@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Report submitted successfully"
}
```

### Email Notification

Admin receives email with:
- Incident type
- Description
- Date and location
- Reporter info (if provided)
- Submission timestamp

## Implementation Files

- **Frontend**: `app/report-abuse/page.tsx`
- **API Route**: `app/api/report-abuse/route.ts`
- **Email Template**: Inline in API route

## Security

- Form validation on client and server
- Rate limiting recommended
- Sanitized input
- Secure email transmission
- No data stored in frontend

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader friendly
- Clear labels and instructions
- Error messages

## Testing

Test the form locally:
1. Start dev server: `npm run dev`
2. Visit `http://localhost:3000/report-abuse`
3. Fill and submit form
4. Check console for API response

## Production Setup

1. Configure email service (SMTP or API)
2. Set admin email in environment variables
3. Add rate limiting
4. Enable HTTPS
5. Test email delivery

---

**Last Updated**: May 5, 2026
