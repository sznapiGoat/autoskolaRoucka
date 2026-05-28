"use client";

import { Phone } from "lucide-react";
import { site } from "../constants/siteData";
import FadeUp from "./FadeUp";

const cases = [
  {
    title: "Po vybodování",
    conditions: [
      "Od odebrání průkazu uběhlo nejméně 12 měsíců",
      "Absolvování přezkoušení z odborné způsobilosti",
      "Lékařská prohlídka a dopravně-psychologické vyšetření",
    ],
    note: "Zkoušku lze absolvovat i před uplynutím roční lhůty, ne však dříve než měsíc před skončením sankce.",
    docs: "Výpis z karty řidiče + přihláška",
  },
  {
    title: "Po zákazu řízení (ZŘMV)",
    conditions: [
      "Zkoušku lze absolvovat až po skončení zákazu činnosti",
      "Absolvování přezkoušení z odborné způsobilosti",
      "Posudek o zdravotní způsobilosti",
    ],
    note: "V případě prominutí zbytku trestu je nutné doložit příslušné rozhodnutí nebo usnesení.",
    docs: "Rozsudek / rozhodnutí, výpis z karty řidiče, zdravotní posudek + přihláška",
  },
  {
    title: "Ze zdravotních důvodů",
    conditions: [
      "Nejdříve po 3 letech od odnětí řidičského oprávnění",
      "Absolvování přezkoušení z odborné způsobilosti",
      "Posudek o zdravotní způsobilosti",
    ],
    note: "Přesný postup závisí na zdravotním stavu. Zavolejte — provedeme vás celým procesem.",
    docs: "Výpis z karty řidiče, zdravotní posudek + přihláška",
  },
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
        {/* Header */}
        <FadeUp style={{ marginBottom: 56, maxWidth: 600 }}>
          <h2
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 600,
              color: "var(--text)",
              margin: "0 0 16px",
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
              margin: 0,
            }}
          >
            Přišli jste o průkaz z důvodu vybodování, soudního zákazu nebo ze zdravotních důvodů?
            Pomůžeme vám projít celým procesem návratu za volant — od přípravy až po přezkoušení.
          </p>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="vraceni-grid"
        >
          {/* Left: 3 cases */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {cases.map((c, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--stone-border)",
                    borderRadius: 14,
                    padding: "24px 28px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-lora), Georgia, serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: 14,
                    }}
                  >
                    {c.title}
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      margin: "0 0 12px",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {c.conditions.map((cond, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontFamily: "var(--font-outfit), sans-serif",
                          fontSize: 14,
                          color: "var(--text-muted)",
                          lineHeight: 1.45,
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--green)",
                            flexShrink: 0,
                            marginTop: 6,
                          }}
                        />
                        {cond}
                      </li>
                    ))}
                  </ul>

                  <p
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 12,
                      color: "var(--text-light)",
                      lineHeight: 1.5,
                      margin: "0 0 10px",
                      padding: "10px 12px",
                      background: "var(--stone-dark)",
                      borderRadius: 6,
                    }}
                  >
                    {c.note}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 12,
                      color: "var(--text-light)",
                      margin: 0,
                    }}
                  >
                    <strong>Doklady:</strong> {c.docs}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Right: price + exam info + CTA */}
          <FadeUp delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Price card */}
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--stone-border)",
                  borderRadius: 14,
                  padding: "28px 32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--text-light)",
                    marginBottom: 8,
                  }}
                >
                  Příprava na vrácení ŘP
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: 36,
                    fontWeight: 600,
                    color: "var(--text)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  4 000,- Kč
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 13,
                    color: "var(--text-light)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Cena je konečná — Skupina B. Správní poplatek 700,- Kč se platí
                  v den zkoušky přímo na pokladně Městského úřadu.
                </p>
              </div>

              {/* Exam info */}
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--stone-border)",
                  borderRadius: 14,
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: 12,
                  }}
                >
                  Přezkoušení z odborné způsobilosti
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0 0 12px",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {[
                    "Test z pravidel provozu na pozemních komunikacích a první pomoci",
                    "Praktická jízda s instruktorem",
                    "1 opravný pokus v případě neúspěchu",
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: 14,
                        color: "var(--text-muted)",
                        lineHeight: 1.45,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--copper)",
                          flexShrink: 0,
                          marginTop: 6,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 12,
                    color: "var(--text-light)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Při neúspěchu ve druhém pokusu je nutné před dalším pokusem absolvovat novou výuku nebo výcvik.
                </p>
              </div>

              {/* CTA */}
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
                  padding: "16px 28px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  width: "fit-content",
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
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .vraceni-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
