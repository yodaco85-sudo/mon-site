"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { ChevronRight } from "lucide-react";

// SVG vagues animées — 3 couches avec timing décalé
function AnimatedWaves() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Vague 1 — cyan profond, la plus proche */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave1">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-1/2 h-full inline-block">
          <path
            d="M0,80 C180,120 360,40 540,80 C720,120 900,40 1080,80 C1260,120 1350,60 1440,80 L1440,160 L0,160 Z"
            fill="hsl(199 89% 48% / 0.25)"
          />
        </svg>
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-1/2 h-full inline-block">
          <path
            d="M0,80 C180,120 360,40 540,80 C720,120 900,40 1080,80 C1260,120 1350,60 1440,80 L1440,160 L0,160 Z"
            fill="hsl(199 89% 48% / 0.25)"
          />
        </svg>
      </div>

      {/* Vague 2 — turquoise, décalée */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave2">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-1/2 h-full inline-block">
          <path
            d="M0,100 C200,60 400,130 600,100 C800,70 1000,130 1200,100 C1320,80 1390,110 1440,100 L1440,160 L0,160 Z"
            fill="hsl(168 76% 40% / 0.20)"
          />
        </svg>
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-1/2 h-full inline-block">
          <path
            d="M0,100 C200,60 400,130 600,100 C800,70 1000,130 1200,100 C1320,80 1390,110 1440,100 L1440,160 L0,160 Z"
            fill="hsl(168 76% 40% / 0.20)"
          />
        </svg>
      </div>

      {/* Vague 3 — blanc semi-transparent, plus proche */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave3">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-1/2 h-full inline-block">
          <path
            d="M0,120 C240,90 480,140 720,120 C960,100 1200,140 1440,120 L1440,160 L0,160 Z"
            fill="hsl(0 0% 100% / 0.10)"
          />
        </svg>
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-1/2 h-full inline-block">
          <path
            d="M0,120 C240,90 480,140 720,120 C960,100 1200,140 1440,120 L1440,160 L0,160 Z"
            fill="hsl(0 0% 100% / 0.10)"
          />
        </svg>
      </div>
    </div>
  );
}

// Silhouette chalutier SVG — animée en float CSS
function BoatSilhouette() {
  return (
    <div className="animate-float" aria-hidden="true">
      {/* AIS data — texte monospace décoratif */}
      <div className="text-center mb-3">
        <span className="font-mono text-xs text-accent/60 tracking-widest select-none">
          47°N 3°W · CAP 235° · 12 kn · AIS ●
        </span>
      </div>

      {/* Bateau SVG */}
      <div
        className="relative"
        style={{ filter: "drop-shadow(0 4px 24px hsl(199 89% 48% / 0.3))" }}
      >
        <Image
          src="/boat.svg"
          alt="Silhouette de chalutier"
          width={320}
          height={135}
          className="opacity-80"
          style={{ color: "hsl(199 89% 70%)" }}
          priority={false}
        />
      </div>

      {/* Ligne de flottaison animée */}
      <div className="mt-1 flex items-center justify-center gap-1 opacity-40">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-0.5 rounded-full bg-accent"
            style={{
              width: i % 3 === 0 ? "16px" : "8px",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image avec overlay marine */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-ocean.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/92" />
        {/* Réseau IA — pattern radial CSS */}
        <div className="absolute inset-0 network-pattern" />
      </div>

      <div className="relative z-10 container-custom w-full pt-20 pb-44">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Colonne texte */}
          <div className="text-center lg:text-left">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 backdrop-blur-sm border border-accent/20 tracking-widest uppercase">
                ⚓ Expertise maritime × IA
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                <span className="text-gold">BESMARA</span> —{" "}
                IA &amp; Automatisation pour la mer et les TPE
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed">
                Sites vitrines clairs, automatisation des tâches répétitives,
                premiers pas IA pour la pêche et l&apos;aquaculture.
              </p>
              <p className="text-sm text-primary-foreground/60 mb-10 mx-auto lg:mx-0 max-w-xl">
                Fondé par{" "}
                <strong className="text-primary-foreground/90">Yoann</strong>,
                ex-patron et chef mécanicien — 12 ans de mer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" asChild>
                  <Link href="#contact">
                    Réserver un appel gratuit
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link href="#projects">Voir les projets →</Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={400}>
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
                {[
                  { n: "12 ans", label: "Expérience mer" },
                  { n: "100%", label: "Mobile-first" },
                  { n: "20 min", label: "Appel offert" },
                ].map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <p className="text-2xl sm:text-3xl font-display font-bold text-gold">{s.n}</p>
                    <p className="text-xs text-primary-foreground/60 font-medium mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Colonne droite — Bateau animé (desktop) */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-6">
            <ScrollReveal delay={200}>
              <BoatSilhouette />
            </ScrollReveal>

            {/* Logo BESMARA en dessous du bateau */}
            <ScrollReveal delay={350}>
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-3xl scale-110 animate-pulse-glow" />
                <Image
                  src="/brand/logofinal.jpg"
                  alt="BESMARA — Logo complet or sur fond marine"
                  width={220}
                  height={220}
                  className="relative rounded-2xl shadow-strong border border-white/10"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Vagues animées en bas */}
      <AnimatedWaves />

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-float">
        <Link href="#about" aria-label="Défiler vers À propos">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2 hover:border-gold transition-colors">
            <div className="w-1 h-2 rounded-full bg-primary-foreground/50 animate-pulse" />
          </div>
        </Link>
      </div>
    </section>
  );
}
