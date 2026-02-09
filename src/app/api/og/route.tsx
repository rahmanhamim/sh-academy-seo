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
            padding: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "70px",
              width: "100%",
              maxWidth: "1000px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Logo/Badge */}
            <div
              style={{
                display: "flex",
                background: "linear-gradient(135deg, #14b8a6 0%, #10b981 100%)",
                padding: "14px 28px",
                borderRadius: "50px",
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
                marginBottom: "28px",
              }}
            >
              StartHub Academy
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 58,
                fontWeight: "bold",
                color: "#1a1a1a",
                lineHeight: 1.2,
                marginBottom: "24px",
                display: "flex",
              }}
            >
              Master Your Startup Journey
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: 26,
                color: "#666",
                lineHeight: 1.4,
                marginBottom: "36px",
                display: "flex",
                maxWidth: "800px",
              }}
            >
              Expert-led courses for founders and entrepreneurs
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                fontSize: 20,
                color: "#333",
                fontWeight: "600",
              }}
            >
              <div style={{ display: "flex" }}>{courses.length} Courses</div>
              <div style={{ display: "flex" }}>Rating: 4.8</div>
              <div style={{ display: "flex" }}>Expert Instructors</div>
            </div>
          </div>
        </div>,
        {
          width: 1200,
          height: 630,
          headers: {
            "Cache-Control":
              "public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400",
          },
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
          background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
          padding: "50px 70px",
        }}
      >
        {/* Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "55px",
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 54,
              fontWeight: "bold",
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: "22px",
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
              marginBottom: "32px",
              display: "flex",
            }}
          >
            {course.description.slice(0, 130)}
            {course.description.length > 130 ? "..." : ""}
          </div>

          {/* Meta Info */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              fontSize: 21,
              color: "#333",
              marginBottom: "32px",
            }}
          >
            <div style={{ display: "flex" }}>
              Rating: {course.rating} ({course.totalReviews} reviews)
            </div>
            <div style={{ display: "flex" }}>{course.duration}</div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "28px",
              borderTop: "2px solid #e5e5e5",
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#14b8a6",
                display: "flex",
              }}
            >
              StartHub Academy
            </div>
            <div
              style={{
                fontSize: 32,
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
        headers: {
          "Cache-Control":
            "public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
