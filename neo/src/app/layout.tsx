import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BESMARA | IA & Automatisation pour la pêche, l'aquaculture et les TPE",
  description:
    "BESMARA accompagne les petites entreprises et acteurs de la mer : sites vitrines clairs, automatisation des tâches répétitives, premiers pas IA pour la pêche et l'aquaculture.",
  keywords: [
    "BESMARA",
    "consultant IA maritime",
    "automatisation",
    "pêche",
    "aquaculture",
    "site vitrine",
    "n8n",
    "TPE",
  ],
  openGraph: {
    title: "BESMARA | IA & Automatisation Maritime",
    description:
      "Sites vitrines et automatisation pour TPE, artisans et acteurs de la mer.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
