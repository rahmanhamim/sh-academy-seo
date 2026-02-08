import { ICourse } from "@/types/course.types";

export const MOCK_COURSES: ICourse[] = [
  {
    id: "1",
    slug: "startup-fundamentals-2024",
    name: "Startup Fundamentals: From Idea to Launch",
    description:
      "Learn the essential skills to turn your startup idea into reality. This comprehensive course covers market validation, MVP development, fundraising strategies, and scaling your business. Taught by successful founders who have raised over $50M in venture capital.",
    provider: {
      name: "StartHub Academy",
      url: "https://starthub.academy",
    },
    instructor: "Mikhail Sokolov",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    price: 299,
    currency: "USD",
    rating: 4.8,
    totalReviews: 247,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=630&fit=crop&q=80",
    startDate: "2024-03-01",
    endDate: "2024-04-26",
    syllabus: [
      "Week 1: Ideation & Market Research",
      "Week 2: Customer Discovery & Validation",
      "Week 3: Building Your MVP",
      "Week 4: Go-to-Market Strategy",
      "Week 5: Fundraising Fundamentals",
      "Week 6: Pitch Deck Mastery",
      "Week 7: Growth & Scaling",
      "Week 8: Legal & Operations",
    ],
    learningOutcomes: [
      "Validate your startup idea with real customer feedback",
      "Build a minimum viable product (MVP) efficiently",
      "Create a compelling pitch deck for investors",
      "Understand different fundraising options",
      "Develop a go-to-market strategy",
      "Learn from real startup case studies",
    ],
    category: "Entrepreneurship",
  },
  {
    id: "2",
    slug: "technical-founder-bootcamp",
    name: "Technical Founder Bootcamp",
    description:
      "Designed for non-technical founders who want to understand technology. Learn to communicate with developers, make technical decisions, and oversee product development without writing code.",
    provider: {
      name: "StartHub Academy",
      url: "https://starthub.academy",
    },
    instructor: "Alex Chen",
    duration: "6 weeks",
    level: "Beginner",
    price: 249,
    currency: "USD",
    rating: 4.9,
    totalReviews: 183,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=630&fit=crop&q=80",
    startDate: "2024-03-15",
    endDate: "2024-04-26",
    syllabus: [
      "Week 1: Tech Stack Fundamentals",
      "Week 2: Product Development Process",
      "Week 3: Working with Developers",
      "Week 4: Making Technical Decisions",
      "Week 5: Security & Infrastructure",
      "Week 6: Scaling Your Product",
    ],
    learningOutcomes: [
      "Understand common tech stacks and architectures",
      "Communicate effectively with technical teams",
      "Make informed technical decisions",
      "Hire and manage developers",
      "Understand product development lifecycle",
    ],
    category: "Technology",
  },
  {
    id: "3",
    slug: "venture-capital-masterclass",
    name: "Venture Capital Masterclass",
    description:
      "Master the art of raising venture capital. Learn from VCs and successful founders about what investors look for, how to network effectively, and negotiate term sheets.",
    provider: {
      name: "StartHub Academy",
      url: "https://starthub.academy",
    },
    instructor: "Sarah Williams",
    duration: "4 weeks",
    level: "Intermediate",
    price: 349,
    currency: "USD",
    rating: 4.7,
    totalReviews: 156,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=630&fit=crop&q=80",
    startDate: "2024-04-01",
    endDate: "2024-04-29",
    syllabus: [
      "Week 1: VC Landscape & Types of Funding",
      "Week 2: Preparing for Fundraising",
      "Week 3: Pitching to Investors",
      "Week 4: Term Sheets & Negotiation",
    ],
    learningOutcomes: [
      "Understand the venture capital ecosystem",
      "Prepare your startup for fundraising",
      "Create a compelling investor pitch",
      "Navigate term sheets and negotiations",
      "Build relationships with investors",
    ],
    category: "Fundraising",
  },
];

export function getCourseBySlug(slug: string): ICourse | undefined {
  return MOCK_COURSES.find((course) => course.slug === slug);
}

export function getAllCourses(): ICourse[] {
  return MOCK_COURSES;
}
