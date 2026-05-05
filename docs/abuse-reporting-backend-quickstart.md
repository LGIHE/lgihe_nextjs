# Abuse Reporting System - Backend Quick Start Guide

## Quick Reference for Backend Implementation

This is a condensed guide for implementing the backend processing of abuse reports. For full documentation, see `abuse-reporting-system.md`.

---

## API Endpoint

**URL**: `{NEXT_PUBLIC_API_URL}/report-abuse`  
**Default**: `http://localhost:8000/api/v1/report-abuse`  
**Method**: `POST`  
**Content-Type**: `application/json`

**Note**: The frontend sends data to your Laravel backend API, not a Next.js API route.

---

## Request Body Fields

### Required Fields (Always)
```json
{
  "incidentType": "string",           // Type of abuse (see options below)
  "incidentDate": "YYYY-MM-DD",       // Date of incident
  "incidentLocation": "string",       // Where it happened
  "personsInvolved": "string",        // Who was involved
  "detailedDescription": "string"     // Full description
}
```

### Optional Fields (Reporter Information)
```json
{
  "reporterName": "string",           // Reporter's name
  "reporterEmail": "string",          // Reporter's email
  "reporterPhone": "string",          // Reporter's phone
  "reporterRelationship": "string",   // Relationship to incident
  "preferredContact": "string",       // How to contact (email/phone/no-contact)
  "anonymousReport": boolean          // Is this anonymous?
}
```

### Optional Fields (Additional Details)
```json
{
  "witnessesPresent": "string",       // Witness information
  "previouslyReported": "string",     // Prior reporting details
  "evidenceAvailable": "string"       // Evidence description
}
```

---

## Incident Type Options

| Value | Display Name |
|-------|--------------|
| `physical-abuse` | Physical Abuse |
| `sexual-harassment` | Sexual Harassment |
| `sexual-assault` | Sexual Assault |
| `verbal-abuse` | Verbal Abuse |
| `bullying` | Bullying |
| `discrimination` | Discrimination |
| `stalking` | Stalking |
| `emotional-abuse` | Emotional/Psychological Abuse |
| `financial-exploitation` | Financial Exploitation |
| `neglect` | Neglect |
| `other` | Other |

---

## Response Format

### Success (200 OK)
```json
{
  "success": true,
  "message": "Report submitted successfully",
  "reportId": "ABR-1715234567890-ABC123XYZ"
}
```

### Error (400 Bad Request)
```json
{
  "success": false,
  "message": "Required fields are missing"
}
```

### Error (500 Internal Server Error)
```json
{
  "success": false,
  "message": "Failed to submit report"
}
```

---

## Report ID Format

```
ABR-[TIMESTAMP]-[RANDOM]
```

Example: `ABR-1715234567890-ABC123XYZ`

- **ABR**: Abuse Report prefix
- **TIMESTAMP**: Unix timestamp (milliseconds)
- **RANDOM**: 9-character alphanumeric string (uppercase)

### Generation Code
```typescript
const reportId = `ABR-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
```

---

## Email Configuration

### Email Details
- **From**: `LGIHE Safeguarding <noreply@lgihe.org>`
- **To**: `safeguarding@lgihe.ac.ug`
- **Reply-To**: Reporter's email (if provided) or `safeguarding@lgihe.ac.ug`
- **Subject**: `🚨 URGENT: Abuse Report [REPORT-ID] - [INCIDENT-TYPE]`

### Example Subject
```
🚨 URGENT: Abuse Report [ABR-1715234567890-ABC123XYZ] - sexual-harassment
```

---

## Environment Variables Required

```env
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

# Production
NEXT_PUBLIC_API_URL=https://admin.lgihe.org/api/v1
```

```env
# Laravel Backend (.env)
MAIL_MAILER=smtp
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USERNAME=your-username
MAIL_PASSWORD=your-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@lgihe.org
MAIL_FROM_NAME="LGIHE Safeguarding"
```

---

## Backend Processing Steps

1. **Receive POST request** from Next.js frontend with JSON body
2. **Validate required fields** in Laravel controller:
   - `incidentType`
   - `incidentDate`
   - `incidentLocation`
   - `personsInvolved`
   - `detailedDescription`
3. **Generate unique Report ID** (format: `ABR-[timestamp]-[random]`)
4. **Determine if anonymous** (check `anonymousReport` or missing contact info)
5. **Store in database** (optional - recommended for tracking)
6. **Build email HTML** with all report details
7. **Send email** to safeguarding team using Laravel Mail
8. **Log submission** (without sensitive details)
9. **Return JSON response** with success status and Report ID

---

## Database Schema (Recommended for Laravel)

Laravel migration for storing abuse reports:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('abuse_reports', function (Blueprint $table) {
            $table->id();
            $table->string('report_id')->unique();
            $table->string('reporter_name')->nullable();
            $table->string('reporter_email')->nullable();
            $table->string('reporter_phone')->nullable();
            $table->string('reporter_relationship')->nullable();
            $table->string('incident_type');
            $table->date('incident_date');
            $table->text('incident_location');
            $table->text('persons_involved');
            $table->text('detailed_description');
            $table->text('witnesses_present')->nullable();
            $table->text('previously_reported')->nullable();
            $table->text('evidence_available')->nullable();
            $table->string('preferred_contact')->nullable();
            $table->boolean('anonymous_report')->default(false);
            $table->string('status')->default('pending');
            $table->timestamps();
            
            // Indexes for quick lookups
            $table->index('report_id');
            $table->index('incident_type');
            $table->index('status');
            $table->index('created_at');
        });
    }

    public function down()
    {
        Schema::dropIfExists('abuse_reports');
    }
};
```

Laravel Model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AbuseReport extends Model
{
    protected $fillable = [
        'report_id',
        'reporter_name',
        'reporter_email',
        'reporter_phone',
        'reporter_relationship',
        'incident_type',
        'incident_date',
        'incident_location',
        'persons_involved',
        'detailed_description',
        'witnesses_present',
        'previously_reported',
        'evidence_available',
        'preferred_contact',
        'anonymous_report',
        'status',
    ];

    protected $casts = [
        'incident_date' => 'date',
        'anonymous_report' => 'boolean',
    ];
}
```

---

## Security Checklist

- [ ] Use HTTPS only
- [ ] Validate all input fields
- [ ] Sanitize data before storing/emailing
- [ ] Rate limit the API endpoint
- [ ] Log submissions (without sensitive data)
- [ ] Encrypt data at rest (if storing in database)
- [ ] Restrict access to safeguarding email
- [ ] Set up email delivery monitoring
- [ ] Implement CORS if needed
- [ ] Use environment variables for secrets

---

## Testing Commands

### Test with cURL
```bash
curl -X POST http://localhost:8000/api/v1/report-abuse \
  -H "Content-Type: application/json" \
  -d '{
    "anonymousReport": true,
    "incidentType": "bullying",
    "incidentDate": "2026-05-01",
    "incidentLocation": "Library",
    "personsInvolved": "Test Person",
    "detailedDescription": "This is a test report"
  }'
```

### Test with JavaScript (from browser console on your site)
```javascript
fetch(process.env.NEXT_PUBLIC_API_URL + '/report-abuse', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    anonymousReport: true,
    incidentType: 'bullying',
    incidentDate: '2026-05-01',
    incidentLocation: 'Library',
    personsInvolved: 'Test Person',
    detailedDescription: 'This is a test report'
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## Email Service Alternatives

### Current: Laravel Mail with SMTP
```php
// In Laravel controller
Mail::send('emails.abuse-report', $data, function ($message) {
    $message->to('safeguarding@lgihe.ac.ug')
           ->subject('🚨 URGENT: Abuse Report')
           ->from('noreply@lgihe.org', 'LGIHE Safeguarding');
});
```

### Alternative: Mailgun
```env
MAIL_MAILER=mailgun
MAILGUN_DOMAIN=your-domain.com
MAILGUN_SECRET=your-mailgun-secret
```

### Alternative: SendGrid
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.sendgrid.net
MAIL_PORT=587
MAIL_USERNAME=apikey
MAIL_PASSWORD=your-sendgrid-api-key
```

### Alternative: AWS SES
```env
MAIL_MAILER=ses
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_DEFAULT_REGION=us-east-1
```

---

## Monitoring & Logging

### What to Log
```typescript
console.log(`Abuse report submitted: ${reportId}`);
console.log(`- Type: ${formData.incidentType}`);
console.log(`- Anonymous: ${isAnonymous}`);
console.log(`- Timestamp: ${new Date().toISOString()}`);
```

### What NOT to Log
- Reporter's personal information
- Detailed incident descriptions
- Names of persons involved
- Any sensitive content from the report

---

## Common Issues & Solutions

### Issue: Email not received
1. Check spam/junk folder
2. Verify RESEND_API_KEY is set
3. Check Resend dashboard for delivery status
4. Verify sender domain is verified

### Issue: 400 Bad Request
1. Check all required fields are present
2. Verify field names match exactly
3. Ensure date format is YYYY-MM-DD
4. Check JSON is valid

### Issue: 500 Internal Server Error
1. Check server logs for details
2. Verify email service is configured
3. Test email service separately
4. Check environment variables

---

## Next Steps After Implementation

1. **Test thoroughly** with both anonymous and identified reports
2. **Set up monitoring** for email delivery
3. **Train staff** on handling reports
4. **Create response procedures** for different incident types
5. **Set up escalation paths** for urgent reports
6. **Regular audits** of the system
7. **Update documentation** as needed

---

## Support Contacts

- **Technical Issues**: tech@lgihe.ac.ug
- **Safeguarding Team**: safeguarding@lgihe.ac.ug
- **Emergency**: (+256) 414 222 517

---

**Document Version**: 1.0.0  
**Last Updated**: May 5, 2026  
**See Also**: `abuse-reporting-system.md` (full documentation)
