"use client";

import { motion } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";
import { site } from "../constants/siteData";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "min(100svh, 680px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Photo background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          zIndex: 0,
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(44,36,22,0.88) 0%, rgba(44,36,22,0.70) 55%, rgba(44,36,22,0.45) 100%)",
          zIndex: 1,
        }}
      />

      {/* Green-tinted accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 70% at 65% 55%, rgba(45,106,79,0.18) 0%, transparent 70%)",
          zIndex: 1,
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
        className="hero-content"
      >
        <div style={{ maxWidth: 680 }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(45,106,79,0.25)",
              border: "1px solid rgba(45,106,79,0.45)",
              borderRadius: 40,
              padding: "6px 16px",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
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
              Světlá nad Sázavou · Havlíčkův Brod · přihlášky otevřeny
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(42px, 7vw, 76px)",
              fontWeight: 600,
              color: "var(--stone)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
            }}
          >
            Řidičský průkaz{" "}
            <em style={{ fontStyle: "italic", color: "var(--copper-light)" }}>
              skupiny B
            </em>{" "}
            ve Světlé nad Sázavou.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease }}
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(245,240,232,0.78)",
              lineHeight: 1.65,
              maxWidth: 500,
              margin: "0 0 44px",
            }}
          >
            Individuální přístup, flexibilní termíny, splátky bez příplatku.
            Přihlaste se ještě dnes — kurzy začínají průběžně.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
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
                background: "rgba(245,240,232,0.12)",
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
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(245,240,232,0.2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(245,240,232,0.12)")
              }
            >
              <Phone size={17} />
              {site.phone}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#kurzy"
        aria-label="Přejít dolů"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(245,240,232,0.45)",
          animation: "fadedown 2.5s ease-in-out infinite",
          zIndex: 10,
        }}
      >
        <ArrowDown size={26} />
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes fadedown {
          0% { opacity: 0.3; transform: translateX(-50%) translateY(0); }
          60% { opacity: 0.7; transform: translateX(-50%) translateY(7px); }
          100% { opacity: 0.3; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </section>
  );
}
