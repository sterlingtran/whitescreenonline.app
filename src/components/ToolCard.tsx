import { Link } from 'react-router-dom';
import { Tool } from '@/src/data/tools';

interface ToolCardProps {
  tool: Tool;
  variant?: 'compact' | 'landscape';
}

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'auto' });

/* Background colour for each tool card */
const CARD_BG: Record<string, string> = {
  'white-screen':          '#e8e8ed',
  'black-screen':          '#1c1c1e',
  'red-screen':            '#e74c3c',
  'green-screen':          '#2ecc71',
  'blue-screen':           '#3498db',
  'yellow-screen':         '#f1c40f',
  'orange-screen':         '#f39c12',
  'pink-screen':           '#e91e63',
  'purple-screen':         '#9b59b6',
  'custom-color-screen':   '#6366f1',
  'countdown-timer':       '#111111',
  'tip-screen':            '#f2f4f8',
  'dead-pixel-test':       '#111111',
  'zoom-lighting':         '#111111',
  'ring-light':            '#111111',
  'rgb-gradient':          '#0d0d0d',
  'white-noise':           '#222222',
  'broken-screen':         '#111111',
  'radar-screen':          '#000000',
  'bsod':                  '#0000aa',
  'hacker-typer':          '#000000',
  'windows-10-update':     '#0078d4',
  'windows-xp-update':     '#2369ce',
  'macos-update':          '#3a3a3c',
  'ubuntu-update':         '#e95420',
  'chromeos-update':       '#4285f4',
  'dvd-screensaver':       '#111111',
  'flip-clock':            '#111111',
  'motivational-quote':    '#4f46e5',
  'smpte-color-bars':      '#000000',
  'matrix-screensaver':    '#000000',
  'starfield-screensaver': '#000000',
  'pomodoro-timer':        '#dc2626',
  'stopwatch':             '#1f2937',
  'hiit-timer':            '#ea580c',
  'focus-screen':          '#1e40af',
  'meditation-breather':   '#0d9488',
  'productivity-dashboard':'#4f46e5',
  'fireplace-ambient':     '#92400e',
  'rain-ambient':          '#0a1929',
  'particle-system':       '#1e1b4b',
};

/* Cards with light backgrounds need dark text (compact variant) */
const LIGHT_BG = new Set(['white-screen', 'yellow-screen']);

/* Short use-case subtitle shown on compact card */
const CARD_SUB: Record<string, string> = {
  'white-screen':          'Most popular',
  'black-screen':          'OLED & pixel test',
  'red-screen':            'Lighting effects',
  'green-screen':          'Chroma key',
  'blue-screen':           'Display testing',
  'yellow-screen':         'Warm lighting',
  'orange-screen':         'Creative projects',
  'pink-screen':           'Aesthetic',
  'purple-screen':         'Creative',
  'custom-color-screen':   'Any color',
  'countdown-timer':       'Fullscreen countdown',
  'tip-screen':            'POS tipping display',
  'dead-pixel-test':       'Pixel detection',
  'zoom-lighting':         'Video calls',
  'ring-light':            'Photography',
  'rgb-gradient':          'Creative lighting',
  'white-noise':           'Sleep & focus',
  'broken-screen':         'Prank tool',
  'radar-screen':          'Ambient display',
  'bsod':                  'Classic prank',
  'hacker-typer':          'Tech prank',
  'windows-10-update':     'Prank screen',
  'windows-xp-update':     'Nostalgia prank',
  'macos-update':          'Mac prank',
  'ubuntu-update':         'Linux prank',
  'chromeos-update':       'Chromebook prank',
  'dvd-screensaver':       'Nostalgic',
  'flip-clock':            'Retro clock',
  'motivational-quote':    'Daily inspiration',
  'smpte-color-bars':      'Display calibration',
  'matrix-screensaver':    'Screensaver',
  'starfield-screensaver': 'Space screensaver',
  'pomodoro-timer':        'Focus timer',
  'stopwatch':             'Time tracking',
  'hiit-timer':            'Interval training',
  'focus-screen':          'Deep work',
  'meditation-breather':   'Calm & breathe',
  'productivity-dashboard':'All-in-one focus',
  'fireplace-ambient':     'Cozy ambiance',
  'rain-ambient':          'Relaxing rain',
  'particle-system':       'Ambient display',
};

/* ── Mini visual previews for landscape cards ─────── */
function MiniPreview({ slug }: { slug: string }) {
  const bg = CARD_BG[slug] ?? '#4f46e5';

  switch (slug) {
    /* ── SMPTE color bars ── */
    case 'smpte-color-bars':
      return (
        <div style={{ display: 'flex', height: '100%' }}>
          {['#C0C0C0','#C0C000','#00C0C0','#00C000','#C000C0','#C00000','#0000C0'].map(c => (
            <div key={c} style={{ flex: 1, backgroundColor: c }} />
          ))}
        </div>
      );

    /* ── Radar ── */
    case 'radar-screen':
      return (
        <div style={{ background: '#000', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', border: '1.5px solid #00ff41', position: 'absolute', opacity: 0.55 }} />
          <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #00ff41', position: 'absolute', opacity: 0.35 }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(0,255,65,0.15)', border: '1px solid #00ff41', position: 'absolute', opacity: 0.5 }} />
          <div style={{ position: 'absolute', width: 26, height: 1.5, background: 'linear-gradient(to right, transparent, #00ff41 80%)', transformOrigin: '0 50%', transform: 'rotate(-50deg)', left: '50%', top: '50%' }} />
        </div>
      );

    /* ── BSOD ── */
    case 'bsod':
      return (
        <div style={{ background: '#0000aa', height: '100%', padding: '10px 12px', boxSizing: 'border-box' }}>
          <div style={{ width: '65%', height: 4, background: 'rgba(255,255,255,0.9)', borderRadius: 1, marginBottom: 5 }} />
          <div style={{ width: '45%', height: 3, background: 'rgba(255,255,255,0.6)', borderRadius: 1, marginBottom: 3 }} />
          <div style={{ width: '55%', height: 3, background: 'rgba(255,255,255,0.5)', borderRadius: 1, marginBottom: 10 }} />
          <div style={{ width: '80%', height: 2, background: 'rgba(255,255,255,0.3)', borderRadius: 1, marginBottom: 2 }} />
          <div style={{ width: '70%', height: 2, background: 'rgba(255,255,255,0.3)', borderRadius: 1, marginBottom: 2 }} />
          <div style={{ width: '60%', height: 2, background: 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
        </div>
      );

    /* ── Hacker Typer ── */
    case 'hacker-typer':
      return (
        <div style={{ background: '#000', height: '100%', padding: '7px 10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 3 }}>
          {[70, 50, 82, 40, 67, 55, 75].map((w, i) => (
            <div key={i} style={{ height: 3, background: '#00ff41', width: `${w}%`, opacity: 0.6 + (i % 3) * 0.12, borderRadius: 1 }} />
          ))}
        </div>
      );

    /* ── Matrix ── */
    case 'matrix-screensaver':
      return (
        <div style={{ background: '#000', height: '100%', display: 'flex', gap: 3, padding: '5px 6px', boxSizing: 'border-box', overflow: 'hidden' }}>
          {[...Array(9)].map((_, col) => (
            <div key={col} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
              {[...Array(6)].map((_, row) => (
                <div key={row} style={{
                  height: 2.5,
                  background: '#00ff41',
                  opacity: (col * 3 + row) % 4 === 0 ? 0.9 : 0.15 + ((col + row) % 3) * 0.15,
                  borderRadius: 1,
                }} />
              ))}
            </div>
          ))}
        </div>
      );

    /* ── Starfield ── */
    case 'starfield-screensaver':
      return (
        <div style={{ background: '#000', height: '100%', position: 'relative', overflow: 'hidden' }}>
          {[
            { l: 15, t: 20, s: 2.5 }, { l: 35, t: 60, s: 2 }, { l: 55, t: 15, s: 3 },
            { l: 70, t: 45, s: 1.5 }, { l: 85, t: 75, s: 2.5 }, { l: 25, t: 80, s: 2 },
            { l: 60, t: 65, s: 1.5 }, { l: 45, t: 30, s: 3 },  { l: 78, t: 25, s: 2 },
            { l: 10, t: 50, s: 2.5 }, { l: 90, t: 55, s: 1.5 }, { l: 40, t: 88, s: 2 },
          ].map((star, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: star.s, height: star.s,
              background: '#fff', borderRadius: '50%',
              left: `${star.l}%`, top: `${star.t}%`,
              opacity: 0.4 + (i % 4) * 0.12,
            }} />
          ))}
        </div>
      );

    /* ── White Noise ── */
    case 'white-noise':
      return (
        <div style={{
          background: '#1a1a1a',
          height: '100%',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '5px 5px',
        }} />
      );

    /* ── Broken Screen ── */
    case 'broken-screen':
      return (
        <div style={{ background: '#111', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '25%', left: '35%', width: '45%', height: 1, background: 'rgba(255,255,255,0.65)', transform: 'rotate(40deg)' }} />
          <div style={{ position: 'absolute', top: '37%', left: '28%', width: '32%', height: 1, background: 'rgba(255,255,255,0.45)', transform: 'rotate(-22deg)' }} />
          <div style={{ position: 'absolute', top: '45%', left: '44%', width: '38%', height: 1, background: 'rgba(255,255,255,0.55)', transform: 'rotate(62deg)' }} />
          <div style={{ position: 'absolute', top: '58%', left: '38%', width: '26%', height: 1, background: 'rgba(255,255,255,0.35)', transform: 'rotate(-48deg)' }} />
          <div style={{ position: 'absolute', top: '22%', left: '47%', width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
        </div>
      );

    /* ── RGB Gradient ── */
    case 'rgb-gradient':
      return <div style={{ height: '100%', background: 'linear-gradient(135deg, #ff0080, #7928ca, #0070f3, #00dfd8)' }} />;

    /* ── DVD Screensaver ── */
    case 'dvd-screensaver':
      return (
        <div style={{ background: '#111', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 20, fontWeight: 900, color: '#f59e0b', fontFamily: 'Arial Black, Arial, sans-serif', letterSpacing: 1.5 }}>DVD</span>
        </div>
      );

    /* ── Flip Clock ── */
    case 'flip-clock':
      return (
        <div style={{ background: '#111', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          {['1', '2', ':', '3', '4'].map((d, i) =>
            d === ':' ? (
              <span key={i} style={{ color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: 'monospace', marginBottom: 4 }}>:</span>
            ) : (
              <div key={i} style={{ background: '#2a2a2a', border: '1px solid #444', borderRadius: 4, padding: '3px 6px', color: '#fff', fontSize: 15, fontWeight: 700, fontFamily: 'monospace' }}>{d}</div>
            )
          )}
        </div>
      );

    /* ── Motivational Quote ── */
    case 'motivational-quote':
      return (
        <div style={{ background: '#4f46e5', height: '100%', padding: '12px 14px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
          <div style={{ width: '80%', height: 3, background: 'rgba(255,255,255,0.8)', borderRadius: 1 }} />
          <div style={{ width: '62%', height: 3, background: 'rgba(255,255,255,0.5)', borderRadius: 1 }} />
          <div style={{ width: '72%', height: 3, background: 'rgba(255,255,255,0.35)', borderRadius: 1, marginTop: 2 }} />
        </div>
      );

    /* ── Zoom Lighting ── */
    case 'zoom-lighting':
      return (
        <div style={{ background: '#111', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 58, height: 58, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,220,100,0.9) 0%, rgba(255,180,50,0.35) 52%, transparent 72%)' }} />
        </div>
      );

    /* ── Ring Light ── */
    case 'ring-light':
      return (
        <div style={{ background: '#111', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', border: '7px solid rgba(255,220,100,0.85)', boxShadow: '0 0 14px rgba(255,220,100,0.4), inset 0 0 10px rgba(255,220,100,0.15)' }} />
        </div>
      );

    /* ── Fireplace ── */
    case 'fireplace-ambient':
      return <div style={{ height: '100%', background: 'linear-gradient(to top, #78350f 0%, #b45309 30%, #dc2626 65%, #f97316 100%)' }} />;

    /* ── Rain ── */
    case 'rain-ambient':
      return (
        <div style={{ background: '#0a1929', height: '100%', overflow: 'hidden', position: 'relative' }}>
          {[5, 18, 30, 43, 55, 68, 80, 92].map((left, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${left}%`, top: 0, bottom: 0, width: 1,
              background: 'linear-gradient(to bottom, transparent 0%, rgba(150,200,255,0.4) 40%, rgba(150,200,255,0.55) 60%, transparent 100%)',
            }} />
          ))}
        </div>
      );

    /* ── Particle System ── */
    case 'particle-system':
      return (
        <div style={{ background: '#1e1b4b', height: '100%', position: 'relative', overflow: 'hidden' }}>
          {[
            { l: 20, t: 30, s: 7, c: '#a78bfa' }, { l: 55, t: 60, s: 5, c: '#818cf8' },
            { l: 75, t: 20, s: 8, c: '#c4b5fd' }, { l: 35, t: 75, s: 5, c: '#a78bfa' },
            { l: 85, t: 48, s: 6, c: '#818cf8' }, { l: 10, t: 55, s: 4, c: '#c4b5fd' },
            { l: 65, t: 38, s: 5, c: '#a78bfa' }, { l: 45, t: 15, s: 6, c: '#818cf8' },
          ].map((p, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: p.s, height: p.s, borderRadius: '50%',
              background: p.c, left: `${p.l}%`, top: `${p.t}%`, opacity: 0.65,
            }} />
          ))}
        </div>
      );

    /* ── Countdown Timer ── */
    case 'countdown-timer':
      return (
        <div style={{ background: '#111', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>05:00</div>
          <div style={{ width: 70, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: '60%', height: '100%', background: '#fff', opacity: 0.75, borderRadius: 99 }} />
          </div>
        </div>
      );

    /* ── Tip Screen ── */
    case 'tip-screen':
      return (
        <div style={{ background: '#f2f4f8', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px 12px', boxSizing: 'border-box', gap: 6 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#555', marginBottom: 2 }}>Add a Tip</div>
          <div style={{ display: 'flex', gap: 4, width: '100%' }}>
            {['15%', '20%', '25%'].map(p => (
              <div key={p} style={{ flex: 1, background: '#2563eb', borderRadius: 4, padding: '4px 0', textAlign: 'center', fontSize: 8, fontWeight: 700, color: '#fff' }}>{p}</div>
            ))}
          </div>
          <div style={{ width: '100%', background: '#2563eb', borderRadius: 4, padding: '4px 0', textAlign: 'center', fontSize: 8, fontWeight: 700, color: '#fff' }}>No Tip</div>
        </div>
      );

    /* ── Dead Pixel Test ── */
    case 'dead-pixel-test':
      return (
        <div style={{ height: '100%', display: 'flex' }}>
          {['#000','#fff','#f00','#0f0','#00f','#0ff','#f0f','#ff0','#888'].map(c => (
            <div key={c} style={{ flex: 1, backgroundColor: c }} />
          ))}
        </div>
      );

    /* ── Pomodoro ── */
    case 'pomodoro-timer':
      return (
        <div style={{ background: '#dc2626', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 46, height: 46, borderRadius: '50%', border: '4px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 11, fontWeight: 700, fontFamily: 'monospace' }}>25:00</span>
          </div>
        </div>
      );

    /* ── Stopwatch ── */
    case 'stopwatch':
      return (
        <div style={{ background: '#1f2937', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 3 }}>
          <span style={{ color: '#fff', fontSize: 18, fontWeight: 700, fontFamily: 'monospace' }}>00:00</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: 'monospace' }}>00</span>
        </div>
      );

    /* ── HIIT Timer ── */
    case 'hiit-timer':
      return (
        <div style={{ background: '#ea580c', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em' }}>WORK</span>
          <span style={{ color: '#fff', fontSize: 18, fontWeight: 700, fontFamily: 'monospace' }}>00:20</span>
        </div>
      );

    /* ── Focus Screen ── */
    case 'focus-screen':
      return (
        <div style={{ background: '#1e40af', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: 20, fontWeight: 700, fontFamily: 'monospace' }}>30:00</span>
        </div>
      );

    /* ── Meditation Breather ── */
    case 'meditation-breather':
      return (
        <div style={{ background: '#0d9488', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '3px solid rgba(255,255,255,0.65)', boxShadow: '0 0 18px rgba(255,255,255,0.2)' }} />
        </div>
      );

    /* ── Productivity Dashboard ── */
    case 'productivity-dashboard':
      return (
        <div style={{ background: '#4f46e5', height: '100%', padding: '8px 10px', boxSizing: 'border-box' }}>
          <div style={{ width: '70%', height: 3, background: 'rgba(255,255,255,0.7)', borderRadius: 1, marginBottom: 6 }} />
          <div style={{ display: 'flex', gap: 4, marginBottom: 5 }}>
            <div style={{ width: 28, height: 14, background: 'rgba(255,255,255,0.2)', borderRadius: 3 }} />
            <div style={{ width: 28, height: 14, background: 'rgba(255,255,255,0.2)', borderRadius: 3 }} />
          </div>
          <div style={{ width: '85%', height: 2, background: 'rgba(255,255,255,0.3)', borderRadius: 1, marginBottom: 2 }} />
          <div style={{ width: '70%', height: 2, background: 'rgba(255,255,255,0.2)', borderRadius: 1 }} />
        </div>
      );

    /* ── Custom Color Screen ── */
    case 'custom-color-screen':
      return (
        <div style={{ height: '100%', background: 'linear-gradient(135deg, #6366f1, #ec4899, #f59e0b)' }} />
      );

    /* ── Windows XP Update ── */
    case 'windows-xp-update':
      return (
        <div style={{ background: '#2369ce', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 6, boxSizing: 'border-box' }}>
          <div style={{ width: '100%', height: 14, background: 'rgba(0,0,0,0.3)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ width: '55%', height: '100%', background: 'linear-gradient(to right, #69c, #48a)', borderRadius: 2 }} />
          </div>
        </div>
      );

    /* ── Fake update screens (Windows 10, macOS, Ubuntu, ChromeOS) — use bg color ── */
    case 'windows-10-update':
      return (
        <div style={{ background: '#0078d4', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.8)', borderRadius: 2 }} />
          <div style={{ width: 60, height: 3, background: 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
        </div>
      );

    case 'macos-update':
      return (
        <div style={{ background: '#2d2d2d', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 60, height: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ width: '40%', height: '100%', background: 'rgba(255,255,255,0.7)', borderRadius: 4 }} />
          </div>
        </div>
      );

    case 'ubuntu-update':
      return <div style={{ height: '100%', background: '#e95420' }} />;

    case 'chromeos-update':
      return <div style={{ height: '100%', background: '#4285f4' }} />;

    /* ── Default: solid background ── */
    default:
      return <div style={{ background: bg, height: '100%' }} />;
  }
}

/* ── Component ───────────────────────────────────────── */
export function ToolCard({ tool, variant = 'compact' }: ToolCardProps) {

  /* Landscape variant — mini visual preview + name below */
  if (variant === 'landscape') {
    return (
      <Link
        to={`/tool/${tool.slug}`}
        onClick={scrollTop}
        className="landscape-card"
      >
        <div className="landscape-thumb">
          <MiniPreview slug={tool.slug} />
        </div>
        <p className="landscape-label">{tool.name}</p>
      </Link>
    );
  }

  /* Compact variant (default) — used on tool pages and category pages */
  const bg    = CARD_BG[tool.slug] ?? '#4f46e5';
  const light = LIGHT_BG.has(tool.slug);
  const sub   = CARD_SUB[tool.slug] ?? tool.description;

  return (
    <Link
      to={`/tool/${tool.slug}`}
      onClick={scrollTop}
      className="tool-card"
      style={{ backgroundColor: bg }}
    >
      <div style={{ padding: '16px 14px 14px' }}>
        <p style={{
          fontWeight: 700, fontSize: 14,
          color: light ? 'rgba(0,0,0,0.75)' : '#ffffff',
          lineHeight: 1.3, marginBottom: 4,
        }}>
          {tool.name}
        </p>
        <p style={{
          fontSize: 12,
          color: light ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.65)',
          lineHeight: 1.4,
        }}>
          {sub}
        </p>
      </div>
    </Link>
  );
}
