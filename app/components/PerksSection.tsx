import { Calendar, GraduationCap, Gift, ShieldCheck } from "lucide-react";
import { perks } from "../constants/siteData";
import FadeUp from "./FadeUp";

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  "graduation-cap": GraduationCap,
  gift: Gift,
  "shield-check": ShieldCheck,
};

export default function PerksSection() {
  return (
    <section
      style={{
        background: "var(--stone-dark)",
        padding: "100px 24px",
        borderTop: "1px solid var(--stone-border)",
        borderBottom: "1px solid var(--stone-border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp style={{ marginBottom: 64, textAlign: "center" }}>
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
            Proč právě my
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 17,
              color: "var(--text-muted)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Výcvik přizpůsobujeme vám — ne naopak.
          </p>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {perks.map((perk, i) => {
            const Icon = iconMap[perk.icon] ?? ShieldCheck;
            return (
              <FadeUp key={perk.title} delay={i * 0.08}>
                <div
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--stone-border)",
                    borderRadius: 12,
                    padding: "32px 28px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <Icon
                      size={22}
                      style={{ color: "var(--green)", flexShrink: 0, marginTop: 4 }}
                    />
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-lora), Georgia, serif",
                          fontSize: 20,
                          fontWeight: 600,
                          color: "var(--text)",
                          margin: "0 0 8px",
                        }}
                      >
                        {perk.title}
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
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
