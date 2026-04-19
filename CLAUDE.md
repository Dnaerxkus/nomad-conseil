# Nomad Conseil — Claude Navigation Guide

## What this project is
A static Astro 4 website for Nomad Conseil (nomad-conseil.fr), a French B2B real estate consultancy specialising in AMO / MOD / Conseil. Deployed to GitHub Pages via GitHub Actions. Bilingual FR/EN.

## Stack
- **Framework:** Astro 4 with `@astrojs/react` (React used only for the portfolio filter island)
- **Styling:** Plain CSS with custom properties (no Tailwind, no CSS-in-JS)
- **Content:** Astro Content Collections — Markdown files in `src/content/`
- **i18n:** File-based routing (`/fr/` and `/en/`), strings in `src/i18n/ui.ts`
- **Deploy:** GitHub Actions → GitHub Pages

## Key files at a glance

| File | Purpose |
|---|---|
| `src/i18n/ui.ts` | All UI text strings for FR and EN. Add keys here first. |
| `src/styles/tokens.css` | Design system: colours, fonts, spacing. Edit here to restyle. |
| `src/content/config.ts` | Zod schema for `projects` and `news` collections. |
| `src/content/projects/` | One `.md` file per project. Add new projects here. |
| `src/content/news/` | News/blog posts as `.md` files. |
| `src/components/references/FilterBar.tsx` | Only React component — portfolio filter island. |
| `astro.config.mjs` | Framework config, i18n routing, site URL. |

## Page routes

| FR route | EN route | File (FR) |
|---|---|---|
| `/fr/` | `/en/` | `src/pages/fr/index.astro` |
| `/fr/activites` | `/en/services` | `src/pages/fr/activites.astro` |
| `/fr/references` | `/en/references` | `src/pages/fr/references.astro` |
| `/fr/clients` | `/en/clients` | `src/pages/fr/clients.astro` |
| `/fr/equipe` | `/en/team` | `src/pages/fr/equipe.astro` |
| `/fr/actualites` | `/en/news` | `src/pages/fr/actualites.astro` |
| `/fr/contact` | `/en/contact` | `src/pages/fr/contact.astro` |

## Design tokens (quick reference)

| Token | Value | Use |
|---|---|---|
| `--color-stone` | `#f2ede6` | Page background |
| `--color-void` | `#0f0f0d` | Primary text |
| `--color-gold` | `#b89a6a` | Accent: CTAs, hover states, active nav |
| `--color-concrete` | `#1e1d1a` | Dark sections (footer, CTA band) |
| `--color-ash` | `#8a8780` | Muted text |
| `--font-display` | Cormorant | Headings, hero, large type |
| `--font-body` | DM Sans | Body copy, nav, labels |
| `--font-mono` | DM Mono | Stats, m² figures, dates |

## Adding a project (quick guide)
See `docs/EDITING.md` for the full workflow. Short version:
1. Create `src/content/projects/[slug].md`
2. Fill in the frontmatter (title, city, client, surface, mission, type, image)
3. Add project image to `public/images/projects/[slug].jpg` (440×550px, optimised)
4. Push to `main` — GitHub Actions deploys automatically

## Component tree (major components)

```
PageLayout
├── Header (logo + nav + LanguageToggle)
├── [page slot]
│   ├── Hero / PageHeader
│   ├── Section components
│   └── CtaBand
└── Footer
```

## Docs
- `docs/BRAND.md` — Colour palette, typography, tone of voice
- `docs/EDITING.md` — How to add/edit a project or news post
- `docs/DEPLOY.md` — GitHub Pages deployment steps
