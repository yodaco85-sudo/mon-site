import Link from "next/link";
import { Anchor, Bot, CheckCircle2, MapPin, UserRound } from "lucide-react";

const facts = [
  {
    icon: Anchor,
    label: "Spécialité",
    value: "Pêche professionnelle, aquaculture et petites entreprises de la filière mer",
  },
  {
    icon: Bot,
    label: "Interventions",
    value: "Automatisation administrative, structuration des données et outils IA utiles",
  },
  {
    icon: UserRound,
    label: "Fondateur",
    value: "Yoann Dos Santos Da Costa, ancien patron pêcheur et chef mécanicien",
  },
  {
    icon: MapPin,
    label: "Zone accompagnée",
    value: "France, avec accompagnement à distance ou sur site selon le projet",
  },
];

export default function EntitySummary() {
  return (
    <section aria-labelledby="besmara-en-bref" className="bg-background py-16">
      <div className="container-custom max-w-6xl">
        <div className="rounded-3xl border border-accent/20 bg-white p-7 shadow-soft md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                BESMARA en bref
              </span>
              <h2 id="besmara-en-bref" className="font-display text-3xl font-bold text-foreground">
                L&apos;automatisation pensée pour les réalités de la filière mer
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                BESMARA aide les professionnels à réduire les doubles saisies, fiabiliser leurs
                échanges d&apos;information et construire des outils numériques qu&apos;ils peuvent
                réellement utiliser au quotidien.
              </p>
              <Link
                href="/automatisation-peche-aquaculture"
                className="mt-6 inline-flex items-center font-semibold text-accent hover:underline"
              >
                Découvrir l&apos;expertise pêche &amp; aquaculture →
              </Link>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-border/60 bg-muted/60 p-5">
                  <dt className="flex items-center gap-2 font-display font-bold text-foreground">
                    <fact.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-primary p-5 text-primary-foreground">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-primary-foreground/85">
              BESMARA ne remplace pas les logiciels réglementaires, certifiés ou critiques pour la
              sécurité. L&apos;objectif est de mieux relier vos outils existants et de simplifier le
              travail administratif autour de votre activité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
