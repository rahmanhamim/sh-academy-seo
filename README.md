# StartHub Academy - SEO-Optimized Course Platform

> **Job Application Project**: SEO Next.js Engineer Position at StartHub  
> **Applicant**: Hamim  
> **Submission Date**: February 2026

## 📋 Project Overview

This is a high-performance, SEO-optimized Course Detail page built with Next.js, demonstrating advanced Server-Side Rendering (SSR), dynamic metadata generation, and structured data implementation.

## 🎯 Key Features

- ✅ **Dynamic Course Detail Pages** with SSR/ISR
- ✅ **Advanced SEO** with dynamic metadata and Open Graph tags
- ✅ **JSON-LD Structured Data** (Course Schema)
- ✅ **Performance Optimized** (90+ Lighthouse score target)
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS 4** for modern styling
- ✅ **Responsive Design** with professional UI

## 🚀 Live Demo Routes

- **Homepage**: `/` - Course catalog
- **Course Details**:
  - `/startup-fundamentals-2024`
  - `/technical-founder-bootcamp`
  - `/venture-capital-masterclass`

## 💻 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: lucide-react
- **Images**: Unsplash API
- **Runtime**: Node.js + Edge (for OG images)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── [slug]/page.tsx        # Dynamic course detail pages (MAIN)
│   ├── page.tsx               # Homepage course catalog
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   └── api/
│       ├── courses/route.ts   # Course data API
│       └── og/route.tsx       # Dynamic OG image generation
├── lib/
│   └── course-mock-data.ts    # Mock course data
├── types/
│   └── course.types.ts        # TypeScript interfaces
└── components/
    └── icons/                 # Icon components
```

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔍 SEO Implementation Highlights

### 1. Dynamic Metadata Generation

Every course page generates unique:

- Title tags
- Meta descriptions
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card metadata
- Canonical URLs

### 2. JSON-LD Structured Data

Comprehensive Course schema including:

- Course name, description, provider
- Instructor information
- Rating and reviews
- Pricing and availability
- Course duration and level
- Learning outcomes

### 3. Server-Side Rendering

- ISR (Incremental Static Regeneration) with 1-hour revalidation
- `generateStaticParams()` for static generation at build
- Server Components for optimal performance

### 4. Performance Optimizations

- Next.js Image optimization
- Edge Runtime for OG images
- Minimal client-side JavaScript
- Efficient CSS with Tailwind
- Static generation + ISR caching

## 🧪 Testing

### Lighthouse Audit

```bash
npm run build
npm run start
# Open Chrome DevTools > Lighthouse
# Run audit on: http://localhost:3000/startup-fundamentals-2024
```

### Validate JSON-LD

1. View page source (Ctrl+U)
2. Copy JSON-LD script content
3. Test at: https://validator.schema.org/

### Test OG Images

- Homepage: `http://localhost:3000/api/og`
- Course: `http://localhost:3000/api/og?courseSlug=startup-fundamentals-2024`

## 📊 Requirements Compliance

| Requirement      | Status       | Implementation                             |
| ---------------- | ------------ | ------------------------------------------ |
| SSR/ISR          | ✅ Complete  | App Router with async components           |
| Dynamic Metadata | ✅ Complete  | generateMetadata() function                |
| OG Tags          | ✅ Complete  | Full OpenGraph + Twitter Cards             |
| JSON-LD Schema   | ✅ Complete  | Course schema with 10+ fields              |
| Performance 90+  | ✅ Optimized | ISR, image optimization, server components |
| Clean Code       | ✅ Complete  | TypeScript, organized structure            |
| Semantic HTML    | ✅ Complete  | Proper HTML5 elements                      |

## 🎨 Design Features

- Modern teal-green color palette
- Professional gradient effects
- lucide-react icon library
- Responsive layout (mobile-first)
- Accessible UI components
- Visual hierarchy with proper typography

## 📝 Mock Data

3 comprehensive courses included:

1. **Startup Fundamentals: From Idea to Launch** - 8 weeks, $299
2. **Technical Founder Bootcamp** - 6 weeks, $249
3. **Venture Capital Masterclass** - 10 weeks, $499

Each course includes:

- Detailed description
- Instructor information
- Syllabus breakdown
- Learning outcomes
- Ratings and reviews
- Pricing and duration
- High-quality images (Unsplash)

## 🔗 API Endpoints

### GET /api/courses

Returns all available courses in JSON format.

**Response:**

```json
[
  {
    "id": "1",
    "slug": "startup-fundamentals-2024",
    "name": "Startup Fundamentals: From Idea to Launch",
    "description": "...",
    "price": 299,
    "rating": 4.8,
    ...
  }
]
```

### GET /api/og?courseSlug={slug}

Generates dynamic Open Graph images (1200x630) for social sharing.

**Examples:**

- `/api/og` - Homepage OG image
- `/api/og?courseSlug=startup-fundamentals-2024` - Course-specific OG image

## 📚 Key Files to Review

1. **`src/app/[slug]/page.tsx`** - Main course detail implementation
   - generateMetadata() function
   - JSON-LD schema
   - ISR configuration
   - Server Component with async data fetching

2. **`src/lib/course-mock-data.ts`** - Mock data structure
   - getCourseBySlug() function
   - getAllCourses() function
   - Rich course data

3. **`src/types/course.types.ts`** - TypeScript interfaces
   - ICourse interface
   - Type safety throughout

4. **`src/app/api/og/route.tsx`** - OG image generation
   - Edge Runtime
   - Dynamic image creation
   - Course-specific + homepage variants

## 🎯 Code Review Preparation

When explaining the implementation, focus on:

1. **SSR Strategy**: Why ISR is optimal for course content
2. **Metadata Generation**: How dynamic metadata improves SEO
3. **Structured Data**: Benefits of comprehensive JSON-LD
4. **Code Organization**: Clean separation of concerns
5. **Type Safety**: Benefits of TypeScript
6. **Performance**: Optimization techniques used
7. **Scalability**: How to add more courses easily

## 📖 Documentation

See [PROJECT_ASSESSMENT.md](./PROJECT_ASSESSMENT.md) for detailed requirement analysis and implementation review.

## 📧 Contact

**Application for**: SEO Next.js Engineer at StartHub  
**Submission to**: mikhail@starthub.academy  
**Deadline**: 3 days from assignment

---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📦 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [TypeScript](https://www.typescriptlang.org/) - typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework
- [Schema.org Course](https://schema.org/Course) - structured data specification

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

_Built with ❤️ for StartHub Academy | February 2026_
