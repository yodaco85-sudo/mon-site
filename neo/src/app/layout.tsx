import type { Metadata } from "next";
import Script from "next/script";
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
  verification: {
    google: "6Zy8-enVfMo5F8ADBJsAg_GJYLbefA8V2AFHE45z32Y",
  },
  metadataBase: new URL("https://besmara.fr"),
  title: "BESMARA — Automatisation & IA pour la pêche et l'aquaculture",
  description:
    "BESMARA accompagne les armements, entreprises aquacoles et TPE de la filière mer pour automatiser l'administratif, structurer leurs données et déployer des outils IA utiles.",
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
  authors: [
    {
      name: "Yoann Dos Santos Da Costa",
      url: "https://besmara.fr/about",
    },
  ],
  creator: "Yoann Dos Santos Da Costa",
  publisher: "BESMARA",
  openGraph: {
    title: "BESMARA — Automatisation & IA pour la pêche et l'aquaculture",
    description:
      "Des automatisations simples et des outils IA adaptés aux réalités de la pêche, de l'aquaculture et des petites entreprises.",
    url: "https://besmara.fr",
    siteName: "BESMARA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BESMARA — Automatisation et intelligence artificielle pour la filière mer",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BESMARA — Automatisation & IA pour la filière mer",
    description:
      "Automatiser l'administratif, structurer les données et déployer des outils IA utiles aux professionnels de la mer.",
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MNWZDJ6D');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNWZDJ6D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://besmara.fr/#organization",
                  name: "BESMARA",
                  alternateName: "BESMARA IA & Automatisation",
                  description:
                    "Conseil et mise en œuvre d'automatisations et d'outils IA pour la pêche, l'aquaculture et les petites entreprises.",
                  url: "https://besmara.fr",
                  logo: "https://besmara.fr/brand/logofinal4.png",
                  image: "https://besmara.fr/og-image.png",
                  email: "contact@besmara.fr",
                  telephone: "+33252431166",
                  founder: {
                    "@type": "Person",
                    "@id": "https://besmara.fr/#yoann",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "France",
                  },
                  knowsAbout: [
                    "automatisation des tâches administratives",
                    "intelligence artificielle appliquée",
                    "pêche professionnelle",
                    "aquaculture",
                    "traçabilité et collecte de données",
                    "n8n",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/besmaracontact",
                    "https://www.facebook.com/833411816532209",
                  ],
                },
                {
                  "@type": "Person",
                  "@id": "https://besmara.fr/#yoann",
                  name: "Yoann Dos Santos Da Costa",
                  jobTitle: "Fondateur de BESMARA, consultant en automatisation et IA",
                  url: "https://besmara.fr/about",
                  image: "https://besmara.fr/brand/profile.png",
                  worksFor: {
                    "@id": "https://besmara.fr/#organization",
                  },
                  knowsAbout: [
                    "pêche professionnelle",
                    "mécanique marine",
                    "automatisation",
                    "intelligence artificielle",
                    "transformation numérique des TPE",
                  ],
                  sameAs: ["https://www.linkedin.com/in/besmaracontact"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://besmara.fr/#website",
                  name: "BESMARA",
                  url: "https://besmara.fr",
                  publisher: {
                    "@id": "https://besmara.fr/#organization",
                  },
                  inLanguage: "fr-FR",
                },
                {
                  "@type": "Service",
                  "@id": "https://besmara.fr/services#site-vitrine",
                  name: "Site Vitrine Pro",
                  provider: { "@id": "https://besmara.fr/#organization" },
                  description:
                    "Création de sites vitrines professionnels pour TPE et acteurs de la mer.",
                  areaServed: "FR",
                },
                {
                  "@type": "Service",
                  "@id": "https://besmara.fr/services#automatisation",
                  name: "Automatisation",
                  provider: { "@id": "https://besmara.fr/#organization" },
                  description:
                    "Automatisation des tâches répétitives avec n8n pour les petites entreprises.",
                  areaServed: "FR",
                },
                {
                  "@type": "Service",
                  "@id": "https://besmara.fr/automatisation-peche-aquaculture#service",
                  name: "IA Maritime",
                  provider: { "@id": "https://besmara.fr/#organization" },
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
