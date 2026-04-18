import { Link } from 'react-router-dom';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ChevronRight } from 'lucide-react';

export function Terms() {
  return (
    <Layout>
      <PageSEO
        title="Terms of Service - White Screen Online"
        description="Terms of service for White Screen Online"
        canonical="https://www.whitescreenonline.app/terms"
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Home
              </Link>
            </li>
            <li><ChevronRight size={13} className="shrink-0" /></li>
            <li className="text-slate-700 dark:text-slate-300 font-medium">Terms of Service</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Use License</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Permission is granted to temporarily download one copy of the materials (information or software) on White Screen Online for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on White Screen Online</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The materials on White Screen Online are provided on an 'as is' basis. White Screen Online makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Limitations</h2>
            <p className="text-gray-600 dark:text-gray-400">
              In no event shall White Screen Online or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on White Screen Online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Accuracy of Materials</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The materials appearing on White Screen Online could include technical, typographical, or photographic errors. White Screen Online does not warrant that any of the materials on this website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Links</h2>
            <p className="text-gray-600 dark:text-gray-400">
              White Screen Online has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by White Screen Online of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Modifications</h2>
            <p className="text-gray-600 dark:text-gray-400">
              White Screen Online may revise these terms of service for this website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-400">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which White Screen Online operates.
            </p>
          </section>
        </div>

        <div className="mt-10">
          <Link to="/" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
