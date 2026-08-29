import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, FileText, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const canonicalUrl = "https://besmara.fr/ressources/guide-automatisation-peche-aquaculture";

export const metadata: Metadata = {
  title: "Guide : automatiser l’administratif dans la filière mer | BESMARA",
  description:
    "Méthode pratique pour choisir une première automatisation dans la pêche ou l’aquaculture : tâches adaptées, étapes, risques et checklist.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Guide pratique de l’automatisation pour la pêche et l’aquaculture",
    description:
      "Une méthode terrain pour choisir un premier cas d’usage utile, mesurable et maintenable.",
    url: canonicalUrl,
    type: "article",
    images: ["/og-image.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${canonicalUrl}#article`,
  headline: "Guide pratique : automatiser l’administratif dans la pêche et l’aquaculture",
  description:
    "Méthode en cinq étapes pour sélectionner, prototyper et sécuriser une première automatisation dans une entreprise de la filière mer.",
  mainEntityOfPage: canonicalUrl,
  url: canonicalUrl,
  image: "https://besmara.fr/og-image.png",
  inLanguage: "fr-FR",
  datePublished: "2026-08-29",
  dateModified: "2026-08-29",
  author: { "@id": "https://besmara.fr/#yoann" },
  publisher: { "@id": "https://besmara.fr/#organization" },
  about: [
    "automatisation administrative",
    "pêche professionnelle",
    "aquaculture",
    "intelligence artificielle",
  ],
};

const steps = [
  {
    title: "Lister les tâches répétitives",
    text: "Pendant une semaine, notez les actions refaites à l’identique : recopier une information, renommer un document, envoyer une confirmation, préparer un rapport ou relancer une personne.",
  },
  {
    title: "Choisir un flux stable et sans danger",
    text: "Le premier cas d’usage doit avoir un début, une fin et des règles simples. Écartez les systèmes liés à la navigation, à la sécurité et aux décisions réglementaires critiques.",
  },
  {
    title: "Mesurer la situation actuelle",
    text: "Relevez la fréquence, le temps passé, le nombre d’intervenants et les erreurs courantes. Sans point de départ, il est impossible de juger l’utilité réelle de l’automatisation.",
  },
  {
    title: "Construire un prototype contrôlé",
    text: "Automatisez un seul parcours avec un journal d’exécution, une notification en cas d’échec et une validation humaine avant toute action sensible ou irréversible.",
  },
  {
    title: "Tester, documenter et décider",
    text: "Faites fonctionner le prototype sur des cas normaux et exceptionnels. Documentez qui intervient, où se trouvent les données et comment reprendre la main lorsque le système s’arrête.",
  },
];

export default function GuideAutomatisationPecheAquaculturePage() {
  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <article>
          <header className="bg-primary pb-20 pt-32 text-primary-foreground">
            <div className="container-custom max-w-4xl">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/20 px-4 py-2 text-sm font-medium uppercase tracking-widest text-accent">
                Guide pratique BESMARA
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                Automatiser l&apos;administratif dans la pêche et l&apos;aquaculture
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-primary-foreground/80">
                Une méthode en cinq étapes pour choisir un premier cas d&apos;usage utile, mesurable et
                maintenable, sans transformer votre organisation en usine à gaz.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/60">
                <Link href="/about" className="font-semibold text-accent hover:underline">
                  Yoann Dos Santos Da Costa
                </Link>
                <span>Publié et mis à jour le 29 août 2026</span>
                <span>Lecture : 7 minutes</span>
              </div>
            </div>
          </header>

          <div className="container-custom max-w-4xl py-16">
            <aside className="rounded-3xl border border-accent/20 bg-accent/5 p-7" aria-label="Résumé du guide">
              <div className="flex items-start gap-4">
                <Lightbulb className="mt-1 h-7 w-7 flex-shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-xl font-bold">À retenir</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Le meilleur premier projet n&apos;est pas forcément celui qui utilise le plus d&apos;IA.
                    C&apos;est celui qui supprime une tâche répétitive bien définie, conserve un contrôle
                    humain et produit un bénéfice observable sans créer une nouvelle dépendance fragile.
                  </p>
                </div>
              </div>
            </aside>

            <section className="mt-16">
              <h2 className="font-display text-3xl font-bold">Quelles tâches regarder en premier ?</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Dans une petite structure, les opportunités se trouvent souvent entre deux outils :
                une information arrive par email, elle est recopiée dans un tableur, puis elle sert à
                préparer un message, un document ou une synthèse. Chaque transfert manuel augmente le
                temps passé et le risque d&apos;oubli.
              </p>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-border/60">
                <table className="w-full min-w-[680px] border-collapse bg-white text-left text-sm">
                  <thead className="bg-muted text-foreground">
                    <tr>
                      <th className="p-4 font-display font-bold">Situation</th>
                      <th className="p-4 font-display font-bold">Première automatisation possible</th>
                      <th className="p-4 font-display font-bold">Contrôle à conserver</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-muted-foreground">
                    <tr>
                      <td className="p-4">Demandes reçues par email</td>
                      <td className="p-4">Extraction des champs et ajout dans un tableau de suivi</td>
                      <td className="p-4">Vérification des données ambiguës</td>
                    </tr>
                    <tr>
                      <td className="p-4">Documents dispersés</td>
                      <td className="p-4">Classement, renommage et notification de réception</td>
                      <td className="p-4">Validation des documents sensibles</td>
                    </tr>
                    <tr>
                      <td className="p-4">Rapport hebdomadaire répétitif</td>
                      <td className="p-4">Compilation des indicateurs et préparation d’un brouillon</td>
                      <td className="p-4">Lecture et validation avant diffusion</td>
                    </tr>
                    <tr>
                      <td className="p-4">Échéances et relances</td>
                      <td className="p-4">Alertes et préparation des messages de rappel</td>
                      <td className="p-4">Décision d’envoyer ou d’escalader</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-16">
              <h2 className="font-display text-3xl font-bold">La méthode en cinq étapes</h2>
              <ol className="mt-8 space-y-8">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-mono font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-16 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-accent-secondary/30 bg-white p-7">
                <CheckCircle2 className="h-8 w-8 text-accent-secondary" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-bold">Signes d&apos;un bon premier projet</h2>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {[
                    "La tâche revient au moins chaque semaine",
                    "Les règles peuvent être expliquées simplement",
                    "Le résultat est facile à vérifier",
                    "Une personne reste responsable du processus",
                    "L’échec du système est visible et récupérable",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-gold/30 bg-muted p-7">
                <AlertTriangle className="h-8 w-8 text-gold" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-bold">Projets à repousser</h2>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {[
                    "Décisions touchant directement à la sécurité",
                    "Remplacement d’un logiciel réglementaire certifié",
                    "Processus non stabilisé ou sans responsable",
                    "Données sensibles sans règles d’accès claires",
                    "Promesse d’autonomie totale sans supervision",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-16 rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
              <FileText className="h-9 w-9 text-accent" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl font-bold text-white">
                La checklist avant de démarrer
              </h2>
              <ul className="mt-6 grid gap-4 text-primary-foreground/80 sm:grid-cols-2">
                {[
                  "La tâche et ses exceptions sont décrites",
                  "Le temps passé actuellement est estimé",
                  "Les données d’entrée et de sortie sont identifiées",
                  "Le responsable du processus est nommé",
                  "Une validation humaine est prévue si nécessaire",
                  "Une alerte signale les échecs",
                  "La reprise manuelle reste possible",
                  "Le fonctionnement sera documenté",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-16 text-center">
              <h2 className="font-display text-3xl font-bold">Besoin d&apos;un regard extérieur ?</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                BESMARA peut analyser avec vous une tâche répétitive et déterminer si elle mérite
                réellement d&apos;être automatisée, avant tout développement.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/contact">
                    Demander un diagnostic <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/automatisation-peche-aquaculture">Voir l&apos;accompagnement</Link>
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
