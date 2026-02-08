export interface ICourse {
  id: string;
  slug: string;
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  instructor: string;
  duration: string;
  level: string;
  price: number;
  currency: string;
  rating: number;
  totalReviews: number;
  image: string;
  startDate: string;
  endDate: string;
  syllabus: string[];
  learningOutcomes: string[];
  category: string;
}
