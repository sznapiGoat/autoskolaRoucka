import { process as steps } from "../constants/siteData";

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
        <div style={{ marginBottom: 64, maxWidth: 560 }}>
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
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 0,
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.step}
              style={{
                padding: "36px 28px",
                borderLeft: i % 3 === 0 ? "none" : "1px solid var(--stone-border)",
                borderTop: i < 3 ? "none" : "1px solid var(--stone-border)",
                position: "relative",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontSize: 56,
                  fontWeight: 700,
                  color: "var(--text-light)",
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
      </div>
    </section>
  );
}
