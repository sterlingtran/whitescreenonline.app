import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/src/context/ThemeContext';
import { FavoritesProvider } from '@/src/context/FavoritesContext';
import { ScrollToTop } from '@/src/components/ScrollToTop';

// Pages
import { Home } from '@/src/pages/Home';
import { ToolPage } from '@/src/pages/ToolPage';
import { CategoryPage } from '@/src/pages/CategoryPage';
import { Favorites } from '@/src/pages/Favorites';
import { PrivacyPolicy } from '@/src/pages/PrivacyPolicy';
import { Terms } from '@/src/pages/Terms';
import { NotFound } from '@/src/pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tool/:toolSlug" element={<ToolPage />} />
              <Route path="/category/:categorySlug" element={<CategoryPage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
