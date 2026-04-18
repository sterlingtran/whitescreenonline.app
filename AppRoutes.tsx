import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/src/components/ScrollToTop';

// Pages
import { Home } from '@/src/pages/Home';
import { ToolPage } from '@/src/pages/ToolPage';
import { CategoryPage } from '@/src/pages/CategoryPage';
import { Favorites } from '@/src/pages/Favorites';
import { About } from '@/src/pages/About';
import { PrivacyPolicy } from '@/src/pages/PrivacyPolicy';
import { Terms } from '@/src/pages/Terms';
import { NotFound } from '@/src/pages/NotFound';

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool/:toolSlug" element={<ToolPage />} />
        <Route path="/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
