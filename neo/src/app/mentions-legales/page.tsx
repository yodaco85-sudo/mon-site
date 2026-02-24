import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — BESMARA",
  description: "Mentions légales et informations légales du site BESMARA.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-20">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display text-4xl font-bold mb-10 text-foreground">Mentions légales</h1>

          <div className="prose prose-slate max-w-none space-y-10 text-muted-foreground">

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Éditeur du site</h2>
              <p>
                Le présent site <strong className="text-foreground">besmara.lilas.pro</strong> est édité par :
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li><strong className="text-foreground">Yoann BESMARA</strong> — Consultant IA & Automatisation</li>
                <li>Micro-entreprise immatriculée au RCS</li>
                <li>Email : <a href="mailto:besmara.contact@lilas.pro" className="text-accent hover:underline">besmara.contact@lilas.pro</a></li>
                <li>Téléphone : <a href="tel:+33252431166" className="text-accent hover:underline">02 52 43 11 66</a></li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <ul className="mt-3 space-y-1 text-sm">
                <li><strong className="text-foreground">Vercel Inc.</strong></li>
                <li>340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
                <li>Site : <span className="text-accent">vercel.com</span></li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos, code) est la propriété de BESMARA,
                sauf mention contraire. Toute reproduction ou utilisation sans autorisation écrite préalable
                est interdite.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Données personnelles</h2>
              <p>
                Ce site peut collecter des données personnelles via le formulaire de contact (nom, email,
                téléphone, message). Ces données sont utilisées uniquement pour répondre à votre demande
                et ne sont pas transmises à des tiers.
              </p>
              <p className="mt-3">
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
                de vos données. Pour exercer ce droit, contactez-nous à{" "}
                <a href="mailto:besmara.contact@lilas.pro" className="text-accent hover:underline">
                  besmara.contact@lilas.pro
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Cookies</h2>
              <p>
                Ce site n&apos;utilise pas de cookies de traçage ou publicitaires. Des cookies techniques
                strictement nécessaires au fonctionnement peuvent être utilisés.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Limitation de responsabilité</h2>
              <p>
                BESMARA s&apos;efforce de maintenir les informations de ce site à jour et exactes,
                mais ne saurait garantir l&apos;exhaustivité ou l&apos;exactitude du contenu.
                BESMARA ne peut être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation
                de ce site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales :
              </p>
              <p className="mt-2">
                <Link href="/contact" className="text-accent hover:underline font-medium">
                  Formulaire de contact →
                </Link>
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border/30">
            <Link href="/" className="text-accent hover:underline text-sm">
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
