# Guide d'Utilisation - Site BESMARA

Ce document est destiné à vous guider dans la gestion, l'hébergement et la mise à jour de votre site web BESMARA.

## 1. Informations Générales
- **Nom du projet** : BESMARA NEO
- **Technologies utilisées** : Next.js, React, Tailwind CSS (Site statique ultra-rapide)
- **Hébergement actuel** : Vercel
- **Gestion du code** : Dépend de votre dépôt Git (ex: GitHub)

## 2. Déploiement et Hébergement
Votre site est déployé sur **Vercel**, une plateforme spécialisée, très performante et sécurisée pour la technologie Next.js.
- **Mises à jour automatiques** : À chaque fois qu'une modification est sauvegardée ("push") sur la branche principale de votre dépôt de code, Vercel détecte ce changement et redéploie le site automatiquement en moins de 2 minutes. Nul besoin d'opérations manuelles côté serveur.
- **Suivi des performances** : Depuis votre tableau de bord Vercel, vous pouvez contrôler l'état de vos déploiements en direct, surveiller les visites et configurer vos noms de domaine.

## 3. Gestion des Formulaires de Contact
Votre site dispose de formulaires (sur la page de contact et la page d'accueil) intégrant des validations avancées (formats d'emails, longueur des messages, etc.) pour vous prémunir du spam.
- **Fonctionnement actuel** : Le design et la validation côté client sont terminés.
- **Transmission des emails** : Pour que ces messages arrivent dans votre boîte de réception, il est nécessaire de lier les formulaires à un service d'envoi.
- **Solutions recommandées** :
  - **Formspree ou Web3Forms** : Solution la plus simple (nécessite juste de la raccorder au code avec votre adresse email).
  - **n8n / Zapier / Make** : Solution avancée si vous souhaitez injecter les contacts directement dans un outil CRM, un tableur ou générer des alertes spécifiques.

## 4. Mises à Jour du Contenu (Textes, Tarifs, Projets)
Afin de garantir une vitesse de chargement maximale et un référencement optimal (SEO), le site ne possède pas d'interface d'administration complexe (type WordPress). Les textes sont intégrés directement dans le code source.

Pour effectuer une mise à jour (modifier vos forfaits, ajouter un témoignage client, changer un texte) :
1. **Via un prestataire (ou vous-même si familier avec le code)** : Les fichiers contenant les textes sont clairement identifiés (ex: le fichier `src/components/Offers.tsx` contient toutes vos offres).
2. **Via GitHub** : Vous pouvez modifier le texte directement dans votre navigateur via l'interface GitHub et valider la modification.
3. Le site se mettra ensuite à jour automatiquement sur Vercel sans action de votre part.

## 5. Conseils pour le Référencement (SEO) et le Web-Marketing
La vitesse du site est un point fort majeur pour Google, mais cela ne suffit pas à lui seul.
- **Réseaux sociaux** : Pensez à faire renseigner le lien exact de votre profil LinkedIn dans le pied de page du site.
- **Témoignages et Projets** : Remplacer à terme le contenu d'exemple par des études de cas réelles (noms de bateaux, ROI d'automatisation) sera le meilleur levier de conversion pour vos futurs clients.
- **Mesure d'audience** : Pour suivre le nombre de vos visiteurs dans le respect de la législation (RGPD), il est recommandé d'activer une solution légère comme Vercel Analytics ou Plausible Analytics.

## 6. En cas de besoin technique
Une documentation technique extrêmement détaillée (`DOCUMENTATION.md`) est présente dans les fichiers sources du site. Elle permettra à n'importe quel développeur React/Next.js de prendre la main rapidement en cas de besoin ou pour des évolutions majeures.
