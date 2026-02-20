"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Monitor, Settings, Waves } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const offers = [
  {
    icon: Monitor,
    name: "Pack Site Vitrine Pro",
    tagline: "Une présence en ligne claire et professionnelle",
    for: "Traiteurs, agents immo, artisans, pros de la mer…",
    includes: [
      "Site 3–5 sections (Accueil, À propos, Services, Projets/Avis, Contact)",
      "Formulaire de contact ou demande de devis",
      "Intégration réseaux sociaux",
      "Mobile-first, rapide à charger",
    ],
    cta: "En savoir plus",
    highlight: false,
  },
  {
    icon: Settings,
    name: 'Pack Automatisation "Tâches reloues"',
    tagline: "Récupérez quelques heures par semaine",
    for: "Petites entreprises débordées par les mails, formulaires, tableaux…",
    includes: [
      "Audit simple des process qui prennent du temps",
      "Mise en place de 1–2 automatisations (n8n)",
      "Ex : formulaire → Google Sheet → email",
      "Classement d'emails, alertes, notifications",
    ],
    cta: "Identifier mes tâches reloues",
    highlight: true,
  },
  {
    icon: Waves,
    name: 'Pack Mer & Aquaculture "Premier pas IA"',
    tagline: "Entrez dans le numérique par des étapes concrètes",
    for: "Armements côtiers, fermes aquacoles, entreprises de transformation",
    includes: [
      "Site vitrine orienté durabilité et traçabilité",
      "Tableau de bord simple (indicateurs clés)",
      "1–2 automatisations (collecte données)",
      "Appuyé sur les tendances réelles IA/pêche",
    ],
    cta: "Discuter de mon projet",
    highlight: false,
  },
];

export default function Offers() {
  return (
    <section id="offers" className="section-padding bg-muted">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Les solutions BESMARA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 mb-6">
              Trois offres, des résultats concrets
            </h2>
            <p className="text-muted-foreground text-lg">
              Pas de package mystère ni de devis en 14 pages. Ce que vous payez,
              ce que vous recevez.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <ScrollReveal key={offer.name} delay={index * 100}>
              <Card
                className={`relative h-full flex flex-col border transition-all duration-300 ${offer.highlight
                    ? "bg-primary border-accent shadow-glow -translate-y-2 scale-[1.02]"
                    : "bg-card border-border/50 shadow-soft card-hover"
                  }`}
              >
                {offer.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wide shadow-md">
                    Populaire
                  </div>
                )}

                <CardContent className="p-8 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${offer.highlight ? "bg-accent/20" : "bg-accent/10"
                    }`}>
                    <offer.icon className={`w-7 h-7 ${offer.highlight ? "text-accent-secondary" : "text-accent"
                      }`} />
                  </div>

                  <h3 className={`font-display text-xl font-bold mb-2 ${offer.highlight ? "text-primary-foreground" : "text-foreground"
                    }`}>
                    {offer.name}
                  </h3>

                  <p className={`text-sm mb-6 ${offer.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                    {offer.tagline}
                  </p>

                  <p className={`text-xs uppercase tracking-wide font-semibold mb-4 ${offer.highlight ? "text-gold" : "text-accent"
                    }`}>
                    Pour : {offer.for}
                  </p>

                  <ul className="space-y-3 flex-grow mb-8">
                    {offer.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <span className={offer.highlight ? "text-gold" : "text-accent"}>✓</span>
                        <span className={offer.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={offer.highlight ? "accent" : "outline"}
                    className={`w-full ${offer.highlight ? "mt-auto" : "mt-auto hover:bg-accent hover:border-accent hover:text-white border-accent text-accent"}`}
                    asChild
                  >
                    <a href="#contact">{offer.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
