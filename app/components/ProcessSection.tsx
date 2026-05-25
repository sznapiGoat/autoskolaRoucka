import { process as steps } from "../constants/siteData";
import FadeUp from "./FadeUp";

export default function ProcessSection() {
  return (
    <section
      id="postup"
      style={{
        background: "var(--stone)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp style={{ marginBottom: 64, maxWidth: 560 }}>
          <h2
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 600,
              color: "var(--text)",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Cesta k řidičáku krok za krokem
          </h2>
        </FadeUp>

        {/* Grid with border-trick: gap:1px + bg on container = clean dividers regardless of column count */}
        <FadeUp delay={0.1}>
          <div
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              background: "var(--stone-border)",
              gap: "1px",
              border: "1px solid var(--stone-border)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {steps.map((s) => (
              <div
                key={s.step}
                className="process-cell"
                style={{
                  background: "var(--stone)",
                  padding: "36px 28px",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: 52,
                    fontWeight: 700,
                    color: "var(--stone-border)",
                    lineHeight: 1,
                    marginBottom: 16,
                    userSelect: "none",
                  }}
                >
                  {s.step}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--text)",
                    margin: "0 0 10px",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 15,
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1100px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
