"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const projectTypes = [
  { value: "site", label: "Site vitrine" },
  { value: "automation", label: "Automatisation (tâches reloues)" },
  { value: "mer", label: "Mer / Aquaculture" },
  { value: "other", label: "Autre" },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: brancher sur un endpoint réel (Formspree, n8n webhook, etc.)
    setSent(true);
  };

  if (sent) {
    return (
      <section id="contact" className="py-24 bg-cream">
        <div className="max-w-xl mx-auto px-4 text-center">
          <span className="text-5xl">✅</span>
          <h2 className="font-display text-3xl font-bold text-navy mt-4 mb-3">
            Message bien reçu !
          </h2>
          <p className="text-navy/60">
            BESMARA vous répond généralement sous 24–48 h. On peut démarrer
            par un appel gratuit de 20 minutes pour voir comment on peut vous
            aider.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Texte gauche */}
          <div>
            <span className="text-ocean text-sm font-semibold uppercase tracking-widest">
              Contact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6">
              On se parle ?
            </h2>
            <p className="text-navy/70 leading-relaxed mb-8">
              BESMARA répond généralement sous 24–48 h. On peut commencer par
              un{" "}
              <strong className="text-navy">appel gratuit de 20 minutes</strong>{" "}
              pour voir si on peut vous être utiles — sans engagement.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📬", text: "Pas de relance commerciale agressive" },
                { icon: "⚡", text: "Réponse rapide, réponse honnête" },
                {
                  icon: "🤝",
                  text: "Si BESMARA n'est pas la bonne solution, on vous le dit",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-navy/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm border border-navy/5"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Votre nom
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-cream/50 text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@entreprise.fr"
                  className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-cream/50 text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Type de projet
                </label>
                <select
                  name="projectType"
                  required
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-cream/50 text-navy focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition"
                >
                  <option value="">Sélectionner…</option>
                  {projectTypes.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Votre message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre activité et ce que vous cherchez…"
                  className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-cream/50 text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-ocean hover:bg-ocean-light text-white font-semibold rounded-xl transition-all shadow-md shadow-ocean/20 hover:-translate-y-0.5"
              >
                Envoyer le message →
              </button>

              <p className="text-xs text-center text-navy/40">
                Réponse sous 24–48 h · Aucun spam, promis.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
