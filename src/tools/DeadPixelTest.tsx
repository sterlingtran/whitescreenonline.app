import { useState, useEffect, useRef, useCallback } from 'react';
import { useFullscreen } from '@/src/hooks/useFullscreen';
import { Maximize2 } from 'lucide-react';

/* ── Test colors ─────────────────────────────────────── */
const TEST_COLORS = [
  { name: 'Black',   hex: '#000000' },
  { name: 'White',   hex: '#FFFFFF' },
  { name: 'Red',     hex: '#FF0000' },
  { name: 'Green',   hex: '#00FF00' },
  { name: 'Blue',    hex: '#0000FF' },
  { name: 'Cyan',    hex: '#00FFFF' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Yellow',  hex: '#FFFF00' },
  { name: 'Gray',    hex: '#808080' },
];

/* ── Mobile aspect ratios ────────────────────────────── */
const ASPECT_RATIOS = [
  { ratio: '16:9',   desc: 'Standard HD' },
  { ratio: '18:9',   desc: 'Tall display' },
  { ratio: '19.5:9', desc: 'Modern phone' },
  { ratio: '20:9',   desc: 'Ultra-tall' },
  { ratio: '21:9',   desc: 'Cinema' },
  { ratio: '4:3',    desc: 'Classic' },
];

/* ── Component ───────────────────────────────────────── */
export function DeadPixelTest() {
  const [mode, setMode] = useState<'desktop' | 'mobile'>('desktop');
  const [colorIdx, setColorIdx] = useState(0);
  const [autoCycle, setAutoCycle] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const { ref, enter, exit, isFullscreen } = useFullscreen();
  const autoCycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = TEST_COLORS[colorIdx];

  /* nav helpers */
  const prev = useCallback(() => setColorIdx(i => (i - 1 + TEST_COLORS.length) % TEST_COLORS.length), []);
  const next = useCallback(() => setColorIdx(i => (i + 1) % TEST_COLORS.length), []);

  /* keyboard shortcuts */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if ((e.key === 'f' || e.key === 'F' || e.key === ' ') && !isFullscreen) {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFullscreen, enter, prev, next]);

  /* auto-cycle in fullscreen */
  useEffect(() => {
    if (autoCycle && isFullscreen) {
      autoCycleRef.current = setInterval(next, 2500);
    } else {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    }
    return () => { if (autoCycleRef.current) clearInterval(autoCycleRef.current); };
  }, [autoCycle, isFullscreen, next]);

  /* detect if text should be dark or light based on current color */
  const isLightColor = ['#FFFFFF', '#00FF00', '#00FFFF', '#FFFF00'].includes(current.hex);
  const textColor = isLightColor ? '#000000' : '#FFFFFF';

  /* aspect ratio string → CSS padding-bottom */
  const ratioPad = (r: string) => {
    const [w, h] = r.split(':').map(Number);
    return `${(h / w * 100).toFixed(2)}%`;
  };

  return (
    <div>
      {/* ── Mode toggle ── */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {(['desktop', 'mobile'] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border-md)',
              background: mode === m ? 'var(--text)' : 'var(--surface)',
              color: mode === m ? 'var(--bg)' : 'var(--text-2)',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {m === 'desktop' ? 'Desktop Test' : 'Mobile Test'}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* ── Left: preview (desktop) or mobile frame ── */}
        <div style={{ flex: '1 1 300px', minWidth: 0 }}>

          {mode === 'desktop' ? (
            /* Desktop fullscreen preview */
            <div
              ref={ref}
              onClick={() => isFullscreen ? exit() : undefined}
              style={{
                width: '100%',
                aspectRatio: '16/9',
                backgroundColor: current.hex,
                borderRadius: isFullscreen ? 0 : 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                cursor: isFullscreen ? 'none' : 'default',
                border: isFullscreen ? 'none' : '1px solid var(--border)',
              }}
            >
              {/* Color name overlay in fullscreen */}
            </div>
          ) : (
            /* Mobile frame */
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: 180,
                  paddingBottom: ratioPad(aspectRatio),
                  backgroundColor: current.hex,
                  borderRadius: 20,
                  border: '6px solid #222',
                  boxShadow: '0 0 0 2px #555, 0 8px 32px rgba(0,0,0,0.35)',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                {/* Notch */}
                <div style={{
                  position: 'absolute',
                  top: 6,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 8,
                  background: '#111',
                  borderRadius: 4,
                  zIndex: 2,
                }} />
                {/* Color name */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 700,
                  color: textColor,
                  letterSpacing: '0.05em',
                  opacity: 0.6,
                }}>
                  {current.name}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Right: settings panel ── */}
        <div style={{ flex: '0 0 260px', minWidth: 220 }}>

          {/* Mobile: aspect ratio selector */}
          {mode === 'mobile' && (
            <div className="card" style={{ marginBottom: 12, padding: '16px' }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Screen Aspect Ratio
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {ASPECT_RATIOS.map(ar => (
                  <button
                    key={ar.ratio}
                    onClick={() => setAspectRatio(ar.ratio)}
                    style={{
                      padding: '8px 10px',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--border-md)',
                      background: aspectRatio === ar.ratio ? 'var(--text)' : 'var(--surface)',
                      color: aspectRatio === ar.ratio ? 'var(--bg)' : 'var(--text)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.2 }}>{ar.ratio}</div>
                    <div style={{ fontSize: 11, color: aspectRatio === ar.ratio ? 'rgba(255,255,255,0.7)' : 'var(--text-3)', marginTop: 2 }}>{ar.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Test settings card */}
          <div className="card" style={{ padding: '16px' }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Test Settings
            </p>

            {/* Info */}
            <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5, marginBottom: 14 }}>
              Test includes 9 solid colors: Black, White, Red, Green, Blue, Cyan, Magenta, Yellow, and Gray.
            </p>

            {/* Current color label */}
            <p style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 8 }}>
              Current Test Color: <strong style={{ color: 'var(--text)' }}>{current.name}</strong>
            </p>

            {/* Color swatch preview */}
            <div style={{
              width: '100%',
              height: 48,
              backgroundColor: current.hex,
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border-md)',
              marginBottom: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: textColor, opacity: 0.7 }}>
                {current.hex.toUpperCase()}
              </span>
            </div>

            {/* Color dots */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 12, flexWrap: 'wrap' }}>
              {TEST_COLORS.map((c, i) => (
                <button
                  key={c.hex}
                  onClick={() => setColorIdx(i)}
                  title={c.name}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: c.hex,
                    border: i === colorIdx
                      ? '2px solid var(--text)'
                      : '1px solid var(--border-md)',
                    boxShadow: i === colorIdx ? '0 0 0 2px var(--bg), 0 0 0 3px var(--text)' : undefined,
                    cursor: 'pointer',
                    transition: 'transform 0.1s',
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              <button
                onClick={prev}
                style={{
                  flex: 1,
                  padding: '8px 0',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border-md)',
                  background: 'var(--surface)',
                  color: 'var(--text)',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                ← Previous
              </button>
              <button
                onClick={next}
                style={{
                  flex: 1,
                  padding: '8px 0',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border-md)',
                  background: 'var(--surface)',
                  color: 'var(--text)',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Next →
              </button>
            </div>

            {/* Auto-cycle toggle */}
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', marginBottom: 14 }}>
              <input
                type="checkbox"
                checked={autoCycle}
                onChange={e => setAutoCycle(e.target.checked)}
                style={{ accentColor: 'var(--text)', width: 14, height: 14 }}
              />
              <span style={{ fontSize: 13, color: 'var(--text-2)' }}>
                Auto-cycle colors in fullscreen
              </span>
            </label>

            {/* Start button */}
            {mode === 'desktop' && (
              <button
                onClick={enter}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  padding: '10px 0',
                  borderRadius: 'var(--radius)',
                  border: 'none',
                  background: 'var(--text)',
                  color: 'var(--bg)',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginBottom: 10,
                }}
              >
                <Maximize2 size={14} />
                Start Dead Pixel Test
              </button>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
