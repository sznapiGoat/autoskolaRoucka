"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Phone } from "lucide-react";
import { site } from "../constants/siteData";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.3}px)`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--text)",
      }}
    >
      {/* Parallax background pattern */}
      <div
        ref={ref}
        style={{
          position: "absolute",
          inset: "-20%",
          background: `
            radial-gradient(ellipse 80% 60% at 60% 40%, rgba(45,106,79,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 20% 70%, rgba(181,101,29,0.15) 0%, transparent 60%)
          `,
          zIndex: 0,
        }}
      />

      {/* Texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f5f0e8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 700 }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(45,106,79,0.2)",
              border: "1px solid rgba(45,106,79,0.4)",
              borderRadius: 40,
              padding: "6px 16px",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "#86efac",
                letterSpacing: "0.04em",
              }}
            >
              Světlá nad Sázavou · přihlášky otevřeny
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(42px, 7vw, 78px)",
              fontWeight: 600,
              color: "var(--stone)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
            }}
          >
            Řidičský průkaz{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--copper-light)",
              }}
            >
              skupiny B
            </em>{" "}
            ve Světlé nad Sázavou.
          </h1>

          {/* Sub */}
          <p
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(245,240,232,0.75)",
              lineHeight: 1.65,
              maxWidth: 520,
              margin: "0 0 44px",
            }}
          >
            Individuální přístup, flexibilní termíny, splátky bez příplatku.
            Přihlaste se ještě dnes — kurzy začínají průběžně.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#prihlaseni"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--copper)",
                color: "#fff",
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 700,
                fontSize: 16,
                padding: "15px 32px",
                borderRadius: 8,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--copper-light)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--copper)";
                el.style.transform = "translateY(0)";
              }}
            >
              Přihlásit se na kurz
            </a>

            <a
              href={`tel:${site.phoneRaw}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(245,240,232,0.1)",
                border: "1px solid rgba(245,240,232,0.3)",
                color: "var(--stone)",
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: 16,
                padding: "15px 28px",
                borderRadius: 8,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.18)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.1)")
              }
            >
              <Phone size={17} />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#statistiky"
        aria-label="Přejít dolů"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(245,240,232,0.5)",
          animation: "fadedown 2s ease-out infinite",
          zIndex: 10,
        }}
      >
        <ArrowDown size={28} />
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes fadedown {
          0% { opacity: 0.5; transform: translateX(-50%) translateY(0); }
          60% { opacity: 0.8; transform: translateX(-50%) translateY(6px); }
          100% { opacity: 0.5; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </section>
  );
}
