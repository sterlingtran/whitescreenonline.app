import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { getBlogPost } from '@/src/data/blog';
import { PhoneScreenRingLight }  from '@/src/components/blog/PhoneScreenRingLight';
import { DeadPixelGuide }        from '@/src/components/blog/DeadPixelGuide';
import { WorkFromHomeFocus }     from '@/src/components/blog/WorkFromHomeFocus';
import { ColorTemperatureGuide } from '@/src/components/blog/ColorTemperatureGuide';
import { PomodoroStudyGuide }    from '@/src/components/blog/PomodoroStudyGuide';
import { OLEDBurnIn }            from '@/src/components/blog/OLEDBurnIn';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPost(slug!);

  if (!post) {
    return (
      <Layout>
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Post Not Found</h1>
          <button onClick={() => navigate('/blog')} className="btn btn-dark">Back to Blog</button>
        </div>
      </Layout>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'White Screen Online' },
    publisher: {
      '@type': 'Organization',
      name: 'White Screen Online',
      logo: { '@type': 'ImageObject', url: 'https://www.whitescreenonline.app/og-image.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.whitescreenonline.app/blog/${post.slug}` },
  };

  return (
    <Layout>
      <PageSEO
        title={`${post.title} — White Screen Online`}
        description={post.description}
        canonical={`https://www.whitescreenonline.app/blog/${post.slug}`}
        jsonLd={[articleSchema]}
      />

      <div className="wrap" style={{ maxWidth: 760, paddingTop: 36, paddingBottom: 72 }}>

        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-3)', marginBottom: 28 }}>
          <Link to="/" style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
            Home
          </Link>
          <ChevronRight size={11} />
          <Link to="/blog" style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
            Blog
          </Link>
          <ChevronRight size={11} />
          <span style={{ color: 'var(--text-2)', maxWidth: 260, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {post.title}
          </span>
        </nav>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--text-3)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 4,
              padding: '2px 8px',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="h1" style={{ marginBottom: 14, lineHeight: 1.25 }}>{post.title}</h1>

        {/* Meta */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontSize: 13, color: 'var(--text-3)', marginBottom: 36, flexWrap: 'wrap' }}>
          <span>By <strong style={{ color: 'var(--text-2)' }}>{post.author}</strong></span>
          <span>{formatDate(post.date)}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Clock size={12} />
            {post.readingTime} min read
          </span>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: 36 }} />

        {/* Post content */}
        {post.slug === 'phone-screen-as-ring-light'         && <PhoneScreenRingLight  post={post} />}
        {post.slug === 'how-to-test-monitor-dead-pixels'   && <DeadPixelGuide        post={post} />}
        {post.slug === 'best-focus-tools-working-from-home'&& <WorkFromHomeFocus     post={post} />}
        {post.slug === 'color-temperature-guide'           && <ColorTemperatureGuide post={post} />}
        {post.slug === 'pomodoro-technique-for-studying'   && <PomodoroStudyGuide    post={post} />}
        {post.slug === 'oled-burn-in-screensavers'         && <OLEDBurnIn            post={post} />}

        {/* Footer nav */}
        <div style={{ marginTop: 48, display: 'flex', gap: 20, fontSize: 14 }}>
          <Link to="/blog" style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
            ← All posts
          </Link>
          <Link to="/" style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
            Tools
          </Link>
        </div>

      </div>
    </Layout>
  );
}
