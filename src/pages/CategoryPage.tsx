import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getCategory, getToolsByCategory } from '@/src/data/tools';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ToolCard } from '@/src/components/ToolCard';

export function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const category = getCategory(categorySlug!);
  const tools = getToolsByCategory(categorySlug!);

  if (!category) {
    return (
      <Layout>
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Category Not Found</h1>
          <button onClick={() => navigate('/')} className="btn btn-dark">Back to Home</button>
        </div>
      </Layout>
    );
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whitescreenonline.app/' },
      { '@type': 'ListItem', position: 2, name: category.name, item: `https://whitescreenonline.app/category/${category.slug}` },
    ],
  };

  return (
    <Layout>
      <PageSEO
        title={`${category.name} — Free Online Tools | White Screen Online`}
        description={`${category.description} Browse all ${tools.length} free tools. No login required.`}
        canonical={`https://whitescreenonline.app/category/${category.slug}`}
        jsonLd={breadcrumbSchema}
      />

      <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>

        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-3)', marginBottom: 24 }}>
          <Link to="/" style={{ color: 'var(--text-3)' }} onMouseEnter={e => (e.currentTarget.style.color='var(--text)')} onMouseLeave={e => (e.currentTarget.style.color='var(--text-3)')}>Home</Link>
          <ChevronRight size={11} />
          <span style={{ color: 'var(--text-2)' }}>{category.name}</span>
        </nav>

        <h1 className="h1" style={{ marginBottom: 8 }}>{category.name}</h1>
        <p className="body-sm" style={{ marginBottom: 28 }}>{category.description}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 10,
        }}>
          {tools.map(t => <ToolCard key={t.id} tool={t} />)}
        </div>
      </div>
    </Layout>
  );
}
