import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import type { HelmetServerState } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './src/context/ThemeContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { AppRoutes } from './AppRoutes';

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState | null } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <ThemeProvider>
        <FavoritesProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </FavoritesProvider>
      </ThemeProvider>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}

// Export route data so prerender.js can build the URL list
export { TOOLS, CATEGORIES } from './src/data/tools';
export { BLOG_POSTS } from './src/data/blog';
