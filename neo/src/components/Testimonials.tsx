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
    <section id="testimonials" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-ocean text-sm font-semibold uppercase tracking-widest">
            Ce qu&apos;on dit de BESMARA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">
            Des retours concrets
          </h2>
          <p className="text-white/50 mt-4 max-w-md mx-auto text-sm">
            On préfère montrer peu et vrai plutôt que beaucoup et inventé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {feedbacks.map((f) => (
            <div
              key={f.author}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <p className="text-4xl text-ocean/40 font-display leading-none mb-4">
                &ldquo;
              </p>
              <p className="text-white/80 leading-relaxed italic mb-6">
                {f.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ocean/30 flex items-center justify-center text-white font-bold">
                  {f.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{f.author}</p>
                  <p className="text-white/40 text-xs">{f.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-10">
          Vous voulez voir ce que BESMARA peut faire pour votre activité ?{" "}
          <a href="#contact" className="text-gold hover:text-gold-light underline underline-offset-4">
            On en parle en 20 minutes.
          </a>
        </p>
      </div>
    </section>
  );
}
