import { Link } from 'react-router-dom';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <Layout>
      <PageSEO
        title="Page Not Found - White Screen Online"
        description="This page does not exist"
      />

      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <AlertCircle className="mx-auto text-gray-400 dark:text-gray-600 mb-6" size={64} />
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Page Not Found
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
        >
          <ArrowLeft size={16} />
          Go Home
        </Link>
      </div>
    </Layout>
  );
}
