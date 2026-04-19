/**
 * Generates public/sitemap.xml and dist/client/sitemap.xml from the live
 * TOOLS and CATEGORIES registries. Runs after `vite build` via npm script.
 *
 * Usage:  npx tsx scripts/generate-sitemap.ts
 */

import { writeFileSync, existsSync } from 'fs';
import { TOOLS, CATEGORIES } from '../src/data/tools';
import { BLOG_POSTS } from '../src/data/blog';

const BASE_URL = 'https://www.whitescreenonline.app';
const today = new Date().toISOString().split('T')[0];

/* ── Priority rules ──────────────────────────────── */
const PRIORITY: Record<string, string> = {
  'solid-colors': '0.9',
  'timers':       '0.8',
  'prank-screens':'0.8',
  'screensavers': '0.7',
  'fake-updates': '0.7',
  'lighting':     '0.7',
  'entertainment':'0.6',
};

/* ── High-value tool overrides ───────────────────── */
const TOOL_PRIORITY_OVERRIDE: Record<string, string> = {
  'dead-pixel-test': '0.9',
  'pomodoro-timer':  '0.9',
  'black-screen':    '0.9',
};

/* ── Build URL list ──────────────────────────────── */
type UrlEntry = { loc: string; priority: string; changefreq: string; lastmod?: string };

const urls: UrlEntry[] = [
  // Homepage (white screen hero)
  { loc: `${BASE_URL}/`,              priority: '1.0', changefreq: 'weekly'  },

  // Category pages
  ...CATEGORIES.map(cat => ({
    loc:        `${BASE_URL}/category/${cat.slug}`,
    priority:   '0.8',
    changefreq: 'monthly',
  })),

  // Tool pages
  ...TOOLS.map(tool => ({
    loc:        `${BASE_URL}/tool/${tool.slug}`,
    priority:   TOOL_PRIORITY_OVERRIDE[tool.slug] ?? PRIORITY[tool.category] ?? '0.7',
    changefreq: 'monthly',
  })),

  // Blog index + posts
  { loc: `${BASE_URL}/blog`,           priority: '0.7', changefreq: 'monthly', lastmod: today },
  ...BLOG_POSTS.map(p => ({
    loc:        `${BASE_URL}/blog/${p.slug}`,
    priority:   '0.7',
    changefreq: 'monthly' as const,
    lastmod:    p.date,
  })),

  // Utility pages (no Favorites — noindex)
  { loc: `${BASE_URL}/about`,          priority: '0.5', changefreq: 'yearly' },
  { loc: `${BASE_URL}/privacy-policy`, priority: '0.3', changefreq: 'yearly' },
  { loc: `${BASE_URL}/terms`,          priority: '0.3', changefreq: 'yearly' },
];

/* ── Render XML ──────────────────────────────────── */
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.map(({ loc, priority, changefreq, lastmod }) =>
`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod ?? today}</lastmod>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
  </url>`).join('\n\n')}

</urlset>
`;

/* ── Write outputs ───────────────────────────────── */
// Always update the static file (used by dev server and as fallback)
writeFileSync('public/sitemap.xml', xml, 'utf-8');
console.log(`✓ public/sitemap.xml updated`);

// Also write to build output if it exists
if (existsSync('dist/client')) {
  writeFileSync('dist/client/sitemap.xml', xml, 'utf-8');
  console.log(`✓ dist/client/sitemap.xml updated`);
}

console.log(`✓ ${urls.length} URLs — lastmod ${today}`);
