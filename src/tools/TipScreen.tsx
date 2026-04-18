import { useState, useEffect } from 'react';
import { useFullscreen } from '@/src/hooks/useFullscreen';
import { Maximize2 } from 'lucide-react';

const BLUE       = '#2563eb';
const BLUE_DARK  = '#1e40af';

export function TipScreen() {
  const [subtotalInput, setSubtotalInput] = useState('10.00');
  const [percentages, setPercentages]     = useState([15, 20, 25]);
  const [selected, setSelected]           = useState<number | 'no-tip' | null>(null);
  const { ref, enter, exit, isFullscreen } = useFullscreen();

  const subtotal   = Math.max(0, parseFloat(subtotalInput) || 0);
  const tipAmounts = percentages.map(p => (subtotal * p) / 100);
  const tipValue   = typeof selected === 'number' ? tipAmounts[selected] : 0;
  const total      = selected !== null ? subtotal + tipValue : null;

  /* reset selection when leaving fullscreen */
  useEffect(() => { if (!isFullscreen) setSelected(null); }, [isFullscreen]);

  /* keyboard: F / Space → enter fullscreen */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT','TEXTAREA','SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
      if ((e.key === 'f' || e.key === 'F' || e.key === ' ') && !isFullscreen) {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFullscreen, enter]);

  const updatePct = (idx: number, val: string) => {
    const n = Math.min(100, Math.max(0, parseInt(val) || 0));
    setPercentages(p => p.map((v, i) => i === idx ? n : v));
  };

  /* ── Shared tip button group ────────────────────── */
  const TipButtons = ({ large }: { large: boolean }) => (
    <div style={{ width: '100%', maxWidth: large ? 520 : '100%' }}>

      {/* Subtotal — fullscreen only */}
      {large && (
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <p style={{ fontSize: 15, color: '#888', marginBottom: 4 }}>Subtotal</p>
          <p style={{ fontSize: 42, fontWeight: 700, color: '#111', lineHeight: 1 }}>
            ${subtotal.toFixed(2)}
          </p>
        </div>
      )}

      <h2 style={{
        textAlign: 'center',
        fontSize: large ? 30 : 17,
        fontWeight: 700,
        color: large ? '#111' : 'var(--text)',
        marginBottom: large ? 22 : 14,
      }}>
        Add a Tip
      </h2>

      {/* Percentage buttons */}
      <div style={{ display: 'flex', gap: large ? 14 : 10, marginBottom: large ? 14 : 10 }}>
        {percentages.map((pct, i) => {
          const active = selected === i;
          return (
            <button
              key={i}
              onClick={() => large ? setSelected(i) : undefined}
              style={{
                flex: 1,
                padding: `${large ? 20 : 13}px 0`,
                borderRadius: large ? 12 : 8,
                border: active ? `2.5px solid ${BLUE_DARK}` : 'none',
                background: active ? BLUE_DARK : BLUE,
                color: '#fff',
                cursor: large ? 'pointer' : 'default',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                transition: 'background 0.12s, transform 0.1s',
                transform: active ? 'scale(1.03)' : 'scale(1)',
                boxShadow: active ? `0 0 0 3px rgba(37,99,235,0.35)` : '0 1px 4px rgba(0,0,0,0.12)',
              }}
            >
              <span style={{ fontSize: large ? 22 : 16, fontWeight: 700 }}>{pct}%</span>
              <span style={{ fontSize: large ? 14 : 12, opacity: 0.88 }}>
                ${tipAmounts[i].toFixed(2)}
              </span>
            </button>
          );
        })}
      </div>

      {/* No Tip */}
      <button
        onClick={() => large ? setSelected('no-tip') : undefined}
        style={{
          width: '100%',
          padding: `${large ? 17 : 11}px 0`,
          borderRadius: large ? 12 : 8,
          border: selected === 'no-tip' ? `2.5px solid ${BLUE_DARK}` : 'none',
          background: selected === 'no-tip' ? BLUE_DARK : BLUE,
          color: '#fff',
          fontSize: large ? 17 : 14,
          fontWeight: 700,
          cursor: large ? 'pointer' : 'default',
          transition: 'background 0.12s',
          boxShadow: selected === 'no-tip' ? `0 0 0 3px rgba(37,99,235,0.35)` : '0 1px 4px rgba(0,0,0,0.12)',
        }}
      >
        No Tip
      </button>

      {/* Total — shown after selection in fullscreen */}
      {large && total !== null && (
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <p style={{ fontSize: 15, color: '#888', marginBottom: 4 }}>Total</p>
          <p style={{ fontSize: 44, fontWeight: 700, color: '#111', lineHeight: 1, marginBottom: 20 }}>
            ${total.toFixed(2)}
          </p>
          <button
            onClick={exit}
            style={{
              padding: '10px 32px',
              borderRadius: 8,
              border: '1px solid #ddd',
              background: '#fff',
              color: '#555',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );

  /* ── Render ─────────────────────────────────────── */
  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        background: isFullscreen ? '#f2f4f8' : 'transparent',
        ...(isFullscreen && {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 40px',
        }),
      }}
    >
      {isFullscreen ? (
        <TipButtons large />
      ) : (
        <>
          {/* ── Fullscreen entry button ── */}
          <div style={{ textAlign: 'center', marginBottom: 22 }}>
            <button
              onClick={enter}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '13px 32px',
                background: BLUE,
                color: '#fff',
                borderRadius: 12,
                border: 'none',
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(37,99,235,0.3)',
              }}
            >
              <Maximize2 size={16} />
              Click to Fullscreen
            </button>
          </div>

          {/* ── Settings card ── */}
          <div className="card" style={{ padding: '24px 28px' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 22, color: 'var(--text)' }}>
              Customize Tip Screen
            </h3>

            {/* Subtotal */}
            <p style={{ fontSize: 13, color: BLUE, fontWeight: 500, marginBottom: 8 }}>
              Subtotal Amount
            </p>
            <div style={{ display: 'flex', alignItems: 'stretch', marginBottom: 22 }}>
              <span style={{
                padding: '12px 12px 12px 16px',
                border: '1px solid var(--border-md)',
                borderRight: 'none',
                borderRadius: '8px 0 0 8px',
                fontSize: 16,
                color: 'var(--text-2)',
                background: 'var(--bg)',
                display: 'flex',
                alignItems: 'center',
              }}>$</span>
              <input
                type="number"
                min={0}
                step={0.01}
                value={subtotalInput}
                onChange={e => setSubtotalInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 14px',
                  border: '1px solid var(--border-md)',
                  borderRadius: '0 8px 8px 0',
                  fontSize: 16,
                  background: 'var(--surface)',
                  color: 'var(--text)',
                  outline: 'none',
                }}
              />
            </div>

            {/* Tip percentages */}
            <p style={{ fontSize: 13, color: BLUE, fontWeight: 500, marginBottom: 10 }}>
              Tip Percentages
            </p>
            <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
              {percentages.map((p, i) => (
                <input
                  key={i}
                  type="number"
                  min={0}
                  max={100}
                  value={p}
                  onChange={e => updatePct(i, e.target.value)}
                  style={{
                    flex: 1,
                    padding: '12px 0',
                    textAlign: 'center',
                    border: '1px solid var(--border-md)',
                    borderRadius: 8,
                    fontSize: 16,
                    background: 'var(--surface)',
                    color: 'var(--text)',
                    outline: 'none',
                  }}
                />
              ))}
            </div>

            {/* Preview */}
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '20px',
            }}>
              <TipButtons large={false} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
