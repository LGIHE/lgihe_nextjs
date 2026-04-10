# Quick Reference - Recent Changes

## What Changed?

### ✅ Fixed Application Flow
- "How to Apply" page button now goes to `/admissions/apply` (not portal)

### ✅ New Pages Created
1. **Certificate Programmes** - `/admissions/certificate`
   - 2 programmes with full details
   
2. **Diploma Programmes** - `/admissions/diploma`
   - 3 programmes with full details

### ✅ Removed Content
- ❌ Scholarships page deleted
- ❌ International students page deleted
- ❌ All scholarship links removed from navigation
- ❌ All international student references removed

### ✅ Updated Pages
1. **FAQs** - Now has accurate tuition fees and LGIHE-specific content
2. **Requirements** - Detailed requirements for all programmes, no international content
3. **Prospectus** - Added certificate and diploma sections (now 4 total)
4. **Fees** - Removed scholarship link
5. **Admissions** - Updated quick links
6. **Navbar** - Fixed certificate/diploma links, removed scholarship/international links

## Quick Test URLs

### New Pages:
- http://localhost:3000/admissions/certificate
- http://localhost:3000/admissions/diploma

### Updated Pages:
- http://localhost:3000/admissions/how-to-apply (test "Start Application" button)
- http://localhost:3000/admissions/faqs (check tuition info)
- http://localhost:3000/admissions/requirements (verify no international content)
- http://localhost:3000/admissions/prospectus (check 4 programme levels)

### Should Show 404:
- http://localhost:3000/admissions/scholarships
- http://localhost:3000/admissions/international

## Navigation Changes

**Certificate & Diploma now have separate links:**
- Admissions → By Programme Level → Certificate Programmes
- Admissions → By Programme Level → Diploma Programmes

**Removed from navigation:**
- Scholarships (from About Admissions)
- International Students (from By Programme Level)

## Key Content Updates

### FAQs Now Include:
- Application fee: UGX 50,000
- Certificate fees: UGX 1,000,000/year
- Diploma fees: UGX 1,500,000 - 1,750,000/year
- Undergraduate fees: UGX 2,250,000 - 2,750,000/year
- Postgraduate fees: UGX 3,000,000 - 3,250,000/year
- Payment options with 5% discount for full payment

### Requirements Page Now Has:
- Detailed requirements for 2 certificate programmes
- Detailed requirements for 3 diploma programmes
- Detailed requirements for 4 undergraduate programmes
- Detailed requirements for 2 postgraduate programmes
- Credit transfer information
- No international student section

## Files Summary

**Created (2):**
- app/admissions/certificate/page.tsx
- app/admissions/diploma/page.tsx

**Deleted (2):**
- app/admissions/scholarships/page.tsx
- app/admissions/international/page.tsx

**Modified (7):**
- app/admissions/how-to-apply/page.tsx
- app/admissions/page.tsx
- app/admissions/fees/page.tsx
- app/admissions/faqs/page.tsx
- app/admissions/requirements/page.tsx
- app/admissions/prospectus/page.tsx
- components/Navbar.tsx

## Status
✅ All changes completed
✅ No TypeScript errors
✅ Ready for testing

---
Last Updated: April 10, 2026
