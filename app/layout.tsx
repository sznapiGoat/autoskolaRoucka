import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Autoškola Roučka | Světlá nad Sázavou",
  description:
    "Profesionální autoškola ve Světlé nad Sázavou. Výuka skupiny B, kondiční jízdy. Splátky, studentské slevy, dárkové certifikáty. Zavolejte: +420 602 77 38 36",
  keywords: "autoškola, Světlá nad Sázavou, řidičský průkaz, skupina B, kondiční jízdy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${lora.variable} ${outfit.variable}`} style={{ background: "#f5f0e8" }}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
