import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CONSENT_KEY = 'wso_cookie_consent';

function grantConsent() {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      analytics_storage:  'granted',
      ad_storage:         'granted',
      ad_user_data:       'granted',
      ad_personalization: 'granted',
    });
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted') {
      grantConsent();
    } else if (!stored) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    grantConsent();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.08)',
      }}
    >
      <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, flex: '1 1 280px', margin: 0 }}>
        We use cookies for analytics (Google Analytics) and advertising (Google AdSense).{' '}
        <Link to="/privacy-policy" style={{ color: 'var(--text)', textDecoration: 'underline' }}>
          Privacy Policy
        </Link>
      </p>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            fontSize: 13,
            color: 'var(--text-3)',
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '6px 14px',
            cursor: 'pointer',
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#fff',
            background: 'var(--accent)',
            border: 'none',
            borderRadius: 'var(--radius)',
            padding: '6px 16px',
            cursor: 'pointer',
          }}
        >
          Accept
        </button>
        <button
          onClick={decline}
          aria-label="Close"
          style={{
            background: 'none',
            border: 'none',
            padding: 4,
            cursor: 'pointer',
            color: 'var(--text-3)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
