# Abuse Reporting System - Flow Diagram

## System Flow Visualization

This document provides visual representations of the abuse reporting system's data flow and processes.

---

## User Journey Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER VISITS PAGE                          │
│                    /report-abuse                                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                   READS IMPORTANT INFORMATION                    │
│  • Confidentiality notice                                        │
│  • Emergency contacts                                            │
│  • Support resources                                             │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CHOOSES REPORT TYPE                           │
│                                                                  │
│  ┌──────────────────┐              ┌──────────────────┐        │
│  │   Anonymous      │              │   Identified     │        │
│  │   Report         │              │   Report         │        │
│  └────────┬─────────┘              └────────┬─────────┘        │
│           │                                  │                  │
│           │ Skips contact info               │ Provides contact │
│           │                                  │ information      │
└───────────┴──────────────────────────────────┴──────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                   FILLS INCIDENT DETAILS                         │
│  • Type of incident (required)                                   │
│  • Date of incident (required)                                   │
│  • Location (required)                                           │
│  • Persons involved (required)                                   │
│  • Detailed description (required)                               │
│  • Witnesses (optional)                                          │
│  • Previous reports (optional)                                   │
│  • Evidence available (optional)                                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SUBMITS FORM                                  │
│              (Client-side validation)                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  POST /api/report-abuse                          │
│              (JSON payload sent to backend)                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                   BACKEND PROCESSING                             │
│  1. Validate required fields                                     │
│  2. Generate unique Report ID                                    │
│  3. Determine if anonymous                                       │
│  4. Build email HTML                                             │
│  5. Send email to safeguarding team                              │
│  6. Log submission (no sensitive data)                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
                ▼                         ▼
    ┌──────────────────┐      ┌──────────────────┐
    │   SUCCESS        │      │   ERROR          │
    │   200 OK         │      │   400/500        │
    └────────┬─────────┘      └────────┬─────────┘
             │                         │
             ▼                         ▼
┌──────────────────────┐    ┌──────────────────────┐
│  Success Message     │    │  Error Message       │
│  • Report ID shown   │    │  • Retry option      │
│  • Form resets       │    │  • Contact info      │
│  • Confirmation      │    │  • Support email     │
└──────────────────────┘    └──────────────────────┘
```

---

## Backend Processing Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    API REQUEST RECEIVED                          │
│                POST /api/report-abuse                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  VALIDATE API KEY                                │
│         Check RESEND_API_KEY is configured                       │
└────────────────────────────┬────────────────────────────────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
                ▼                         ▼
         ┌──────────┐            ┌──────────────┐
         │   Valid  │            │   Invalid    │
         └────┬─────┘            └──────┬───────┘
              │                         │
              │                         ▼
              │              ┌──────────────────┐
              │              │ Return 500 Error │
              │              └──────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  VALIDATE REQUIRED FIELDS                        │
│  • incidentType                                                  │
│  • incidentDate                                                  │
│  • incidentLocation                                              │
│  • personsInvolved                                               │
│  • detailedDescription                                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
                ▼                         ▼
         ┌──────────┐            ┌──────────────┐
         │   Valid  │            │   Invalid    │
         └────┬─────┘            └──────┬───────┘
              │                         │
              │                         ▼
              │              ┌──────────────────┐
              │              │ Return 400 Error │
              │              └──────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  GENERATE REPORT ID                              │
│  Format: ABR-[timestamp]-[random]                                │
│  Example: ABR-1715234567890-ABC123XYZ                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│              DETERMINE REPORT TYPE                               │
│                                                                  │
│  Is anonymousReport = true OR                                    │
│  (no reporterName AND no reporterEmail)?                         │
│                                                                  │
│  ┌──────────────┐              ┌──────────────┐                │
│  │   YES        │              │   NO         │                │
│  │ Anonymous    │              │ Identified   │                │
│  └──────┬───────┘              └──────┬───────┘                │
└─────────┴──────────────────────────────┴────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  BUILD EMAIL HTML                                │
│  • Header with CONFIDENTIAL banner                               │
│  • Report ID and metadata                                        │
│  • Reporter info (if not anonymous)                              │
│  • Incident details                                              │
│  • Additional information                                        │
│  • Action required checklist                                     │
│  • Confidentiality notice                                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  SEND EMAIL VIA RESEND                           │
│  From: LGIHE Safeguarding <noreply@lgihe.org>                   │
│  To: safeguarding@lgihe.ac.ug                                    │
│  Subject: 🚨 URGENT: Abuse Report [ID] - [TYPE]                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
                ▼                         ▼
         ┌──────────┐            ┌──────────────┐
         │  Success │            │   Failure    │
         └────┬─────┘            └──────┬───────┘
              │                         │
              ▼                         ▼
┌──────────────────────┐    ┌──────────────────────┐
│  LOG SUBMISSION      │    │  LOG ERROR           │
│  (no sensitive data) │    │  Return 500 Error    │
└──────────┬───────────┘    └──────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────┐
│                  RETURN SUCCESS RESPONSE                         │
│  {                                                               │
│    "success": true,                                              │
│    "message": "Report submitted successfully",                   │
│    "reportId": "ABR-1715234567890-ABC123XYZ"                     │
│  }                                                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Email Delivery Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                  EMAIL SENT TO RESEND API                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  RESEND PROCESSES EMAIL                          │
│  • Validates sender domain                                       │
│  • Checks recipient address                                      │
│  • Scans for spam/malware                                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│              EMAIL DELIVERED TO RECIPIENT                        │
│              safeguarding@lgihe.ac.ug                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│              SAFEGUARDING TEAM RECEIVES EMAIL                    │
│                                                                  │
│  Email contains:                                                 │
│  • Report ID for tracking                                        │
│  • Incident type and severity                                    │
│  • All submitted details                                         │
│  • Action required checklist                                     │
│  • Confidentiality reminders                                     │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│              SAFEGUARDING TEAM TAKES ACTION                      │
│                                                                  │
│  1. Review report immediately                                    │
│  2. Assess severity and urgency                                  │
│  3. Contact relevant authorities if needed                       │
│  4. Follow up with reporter (if not anonymous)                   │
│  5. Document actions taken                                       │
│  6. Investigate incident                                         │
│  7. Implement protective measures                                │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

```
┌──────────────┐
│   Browser    │
│   (User)     │
└──────┬───────┘
       │
       │ 1. User fills form
       │
       ▼
┌──────────────────────────┐
│   React Component        │
│   /report-abuse/page.tsx │
│                          │
│   • Form state           │
│   • Validation           │
│   • Submit handler       │
└──────┬───────────────────┘
       │
       │ 2. POST request with JSON
       │
       ▼
┌──────────────────────────┐
│   API Route              │
│   /api/report-abuse      │
│                          │
│   • Validate fields      │
│   • Generate Report ID   │
│   • Build email          │
└──────┬───────────────────┘
       │
       │ 3. Send email
       │
       ▼
┌──────────────────────────┐
│   Resend Service         │
│   (Email Provider)       │
│                          │
│   • Process email        │
│   • Deliver to inbox     │
└──────┬───────────────────┘
       │
       │ 4. Email delivered
       │
       ▼
┌──────────────────────────┐
│   Safeguarding Team      │
│   safeguarding@lgihe.ac  │
│                          │
│   • Receive report       │
│   • Take action          │
└──────────────────────────┘
```

---

## State Diagram - Form Submission

```
┌─────────────┐
│   Initial   │
│   State     │
└──────┬──────┘
       │
       │ User fills form
       │
       ▼
┌─────────────┐
│   Filled    │
│   State     │
└──────┬──────┘
       │
       │ User clicks submit
       │
       ▼
┌─────────────┐
│ Submitting  │
│   State     │
│ (Loading)   │
└──────┬──────┘
       │
       ├─────────────────┐
       │                 │
       │ Success         │ Error
       │                 │
       ▼                 ▼
┌─────────────┐   ┌─────────────┐
│  Success    │   │   Error     │
│   State     │   │   State     │
│             │   │             │
│ • Show msg  │   │ • Show msg  │
│ • Reset     │   │ • Keep data │
│   form      │   │ • Allow     │
│             │   │   retry     │
└─────────────┘   └──────┬──────┘
                         │
                         │ User retries
                         │
                         ▼
                  ┌─────────────┐
                  │ Submitting  │
                  │   State     │
                  └─────────────┘
```

---

## Security Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INPUT                                │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  CLIENT-SIDE VALIDATION                          │
│  • Required fields check                                         │
│  • Format validation (email, date)                               │
│  • Length limits                                                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  HTTPS TRANSMISSION                              │
│  • Encrypted connection                                          │
│  • Secure headers                                                │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  SERVER-SIDE VALIDATION                          │
│  • Re-validate all fields                                        │
│  • Check data types                                              │
│  • Sanitize input                                                │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  SECURE EMAIL TRANSMISSION                       │
│  • API key authentication                                        │
│  • Encrypted email content                                       │
│  • Verified sender domain                                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  SECURE EMAIL STORAGE                            │
│  • Encrypted at rest                                             │
│  • Access controls                                               │
│  • Audit logging                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      PageTemplate                                │
│  (Layout wrapper with header and navigation)                     │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              ReportAbusePage Component                     │ │
│  │                                                            │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │           Alert Messages                             │ │ │
│  │  │  • Success banner                                    │ │ │
│  │  │  • Error banner                                      │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  │                                                            │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │           Information Sections                       │ │ │
│  │  │  • Important information box                         │ │ │
│  │  │  • Emergency contacts box                            │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  │                                                            │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │           Report Form                                │ │ │
│  │  │                                                      │ │ │
│  │  │  ┌────────────────────────────────────────────────┐ │ │ │
│  │  │  │  Anonymous Checkbox                            │ │ │ │
│  │  │  └────────────────────────────────────────────────┘ │ │ │
│  │  │                                                      │ │ │
│  │  │  ┌────────────────────────────────────────────────┐ │ │ │
│  │  │  │  Reporter Information Section                  │ │ │ │
│  │  │  │  (Conditional - hidden if anonymous)           │ │ │ │
│  │  │  │  • Name input                                  │ │ │ │
│  │  │  │  • Email input                                 │ │ │ │
│  │  │  │  • Phone input                                 │ │ │ │
│  │  │  │  • Relationship select                         │ │ │ │
│  │  │  │  • Preferred contact select                    │ │ │ │
│  │  │  └────────────────────────────────────────────────┘ │ │ │
│  │  │                                                      │ │ │
│  │  │  ┌────────────────────────────────────────────────┐ │ │ │
│  │  │  │  Incident Details Section                      │ │ │ │
│  │  │  │  • Incident type select (required)             │ │ │ │
│  │  │  │  • Incident date input (required)              │ │ │ │
│  │  │  │  • Location input (required)                   │ │ │ │
│  │  │  │  • Persons involved textarea (required)        │ │ │ │
│  │  │  │  • Description textarea (required)             │ │ │ │
│  │  │  │  • Witnesses textarea                          │ │ │ │
│  │  │  │  • Previous reports textarea                   │ │ │ │
│  │  │  │  • Evidence textarea                           │ │ │ │
│  │  │  └────────────────────────────────────────────────┘ │ │ │
│  │  │                                                      │ │ │
│  │  │  ┌────────────────────────────────────────────────┐ │ │ │
│  │  │  │  Submit Button                                 │ │ │ │
│  │  │  │  (with loading state)                          │ │ │ │
│  │  │  └────────────────────────────────────────────────┘ │ │ │
│  │  │                                                      │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  │                                                            │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │           Support Resources Section                  │ │ │
│  │  │  • On-campus support                                 │ │ │
│  │  │  • External resources                                │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  │                                                            │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │           Confidentiality Statement                  │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  │                                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
project-root/
│
├── app/
│   ├── report-abuse/
│   │   └── page.tsx                 # Frontend page component
│   │
│   └── api/
│       └── report-abuse/
│           └── route.ts             # Backend API endpoint
│
├── components/
│   └── Footer.tsx                   # Updated with abuse report link
│
├── docs/
│   ├── README.md                    # Documentation index
│   ├── abuse-reporting-system.md   # Full documentation
│   ├── abuse-reporting-backend-quickstart.md  # Quick reference
│   └── abuse-reporting-flow-diagram.md        # This file
│
└── lib/
    └── resend.ts                    # Email service configuration
```

---

**Document Version**: 1.0.0  
**Last Updated**: May 5, 2026  
**Related Documents**: 
- [Full Documentation](./abuse-reporting-system.md)
- [Backend Quick Start](./abuse-reporting-backend-quickstart.md)
