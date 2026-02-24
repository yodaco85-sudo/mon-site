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
  metadataBase: new URL("https://besmara.fr"),
  title: {
    default: "BESMARA | IA & Automatisation pour la pêche, l'aquaculture et les TPE",
    template: "%s | BESMARA",
  },
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
    url: "https://besmara.fr",
    siteName: "BESMARA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BESMARA — IA & Automatisation pour la mer et les TPE",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BESMARA | IA & Automatisation Maritime",
    description:
      "Sites vitrines et automatisation pour TPE, artisans et acteurs de la mer.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  name: "BESMARA",
                  description:
                    "Consultant IA et automatisation pour la pêche, l'aquaculture et les TPE.",
                  url: "https://besmara.fr",
                  logo: "https://besmara.fr/brand/logofinal4.png",
                  image: "https://besmara.fr/og-image.png",
                  email: "besmara.contact@lilas.pro",
                  telephone: "+33252431166",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "FR",
                  },
                  founder: {
                    "@type": "Person",
                    name: "Yoann",
                    jobTitle: "Fondateur & Consultant IA",
                  },
                  sameAs: [
                    "https://www.linkedin.com/in/besmaracontact",
                    "https://www.facebook.com/profile.php?id=61575195498498",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "BESMARA",
                  url: "https://besmara.fr",
                },
                {
                  "@type": "Service",
                  name: "Site Vitrine Pro",
                  provider: { "@type": "LocalBusiness", name: "BESMARA" },
                  description:
                    "Création de sites vitrines professionnels pour TPE et acteurs de la mer.",
                  areaServed: "FR",
                },
                {
                  "@type": "Service",
                  name: "Automatisation",
                  provider: { "@type": "LocalBusiness", name: "BESMARA" },
                  description:
                    "Automatisation des tâches répétitives avec n8n pour les petites entreprises.",
                  areaServed: "FR",
                },
                {
                  "@type": "Service",
                  name: "IA Maritime",
                  provider: { "@type": "LocalBusiness", name: "BESMARA" },
                  description:
                    "Accompagnement IA pour la pêche et l'aquaculture : tableaux de bord, collecte de données, traçabilité.",
                  areaServed: "FR",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
