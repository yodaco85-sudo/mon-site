"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Anchor, Ban, Zap, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const points = [
  {
    icon: Anchor,
    title: "On parle votre langue",
    desc: "Gasoil, quotas, météo, paperasse : on connaît les contraintes de terrain. Pas besoin de traduire.",
  },
  {
    icon: Ban,
    title: "Zéro bullshit",
    desc: "Pas de jargon tech, pas de promesses en l'air. On vous dit ce que ça fait concrètement.",
  },
  {
    icon: Zap,
    title: "Solutions simples d'abord",
    desc: "On commence petit, utile, rapide. Pas besoin d'une usine à gaz pour gagner du temps.",
  },
  {
    icon: Rocket,
    title: "MVP en 1–2 semaines",
    desc: "Un prototype fonctionnel livré vite, pour voir, tester et ajuster avant d'aller plus loin.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-background wave-separator">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <div>
            <ScrollReveal>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Qui sommes-nous
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 mb-6">
                BESMARA,{" "}
                <span className="text-accent">de la barre à la RAM</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  BESMARA est fondée par{" "}
                  <strong className="text-foreground">Yoann</strong>, ancien patron et chef mécanicien
                  avec <strong className="text-foreground">22 ans en mer</strong>.
                  Piloter un bateau, gérer un équipage, jongler avec la météo, les quotas,
                  le gasoil et la paperasse administrative : on sait ce que &quot;débordé&quot;
                  veut dire en vrai.
                </p>
                <p>
                  Après cette reconversion vers le numérique, BESMARA accompagne aujourd&apos;hui
                  les <strong className="text-foreground">petites entreprises et acteurs de la mer</strong>{" "}
                  sur deux fronts : créer des{" "}
                  <strong>sites vitrines qui représentent vraiment leur activité</strong>, et{" "}
                  <strong>automatiser les tâches répétitives</strong> qui mangent du temps
                  chaque semaine. On utilise n8n, Docker, les APIs d&apos;IA
                  — des outils sérieux, sans complexité inutile.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Points forts */}
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p, index) => (
              <ScrollReveal key={p.title} delay={index * 100}>
                <Card className="shadow-soft card-hover border border-border/50 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <p.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
