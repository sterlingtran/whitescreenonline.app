import { Link } from 'react-router-dom';

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
          © {new Date().getFullYear()} White Screen Online. All rights reserved.
        </span>
        <nav style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[
            { label: 'Contact',  href: 'mailto:hello@screenhub.app', external: true },
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
      </div>
    </footer>
  );
}
