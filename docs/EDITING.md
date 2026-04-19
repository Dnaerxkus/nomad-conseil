# Editing Guide — How to update content

## Adding a new project

1. Create a file: `src/content/projects/[slug].md`
   - Use lowercase, hyphens for spaces: `tour-exemple.md`

2. Paste this template and fill it in:

```yaml
---
title: "Nom du projet"
title_en: "Project name in English"
city: "Paris"
client: "Nom du client"
surface: "12 000 m²"
mission: "AMO"
type: ["AMO"]         # Options: AMO, MOD, Conseil, Directeur de programme
architect: ""         # Leave blank if none
specifics: ""         # Certifications, constraints, etc.
image: "/images/projects/slug-du-projet.jpg"
featured: false       # Set true to appear in homepage teaser
order: 50             # Lower number = appears earlier in grid
---

Description du projet (optionnelle, quelques lignes).
```

3. Add the project image to `public/images/projects/[slug].jpg`
   - Recommended size: 440 × 550 px, JPEG, under 300 KB

4. Commit and push to `main` — the site deploys automatically.

---

## Adding a news post

1. Create: `src/content/news/[slug].md`

```yaml
---
title: "Titre de l'article"
title_en: "Article title in English"
date: 2026-04-19
excerpt: "Résumé en une phrase pour la page liste."
excerpt_en: "One-sentence summary for the list page."
image: "/images/news/slug.jpg"    # Optional
---

Contenu complet de l'article en Markdown...
```

2. Push to `main`.

---

## Editing UI text (labels, nav, hero tagline)

All interface strings live in `src/i18n/ui.ts`.  
Find the key (e.g. `'hero.tagline'`), update the `fr` and `en` values, save and push.

---

## Updating contact email

Search for `contact@nomad-conseil.fr` in the project — it appears in:
- `src/pages/fr/contact.astro`
- `src/pages/en/contact.astro`
- `src/components/layout/Footer.astro`

Replace all three with the real address.

---

## Changing the team bio

Edit `src/components/team/TeamCard.astro` directly.  
The bio text is hardcoded there (not in a content collection yet).  
When a CMS is added, this will move to a structured content type.
