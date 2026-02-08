import { getCourseBySlug, getAllCourses } from "@/lib/course-mock-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  User,
  Clock,
  Calendar,
  Target,
  Check,
  BookOpen,
  GraduationCap,
  Sparkles,
  BarChart3,
  Tag,
} from "lucide-react";

// ISR - revalidate every 1 hour (3600 seconds)
export const revalidate = 3600;

// Generate static params for all courses (for better performance)
export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// Dynamic Metadata Generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://starthub.academy");

  const ogUrl = `${baseUrl}/api/og?courseSlug=${slug}`;

  return {
    title: `${course.name} | StartHub Academy`,
    description: course.description,
    keywords: [
      course.name,
      course.category,
      "startup course",
      "entrepreneurship",
      "StartHub",
      course.instructor,
      "online course",
      "professional development",
    ],
    authors: [{ name: course.instructor }],
    openGraph: {
      title: course.name,
      description: course.description,
      url: `${baseUrl}/${slug}`,
      siteName: "StartHub Academy",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: course.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: course.name,
      description: course.description,
      images: [ogUrl],
    },
    alternates: {
      canonical: `${baseUrl}/${slug}`,
    },
  };
}

// Course Detail Page Component
export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://starthub.academy");

  // JSON-LD Structured Data for Course
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: course.provider.name,
      url: course.provider.url,
    },
    instructor: {
      "@type": "Person",
      name: course.instructor,
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating,
      reviewCount: course.totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: course.currency,
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/${slug}`,
      category: course.category,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      startDate: course.startDate,
      endDate: course.endDate,
      courseMode: "online",
      courseWorkload: course.duration,
    },
    about: {
      "@type": "Thing",
      name: course.category,
    },
    image: course.image,
    thumbnailUrl: course.image,
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Course Content */}
      <main className="min-h-screen bg-neutral-50 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Back Button */}
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Courses</span>
          </Link>

          {/* Hero Section */}
          <div className="mb-8 overflow-hidden rounded-2xl bg-linear-to-r from-primary-600 to-primary-500 p-8 text-neutral-0 shadow-xl md:p-12">
            <div className="max-w-4xl">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-neutral-0/20 px-3 py-1 text-sm font-semibold backdrop-blur">
                  {course.category}
                </span>
                <span className="rounded-full bg-neutral-0/20 px-3 py-1 text-sm font-semibold backdrop-blur">
                  {course.level}
                </span>
                <span className="rounded-full bg-warning-400 px-3 py-1 text-sm font-bold text-neutral-900 flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  {course.rating} ({course.totalReviews} reviews)
                </span>
              </div>
              <h1 className="mb-4">{course.name}</h1>
              <p className="mb-6 text-lg leading-relaxed opacity-95 md:text-xl">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-semibold">{course.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Starts {new Date(course.startDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-2">
              {/* What You'll Learn */}
              <section className="rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-sm md:p-8">
                <h2 className="mb-6 flex items-center gap-3">
                  <Target className="h-7 w-7 text-primary-500" />
                  What You&apos;ll Learn
                </h2>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {course.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-success-500" />
                      <span className="leading-relaxed text-neutral-700">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Course Syllabus */}
              <section className="rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-sm md:p-8">
                <h2 className="mb-6 flex items-center gap-3">
                  <BookOpen className="h-7 w-7 text-primary-500" />
                  Course Syllabus
                </h2>
                <div className="space-y-4">
                  {course.syllabus.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-lg border border-neutral-100 bg-linear-to-r from-neutral-50 to-neutral-0 p-4 transition-colors hover:border-primary-200"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-primary-600 text-sm font-bold text-neutral-0 shadow-md">
                        {index + 1}
                      </span>
                      <span className="pt-2 font-medium text-neutral-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Instructor */}
              <section className="rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-sm md:p-8">
                <h2 className="mb-6 flex items-center gap-3">
                  <GraduationCap className="h-7 w-7 text-primary-500" />
                  Your Instructor
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-primary-600 text-3xl font-bold text-neutral-0 shadow-lg">
                    {course.instructor.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {course.instructor}
                    </h3>
                    <p className="text-neutral-600">
                      Expert Instructor at {course.provider.name}
                    </p>
                  </div>
                </div>
              </section>

              {/* SEO Demo Info */}
              <section className="rounded-xl border-2 border-primary-200 bg-linear-to-r from-primary-50 to-secondary-50 p-6 md:p-8">
                <h3 className="mb-4 text-xl font-bold text-primary-900 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  SEO Features Implemented
                </h3>
                <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success-600 mt-0.5" />
                    <span className="text-neutral-700">Dynamic Metadata</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success-600 mt-0.5" />
                    <span className="text-neutral-700">Open Graph Tags</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success-600 mt-0.5" />
                    <span className="text-neutral-700">JSON-LD Schema</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success-600 mt-0.5" />
                    <span className="text-neutral-700">Semantic HTML</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success-600 mt-0.5" />
                    <span className="text-neutral-700">
                      ISR (1h revalidation)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success-600 mt-0.5" />
                    <span className="text-neutral-700">
                      Performance Optimized
                    </span>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-lg md:p-8">
                {/* Course Image */}
                <div className="relative mb-6 aspect-video overflow-hidden rounded-xl shadow-inner">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                  />
                </div>

                <div className="mb-4 text-4xl font-bold text-neutral-900">
                  ${course.price}{" "}
                  <span className="text-lg font-normal text-neutral-500">
                    {course.currency}
                  </span>
                </div>

                <button className="mb-3 w-full rounded-xl bg-linear-to-r from-primary-600 to-primary-500 py-4 text-lg font-bold text-neutral-0 shadow-lg transition hover:from-primary-700 hover:to-primary-600 hover:shadow-xl">
                  Enroll Now
                </button>

                <button className="mb-6 w-full rounded-xl border-2 border-neutral-300 py-3 font-semibold transition hover:bg-neutral-50">
                  Add to Wishlist
                </button>

                <div className="space-y-4 border-t pt-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-neutral-600">
                      <Calendar className="h-4 w-4" />
                      <span>Start Date</span>
                    </span>
                    <span className="font-semibold text-neutral-900">
                      {new Date(course.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-neutral-600">
                      <Calendar className="h-4 w-4" />
                      <span>End Date</span>
                    </span>
                    <span className="font-semibold text-neutral-900">
                      {new Date(course.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-neutral-600">
                      <Clock className="h-4 w-4" />
                      <span>Duration</span>
                    </span>
                    <span className="font-semibold text-neutral-900">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-neutral-600">
                      <BarChart3 className="h-4 w-4" />
                      <span>Level</span>
                    </span>
                    <span className="font-semibold text-neutral-900">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-neutral-600">
                      <Tag className="h-4 w-4" />
                      <span>Category</span>
                    </span>
                    <span className="font-semibold text-neutral-900">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-6 border-t pt-6">
                  <p className="mb-3 text-sm font-semibold text-neutral-600">
                    Share this course:
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 rounded-lg bg-secondary-500 py-2 text-xs font-semibold text-neutral-0 transition hover:bg-secondary-600">
                      Twitter
                    </button>
                    <button className="flex-1 rounded-lg bg-primary-600 py-2 text-xs font-semibold text-neutral-0 transition hover:bg-primary-700">
                      Facebook
                    </button>
                    <button className="flex-1 rounded-lg bg-primary-700 py-2 text-xs font-semibold text-neutral-0 transition hover:bg-primary-800">
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
