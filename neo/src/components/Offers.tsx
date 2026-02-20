const offers = [
  {
    icon: "🖥️",
    name: "Pack Site Vitrine Pro",
    tagline: "Une présence en ligne claire et professionnelle",
    for: "Traiteurs, agents immo, artisans, pros de la mer…",
    includes: [
      "Site 3–5 sections (Accueil, À propos, Services, Projets/Avis, Contact)",
      "Formulaire de contact ou demande de devis",
      "Intégration réseaux sociaux",
      "Mobile-first, rapide à charger",
      "Mise en ligne (Vercel ou hébergeur de votre choix)",
    ],
    cta: "En savoir plus",
    highlight: false,
  },
  {
    icon: "⚙️",
    name: 'Pack Automatisation "Tâches reloues"',
    tagline: "Récupérez quelques heures par semaine",
    for: "Petites entreprises débordées par les mails, formulaires, tableaux…",
    includes: [
      "Audit simple des process qui prennent du temps",
      "Mise en place de 1–2 automatisations (n8n)",
      "Ex : formulaire → Google Sheet → email automatique",
      "Classement d'emails, alertes, notifications",
      "Sans changer tout votre système",
    ],
    cta: "Identifier mes tâches reloues",
    highlight: true,
  },
  {
    icon: "🌊",
    name: 'Pack Mer & Aquaculture "Premier pas IA"',
    tagline: "Entrez dans le numérique par des étapes concrètes",
    for: "Armements côtiers, fermes aquacoles, entreprises de transformation",
    includes: [
      "Site vitrine orienté durabilité et traçabilité",
      "Tableau de bord simple (indicateurs clés : jours de mer, CA, carburant…)",
      "1–2 automatisations (collecte de données, rapports mensuels)",
      "Appuyé sur les tendances réelles du marché IA/pêche",
    ],
    cta: "Discuter de mon projet",
    highlight: false,
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-ocean text-sm font-semibold uppercase tracking-widest">
            Les solutions BESMARA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-3">
            Trois offres, des résultats concrets
          </h2>
          <p className="text-navy/60 mt-4 max-w-xl mx-auto">
            Pas de package mystère ni de devis en 14 pages. Ce que vous payez,
            ce que vous recevez.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all hover:-translate-y-1 hover:shadow-xl ${
                offer.highlight
                  ? "bg-navy border-ocean shadow-lg shadow-ocean/10"
                  : "bg-white border-navy/10 shadow-sm"
              }`}
            >
              {offer.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-navy text-xs font-bold rounded-full uppercase tracking-wide">
                  Populaire
                </span>
              )}

              <span className="text-4xl mb-4">{offer.icon}</span>

              <h3
                className={`font-display text-xl font-bold mb-1 ${
                  offer.highlight ? "text-white" : "text-navy"
                }`}
              >
                {offer.name}
              </h3>
              <p
                className={`text-sm mb-4 ${
                  offer.highlight ? "text-white/70" : "text-navy/60"
                }`}
              >
                {offer.tagline}
              </p>

              <p
                className={`text-xs uppercase tracking-wide font-semibold mb-3 ${
                  offer.highlight ? "text-gold" : "text-ocean"
                }`}
              >
                Pour : {offer.for}
              </p>

              <ul className="space-y-2 flex-grow mb-8">
                {offer.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className={offer.highlight ? "text-gold" : "text-ocean"}>
                      ✓
                    </span>
                    <span className={offer.highlight ? "text-white/80" : "text-navy/70"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  offer.highlight
                    ? "bg-gold hover:bg-gold-light text-navy"
                    : "bg-ocean hover:bg-ocean-light text-white"
                }`}
              >
                {offer.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
