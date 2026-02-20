const points = [
  {
    icon: "⚓",
    title: "On parle votre langue",
    desc: "Gasoil, quotas, météo, paperasse : on connaît les contraintes de terrain. Pas besoin de traduire.",
  },
  {
    icon: "🚫",
    title: "Zéro bullshit",
    desc: "Pas de jargon tech, pas de promesses en l'air. On vous dit ce que ça fait concrètement.",
  },
  {
    icon: "⚡",
    title: "Solutions simples d'abord",
    desc: "On commence petit, utile, rapide. Pas besoin d'une usine à gaz pour gagner du temps.",
  },
  {
    icon: "🚀",
    title: "MVP en 1–2 semaines",
    desc: "Un prototype fonctionnel livré vite, pour voir, tester et ajuster avant d'aller plus loin.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <div>
            <span className="text-ocean text-sm font-semibold uppercase tracking-widest">
              Qui sommes-nous
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6">
              BESMARA,{" "}
              <span className="text-ocean">du chalut au code</span>
            </h2>

            <div className="space-y-5 text-navy/75 leading-relaxed">
              <p>
                BESMARA est fondée par{" "}
                <strong className="text-navy">Yoann</strong>, ancien patron et chef mécanicien
                avec <strong className="text-navy">24 ans de mer</strong> — des Sables d&apos;Olonne
                à Cherbourg, tout l&apos;ouest y est passé.
                Piloter un bateau, gérer un équipage, jongler avec la météo, les quotas,
                le gasoil et la paperasse administrative : on sait ce que &quot;débordé&quot;
                veut dire en vrai.
              </p>
              <p>
                Après cette reconversion vers le numérique, BESMARA accompagne aujourd&apos;hui
                les <strong className="text-navy">petites entreprises et acteurs de la mer</strong>{" "}
                sur deux fronts : créer des{" "}
                <strong>sites vitrines qui représentent vraiment leur activité</strong>, et{" "}
                <strong>automatiser les tâches répétitives</strong> qui mangent du temps
                chaque semaine. On utilise n8n, Docker, les APIs d&apos;IA (Claude, GPT-4)
                — des outils sérieux, sans complexité inutile.
              </p>
            </div>
          </div>

          {/* Points forts */}
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-semibold text-navy mb-2">{p.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
