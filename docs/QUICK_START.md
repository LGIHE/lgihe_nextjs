# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lgihe_nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Visit `http://localhost:3000`

## 📁 Project Structure

```
lgihe_nextjs/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── api/               # API routes
│   └── [features]/        # Feature pages
├── components/            # React components
├── lib/                   # Utilities and services
├── public/                # Static assets
└── docs/                  # Documentation
```

## 🎯 Key Features

### Analytics
Track user behavior automatically:
```typescript
import { trackButtonClick } from '@/lib/analytics';

<button onClick={() => trackButtonClick('CTA', 'Homepage')}>
  Click Me
</button>
```

### Image Loading
Use optimized images with loading states:
```typescript
import ImageWithLoader from '@/components/ImageWithLoader';

<ImageWithLoader 
  src="/image.jpg" 
  alt="Description" 
  fill 
/>
```

### Abuse Reporting
Confidential reporting system at `/report-abuse`

## 🔧 Common Tasks

### Add a New Page
1. Create `app/your-page/page.tsx`
2. Export default React component
3. Add metadata for SEO

### Add API Route
1. Create `app/api/your-route/route.ts`
2. Export GET, POST, etc. handlers
3. Return Response objects

### Update Styles
- Global styles: `app/globals.css`
- Component styles: Tailwind classes
- Custom styles: CSS modules

## 📊 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📚 Next Steps

- Read [Architecture](./ARCHITECTURE.md) for system design
- See [Deployment](./DEPLOYMENT.md) for production setup
- Check [Backend Integration](./BACKEND_INTEGRATION.md) for API details

---

**Last Updated**: May 5, 2026
