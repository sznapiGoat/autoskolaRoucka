"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

const cars = [
  { src: "/images/roucka1.jpg", alt: "Výcvikové vozidlo Autoškola Roučka č. 1" },
  { src: "/images/roucka2.jpg", alt: "Výcvikové vozidlo Autoškola Roučka č. 2" },
  { src: "/images/roucka3.jpg", alt: "Výcvikové vozidlo Autoškola Roučka č. 3" },
];

export default function FleetSection() {
  return (
    <section
      style={{
        background: "var(--white)",
        padding: "80px 24px",
        borderTop: "1px solid var(--stone-border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp style={{ marginBottom: 44 }}>
          <h2
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 600,
              color: "var(--text)",
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            Naše výcviková vozidla
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 16,
              color: "var(--text-muted)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Moderní vozy skupiny B vybavené dvojitými pedály a kamerovým systémem.
          </p>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="fleet-grid"
        >
          {cars.map((car, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid var(--stone-border)",
                  aspectRatio: "4 / 3",
                  position: "relative",
                  background: "var(--stone)",
                }}
              >
                <Image
                  src={car.src}
                  alt={car.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .fleet-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .fleet-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
