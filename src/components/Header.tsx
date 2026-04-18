import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkStyle = (path: string): React.CSSProperties => ({
    fontSize: 14,
    color: location.pathname === path ? 'var(--text)' : 'var(--text-2)',
    fontWeight: location.pathname === path ? 600 : 400,
    transition: 'color 0.15s',
  });

  const goHome = async (event?: React.MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    setOpen(false);

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
            { label: 'Favorites', to: '/favorites' },
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
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
