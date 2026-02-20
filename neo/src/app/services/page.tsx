import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveSeparator from "@/components/WaveSeparator";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Monitor, Settings, Waves, ChevronRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions BESMARA | Site vitrine, automatisation, IA maritime",
  description: "Découvrez les trois offres BESMARA : site vitrine professionnel, automatisation des tâches répétitives, et accompagnement IA pour la pêche et l'aquaculture.",
};

const offers = [
  {
    icon: Monitor,
    name: "Pack Site Vitrine Pro",
    tagline: "Une présence en ligne claire et professionnelle",
    for: "Traiteurs, agents immo, artisans, pros de la mer…",
    description: "Votre site représente votre activité. En 3 à 5 sections percutantes, il dit qui vous êtes, ce que vous faites, et comment vous contacter — sans superflu. Mobile-first, rapide, et facile à faire évoluer.",
    includes: [
      "Site 3–5 sections : Accueil, À propos, Services, Projets/Avis, Contact",
      "Formulaire de contact ou demande de devis",
      "Intégration réseaux sociaux",
      "Mobile-first, rapide à charger",
      "SEO de base (balises, schema.org)",
      "Hébergement Vercel inclus le premier mois",
    ],
    faq: [
      { q: "Combien de temps pour livrer ?", a: "Entre 5 et 10 jours ouvrés selon la complexité. On commence toujours par un brief de 20 min pour cadrer les attentes." },
      { q: "Est-ce que je peux modifier le contenu moi-même ?", a: "Oui, on peut intégrer un CMS simple si nécessaire. Sinon, les modifications légères sont incluses pendant 1 mois." },
    ],
    highlight: false,
    color: "text-accent",
  },
  {
    icon: Settings,
    name: 'Pack Automatisation "Tâches reloues"',
    tagline: "Récupérez quelques heures par semaine",
    for: "Petites entreprises débordées par les mails, formulaires, tableaux…",
    description: "On identifie les 2–3 tâches qui vous mangent le plus de temps, et on les automatise. Résultat : moins de copier-coller, moins d'oublis, plus de temps pour votre vrai métier.",
    includes: [
      "Audit simple des process qui prennent du temps",
      "Mise en place de 1–2 automatisations avec n8n",
      "Exemple : formulaire → Google Sheet → email de notification",
      "Classement d'emails, alertes, rappels automatiques",
      "Documentation claire de ce qui a été mis en place",
      "Formation de 30 min pour maintenir vos automatisations",
    ],
    faq: [
      { q: "J'ai peur que ça soit trop technique pour moi", a: "On utilise n8n, un outil visuel et non-technique. On vous explique tout en français, et on reste disponibles après livraison." },
      { q: "Et si une automatisation tombe en panne ?", a: "n8n envoie des alertes en cas d'erreur. On vous accompagne pour comprendre et corriger." },
    ],
    highlight: true,
    color: "text-accent-secondary",
  },
  {
    icon: Waves,
    name: 'Pack Mer & Aquaculture "Premier pas IA"',
    tagline: "Entrez dans le numérique par des étapes concrètes",
    for: "Armements côtiers, fermes aquacoles, entreprises de transformation",
    description: "Conçu pour les professionnels de la mer qui veulent se digitaliser sans se perdre. On part de votre réalité — quotas, traçabilité, ventes — et on construit des outils concrets.",
    includes: [
      "Site vitrine orienté durabilité et traçabilité",
      "Tableau de bord simple avec vos indicateurs clés",
      "1–2 automatisations pour la collecte de données terrain",
      "Connexion avec vos outils existants (email, tableurs)",
      "Appuyé sur les tendances réelles IA/pêche (sources vérifiées)",
      "Accompagnement post-livraison de 2 semaines",
    ],
    faq: [
      { q: "On n'a pas de données structurées, c'est possible quand même ?", a: "Oui. On commence par structurer simplement ce que vous avez déjà — souvent un tableur ou un carnet papier — avant d'automatiser quoi que ce soit." },
      { q: "Est-ce que ça répond aux obligations de traçabilité ?", a: "Ce qu'on construit peut appuyer vos démarches de traçabilité, mais on ne remplace pas un logiciel dédié certifié. On vous oriente vers les bons outils si nécessaire." },
    ],
    highlight: false,
    color: "text-gold",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 network-pattern opacity-20 pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 border border-accent/20 tracking-widest uppercase">
                Les solutions BESMARA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Trois offres,{" "}
                <span className="text-gold">des résultats concrets</span>
              </h1>
              <p className="text-primary-foreground/75 text-lg leading-relaxed">
                Pas de package mystère ni de devis en 14 pages.
                Ce que vous payez, ce que vous recevez.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <WaveSeparator fromColor="hsl(220 56% 23%)" toColor="hsl(210 40% 98%)" />

        {/* Offres détaillées */}
        <section className="py-20 bg-background">
          <div className="container-custom max-w-5xl space-y-24">
            {offers.map((offer, index) => (
              <ScrollReveal key={offer.name} delay={index * 50}>
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${offer.highlight ? "lg:flex-row-reverse" : ""}`}>
                  {/* Texte */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${offer.highlight ? "bg-primary text-white" : "bg-accent/10"}`}>
                        <offer.icon className={`w-7 h-7 ${offer.color}`} />
                      </div>
                      {offer.highlight && (
                        <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-bold rounded-full uppercase tracking-wide">
                          Populaire
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">{offer.name}</h2>
                    <p className={`text-sm uppercase tracking-wide font-semibold mb-4 ${offer.color}`}>
                      Pour : {offer.for}
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">{offer.description}</p>
                    <Button variant={offer.highlight ? "accent" : "outline"} size="lg" asChild>
                      <Link href="/contact">
                        Discuter de ce projet <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Inclus + FAQ */}
                  <div className="space-y-6">
                    <div className={`rounded-2xl p-6 border ${offer.highlight ? "bg-primary text-primary-foreground border-accent/30 shadow-glow" : "bg-muted border-border/50"}`}>
                      <h3 className="font-display font-bold text-lg mb-4">Ce qui est inclus</h3>
                      <ul className="space-y-3">
                        {offer.includes.map((item) => (
                          <li key={item} className="flex gap-3 text-sm">
                            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${offer.color}`} />
                            <span className={offer.highlight ? "text-primary-foreground/85" : "text-muted-foreground"}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-display font-bold text-base">Questions fréquentes</h3>
                      {offer.faq.map((f) => (
                        <div key={f.q} className="bg-muted rounded-xl p-5 border border-border/50">
                          <p className="font-semibold text-sm text-foreground mb-2">{f.q}</p>
                          <p className="text-sm text-muted-foreground">{f.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < offers.length - 1 && (
                  <div className="border-t border-border/30 mt-16" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>

        <WaveSeparator fromColor="hsl(210 40% 98%)" toColor="hsl(220 56% 23%)" />

        {/* CTA final */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center max-w-2xl">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Pas sûr de quelle offre choisir ?
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                Un appel de 20 minutes suffit souvent pour clarifier les choses.
                C&apos;est gratuit, sans engagement.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Réserver un appel gratuit <ChevronRight className="ml-1" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
