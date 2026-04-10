# LGIHE Application System Documentation

## Overview
This document describes the new application system and updated fees page for the Luigi Giussani Institute of Higher Education website.

## New Features

### 1. Application Page (`/admissions/apply`)

#### Features:
- **Dual Application Options:**
  - Online application form with auto-save functionality
  - PDF download option for manual completion

- **Online Application Form:**
  - Multi-step form with 6 sections:
    1. Personal Information
    2. Contact Information
    3. Programme Selection
    4. Educational Background
    5. Employment & Next of Kin
    6. Additional Information & Declaration
  
  - **Offline Capabilities:**
    - Auto-save to browser localStorage every second
    - Progress persists across browser sessions
    - Works without internet connection
    - Data saved locally until submission
  
  - **User Experience:**
    - Progress bar showing completion status
    - Visual feedback for saved drafts
    - Section-by-section navigation
    - Form validation
    - Clear draft option

- **Form Fields Include:**
  - Personal details (name, DOB, gender, nationality, etc.)
  - Contact information (email, phone, address)
  - Programme selection (type, choices, study mode, intake)
  - Educational background (O-Level, A-Level, other qualifications)
  - Employment information (if applicable)
  - Next of kin details
  - Medical/disability information
  - Declaration checkbox

### 2. Updated Fees Page (`/admissions/fees`)

#### Features:
- **Interactive Programme Categories:**
  - Certificate Programmes
  - Diploma Programmes
  - Undergraduate Programmes
  - Postgraduate Programmes

- **Detailed Fee Breakdown:**
  - Tuition fees per programme
  - Functional fees (registration, exams, library, ICT)
  - Total annual costs
  - One-time fees (application, admission, caution)
  - Estimated additional costs (accommodation, books, meals)

- **Programme-Specific Fees:**
  Each programme displays:
  - Programme name
  - Tuition amount
  - Functional fees
  - Total cost per year

- **Payment Information:**
  - Payment options (full payment, semester-based, installments)
  - Bank details section (to be filled with actual details)
  - Discount information

- **Financial Aid Section:**
  - Link to scholarships page
  - Information about available financial support

### 3. Updated Admissions Page

- Added prominent "Apply Now" button in quick links
- Highlighted application link for better visibility

## Technical Implementation

### Components Created:
1. **`/app/admissions/apply/page.tsx`**
   - Main application page with option selection
   - Handles switching between online form and PDF download

2. **`/components/ApplicationForm.tsx`**
   - Complete form implementation
   - LocalStorage integration for offline functionality
   - Multi-step form logic
   - Form validation

### Technologies Used:
- **React Hooks:** useState, useEffect for state management
- **LocalStorage API:** For offline data persistence
- **TypeScript:** Type-safe form data handling
- **Tailwind CSS:** Responsive styling

## Data Persistence

### LocalStorage Key:
- `lgihe_application_draft` - Stores the entire form state

### Data Structure:
```typescript
interface FormData {
  // Personal Information
  surname: string;
  givenName: string;
  // ... (all form fields)
}
```

### Auto-Save Behavior:
- Saves automatically 1 second after user stops typing
- Shows "Draft saved" confirmation message
- Loads saved data on page reload
- Clears data after successful submission

## User Workflow

### Online Application:
1. User visits `/admissions/apply`
2. Chooses "Start Online Application"
3. Fills out form section by section
4. Progress is automatically saved
5. Can leave and return anytime
6. Submits when complete

### PDF Application:
1. User visits `/admissions/apply`
2. Clicks "Download PDF Form"
3. Downloads `LGIHE APPLICATION FORM 2026.pdf`
4. Fills manually
5. Submits via email or in person

## Fee Structure (2026)

### Certificate Programmes:
- Tuition: UGX 800,000/year
- Functional: UGX 200,000/year
- Total: UGX 1,000,000/year

### Diploma Programmes:
- Tuition: UGX 1,200,000 - 1,400,000/year
- Functional: UGX 300,000 - 350,000/year
- Total: UGX 1,500,000 - 1,750,000/year

### Undergraduate Programmes:
- Tuition: UGX 1,800,000 - 2,200,000/year
- Functional: UGX 450,000 - 550,000/year
- Total: UGX 2,250,000 - 2,750,000/year

### Postgraduate Programmes:
- Tuition: UGX 2,400,000 - 2,600,000/year
- Functional: UGX 600,000 - 650,000/year
- Total: UGX 3,000,000 - 3,250,000/year

## Future Enhancements

### Recommended Improvements:
1. **Backend Integration:**
   - Connect form submission to database
   - Email confirmation system
   - Application tracking portal

2. **File Uploads:**
   - Photo upload
   - Document attachments (certificates, ID, etc.)
   - Resume/CV upload

3. **Payment Integration:**
   - Online payment gateway
   - Application fee payment
   - Payment confirmation

4. **Enhanced Validation:**
   - Real-time field validation
   - Document verification
   - Duplicate application prevention

5. **Admin Dashboard:**
   - View submitted applications
   - Application status management
   - Applicant communication system

## Notes

- The fee amounts are placeholder values and should be updated with actual 2026 fees from the tuition document
- Bank details section needs to be filled with actual banking information
- Form submission currently logs to console - needs backend API integration
- PDF form is referenced from `/public/resources/` folder

## Testing Checklist

- [ ] Online form saves data to localStorage
- [ ] Form data persists after page reload
- [ ] All form fields validate correctly
- [ ] PDF download works
- [ ] Fees page displays all programmes correctly
- [ ] Category switching works on fees page
- [ ] Mobile responsive design works
- [ ] Form submission shows confirmation
- [ ] Clear draft functionality works
- [ ] Progress bar updates correctly

## Support

For technical issues or questions about the application system, contact the development team.
