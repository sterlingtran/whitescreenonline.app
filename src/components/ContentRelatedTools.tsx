import { Link } from 'react-router-dom';

interface RelatedTool {
  slug: string;
  name: string;
}

interface Props {
  tools: RelatedTool[];
}

export function ContentRelatedTools({ tools }: Props) {
  return (
    <section style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 14 }}>
        See Also
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {tools.map(({ slug, name }) => (
          <Link
            key={slug}
            to={slug === 'white-screen' ? '/' : `/tool/${slug}`}
            style={{
              display: 'inline-block',
              padding: '7px 16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--text-2)',
              textDecoration: 'none',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--text)';
              e.currentTarget.style.borderColor = 'var(--text-3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-2)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            {name}
          </Link>
        ))}
      </div>
    </section>
  );
}
