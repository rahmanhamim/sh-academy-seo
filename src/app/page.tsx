import Link from "next/link";
import { getAllCourses } from "@/lib/course-mock-data";
import { Metadata } from "next";
import Image from "next/image";
import { Rocket, TrendingUp, Users, Star, Clock } from "lucide-react";
import SiteLogo from "@/components/icons/_site-logo";

export const metadata: Metadata = {
  title: "StartHub Academy | SEO-Optimized Courses for Entrepreneurs",
  description:
    "Explore expert-led courses on entrepreneurship, startup fundamentals, venture capital, and technical skills. Built with Next.js, featuring dynamic metadata and structured data.",
  openGraph: {
    title: "StartHub Academy | SEO-Optimized Courses for Entrepreneurs",
    description:
      "Explore expert-led courses on entrepreneurship, startup fundamentals, venture capital, and technical skills.",
    url: "https://sh-academy-seo.vercel.app",
    siteName: "StartHub Academy",
    images: [
      {
        url: "https://sh-academy-seo.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "StartHub Academy - Master Your Startup Journey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StartHub Academy | SEO-Optimized Courses for Entrepreneurs",
    description:
      "Explore expert-led courses on entrepreneurship, startup fundamentals, venture capital, and technical skills.",
    images: ["https://sh-academy-seo.vercel.app/api/og"],
  },
};

export default function Home() {
  const courses = getAllCourses();

  return (
    <main className="min-h-screen bg-linear-to-b from-neutral-50 to-neutral-100 px-4 py-12">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <SiteLogo className="mx-auto mb-4" />
          <div className="mb-4 inline-block rounded-full bg-linear-to-r from-green-500 via-primary-400 to-secondary-400 px-4 py-2 text-sm font-semibold text-neutral-0 shadow-lg shadow-primary-500/20">
            StartHub Academy
          </div>
          <h1 className="mb-4 bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            Master Your Startup Journey
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600">
            Expert-led courses designed for founders, entrepreneurs, and startup
            builders. Learn from those who&apos;ve raised millions and built
            successful companies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-sm">
            <div className="mb-3">
              <Rocket className="h-8 w-8 text-primary-500" />
            </div>
            <h3 className="mb-2 text-lg font-bold">Expert Instructors</h3>
            <p className="text-sm text-neutral-600">
              Learn from successful founders who&apos;ve been there and done
              that
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-sm">
            <div className="mb-3">
              <TrendingUp className="h-8 w-8 text-primary-500" />
            </div>
            <h3 className="mb-2 text-lg font-bold">Practical Content</h3>
            <p className="text-sm text-neutral-600">
              Real-world frameworks and strategies you can apply immediately
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-sm">
            <div className="mb-3">
              <Users className="h-8 w-8 text-primary-500" />
            </div>
            <h3 className="mb-2 text-lg font-bold">Community Support</h3>
            <p className="text-sm text-neutral-600">
              Connect with fellow entrepreneurs and startup builders
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-8">
          <h2 className="mb-6">Available Courses</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/${course.slug}`}
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden bg-linear-to-br from-primary-400 via-primary-500 to-primary-600">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                  <div className="absolute right-4 top-4 rounded-full bg-neutral-0 px-3 py-1 text-sm font-semibold">
                    ${course.price}
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full bg-neutral-0/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {course.category}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary-600">
                    {course.name}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-neutral-600">
                    {course.description}
                  </p>

                  {/* Course Meta */}
                  <div className="mb-4 flex items-center justify-between text-sm text-neutral-600">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-warning-500 text-warning-500" />
                      <span className="font-semibold">{course.rating}</span>
                      <span className="text-neutral-400">
                        ({course.totalReviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center gap-2 border-t border-neutral-100 pt-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-primary-400 to-primary-600 text-sm font-bold text-neutral-0">
                      {course.instructor.charAt(0)}
                    </div>
                    <span className="text-sm text-neutral-600">
                      {course.instructor}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 text-center text-sm text-neutral-500">
          <p className="mb-2">
            Built with Next.js 16 App Router • TypeScript • Tailwind CSS 4
          </p>
          <p>
            Features: SSR, ISR, Dynamic Metadata, JSON-LD, Edge Runtime OG
            Images
          </p>
        </div>
      </div>
    </main>
  );
}
