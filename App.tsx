import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/src/context/ThemeContext';
import { FavoritesProvider } from '@/src/context/FavoritesContext';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </FavoritesProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
