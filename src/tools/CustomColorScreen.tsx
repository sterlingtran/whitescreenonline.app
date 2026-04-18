import { useState, useRef } from 'react';
import { useFullscreen } from '@/src/hooks/useFullscreen';
import { Maximize2, Copy, Download, Check } from 'lucide-react';

/* ── Helpers ─────────────────────────────────────────── */
function hexToRgb(hex: string) {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return null;
  const n = parseInt(clean, 16);
  if (isNaN(n)) return null;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHex(r: number, g: number, b: number) {
  return '#' + [r, g, b]
    .map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0'))
    .join('');
}

function isLight(hex: string) {
  const rgb = hexToRgb(hex);
  if (!rgb) return true;
  return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255 > 0.55;
}

/* ── Palette (80 swatches) ───────────────────────────── */
const PALETTE: string[][] = [
  // Row 1 — Whites & light grays
  ['#FFFFFF','#F8FAFC','#F1F5F9','#E2E8F0','#CBD5E1','#94A3B8','#64748B','#475569','#334155','#1E293B','#0F172A','#000000'],
  // Row 2 — Reds
  ['#FEE2E2','#FECACA','#FCA5A5','#F87171','#EF4444','#DC2626','#B91C1C','#991B1B','#7F1D1D','#450A0A','#FF6B6B','#FF0000'],
  // Row 3 — Oranges
  ['#FFEDD5','#FED7AA','#FDBA74','#FB923C','#F97316','#EA580C','#C2410C','#9A3412','#7C2D12','#431407','#FF8C42','#FF5500'],
  // Row 4 — Yellows & ambers
  ['#FEFCE8','#FEF9C3','#FEF08A','#FDE047','#FACC15','#EAB308','#CA8A04','#A16207','#FBBF24','#F59E0B','#FFD700','#FFA500'],
  // Row 5 — Greens
  ['#F0FDF4','#DCFCE7','#BBF7D0','#86EFAC','#4ADE80','#22C55E','#16A34A','#15803D','#166534','#14532D','#00FF00','#00C800'],
  // Row 6 — Teals & cyans
  ['#F0FDFA','#CCFBF1','#99F6E4','#5EEAD4','#2DD4BF','#14B8A6','#0D9488','#0F766E','#00FFFF','#00E5FF','#06B6D4','#0891B2'],
  // Row 7 — Blues
  ['#EFF6FF','#DBEAFE','#BFDBFE','#93C5FD','#60A5FA','#3B82F6','#2563EB','#1D4ED8','#1E40AF','#1E3A8A','#0000FF','#0000CC'],
  // Row 8 — Purples & violets
  ['#F5F3FF','#EDE9FE','#DDD6FE','#C4B5FD','#A78BFA','#8B5CF6','#7C3AED','#6D28D9','#5B21B6','#4C1D95','#9400D3','#6600CC'],
  // Row 9 — Pinks & roses
  ['#FFF1F2','#FFE4E6','#FECDD3','#FDA4AF','#FB7185','#F43F5E','#E11D48','#EC4899','#DB2777','#BE185D','#FF1493','#FF69B4'],
  // Row 10 — Browns, warm neutrals, pastels
  ['#FDF6EC','#FDE68A','#D4A373','#A07850','#7C5C38','#4A3728','#DDA0DD','#E6B0AA','#A9CCE3','#A9DFBF','#F9E79F','#FAD7A0'],
];

/* ── Component ───────────────────────────────────────── */
export function CustomColorScreen() {
  const [color, setColor] = useState('#3B82F6');
  const [hexInput, setHexInput] = useState('#3B82F6');
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [brightness, setBrightness] = useState(100);
  const [copied, setCopied] = useState(false);
  const { ref, enter, exit, isFullscreen } = useFullscreen();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* keep rgb/hex in sync when color changes */
  const applyColor = (hex: string) => {
    const normalized = hex.startsWith('#') ? hex : '#' + hex;
    const parsed = hexToRgb(normalized);
    if (!parsed) return;
    setColor(normalized);
    setHexInput(normalized);
    setRgb(parsed);
  };

  const applyRgb = (r: number, g: number, b: number) => {
    const hex = rgbToHex(r, g, b);
    setColor(hex);
    setHexInput(hex);
    setRgb({ r, g, b });
  };

  /* hex input with live preview */
  const handleHexChange = (val: string) => {
    setHexInput(val);
    const clean = val.replace(/[^0-9a-fA-F#]/g, '');
    const withHash = clean.startsWith('#') ? clean : '#' + clean;
    if (withHash.length === 7) applyColor(withHash);
  };

  /* copy hex */
  const copyHex = async () => {
    await navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  /* download PNG */
  const download = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1920; canvas.height = 1080;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1920, 1080);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `color-${color.replace('#', '')}.png`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  const btnBase = isLight(color)
    ? 'bg-black/10 hover:bg-black/20 text-black/70'
    : 'bg-white/15 hover:bg-white/25 text-white';

  return (
    <div className="space-y-0">
      {/* ── Full-screen preview ── */}
      <div
        ref={ref}
        className="w-full aspect-video cursor-pointer relative group overflow-hidden"
        style={{ backgroundColor: color, filter: `brightness(${brightness}%)` }}
        onClick={() => isFullscreen ? exit() : enter()}
      >
        {/* Hover overlay — only shown before entering fullscreen */}
        {!isFullscreen && <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all flex items-center justify-center">
          <button
            onClick={(e) => { e.stopPropagation(); enter(); }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all ${btnBase}`}
          >
            <Maximize2 size={14} />
            Fullscreen
          </button>
        </div>}
      </div>
      <canvas ref={canvasRef} className="hidden" />

      {/* ── Controls ── */}
      <div className="bg-white dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-700/60 p-5 space-y-5">

        {/* Row 1: color picker + hex + RGB */}
        <div className="flex flex-wrap items-end gap-4">
          {/* Native color picker */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Picker</label>
            <input
              type="color"
              value={color}
              onChange={(e) => applyColor(e.target.value)}
              className="w-14 h-10 rounded-lg cursor-pointer border-2 border-slate-200 dark:border-slate-600 p-0.5 bg-transparent"
            />
          </div>

          {/* Hex input */}
          <div className="flex flex-col gap-1 min-w-[120px]">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hex Code</label>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded border border-slate-200 dark:border-slate-600 shrink-0" style={{ backgroundColor: color }} />
              <input
                type="text"
                value={hexInput}
                maxLength={7}
                onChange={(e) => handleHexChange(e.target.value)}
                onBlur={() => setHexInput(color)}
                placeholder="#000000"
                className="w-28 px-2.5 py-2 font-mono text-sm bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* RGB inputs */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">RGB</label>
            <div className="flex gap-1.5">
              {(['r','g','b'] as const).map((ch, idx) => (
                <div key={ch} className="flex flex-col items-center gap-0.5">
                  <span className="text-[10px] font-bold uppercase" style={{ color: ['#ef4444','#22c55e','#3b82f6'][idx] }}>{ch}</span>
                  <input
                    type="number"
                    min={0} max={255}
                    value={rgb[ch]}
                    onChange={(e) => {
                      const v = Math.max(0, Math.min(255, Number(e.target.value)));
                      applyRgb(ch === 'r' ? v : rgb.r, ch === 'g' ? v : rgb.g, ch === 'b' ? v : rgb.b);
                    }}
                    className="w-14 px-2 py-2 font-mono text-sm text-center bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Brightness */}
          <div className="flex flex-col gap-1 flex-1 min-w-[140px]">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Brightness — {brightness}%
            </label>
            <input
              type="range" min={10} max={100} value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-full h-2 accent-indigo-500 rounded-full cursor-pointer"
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 ml-auto">
            <button onClick={copyHex}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg transition">
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy Hex'}
            </button>
            <button onClick={download}
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition">
              <Download size={14} />
              Download PNG
            </button>
          </div>
        </div>

        {/* Row 2: Palette */}
        <div>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">
            Color Palette
          </label>
          <div className="space-y-1">
            {PALETTE.map((row, ri) => (
              <div key={ri} className="flex gap-1 flex-wrap">
                {row.map((swatch) => (
                  <button
                    key={swatch}
                    title={swatch.toUpperCase()}
                    onClick={() => applyColor(swatch)}
                    className="w-7 h-7 rounded-md transition-all hover:scale-110 hover:z-10 relative focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    style={{
                      backgroundColor: swatch,
                      border: color.toLowerCase() === swatch.toLowerCase()
                        ? '2.5px solid #6366f1'
                        : '1.5px solid rgba(0,0,0,0.08)',
                      boxShadow: color.toLowerCase() === swatch.toLowerCase()
                        ? '0 0 0 2px white, 0 0 0 4px #6366f1'
                        : undefined,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
