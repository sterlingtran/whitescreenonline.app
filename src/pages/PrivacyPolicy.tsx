import { Link } from 'react-router-dom';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ChevronRight } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <Layout>
      <PageSEO
        title="Privacy Policy - White Screen Online"
        description="Privacy policy for White Screen Online"
        canonical="https://www.whitescreenonline.app/privacy-policy"
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
            <li className="text-slate-700 dark:text-slate-300 font-medium">Privacy Policy</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-400">
              White Screen Online collects minimal personal information. Primarily, we collect usage analytics through Google Analytics to understand how users interact with our tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Local Storage</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We use browser local storage to save your preferences, favorites, and tool settings. This data is stored only on your device and never sent to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We use cookies for analytics and to store theme preferences. Google AdSense may also set cookies for targeted advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              White Screen Online uses Google Analytics and Google AdSense. These services may collect personal data for analytics and advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-400">
              You can clear your local storage and disable cookies in your browser settings. You can opt out of personalized ads in your Google account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Contact</h2>
            <p className="text-gray-600 dark:text-gray-400">
              For privacy inquiries, contact us at hello@whitescreenonline.app
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
