import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CATEGORIES } from '@/src/data/tools';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const linkStyle = (path: string): React.CSSProperties => ({
    fontSize: 14,
    color: location.pathname === path ? 'var(--text)' : 'var(--text-2)',
    fontWeight: location.pathname === path ? 600 : 400,
    transition: 'color 0.15s',
  });

  const categoryActive = location.pathname.startsWith('/category/');

  const goHome = async (event?: React.MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    setOpen(false);
    setCategoriesOpen(false);

    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => undefined);
    }

    navigate('/');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(249,249,249,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 52 }}>

        {/* Logo */}
        <Link
          to="/"
          onClick={goHome}
          style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em', color: 'var(--text)' }}
        >
          White Screen Online
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
          <Link to="/" style={linkStyle('/')} onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')} onMouseLeave={e => (e.currentTarget.style.color = location.pathname === '/' ? 'var(--text)' : 'var(--text-2)')}>Home</Link>
          <div className="category-menu" style={{ position: 'relative' }}>
            <button
              type="button"
              aria-expanded={categoriesOpen}
              aria-haspopup="true"
              onClick={() => setCategoriesOpen(current => !current)}
              style={{
                fontSize: 14,
                color: categoryActive ? 'var(--text)' : 'var(--text-2)',
                fontWeight: categoryActive ? 600 : 400,
                transition: 'color 0.15s',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = categoryActive ? 'var(--text)' : 'var(--text-2)')}
            >
              Categories
            </button>
            <div className={`category-dropdown ${categoriesOpen ? 'is-open' : ''}`}>
              {CATEGORIES.map(category => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="category-dropdown-link"
                  onClick={() => setCategoriesOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/blog" style={linkStyle('/blog')} onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')} onMouseLeave={e => (e.currentTarget.style.color = location.pathname.startsWith('/blog') ? 'var(--text)' : 'var(--text-2)')}>Blog</Link>
          <Link to="/favorites" style={linkStyle('/favorites')} onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')} onMouseLeave={e => (e.currentTarget.style.color = location.pathname === '/favorites' ? 'var(--text)' : 'var(--text-2)')}>Favorites</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 4, background: 'none', border: 'none' }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 20, height: 1.5, background: 'var(--text)', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 20, height: 1.5, background: 'var(--text)', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 20, height: 1.5, background: 'var(--text)', borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', padding: '12px 20px 16px' }} className="mobile-nav">
          {[
            { label: 'Home', to: '/' },
            { label: 'Blog', to: '/blog' },
            { label: 'Favorites', to: '/favorites' },
            ...CATEGORIES.map(category => ({
              label: category.name,
              to: `/category/${category.slug}`,
            })),
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={to === '/' ? goHome : () => setOpen(false)}
              style={{ display: 'block', padding: '10px 0', fontSize: 15, color: 'var(--text-2)', borderBottom: '1px solid var(--border)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .category-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 50%;
          transform: translateX(50%) translateY(-4px);
          width: 230px;
          padding: 8px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s, transform 0.15s;
        }

        .category-menu::after {
          content: '';
          position: absolute;
          left: -12px;
          right: -12px;
          top: 100%;
          height: 14px;
        }

        .category-menu:hover .category-dropdown,
        .category-menu:focus-within .category-dropdown,
        .category-dropdown.is-open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(50%) translateY(0);
        }

        .category-dropdown-link {
          display: block;
          padding: 9px 10px;
          border-radius: var(--radius-sm);
          color: var(--text-2);
          font-size: 13px;
          transition: background 0.15s, color 0.15s;
        }

        .category-dropdown-link:hover {
          background: var(--bg);
          color: var(--text);
        }

        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
