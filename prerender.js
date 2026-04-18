/**
 * Static prerender script — runs after vite build to generate per-route HTML files.
 * Usage: node prerender.js  (called automatically by npm run build)
 *
 * React 19 hoists <title>, <meta>, and <link> elements to the beginning of the
 * rendered HTML string (before the first <div from the Layout component).
 * This script:
 *   1. Strips the default/fallback SEO tags from the template (they duplicate per-page ones)
 *   2. Splits the rendered output at the Layout boundary
 *   3. Injects per-page head tags into <!--app-head-->
 *   4. Injects page content into <!--app-html-->
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Prerendering routes...');

const { render, TOOLS, CATEGORIES } = await import('./dist/server/entry-server.js');

const routes = [
  '/',
  ...CATEGORIES.map((c) => `/category/${c.slug}`),
  ...TOOLS.map((t) => `/tool/${t.slug}`),
  '/about',
  '/privacy-policy',
  '/terms',
];

// Read the Vite-processed client index.html
const rawTemplate = readFileSync(resolve(__dirname, 'dist/client/index.html'), 'utf-8');

/**
 * Remove the base/fallback SEO tags from the template.
 * These are replaced per-page by Helmet — keeping both causes duplicates.
 * og:site_name and robots defaults are kept (Helmet doesn't set those per-page).
 */
function stripDefaultSeoTags(html) {
  return html
    .replace(/\n\s*<title>[^<]*<\/title>/g, '')
    .replace(/\n\s*<meta name="description"[^>]*>/g, '')
    .replace(/\n\s*<meta property="og:type"[^>]*>/g, '')
    .replace(/\n\s*<meta property="og:title"[^>]*>/g, '')
    .replace(/\n\s*<meta property="og:description"[^>]*>/g, '')
    .replace(/\n\s*<meta property="og:image"[^>]*>/g, '')
    .replace(/\n\s*<meta property="og:url"[^>]*>/g, '')
    .replace(/\n\s*<meta name="twitter:card"[^>]*>/g, '')
    .replace(/\n\s*<meta name="twitter:title"[^>]*>/g, '')
    .replace(/\n\s*<meta name="twitter:description"[^>]*>/g, '')
    .replace(/\n\s*<meta name="twitter:image"[^>]*>/g, '')
    .replace(/\n\s*<link rel="canonical"[^>]*>/g, '')
    .replace('\n    <!-- Default SEO (overridden per-page by react-helmet-async) -->', '')
    .replace('\n    <!-- Open Graph -->', '')
    .replace('\n    <!-- Twitter Card -->', '');
}

/**
 * React 19 places hoisted head elements (<title>, <meta>, <link>) at the very
 * start of the rendered HTML string, before any real component div.
 * Split on the first '<div ' to separate them from the page body.
 */
function splitRenderedHtml(html) {
  const bodyStart = html.indexOf('<div ');
  if (bodyStart <= 0) {
    return { headContent: '', bodyContent: html };
  }
  return {
    headContent: html.substring(0, bodyStart).trim(),
    bodyContent: html.substring(bodyStart),
  };
}

const template = stripDefaultSeoTags(rawTemplate);

let success = 0;
let failed = 0;

for (const url of routes) {
  try {
    const { html } = render(url);
    const { headContent, bodyContent } = splitRenderedHtml(html);

    const page = template
      .replace('<!--app-head-->', headContent)
      .replace('<!--app-html-->', bodyContent);

    const filePath =
      url === '/'
        ? resolve(__dirname, 'dist/client/index.html')
        : resolve(__dirname, `dist/client${url}/index.html`);

    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, page, 'utf-8');
    success++;
    console.log(`  ✓ ${url}`);
  } catch (err) {
    failed++;
    console.error(`  ✗ ${url}: ${err.message}`);
  }
}

console.log(`\nPrerender: ${success} pages written, ${failed} failed.`);
if (failed > 0) process.exit(1);
