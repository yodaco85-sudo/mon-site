"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const feedbacks = [
  {
    quote:
      "Ce que j'ai apprécié avec BESMARA, c'est qu'on part des vrais besoins — pas d'une liste de fonctionnalités. Le résultat est propre, rapide à charger, et mes clients trouvent facilement ce qu'ils cherchent.",
    author: "Retour d'un client traiteur",
    role: "Vendée",
  },
  {
    quote:
      "Le site reflète exactement mon positionnement. BESMARA a su comprendre mon marché sans que j'aie besoin de tout expliquer dans le détail.",
    author: "Retour d'une cliente immobilier",
    role: "Côte d'Azur",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 network-pattern opacity-30" />
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Ce qu&apos;on dit de BESMARA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 mb-6">
              Des retours concrets
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-lg border-b border-accent/20 pb-4 inline-block">
              On préfère montrer peu et <span className="text-accent font-semibold">vrai</span> plutôt que beaucoup et inventé.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {feedbacks.map((f, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-soft h-full flex flex-col card-hover">
                <CardContent className="p-8 flex flex-col flex-grow">
                  <Quote className="w-10 h-10 text-accent/30 mb-6" />
                  <p className="text-foreground/90 leading-relaxed italic mb-8 flex-grow text-lg">
                    &quot;{f.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-display font-bold text-xl">
                      {f.author.split(' ').pop()?.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground">{f.author}</p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                        {f.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="text-center text-muted-foreground text-sm mt-16 max-w-md mx-auto bg-card rounded-full py-3 px-6 shadow-sm border border-border/50">
            Vous voulez voir ce que BESMARA peut faire pour votre activité ?{" "}
            <a href="#contact" className="text-accent hover:text-accent-secondary font-semibold transition-colors">
              On en parle en 20 minutes.
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
