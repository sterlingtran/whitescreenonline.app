import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ToolCard } from '@/src/components/ToolCard';
import { FAQ } from '@/src/components/FAQ';
import { WhiteScreenContent } from '@/src/components/WhiteScreenContent';
import { ColorScreen } from '@/src/tools/ColorScreen';
import { TOOLS, CATEGORIES } from '@/src/data/tools';
import { getFAQs } from '@/src/data/faqs';

const homeFaqs = getFAQs('white-screen');
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};


/* ── Tools grouped by category (white-screen excluded — shown as hero) ── */
const categoryGroups = CATEGORIES.map(cat => ({
  ...cat,
  tools: TOOLS.filter(t => t.category === cat.id && t.slug !== 'white-screen'),
})).filter(g => g.tools.length > 0);

export function Home() {
  return (
    <Layout>
      <PageSEO
        title="White Screen Online - Free Monitor Test & Color Display Tools"
        description="Free white screen tool for monitor cleaning, dead pixel detection, photography lighting, and display testing. 30+ color screens, 480p to 8K download. No login."
        canonical="https://www.whitescreenonline.app/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'White Screen Online',
            url: 'https://www.whitescreenonline.app/',
            description: 'Free full-screen color tools for display testing and creative projects.',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'White Screen Online',
            url: 'https://www.whitescreenonline.app/',
            description: 'Free full-screen color display tools for monitor testing, dead pixel detection, photography lighting, and creative projects.',
            applicationCategory: 'UtilitiesApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          faqSchema,
        ]}
      />

      <div className="wrap" style={{ paddingTop: 36, paddingBottom: 72 }}>

        {/* ── Page heading ── */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h1 className="h1" style={{ marginBottom: 8 }}>White Screen Tool</h1>
          <p style={{ fontSize: 15, color: 'var(--text-2)', maxWidth: 480, margin: '0 auto' }}>
            Free full-screen color tools for display testing and creative projects
          </p>
        </div>

        {/* ── White screen tool ── */}
        <ColorScreen color="#FFFFFF" colorName="White" toolId="white-screen" />

        {/* ── All Tools — grouped by category ── */}
        <section style={{ marginTop: 52 }}>
          {categoryGroups.map((group, i) => (
            <div key={group.id} style={{ marginBottom: i < categoryGroups.length - 1 ? 44 : 0 }}>
              <h2 style={{
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: 16,
              }}>
                {group.name}
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: 10,
              }}>
                {group.tools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} variant="landscape" />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── White screen rich content ── */}
        <section style={{ marginTop: 56 }}>
          <hr className="divider" style={{ marginBottom: 40 }} />
          <WhiteScreenContent />
        </section>

        {/* ── FAQ ── */}
        <section style={{ marginTop: 52 }}>
          <h2 className="h2" style={{ marginBottom: 6 }}>Frequently Asked Questions</h2>
          <p className="label" style={{ marginBottom: 16 }}>
            Everything you need to know about white screen.
          </p>
          <FAQ faqs={homeFaqs} />
        </section>

      </div>
    </Layout>
  );
}
