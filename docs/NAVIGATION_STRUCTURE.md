# Navigation Structure for Application System

## Site Navigation Flow

```
Home (/)
│
└── Admissions (/admissions)
    │
    ├── Apply Now (/admissions/apply) ⭐ NEW
    │   │
    │   ├── Option 1: Online Application
    │   │   └── Multi-step Form (6 sections)
    │   │       ├── 1. Personal Information
    │   │       ├── 2. Contact Information
    │   │       ├── 3. Programme Selection
    │   │       ├── 4. Educational Background
    │   │       ├── 5. Employment & Next of Kin
    │   │       └── 6. Additional Info & Declaration
    │   │
    │   └── Option 2: Download PDF Form
    │       └── LGIHE APPLICATION FORM 2026.pdf
    │
    ├── How to Apply (/admissions/how-to-apply)
    │
    ├── Entry Requirements (/admissions/requirements)
    │
    ├── Tuition & Fees (/admissions/fees) ⭐ UPDATED
    │   ├── Certificate Programmes Tab
    │   ├── Diploma Programmes Tab
    │   ├── Undergraduate Programmes Tab
    │   └── Postgraduate Programmes Tab
    │
    ├── Scholarships (/admissions/scholarships)
    │
    ├── Important Dates (/admissions/dates)
    │
    └── Application Portal (/admissions/portal)
```

## User Journey: Prospective Student

### Journey 1: Online Application
```
1. Visit Homepage
   ↓
2. Click "Admissions" in navigation
   ↓
3. Click "Apply Now" (featured button)
   ↓
4. Choose "Start Online Application"
   ↓
5. Fill out form section by section
   ↓
6. Form auto-saves progress
   ↓
7. Complete all 6 sections
   ↓
8. Accept declaration
   ↓
9. Submit application
   ↓
10. Receive confirmation
```

### Journey 2: PDF Application
```
1. Visit Homepage
   ↓
2. Click "Admissions" in navigation
   ↓
3. Click "Apply Now"
   ↓
4. Choose "Download PDF Form"
   ↓
5. Download PDF
   ↓
6. Fill manually
   ↓
7. Submit via email or in person
```

### Journey 3: Check Fees
```
1. Visit Homepage
   ↓
2. Click "Admissions" in navigation
   ↓
3. Click "Tuition & Fees"
   ↓
4. Select programme category tab
   ↓
5. View detailed fee breakdown
   ↓
6. Check payment options
   ↓
7. Note bank details
```

## Page Hierarchy

### Level 1: Main Navigation
- Home
- About
- **Admissions** ← Entry point
- Academics
- Student Life
- Research
- Contact

### Level 2: Admissions Section
- Admissions Overview
- **Apply Now** ← Primary CTA
- How to Apply
- Requirements
- **Tuition & Fees** ← Updated
- Scholarships
- Important Dates
- Application Portal

### Level 3: Application Process
- **Application Options Page** ← New
  - Online Form ← New
  - PDF Download ← Links to existing PDF

## Call-to-Action Hierarchy

### Primary CTAs (Most Important)
1. **"Apply Now"** - Featured on admissions page
2. **"Start Online Application"** - On apply page
3. **"Submit Application"** - Final step of form

### Secondary CTAs
1. "Download PDF Form" - Alternative application method
2. "Learn More About Scholarships" - On fees page
3. "View Requirements" - On admissions page

### Tertiary CTAs
1. "Previous" / "Next" - Form navigation
2. "Clear Draft" - Form management
3. Category tabs - Fees page navigation

## Mobile Navigation

### Hamburger Menu Structure
```
☰ Menu
├── Home
├── About
├── Admissions
│   ├── Apply Now ⭐
│   ├── How to Apply
│   ├── Requirements
│   ├── Fees
│   ├── Scholarships
│   ├── Dates
│   └── Portal
├── Academics
├── Student Life
├── Research
└── Contact
```

## Breadcrumb Navigation

### Apply Page
```
Home > Admissions > Apply Now
```

### Fees Page
```
Home > Admissions > Tuition & Fees
```

### Application Form
```
Home > Admissions > Apply Now > Online Application
```

## Quick Links Section (Admissions Page)

```
┌─────────────────────────────────────┐
│  Apply Now                    →     │ ← Featured (Blue background)
├─────────────────────────────────────┤
│  How to Apply                 →     │
├─────────────────────────────────────┤
│  Entry Requirements           →     │
├─────────────────────────────────────┤
│  Tuition & Fees               →     │
├─────────────────────────────────────┤
│  Scholarships                 →     │
├─────────────────────────────────────┤
│  Important Dates              →     │
├─────────────────────────────────────┤
│  Application Portal           →     │
└─────────────────────────────────────┘
```

## Form Navigation (Multi-step)

```
Progress: [████████░░░░░░░░░░░░] 33%

Section 1: Personal Information
Section 2: Contact Information
Section 3: Programme Selection      ← Current
Section 4: Educational Background
Section 5: Employment & Next of Kin
Section 6: Additional Info & Declaration

[Previous]              [Clear Draft]  [Next]
```

## Fees Page Navigation (Tabs)

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Certificate  │   Diploma    │ Undergraduate│ Postgraduate │
│  Programmes  │  Programmes  │  Programmes  │  Programmes  │
└──────────────┴──────────────┴──────────────┴──────────────┘
        ↑ Active tab highlighted in blue
```

## Back Navigation Options

### From Application Form
```
← Back to application options
```

### From Fees Page
```
Browser back button or main navigation
```

### From Apply Page
```
Browser back button or main navigation
```

## External Links

### PDF Download
```
/resources/LGIHE APPLICATION FORM 2026.pdf
```

### Scholarships (from Fees page)
```
/admissions/scholarships
```

## Search & Discovery

### How Users Find Application Page

1. **Direct Navigation:**
   - Admissions → Apply Now

2. **From Homepage:**
   - Hero CTA → Admissions → Apply Now

3. **From Fees Page:**
   - Check fees → See "Apply Now" in navigation

4. **From Requirements Page:**
   - Read requirements → Apply Now

5. **From Search (future):**
   - Search "apply" → Apply Now page

## Accessibility Navigation

### Keyboard Navigation
- Tab through form fields
- Enter to submit
- Arrow keys for dropdowns
- Escape to close modals

### Screen Reader Navigation
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on form fields
- Skip to content link
- Landmark regions

## URL Structure

```
/admissions                    - Admissions overview
/admissions/apply              - Application options ⭐ NEW
/admissions/fees               - Tuition & fees ⭐ UPDATED
/admissions/how-to-apply       - Application guide
/admissions/requirements       - Entry requirements
/admissions/scholarships       - Financial aid
/admissions/dates              - Important dates
/admissions/portal             - Application portal
```

## Navigation Best Practices Implemented

✅ Clear hierarchy
✅ Consistent navigation across pages
✅ Prominent CTAs
✅ Breadcrumb trails
✅ Back navigation options
✅ Progress indicators
✅ Mobile-friendly
✅ Keyboard accessible
✅ Logical flow

## Future Navigation Enhancements

### Phase 2
- [ ] Application status tracking page
- [ ] Applicant dashboard
- [ ] Document upload page
- [ ] Payment page

### Phase 3
- [ ] Interview scheduling page
- [ ] Admission decision page
- [ ] Enrollment confirmation page
- [ ] Student portal integration

## Notes

- All navigation is client-side (Next.js routing)
- No page reloads for better UX
- Form state persists across navigation
- Mobile navigation collapses to hamburger menu
- All links are keyboard accessible

## Support

For navigation issues or suggestions, contact the development team.
