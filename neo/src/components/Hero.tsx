"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Vagues SVG en fond */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 C360,320 720,80 1080,220 C1260,290 1380,180 1440,200 L1440,600 L0,600 Z"
            fill="#0074D9"
          />
          <path
            d="M0,300 C300,200 600,400 900,280 C1100,200 1300,340 1440,300 L1440,600 L0,600 Z"
            fill="#C8A84E"
            opacity="0.4"
          />
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={100 + i * 110}
              cy={80 + (i % 4) * 60}
              r="3"
              fill="#0074D9"
              opacity="0.6"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Texte */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-5 px-4 py-1.5 bg-ocean/20 border border-ocean/40 text-ocean-light text-xs font-medium rounded-full tracking-widest uppercase">
              ⚓ Expertise maritime × IA
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-gold">BESMARA</span> —{" "}
              IA &amp; Automatisation pour la mer et les TPE
            </h1>

            <p className="text-lg sm:text-xl text-white/75 max-w-xl mb-4 leading-relaxed">
              Sites vitrines clairs, automatisation des tâches répétitives,
              premiers pas IA pour la pêche et l&apos;aquaculture.
            </p>
            <p className="text-sm text-white/50 mb-10">
              Fondé par <strong className="text-white/70">Yoann</strong>, ex-patron et chef mécanicien —
              24 ans de mer, des Sables d&apos;Olonne à Cherbourg.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-ocean hover:bg-ocean-light text-white font-semibold rounded-xl transition-all shadow-lg shadow-ocean/30 hover:shadow-ocean/50 hover:-translate-y-0.5"
              >
                Réserver un appel gratuit de 20 min
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:border-gold text-white hover:text-gold font-medium rounded-xl transition-all"
              >
                Voir les projets →
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
              {[
                { n: "2", label: "Projets livrés" },
                { n: "100%", label: "Mobile-first" },
                { n: "20 min", label: "Appel offert" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-gold">{s.n}</p>
                  <p className="text-xs text-white/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo BESMARA */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-ocean/20 blur-3xl scale-110" />
              <Image
                src="/brand/logofinal.jpg"
                alt="BESMARA — Logo complet or sur fond marine"
                width={380}
                height={380}
                className="relative rounded-2xl shadow-2xl shadow-navy/50"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chevron bas */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold transition-colors animate-bounce"
        aria-label="Défiler"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
