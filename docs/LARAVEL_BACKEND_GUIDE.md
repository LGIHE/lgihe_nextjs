# Laravel Backend Integration Guide

## Overview
This guide explains how to set up a separate Laravel backend for managing content (news, jobs, events, media) while keeping this Next.js application as the frontend.

---

## Architecture

```
┌─────────────────────────────────┐
│   Next.js Frontend (Public)     │
│   - Display news, jobs, events  │
│   - Application forms            │
│   - Public pages                 │
│   - Fetches data via API         │
└─────────────────────────────────┘
              ↓ HTTP Requests
┌─────────────────────────────────┐
│   Laravel Backend (Admin)        │
│   - Admin authentication         │
│   - Content management (CMS)     │
│   - Media uploads                │
│   - RESTful API endpoints        │
└─────────────────────────────────┘
```

---

## Step 1: Laravel Backend Setup

### 1.1 Create Laravel Project
```bash
composer create-project laravel/laravel lgihe-backend
cd lgihe-backend
```

### 1.2 Install Required Packages
```bash
# API authentication
composer require laravel/sanctum

# Image processing
composer require intervention/image

# CORS handling
php artisan config:publish cors
```

### 1.3 Database Schema
Create migrations for your content:

```bash
php artisan make:migration create_news_table
php artisan make:migration create_jobs_table
php artisan make:migration create_events_table
php artisan make:migration create_media_table
php artisan make:migration create_tenders_table
php artisan make:migration create_research_table
```

**Example Migration (News):**
```php
// database/migrations/xxxx_create_news_table.php
Schema::create('news', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('slug')->unique();
    $table->text('excerpt')->nullable();
    $table->longText('content');
    $table->string('featured_image')->nullable();
    $table->string('category')->nullable();
    $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
    $table->timestamp('published_at')->nullable();
    $table->foreignId('created_by')->constrained('users');
    $table->timestamps();
    $table->softDeletes();
    
    $table->index(['status', 'published_at']);
    $table->index('slug');
});
```

### 1.4 Models
```bash
php artisan make:model News
php artisan make:model Job
php artisan make:model Event
php artisan make:model Media
```

**Example Model (News):**
```php
// app/Models/News.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title', 'slug', 'excerpt', 'content', 
        'featured_image', 'category', 'status', 
        'published_at', 'created_by'
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published')
                    ->whereNotNull('published_at')
                    ->where('published_at', '<=', now());
    }
}
```

### 1.5 API Controllers
```bash
php artisan make:controller Api/NewsController --api
php artisan make:controller Api/JobController --api
php artisan make:controller Api/EventController --api
```

**Example Controller (News):**
```php
// app/Http/Controllers/Api/NewsController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    // Public endpoint - no auth required
    public function index(Request $request)
    {
        $news = News::published()
            ->with('creator:id,name')
            ->latest('published_at')
            ->paginate($request->get('per_page', 12));

        return response()->json($news);
    }

    // Public endpoint - single news item
    public function show($slug)
    {
        $news = News::published()
            ->where('slug', $slug)
            ->with('creator:id,name')
            ->firstOrFail();

        return response()->json($news);
    }

    // Admin endpoints (protected by Sanctum)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'nullable|string',
            'category' => 'nullable|string',
            'status' => 'required|in:draft,published,archived',
            'published_at' => 'nullable|date',
            'featured_image' => 'nullable|image|max:2048',
        ]);

        $validated['slug'] = \Str::slug($validated['title']);
        $validated['created_by'] = auth()->id();

        if ($request->hasFile('featured_image')) {
            $path = $request->file('featured_image')->store('news', 'public');
            $validated['featured_image'] = $path;
        }

        $news = News::create($validated);

        return response()->json($news, 201);
    }

    public function update(Request $request, News $news)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'excerpt' => 'nullable|string',
            'category' => 'nullable|string',
            'status' => 'sometimes|in:draft,published,archived',
            'published_at' => 'nullable|date',
            'featured_image' => 'nullable|image|max:2048',
        ]);

        if (isset($validated['title'])) {
            $validated['slug'] = \Str::slug($validated['title']);
        }

        if ($request->hasFile('featured_image')) {
            $path = $request->file('featured_image')->store('news', 'public');
            $validated['featured_image'] = $path;
        }

        $news->update($validated);

        return response()->json($news);
    }

    public function destroy(News $news)
    {
        $news->delete();
        return response()->json(null, 204);
    }
}
```

### 1.6 API Routes
```php
// routes/api.php
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\EventController;

// Public routes (no authentication)
Route::prefix('v1')->group(function () {
    Route::get('news', [NewsController::class, 'index']);
    Route::get('news/{slug}', [NewsController::class, 'show']);
    
    Route::get('jobs', [JobController::class, 'index']);
    Route::get('jobs/{id}', [JobController::class, 'show']);
    
    Route::get('events', [EventController::class, 'index']);
    Route::get('events/{id}', [EventController::class, 'show']);
});

// Protected admin routes (requires authentication)
Route::prefix('v1/admin')->middleware('auth:sanctum')->group(function () {
    Route::apiResource('news', NewsController::class)->except(['index', 'show']);
    Route::apiResource('jobs', JobController::class)->except(['index', 'show']);
    Route::apiResource('events', EventController::class)->except(['index', 'show']);
    Route::post('media/upload', [MediaController::class, 'upload']);
});

// Authentication routes
Route::post('v1/auth/login', [AuthController::class, 'login']);
Route::post('v1/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('v1/auth/me', [AuthController::class, 'me'])->middleware('auth:sanctum');
```

### 1.7 CORS Configuration
```php
// config/cors.php
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://localhost:3000',
        'https://yourdomain.com', // Your production frontend URL
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

---

## Step 2: Next.js Frontend Updates

### 2.1 Create API Client
Create a new file for API communication:

```typescript
// lib/api-client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

interface FetchOptions extends RequestInit {
  token?: string;
}

async function apiRequest<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// Public API functions
export const newsApi = {
  getAll: (page = 1, perPage = 12) =>
    apiRequest<any>(`/news?page=${page}&per_page=${perPage}`),
  
  getBySlug: (slug: string) =>
    apiRequest<any>(`/news/${slug}`),
};

export const jobsApi = {
  getAll: (page = 1, perPage = 12) =>
    apiRequest<any>(`/jobs?page=${page}&per_page=${perPage}`),
  
  getById: (id: string) =>
    apiRequest<any>(`/jobs/${id}`),
};

export const eventsApi = {
  getAll: (page = 1, perPage = 12) =>
    apiRequest<any>(`/events?page=${page}&per_page=${perPage}`),
  
  getById: (id: string) =>
    apiRequest<any>(`/events/${id}`),
};
```

### 2.2 Update Environment Variables
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

# For production
# NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api/v1
```

### 2.3 Update Components to Fetch from Laravel
Example for NewsSection component:

```typescript
// components/NewsSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { newsApi } from '@/lib/api-client';

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await newsApi.getAll(1, 6);
        setNews(data.data); // Laravel pagination returns data in 'data' key
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section>
      {/* Your news display logic */}
    </section>
  );
}
```

### 2.4 Update Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

---

## Step 3: Database Migration

Since you're moving from MySQL to Laravel:

### 3.1 Export Existing Data (if any)
```bash
# From your current database
mysqldump -u username -p database_name news jobs events > data_backup.sql
```

### 3.2 Import to Laravel Database
```bash
# After running Laravel migrations
mysql -u username -p laravel_database < data_backup.sql
```

---

## Step 4: Deployment

### 4.1 Laravel Backend Deployment
**Option 1: Traditional Server (VPS)**
```bash
# On your server
git clone your-laravel-repo
cd lgihe-backend
composer install --optimize-autoloader --no-dev
php artisan key:generate
php artisan migrate --force
php artisan storage:link
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set up Nginx/Apache to serve Laravel
```

**Option 2: Laravel Forge/Vapor**
- Use Laravel Forge for easy deployment
- Configure domain: api.yourdomain.com

### 4.2 Next.js Frontend Deployment
Keep your current Vercel deployment, just update:
```bash
# Environment variable on Vercel
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api/v1
```

---

## Step 5: Admin Panel (Laravel)

### 5.1 Use Laravel Filament (Recommended)
```bash
composer require filament/filament:"^3.0"
php artisan filament:install --panels
php artisan make:filament-resource News
```

**Or build custom admin with:**
- Laravel Breeze/Jetstream for authentication
- Custom Blade views for admin panel
- Vue.js/React for admin SPA

---

## API Endpoints Summary

### Public Endpoints (No Auth)
```
GET  /api/v1/news              - List all published news
GET  /api/v1/news/{slug}       - Get single news item
GET  /api/v1/jobs              - List all active jobs
GET  /api/v1/jobs/{id}         - Get single job
GET  /api/v1/events            - List all upcoming events
GET  /api/v1/events/{id}       - Get single event
```

### Admin Endpoints (Requires Auth)
```
POST   /api/v1/admin/news      - Create news
PUT    /api/v1/admin/news/{id} - Update news
DELETE /api/v1/admin/news/{id} - Delete news
POST   /api/v1/admin/jobs      - Create job
PUT    /api/v1/admin/jobs/{id} - Update job
DELETE /api/v1/admin/jobs/{id} - Delete job
POST   /api/v1/admin/media/upload - Upload media
```

---

## Security Checklist

- [ ] Enable CORS only for your frontend domain
- [ ] Use Laravel Sanctum for API authentication
- [ ] Validate all inputs in controllers
- [ ] Use HTTPS in production
- [ ] Set up rate limiting on API routes
- [ ] Implement proper file upload validation
- [ ] Use environment variables for sensitive data
- [ ] Enable CSRF protection for admin panel
- [ ] Set up database backups
- [ ] Monitor API logs

---

## Next Steps

1. **Remove admin dependencies from Next.js** (already done)
2. **Set up Laravel project** with the structure above
3. **Create API endpoints** for all content types
4. **Update Next.js components** to fetch from Laravel API
5. **Build admin panel** in Laravel (use Filament for speed)
6. **Deploy both applications** separately
7. **Test integration** thoroughly

---

## Recommended Tools

- **Laravel Filament**: Fast admin panel builder
- **Laravel Sanctum**: API authentication
- **Intervention Image**: Image processing
- **Laravel Debugbar**: Development debugging
- **Laravel Telescope**: Application monitoring

---

## Questions?

Common scenarios:

**Q: How do I handle image uploads?**
A: Use Laravel's storage system with `php artisan storage:link` and serve images from Laravel's public storage.

**Q: Should I use server-side or client-side rendering in Next.js?**
A: Use Server Components for SEO-critical pages (news, jobs) and Client Components for interactive features.

**Q: How do I cache API responses?**
A: Use Next.js's built-in caching with `fetch()` or implement Redis caching in Laravel.

**Q: What about real-time updates?**
A: Consider Laravel Broadcasting with Pusher or Laravel WebSockets for real-time features.
