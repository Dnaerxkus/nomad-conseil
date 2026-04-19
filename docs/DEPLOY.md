# Deployment Guide — GitHub Pages

## Automatic deployment
Every push to `main` triggers GitHub Actions → builds Astro → deploys to the `gh-pages` branch automatically. No manual steps needed after initial setup.

## Initial setup (one time)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set Source: **GitHub Actions**
4. The first push to `main` will trigger the workflow

## Custom domain (nomad-conseil.fr)

1. Add a `CNAME` file in `/public/` containing just:
   ```
   nomad-conseil.fr
   ```
2. Remove the `base` option from `astro.config.mjs` (if set)
3. At your DNS registrar, add:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  [github-username].github.io
   ```
4. In GitHub: Settings → Pages → Custom domain → enter `nomad-conseil.fr`
5. Check "Enforce HTTPS" once DNS propagates (~24h)

## Local development

```bash
npm install
npm run dev     # → http://localhost:4321
npm run build   # build to /dist
npm run preview # preview the built site
```

## Troubleshooting

- **404 on sub-pages after deploy:** Check `astro.config.mjs` — if using a repo subdirectory, the `base` must match the repo name.
- **Fonts not loading:** Google Fonts are loaded from CDN. If going offline, self-host in `public/fonts/` and update the `@import` in `src/styles/global.css`.
- **Build fails:** Run `npm run build` locally first. Check the terminal for type errors in `.astro` or `.ts` files.
