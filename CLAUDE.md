# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**BESMARA** — Landing page personnelle de Yoann, consultant IA maritime (pêche, aquaculture).
Site statique HTML/CSS/JS vanilla, sans framework ni étape de build. Déployé sur Vercel.

## Stack

- HTML5, CSS3 (custom properties, dark mode, animations CSS)
- JavaScript ES6+ vanilla (pas de framework)
- Google Fonts : `Inter` (corps) + `Playfair Display` (titres)
- Hébergement : Vercel (déploiement auto depuis git push sur `main`)

## Lancer le site localement

Aucun build nécessaire. Servir la racine statiquement :

```bash
# Python (recommandé)
python -m http.server 8000

# Node (alternative)
npx serve .
```

Ouvrir `http://localhost:8000`.

## Déployer

```bash
# Via git (déploiement auto Vercel)
git push origin main

# Via script local
bash deploy.sh

# Via CLI Vercel
vercel --prod
```

## Architecture

```
index.html          ← Point d'entrée unique (SPA)
css/
  style.css         ← Design system complet (variables, layout, animations)
  components.css    ← Styles spécifiques aux composants
js/
  main.js           ← Toute l'interactivité JS
brand/              ← Logos et assets visuels
sitemap.xml         ← SEO
robots.txt          ← SEO
vercel.json         ← Config Vercel (outputDirectory: ".", no build)
```

## Variables CSS (design tokens)

Définies dans `css/style.css` :

| Variable | Valeur | Usage |
|---|---|---|
| `--navy` | `#001F3F` | Fond principal |
| `--ocean` | `#0074D9` | Bleu accent |
| `--gold` | `#C8A84E` | Accent premium |
| `--cream` | `#FFF8E7` | Fond clair |

## Fonctionnalités JS (`js/main.js`)

- Dark mode (toggle + `localStorage`)
- Menu mobile (hamburger)
- Scroll progress bar + back-to-top
- Fade-in animations (Intersection Observer)
- Typewriter animation (hero)
- Compteurs animés (stats)
- Accordéon FAQ
- Validation formulaire de contact + modal audit
- Bannière RGPD cookies

## SEO

- Schema.org JSON-LD (`Person`, `LocalBusiness`, `Service`) dans `index.html`
- Open Graph + Twitter Card
- `sitemap.xml` + `robots.txt`
- URL canonique dans `<head>`

## Conventions

- Tout le contenu est en **français**
- Pas de dépendances npm — ne pas introduire `package.json` ou de bundler sans raison forte
- Garder le site statique et déployable sans build
