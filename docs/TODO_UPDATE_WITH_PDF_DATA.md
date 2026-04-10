# TODO: Update with Actual PDF Data

This document lists items that need to be updated with actual information from the PDF documents once they can be properly read.

## Files to Update

### 1. `/app/admissions/fees/page.tsx`

#### Fee Amounts to Verify/Update:
The current fees are placeholder estimates. Please verify and update with actual amounts from `REVISED TUTION AND OTHER FUNCTIONAL FEES FOR APPROVAL 2026.pdf`:

**Certificate Programmes:**
- [ ] Certificate in Early Childhood Care and Education
- [ ] Certificate in Child Care and Development

**Diploma Programmes:**
- [ ] Diploma in Pre-Primary Education
- [ ] Diploma in Primary Education
- [ ] Diploma in Educational Leadership and Management

**Undergraduate Programmes:**
- [ ] Bachelor of Pre-Primary Education
- [ ] Bachelor of Primary Education
- [ ] Bachelor of Arts with Education (Secondary)
- [ ] Bachelor of Science with Education (Secondary)

**Postgraduate Programmes:**
- [ ] Postgraduate Diploma in Primary Education
- [ ] Postgraduate Diploma in Educational Leadership and Management

**One-Time Fees:**
- [ ] Application Fee
- [ ] Admission Fee
- [ ] Caution Fee (Refundable)

**Bank Details:**
- [ ] Bank Name
- [ ] Account Name
- [ ] Account Number
- [ ] Branch Name

### 2. `/components/ApplicationForm.tsx`

#### Form Fields to Verify:
Compare with `LGIHE APPLICATION FORM 2026.pdf` and ensure all fields match:

**Personal Information Section:**
- [ ] Verify all personal information fields match PDF
- [ ] Check if any additional fields are needed
- [ ] Confirm field labels match exactly

**Contact Information Section:**
- [ ] Verify contact fields
- [ ] Check address format requirements

**Programme Selection:**
- [ ] Verify programme names match official names
- [ ] Confirm study modes available
- [ ] Verify intake periods

**Educational Background:**
- [ ] Check if grading system matches
- [ ] Verify year format requirements
- [ ] Confirm qualification fields

**Employment Information:**
- [ ] Verify employment fields
- [ ] Check if additional fields needed

**Next of Kin:**
- [ ] Verify required fields
- [ ] Check relationship options

**Additional Information:**
- [ ] Verify disability/medical condition fields
- [ ] Check declaration text matches PDF

**Missing Fields (if any):**
- [ ] Add any fields present in PDF but missing in form
- [ ] Remove any unnecessary fields

### 3. Additional Updates Needed

**Application Fee Payment:**
- [ ] Add payment instructions
- [ ] Add payment reference format
- [ ] Add payment deadline information

**Document Requirements:**
- [ ] List exact documents needed
- [ ] Specify document formats
- [ ] Add file size limits (for future file upload feature)

**Submission Instructions:**
- [ ] Add email address for PDF submissions
- [ ] Add physical address for in-person submissions
- [ ] Add office hours for submissions

## How to Update

### For Fees Page:
1. Open `lgihe/app/admissions/fees/page.tsx`
2. Locate the `fees` object (around line 20)
3. Update the tuition, functional, and total amounts for each programme
4. Update the one-time fees in the "One-Time Fees" section
5. Fill in the bank details in the "Bank Details" section

### For Application Form:
1. Open `lgihe/components/ApplicationForm.tsx`
2. Review the `FormData` interface (around line 7)
3. Add/remove fields as needed to match PDF
4. Update the `renderField` function to handle new field types
5. Update the `getFieldLabel` function with correct labels
6. Update the `sections` array if section structure changes

## Verification Steps

After updating with PDF data:

1. **Visual Comparison:**
   - [ ] Print PDF form
   - [ ] Print online form (or view side-by-side)
   - [ ] Verify all fields match

2. **Fee Verification:**
   - [ ] Compare fees table with PDF
   - [ ] Verify calculations (tuition + functional = total)
   - [ ] Check currency symbols

3. **Testing:**
   - [ ] Fill out online form completely
   - [ ] Verify all fields save correctly
   - [ ] Test form submission
   - [ ] Check mobile responsiveness

4. **Content Review:**
   - [ ] Verify programme names are official
   - [ ] Check spelling and grammar
   - [ ] Confirm contact information

## Notes

- The PDF files are located in `/public/resources/`
- Current implementation uses placeholder data
- All fees are in Uganda Shillings (UGX)
- Form uses localStorage for offline functionality
- No backend integration yet - form logs to console

## Contact

If you need help updating these files or have questions about the implementation, please contact the development team.
