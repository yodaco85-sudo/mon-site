"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/about" },
  { name: "Solutions", path: "/services" },
  { name: "Projets", path: "/#projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-strong py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <Image
              src="/brand/logone3.png"
              alt="BESMARA"
              width={42}
              height={48}
              className="transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5"
              >
                {link.name}
              </a>
            ))}
            <Button variant="accent" size="sm" className="ml-4" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2 hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2 bg-primary p-4 rounded-xl border border-primary-foreground/10 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-all text-primary-foreground/90 hover:text-accent hover:bg-primary-foreground/10"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="accent" className="mt-4 w-full" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
