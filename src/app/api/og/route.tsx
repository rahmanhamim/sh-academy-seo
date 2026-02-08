import { getCourseBySlug, getAllCourses } from "@/lib/course-mock-data";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const courseSlug = searchParams.get("courseSlug");

    // If no courseSlug, generate default homepage OG image
    if (!courseSlug) {
      const courses = getAllCourses();

      return new ImageResponse(
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
            padding: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "80px",
              width: "100%",
              maxWidth: "1000px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Logo/Badge */}
            <div
              style={{
                display: "flex",
                background: "linear-gradient(135deg, #14b8a6 0%, #10b981 100%)",
                padding: "16px 32px",
                borderRadius: "100px",
                marginBottom: "32px",
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              StartHub Academy
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 64,
                fontWeight: "bold",
                color: "#1a1a1a",
                lineHeight: 1.1,
                marginBottom: "24px",
                display: "flex",
              }}
            >
              Master Your Startup Journey
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: 28,
                color: "#666",
                lineHeight: 1.4,
                marginBottom: "40px",
                display: "flex",
                maxWidth: "800px",
              }}
            >
              Expert-led courses for founders and entrepreneurs. Learn from
              those who&apos;ve raised millions.
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "48px",
                fontSize: 22,
                color: "#333",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span style={{ fontSize: 32 }}>📚</span>
                <span style={{ fontWeight: "600" }}>
                  {courses.length} Courses
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span style={{ fontSize: 32 }}>⭐</span>
                <span style={{ fontWeight: "600" }}>4.8 Rating</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span style={{ fontSize: 32 }}>👥</span>
                <span style={{ fontWeight: "600" }}>Expert Instructors</span>
              </div>
            </div>
          </div>
        </div>,
        {
          width: 1200,
          height: 630,
        },
      );
    }

    // Generate course-specific OG image
    const course = getCourseBySlug(courseSlug);

    if (!course) {
      return new Response("Course not found", { status: 404 });
    }

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
          padding: "40px 80px",
        }}
      >
        {/* Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "60px",
            width: "100%",
            maxWidth: "1000px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 60,
              fontWeight: "bold",
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: "20px",
              display: "flex",
            }}
          >
            {course.name}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: "#666",
              lineHeight: 1.4,
              marginBottom: "30px",
              display: "flex",
            }}
          >
            {course.description.slice(0, 150)}
            {course.description.length > 150 ? "..." : ""}
          </div>

          {/* Meta Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              fontSize: 22,
              color: "#333",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>⭐</span>
              <span>
                {course.rating} ({course.totalReviews} reviews)
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>⏱️</span>
              <span>{course.duration}</span>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "40px",
              paddingTop: "30px",
              borderTop: "2px solid #eee",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#14b8a6",
                display: "flex",
              }}
            >
              StartHub Academy
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: "bold",
                color: "#1a1a1a",
                display: "flex",
              }}
            >
              ${course.price}
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
