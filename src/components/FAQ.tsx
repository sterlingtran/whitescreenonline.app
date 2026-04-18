import { useState } from 'react';

export function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface)' }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid var(--border)' : 'none' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%', textAlign: 'left',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
              padding: '16px 20px',
              background: 'none', border: 'none',
              fontSize: 14, fontWeight: 500, color: 'var(--text)',
              cursor: 'pointer',
            }}
          >
            <span>{faq.q}</span>
            <span style={{ fontSize: 20, lineHeight: 1, color: 'var(--text-3)', flexShrink: 0 }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <p style={{ padding: '0 20px 16px', fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
