# Testing Guide for New Application Features

## Quick Start

### Running the Application

```bash
cd lgihe
npm install  # if not already done
npm run dev
```

The application will be available at `http://localhost:3000`

## Features to Test

### 1. Application Page

**URL:** `http://localhost:3000/admissions/apply`

#### Test Scenarios:

**A. PDF Download Option**
1. Navigate to `/admissions/apply`
2. Click "Download PDF Form" button
3. Verify PDF downloads correctly
4. ✓ Expected: `LGIHE APPLICATION FORM 2026.pdf` downloads

**B. Online Application Form**
1. Navigate to `/admissions/apply`
2. Click "Start Online Application" button
3. ✓ Expected: Form appears with first section visible

**C. Form Navigation**
1. Fill out some fields in Section 1
2. Click "Next" button
3. ✓ Expected: Moves to Section 2
4. Click "Previous" button
5. ✓ Expected: Returns to Section 1 with data intact

**D. Auto-Save Functionality**
1. Fill out several fields
2. Wait 2-3 seconds
3. ✓ Expected: See "Draft saved" message appear
4. Refresh the page
5. ✓ Expected: Form data is restored
6. ✓ Expected: See "Draft loaded from previous session" message

**E. Offline Capability**
1. Fill out some form fields
2. Open browser DevTools (F12)
3. Go to Network tab
4. Select "Offline" mode
5. Continue filling form
6. ✓ Expected: Form continues to work
7. ✓ Expected: Data still saves to localStorage

**F. Form Validation**
1. Try to proceed without filling required fields
2. ✓ Expected: Browser validation prevents submission
3. Fill all required fields
4. Navigate to last section
5. Try to submit without checking declaration
6. ✓ Expected: Alert appears asking to accept declaration

**G. Clear Draft**
1. Fill out some fields
2. Click "Clear Draft" button
3. Confirm the action
4. ✓ Expected: Page reloads with empty form

**H. Form Submission**
1. Fill out all required fields
2. Check the declaration checkbox
3. Click "Submit Application"
4. ✓ Expected: Success alert appears
5. Open browser console (F12)
6. ✓ Expected: Form data logged to console

### 2. Fees Page

**URL:** `http://localhost:3000/admissions/fees`

#### Test Scenarios:

**A. Category Tabs**
1. Navigate to `/admissions/fees`
2. ✓ Expected: Certificate programmes shown by default
3. Click "Diploma Programmes" tab
4. ✓ Expected: Diploma fees displayed
5. Click each tab
6. ✓ Expected: Correct fees shown for each category

**B. Fee Information Display**
1. Check each programme category
2. ✓ Expected: All programmes listed
3. ✓ Expected: Tuition, functional, and total fees shown
4. ✓ Expected: Fees formatted correctly (UGX X,XXX,XXX)

**C. Additional Information**
1. Scroll down to "One-Time Fees" section
2. ✓ Expected: Application, admission, and caution fees shown
3. Check "Other Costs" section
4. ✓ Expected: Accommodation, books, meals estimates shown
5. Check "Payment Information" section
6. ✓ Expected: Payment options and bank details visible

**D. Responsive Design**
1. Resize browser window to mobile size
2. ✓ Expected: Tabs stack vertically or scroll horizontally
3. ✓ Expected: Table scrolls horizontally if needed
4. ✓ Expected: All content remains readable

### 3. Updated Admissions Page

**URL:** `http://localhost:3000/admissions`

#### Test Scenarios:

**A. Apply Now Link**
1. Navigate to `/admissions`
2. Locate "Apply Now" in Quick Links
3. ✓ Expected: "Apply Now" is highlighted/featured
4. Click "Apply Now"
5. ✓ Expected: Redirects to `/admissions/apply`

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (Chrome Mobile, Safari Mobile)

## Device Testing

Test on different screen sizes:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

## LocalStorage Testing

### View Saved Data:
1. Open browser DevTools (F12)
2. Go to "Application" tab (Chrome) or "Storage" tab (Firefox)
3. Expand "Local Storage"
4. Click on your localhost URL
5. Look for key: `lgihe_application_draft`
6. ✓ Expected: See JSON data with form values

### Clear Saved Data:
1. In same location as above
2. Right-click on `lgihe_application_draft`
3. Select "Delete"
4. Refresh page
5. ✓ Expected: Form is empty

## Common Issues & Solutions

### Issue: Form data not saving
**Solution:** Check browser console for errors. Ensure localStorage is enabled in browser settings.

### Issue: PDF not downloading
**Solution:** Verify PDF file exists at `/public/resources/LGIHE APPLICATION FORM 2026.pdf`

### Issue: Fees not displaying
**Solution:** Check browser console for JavaScript errors. Verify fees data structure in code.

### Issue: Form submission not working
**Solution:** This is expected - backend integration not yet implemented. Check console for logged data.

## Performance Testing

### Load Time:
1. Open DevTools Network tab
2. Refresh page
3. ✓ Expected: Page loads in < 3 seconds

### Form Responsiveness:
1. Type in form fields
2. ✓ Expected: No lag or delay
3. Switch between sections
4. ✓ Expected: Instant navigation

## Accessibility Testing

### Keyboard Navigation:
1. Use Tab key to navigate form
2. ✓ Expected: Can reach all fields
3. Use Enter to submit
4. ✓ Expected: Form submits

### Screen Reader:
1. Enable screen reader (if available)
2. Navigate through form
3. ✓ Expected: All labels read correctly

## Bug Reporting

If you find issues, please document:
1. What you were doing
2. What you expected to happen
3. What actually happened
4. Browser and device information
5. Screenshots (if applicable)
6. Console errors (if any)

## Next Steps After Testing

Once testing is complete:
1. Update fees with actual amounts from PDF
2. Verify form fields match PDF exactly
3. Add backend API integration
4. Implement file upload functionality
5. Add email confirmation system
6. Create admin dashboard for applications

## Questions?

Contact the development team for assistance with testing or if you encounter any issues.
