"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Card, CardContent } from "./ui/card";
import { Utensils, Home, Anchor } from "lucide-react";

const projects = [
  {
    tag: "Site vitrine",
    title: "Nomade Tasty",
    subtitle: "Traiteur à Bellevigny, Vendée",
    icon: Utensils,
    iconColor: "text-orange-500 bg-orange-500/10",
    tagColor: "text-orange-600 bg-orange-100 dark:bg-orange-900/30",
    context:
      "Traiteur local, sans site pour se mettre en valeur ni faciliter les demandes de devis.",
    done: [
      "Structure complète : Accueil, À propos, Services, Galerie, Contact",
      "Mise en avant de vos réalisations",
      "Formulaire de demande de devis",
      "Design chaleureux, mobile-first",
    ],
    benefit: "Une présence pro, un lien unique à envoyer aux clients.",
  },
  {
    tag: "Site expert",
    title: "Anne-Cécile Collet",
    subtitle: "Immobilier de prestige, Côte d'Azur",
    icon: Home,
    iconColor: "text-slate-500 bg-slate-500/10",
    tagColor: "text-slate-600 bg-slate-100 dark:bg-slate-800",
    context:
      "Conseillère immobilière haut de gamme avec 20+ ans d'expérience, besoin d'un site à la hauteur de son positionnement.",
    done: [
      "Positionnement clair : immobilier de prestige – Côte d'Azur",
      "Section biens d'exception",
      "Formulaire d'estimation gratuite en ligne",
      "Mise en avant de l'expérience et des langues parlées",
    ],
    benefit: "Un site qui inspire confiance dès les 5 premières secondes.",
  },
  {
    tag: "Exemple type mer",
    title: "Armement côtier",
    subtitle: "6–9 navires, pêche côtière",
    icon: Anchor,
    iconColor: "text-accent bg-accent/10",
    tagColor: "text-accent bg-accent/10",
    context:
      "Armement avec des charges en hausse, besoin de montrer le sérieux de la flotte, ses engagements, et de faciliter les contacts partenaires.",
    done: [
      "Site one-page : histoire, flotte, activité, engagements, contact",
      "Mise en lumière des défis terrain (gasoil, paperasse, coordination)",
      "Ouverture vers le numérique et les premiers outils IA",
      "Design maritime pro, adapté mobile",
    ],
    benefit: "Une vitrine sérieuse pour les partenaires, clients et financeurs.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Réalisations BESMARA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 mb-6">
              Ce qu&apos;on a déjà construit
            </h2>
            <p className="text-muted-foreground text-lg">
              Des projets réels, pas des mockups. Avec de vraies contraintes et
              de vrais bénéfices.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {projects.map((p, index) => (
            <ScrollReveal key={p.title} delay={index * 100}>
              <Card className="shadow-soft card-hover border border-border/50 overflow-hidden">
                <CardContent className="p-0 flex flex-col md:flex-row">
                  {/* Icon side */}
                  <div className={`p-8 md:w-48 flex items-center justify-center flex-shrink-0 ${p.iconColor}`}>
                    <p.icon className="w-16 h-16 opacity-80" />
                  </div>

                  {/* Content side */}
                  <div className="p-8 flex-grow">
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold mb-1">
                          {p.title}
                        </h3>
                        <p className="text-muted-foreground">{p.subtitle}</p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full md:ml-auto ${p.tagColor}`}
                      >
                        {p.tag}
                      </span>
                    </div>

                    <p className="text-foreground/80 mb-6 italic border-l-2 border-accent/30 pl-4 py-1">
                      &quot;{p.context}&quot;
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        {p.done.slice(0, 2).map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-foreground/90">
                            <span className="text-accent font-bold">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {p.done.slice(2).map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-foreground/90">
                            <span className="text-accent font-bold">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent/5 rounded-lg p-4 border border-accent/10">
                      <p className="text-sm font-semibold text-foreground">
                        <span className="text-accent mr-2">→</span>
                        Bénéfice : <span className="font-normal text-muted-foreground">{p.benefit}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
