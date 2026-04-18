import { useState, useEffect } from 'react';
import { useFullscreen } from '@/src/hooks/useFullscreen';

interface ColorScreenProps {
  color: string;       // base hex e.g. "#EF4444"
  colorName: string;
  toolId?: string;
}

/* ── Color math ─────────────────────────────────── */
function hexToRgb(hex: string) {
  const c = hex.replace('#', '');
  if (c.length !== 6) return { r: 0, g: 0, b: 0 };
  const n = parseInt(c, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHex(r: number, g: number, b: number) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
}

function rgbToHsl(r: number, g: number, b: number) {
  const rr = r / 255, gg = g / 255, bb = b / 255;
  const max = Math.max(rr, gg, bb), min = Math.min(rr, gg, bb);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rr: h = ((gg - bb) / d + (gg < bb ? 6 : 0)) / 6; break;
      case gg: h = ((bb - rr) / d + 2) / 6; break;
      case bb: h = ((rr - gg) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h: number, s: number, l: number) {
  const hh = h / 360, ss = s / 100, ll = l / 100;
  if (ss === 0) {
    const v = Math.round(ll * 255);
    return { r: v, g: v, b: v };
  }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = ll < 0.5 ? ll * (1 + ss) : ll + ss - ll * ss;
  const p = 2 * ll - q;
  return {
    r: Math.round(hue2rgb(p, q, hh + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, hh) * 255),
    b: Math.round(hue2rgb(p, q, hh - 1 / 3) * 255),
  };
}

function hexToHsl(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHsl(r, g, b);
}

/* ── Resolution presets ─────────────────────────── */
const PRESETS = [
  { label: '480p',  w: 854,  h: 480  },
  { label: '720p',  w: 1280, h: 720  },
  { label: '1080p', w: 1920, h: 1080 },
  { label: '1440p', w: 2560, h: 1440 },
  { label: '2K',    w: 2048, h: 1080 },
  { label: '4K',    w: 3840, h: 2160 },
  { label: '8K',    w: 7680, h: 4320 },
];

/* ── Shared input style ─────────────────────────── */
const inputSx: React.CSSProperties = {
  padding: '8px 10px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--border-md)',
  fontSize: 14,
  background: 'var(--surface)',
  color: 'var(--text)',
  width: '100%',
};

const labelSx: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--text-2)',
  marginBottom: 6,
  display: 'block',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
};

/* ── Component ──────────────────────────────────── */
export function ColorScreen({ color, colorName }: ColorScreenProps) {
  const { ref, enter, exit, isFullscreen } = useFullscreen();

  // Derive initial HSL from the base color prop
  const baseHsl = hexToHsl(color);
  const defaultL = baseHsl.l;

  // Color state — drive everything from HSL
  const [hsl, setHsl] = useState(baseHsl);
  const [hexInput, setHexInput] = useState(color.toUpperCase());

  // Reset all colour state when the base colour prop changes (navigating between tool pages)
  useEffect(() => {
    const next = hexToHsl(color);
    setHsl(next);
    setHexInput(color.toUpperCase());
  }, [color]);

  // Derived values
  const currentRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
  const currentHex = rgbToHex(currentRgb.r, currentRgb.g, currentRgb.b).toUpperCase();

  // Keep hexInput in sync unless user is mid-typing
  useEffect(() => { setHexInput(currentHex); }, [currentHex]);

  // Resolution state
  const [activePreset, setActivePreset] = useState('1080p');
  const [customW, setCustomW] = useState(1920);
  const [customH, setCustomH] = useState(1080);

  /* ── Apply helpers ─────────────────────────────── */
  const applyHsl = (h: number, s: number, l: number) => {
    setHsl({ h, s, l });
  };

  const applyHex = (hex: string) => {
    const clean = hex.startsWith('#') ? hex : '#' + hex;
    if (clean.length === 7) {
      const { r, g, b } = hexToRgb(clean);
      applyHsl(...Object.values(rgbToHsl(r, g, b)) as [number, number, number]);
    }
  };

  const applyRgb = (r: number, g: number, b: number) => {
    const { h, s, l } = rgbToHsl(r, g, b);
    applyHsl(h, s, l);
  };

  /* ── Keyboard: F / Space ───────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'f' || e.key === 'F' || e.key === ' ') { e.preventDefault(); enter(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [enter]);

  /* ── Resolution helpers ─────────────────────────── */
  const selectPreset = (p: typeof PRESETS[0]) => {
    setActivePreset(p.label);
    setCustomW(p.w);
    setCustomH(p.h);
  };

  const handleDim = (axis: 'w' | 'h', val: number) => {
    const w = axis === 'w' ? val : customW;
    const h = axis === 'h' ? val : customH;
    if (axis === 'w') setCustomW(val); else setCustomH(val);
    const match = PRESETS.find(p => p.w === w && p.h === h);
    setActivePreset(match ? match.label : '');
  };

  /* ── Download ───────────────────────────────────── */
  const download = () => {
    const canvas = document.createElement('canvas');
    canvas.width = customW; canvas.height = customH;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = currentHex;
    ctx.fillRect(0, 0, customW, customH);
    canvas.toBlob(blob => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${colorName.toLowerCase().replace(/\s+/g, '_')}_${activePreset || `${customW}x${customH}`}.png`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  /* ── Slider gradient ─────────────────────────────── */
  const sliderGrad = `linear-gradient(to right, hsl(${hsl.h},${hsl.s}%,0%), hsl(${hsl.h},${hsl.s}%,50%), hsl(${hsl.h},${hsl.s}%,100%))`;
  const toneOffset = hsl.l - defaultL;
  const toneLabel = toneOffset === 0 ? '0%' : `${toneOffset > 0 ? '+' : ''}${toneOffset}%`;

  return (
    <div>

      {/* ── Preview box ──────────────────────────── */}
      <div
        ref={ref}
        onClick={() => isFullscreen ? exit() : enter()}
        style={{
          width: '100%', aspectRatio: '16/9',
          backgroundColor: currentHex,
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-md)',
          cursor: 'pointer', position: 'relative', overflow: 'hidden',
          boxShadow: 'var(--shadow)',
        }}
        role="button"
        aria-label="Click to enter fullscreen"
      >
        {/* Hover overlay — only shown when NOT fullscreen */}
        {!isFullscreen && (
          <div className="preview-overlay" style={{
            position: 'absolute', inset: 0, opacity: 0, transition: 'opacity 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.1)',
          }}>
            <span style={{
              background: 'rgba(255,255,255,0.92)', color: '#1a1a1a',
              padding: '10px 22px', borderRadius: 'var(--radius)',
              fontWeight: 600, fontSize: 15, boxShadow: 'var(--shadow)',
            }}>
              Click to Fullscreen
            </span>
          </div>
        )}
      </div>

      {/* ── Customize Color ──────────────────────── */}
      <div className="card" style={{ marginTop: 16, padding: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 18 }}>Customize Color</h3>

        {/* Tone slider */}
        <div style={{ marginBottom: 20 }}>
          <label style={labelSx}>Tone (Lightness)</label>
          <input
            type="range"
            min={0} max={100} value={hsl.l}
            onChange={e => applyHsl(hsl.h, hsl.s, Number(e.target.value))}
            style={{
              width: '100%', height: 8, borderRadius: 4, appearance: 'none',
              background: sliderGrad, cursor: 'pointer', outline: 'none',
              border: '1px solid var(--border)',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5, fontSize: 12, color: 'var(--text-3)' }}>
            <span>Darker</span>
            <span style={{ color: 'var(--text-2)', fontWeight: 500 }}>{toneLabel}</span>
            <span>Lighter</span>
          </div>
        </div>

        {/* Native color picker */}
        <div style={{ marginBottom: 16 }}>
          <label style={labelSx}>Color Picker</label>
          <input
            type="color"
            value={currentHex}
            onChange={e => applyHex(e.target.value)}
            style={{ width: '100%', height: 44, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-md)', cursor: 'pointer', padding: 2 }}
          />
        </div>

        {/* Hex code */}
        <div style={{ marginBottom: 16 }}>
          <label style={labelSx}>Hex Code</label>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              type="text"
              value={hexInput}
              maxLength={7}
              onChange={e => {
                setHexInput(e.target.value);
                applyHex(e.target.value);
              }}
              onBlur={() => setHexInput(currentHex)}
              style={{ ...inputSx, fontFamily: 'monospace' }}
            />
            <div style={{
              width: 36, height: 36, borderRadius: 'var(--radius-sm)',
              background: currentHex, border: '1px solid var(--border-md)', flexShrink: 0,
            }} />
          </div>
        </div>

        {/* RGB inputs */}
        <div style={{ marginBottom: 18 }}>
          <label style={labelSx}>RGB Values</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {(['r', 'g', 'b'] as const).map((ch, i) => (
              <div key={ch}>
                <span style={{ fontSize: 11, fontWeight: 700, color: ['#ef4444','#22c55e','#3b82f6'][i], display: 'block', marginBottom: 3, textTransform: 'uppercase' }}>{ch}</span>
                <input
                  type="number"
                  min={0} max={255}
                  value={currentRgb[ch]}
                  onChange={e => {
                    const v = Math.max(0, Math.min(255, Number(e.target.value)));
                    applyRgb(ch === 'r' ? v : currentRgb.r, ch === 'g' ? v : currentRgb.g, ch === 'b' ? v : currentRgb.b);
                  }}
                  style={{ ...inputSx, textAlign: 'center' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reset */}
        <button
          onClick={() => { applyHsl(baseHsl.h, baseHsl.s, baseHsl.l); }}
          className="btn btn-ghost"
          style={{ width: '100%' }}
        >
          Reset to Default
        </button>
      </div>

      {/* ── Resolution + Download ─────────────────── */}
      <div className="card" style={{ marginTop: 12, padding: 20 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
          {PRESETS.map(p => (
            <button key={p.label} onClick={() => selectPreset(p)} className={`res-btn${activePreset === p.label ? ' active' : ''}`}>
              {p.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <input type="number" value={customW} min={1}
            onChange={e => handleDim('w', Number(e.target.value))}
            style={{ width: 90, padding: '8px 10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-md)', fontSize: 14, background: 'var(--surface)', color: 'var(--text)' }}
          />
          <span style={{ color: 'var(--text-3)', fontSize: 14 }}>×</span>
          <input type="number" value={customH} min={1}
            onChange={e => handleDim('h', Number(e.target.value))}
            style={{ width: 90, padding: '8px 10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-md)', fontSize: 14, background: 'var(--surface)', color: 'var(--text)' }}
          />
          <span style={{ color: 'var(--text-3)', fontSize: 14 }}>px</span>
          <button onClick={download} className="btn btn-dark" style={{ marginLeft: 'auto' }}>Download</button>
        </div>

      </div>

      <style>{`
        div:has(> .preview-overlay):hover .preview-overlay { opacity: 1 !important; }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid rgba(0,0,0,0.25);
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        input[type=range]::-moz-range-thumb {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid rgba(0,0,0,0.25);
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
