import { Star } from "lucide-react";
import FadeUp from "./FadeUp";

const reviews = [
  {
    name: "Tereza Horáková",
    location: "Světlá nad Sázavou",
    text: "Skvělá autoškola! Pan instruktor byl trpělivý a vždy mi jasně vysvětlil, co dělám špatně. Zkoušku jsem zvládla napoprvé. Určitě doporučuji každému, kdo chce individuální přístup a klidné prostředí na učení.",
    date: "březen 2024",
    stars: 5,
  },
  {
    name: "Jakub Vondráček",
    location: "Havlíčkův Brod",
    text: "Přišel jsem na kondiční jízdy po 8 letech bez auta a byl jsem trochu nervózní. Po třech hodinách jsem se cítil jako za volantem jako doma. Flexibilní termíny a příjemná komunikace. Vrátím se, až budu potřebovat osvěžení.",
    date: "leden 2024",
    stars: 5,
  },
  {
    name: "Markéta Šimková",
    location: "Ledeč nad Sázavou",
    text: "Absolvovala jsem skupinu B a jsem nadšená. Výuka teorie probíhala online, takže jsem si mohla vše přizpůsobit práci. Jízdy byly vždy v pohodě, nikdy jsem se necítila pod tlakem. Výborná autoškola!",
    date: "listopadu 2023",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      style={{
        background: "var(--stone)",
        padding: "100px 24px",
        borderTop: "1px solid var(--stone-border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp style={{ marginBottom: 64, maxWidth: 560 }}>
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
            Co říkají naši absolventi
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 17,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Stovky spokojených řidičů. Jejich zkušenost mluví za nás.
          </p>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {reviews.map((r, i) => (
            <FadeUp key={r.name} delay={i * 0.1}>
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--stone-border)",
                  borderRadius: 14,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  height: "100%",
                }}
                className="card-padded"
              >
                {/* Stars + source */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Stars count={r.stars} />
                  <span
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--text-light)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Google recenze
                  </span>
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 15,
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    margin: 0,
                    flexGrow: 1,
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Author */}
                <div
                  style={{
                    borderTop: "1px solid var(--stone-border)",
                    paddingTop: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: 16,
                        fontWeight: 600,
                        color: "var(--text)",
                        marginBottom: 2,
                      }}
                    >
                      {r.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: 13,
                        color: "var(--text-light)",
                      }}
                    >
                      {r.location}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 12,
                      color: "var(--text-light)",
                    }}
                  >
                    {r.date}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA to Google Maps reviews */}
        <FadeUp delay={0.2} style={{ marginTop: 40, textAlign: "center" }}>
          <a
            href={`https://maps.google.com/?q=Autoškola+Roučka+Světlá+nad+Sázavou`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--green)",
              textDecoration: "none",
              borderBottom: "1px solid var(--green)",
              paddingBottom: 2,
              transition: "opacity 0.2s",
            }}
          >
            Zobrazit všechny recenze na Google
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
