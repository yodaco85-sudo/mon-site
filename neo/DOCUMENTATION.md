# BESMARA NEO — Documentation technique complète

> **Version :** 2.0 — Refonte Fusion NEO × Sea AI Sparkle
> **Date :** Février 2026
> **Stack :** Next.js 16 · App Router · Tailwind CSS · Framer Motion
> **Déploiement :** Vercel (auto depuis `git push origin main`)

---

## Table des matières

1. [Vue d'ensemble du projet](#1-vue-densemble-du-projet)
2. [Architecture des fichiers](#2-architecture-des-fichiers)
3. [Design system](#3-design-system)
4. [Composants](#4-composants)
5. [Pages (App Router)](#5-pages-app-router)
6. [Animations](#6-animations)
7. [Stack technique](#7-stack-technique)
8. [Lancer le projet en local](#8-lancer-le-projet-en-local)
9. [Déployer sur Vercel](#9-déployer-sur-vercel)
10. [Guide de maintenance](#10-guide-de-maintenance)
11. [Ce qui reste à faire](#11-ce-qui-reste-à-faire)

---

## 1. Vue d'ensemble du projet

**BESMARA** est le site personnel de Yoann, consultant IA & automatisation pour la pêche, l'aquaculture et les TPE.

### Objectif de la refonte (v2.0)

La v2.0 fusionne deux versions précédentes du site :

| Version | Stack | Points forts | Faiblesses |
|---|---|---|---|
| **NEO** (v1) | Next.js 16 + Tailwind | Contenu BESMARA complet, architecture solide | Design basique, pas d'animations |
| **Sea AI Sparkle** | Vite + React | Design "océan numérique" superbe (vagues, particules, cyan) | Contenu incomplet, stack moins performant |
| **NEO v2** *(actuel)* | Next.js 16 + Framer Motion | Meilleur des deux mondes | — |

### Ce qui a été fait dans cette refonte

- ✅ Hero avec **photo océan + vagues SVG animées + silhouette chalutier flottante**
- ✅ **Palette cyan/turquoise/marine** de Sea AI Sparkle portée dans NEO
- ✅ **Framer Motion** activé sur toutes les animations de scroll
- ✅ **4 sous-pages** Next.js App Router : `/services`, `/about`, `/contact`, `/mentions-legales`
- ✅ **WaveSeparator** entre chaque section de la landing page
- ✅ Toutes les dépendances shadcn/ui installées et corrigées
- ✅ **Build 0 erreur TypeScript**, 6 routes statiques

---

## 2. Architecture des fichiers

```
neo/
├── public/
│   ├── boat.svg                  ← Silhouette chalutier vectorielle (animée)
│   ├── hero-ocean.jpg            ← Photo fond de mer du hero
│   └── brand/
│       ├── logofinal.jpg         ← Logo BESMARA complet (or sur marine)
│       └── logone.jpg            ← Monogramme BESMARA (navbar)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← Layout racine (fonts, metadata SEO)
│   │   ├── globals.css           ← Design system complet (variables CSS, animations)
│   │   ├── page.tsx              ← Landing page (assemblage des sections)
│   │   ├── services/page.tsx     ← Page détail des 3 offres
│   │   ├── about/page.tsx        ← Page À propos / parcours Yoann
│   │   ├── contact/page.tsx      ← Page contact avec validation formulaire
│   │   └── mentions-legales/page.tsx
│   │
│   ├── components/
│   │   ├── Hero.tsx              ← Hero : photo + vagues + bateau + AIS
│   │   ├── Navbar.tsx            ← Navigation fixe responsive
│   │   ├── About.tsx             ← Présentation BESMARA + 4 points forts
│   │   ├── Offers.tsx            ← 3 offres tarifaires
│   │   ├── WhyNow.tsx            ← Stats marché IA maritime
│   │   ├── Projects.tsx          ← Projets livrés
│   │   ├── Process.tsx           ← Méthodologie en étapes
│   │   ├── Testimonials.tsx      ← Témoignages clients
│   │   ├── Contact.tsx           ← Formulaire de contact (landing)
│   │   ├── Footer.tsx            ← Pied de page
│   │   ├── ScrollReveal.tsx      ← Wrapper animation au scroll (Framer Motion)
│   │   ├── WaveSeparator.tsx     ← Séparateur SVG vague entre sections
│   │   ├── AnimatedCounter.tsx   ← Compteurs animés (chiffres)
│   │   ├── Layout.tsx            ← Layout wrapper générique (non utilisé sur main)
│   │   ├── NavLink.tsx           ← Lien actif Next.js (usePathname)
│   │   └── ui/                   ← Composants shadcn/ui (Button, Card, etc.)
│   │
│   ├── lib/
│   │   └── utils.ts              ← Fonction cn() : clsx + tailwind-merge
│   │
│   └── hooks/
│       ├── use-mobile.ts         ← Hook responsive (window width < 768)
│       └── use-toast.ts          ← Hook toast notifications
│
├── tailwind.config.ts            ← Tokens couleurs, fonts, animations Tailwind
├── next.config.ts                ← Config Next.js (actuellement vide)
├── tsconfig.json                 ← TypeScript strict + paths @/*
└── package.json                  ← Dépendances
```

---

## 3. Design system

### 3.1 Palette de couleurs

Toutes les couleurs sont définies en **variables CSS HSL** dans `globals.css`, mappées dans `tailwind.config.ts`.

| Nom | Variable CSS | Valeur HSL | Hex approx. | Usage |
|---|---|---|---|---|
| **Primary** (marine) | `--primary` | `220 56% 23%` | `#1a365d` | Fond hero, navbar, sections sombres |
| **Accent** (cyan) | `--accent` | `199 89% 48%` | `#0099FF` | CTA, tech, icônes, ring focus |
| **Accent Secondary** (turquoise) | `--accent-secondary` | `168 76% 40%` | `#00B8A0` | Mer, éco, variante accent |
| **Gold** (or) | `--gold` | `43 74% 52%` | `#C8A84E` | Offre premium, titres hero |
| **Background** | `--background` | `210 40% 98%` | `#f8fafc` | Fond sections claires |
| **Muted** | `--muted` | `210 30% 96%` | `#f1f5f9` | Fond alternance de sections |
| **Foreground** | `--foreground` | `220 60% 15%` | `#1a2233` | Texte principal |

> **Règle :** Ne jamais coder une couleur en dur dans un composant. Toujours utiliser les classes Tailwind (`text-accent`, `bg-primary`, `text-gold`, etc.) ou les variables CSS (`hsl(var(--accent))`).

### 3.2 Typographie

| Police | Variable CSS | Usage | Poids |
|---|---|---|---|
| **Poppins** | `--font-poppins` | Titres (`font-display`) | 600, 700, 800 |
| **Inter** | `--font-inter` | Corps de texte (`font-sans`) | 400, 500, 600, 700, 800 |

Les deux polices sont chargées via `next/font/google` dans `layout.tsx` — **pas de Flash Of Unstyled Text**, chargement optimisé.

```tsx
// Utilisation dans les composants
<h2 className="font-display text-3xl font-bold">Titre</h2>
<p className="font-sans text-base">Texte courant</p>
```

### 3.3 Ombres

| Classe Tailwind | Variable CSS | Usage |
|---|---|---|
| `shadow-soft` | `--shadow-sm` | Cards au repos |
| `shadow-medium` | `--shadow-md` | Cards au hover |
| `shadow-strong` | `--shadow-lg` | Modals, formulaires |
| `shadow-glow` | `--shadow-glow` | Boutons accent, carte vedette (offre populaire) |

### 3.4 Gradients

```css
--gradient-hero   : marine foncé → marine → bleu-marine (fond hero sans image)
--gradient-accent : cyan → turquoise (éléments tech/IA)
--gradient-cta    : marine → marine clair (section contact)
```

Classes utilitaires correspondantes : `bg-hero-gradient`, `bg-accent-gradient`, `bg-cta-gradient`.

### 3.5 Patterns décoratifs

**Network pattern** — Simule un réseau de données IA via deux cercles radiaux CSS :

```css
.network-pattern {
  background-image:
    radial-gradient(circle at 20% 30%, hsl(199 89% 48% / 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, hsl(168 76% 40% / 0.1) 0%, transparent 50%);
}
```

Utilisé sur : Hero (derrière le texte), WhyNow, Contact, headers des sous-pages.

### 3.6 Classes utilitaires courantes

| Classe | Description |
|---|---|
| `section-padding` | `py-20 md:py-28 lg:py-32` — espacement vertical standard |
| `container-custom` | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| `card-hover` | Transition + légère élévation au survol |
| `text-gradient` | Dégradé cyan → turquoise sur le texte |
| `wave-separator` | Pseudo-élément vague SVG (version CSS simple) |

---

## 4. Composants

### 4.1 Hero.tsx

Le composant le plus complexe du site.

**Structure :**
```
<section>
  ├── Background : hero-ocean.jpg + overlay gradient marine
  ├── network-pattern (overlay CSS)
  ├── Colonne gauche (texte)
  │   ├── Badge ⚓
  │   ├── H1 : BESMARA — IA & Automatisation…
  │   ├── Description + mention Yoann / 12 ans de mer
  │   ├── 2 CTAs (Réserver un appel · Voir les projets)
  │   └── Stats : 12 ans de mer · 100% mobile · 20 min offert
  ├── Colonne droite (desktop uniquement)
  │   ├── <BoatSilhouette> — chalutier SVG + données AIS + ligne de flottaison
  │   └── Logo BESMARA avec halo glow
  ├── <AnimatedWaves> — 3 couches SVG en bas du hero
  └── Scroll indicator (indicateur de défilement)
```

**Composant interne `AnimatedWaves`** — 3 layers SVG superposés :
- Layer 1 : cyan 25% opacité, animation `wave1` (8s)
- Layer 2 : turquoise 20% opacité, animation `wave2` (10s)
- Layer 3 : blanc 10% opacité, animation `wave3` (12s)

Chaque layer contient **deux copies SVG côte à côte** (200% de largeur) qui défilent en boucle grâce à `translateX`.

**Composant interne `BoatSilhouette`** :
- Données AIS décoratives : `47°N 3°W · CAP 235° · 12 kn · AIS ●`
- Image SVG `boat.svg` avec filtre `drop-shadow` cyan
- Ligne de flottaison en pointillés cyan
- Le tout enveloppé dans `animate-float` (6s loop, -8px vertical)

### 4.2 ScrollReveal.tsx

Wrapper générique d'animation d'entrée au scroll, basé sur **Framer Motion**.

```tsx
<ScrollReveal delay={200} direction="up">
  <MonComposant />
</ScrollReveal>
```

**Props :**

| Prop | Type | Défaut | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Contenu à animer |
| `className` | `string` | `""` | Classes CSS additionnelles |
| `delay` | `number` | `0` | Délai en millisecondes |
| `direction` | `"up" \| "down" \| "left" \| "right" \| "fade"` | `"up"` | Sens d'entrée |

**Implémentation :** Utilise `useInView` de Framer Motion avec `once: true` et `margin: "0px 0px -50px 0px"` pour déclencher avant que l'élément soit complètement visible.

### 4.3 WaveSeparator.tsx

Composant de transition entre deux sections avec une vague SVG.

```tsx
<WaveSeparator
  fromColor="hsl(220 56% 23%)"  // couleur de la section du dessus
  toColor="hsl(210 40% 98%)"    // couleur de la section du dessous
  flip={false}                   // inverser horizontalement
/>
```

**Props :**

| Prop | Type | Défaut | Description |
|---|---|---|---|
| `fromColor` | `string` | `hsl(var(--muted))` | Couleur de remplissage de la vague (section entrante) |
| `toColor` | `string` | `hsl(var(--background))` | Couleur de fond du conteneur (section sortante) |
| `flip` | `boolean` | `false` | Miroir horizontal |
| `className` | `string` | `""` | Classes additionnelles |

> **Comment ça marche :** Le composant a un fond `toColor`, et une vague SVG `fill={fromColor}` positionnée en bas. L'œil perçoit une transition fluide entre les deux sections.

### 4.4 AnimatedCounter.tsx

Compteur animé qui défile de 0 jusqu'à une valeur cible lorsqu'il entre dans le viewport.

```tsx
<AnimatedCounter end={11.2} suffix="%" decimals={1} />
```

**Props :**

| Prop | Type | Défaut | Description |
|---|---|---|---|
| `end` | `number` | — | Valeur finale |
| `suffix` | `string` | `""` | Suffixe affiché après le nombre |
| `decimals` | `number` | `0` | Nombre de décimales |
| `duration` | `number` | `2000` | Durée de l'animation en ms |

### 4.5 Navbar.tsx

Navigation fixe, transparente au top et opaque marine au scroll.

**Liens :**
- Accueil → `/`
- À propos → `/about`
- Solutions → `/services`
- Projets → `/#projects`
- Contact → bouton CTA `/contact`

**Comportement :** `isScrolled` déclenche `bg-primary/95 backdrop-blur-md` après 20px de scroll. Menu hamburger sur mobile avec animation `animate-fade-in`.

### 4.6 Offers.tsx

3 cartes tarifaires avec la carte centrale mise en valeur.

**Structure des données :**
```ts
{
  icon: LucideIcon,
  name: string,
  tagline: string,
  for: string,          // cible client
  includes: string[],   // liste de ce qui est inclus
  cta: string,
  highlight: boolean,   // true = carte vedette (fond marine, glow)
}
```

La carte `highlight: true` (Pack Automatisation) a :
- `bg-primary border-accent shadow-glow -translate-y-2 scale-[1.02]`
- Badge "Populaire" en or
- Couleur icône `text-accent-secondary`

### 4.7 Footer.tsx

Grille 4 colonnes (2 sur tablette, 1 sur mobile) :
- Col 1–2 : Brand + description + icônes sociales
- Col 3 : Navigation (`/about`, `/services`, `/#projects`, `/contact`)
- Col 4 : Email + téléphone

---

## 5. Pages (App Router)

Toutes les pages sont **statiquement pré-rendues** (`○ Static` dans le build output).

### 5.1 `/` — Landing page

Assemblage de toutes les sections avec WaveSeparators entre chaque.

**Ordre des sections :**
```
Hero → WaveSeparator → About → WaveSeparator → Offers → WaveSeparator
→ WhyNow → WaveSeparator → Projects → Process → WaveSeparator
→ Testimonials → WaveSeparator → Contact
```

### 5.2 `/services` — Détail des offres

Page dédiée avec pour chaque offre :
- Description longue
- Liste "Ce qui est inclus" (6 points)
- FAQ dédiée (2 questions/réponses)
- CTA vers `/contact`

Section CTA finale : "Pas sûr de quelle offre choisir ?"

### 5.3 `/about` — À propos

**Sections :**
1. Hero marine avec logo BESMARA
2. **Timeline** : 2009–2021 (mer) → 2021–2023 (reconversion) → 2023– (BESMARA)
3. **4 valeurs** : Transparence · Terrain d'abord · Simplifié pas simplet · Long terme
4. CTA double : Contact + Solutions

### 5.4 `/contact` — Formulaire complet

Formulaire avec **validation côté client** (sans librairie externe, validation custom) :

| Champ | Validation |
|---|---|
| Nom | Requis, min 2 caractères |
| Email | Regex email valide |
| Téléphone | Optionnel, format numérique flexible |
| Type de projet | Requis (select parmi 5 options) |
| Message | Requis, min 10 caractères |

**À brancher :** Actuellement `onSubmit` → `console.log` + état `sent`. Brancher sur :
- n8n webhook : remplacer le `console.log` par un `fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify(form) })`
- Ou Formspree : `action="https://formspree.io/f/XXXX"` sur le `<form>`

### 5.5 `/mentions-legales`

Page statique standard. `robots: { index: false, follow: false }` (pas indexée par Google).

---

## 6. Animations

### 6.1 Keyframes CSS (globals.css)

| Keyframe | Classe utilitaire | Durée par défaut | Effet |
|---|---|---|---|
| `fadeUp` | `animate-fade-up` | 0.6s | Montée + apparition |
| `fadeIn` | `animate-fade-in` | 0.5s | Apparition simple |
| `scaleIn` | `animate-scale-in` | 0.5s | Zoom léger + apparition |
| `slideInLeft` | `animate-slide-in-left` | 0.6s | Glissement depuis la gauche |
| `slideInRight` | `animate-slide-in-right` | 0.6s | Glissement depuis la droite |
| `wave1` | `animate-wave1` | 8s, infini | Vague hero couche 1 |
| `wave2` | `animate-wave2` | 10s, infini | Vague hero couche 2 |
| `wave3` | `animate-wave3` | 12s, infini | Vague hero couche 3 |

### 6.2 Animations Tailwind (tailwind.config.ts)

| Classe | Durée | Effet |
|---|---|---|
| `animate-float` | 6s, infini | Lévitation douce (boat SVG, scroll indicator) |
| `animate-pulse-glow` | 3s, infini | Pulsation d'opacité (halo logo) |
| `animate-accordion-down/up` | 0.2s | Accordéon shadcn/ui |

### 6.3 Framer Motion (ScrollReveal)

Le composant `ScrollReveal` est le seul point d'entrée Framer Motion dans les composants de la landing.

**Variants par direction :**
```ts
up    : { hidden: { opacity: 0, y: 30 },  visible: { opacity: 1, y: 0 } }
down  : { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } }
left  : { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }
right : { hidden: { opacity: 0, x: 30 },  visible: { opacity: 1, x: 0 } }
fade  : { hidden: { opacity: 0 },          visible: { opacity: 1 } }
```

Transition : `{ duration: 0.6, ease: "easeOut", delay: delay / 1000 }`

> **Note :** Le `delay` est passé en **millisecondes** dans les composants (ex: `delay={200}`) et converti en secondes pour Framer Motion (`delay / 1000`).

---

## 7. Stack technique

### Dépendances principales

| Package | Version | Usage |
|---|---|---|
| `next` | ^16.1.6 | Framework React, App Router, optimisation images |
| `react` / `react-dom` | ^19.0.0 | — |
| `typescript` | ^5 | — |
| `tailwindcss` | ^3.4.17 | Styles utilitaires |
| `framer-motion` | ^12.34.3 | Animations au scroll |
| `lucide-react` | ^0.575.0 | Icônes SVG |
| `class-variance-authority` | ^0.7.1 | Variants de composants (Button) |
| `clsx` + `tailwind-merge` | — | Utilitaire `cn()` |
| `@radix-ui/*` | ^1–2.x | Primitives UI accessibles (base de shadcn/ui) |

### Dépendances shadcn/ui installées

Toutes les dépendances nécessaires aux composants UI copiés sont installées. Les composants **réellement utilisés** sont :
- `Button` (`@radix-ui/react-slot` + `class-variance-authority`)
- `Card`, `CardContent` (aucune dep externe, juste `cn()`)

Les autres composants shadcn/ui sont disponibles pour usage futur.

### Versions épinglées pour compatibilité shadcn/ui

Ces packages ont été **downgraded** pour correspondre à la version des templates shadcn/ui :

| Package | Version utilisée | Raison |
|---|---|---|
| `react-day-picker` | ^8.10.1 (pas v9) | Changement d'API des composants `IconLeft`/`IconRight` |
| `recharts` | ^2.15.4 (pas v3) | Changement de types Tooltip en v3 |
| `react-resizable-panels` | ^1.0.10 (pas v4) | Export `PanelGroup` renommé en v2+ |

> ⚠️ **Attention** : Ne pas mettre à jour ces packages sans valider le build TypeScript.

---

## 8. Lancer le projet en local

### Prérequis

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
cd neo/
npm install
npm run dev
```

Ouvrir `http://localhost:3000`.

### Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (Turbopack, hot reload) |
| `npm run build` | Build de production (Next.js statique) |
| `npm run start` | Serveur de production local (après build) |
| `npm run lint` | Linter ESLint |

---

## 9. Déployer sur Vercel

### Déploiement automatique

```bash
git add .
git commit -m "Description des changements"
git push origin main
```

→ Vercel détecte le push, build automatiquement, déploie en production.

### Configuration Vercel (`neo/vercel.json`)

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

### Déploiement manuel (CLI)

```bash
cd neo/
npx vercel --prod
```

---

## 10. Guide de maintenance

### Modifier le contenu texte

Tous les textes sont directement dans les composants `.tsx`. Pas de CMS.

| Ce que tu veux modifier | Fichier |
|---|---|
| Texte du hero (titre, sous-titre, stats) | `src/components/Hero.tsx` |
| Présentation BESMARA, valeurs | `src/components/About.tsx` |
| Description des 3 offres | `src/components/Offers.tsx` |
| Statistiques IA maritime | `src/components/WhyNow.tsx` |
| Projets livrés | `src/components/Projects.tsx` |
| Méthodologie / process | `src/components/Process.tsx` |
| Témoignages | `src/components/Testimonials.tsx` |
| Email, téléphone | `src/components/Footer.tsx` |
| Contenu page À propos | `src/app/about/page.tsx` |
| Contenu page Services | `src/app/services/page.tsx` |

### Ajouter une section à la landing

1. Créer `src/components/NouvelleSection.tsx`
2. L'importer dans `src/app/page.tsx`
3. L'ajouter entre les bons `<WaveSeparator>` dans `page.tsx`

### Modifier les couleurs

Tout se passe dans `src/app/globals.css`, bloc `:root` :

```css
:root {
  --accent: 199 89% 48%;        /* Changer cette valeur HSL */
  --gold: 43 74% 52%;           /* Changer cette valeur HSL */
  --primary: 220 56% 23%;       /* Marine */
}
```

> Utiliser un convertisseur hex→HSL si besoin. Les 3 chiffres correspondent à teinte, saturation, luminosité.

### Brancher le formulaire de contact sur n8n

Dans `src/app/contact/page.tsx`, remplacer dans `handleSubmit` :

```ts
// Avant (console.log)
console.log("Formulaire soumis :", form);
setSent(true);

// Après (n8n webhook)
const response = await fetch("TON_WEBHOOK_N8N", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (response.ok) setSent(true);
```

Faire pareil dans `src/components/Contact.tsx` pour le formulaire de la landing.

### Ajouter une page

```
src/app/
└── ma-page/
    └── page.tsx    ← Créer ce fichier
```

Next.js App Router génère automatiquement la route `/ma-page`. Penser à ajouter le lien dans `Navbar.tsx` et `Footer.tsx`.

---

## 11. Ce qui reste à faire

### Priorité haute

- [ ] **Brancher le formulaire de contact** sur n8n webhook ou Formspree (les deux formulaires : landing + `/contact`)
- [ ] **Ajouter le vrai contenu** dans `Projects.tsx` (projets livrés, captures d'écran)
- [ ] **Compléter les témoignages** dans `Testimonials.tsx` (textes réels)
- [ ] **LinkedIn Yoann** : mettre le vrai lien dans `Footer.tsx` (actuellement `href="#"`)

### Priorité moyenne

- [ ] **Schema.org JSON-LD** dans `layout.tsx` (Person + LocalBusiness + Service) pour le SEO
- [ ] **Sitemap.xml** et `robots.txt` dans `/public` (ou via Next.js route handlers)
- [ ] **Open Graph image** : créer une image 1200×630 dans `/public/og-image.jpg` et la référencer dans les metadata
- [ ] **Analytics** : Vercel Analytics (gratuit, sans cookies) — ajouter `@vercel/analytics` + `<Analytics />` dans `layout.tsx`
- [ ] **Dark mode** : le design system a un bloc `.dark` dans `globals.css`, mais le toggle n'est pas implémenté

### Priorité basse

- [ ] **Page 404 personnalisée** : créer `src/app/not-found.tsx`
- [ ] **Tests** : Playwright pour vérifier les routes et le formulaire
- [ ] Mettre à jour les packages épinglés (recharts, react-day-picker, react-resizable-panels) quand shadcn/ui sortira des templates compatibles

---

## Annexe — Variables CSS complètes

```css
/* Palette principale */
--primary:              220 56% 23%   /* Marine foncé */
--accent:               199 89% 48%   /* Cyan électrique */
--accent-secondary:     168 76% 40%   /* Turquoise */
--gold:                 43 74% 52%    /* Or premium */

/* Fond et texte */
--background:           210 40% 98%
--foreground:           220 60% 15%
--muted:                210 30% 96%
--muted-foreground:     220 15% 45%

/* Cards */
--card:                 0 0% 100%
--card-foreground:      220 60% 15%

/* UI */
--border:               214 32% 91%
--input:                214 32% 91%
--ring:                 199 89% 48%   /* = accent */
--radius:               0.75rem

/* Gradients */
--gradient-hero:        marine 15% → marine 23% → bleu 30%
--gradient-accent:      cyan → turquoise
--gradient-cta:         marine 20% → marine 30%

/* Ombres */
--shadow-sm:   0 2px 8px -2px  hsl(220 56% 23% / 0.08)
--shadow-md:   0 8px 24px -8px hsl(220 56% 23% / 0.12)
--shadow-lg:   0 16px 48px -16px hsl(220 56% 23% / 0.16)
--shadow-glow: 0 0 40px hsl(199 89% 48% / 0.2)
```

---

*Documentation générée le 20 février 2026 — BESMARA v2.0*
