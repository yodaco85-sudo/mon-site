import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BESMARA | Demandez un appel gratuit de 20 minutes",
  description: "Contactez BESMARA pour un appel gratuit de 20 minutes. Discutons de votre projet : site vitrine, automatisation ou accompagnement IA pour la mer et les TPE.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
