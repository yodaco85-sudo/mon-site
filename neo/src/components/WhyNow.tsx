const stats = [
  {
    value: "574 M$",
    label: "Marché IA + pêche/aquaculture en 2023",
    color: "text-ocean",
  },
  {
    value: "1,66 Md$",
    label: "Projection d'ici 2033",
    color: "text-gold",
  },
  {
    value: "+11,2%",
    label: "Croissance annuelle prévue",
    color: "text-green-400",
  },
];

export default function WhyNow() {
  return (
    <section id="why-now" className="py-24 bg-navy relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path d="M0,100 C200,200 400,0 600,150 C700,200 750,100 800,120 L800,400 L0,400Z" fill="#0074D9" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-ocean text-sm font-semibold uppercase tracking-widest">
            Pourquoi maintenant
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">
            Le train du numérique passe — et il n&apos;attend pas
          </h2>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <p className={`font-display text-4xl font-bold ${s.color} mb-2`}>
                {s.value}
              </p>
              <p className="text-white/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Texte */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-white/80 text-lg leading-relaxed">
            Le marché de l&apos;IA dans les pêches et l&apos;aquaculture durables est en pleine
            explosion. Concrètement, cela veut dire que les outils numériques et
            l&apos;IA vont devenir <strong className="text-white">la norme</strong> pour
            suivre ses données, améliorer la productivité et prouver sa durabilité.{" "}
            <span className="text-gold font-medium">
              Ceux qui s&apos;y mettent tôt prennent de l&apos;avance, les autres regardent
              passer le train.
            </span>
          </p>
          <p className="text-white/60 leading-relaxed">
            La bonne nouvelle : pas besoin de tout révolutionner d&apos;un coup. On
            commence par <strong className="text-white/80">un site qui vous représente</strong>,
            une ou deux automatisations qui vous font gagner de vraies heures, et on
            construit à partir de là. C&apos;est comme ça que ça marche, terrain après terrain.
          </p>
        </div>

        {/* Pressions réelles */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
          {[
            { emoji: "⛽", label: "Marges sous pression", sub: "Gasoil, quotas, coûts" },
            { emoji: "📋", label: "Traçabilité obligatoire", sub: "Réglementation croissante" },
            { emoji: "🏆", label: "Concurrence en ligne", sub: "Présence web devenue essentielle" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 rounded-xl p-5">
              <span className="text-3xl">{item.emoji}</span>
              <p className="text-white font-medium mt-2">{item.label}</p>
              <p className="text-white/40 text-xs mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
