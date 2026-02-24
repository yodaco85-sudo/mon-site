import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveSeparator from "@/components/WaveSeparator";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Anchor, Cpu, Leaf, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Yoann, fondateur BESMARA | 12 ans de mer, consultant IA",
  description: "Yoann, ancien patron de pêche et chef mécanicien reconverti en consultant IA. BESMARA accompagne les professionnels de la mer et les TPE vers le numérique.",
};

const timeline = [
  { year: "1999–2021", icon: Anchor, title: "22ans de mer", desc: "Patron de pêche, chef mécanicien. Bretagne, Normandie, côtes atlantiques. Gestion d'équipage, maintenance moteur, navigation hauturière." },
  { year: "2022–2024", icon: Cpu, title: "Reconversion numérique", desc: "Formation au développement web et à l'automatisation. Découverte de n8n, de l'IA appliquée, des APIs. Le maritime reste le fil rouge." },
  { year: "2025–", icon: Leaf, title: "BESMARA", desc: "Création de BESMARA pour accompagner les pros de la mer et les TPE. Des solutions concrètes, sans jargon, ancrées dans la réalité du terrain." },
];

const values = [
  { title: "Transparence", desc: "Si une solution ne vous convient pas ou coûte trop cher pour ce qu'elle apporte, on vous le dit directement." },
  { title: "Terrain d'abord", desc: "On part toujours de votre réalité opérationnelle — pas d'une grille de solutions toute faite." },
  { title: "Simplifié, pas simplet", desc: "Les outils qu'on déploie sont puissants mais lisibles. Vous devez comprendre ce qui tourne chez vous." },
  { title: "Long terme", desc: "L'objectif n'est pas de vous vendre un projet, mais de vous donner les moyens de progresser dans la durée." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 network-pattern opacity-20 pointer-events-none" />
          <div className="container-custom relative z-10 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollReveal>
                  <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 border border-accent/20 tracking-widest uppercase">
                    À propos
                  </span>
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Du chalut au code —{" "}
                    <span className="text-gold">22 ans en mer</span>
                  </h1>
                  <p className="text-primary-foreground/75 text-lg leading-relaxed">
                    BESMARA est fondée par Yoann, ancien patron et chef mécanicien.
                    L&apos;expérience maritime n&apos;est pas un argument marketing : c&apos;est
                    la raison pour laquelle on comprend vos contraintes avant de proposer
                    quoi que ce soit.
                  </p>
                </ScrollReveal>
              </div>
              <div className="hidden lg:flex justify-center">
                <ScrollReveal delay={200}>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-3xl scale-110 animate-pulse-glow" />
                    <Image
                      src="/brand/profile.png"
                      alt="Yoann, fondateur BESMARA - Ancien patron de pêche et chef mécanicien"
                      width={400}
                      height={400}
                      className="relative rounded-2xl shadow-strong border border-white/10 object-cover"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <WaveSeparator fromColor="hsl(220 56% 23%)" toColor="hsl(210 40% 98%)" />

        {/* Parcours */}
        <section className="py-20 bg-background">
          <div className="container-custom max-w-4xl">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
                Parcours
              </h2>
            </ScrollReveal>
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block" />
              <div className="space-y-10">
                {timeline.map((item, index) => (
                  <ScrollReveal key={item.year} delay={index * 100}>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 relative z-10">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-xs text-accent tracking-widest">{item.year}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WaveSeparator fromColor="hsl(210 40% 98%)" toColor="hsl(210 30% 96%)" />

        {/* Valeurs */}
        <section className="py-20 bg-muted">
          <div className="container-custom max-w-5xl">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-center">Nos valeurs</h2>
              <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
                Ce qui guide chaque projet, chaque conversation.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, index) => (
                <ScrollReveal key={v.title} delay={index * 80}>
                  <div className="bg-background rounded-2xl p-8 border border-border/50 shadow-soft card-hover">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <WaveSeparator fromColor="hsl(210 30% 96%)" toColor="hsl(220 56% 23%)" />

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center max-w-2xl">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                On travaille ensemble ?
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                20 minutes au téléphone, sans engagement, pour voir si BESMARA peut vous aider.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/contact">
                    Prendre contact <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link href="/services">Voir les solutions →</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
