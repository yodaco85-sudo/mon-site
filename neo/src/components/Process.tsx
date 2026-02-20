"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Appel découverte (20–30 min)",
    desc: "On parle de votre activité, vos problèmes, ce que vous voulez obtenir. Sans engagement, sans jargon. Juste voir si BESMARA peut vous être utile.",
  },
  {
    n: "02",
    title: "Proposition simple",
    desc: "Une page récap : objectifs, périmètre, délai estimé, prix. Pas de devis en 14 pages qu'on ne lit jamais.",
  },
  {
    n: "03",
    title: "MVP rapide",
    desc: "Une maquette fonctionnelle en 1–2 semaines selon la taille du projet. Vous voyez quelque chose de concret très vite.",
  },
  {
    n: "04",
    title: "Ajustements & mise en ligne",
    desc: "Retours, corrections, déploiement. On met le site en ligne ou on active l'automatisation sur votre environnement réel.",
  },
  {
    n: "05",
    title: "Optionnel : suivi & formation",
    desc: "Automatisations supplémentaires, petite formation pour prendre en main vos outils, accompagnement léger si besoin.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-muted wave-separator">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Comment on travaille
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 mb-6">
              Un process simple, sans surprise
            </h2>
            <p className="text-muted-foreground text-lg">
              Du premier appel à la mise en ligne, vous savez à chaque étape où
              on en est.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Ligne verticale */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 100}>
                <div
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className={`flex-1 w-full ${i % 2 !== 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-card rounded-2xl p-8 border border-border/50 shadow-soft card-hover relative
                      ${i % 2 === 0 ? "md:mr-4" : "md:ml-4"}
                    `}>
                      {/* Flèche pointant vers le centre (desktop) */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-card border-border/50 rotate-45
                        ${i % 2 === 0 ? "border-t border-r -right-2" : "border-b border-l -left-2"}
                      `} />

                      <h3 className="font-display text-xl font-bold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent text-primary-foreground flex items-center justify-center shadow-glow z-10 font-display font-bold text-xl border-4 border-muted relative">
                    {step.n}
                  </div>

                  <div className="flex-1 w-full hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-20 text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Commencer par l&apos;appel gratuit
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
