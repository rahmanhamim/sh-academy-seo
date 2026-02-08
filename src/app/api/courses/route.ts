import { getAllCourses } from "@/lib/course-mock-data";
import { NextRequest, NextResponse } from "next/server";

// GET /api/courses - Get all courses
export async function GET(request: NextRequest) {
  try {
    const courses = getAllCourses();

    return NextResponse.json({
      success: true,
      data: courses,
      count: courses.length,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses", success: false },
      { status: 500 },
    );
  }
}
