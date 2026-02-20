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
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-ocean text-sm font-semibold uppercase tracking-widest">
            Comment on travaille
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-3">
            Un process simple, sans surprise
          </h2>
          <p className="text-navy/60 mt-4 max-w-xl mx-auto">
            Du premier appel à la mise en ligne, vous savez à chaque étape où
            on en est.
          </p>
        </div>

        <div className="relative">
          {/* Ligne verticale */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-navy/10 -translate-x-1/2" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${i % 2 !== 0 ? "md:text-left" : ""}`}
                >
                  <div className="bg-cream rounded-2xl p-6 border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-display text-lg font-bold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-ocean flex items-center justify-center shadow-md shadow-ocean/30 z-10">
                  <span className="text-white font-bold text-sm">{step.n}</span>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ocean hover:bg-ocean-light text-white font-semibold rounded-xl transition-all shadow-lg shadow-ocean/20 hover:-translate-y-0.5"
          >
            Commencer par l&apos;appel gratuit →
          </a>
        </div>
      </div>
    </section>
  );
}
