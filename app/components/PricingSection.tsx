"use client";

import { Phone, Mail, AlertCircle } from "lucide-react";
import { site } from "../constants/siteData";
import FadeUp from "./FadeUp";

const priceItems = [
  {
    label: "Skupina B — kurz",
    price: "od 17 500,- Kč",
    note: "Zahrnuje praktický výcvik, výuku teorie i učební pomůcky",
    highlight: true,
  },
  {
    label: "Vrácení ŘP — příprava (sk. B)",
    price: "4 000,- Kč",
    note: "Cena je konečná. Správní poplatek 700 Kč se platí v den zkoušky na pokladně Městského úřadu.",
    highlight: false,
  },
  {
    label: "Kondiční jízdy (sk. B)",
    price: "Cena dle dohody",
    note: "1 výcviková hodina = 45 minut",
    highlight: false,
  },
  {
    label: "Storno poplatek kurzu",
    price: "1 000,- Kč",
    note: "Vztahuje se na výuku i jízdy",
    highlight: false,
  },
];

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
        <FadeUp style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 600,
              color: "var(--stone)",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Kompletní ceník,{" "}
            <em style={{ color: "var(--copper-light)", fontStyle: "italic" }}>
              žádná překvapení
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 17,
              color: "rgba(245,240,232,0.6)",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 520,
            }}
          >
            Všechny ceny jsou konečné. Zavolejte nám pro domluvení splátkového plánu přímo na míru.
          </p>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {/* Left: price table */}
          <FadeUp>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {priceItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: item.highlight
                      ? "rgba(180,120,60,0.15)"
                      : "rgba(245,240,232,0.05)",
                    border: item.highlight
                      ? "1px solid rgba(180,120,60,0.4)"
                      : "1px solid rgba(245,240,232,0.1)",
                    borderRadius: 12,
                    padding: "20px 24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 16,
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--stone)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: 18,
                        fontWeight: 600,
                        color: item.highlight ? "var(--copper-light)" : "var(--stone)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 13,
                      color: "rgba(245,240,232,0.45)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.note}
                  </p>
                </div>
              ))}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "14px 16px",
                  background: "rgba(45,106,79,0.1)",
                  border: "1px solid rgba(45,106,79,0.25)",
                  borderRadius: 10,
                  marginTop: 4,
                }}
              >
                <AlertCircle size={15} style={{ color: "var(--green-light)", flexShrink: 0, marginTop: 2 }} />
                <p
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 13,
                    color: "rgba(245,240,232,0.55)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Do ceny nejsou zahrnuty správní poplatky Magistrátu / Městského úřadu.
                  Správní poplatek 700,- Kč se platí v den zkoušky přímo na pokladně.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right: contact card */}
          <FadeUp delay={0.12}>
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
                Máte zájem nebo dotaz?
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
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
