import { stats } from "../constants/siteData";

export default function StatsSection() {
  return (
    <section
      id="statistiky"
      style={{
        background: "var(--green)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 32,
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              textAlign: "center",
              padding: "8px 0",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 700,
                color: "var(--stone)",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(245,240,232,0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
