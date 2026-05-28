import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "../constants/siteData";
// site.locations lists both branches: Světlá nad Sázavou and Havlíčkův Brod

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      style={{
        background: "var(--stone)",
        padding: "100px 24px",
        borderTop: "1px solid var(--stone-border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 600,
              color: "var(--text)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Najdete nás ve Světlé nad Sázavou a Havlíčkově Brodě
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 40,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                icon: Phone,
                label: "Telefon",
                value: site.phone,
                href: `tel:${site.phoneRaw}`,
              },
              {
                icon: Mail,
                label: "E-mail",
                value: site.email,
                href: `mailto:${site.email}`,
              },
              {
                icon: MapPin,
                label: "Provozovny",
                value: site.locations.join(" · "),
                href: `https://maps.google.com/?q=Světlá+nad+Sázavou`,
              },
              {
                icon: Clock,
                label: "Dostupnost",
                value: "Po–Pá: dle dohody",
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--stone-border)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "var(--green-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} style={{ color: "var(--green)" }} />
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--text-light)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 4,
                    }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: 16,
                        fontWeight: 600,
                        color: "var(--green)",
                        textDecoration: "none",
                        wordBreak: "break-all",
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: 16,
                        fontWeight: 600,
                        color: "var(--text)",
                      }}
                    >
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--stone-border)",
              height: 360,
            }}
          >
            <iframe
              title="Mapa – Autoškola Roučka"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41420.82735!2d15.5500!3d49.6786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470cd2a28b8c9c75%3A0x400af0f66163a00!2zU3bEm3Rsw6EgbmFkIFPDoXphdm91!5e0!3m2!1scs!2scz!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
