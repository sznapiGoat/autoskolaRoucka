"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";
import { courses } from "../constants/siteData";
import FadeUp from "./FadeUp";

export default function CoursesSection() {
  return (
    <section
      id="kurzy"
      style={{
        background: "var(--stone)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <FadeUp style={{ marginBottom: 64, maxWidth: 560 }}>
          <h2
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.2,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Co u nás získáte
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 17,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Ať jste začátečník nebo zkušený řidič po pauze — máme pro vás správný kurz.
          </p>
        </FadeUp>

        {/* Course cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
          }}
        >
          {courses.map((course, i) => (
            <FadeUp key={course.id} delay={i * 0.1}>
              <div
                style={{
                  background: i === 0 ? "var(--green)" : "var(--white)",
                  border: i === 0 ? "none" : "1px solid var(--stone-border)",
                  borderRadius: 16,
                  padding: "44px 40px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                className="card-padded"
              >
                <div
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: i === 0 ? "rgba(245,240,232,0.6)" : "var(--copper)",
                    marginBottom: 12,
                  }}
                >
                  {course.subtitle}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: "clamp(26px, 3vw, 34px)",
                    fontWeight: 600,
                    color: i === 0 ? "var(--stone)" : "var(--text)",
                    margin: "0 0 20px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {course.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 16,
                    color: i === 0 ? "rgba(245,240,232,0.8)" : "var(--text-muted)",
                    lineHeight: 1.65,
                    margin: "0 0 28px",
                    flexGrow: 1,
                  }}
                >
                  {course.desc}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    margin: "0 0 36px",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {course.details.map((d) => (
                    <li
                      key={d}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: 15,
                        color: i === 0 ? "rgba(245,240,232,0.85)" : "var(--text-muted)",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        style={{
                          color: i === 0 ? "rgba(245,240,232,0.6)" : "var(--green)",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>

                <a
                  href="#prihlaseni"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: i === 0 ? "var(--copper)" : "var(--green)",
                    color: "#fff",
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    padding: "13px 24px",
                    borderRadius: 8,
                    textDecoration: "none",
                    width: "fit-content",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                >
                  {course.cta}
                  <ChevronRight size={16} />
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
