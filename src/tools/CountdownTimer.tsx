import { useState, useEffect, useRef, useCallback } from 'react';
import { useFullscreen } from '@/src/hooks/useFullscreen';
import { Play, Pause, RotateCcw, Maximize2 } from 'lucide-react';

/* ── Colour swatches ─────────────────────────────── */
const BG_SWATCHES = ['#111111', '#1e293b', '#0f172a', '#18181b', '#ffffff', '#312e81'];
const FG_SWATCHES = ['#ffffff', '#111111', '#3b82f6', '#22c55e', '#f59e0b', '#ef4444'];

/* ── Helpers ─────────────────────────────────────── */
const clamp  = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const pad2   = (n: number) => String(n).padStart(2, '0');
const fmtSec = (sec: number) => {
  const hh = Math.floor(sec / 3600);
  const mm = Math.floor((sec % 3600) / 60);
  const ss = sec % 60;
  return hh > 0 ? `${hh}:${pad2(mm)}:${pad2(ss)}` : `${pad2(mm)}:${pad2(ss)}`;
};

/* ── Component ───────────────────────────────────── */
export function CountdownTimer() {
  /* time inputs */
  const [ih, setIh] = useState(0);
  const [im, setIm] = useState(5);
  const [is, setIs] = useState(0);

  /* visual settings */
  const [clockPx, setClockPx] = useState(128);
  const [bg, setBg]           = useState('#111111');
  const [fg, setFg]           = useState('#ffffff');

  /* timer state */
  const [totalSec, setTotalSec]   = useState(300);
  const [remaining, setRemaining] = useState(300);
  const [running, setRunning]     = useState(false);
  const [finished, setFinished]   = useState(false);

  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { ref, enter, isFullscreen } = useFullscreen();

  /* ── Update display when inputs change (only if stopped) ── */
  const syncFromInputs = useCallback((newH: number, newM: number, newS: number) => {
    if (!running) {
      const sec = newH * 3600 + newM * 60 + newS;
      setTotalSec(sec);
      setRemaining(sec);
      setFinished(false);
    }
  }, [running]);

  const setH = (v: number) => { setIh(v); syncFromInputs(v, im, is); };
  const setM = (v: number) => { setIm(v); syncFromInputs(ih, v, is); };
  const setS = (v: number) => { setIs(v); syncFromInputs(ih, im, v); };

  /* ── Tick ── */
  useEffect(() => {
    if (running) {
      tickRef.current = setInterval(() => {
        setRemaining(r => {
          if (r <= 1) {
            setRunning(false);
            setFinished(true);
            beep();
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    } else {
      if (tickRef.current) clearInterval(tickRef.current);
    }
    return () => { if (tickRef.current) clearInterval(tickRef.current); };
  }, [running]);

  /* ── Controls ── */
  const handleStart = useCallback(() => {
    if (finished) {
      const sec = ih * 3600 + im * 60 + is;
      setTotalSec(sec); setRemaining(sec); setFinished(false);
    }
    if (ih === 0 && im === 0 && is === 0) return; // nothing to count
    setRunning(true);
  }, [finished, ih, im, is]);

  const handlePause = useCallback(() => setRunning(false), []);

  const handleReset = useCallback(() => {
    setRunning(false);
    setFinished(false);
    const sec = ih * 3600 + im * 60 + is;
    setTotalSec(sec);
    setRemaining(sec);
  }, [ih, im, is]);

  /* ── Keyboard ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT','TEXTAREA','SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === ' ')                        { e.preventDefault(); running ? handlePause() : handleStart(); }
      if (e.key === 'r' || e.key === 'R')       { handleReset(); }
      if ((e.key === 'f' || e.key === 'F') && !isFullscreen) { e.preventDefault(); enter(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [running, isFullscreen, handleStart, handlePause, handleReset, enter]);

  /* ── Alert sound ── */
  const beep = () => {
    try {
      const ctx = new AudioContext();
      [0, 0.35, 0.7].forEach(offset => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine'; osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.35, ctx.currentTime + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + 0.3);
        osc.start(ctx.currentTime + offset);
        osc.stop(ctx.currentTime + offset + 0.31);
      });
    } catch {}
  };

  /* ── Derived ── */
  const progress = totalSec > 0 ? remaining / totalSec : 0;
  const timeStr  = fmtSec(remaining);

  /* ── Render clock (used in both modes) ── */
  const renderClock = (full: boolean) => {
    const actualPx  = clockPx;
    const btnBase: React.CSSProperties = {
      display: 'flex', alignItems: 'center', gap: 6,
      padding: full ? '11px 26px' : '8px 16px',
      borderRadius: 8, border: 'none',
      fontSize: full ? 15 : 13, fontWeight: 600, cursor: 'pointer',
      transition: 'opacity 0.15s',
    };

    return (
      <div style={{
        width: '100%',
        background: bg,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: full ? 28 : 16,
        padding: full ? '64px 48px' : '28px 24px',
        boxSizing: 'border-box',
        ...(full
          ? { minHeight: '100%' }
          : { borderRadius: 'var(--radius-lg)', aspectRatio: '16/9', border: '1px solid var(--border)', overflow: 'hidden' }
        ),
      }}>
        {/* Digits */}
        <div style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          fontSize: actualPx,
          fontWeight: 700,
          color: finished ? '#ef4444' : fg,
          letterSpacing: '-0.025em',
          lineHeight: 1,
          transition: 'color 0.3s',
          userSelect: 'none',
        }}>
          {timeStr}
        </div>

        {/* "Time's up!" label */}
        {finished && (
          <p style={{ color: '#ef4444', fontSize: full ? 18 : 13, fontWeight: 600, marginTop: -8 }}>
            Time&apos;s up!
          </p>
        )}

        {/* Progress bar */}
        <div style={{
          width: full ? Math.min(clockPx * 3.8, 640) : '78%',
          height: full ? 5 : 3,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 99, overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: finished ? '#ef4444' : fg,
            opacity: 0.75,
            borderRadius: 99,
            transition: 'width 1s linear, background 0.3s',
          }} />
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={running ? handlePause : handleStart}
            style={{ ...btnBase, background: 'rgba(255,255,255,0.14)', color: fg }}
          >
            {running
              ? <Pause size={full ? 16 : 14} />
              : <Play size={full ? 16 : 14} />
            }
            {running ? 'Pause' : finished ? 'Restart' : remaining < totalSec && remaining > 0 ? 'Resume' : 'Start'}
          </button>
          <button
            onClick={handleReset}
            style={{ ...btnBase, background: 'rgba(255,255,255,0.07)', color: fg + 'aa' }}
          >
            <RotateCcw size={full ? 15 : 13} /> Reset
          </button>
        </div>

        {!full && (
          <p style={{ fontSize: 12, color: fg + '66', marginTop: -4 }}>
            Space = start/pause · R = reset · F = fullscreen
          </p>
        )}
      </div>
    );
  };

  /* ── Settings label style ── */
  const labelSx: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, color: 'var(--text-2)',
    display: 'block', marginBottom: 8,
    textTransform: 'uppercase', letterSpacing: '0.04em',
  };

  const swatchBtn = (color: string, active: boolean, onClick: () => void) => (
    <button
      key={color}
      onClick={onClick}
      style={{
        width: 32, height: 32, borderRadius: 6,
        backgroundColor: color, cursor: 'pointer',
        border: active ? '2px solid var(--text)' : '1.5px solid var(--border-md)',
        boxShadow: active ? '0 0 0 2px var(--bg), 0 0 0 3.5px var(--text)' : undefined,
        flexShrink: 0,
      }}
    />
  );

  /* ── Main render ── */
  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        background: isFullscreen ? bg : 'transparent',
        ...(isFullscreen && {
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }),
      }}
    >
      {isFullscreen ? (
        renderClock(true)
      ) : (
        <>
          {/* Clock preview — with hover fullscreen button */}
          <div style={{ position: 'relative' }}>
            {renderClock(false)}
            <button
              onClick={enter}
              className="cd-fs-hint"
              style={{
                position: 'absolute', bottom: 12, right: 12,
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '6px 12px',
                background: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(6px)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                fontSize: 12, fontWeight: 500,
                opacity: 0, transition: 'opacity 0.2s',
                cursor: 'pointer', zIndex: 2,
              }}
            >
              <Maximize2 size={12} /> Fullscreen
            </button>
            <style>{`div:has(> .cd-fs-hint):hover .cd-fs-hint { opacity: 1 !important; }`}</style>
          </div>

          {/* Settings */}
          <div className="card" style={{ marginTop: 16, padding: '22px 24px' }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 22 }}>Timer Settings</h3>

            {/* Time input */}
            <label style={labelSx}>Set Time</label>
            <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
              {[
                { label: 'HH', val: ih, set: setH, max: 99 },
                { label: 'MM', val: im, set: setM, max: 59 },
                { label: 'SS', val: is, set: setS, max: 59 },
              ].map(({ label, val, set, max }) => (
                <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.06em' }}>
                    {label}
                  </span>
                  <input
                    type="number"
                    min={0}
                    max={max}
                    value={val}
                    onChange={e => set(clamp(parseInt(e.target.value) || 0, 0, max))}
                    style={{
                      width: '100%', padding: '10px 0', textAlign: 'center',
                      border: '1px solid var(--border-md)', borderRadius: 8,
                      fontSize: 22, fontWeight: 700, fontFamily: 'monospace',
                      background: 'var(--surface)', color: 'var(--text)', outline: 'none',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Clock size */}
            <label style={labelSx}>Clock Size — {clockPx}px</label>
            <input
              type="range" min={48} max={280} step={4} value={clockPx}
              onChange={e => setClockPx(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--text)', marginBottom: 24, display: 'block' }}
            />

            {/* Background colour */}
            <label style={labelSx}>Background</label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              {BG_SWATCHES.map(c => swatchBtn(c, bg === c, () => setBg(c)))}
              <input type="color" value={bg} onChange={e => setBg(e.target.value)}
                title="Custom"
                style={{ width: 32, height: 32, borderRadius: 6, border: '1.5px solid var(--border-md)', padding: 2, cursor: 'pointer', flexShrink: 0 }}
              />
            </div>

            {/* Text / digit colour */}
            <label style={labelSx}>Text Color</label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
              {FG_SWATCHES.map(c => swatchBtn(c, fg === c, () => setFg(c)))}
              <input type="color" value={fg} onChange={e => setFg(e.target.value)}
                title="Custom"
                style={{ width: 32, height: 32, borderRadius: 6, border: '1.5px solid var(--border-md)', padding: 2, cursor: 'pointer', flexShrink: 0 }}
              />
            </div>

          </div>
        </>
      )}
    </div>
  );
}
