"use client";

import { Phone, Mail } from "lucide-react";
import { site } from "../constants/siteData";

export default function PricingSection() {
  return (
    <section
      id="cenik"
      style={{
        background: "var(--text)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="pricing-grid"
        >
          {/* Left: text */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 600,
                color: "var(--stone)",
                margin: "0 0 24px",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Transparentní ceny,{" "}
              <em style={{ color: "var(--copper-light)", fontStyle: "italic" }}>
                žádná překvapení
              </em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 17,
                color: "rgba(245,240,232,0.65)",
                lineHeight: 1.65,
                margin: "0 0 16px",
              }}
            >
              Cena kurzu skupiny B se odvíjí od aktuálního ceníku a rozsahu výcviku.
              Zahrnuje veškerou teorii, jízdy i administrativní poplatky.
            </p>
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 17,
                color: "rgba(245,240,232,0.65)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Zavolejte nebo napište — sdělíme vám aktuální cenu a domluvíme podmínky splátkovému plánu přímo na míru.
            </p>
          </div>

          {/* Right: contact card */}
          <div>
            <div
              style={{
                background: "rgba(245,240,232,0.06)",
                border: "1px solid rgba(245,240,232,0.15)",
                borderRadius: 16,
                padding: "44px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "var(--stone)",
                  marginBottom: 4,
                }}
              >
                Zjistit aktuální cenu
              </div>

              <a
                href={`tel:${site.phoneRaw}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "var(--copper)",
                  color: "#fff",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--copper-light)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--copper)")
                }
              >
                <Phone size={20} />
                {site.phone}
              </a>

              <div
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: 13,
                  color: "rgba(245,240,232,0.4)",
                  textAlign: "center",
                  letterSpacing: "0.04em",
                }}
              >
                nebo napište e-mail
              </div>

              <a
                href={`mailto:${site.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "rgba(245,240,232,0.08)",
                  border: "1px solid rgba(245,240,232,0.2)",
                  color: "rgba(245,240,232,0.85)",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "14px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "background 0.2s",
                  wordBreak: "break-all",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.13)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.08)")
                }
              >
                <Mail size={18} style={{ flexShrink: 0 }} />
                {site.email}
              </a>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  paddingTop: 8,
                  borderTop: "1px solid rgba(245,240,232,0.1)",
                }}
              >
                {["Splátky bez příplatku", "Studentská sleva", "Dárkové certifikáty"].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 14,
                      color: "rgba(245,240,232,0.6)",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--green-light)",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
