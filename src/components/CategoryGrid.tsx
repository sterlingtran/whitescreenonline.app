import { Link } from 'react-router-dom';
import { Category, TOOLS } from '@/src/data/tools';
import { ToolCard } from './ToolCard';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface CategoryGridProps {
  categories: Category[];
  showFeaturedTools?: boolean;
}

export function CategoryGrid({ categories, showFeaturedTools = true }: CategoryGridProps) {
  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const categoryTools = TOOLS.filter((tool) => tool.category === category.id).slice(0, 4);
        const IconComponent = (LucideIcons as any)[category.icon] as LucideIcon | undefined;

        return (
          <div key={category.id}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                {IconComponent && <IconComponent size={28} className="text-blue-500" />}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {category.description}
              </p>
              <Link
                to={`/category/${category.slug}`}
                className="inline-block text-blue-500 hover:text-blue-600 font-medium text-sm"
              >
                View all {'->'}
              </Link>
            </div>

            {showFeaturedTools ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
