# Abuse Reporting System - UI Guide

## Visual Design & User Experience

This document describes the visual design and user experience of the abuse reporting page.

---

## Page Layout

### Header Section
- **Title**: "Report Abuse" (large, bold)
- **Subtitle**: "Confidential Reporting System"
- **Color Scheme**: Navy blue (#3d4d6f) for headers, matching LGIHE brand

---

## Alert Messages

### Success Message (Green)
```
┌─────────────────────────────────────────────────────────────┐
│ ✓ Report Submitted Successfully                             │
│                                                              │
│ Thank you for reporting this incident. Your report has been │
│ received and will be handled with the utmost                │
│ confidentiality. Our team will review the information and   │
│ take appropriate action. If you provided contact            │
│ information, we will reach out to you within 24-48 hours.   │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Light green (#f0fdf4)
- **Border**: Green (#86efac)
- **Icon**: Green checkmark
- **Auto-dismiss**: After 5 seconds (optional)

### Error Message (Red)
```
┌─────────────────────────────────────────────────────────────┐
│ ⚠ Submission Failed                                         │
│                                                              │
│ We encountered an error while submitting your report.       │
│ Please try again or contact us directly at                  │
│ safeguarding@lgihe.ac.ug                                    │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Light red (#fef2f2)
- **Border**: Red (#fca5a5)
- **Icon**: Warning triangle

---

## Information Boxes

### Important Information Box (Blue)
```
┌─────────────────────────────────────────────────────────────┐
│ ℹ Important Information                                     │
│                                                              │
│ • All reports are treated with strict confidentiality       │
│ • You can choose to remain anonymous                        │
│ • Reports are reviewed by trained safeguarding officers     │
│ • We take all reports seriously and will investigate        │
│   thoroughly                                                 │
│ • If you are in immediate danger, please contact emergency  │
│   services: Police 999                                       │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Light blue (#eff6ff)
- **Border-Left**: Blue bar (4px, #3b82f6)
- **Text**: Dark blue (#1e3a8a)

### Emergency Contacts Box (Red)
```
┌─────────────────────────────────────────────────────────────┐
│ ⚠ Emergency Contacts                                        │
│                                                              │
│ If you are in immediate danger, please contact:             │
│                                                              │
│ • Police Emergency: 999 or 112                              │
│ • LGIHE Security: (+256) 414 222 517                        │
│ • Safeguarding Officer: safeguarding@lgihe.ac.ug           │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Light red (#fef2f2)
- **Border-Left**: Red bar (4px, #ef4444)
- **Text**: Dark red (#7f1d1d)

---

## Form Sections

### Anonymous Reporting Checkbox
```
┌─────────────────────────────────────────────────────────────┐
│ ☐ Submit this report anonymously                           │
│                                                              │
│   If checked, you can skip the contact information fields   │
│   below. However, providing contact details allows us to    │
│   follow up with you for additional information if needed.  │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Light gray (#f9fafb)
- **Border**: Gray (#e5e7eb)
- **Padding**: Generous spacing for easy clicking

### Reporter Information Section
**Visibility**: Hidden when "Anonymous" is checked

```
Your Information (Optional for Anonymous Reports)
─────────────────────────────────────────────────

Your Name
┌─────────────────────────────────────────────────────────────┐
│ Full name                                                    │
└─────────────────────────────────────────────────────────────┘

Your Email                          Your Phone Number
┌──────────────────────────────┐   ┌──────────────────────────┐
│ email@example.com            │   │ +256 XXX XXX XXX         │
└──────────────────────────────┘   └──────────────────────────┘

Your Relationship to the Incident
┌─────────────────────────────────────────────────────────────┐
│ Select your relationship                              ▼     │
└─────────────────────────────────────────────────────────────┘
Options:
- I am the victim
- I witnessed the incident
- I heard about it from someone else
- I am a concerned party
- Other

Preferred Contact Method
┌─────────────────────────────────────────────────────────────┐
│ Email                                                 ▼     │
└─────────────────────────────────────────────────────────────┘
Options:
- Email
- Phone
- Do not contact me
```

### Incident Details Section
**All fields in this section are required**

```
Incident Details
─────────────────────────────────────────────────

Type of Incident *
┌─────────────────────────────────────────────────────────────┐
│ Select incident type                                  ▼     │
└─────────────────────────────────────────────────────────────┘
Options:
- Physical Abuse
- Sexual Harassment
- Sexual Assault
- Verbal Abuse
- Bullying
- Discrimination
- Stalking
- Emotional/Psychological Abuse
- Financial Exploitation
- Neglect
- Other

Date of Incident *                  Location of Incident *
┌──────────────────────────────┐   ┌──────────────────────────┐
│ MM/DD/YYYY            📅     │   │ e.g., Library, Room 101  │
└──────────────────────────────┘   └──────────────────────────┘

Person(s) Involved *
┌─────────────────────────────────────────────────────────────┐
│ Please provide names, descriptions, or any identifying      │
│ information about the person(s) involved                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘

Detailed Description of the Incident *
┌─────────────────────────────────────────────────────────────┐
│ Please provide as much detail as possible about what        │
│ happened, including the sequence of events, what was said   │
│ or done, and any other relevant information                 │
│                                                              │
│                                                              │
│                                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
Include specific details such as dates, times, locations, and 
any witnesses present.

Were There Any Witnesses?
┌─────────────────────────────────────────────────────────────┐
│ If yes, please provide names or descriptions of witnesses   │
│                                                              │
└─────────────────────────────────────────────────────────────┘

Has This Been Reported Before?
┌─────────────────────────────────────────────────────────────┐
│ If yes, please provide details about when and to whom it    │
│ was reported                                                 │
└─────────────────────────────────────────────────────────────┘

Is There Any Evidence Available?
┌─────────────────────────────────────────────────────────────┐
│ e.g., photos, videos, messages, emails, documents (please   │
│ describe what evidence exists)                               │
└─────────────────────────────────────────────────────────────┘
Do not upload evidence here. If you have evidence, please 
mention it and our team will contact you about secure 
submission methods.
```

---

## Submit Button

### Default State
```
┌─────────────────────────────────────────────────────────────┐
│              🛡️ Submit Confidential Report                  │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Navy blue (#3d4d6f)
- **Text**: White
- **Width**: Full width
- **Padding**: Large (py-4)
- **Border Radius**: Rounded (8px)
- **Hover**: Darker blue (#2f3d57)

### Loading State
```
┌─────────────────────────────────────────────────────────────┐
│              ⟳ Submitting Report...                         │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Gray (#9ca3af)
- **Icon**: Spinning loader
- **Cursor**: Not allowed
- **Disabled**: True

### Disclaimer Text
```
By submitting this form, you acknowledge that the information 
provided is accurate to the best of your knowledge.
```
- **Size**: Small (12px)
- **Color**: Gray (#6b7280)
- **Alignment**: Center

---

## Support Resources Section

```
┌─────────────────────────────────────────────────────────────┐
│ Support Resources                                            │
│                                                              │
│ On-Campus Support          External Resources               │
│ ─────────────────          ──────────────────               │
│ • Student Counseling       • Uganda Police: 999 or 112      │
│   Services                 • FIDA Uganda:                    │
│ • Health Center              (+256) 414 267 983             │
│ • Dean of Students         • Sauti 116 Child Helpline: 116  │
│   Office                   • Mental Health Uganda:           │
│ • Campus Security            (+256) 800 100 066             │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Light gray (#f9fafb)
- **Border**: Gray (#e5e7eb)
- **Layout**: Two columns on desktop, stacked on mobile

---

## Confidentiality Statement (Footer)

```
┌─────────────────────────────────────────────────────────────┐
│ Confidentiality Commitment: All reports submitted through   │
│ this form are handled with strict confidentiality.          │
│ Information will only be shared with authorized personnel   │
│ on a need-to-know basis as part of the investigation and    │
│ resolution process. We are committed to protecting your     │
│ privacy while ensuring a safe environment for all members   │
│ of our community.                                            │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Navy blue (#3d4d6f)
- **Text**: White
- **Padding**: Medium
- **Border Radius**: Rounded (8px)

---

## Responsive Design

### Desktop (≥768px)
- Two-column layout for contact fields
- Side-by-side date and location fields
- Wide form inputs
- Generous spacing

### Tablet (768px - 1024px)
- Single column for most fields
- Maintained two-column for date/location
- Adjusted padding

### Mobile (<768px)
- Full single-column layout
- Stacked all fields
- Touch-friendly input sizes (min 44px height)
- Larger tap targets for checkboxes
- Reduced padding for better space usage

---

## Accessibility Features

### Keyboard Navigation
- All form fields accessible via Tab key
- Logical tab order
- Enter key submits form
- Escape key clears focus

### Screen Reader Support
- Proper ARIA labels on all inputs
- Required fields announced
- Error messages associated with fields
- Success/error alerts announced

### Visual Accessibility
- High contrast text (WCAG AA compliant)
- Clear focus indicators
- Large, readable fonts (16px minimum)
- Color not sole indicator of meaning
- Icons paired with text

### Form Validation
- Inline validation messages
- Clear error indicators
- Required field markers (*)
- Helpful placeholder text

---

## Color Palette

### Primary Colors
- **Navy Blue**: #3d4d6f (headers, buttons, footer)
- **White**: #ffffff (backgrounds, button text)

### Status Colors
- **Success Green**: #10b981 (success messages)
- **Error Red**: #ef4444 (error messages, emergency)
- **Info Blue**: #3b82f6 (information boxes)
- **Warning Yellow**: #f59e0b (caution notices)

### Neutral Colors
- **Gray 50**: #f9fafb (light backgrounds)
- **Gray 200**: #e5e7eb (borders)
- **Gray 600**: #4b5563 (secondary text)
- **Gray 900**: #111827 (primary text)

---

## Typography

### Font Family
- **Primary**: Poppins (sans-serif)
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Sizes
- **Page Title**: 2.5rem (40px) - Bold
- **Section Headers**: 1.5rem (24px) - Bold
- **Subsection Headers**: 1.125rem (18px) - Semibold
- **Body Text**: 1rem (16px) - Regular
- **Small Text**: 0.875rem (14px) - Regular
- **Tiny Text**: 0.75rem (12px) - Regular

### Font Weights
- **Bold**: 700 (headers, emphasis)
- **Semibold**: 600 (subheaders)
- **Medium**: 500 (labels)
- **Regular**: 400 (body text)

---

## Spacing System

### Padding
- **Extra Small**: 0.5rem (8px)
- **Small**: 0.75rem (12px)
- **Medium**: 1rem (16px)
- **Large**: 1.5rem (24px)
- **Extra Large**: 2rem (32px)

### Margins
- **Between Sections**: 2rem (32px)
- **Between Fields**: 1rem (16px)
- **Between Labels and Inputs**: 0.25rem (4px)

### Border Radius
- **Small**: 0.375rem (6px) - inputs
- **Medium**: 0.5rem (8px) - boxes
- **Large**: 0.75rem (12px) - buttons
- **Full**: 9999px - pills

---

## Interactive States

### Input Fields
- **Default**: Gray border, white background
- **Focus**: Blue border, blue ring
- **Error**: Red border, red ring
- **Disabled**: Gray background, gray text

### Buttons
- **Default**: Navy background, white text
- **Hover**: Darker navy, slight scale
- **Active**: Even darker, pressed effect
- **Disabled**: Gray background, no pointer

### Links
- **Default**: Blue text, no underline
- **Hover**: Darker blue, underline
- **Visited**: Purple (standard links only)
- **Focus**: Blue ring

---

## Animation & Transitions

### Smooth Transitions
- **Duration**: 200ms
- **Easing**: ease-in-out
- **Properties**: background-color, border-color, transform

### Loading Spinner
- **Animation**: Continuous rotation
- **Duration**: 1s
- **Easing**: linear

### Success/Error Messages
- **Entrance**: Fade in from top
- **Duration**: 300ms
- **Exit**: Fade out (optional auto-dismiss)

---

## Footer Link Placement

The "Report Abuse" link appears in the footer alongside:
- Privacy Policy
- Terms of Use
- Accessibility

```
Footer Bottom Bar
─────────────────────────────────────────────────────────────
© 2026 Luigi Giussani Institute of Higher Education. 
All rights reserved.

Privacy Policy | Terms of Use | Accessibility | Report Abuse
```

- **Color**: White with 70% opacity
- **Hover**: Full white (100% opacity)
- **Separator**: Vertical bar (|)
- **Spacing**: 1.5rem (24px) between links

---

## Mobile-Specific Considerations

### Touch Targets
- Minimum 44x44px for all interactive elements
- Increased padding on mobile buttons
- Larger checkbox/radio button hit areas

### Form Inputs
- Native mobile keyboards triggered
- Email input shows @ key
- Phone input shows number pad
- Date input shows date picker

### Scrolling
- Smooth scroll to success message
- Sticky submit button (optional)
- Auto-scroll to first error

---

## Performance Optimizations

### Image Loading
- No images in form (faster load)
- SVG icons (scalable, small file size)

### Code Splitting
- Page loaded on-demand
- Minimal JavaScript bundle

### Caching
- Static page generation
- CDN delivery

---

## Browser Compatibility

### Supported Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 10+)

### Fallbacks
- CSS Grid with Flexbox fallback
- Modern form inputs with text fallback
- JavaScript validation with HTML5 fallback

---

## Print Styles (Optional)

If users need to print the form:
- Remove background colors
- Black text on white
- Hide navigation
- Show all form fields
- Page breaks between sections

---

**Document Version**: 1.0.0  
**Last Updated**: May 5, 2026  
**Related Documents**: 
- [Full Documentation](./abuse-reporting-system.md)
- [Flow Diagrams](./abuse-reporting-flow-diagram.md)
