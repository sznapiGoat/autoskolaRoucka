"use client";

import { FileText, Phone } from "lucide-react";
import { site } from "../constants/siteData";
import FadeUp from "./FadeUp";

const docs = [
  "Platný občanský průkaz nebo cestovní pas",
  "1 fotografie (rozměr 3,5 × 4,5 cm)",
  "Potvrzení o absolvování dopravně-psychologického vyšetření",
  "Potvrzení o absolvování přezkumu zdravotní způsobilosti",
  "Doklad o absolvování přezkumné zkoušky odborné způsobilosti",
];

export default function VraceniSection() {
  return (
    <section
      id="vraceni-rp"
      style={{
        background: "var(--stone-dark)",
        padding: "100px 24px",
        borderTop: "1px solid var(--stone-border)",
        borderBottom: "1px solid var(--stone-border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="vraceni-grid"
        >
          {/* Left */}
          <FadeUp>
            <h2
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 600,
                color: "var(--text)",
                margin: "0 0 20px",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Vracení řidičského průkazu
            </h2>

            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 17,
                color: "var(--text-muted)",
                lineHeight: 1.65,
                margin: "0 0 16px",
              }}
            >
              Přišli jste o řidičský průkaz z důvodu překročení bodového limitu nebo
              soudního rozhodnutí? Pomůžeme vám projít celým procesem návratu za volant.
            </p>

            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 17,
                color: "var(--text-muted)",
                lineHeight: 1.65,
                margin: "0 0 36px",
              }}
            >
              Výcvik v autoškole je jednou z podmínek vrácení průkazu — absolvujete
              přezkumnou zkoušku z teorie i z jízdy. Připravíme vás na obojí.
            </p>

            <a
              href={`tel:${site.phoneRaw}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--green)",
                color: "#fff",
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 28px",
                borderRadius: 8,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.85")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              <Phone size={17} />
              Zavolat a domluvit postup
            </a>
          </FadeUp>

          {/* Right: document list */}
          <FadeUp delay={0.1}>
            <div
              style={{
                background: "var(--white)",
                border: "1px solid var(--stone-border)",
                borderRadius: 14,
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <FileText size={20} style={{ color: "var(--copper)" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  Potřebné doklady
                </h3>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {docs.map((doc, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 15,
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                      paddingBottom: i < docs.length - 1 ? 14 : 0,
                      borderBottom:
                        i < docs.length - 1
                          ? "1px solid var(--stone-border)"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "var(--green-muted)",
                        color: "var(--green)",
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                    {doc}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: "1px solid var(--stone-border)",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: 13,
                  color: "var(--text-light)",
                  lineHeight: 1.5,
                }}
              >
                Přesný postup závisí na důvodu odebrání průkazu. Zavolejte nám — provedeme vás celým procesem.
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .vraceni-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
