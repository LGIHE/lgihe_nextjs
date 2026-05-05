# Laravel Backend Implementation Example

This document provides complete Laravel backend code examples for the abuse reporting system.

---

## Controller

Create: `app/Http/Controllers/Api/V1/AbuseReportController.php`

```php
<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\AbuseReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class AbuseReportController extends Controller
{
    /**
     * Store a new abuse report
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Validate required fields
        $validator = Validator::make($request->all(), [
            'incidentType' => 'required|string|max:255',
            'incidentDate' => 'required|date',
            'incidentLocation' => 'required|string',
            'personsInvolved' => 'required|string',
            'detailedDescription' => 'required|string',
            // Optional fields
            'reporterName' => 'nullable|string|max:255',
            'reporterEmail' => 'nullable|email|max:255',
            'reporterPhone' => 'nullable|string|max:50',
            'reporterRelationship' => 'nullable|string|max:100',
            'witnessesPresent' => 'nullable|string',
            'previouslyReported' => 'nullable|string',
            'evidenceAvailable' => 'nullable|string',
            'preferredContact' => 'nullable|string|in:email,phone,no-contact',
            'anonymousReport' => 'nullable|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Required fields are missing',
                'errors' => $validator->errors()
            ], 400);
        }

        try {
            // Generate unique report ID
            $reportId = 'ABR-' . time() . '-' . strtoupper(substr(md5(uniqid(rand(), true)), 0, 9));
            
            // Determine if anonymous
            $isAnonymous = $request->input('anonymousReport', false) || 
                          (!$request->reporterName && !$request->reporterEmail);
            
            // Store in database
            $report = AbuseReport::create([
                'report_id' => $reportId,
                'reporter_name' => $isAnonymous ? null : $request->reporterName,
                'reporter_email' => $isAnonymous ? null : $request->reporterEmail,
                'reporter_phone' => $isAnonymous ? null : $request->reporterPhone,
                'reporter_relationship' => $isAnonymous ? null : $request->reporterRelationship,
                'incident_type' => $request->incidentType,
                'incident_date' => $request->incidentDate,
                'incident_location' => $request->incidentLocation,
                'persons_involved' => $request->personsInvolved,
                'detailed_description' => $request->detailedDescription,
                'witnesses_present' => $request->witnessesPresent,
                'previously_reported' => $request->previouslyReported,
                'evidence_available' => $request->evidenceAvailable,
                'preferred_contact' => $isAnonymous ? null : $request->preferredContact,
                'anonymous_report' => $isAnonymous,
                'status' => 'pending',
            ]);
            
            // Prepare email data
            $emailData = [
                'reportId' => $reportId,
                'isAnonymous' => $isAnonymous,
                'submissionDate' => now()->format('F j, Y, g:i a'),
                'report' => $report,
            ];
            
            // Send email to safeguarding team
            Mail::send('emails.abuse-report', $emailData, function ($message) use ($request, $reportId, $isAnonymous) {
                $message->to(config('mail.safeguarding_email', 'safeguarding@lgihe.ac.ug'))
                       ->subject("🚨 URGENT: Abuse Report [{$reportId}] - {$request->incidentType}")
                       ->from(config('mail.from.address'), config('mail.from.name'));
                
                // Set reply-to if not anonymous
                if (!$isAnonymous && $request->reporterEmail) {
                    $message->replyTo($request->reporterEmail, $request->reporterName);
                }
            });
            
            // Log submission (without sensitive data)
            Log::info("Abuse report submitted", [
                'report_id' => $reportId,
                'incident_type' => $request->incidentType,
                'anonymous' => $isAnonymous,
                'timestamp' => now()->toIso8601String()
            ]);
            
            return response()->json([
                'success' => true,
                'message' => 'Report submitted successfully',
                'reportId' => $reportId
            ], 200);
            
        } catch (\Exception $e) {
            Log::error('Error submitting abuse report', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to submit report. Please try again or contact us directly.'
            ], 500);
        }
    }
}
```

---

## Model

Create: `app/Models/AbuseReport.php`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AbuseReport extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
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

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'incident_date' => 'date',
        'anonymous_report' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the incident type label
     */
    public function getIncidentTypeLabelAttribute()
    {
        $types = [
            'physical-abuse' => 'Physical Abuse',
            'sexual-harassment' => 'Sexual Harassment',
            'sexual-assault' => 'Sexual Assault',
            'verbal-abuse' => 'Verbal Abuse',
            'bullying' => 'Bullying',
            'discrimination' => 'Discrimination',
            'stalking' => 'Stalking',
            'emotional-abuse' => 'Emotional/Psychological Abuse',
            'financial-exploitation' => 'Financial Exploitation',
            'neglect' => 'Neglect',
            'other' => 'Other',
        ];

        return $types[$this->incident_type] ?? $this->incident_type;
    }

    /**
     * Scope for pending reports
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    /**
     * Scope for anonymous reports
     */
    public function scopeAnonymous($query)
    {
        return $query->where('anonymous_report', true);
    }
}
```

---

## Migration

Create: `database/migrations/2026_05_05_000000_create_abuse_reports_table.php`

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('abuse_reports', function (Blueprint $table) {
            $table->id();
            $table->string('report_id', 50)->unique();
            
            // Reporter information (nullable for anonymous reports)
            $table->string('reporter_name')->nullable();
            $table->string('reporter_email')->nullable();
            $table->string('reporter_phone', 50)->nullable();
            $table->string('reporter_relationship', 100)->nullable();
            
            // Incident details (required)
            $table->string('incident_type');
            $table->date('incident_date');
            $table->text('incident_location');
            $table->text('persons_involved');
            $table->text('detailed_description');
            
            // Additional information (optional)
            $table->text('witnesses_present')->nullable();
            $table->text('previously_reported')->nullable();
            $table->text('evidence_available')->nullable();
            
            // Contact preferences
            $table->string('preferred_contact', 20)->nullable();
            $table->boolean('anonymous_report')->default(false);
            
            // Status tracking
            $table->string('status', 20)->default('pending');
            
            $table->timestamps();
            
            // Indexes for performance
            $table->index('report_id');
            $table->index('incident_type');
            $table->index('status');
            $table->index('anonymous_report');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abuse_reports');
    }
};
```

---

## Route

Add to: `routes/api.php`

```php
<?php

use App\Http\Controllers\Api\V1\AbuseReportController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    // Abuse reporting endpoint
    Route::post('/report-abuse', [AbuseReportController::class, 'store']);
});
```

---

## Email Template

Create: `resources/views/emails/abuse-report.blade.php`

```blade
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abuse Report - {{ $reportId }}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 700px; margin: 0 auto; background-color: #f5f5f5;">
        <!-- Header -->
        <div style="background-color: #dc2626; color: white; padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">⚠️ CONFIDENTIAL ABUSE REPORT</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">This report requires immediate attention</p>
        </div>
        
        <!-- Report ID Banner -->
        <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 20px;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
                <strong>Report ID:</strong> <span style="font-family: monospace; font-size: 16px;">{{ $reportId }}</span><br>
                <strong>Submitted:</strong> {{ $submissionDate }}<br>
                <strong>Report Type:</strong> {{ $isAnonymous ? '🔒 Anonymous Report' : '📋 Identified Report' }}
            </p>
        </div>

        <div style="padding: 20px;">
            @if (!$isAnonymous)
            <!-- Reporter Information -->
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #3d4d6f; margin-top: 0; border-bottom: 2px solid #3d4d6f; padding-bottom: 10px;">
                    👤 Reporter Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #4b5563;">Name:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{ $report->reporter_name ?? 'Not provided' }}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                        <td style="padding: 8px 0; color: #1f2937;">
                            @if($report->reporter_email)
                                <a href="mailto:{{ $report->reporter_email }}" style="color: #3d4d6f;">{{ $report->reporter_email }}</a>
                            @else
                                Not provided
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{ $report->reporter_phone ?? 'Not provided' }}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Relationship:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{ $report->reporter_relationship ?? 'Not specified' }}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Preferred Contact:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{ $report->preferred_contact ?? 'Not specified' }}</td>
                    </tr>
                </table>
            </div>
            @else
            <!-- Anonymous Report Notice -->
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-left: 4px solid #6366f1;">
                <h2 style="color: #3d4d6f; margin-top: 0;">
                    🔒 Anonymous Report
                </h2>
                <p style="margin: 0; color: #4b5563;">
                    This report was submitted anonymously. No contact information was provided by the reporter.
                </p>
            </div>
            @endif

            <!-- Incident Details -->
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #dc2626; margin-top: 0; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                    🚨 Incident Details
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #4b5563;">Type of Incident:</td>
                        <td style="padding: 8px 0; color: #1f2937;">
                            <span style="background-color: #fee2e2; color: #991b1b; padding: 4px 12px; border-radius: 12px; font-weight: 600;">
                                {{ $report->incident_type_label }}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Date of Incident:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{ $report->incident_date->format('F j, Y') }}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Location:</td>
                        <td style="padding: 8px 0; color: #1f2937;">{{ $report->incident_location }}</td>
                    </tr>
                </table>
            </div>

            <!-- Persons Involved -->
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">👥 Person(s) Involved</h3>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; border-left: 3px solid #3d4d6f;">
                    <p style="margin: 0; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">{{ $report->persons_involved }}</p>
                </div>
            </div>

            <!-- Detailed Description -->
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">📝 Detailed Description</h3>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; border-left: 3px solid #3d4d6f;">
                    <p style="margin: 0; line-height: 1.8; color: #1f2937; white-space: pre-wrap;">{{ $report->detailed_description }}</p>
                </div>
            </div>

            @if($report->witnesses_present)
            <!-- Witnesses -->
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">👁️ Witnesses Present</h3>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; border-left: 3px solid #3d4d6f;">
                    <p style="margin: 0; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">{{ $report->witnesses_present }}</p>
                </div>
            </div>
            @endif

            @if($report->previously_reported)
            <!-- Previous Reports -->
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">📋 Previously Reported</h3>
                <div style="background-color: #fef3c7; padding: 15px; border-radius: 4px; border-left: 3px solid #f59e0b;">
                    <p style="margin: 0; line-height: 1.6; color: #78350f; white-space: pre-wrap;">{{ $report->previously_reported }}</p>
                </div>
            </div>
            @endif

            @if($report->evidence_available)
            <!-- Evidence -->
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="color: #3d4d6f; margin-top: 0; font-size: 18px;">📎 Evidence Available</h3>
                <div style="background-color: #dbeafe; padding: 15px; border-radius: 4px; border-left: 3px solid #2563eb;">
                    <p style="margin: 0; line-height: 1.6; color: #1e3a8a; white-space: pre-wrap;">{{ $report->evidence_available }}</p>
                </div>
            </div>
            @endif

            <!-- Action Required Notice -->
            <div style="background-color: #fef2f2; border: 2px solid #dc2626; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #dc2626; margin-top: 0; font-size: 18px;">
                    ⚠️ IMMEDIATE ACTION REQUIRED
                </h3>
                <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #7f1d1d; line-height: 1.8;">
                    <li>Review this report immediately and assess the severity</li>
                    <li>Contact the safeguarding team and relevant authorities</li>
                    <li>Document all actions taken in response to this report</li>
                    <li>Ensure confidentiality is maintained throughout the process</li>
                    @if(!$isAnonymous && $report->reporter_email)
                    <li>Follow up with the reporter within 24-48 hours</li>
                    @endif
                </ul>
            </div>

            <!-- Confidentiality Notice -->
            <div style="background-color: #1f2937; color: white; padding: 20px; border-radius: 8px; text-align: center;">
                <p style="margin: 0; font-size: 12px; line-height: 1.6;">
                    <strong>⚠️ CONFIDENTIAL DOCUMENT ⚠️</strong><br>
                    This report contains sensitive information and must be handled in accordance with LGIHE's safeguarding policies 
                    and data protection regulations. Unauthorized disclosure or distribution is strictly prohibited.
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #3d4d6f; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Luigi Giussani Institute of Higher Education</p>
            <p style="margin: 5px 0;">Safeguarding & Student Welfare Department</p>
            <p style="margin: 5px 0;">Email: safeguarding@lgihe.ac.ug | Emergency: (+256) 414 222 517</p>
        </div>
    </div>
</body>
</html>
```

---

## CORS Configuration

Update: `config/cors.php`

```php
<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'http://localhost:3000',
        'https://lgihe.ac.ug',
        'https://www.lgihe.ac.ug',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];
```

---

## Configuration

Add to: `config/mail.php`

```php
'safeguarding_email' => env('SAFEGUARDING_EMAIL', 'safeguarding@lgihe.ac.ug'),
```

Add to: `.env`

```env
SAFEGUARDING_EMAIL=safeguarding@lgihe.ac.ug
```

---

## Testing

### Run Migration
```bash
php artisan migrate
```

### Test Endpoint
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

### Expected Response
```json
{
  "success": true,
  "message": "Report submitted successfully",
  "reportId": "ABR-1715234567890-ABC123XYZ"
}
```

---

**Document Version**: 1.0.0  
**Last Updated**: May 5, 2026  
**Related Documents**: 
- [Full Documentation](./abuse-reporting-system.md)
- [Backend Quick Start](./abuse-reporting-backend-quickstart.md)
