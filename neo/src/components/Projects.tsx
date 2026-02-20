const projects = [
  {
    tag: "Site vitrine",
    title: "Nomade Tasty",
    subtitle: "Traiteur à Bellevigny, Vendée",
    color: "bg-amber-50 border-amber-200",
    tagColor: "text-amber-700 bg-amber-100",
    emoji: "🍽️",
    context:
      "Traiteur local avec d'excellents avis clients, mais sans site pour les mettre en valeur ni faciliter les demandes de devis.",
    done: [
      "Structure complète : Accueil, À propos, Services, Galerie, Avis, Contact",
      "Mise en avant des avis 5 étoiles",
      "Formulaire de demande de devis",
      "Design chaleureux, mobile-first",
    ],
    benefit: "Une présence pro, un lien unique à envoyer aux clients.",
  },
  {
    tag: "Site expert",
    title: "Anne-Cécile Collet",
    subtitle: "Immobilier de prestige, Côte d'Azur",
    color: "bg-slate-50 border-slate-200",
    tagColor: "text-slate-700 bg-slate-100",
    emoji: "🏡",
    context:
      "Conseillère immobilière haut de gamme avec 20+ ans d'expérience, besoin d'un site à la hauteur de son positionnement.",
    done: [
      "Positionnement clair : immobilier de prestige – Côte d'Azur",
      "Section biens d'exception",
      "Formulaire d'estimation gratuite en ligne",
      "Mise en avant note Google, expérience, langues parlées",
    ],
    benefit: "Un site qui inspire confiance dès les 5 premières secondes.",
  },
  {
    tag: "Exemple type mer",
    title: "Armement côtier",
    subtitle: "6–9 navires, pêche côtière (exemple de projet)",
    color: "bg-blue-50 border-blue-200",
    tagColor: "text-ocean bg-blue-100",
    emoji: "⚓",
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
    <section id="projects" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-ocean text-sm font-semibold uppercase tracking-widest">
            Réalisations BESMARA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-3">
            Ce qu&apos;on a déjà construit
          </h2>
          <p className="text-navy/60 mt-4 max-w-xl mx-auto">
            Des projets réels, pas des mockups. Avec de vraies contraintes et
            de vrais bénéfices.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border p-8 ${p.color} flex flex-col md:flex-row gap-6`}
            >
              <div className="text-5xl flex-shrink-0">{p.emoji}</div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.tagColor}`}
                  >
                    {p.tag}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy">
                      {p.title}
                    </h3>
                    <p className="text-sm text-navy/50">{p.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-navy/60 mb-4 italic">{p.context}</p>

                <ul className="space-y-1 mb-4">
                  {p.done.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-navy/80">
                      <span className="text-ocean font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-semibold text-navy">→ {p.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
