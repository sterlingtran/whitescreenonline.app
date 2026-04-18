import { Link } from 'react-router-dom';
import { CATEGORIES } from '@/src/data/tools';

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'auto' });

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)',
      padding: '20px 0',
      marginTop: 'auto',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>
          &copy; {new Date().getFullYear()} White Screen Online. All rights reserved.
        </span>
        <nav aria-label="Footer links" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[
            { label: 'About',    href: '/about' },
            { label: 'Blog',     href: '/blog' },
            { label: 'Contact',  href: 'mailto:hello@whitescreenonline.app', external: true },
            { label: 'Privacy',  href: '/privacy-policy' },
            { label: 'Terms',    href: '/terms' },
          ].map(({ label, href, external }) =>
            external ? (
              <a key={href} href={href} style={{ fontSize: 13, color: 'var(--text-2)', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
              >
                {label}
              </a>
            ) : (
              <Link key={href} to={href} onClick={scrollTop} style={{ fontSize: 13, color: 'var(--text-2)', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
              >
                {label}
              </Link>
            )
          )}
        </nav>
        <nav aria-label="Tool categories" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', flexBasis: '100%', paddingTop: 8 }}>
          {CATEGORIES.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              onClick={scrollTop}
              style={{ fontSize: 12, color: 'var(--text-3)', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
