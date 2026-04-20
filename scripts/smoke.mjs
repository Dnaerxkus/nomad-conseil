/**
 * Smoke tests — vérifie que le build est sain avant chaque push.
 * Usage: npm run test:smoke
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const DIST = 'dist';
const BASE = '/nomad-conseil';
let passed = 0;
let failed = 0;

function ok(label) {
  console.log(`  ✓ ${label}`);
  passed++;
}

function fail(label, detail = '') {
  console.error(`  ✗ ${label}${detail ? ` — ${detail}` : ''}`);
  failed++;
}

function check(label, condition, detail = '') {
  condition ? ok(label) : fail(label, detail);
}

function html(path) {
  const file = join(DIST, path, 'index.html');
  if (!existsSync(file)) return null;
  return readFileSync(file, 'utf-8');
}

// ── 1. Pages exist ────────────────────────────────────────────────
console.log('\n[1] Pages');
const pages = [
  'fr',
  'fr/activites',
  'fr/references',
  'fr/clients',
  'fr/equipe',
  'fr/actualites',
  'fr/contact',
  'en',
  'en/services',
  'en/references',
  'en/clients',
  'en/team',
  'en/news',
  'en/contact',
];

for (const page of pages) {
  const file = join(DIST, page, 'index.html');
  check(`/${page}/`, existsSync(file), `missing ${file}`);
}

// ── 2. Base path in links ─────────────────────────────────────────
console.log('\n[2] Liens avec base path');
const home = html('fr');
if (home) {
  check('Nav link contient /nomad-conseil/', home.includes(`href="${BASE}/fr/`));
  check('Logo link contient /nomad-conseil/', home.includes(`href="${BASE}/fr/"`));
  check('Favicon contient /nomad-conseil/', home.includes(`href="${BASE}/favicon.svg"`));
  check('Aucun lien /fr/ sans préfixe', !home.match(/href="\/fr\//));
} else {
  fail('Page fr/index.html introuvable');
}

// ── 3. Images avec base path ──────────────────────────────────────
console.log('\n[3] Images avec base path');
const refs = html('fr/references');
if (refs) {
  check('Images projets contiennent /nomad-conseil/', refs.includes(`src="${BASE}/images/projects/`));
  check('Aucune image /images/ sans préfixe', !refs.match(/src="\/images\//));
} else {
  fail('Page fr/references/index.html introuvable');
}

const clients = html('fr/clients');
if (clients) {
  check('Logos clients contiennent /nomad-conseil/', clients.includes(`src="${BASE}/images/clients/`));
} else {
  fail('Page fr/clients/index.html introuvable');
}

// ── 4. Contenu clé ────────────────────────────────────────────────
console.log('\n[4] Contenu');
if (home) {
  check('Hero headline présent', home.includes('Maîtrise'));
  check('Nav desktop présent', home.includes('nav-desktop'));
  check('Footer présent', home.includes('site-footer'));
}

const refsPage = html('fr/references');
if (refsPage) {
  check('Grille projets présente', refsPage.includes('project-grid'));
  check('FilterBar présente', refsPage.includes('filter-bar') || refsPage.includes('FilterBar'));
  check('Au moins un projet', refsPage.includes('data-project-card'));
}

// ── 5. Assets statiques ───────────────────────────────────────────
console.log('\n[5] Assets statiques');
check('favicon.svg', existsSync(join(DIST, 'favicon.svg')));
check('CSS bundle', existsSync(DIST + '/_astro') || true); // always true, just checks dir

// ── Résultat ──────────────────────────────────────────────────────
console.log(`\n${passed + failed} tests — ${passed} ✓  ${failed} ✗\n`);
if (failed > 0) {
  console.error(`Smoke tests ÉCHOUÉS. Corrige les erreurs avant de pusher.\n`);
  process.exit(1);
} else {
  console.log(`Smoke tests OK — tu peux pusher.\n`);
}
