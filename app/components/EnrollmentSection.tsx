"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  fontFamily: "var(--font-outfit), sans-serif",
  fontSize: 15,
  color: "var(--text)",
  background: "var(--white)",
  border: "1px solid var(--stone-border)",
  borderRadius: 8,
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

export default function EnrollmentSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    course: "skupina-b",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Replace FORMSPREE_ID with actual form endpoint
    await fetch("https://formspree.io/f/FORMSPREE_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => null);
    setSending(false);
    setSent(true);
  };

  return (
    <section
      id="prihlaseni"
      style={{
        background: "var(--stone-dark)",
        padding: "100px 24px",
        borderTop: "1px solid var(--stone-border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="enroll-grid"
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 600,
                color: "var(--text)",
                margin: "0 0 20px",
                letterSpacing: "-0.02em",
              }}
            >
              Začněte ještě dnes
            </h2>
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 17,
                color: "var(--text-muted)",
                lineHeight: 1.65,
                margin: "0 0 32px",
              }}
            >
              Vyplňte formulář a my vás kontaktujeme do 24 hodin s dalšími kroky.
              Bez závazků, bez poplatků za registraci.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {[
                "Bezplatná konzultace bez závazků",
                "Flexibilní termíny zahájení",
                "Splátky dostupné od prvního kurzu",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 16,
                    color: "var(--text-muted)",
                  }}
                >
                  <CheckCircle2 size={20} style={{ color: "var(--green)", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div
                style={{
                  background: "var(--green)",
                  borderRadius: 16,
                  padding: "48px 40px",
                  textAlign: "center",
                }}
              >
                <CheckCircle2 size={48} style={{ color: "var(--stone)", marginBottom: 20 }} />
                <h3
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: 26,
                    fontWeight: 600,
                    color: "var(--stone)",
                    margin: "0 0 12px",
                  }}
                >
                  Přihláška odeslána!
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 16,
                    color: "rgba(245,240,232,0.75)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Ozýváme se zpravidla do 24 hodin. Těšíme se na spolupráci!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--stone-border)",
                  borderRadius: 16,
                  padding: "44px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: 6,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Jméno *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Jan Novák"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: 6,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Telefon *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+420 xxx xxx xxx"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      marginBottom: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jan@example.cz"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="course"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      marginBottom: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Zájem o
                  </label>
                  <select
                    id="course"
                    value={form.course}
                    onChange={update("course")}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="skupina-b">Skupina B — řidičský průkaz</option>
                    <option value="kondicni-jizdy">Kondiční jízdy</option>
                    <option value="vraceni-rp">Vracení řidičského průkazu</option>
                    <option value="jine">Jiné / nevím</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      marginBottom: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Poznámka
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Cokoliv, co nám chcete sdělit předem…"
                    style={{ ...inputStyle, resize: "vertical", minHeight: 90 }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: sending ? "var(--green-light)" : "var(--green)",
                    color: "#fff",
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    padding: "15px",
                    borderRadius: 8,
                    border: "none",
                    cursor: sending ? "wait" : "pointer",
                    transition: "background 0.2s",
                    width: "100%",
                  }}
                >
                  <Send size={17} />
                  {sending ? "Odesílám…" : "Odeslat přihlášku"}
                </button>

                <p
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: 12,
                    color: "var(--text-light)",
                    textAlign: "center",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Odesláním souhlasíte se zpracováním osobních údajů za účelem odpovědi na váš dotaz.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .enroll-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
