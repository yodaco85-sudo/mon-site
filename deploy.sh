#!/bin/bash
# ==========================================
# SCRIPT DE DÉPLOIEMENT - LANDING PAGE IA MARITIME
# Jean Dupont - Consultant IA & Automatisation
# ==========================================

set -e  # Exit on error

echo "🚀 Démarrage du déploiement de la landing page IA Maritime..."

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages
print_message() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "index.html" ]; then
    print_error "Fichier index.html introuvable. Assurez-vous d'être dans le répertoire du projet."
    exit 1
fi

print_message "Répertoire de projet validé"

# Vérifier si Git est installé
if ! command -v git &> /dev/null; then
    print_error "Git n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

print_message "Git installé"

# Initialiser le dépôt Git si nécessaire
if [ ! -d ".git" ]; then
    print_info "Initialisation du dépôt Git..."
    git init
    print_message "Dépôt Git initialisé"
else
    print_message "Dépôt Git déjà initialisé"
fi

# Créer .gitignore si inexistant
if [ ! -f ".gitignore" ]; then
    print_info "Création du fichier .gitignore..."
    cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log

# Environment variables
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Build
dist/
build/

# Logs
*.log

# Temporary files
*.tmp
.cache/
EOF
    print_message ".gitignore créé"
fi

# Ajouter tous les fichiers
print_info "Ajout des fichiers au dépôt..."
git add .

# Créer un commit
print_info "Création du commit..."
git commit -m "🚀 Deploy: Landing Page IA Maritime - $(date +'%Y-%m-%d %H:%M:%S')" || print_warning "Aucun changement à committer"

print_message "Commit créé"

# Demander le choix de plateforme de déploiement
echo ""
print_info "Choisissez votre plateforme de déploiement :"
echo "  1) Netlify (recommandé - gratuit, CDN mondial, SSL auto)"
echo "  2) Vercel (gratuit, rapide, moderne)"
echo "  3) GitHub Pages (gratuit, limité)"
echo "  4) Manual (instructions seulement)"
read -p "Votre choix (1-4): " deploy_choice

case $deploy_choice in
    1)
        print_info "Déploiement sur Netlify..."

        # Vérifier si Netlify CLI est installé
        if ! command -v netlify &> /dev/null; then
            print_warning "Netlify CLI n'est pas installé."
            print_info "Installation de Netlify CLI..."

            if command -v npm &> /dev/null; then
                npm install -g netlify-cli
                print_message "Netlify CLI installé"
            else
                print_error "npm n'est pas installé. Installez Node.js d'abord: https://nodejs.org"
                exit 1
            fi
        fi

        print_message "Netlify CLI prêt"

        # Login Netlify (si pas déjà connecté)
        print_info "Connexion à Netlify..."
        netlify login

        # Déployer
        print_info "Déploiement en cours..."
        netlify deploy --prod --dir=. --open

        print_message "Déploiement Netlify terminé !"
        print_info "Votre site est maintenant en ligne ✨"
        ;;

    2)
        print_info "Déploiement sur Vercel..."

        # Vérifier si Vercel CLI est installé
        if ! command -v vercel &> /dev/null; then
            print_warning "Vercel CLI n'est pas installé."
            print_info "Installation de Vercel CLI..."

            if command -v npm &> /dev/null; then
                npm install -g vercel
                print_message "Vercel CLI installé"
            else
                print_error "npm n'est pas installé. Installez Node.js d'abord: https://nodejs.org"
                exit 1
            fi
        fi

        print_message "Vercel CLI prêt"

        # Déployer
        print_info "Déploiement en cours..."
        vercel --prod

        print_message "Déploiement Vercel terminé !"
        ;;

    3)
        print_info "Configuration pour GitHub Pages..."

        # Vérifier si le remote GitHub existe
        if ! git remote | grep -q "origin"; then
            print_warning "Aucun remote GitHub configuré."
            read -p "Entrez l'URL de votre dépôt GitHub (ex: https://github.com/username/repo.git): " github_url

            if [ -n "$github_url" ]; then
                git remote add origin "$github_url"
                print_message "Remote GitHub ajouté"
            else
                print_error "URL invalide"
                exit 1
            fi
        fi

        # Push vers GitHub
        print_info "Push vers GitHub..."
        git branch -M main
        git push -u origin main

        print_message "Code poussé vers GitHub"
        print_info "Activez GitHub Pages dans Settings > Pages > Source: main branch"
        ;;

    4)
        print_info "Instructions de déploiement manuel :"
        echo ""
        echo "📦 NETLIFY (Recommandé) :"
        echo "  1. Créez un compte sur https://netlify.com"
        echo "  2. Glissez-déposez le dossier complet dans Netlify"
        echo "  3. Configurez votre domaine personnalisé"
        echo ""
        echo "📦 VERCEL :"
        echo "  1. Créez un compte sur https://vercel.com"
        echo "  2. Importez depuis GitHub ou uploadez manuellement"
        echo "  3. Configurez votre domaine"
        echo ""
        echo "📦 HÉBERGEMENT TRADITIONNEL (OVH, Hostinger, etc.) :"
        echo "  1. Uploadez tous les fichiers via FTP/SFTP"
        echo "  2. Placez index.html à la racine (public_html/)"
        echo "  3. Configurez SSL/HTTPS via cPanel"
        echo ""
        ;;

    *)
        print_error "Choix invalide"
        exit 1
        ;;
esac

# Post-déploiement : conseils SEO
echo ""
print_info "📊 Conseils post-déploiement :"
echo "  ✓ Soumettez votre sitemap à Google Search Console : https://search.google.com/search-console"
echo "  ✓ Configurez Google Analytics (remplacez GA_MEASUREMENT_ID dans le code)"
echo "  ✓ Testez la performance : https://pagespeed.web.dev/"
echo "  ✓ Vérifiez l'accessibilité : https://wave.webaim.org/"
echo "  ✓ Testez le responsive : https://responsivedesignchecker.com/"
echo "  ✓ Configurez EmailJS ou Formspree pour le formulaire de contact"
echo "  ✓ Personnalisez les images (remplacez les URLs Unsplash par vos vraies photos)"
echo "  ✓ Mettez à jour l'URL canonique dans index.html"
echo "  ✓ Ajoutez votre vrai numéro de téléphone et email"
echo ""

print_message "Déploiement terminé avec succès ! 🎉"
print_info "N'oubliez pas de tester votre site sur mobile et desktop."

exit 0
