import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/logone.jpg"
            alt="BESMARA monogramme"
            width={32}
            height={32}
            className="rounded-sm opacity-80"
          />
          <div>
            <p className="font-display text-white font-bold text-lg leading-none">
              BESMARA
            </p>
            <p className="text-white/40 text-xs mt-0.5">
              IA &amp; Automatisation — Pêche, Aquaculture, TPE
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
          {(["#about", "#offers", "#projects", "#process", "#contact"] as const).map(
            (href) => {
              const labels: Record<string, string> = {
                "#about": "À propos",
                "#offers": "Offres",
                "#projects": "Projets",
                "#process": "Process",
                "#contact": "Contact",
              };
              return (
                <a key={href} href={href} className="hover:text-gold transition-colors">
                  {labels[href]}
                </a>
              );
            }
          )}
        </nav>

        <p className="text-white/30 text-xs">© {year} BESMARA</p>
      </div>
    </footer>
  );
}
