import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
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
    "Yoann",
  ],
  authors: [{ name: "Yoann — BESMARA" }],
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
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
