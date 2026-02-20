"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-accent/20 blur-md group-hover:bg-accent/40 transition-all duration-300" />
                <Image
                  src="/brand/logone.jpg"
                  alt="BESMARA monogramme"
                  width={40}
                  height={40}
                  className="rounded-lg relative border border-white/10"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-gold transition-colors">
                BESMARA
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm mb-6 leading-relaxed">
              Yoann accompagne les professionnels de la pêche, de l&apos;aquaculture
              et les TPE vers l&apos;automatisation et une présence en ligne claire.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "À propos", href: "/about" },
                { name: "Solutions", href: "/services" },
                { name: "Projets", href: "/#projects" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:besmara.contact@lilas.pro"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  besmara.contact@lilas.pro
                </a>
              </li>
              <li>
                <a
                  href="tel:+33252431166"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  02 52 43 11 66
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/50 text-sm">
          <span>&copy; {new Date().getFullYear()} BESMARA — Yoann. Tous droits réservés.</span>
          <div className="flex gap-4">
            <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
