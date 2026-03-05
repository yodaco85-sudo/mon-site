"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/button";
import { Send, Mail, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xqeyzlqd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...form,
          source: "Landing page",
        }),
      });

      if (!response.ok) {
        throw new Error("Échec de l'envoi");
      }

      setSent(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      alert("Une erreur est survenue. Veuillez réessayer ou nous contacter directement.");
    }
  };

  if (sent) {
    return (
      <section id="contact" className="py-24 bg-background">
        <div className="container-custom max-w-2xl text-center">
          <ScrollReveal>
            <div className="w-20 h-20 rounded-full bg-accent/20 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground mt-4 mb-4">
              Message bien reçu !
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed bg-card p-6 rounded-2xl border border-border/50 shadow-soft">
              BESMARA vous répond généralement sous <strong className="text-foreground">24–48 h</strong>. On peut démarrer
              par un appel gratuit de 20 minutes pour voir comment on peut vous
              aider.
            </p>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-cta-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 network-pattern opacity-50 pointer-events-none" />

      <div className="container-custom relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Texte gauche */}
          <div>
            <ScrollReveal>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Contact
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                On se parle ?
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
                BESMARA répond généralement sous 24–48 h. On peut commencer par
                un{" "}
                <strong className="text-white">appel gratuit de 20 minutes</strong>{" "}
                pour voir si on peut vous être utiles — sans engagement.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                { icon: Mail, text: "Pas de relance commerciale agressive" },
                { icon: Zap, text: "Réponse rapide, réponse honnête" },
                {
                  icon: ShieldCheck,
                  text: "Si BESMARA n'est pas la bonne solution, on vous le dit",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.text} delay={100 + index * 100}>
                  <div className="flex items-center gap-4 bg-primary-foreground/5 p-4 rounded-xl border border-primary-foreground/10 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-primary-foreground/90 font-medium">{item.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <ScrollReveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 sm:p-10 shadow-strong border border-border/50 backdrop-blur-md relative"
            >
              {/* Effet lumineux derrière le formulaire */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-secondary opacity-20 blur-xl rounded-[2rem] -z-10" />

              <div className="space-y-6 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jean@entreprise.fr"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Type de projet
                  </label>
                  <select
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 appearance-none cursor-pointer"
                    style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131523%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem top 50%", backgroundSize: "0.65rem auto" }}
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
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre activité et ce que vous cherchez…"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
                  />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full text-base py-6">
                  Envoyer le message
                  <Send className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  Réponse sous 24–48 h · Aucun spam, promis.
                </p>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
