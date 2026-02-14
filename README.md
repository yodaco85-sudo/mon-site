# 🚢 Landing Page IA Maritime - Jean Dupont

Landing page professionnelle ultra-optimisée pour consultant IA & Automatisation spécialisé pêche/aquaculture.

## 📋 Table des matières
- [Caractéristiques](#caractéristiques)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Déploiement](#déploiement)
- [Personnalisation](#personnalisation)
- [SEO & Performance](#seo--performance)
- [Structure](#structure)
- [Support](#support)

---

## ✨ Caractéristiques

### 🎨 Design
- **Thème maritime** : Bleu marine/océan (#001F3F, #0074D9)
- **Dark mode** : Toggle avec persistence localStorage
- **Responsive** : Mobile-first, breakpoints Tailwind CSS
- **Animations fluides** : CSS + Intersection Observer
- **Micro-interactions** : Hover effects, scroll animations

### ⚡ Performance
- **Core Web Vitals** : Optimisé <1s LCP
- **CSS** : Tailwind CDN + custom CSS modulaire
- **JS** : Vanilla JavaScript, pas de framework lourd
- **Images** : Lazy loading, Unsplash optimisées
- **Lighthouse Score** : >95/100 attendu

### 🔍 SEO 2026
- **Meta tags** : Title, description, keywords optimisés
- **Schema.org** : JSON-LD (Person, LocalBusiness, Service)
- **Open Graph** : Facebook, Twitter Cards
- **Sitemap.xml** : Complet avec priorités
- **Robots.txt** : Optimisé crawl
- **Alt texts** : Images avec keywords
- **Headings** : Structure H1-H3 sémantique

### ♿ Accessibilité
- **WCAG 2.2** : Niveau AA visé
- **ARIA labels** : Boutons, liens, formulaires
- **Keyboard navigation** : Focus visible, skip links
- **Contraste** : Textes >4.5:1
- **Screen readers** : Sémantique HTML5

### 🛠️ Fonctionnalités
- **Formulaire contact** : Validation JS, EmailJS ready
- **Modal CTA** : Popup audit gratuit
- **Calendly embed** : Réservation directe
- **FAQ accordéon** : 6 questions SEO
- **Témoignages** : Carrousel 3 clients
- **Compteurs animés** : Stats au scroll
- **Scroll progress** : Barre progression header
- **Back-to-top** : Bouton flottant
- **Cookie consent** : Banner RGPD
- **Dark mode** : Toggle + prefers-color-scheme

---

## 🛠️ Technologies

- **HTML5** : Sémantique, accessible
- **Tailwind CSS 3** : CDN, config custom
- **Vanilla JavaScript** : ES6+, pas de dépendances
- **Font Awesome 6** : Icônes
- **Google Fonts** : Inter (variable)
- **Unsplash** : Images placeholder (à remplacer)

---

## 📦 Installation

### Prérequis
- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- Éditeur de code (VS Code recommandé)
- Git (optionnel, pour déploiement)

### Installation locale

1. **Télécharger ou cloner le projet**
```bash
# Option 1 : Cloner depuis GitHub (si applicable)
git clone https://github.com/votrecompte/landing-ia-maritime.git
cd landing-ia-maritime

# Option 2 : Télécharger le ZIP et extraire
```

2. **Ouvrir le projet**
```bash
# Ouvrir index.html dans votre navigateur
# Ou utiliser un serveur local (recommandé)
```

3. **Lancer un serveur local** (recommandé pour tester)

**Option A : Python**
```bash
# Python 3
python -m http.server 8000

# Puis ouvrir : http://localhost:8000
```

**Option B : Node.js / npx**
```bash
npx serve .

# Ou installer http-server
npm install -g http-server
http-server
```

**Option C : VS Code Live Server**
- Installer l'extension "Live Server"
- Clic droit sur index.html > "Open with Live Server"

---

## ⚙️ Configuration

### 1. Informations personnelles

**Dans `index.html` :** Remplacez toutes les occurrences de :

- `Jean Dupont` → Votre nom
- `contact@votredomaine.fr` → Votre email
- `+33 6 12 34 56 78` → Votre téléphone
- `https://votredomaine.fr` → Votre domaine
- `https://www.linkedin.com/in/votreprofil` → Votre LinkedIn
- `https://calendly.com/votreprofil` → Votre Calendly

**Recherche/Remplacement global** (VS Code : Ctrl+Shift+H)

### 2. Images

**Remplacez les URLs Unsplash par vos vraies images :**

Dans `index.html`, cherchez toutes les balises `<img src="https://images.unsplash.com/...">`

Recommandations :
- **Hero avatar** : Votre photo professionnelle (800x800px)
- **Portfolio** : Captures d'écran projets (1200x800px)
- **OG image** : Pour partage social (1200x630px)

Outils compression : TinyPNG, Squoosh.app

### 3. Formulaire de contact

**Option A : EmailJS (gratuit, 200 emails/mois)**

1. Créer un compte : https://www.emailjs.com/
2. Créer un service (Gmail, Outlook...)
3. Créer un template email
4. Récupérer :
   - Service ID
   - Template ID
   - Public Key

5. Dans `js/main.js`, ligne ~210, décommenter et configurer :
```javascript
// Remplacer la simulation par :
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY');
```

6. Ajouter le SDK EmailJS dans `index.html` (avant `</body>`) :
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init('YOUR_PUBLIC_KEY');
</script>
```

**Option B : Formspree (gratuit, 50 soumissions/mois)**

1. Créer un compte : https://formspree.io/
2. Créer un form, récupérer l'endpoint
3. Dans `index.html`, modifier `<form>` :
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option C : Backend custom**
Créer votre API (Node.js, PHP, Python...)

### 4. Analytics

**Google Analytics 4**

1. Créer une propriété GA4 : https://analytics.google.com/
2. Récupérer le Measurement ID (G-XXXXXXXXXX)
3. Dans `index.html`, ajouter avant `</head>` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5. SEO

**Google Search Console**

1. Vérifier propriété : https://search.google.com/search-console
2. Soumettre sitemap : `https://votredomaine.fr/sitemap.xml`

**Schema.org**

Dans `index.html`, mettre à jour le JSON-LD (lignes 50-150) avec vos vraies coordonnées.

---

## 🚀 Déploiement

### Déploiement automatique (script)

```bash
# Rendre le script exécutable (Linux/Mac)
chmod +x deploy.sh

# Lancer le script
./deploy.sh

# Suivez les instructions pour Netlify, Vercel, ou GitHub Pages
```

### Déploiement manuel

#### Option 1 : Netlify (Recommandé ⭐)

**Via Drag & Drop (le plus simple) :**
1. Aller sur https://app.netlify.com/drop
2. Glisser-déposer le dossier complet
3. Site en ligne en 30 secondes !

**Via CLI :**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Avantages :**
- Gratuit
- CDN mondial
- SSL automatique
- Formulaires intégrés
- Domaine custom gratuit

#### Option 2 : Vercel

```bash
npm install -g vercel
vercel --prod
```

#### Option 3 : GitHub Pages

1. Créer un dépôt GitHub
2. Pusher le code
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```
3. Settings > Pages > Source: main branch
4. Site disponible sur `https://username.github.io/repo`

#### Option 4 : Hébergement traditionnel (OVH, Hostinger, etc.)

1. Se connecter via FTP/SFTP (FileZilla, Cyberduck...)
2. Uploader tous les fichiers dans `public_html/` ou `www/`
3. S'assurer que `index.html` est à la racine
4. Activer SSL/HTTPS via cPanel

---

## 🎨 Personnalisation

### Couleurs

**Modifier le thème** dans `tailwind.config` (index.html, ligne 25) :

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'marine-dark': '#001F3F',  // Bleu marine foncé
                'ocean-blue': '#0074D9',   // Bleu océan
                'cream': '#FFF8E7',        // Crème
            }
        }
    }
}
```

**Et dans `css/style.css`** (lignes 8-12)

### Polices

Changer dans `index.html` (ligne 45) :
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

Et dans `index.html` (body, ligne 146) :
```html
<body class="font-['Poppins',sans-serif]">
```

### Sections

**Ajouter/supprimer des sections :**

Chaque section est un bloc `<section id="...">`. Dupliquez et modifiez selon vos besoins.

**Modifier le contenu :**
Tous les textes sont en dur dans `index.html`. Utilisez Ctrl+F pour trouver et remplacer.

---

## 📊 SEO & Performance

### Checklist SEO

- [ ] Remplacer toutes les URLs `votredomaine.fr`
- [ ] Ajouter vraies images avec alt texts
- [ ] Mettre à jour Schema.org JSON-LD
- [ ] Soumettre sitemap.xml à Google Search Console
- [ ] Configurer Google Analytics
- [ ] Vérifier Open Graph avec https://developers.facebook.com/tools/debug/
- [ ] Tester sur https://search.google.com/test/rich-results
- [ ] Obtenir backlinks (annuaires, LinkedIn, etc.)

### Tests Performance

**Lighthouse (Chrome DevTools)**
```
Clic droit > Inspecter > Lighthouse > Generate Report
```

Cibles :
- Performance : >90
- Accessibility : >95
- Best Practices : >95
- SEO : 100

**Autres outils :**
- https://pagespeed.web.dev/
- https://gtmetrix.com/
- https://tools.pingdom.com/

### Optimisations recommandées

1. **Images** : Convertir en WebP, compresser
2. **Fonts** : Utiliser `font-display: swap`
3. **JS** : Minifier (UglifyJS, Terser)
4. **CSS** : Purge Tailwind unused classes (PurgeCSS)
5. **CDN** : Utiliser Cloudflare (gratuit)

---

## 📁 Structure du projet

```
landing-ia-maritime/
├── index.html              # Page principale (TOUT le contenu)
├── css/
│   └── style.css          # Styles custom (animations, boutons...)
├── js/
│   └── main.js            # JavaScript (interactivité, formulaires...)
├── images/                # Vos images (à créer et remplir)
│   ├── hero-avatar.jpg
│   ├── portfolio-1.jpg
│   ├── portfolio-2.jpg
│   ├── portfolio-3.jpg
│   └── og-image.jpg       # Pour Open Graph (1200x630px)
├── sitemap.xml            # Sitemap SEO
├── robots.txt             # Directives robots
├── deploy.sh              # Script déploiement automatique
├── README.md              # Ce fichier
└── .gitignore             # Fichiers à ignorer (généré par deploy.sh)
```

---

## 🔧 Dépannage

### Le formulaire ne fonctionne pas
- Vérifiez la console (F12) pour erreurs JavaScript
- Configurez EmailJS ou Formspree (voir [Configuration](#configuration))
- Testez la validation : email invalide doit afficher erreur

### Dark mode ne persiste pas
- Vérifiez que JavaScript est activé
- Effacez le cache navigateur (Ctrl+Shift+Delete)
- Vérifiez localStorage (F12 > Application > Local Storage)

### Animations ne marchent pas
- Désactivez "Reduce motion" dans OS (Accessibility settings)
- Vérifiez console pour erreurs JS
- Testez dans un autre navigateur

### Lighthouse score faible
- Compressez les images (TinyPNG)
- Activez la compression Gzip sur serveur
- Utilisez CDN (Cloudflare)
- Minifiez CSS/JS

### Tailwind classes ne fonctionnent pas
- Vérifiez que le CDN Tailwind est bien chargé (ligne 40 index.html)
- Ouvrez Network tab (F12) et vérifiez que `cdn.tailwindcss.com` charge
- Certaines classes custom nécessitent config (voir tailwind.config ligne 25)

---

## 📞 Support

**Développeur :** Jean Dupont
**Email :** contact@votredomaine.fr
**LinkedIn :** https://www.linkedin.com/in/votreprofil

---

## 📝 Licence

© 2026 Jean Dupont - Tous droits réservés.

Ce code est fourni "tel quel" pour usage personnel ou commercial. Vous êtes libre de le modifier et de le redistribuer.

---

## 🎯 Prochaines étapes

### Après déploiement

1. **Tester sur tous les devices** :
   - Desktop (Windows, Mac)
   - Mobile (iOS, Android)
   - Tablette

2. **Configurer le formulaire** :
   - Choisir EmailJS/Formspree
   - Tester soumission
   - Vérifier réception emails

3. **SEO** :
   - Google Search Console
   - Google Analytics
   - Soumettre aux annuaires (Yelp, Pages Jaunes...)

4. **Marketing** :
   - Partager sur LinkedIn
   - Créer contenu blog (si activé)
   - Google Ads / Facebook Ads (optionnel)

5. **Amélioration continue** :
   - Analyser Analytics (pages vues, taux conversion)
   - A/B testing CTA
   - Ajouter témoignages réels
   - Mettre à jour portfolio

---

## ✅ Checklist finale avant lancement

- [ ] Toutes les infos personnelles remplacées (nom, email, tel, LinkedIn)
- [ ] Images Unsplash remplacées par vraies photos
- [ ] Formulaire configuré et testé (EmailJS/Formspree)
- [ ] Google Analytics ajouté et vérifié
- [ ] Sitemap soumis à Google Search Console
- [ ] Testé sur mobile (iOS + Android)
- [ ] Testé sur desktop (Chrome, Firefox, Safari)
- [ ] Lighthouse score >90
- [ ] SSL/HTTPS activé
- [ ] Domaine custom configuré
- [ ] Cookies banner fonctionnel
- [ ] Dark mode fonctionne
- [ ] Tous les liens externes s'ouvrent dans nouvel onglet
- [ ] FAQ pertinentes pour votre audience
- [ ] Témoignages réalistes (ou vrais si possibles)
- [ ] Prix/tarifs à jour
- [ ] Calendly lié (si utilisé)
- [ ] Mentions légales/RGPD créées (pages séparées)

---

**🚀 Bon lancement !**

Si vous avez des questions ou besoin d'aide, n'hésitez pas à me contacter.

---

*Dernière mise à jour : 9 février 2026*
