import { Link } from 'react-router-dom';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ChevronRight, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/src/data/blog';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function Blog() {
  return (
    <Layout>
      <PageSEO
        title="Blog — White Screen Online"
        description="Tips, guides, and how-tos for display testing, lighting for video calls, productivity tools, and more. From the team at White Screen Online."
        canonical="https://www.whitescreenonline.app/blog"
      />

      <div className="wrap" style={{ maxWidth: 760, paddingTop: 36, paddingBottom: 72 }}>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-3)', marginBottom: 28 }}>
          <Link to="/" style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
            Home
          </Link>
          <ChevronRight size={11} />
          <span style={{ color: 'var(--text-2)' }}>Blog</span>
        </nav>

        <h1 className="h1" style={{ marginBottom: 6 }}>Blog</h1>
        <p style={{ fontSize: 15, color: 'var(--text-2)', marginBottom: 40 }}>
          Guides and tips for getting the most out of your screen.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {BLOG_POSTS.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <article
                style={{
                  padding: '24px 28px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--text-3)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
              >
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: 'var(--text-3)',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 4,
                      padding: '2px 8px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 8, lineHeight: 1.35 }}>
                  {post.title}
                </h2>

                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 14 }}>
                  {post.description}
                </p>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontSize: 12, color: 'var(--text-3)' }}>
                  <span>{formatDate(post.date)}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={11} />
                    {post.readingTime} min read
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 48, fontSize: 14 }}>
          <Link to="/" style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
            ← Back to tools
          </Link>
        </div>

      </div>
    </Layout>
  );
}
