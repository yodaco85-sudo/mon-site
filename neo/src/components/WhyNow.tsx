"use client";

import { ScrollReveal } from "./ScrollReveal";
import { AnimatedCounter } from "./AnimatedCounter";
import { Fuel, FileText, Trophy } from "lucide-react";

const pressures = [
  { icon: Fuel, label: "Marges sous pression", sub: "Gasoil, quotas, coûts" },
  { icon: FileText, label: "Traçabilité obligatoire", sub: "Réglementation croissante" },
  { icon: Trophy, label: "Concurrence en ligne", sub: "Présence web devenue essentielle" },
];

export default function WhyNow() {
  return (
    <section id="why-now" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 network-pattern opacity-10 pointer-events-none" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Pourquoi maintenant
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-6">
              Le train du numérique passe — et il n&apos;attend pas
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={100}>
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 text-center backdrop-blur-sm shadow-soft">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                574<span className="text-3xl ml-1">M$</span>
              </div>
              <p className="text-primary-foreground/70 font-medium">Marché IA + pêche/aquaculture en 2023</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 text-center backdrop-blur-sm shadow-soft">
              <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                1,66<span className="text-3xl ml-1">Md$</span>
              </div>
              <p className="text-primary-foreground/70 font-medium">Projection d&apos;ici 2033</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 text-center backdrop-blur-sm shadow-soft">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent-secondary mb-2 flex items-center justify-center">
                +<AnimatedCounter end={11.2} suffix="%" />
              </div>
              <p className="text-primary-foreground/70 font-medium">Croissance annuelle prévue</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Texte */}
        <ScrollReveal delay={400}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-primary-foreground/90 text-xl leading-relaxed">
              Le marché de l&apos;IA dans les pêches et l&apos;aquaculture durables est en pleine
              explosion. Concrètement, cela veut dire que les outils numériques et
              l&apos;IA vont devenir <strong className="text-white">la norme</strong> pour
              suivre ses données, améliorer la productivité et prouver sa durabilité.{" "}
            </p>
            <p className="text-gold font-medium text-lg italic">
              « Ceux qui s&apos;y mettent tôt prennent de l&apos;avance, les autres regardent
              passer le train. »
            </p>
            <p className="text-primary-foreground/70 leading-relaxed pt-2">
              La bonne nouvelle : pas besoin de tout révolutionner d&apos;un coup. On
              commence par <strong className="text-primary-foreground/90">un site qui vous représente</strong>,
              une ou deux automatisations qui vous font gagner de vraies heures, et on
              construit à partir de là. C&apos;est comme ça que ça marche, terrain après terrain.
            </p>
          </div>
        </ScrollReveal>

        {/* Pressions réelles */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pressures.map((item, index) => (
            <ScrollReveal key={item.label} delay={400 + index * 100}>
              <div className="bg-card/5 border border-border/10 rounded-xl p-6 text-center h-full flex flex-col items-center card-hover">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2">{item.label}</h4>
                <p className="text-primary-foreground/60 text-sm mt-auto">{item.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
