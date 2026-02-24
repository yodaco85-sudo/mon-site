"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveSeparator from "@/components/WaveSeparator";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Send, Mail, Phone, CheckCircle2, Zap, ShieldCheck } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const projectTypes = [
  { value: "site", label: "Site vitrine professionnel" },
  { value: "automation", label: "Automatisation (tâches reloues)" },
  { value: "mer", label: "Mer / Aquaculture — Premier pas IA" },
  { value: "conseil", label: "Conseil / Diagnostic" },
  { value: "other", label: "Autre" },
];

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2) errors.name = "Nom requis (2 caractères minimum)";
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Adresse email invalide";
  if (form.phone && !/^[\d\s\+\-\(\)]{7,15}$/.test(form.phone.replace(/\s/g, ""))) errors.phone = "Numéro de téléphone invalide";
  if (!form.projectType) errors.projectType = "Merci de sélectionner un type de projet";
  if (!form.message.trim() || form.message.trim().length < 10) errors.message = "Message trop court (10 caractères minimum)";
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "Page /contact",
        }),
      });

      if (!response.ok) {
        throw new Error("Échec de l'envoi");
      }

      setSent(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      alert("Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.");
    }
  };

  if (sent) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="container-custom max-w-lg text-center py-32">
            <div className="w-20 h-20 rounded-full bg-accent/20 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h1 className="font-display text-4xl font-bold mb-4">Message bien reçu !</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              BESMARA vous répond généralement sous <strong>24–48 h</strong>.
              On peut démarrer par un appel gratuit de 20 minutes pour clarifier votre projet.
            </p>
            <Button variant="default" asChild>
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 network-pattern opacity-20 pointer-events-none" />
          <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 border border-accent/20 tracking-widest uppercase">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Contactez BESMARA — appel gratuit de 20 min
              </h1>
              <p className="text-primary-foreground/75 text-lg">
                20 minutes d&apos;appel gratuit suffisent souvent pour clarifier les choses.
                Sans engagement.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <WaveSeparator fromColor="hsl(220 56% 23%)" toColor="hsl(210 40% 98%)" />

        {/* Formulaire */}
        <section className="py-20 bg-background">
          <div className="container-custom max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Informations */}
              <div>
                <ScrollReveal>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                    Prenons contact
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    BESMARA répond généralement sous 24–48 h. Si vous préférez, envoyez
                    directement un email.
                  </p>
                </ScrollReveal>

                <div className="space-y-4 mb-10">
                  {[
                    { icon: Mail, text: "besmara.contact@lilas.pro", href: "mailto:besmara.contact@lilas.pro" },
                    { icon: Phone, text: "02 52 43 11 66", href: "tel:+33252431166" },
                  ].map((item) => (
                    <ScrollReveal key={item.text} delay={100}>
                      <a
                        href={item.href}
                        className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-muted hover:border-accent hover:text-accent transition-all duration-200"
                      >
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="font-medium">{item.text}</span>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Zap, text: "Réponse rapide, réponse honnête" },
                    { icon: ShieldCheck, text: "Si BESMARA n'est pas la bonne solution, on vous le dit" },
                  ].map((item, index) => (
                    <ScrollReveal key={item.text} delay={200 + index * 80}>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Formulaire */}
              <ScrollReveal delay={150}>
                <form onSubmit={handleSubmit} noValidate className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-secondary opacity-10 blur-xl rounded-[2rem] -z-10" />
                  <div className="bg-card rounded-2xl p-8 shadow-strong border border-border/50 space-y-6">

                    {/* Nom */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Votre nom <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Jean Dupont"
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${errors.name ? "border-destructive" : "border-input focus:border-accent"}`}
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="jean@entreprise.fr"
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${errors.email ? "border-destructive" : "border-input focus:border-accent"}`}
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Téléphone <span className="text-muted-foreground text-xs">(optionnel)</span>
                      </label>
                      <input
                        id="phone" name="phone" type="tel"
                        value={form.phone} onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${errors.phone ? "border-destructive" : "border-input focus:border-accent"}`}
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Type de projet */}
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                        Type de projet <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="projectType" name="projectType" required
                        value={form.projectType} onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 appearance-none cursor-pointer ${errors.projectType ? "border-destructive" : "border-input focus:border-accent"}`}
                      >
                        <option value="">Sélectionner…</option>
                        {projectTypes.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                      {errors.projectType && <p className="text-destructive text-xs mt-1">{errors.projectType}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Votre message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Décrivez votre activité et ce que vous cherchez…"
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none ${errors.message ? "border-destructive" : "border-input focus:border-accent"}`}
                      />
                      {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                    </div>

                    <Button type="submit" variant="accent" size="lg" className="w-full">
                      Envoyer le message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Réponse sous 24–48 h · Aucun spam, promis.
                    </p>
                  </div>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
