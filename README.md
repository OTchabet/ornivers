# Ornivers v3

Le code source du blog d'Ornella — 4 parcours (Études, Art, Pâtisserie, Life-style), thème jour/nuit, système solaire animé sur l'accueil, menu déroulant + recherche, sidebar légère (statut/humeur).

## Structure
- `_config.yml` : les 4 parcours, leurs rubriques/sous-rubriques, couleurs
- `_posts/` : tous les articles, un fichier .md par article
- `_layouts/` : gabarits de page (base = header/sidebar/footer communs, article = page d'un article)
- `assets/css/style.css` : tout le design, y compris le thème jour/nuit (variables CSS)
- `assets/js/recherche-index.js` : généré automatiquement par Jekyll à partir des articles
- `etudes/`, `art/`, `patisserie/`, `lifestyle/` : pages qui listent les articles de chaque parcours, groupés par rubrique

## Écrire un article
Frontmatter à copier :
```
---
title: "Mon titre"
parcours: lifestyle
rubrique: mouvement
sous_rubrique: "Yoga"
tags: [tag1, tag2]
---
```
