# LGIHE Website - New Architecture

## 🏗️ Architecture Overview

This project has been restructured to separate the **frontend (Next.js)** from the **backend/admin panel (Laravel)**.

```
┌─────────────────────────────────────────────────────────────┐
│                    LGIHE Website System                      │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
        ┌───────▼────────┐         ┌───────▼────────┐
        │  Next.js       │         │  Laravel       │
        │  Frontend      │◄────────┤  Backend       │
        │  (This Repo)   │  API    │  (Separate)    │
        └────────────────┘         └────────────────┘
        │                           │
        │ - Public pages            │ - Admin panel
        │ - Display content         │ - Content management
        │ - Forms                   │ - Media uploads
        │ - SEO optimized           │ - RESTful API
        │                           │ - Authentication
        │                           │
        │ Deploy: Vercel            │ Deploy: VPS/Forge
        │ URL: lgihe.org            │ URL: api.lgihe.org
        └───────────────────────────┴────────────────┘
```

---

## 📁 Project Structure

### Frontend (Next.js) - Current Repository

```
lgihe_nextjs/
├── app/                          # Next.js 13+ App Router
│   ├── about/                    # About pages
│   ├── academics/                # Academic programmes
│   ├── admissions/               # Admissions info
│   ├── api/                      # API routes (contact, analytics)
│   │   ├── analytics/            # Analytics endpoints
│   │   ├── contact/              # Contact form
│   │   └── submit-application/   # Application submission
│   ├── careers/                  # Job listings (fetch from Laravel)
│   ├── events/                   # Events (fetch from Laravel)
│   ├── news/                     # News (fetch from Laravel)
│   └── ...
├── components/                   # React components
│   ├── NewsSection.tsx           # News display
│   ├── EventsSection.tsx         # Events display
│   ├── Navbar.tsx                # Navigation
│   └── ...
├── lib/                          # Utilities
│   ├── api-client.ts             # ⭐ Laravel API client
│   ├── analytics.ts              # Analytics utilities
│   ├── consent.ts                # Cookie consent
│   └── ...
├── public/                       # Static assets
├── .env.local                    # Environment variables
└── package.json                  # Dependencies

⭐ Key File: lib/api-client.ts
   - All functions to communicate with Laravel backend
   - newsApi, jobsApi, eventsApi, etc.
```

### Backend (Laravel) - To Be Created

```
lgihe-backend/                    # New Laravel project
├── app/
│   ├── Http/Controllers/Api/     # API controllers
│   │   ├── NewsController.php
│   │   ├── JobController.php
│   │   ├── EventController.php
│   │   └── ...
│   └── Models/                   # Eloquent models
│       ├── News.php
│       ├── Job.php
│       └── ...
├── database/migrations/          # Database schema
├── routes/
│   └── api.php                   # API routes
├── config/
│   └── cors.php                  # CORS configuration
└── ...
```

---

## 🔄 Data Flow

### 1. Content Creation (Admin)
```
Admin → Laravel Admin Panel → Database → Laravel API
```

### 2. Content Display (Public)
```
User → Next.js Frontend → Laravel API → Database → Response → Display
```

### Example Flow: Viewing News
1. User visits `lgihe.org/news`
2. Next.js page calls `newsApi.getAll()` from `lib/api-client.ts`
3. Request sent to `api.lgihe.org/api/v1/news`
4. Laravel returns JSON data
5. Next.js renders the news items

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (for Next.js)
- PHP 8.1+ (for Laravel backend)
- MySQL/PostgreSQL database
- Composer (PHP package manager)

### Frontend Setup (This Repository)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
   RESEND_API_KEY=your_resend_api_key
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

### Backend Setup (Laravel)

Follow the complete guide in **`LARAVEL_BACKEND_GUIDE.md`**

Quick start:
```bash
# Create Laravel project
composer create-project laravel/laravel lgihe-backend
cd lgihe-backend

# Install Sanctum for API auth
composer require laravel/sanctum

# Set up database and run migrations
php artisan migrate

# Install Filament for admin panel (recommended)
composer require filament/filament:"^3.0"
php artisan filament:install --panels

# Run Laravel server
php artisan serve
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **LARAVEL_BACKEND_GUIDE.md** | Complete Laravel setup guide with code examples |
| **MIGRATION_CHECKLIST.md** | Step-by-step checklist for migration |
| **COMPONENT_UPDATE_EXAMPLE.md** | Examples of updating components to use API |
| **README_ARCHITECTURE.md** | This file - architecture overview |

---

## 🔌 API Integration

### Using the API Client

The `lib/api-client.ts` file provides ready-to-use functions:

```typescript
import { newsApi, jobsApi, eventsApi } from '@/lib/api-client';

// Fetch news
const news = await newsApi.getAll(page, perPage);
const singleNews = await newsApi.getBySlug('news-slug');

// Fetch jobs
const jobs = await jobsApi.getAll(page, perPage);
const job = await jobsApi.getById(jobId);

// Fetch events
const events = await eventsApi.getAll(page, perPage);
const event = await eventsApi.getById(eventId);
```

### API Endpoints (Laravel)

#### Public Endpoints (No Authentication)
```
GET  /api/v1/news              - List published news
GET  /api/v1/news/{slug}       - Get single news item
GET  /api/v1/jobs              - List active jobs
GET  /api/v1/jobs/{id}         - Get single job
GET  /api/v1/events            - List upcoming events
GET  /api/v1/events/{id}       - Get single event
GET  /api/v1/tenders           - List open tenders
GET  /api/v1/research          - List published research
```

#### Admin Endpoints (Requires Authentication)
```
POST   /api/v1/admin/news      - Create news
PUT    /api/v1/admin/news/{id} - Update news
DELETE /api/v1/admin/news/{id} - Delete news
POST   /api/v1/admin/media/upload - Upload media
... (similar for jobs, events, etc.)
```

---

## 🎨 Frontend Features

### Current Features
- ✅ Responsive design with Tailwind CSS
- ✅ Server-side rendering (SSR) for SEO
- ✅ Image optimization with Next.js Image
- ✅ Analytics tracking
- ✅ Contact forms
- ✅ Application submission
- ✅ Cookie consent management

### To Be Updated (Fetch from Laravel)
- 🔄 News listing and detail pages
- 🔄 Job listings and detail pages
- 🔄 Events calendar
- 🔄 Tenders listing
- 🔄 Research publications

---

## 🔐 Security

### Frontend
- No sensitive data stored
- Environment variables for API URL
- HTTPS in production
- Input validation on forms

### Backend (Laravel)
- Laravel Sanctum for API authentication
- CORS configured for frontend domain only
- Input validation on all endpoints
- File upload validation
- Rate limiting on API routes
- CSRF protection on admin panel

---

## 🚢 Deployment

### Frontend (Vercel - Recommended)

1. **Connect repository to Vercel**
   - Import project from GitHub
   - Vercel auto-detects Next.js

2. **Set environment variables**
   ```
   NEXT_PUBLIC_API_URL=https://api.lgihe.org/api/v1
   RESEND_API_KEY=your_production_key
   ```

3. **Deploy**
   - Automatic deployment on git push
   - Preview deployments for PRs

### Backend (VPS or Laravel Forge)

**Option 1: Laravel Forge (Easiest)**
- Connect your server
- Deploy Laravel project
- Forge handles Nginx, SSL, deployments

**Option 2: Manual VPS Setup**
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

# Configure Nginx/Apache
# Set up SSL with Let's Encrypt
```

---

## 🧪 Testing

### Frontend
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Backend
```bash
# Run tests
php artisan test

# Check routes
php artisan route:list

# Test API with curl
curl http://localhost:8000/api/v1/news
```

---

## 📊 Performance

### Frontend Optimizations
- Server-side rendering for SEO
- Image optimization with Next.js Image
- API response caching (60s default)
- Static generation for content pages
- Code splitting and lazy loading

### Backend Optimizations
- Database indexing on frequently queried fields
- Eloquent eager loading to prevent N+1 queries
- API response caching with Redis (optional)
- Image optimization on upload
- Pagination for large datasets

---

## 🛠️ Development Workflow

### Adding New Content Type

1. **Backend (Laravel)**
   ```bash
   # Create migration
   php artisan make:migration create_content_table
   
   # Create model
   php artisan make:model Content
   
   # Create controller
   php artisan make:controller Api/ContentController --api
   
   # Add routes in routes/api.php
   ```

2. **Frontend (Next.js)**
   ```typescript
   // Add API functions in lib/api-client.ts
   export const contentApi = {
     getAll: (page = 1) => apiRequest(`/content?page=${page}`),
     getById: (id) => apiRequest(`/content/${id}`),
   };
   
   // Create pages in app/content/
   // Use contentApi to fetch data
   ```

---

## 🐛 Troubleshooting

### Common Issues

**CORS Error**
- Check Laravel `config/cors.php`
- Ensure frontend URL is in `allowed_origins`
- Verify `supports_credentials` is true

**API Connection Failed**
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Verify Laravel server is running
- Check network tab in browser DevTools

**Images Not Loading**
- Run `php artisan storage:link` in Laravel
- Use `getMediaUrl()` helper in Next.js
- Check file permissions on storage directory

**Build Errors**
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

---

## 📞 Support

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Laravel Documentation](https://laravel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Laravel Filament](https://filamentphp.com/)

### Project Documentation
- See `LARAVEL_BACKEND_GUIDE.md` for backend setup
- See `MIGRATION_CHECKLIST.md` for migration steps
- See `COMPONENT_UPDATE_EXAMPLE.md` for code examples

---

## 🎯 Next Steps

1. ✅ Admin panel removed from Next.js
2. ✅ API client created
3. ✅ Documentation written
4. ⏳ Set up Laravel backend (follow `LARAVEL_BACKEND_GUIDE.md`)
5. ⏳ Update components to fetch from API
6. ⏳ Test integration
7. ⏳ Deploy both applications

---

## 📝 License

This project is proprietary to LGIHE (Lesotho Government Institute of Higher Education).

---

## 👥 Contributors

- Development Team: LGIHE IT Department
- Architecture: Separated frontend/backend design

---

**Last Updated:** April 2026
