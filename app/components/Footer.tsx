import { site } from "../constants/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--text)",
        borderTop: "1px solid rgba(245,240,232,0.1)",
        padding: "48px 24px 36px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 28,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontSize: 22,
                fontWeight: 600,
                color: "var(--stone)",
                marginBottom: 8,
              }}
            >
              Autoškola{" "}
              <span style={{ color: "var(--copper-light)" }}>Roučka</span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 14,
                color: "rgba(245,240,232,0.45)",
              }}
            >
              {site.city}
            </div>
          </div>

          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.35)",
                  marginBottom: 14,
                }}
              >
                Kontakt
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a
                  href={`tel:${site.phoneRaw}`}
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 14,
                    color: "rgba(245,240,232,0.65)",
                    textDecoration: "none",
                  }}
                >
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 14,
                    color: "rgba(245,240,232,0.65)",
                    textDecoration: "none",
                    wordBreak: "break-all",
                  }}
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.35)",
                  marginBottom: 14,
                }}
              >
                Kurzy
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["Skupina B", "Kondiční jízdy", "Vracení ŘP"].map((item) => (
                  <a
                    key={item}
                    href="#kurzy"
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 14,
                      color: "rgba(245,240,232,0.65)",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,232,0.1)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 13,
              color: "rgba(245,240,232,0.3)",
            }}
          >
            © {year} {site.name}. Všechna práva vyhrazena.
          </span>
          <span
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 13,
              color: "rgba(245,240,232,0.3)",
            }}
          >
            {site.domain}
          </span>
        </div>
      </div>
    </footer>
  );
}
