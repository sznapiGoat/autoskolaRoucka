"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site, navLinks } from "../constants/siteData";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(245,240,232,0.97)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 #ddd4c0" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-lora), Georgia, serif",
            fontWeight: 600,
            fontSize: 20,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Autoškola{" "}
          <span style={{ color: "var(--green)" }}>Roučka</span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 500,
                fontSize: 15,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--green)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}

          <a
            href={`tel:${site.phoneRaw}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "var(--copper)",
              color: "#fff",
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: 14,
              padding: "9px 18px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background 0.2s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--copper-light)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--copper)")}
          >
            <Phone size={15} />
            {site.phone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            padding: 8,
            display: "none",
          }}
          className="show-mobile"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            background: "var(--stone)",
            borderTop: "1px solid var(--stone-border)",
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 500,
                fontSize: 17,
                color: "var(--text)",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "1px solid var(--stone-border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "var(--copper)",
              color: "#fff",
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px",
              borderRadius: 6,
              textDecoration: "none",
              marginTop: 8,
            }}
          >
            <Phone size={18} />
            Zavolat: {site.phone}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
