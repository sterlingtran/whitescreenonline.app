import { Link } from 'react-router-dom';
import { getTool } from '@/src/data/tools';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ToolCard } from '@/src/components/ToolCard';
import { useFavorites } from '@/src/context/FavoritesContext';
import { Heart, ArrowRight, ChevronRight } from 'lucide-react';

export function Favorites() {
  const { favorites, clearFavorites } = useFavorites();
  const favoriteTools = Array.from(favorites)
    .map((slug) => getTool(slug))
    .filter((tool): tool is NonNullable<typeof tool> => tool !== undefined);

  return (
    <Layout>
      <PageSEO
        title="My Favorites - White Screen Online"
        description="Your bookmarked tools on White Screen Online"
        canonical="https://screenhub.app/favorites"
      />

      <div className="page-wrap py-12">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Home
              </Link>
            </li>
            <li><ChevronRight size={13} className="shrink-0" /></li>
            <li className="text-slate-700 dark:text-slate-300 font-medium">Favorites</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="flex items-start justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <Heart size={20} className="text-rose-500" fill="currentColor" />
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                My Favorites
              </h1>
            </div>
            <p className="text-slate-500 dark:text-slate-400 ml-13 pl-[52px]">
              {favoriteTools.length === 0
                ? "You haven't bookmarked any tools yet."
                : `${favoriteTools.length} saved tool${favoriteTools.length !== 1 ? 's' : ''}`}
            </p>
          </div>

          {favoriteTools.length > 0 && (
            <button
              onClick={() => {
                if (confirm('Clear all favorites?')) {
                  clearFavorites();
                }
              }}
              className="shrink-0 px-4 py-2 text-sm font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 hover:bg-rose-100 dark:hover:bg-rose-900/40 border border-rose-200 dark:border-rose-800 rounded-xl transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Tools grid or empty state */}
        {favoriteTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {favoriteTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60">
            <div className="w-20 h-20 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={36} className="text-rose-300 dark:text-rose-700" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No favorites yet</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto text-sm leading-relaxed">
              Click the heart icon on any tool card to save it here for quick access.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors"
            >
              Explore Tools
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

      </div>
    </Layout>
  );
}
