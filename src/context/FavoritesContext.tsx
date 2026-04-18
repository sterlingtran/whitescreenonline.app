import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface FavoritesContextType {
  favorites: Set<string>;
  addFavorite: (toolSlug: string) => void;
  removeFavorite: (toolSlug: string) => void;
  isFavorite: (toolSlug: string) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const saved = localStorage.getItem('screenhub_favorites');
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
    }
    return new Set();
  });

  // Persist to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('screenhub_favorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  const addFavorite = (toolSlug: string) => {
    setFavorites((prev) => new Set(prev).add(toolSlug));
  };

  const removeFavorite = (toolSlug: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.delete(toolSlug);
      return newSet;
    });
  };

  const isFavorite = (toolSlug: string) => {
    return favorites.has(toolSlug);
  };

  const clearFavorites = () => {
    setFavorites(new Set());
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
}
