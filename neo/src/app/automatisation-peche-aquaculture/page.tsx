import type { Metadata } from "next";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Bot,
  Check,
  ClipboardList,
  Database,
  MailCheck,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveSeparator from "@/components/WaveSeparator";
import { Button } from "@/components/ui/button";

const canonicalUrl = "https://besmara.fr/automatisation-peche-aquaculture";

export const metadata: Metadata = {
  title: "Automatisation pour la pêche et l’aquaculture | BESMARA",
  description:
    "BESMARA automatise les tâches administratives, la collecte de données et les suivis des armements, entreprises aquacoles et acteurs de la filière mer.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Automatisation pour la pêche et l’aquaculture | BESMARA",
    description:
      "Des outils simples pour réduire les doubles saisies, fiabiliser les suivis et gagner du temps dans la filière mer.",
    url: canonicalUrl,
    type: "website",
    images: ["/og-image.png"],
  },
};

const useCases = [
  {
    icon: MailCheck,
    title: "Mails, formulaires et demandes",
    text: "Centraliser les demandes, extraire les informations utiles et déclencher automatiquement les confirmations ou relances.",
  },
  {
    icon: Database,
    title: "Collecte et consolidation des données",
    text: "Rassembler les informations dispersées entre tableurs, formulaires et boîtes mail dans une base plus fiable.",
  },
  {
    icon: ClipboardList,
    title: "Rapports et tableaux de bord",
    text: "Préparer des synthèses régulières à partir des données existantes, sans refaire les mêmes copier-coller.",
  },
  {
    icon: Wrench,
    title: "Rappels opérationnels",
    text: "Suivre les échéances, documents, interventions de maintenance ou actions à mener avec des alertes simples.",
  },
];

const faq = [
  {
    question: "Que peut-on automatiser dans une entreprise de pêche ou d’aquaculture ?",
    answer:
      "Les meilleurs premiers sujets sont généralement les tâches répétitives et vérifiables : transfert d’informations entre un email et un tableau, classement de documents, génération de synthèses, notifications, relances et préparation de tableaux de bord.",
  },
  {
    question: "Faut-il déjà disposer de données bien organisées ?",
    answer:
      "Non. BESMARA peut commencer par structurer les données déjà présentes dans des tableurs, emails ou formulaires. L’automatisation vient ensuite, lorsque les informations et les responsabilités sont suffisamment claires.",
  },
  {
    question: "BESMARA remplace-t-elle un logiciel réglementaire ou certifié ?",
    answer:
      "Non. BESMARA ne remplace pas un logiciel métier certifié, un système de navigation ou un équipement critique pour la sécurité. L’intervention porte sur l’organisation des flux d’information et la connexion des outils autour de ces systèmes.",
  },
  {
    question: "Comment savoir si une automatisation sera rentable ?",
    answer:
      "On mesure d’abord la fréquence de la tâche, le temps passé, le nombre d’erreurs ou d’oublis et la stabilité du processus. Une automatisation n’est proposée que si le bénéfice attendu justifie sa mise en place et sa maintenance.",
  },
  {
    question: "L’accompagnement peut-il se faire à distance ?",
    answer:
      "Oui. Le diagnostic, la conception et une grande partie de la mise en œuvre peuvent se faire à distance partout en France. Une intervention sur site peut être étudiée lorsque le contexte opérationnel le nécessite.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: "Automatisation et IA pour la pêche et l’aquaculture",
      serviceType: "Conseil et mise en œuvre d’automatisations administratives et de données",
      description:
        "Accompagnement des professionnels de la pêche, de l’aquaculture et de la filière mer pour automatiser les tâches répétitives, structurer les données et connecter les outils existants.",
      url: canonicalUrl,
      provider: { "@id": "https://besmara.fr/#organization" },
      areaServed: { "@type": "Country", name: "France" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Armements, entreprises aquacoles et petites entreprises de la filière mer",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://besmara.fr" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Automatisation pêche et aquaculture",
          item: canonicalUrl,
        },
      ],
    },
  ],
};

export default function AutomatisationPecheAquaculturePage() {
  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative overflow-hidden bg-primary pb-20 pt-32 text-primary-foreground">
          <div className="network-pattern pointer-events-none absolute inset-0 opacity-20" />
          <div className="container-custom relative z-10 max-w-5xl">
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex rounded-full border border-accent/20 bg-accent/20 px-4 py-2 text-sm font-medium uppercase tracking-widest text-accent">
                Expertise filière mer
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Automatisation et IA pour la pêche et l&apos;aquaculture
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                BESMARA aide les armements, entreprises aquacoles et acteurs de la filière mer à
                automatiser leurs tâches administratives, mieux structurer leurs données et
                connecter leurs outils existants.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/contact">
                    Demander un diagnostic <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link href="/ressources/guide-automatisation-peche-aquaculture">
                    Lire le guide pratique
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <WaveSeparator fromColor="hsl(220 56% 23%)" toColor="hsl(210 40% 98%)" />

        <section className="bg-background py-20">
          <div className="container-custom max-w-5xl">
            <div className="rounded-3xl border border-accent/20 bg-white p-7 shadow-soft md:p-10">
              <div className="flex items-start gap-4">
                <Anchor className="mt-1 h-7 w-7 flex-shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    La réponse courte
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    Pour une entreprise de la filière mer, une bonne automatisation commence par
                    supprimer une double saisie ou un suivi manuel précis. Elle doit fonctionner
                    avec les outils déjà utilisés, rester compréhensible par l&apos;équipe et prévoir
                    une vérification humaine lorsque l&apos;information est sensible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container-custom max-w-6xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Cas d&apos;usage
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                Les premiers chantiers les plus utiles
              </h2>
              <p className="mt-4 text-muted-foreground">
                On commence par un flux simple, fréquent et mesurable avant d&apos;étendre le système.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {useCases.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border/60 bg-white p-7 shadow-soft">
                  <item.icon className="h-8 w-8 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container-custom max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-accent/20 bg-white p-8">
                <Check className="h-8 w-8 text-accent-secondary" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-bold">Cet accompagnement convient si…</h2>
                <ul className="mt-6 space-y-4 text-muted-foreground">
                  {[
                    "une même information est recopiée dans plusieurs outils",
                    "les relances, rapports ou classements occupent du temps chaque semaine",
                    "vos données existent mais sont dispersées entre emails et tableurs",
                    "vous souhaitez avancer par une première amélioration limitée et mesurable",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-gold/30 bg-muted p-8">
                <X className="h-8 w-8 text-gold" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-bold">Ce n&apos;est pas le bon cadre si…</h2>
                <ul className="mt-6 space-y-4 text-muted-foreground">
                  {[
                    "le besoin concerne un système de navigation ou de sécurité critique",
                    "vous cherchez à remplacer un logiciel métier réglementaire ou certifié",
                    "le processus change chaque jour et personne ne peut encore le décrire",
                    "vous attendez une décision entièrement autonome sans contrôle humain",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground">
          <div className="container-custom max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <Bot className="h-10 w-10 text-accent" aria-hidden="true" />
                <h2 className="mt-5 font-display text-3xl font-bold text-white">
                  Une méthode en quatre étapes
                </h2>
                <p className="mt-4 leading-relaxed text-primary-foreground/70">
                  L&apos;objectif n&apos;est pas d&apos;ajouter une couche technique. Il est de rendre un
                  flux de travail plus simple, observable et maintenable.
                </p>
              </div>
              <ol className="grid gap-5 sm:grid-cols-2">
                {[
                  ["1", "Observer", "Décrire la tâche réelle, ses exceptions et les personnes concernées."],
                  ["2", "Mesurer", "Estimer la fréquence, le temps passé et les erreurs ou oublis actuels."],
                  ["3", "Prototyper", "Automatiser un périmètre limité avec une validation humaine visible."],
                  ["4", "Documenter", "Tester, expliquer le fonctionnement et prévoir les alertes en cas d’échec."],
                ].map(([number, title, text]) => (
                  <li key={number} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="font-mono text-sm font-bold text-accent">{number}</span>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-background py-20" aria-labelledby="faq-heading">
          <div className="container-custom max-w-4xl">
            <div className="text-center">
              <ShieldCheck className="mx-auto h-9 w-9 text-accent" aria-hidden="true" />
              <h2 id="faq-heading" className="mt-4 font-display text-3xl font-bold md:text-4xl">
                Questions fréquentes
              </h2>
            </div>
            <div className="mt-10 space-y-5">
              {faq.map((item) => (
                <article key={item.question} className="rounded-2xl border border-border/60 bg-white p-6 shadow-soft">
                  <h3 className="font-display text-lg font-bold text-foreground">{item.question}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold">Identifier votre premier cas d&apos;usage</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Un échange court permet de vérifier si votre problème mérite une automatisation et
              quel périmètre serait raisonnable pour commencer.
            </p>
            <Button variant="accent" size="lg" className="mt-8" asChild>
              <Link href="/contact">
                Parler de votre organisation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
