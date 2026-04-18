import { useRef, useEffect, useState } from 'react';
import { useToolSettings } from '@/src/hooks/useToolSettings';
import { SettingsPanel } from '@/src/components/SettingsPanel';
import { Control } from '@/src/data/tools';

interface ToolPlaceholderProps {
  toolId: string;
  controls: Control[];
  previewColor?: string;
}

export function ToolPlaceholder({ toolId, controls, previewColor = '#3B82F6' }: ToolPlaceholderProps) {
  const { settings, updateSetting } = useToolSettings<Record<string, unknown>>(toolId, {});

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Preview Area */}
      <div className="md:col-span-2">
        <div
          className="w-full aspect-video rounded-lg border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-center p-6"
          style={{ backgroundColor: previewColor }}
        >
          <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-2">Preview</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              This tool is coming soon. Check back later!
            </p>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      {controls.length > 0 && (
        <div>
          <SettingsPanel
            controls={controls}
            settings={settings}
            onSettingChange={updateSetting}
            title="Settings"
          />
        </div>
      )}
    </div>
  );
}

// SMPTE Color Bars - TV test pattern
export function SMPTEColorBars() {
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden flex flex-col">
      {/* Color bars */}
      <div className="flex flex-1">
        {['#FFFFFF', '#FFFF00', '#00FFFF', '#00FF00', '#FF00FF', '#FF0000', '#0000FF'].map((color, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>
      {/* Bottom section with gradient */}
      <div className="h-1/4 flex">
        {['#000000', '#1D1D1D', '#404040', '#5D5D5D', '#808080', '#A0A0A0', '#C0C0C0'].map((color, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  );
}

// Zoom Lighting - spotlight effect
export function ZoomLighting() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { settings, updateSetting } = useToolSettings('zoom-lighting', { brightness: 100, zoom: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      if (cancelled) return;

      ctx.fillStyle = `rgba(255, 180, 77, ${(settings.brightness as number) / 100})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create spotlight
      const zoom = (settings.zoom as number) || 1;
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 50 * zoom,
        canvas.width / 2, canvas.height / 2, 300 * zoom
      );
      gradient.addColorStop(0, 'rgba(255, 200, 100, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 180, 77, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, [settings.brightness, settings.zoom]);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600" />
      <div className="space-y-2">
        <label className="block text-sm font-semibold">Brightness: {settings.brightness}%</label>
        <input
          type="range"
          min="0" max="100"
          value={settings.brightness as number}
          onChange={(e) => updateSetting('brightness', Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}

// Ring Light - photography lighting
export function RingLight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      if (cancelled) return;

      ctx.fillStyle = '#FFD700';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Inner ring glow
      const gradient = ctx.createRadialGradient(cx, cy, 80, cx, cy, 150);
      gradient.addColorStop(0, 'rgba(255, 255, 200, 0.6)');
      gradient.addColorStop(0.5, 'rgba(255, 240, 100, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 200, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600" />
  );
}

// RGB Gradient - animated color gradient
export function RGBGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      if (cancelled) return;

      frameRef.current += 0.01;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      const h1 = (frameRef.current * 360) % 360;
      const h2 = (frameRef.current * 360 + 120) % 360;
      const h3 = (frameRef.current * 360 + 240) % 360;

      gradient.addColorStop(0, `hsl(${h1}, 100%, 50%)`);
      gradient.addColorStop(0.5, `hsl(${h2}, 100%, 50%)`);
      gradient.addColorStop(1, `hsl(${h3}, 100%, 50%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600" />
  );
}

// White Noise - animated noise
export function WhiteNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { settings, updateSetting } = useToolSettings('white-noise', { intensity: 50 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      if (cancelled) return;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      const intensity = (settings.intensity as number) / 100;

      for (let i = 0; i < data.length; i += 4) {
        const gray = Math.random() * 255 * intensity;
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
        data[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, [settings.intensity]);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600" />
      <div className="space-y-2">
        <label className="block text-sm font-semibold">Intensity: {settings.intensity}%</label>
        <input
          type="range" min="0" max="100"
          value={settings.intensity as number}
          onChange={(e) => updateSetting('intensity', Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}

// Broken Screen - cracked glass effect
export function BrokenScreen() {
  return (
    <div className="w-full aspect-video rounded-lg border border-slate-800 bg-black relative overflow-hidden">
      <img
        src="/cracked%20screen.png"
        alt="Realistic cracked glass screen"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
}

// Radar Screen - animated radar
export function RadarScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      if (cancelled) return;

      frameRef.current = (frameRef.current + 2) % 360;

      // Black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) / 2 - 20;

      // Grid
      ctx.strokeStyle = '#00FF00';
      ctx.lineWidth = 1;
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (radius / 5) * i, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Center point
      ctx.fillStyle = '#00FF00';
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();

      // Rotating sweep
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      const angle = (frameRef.current * Math.PI) / 180;
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.stroke();

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600 bg-black" />
  );
}

// BSOD - Windows blue screen
export function BSOD() {
  return (
    <div className="w-full aspect-video bg-blue-900 p-8 flex flex-col justify-center items-start font-mono text-white text-sm rounded-lg border border-gray-300 dark:border-gray-600">
      <div className="space-y-2">
        <p>A problem has been detected and windows has been shut down to prevent damage to your computer.</p>
        <p className="mt-4">KERNEL_MODE_EXCEPTION_NOT_HANDLED</p>
        <p className="mt-4">If this is the first time you've seen this Stop error screen, restart your computer.</p>
        <p>If this screen appears again, follow these steps:</p>
        <p className="mt-2">Check for viruses and disable BIOS memory options such as caching or shadowing.</p>
      </div>
      <div className="mt-8">
        <p>*** SYSTEM HALTED ***</p>
      </div>
    </div>
  );
}

// Hacker Typer - matrix typing effect
export function HackerTyper() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const matrix: number[][] = [];

    for (let i = 0; i < canvas.width / 20; i++) {
      matrix[i] = [];
      for (let j = 0; j < canvas.height / 20; j++) {
        matrix[i][j] = Math.floor(Math.random() * chars.length);
      }
    }

    const animate = () => {
      if (cancelled) return;

      frameRef.current++;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF00';
      ctx.font = '16px monospace';

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          const char = chars[matrix[i][j]];
          ctx.fillText(char, i * 20, j * 20);

          if (Math.random() > 0.95) {
            matrix[i][j] = Math.floor(Math.random() * chars.length);
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600 bg-black" />
  );
}

// Fake Update - Windows update progress
export function FakeUpdate() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + Math.random() * 15));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-video bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Installing Updates</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Please don't turn off your computer</p>
      <div className="w-full max-w-md">
        <div className="bg-gray-300 dark:bg-gray-700 rounded-full h-8 overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          {Math.floor(Math.min(progress, 100))}%
        </p>
      </div>
    </div>
  );
}

// DVD Screensaver - bouncing logo
export function DVDScreensaver() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [vel, setVel] = useState({ x: 2, y: 2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((p) => {
        const container = containerRef.current;
        if (!container) return p;

        let newX = p.x + vel.x;
        let newY = p.y + vel.y;
        let newVelX = vel.x;
        let newVelY = vel.y;

        if (newX <= 0 || newX + 100 >= container.offsetWidth) {
          newVelX = -vel.x;
          newX = Math.max(0, Math.min(newX, container.offsetWidth - 100));
        }
        if (newY <= 0 || newY + 60 >= container.offsetHeight) {
          newVelY = -vel.y;
          newY = Math.max(0, Math.min(newY, container.offsetHeight - 60));
        }

        setVel({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });
    }, 30);

    return () => clearInterval(interval);
  }, [vel]);

  return (
    <div ref={containerRef} className="w-full aspect-video bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-600 relative overflow-hidden">
      <div
        className="absolute w-24 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg"
        style={{ left: `${pos.x}px`, top: `${pos.y}px`, transition: 'none' }}
      >
        DVD
      </div>
    </div>
  );
}

// Flip Clock
export function FlipClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div className="w-full aspect-video bg-gradient-to-b from-gray-900 to-black rounded-lg flex items-center justify-center">
      <div className="text-8xl font-bold text-white font-mono tracking-widest">
        <span className="inline-block px-4 py-2">{hours}</span>
        <span className="inline-block px-2">:</span>
        <span className="inline-block px-4 py-2">{minutes}</span>
        <span className="inline-block px-2">:</span>
        <span className="inline-block px-4 py-2">{seconds}</span>
      </div>
    </div>
  );
}

// Motivational Quote
export function MotivationalQuote() {
  const quotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Innovation distinguishes between a leader and a follower. - Steve Jobs',
    'Life is what happens when you are busy making other plans. - John Lennon',
    'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    'It is during our darkest moments that we must focus to see the light. - Aristotle',
    'The way to get started is to quit talking and begin doing. - Walt Disney',
    'Do not watch the clock; do what it does. Keep going. - Sam Levenson',
    'The best time to plant a tree was 20 years ago. The second best time is now.',
  ];

  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg flex items-center justify-center p-8">
      <div className="text-center">
        <p className="text-3xl font-bold text-gray-900 dark:text-white leading-relaxed">
          "{quote}"
        </p>
      </div>
    </div>
  );
}

// Matrix Screensaver
export function MatrixScreensaver() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 20;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0);

    const animate = () => {
      if (cancelled) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600 bg-black" />
  );
}

// Starfield Screensaver
export function StarfieldScreensaver() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const stars = Array(200).fill(0).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
    }));

    const animate = () => {
      if (cancelled) return;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.z -= 5;
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.z = canvas.width;
        }

        const x = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
        const size = (1 - star.z / canvas.width) * 2;

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600 bg-black" />
  );
}

/* ── Reusable +/- duration input for timer screens ── */
function DurationInput({
  label, value, min, max, step = 1, onChange, disabled,
}: {
  label: string; value: number; min: number; max: number;
  step?: number; onChange: (v: number) => void; disabled: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{label}</span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onChange(Math.max(min, value - step))}
          disabled={disabled || value <= min}
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white text-lg font-bold leading-none disabled:opacity-25 disabled:cursor-not-allowed transition-all"
        >−</button>
        <span className="w-12 text-center text-white font-extrabold tabular-nums text-xl select-none">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + step))}
          disabled={disabled || value >= max}
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white text-lg font-bold leading-none disabled:opacity-25 disabled:cursor-not-allowed transition-all"
        >+</button>
      </div>
    </div>
  );
}

// Pomodoro Timer
export function PomodoroTimer() {
  const [workMin, setWorkMin] = useState(25);
  const [breakMin, setBreakMin] = useState(5);
  const [totalSecs, setTotalSecs] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<'work' | 'break'>('work');

  const isWork = phase === 'work';
  const displayMin = Math.floor(totalSecs / 60);
  const displaySec = totalSecs % 60;

  const applyWorkMin = (v: number) => {
    setWorkMin(v);
    if (!isRunning && isWork) setTotalSecs(v * 60);
  };
  const applyBreakMin = (v: number) => {
    setBreakMin(v);
    if (!isRunning && !isWork) setTotalSecs(v * 60);
  };
  const reset = () => { setIsRunning(false); setPhase('work'); setTotalSecs(workMin * 60); };

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setTotalSecs((t) => {
        if (t > 1) return t - 1;
        // 0 reached — switch phase
        const next = phase === 'work' ? 'break' : 'work';
        setPhase(next);
        return (next === 'work' ? workMin : breakMin) * 60;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning, phase, workMin, breakMin]);

  return (
    <div className={`w-full aspect-video rounded-lg flex flex-col items-center justify-center gap-5 p-8 transition-colors duration-700 ${
      isWork ? 'bg-gradient-to-br from-red-950 to-rose-900' : 'bg-gradient-to-br from-emerald-950 to-teal-900'
    }`}>
      <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
        isWork ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'
      }`}>
        {isWork ? 'Work Session' : 'Break Time'}
      </div>

      <div className="text-7xl md:text-8xl font-extrabold text-white font-mono tabular-nums tracking-tight">
        {String(displayMin).padStart(2, '0')}:{String(displaySec).padStart(2, '0')}
      </div>

      <div className="flex gap-6">
        <DurationInput label="Work (min)" value={workMin} min={1} max={120} onChange={applyWorkMin} disabled={isRunning} />
        <DurationInput label="Break (min)" value={breakMin} min={1} max={60} onChange={applyBreakMin} disabled={isRunning} />
      </div>

      <div className="flex gap-3">
        <button onClick={() => setIsRunning(!isRunning)}
          className={`px-7 py-2.5 rounded-xl font-semibold text-white transition ${isWork ? 'bg-red-500 hover:bg-red-400' : 'bg-emerald-500 hover:bg-emerald-400'}`}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset}
          className="px-7 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl font-semibold text-white transition">
          Reset
        </button>
      </div>
    </div>
  );
}

// Stopwatch
export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setTime((t) => t + 10), 10);
    return () => clearInterval(id);
  }, [isRunning]);

  const fmt = (ms: number) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const cs = Math.floor((ms % 1000) / 10);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };

  const addLap = () => { if (isRunning) setLaps((prev) => [...prev, time]); };
  const reset = () => { setTime(0); setLaps([]); setIsRunning(false); };

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const cs = Math.floor((time % 1000) / 10);

  return (
    <div className="w-full aspect-video bg-gradient-to-br from-slate-900 to-blue-950 rounded-lg flex overflow-hidden">
      {/* Left: timer + controls */}
      <div className="flex flex-col items-center justify-center gap-5 p-8 flex-1">
        <div className="text-5xl md:text-6xl font-extrabold text-white font-mono tabular-nums tracking-tight">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}<span className="text-white/50 text-3xl md:text-4xl">.{String(cs).padStart(2, '0')}</span>
        </div>

        <div className="flex gap-3">
          <button onClick={() => setIsRunning(!isRunning)}
            className="px-6 py-2.5 bg-blue-500 hover:bg-blue-400 rounded-xl font-semibold text-white transition">
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={addLap} disabled={!isRunning}
            className="px-6 py-2.5 bg-violet-500 hover:bg-violet-400 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl font-semibold text-white transition">
            Lap
          </button>
          <button onClick={reset}
            className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl font-semibold text-white transition">
            Reset
          </button>
        </div>
      </div>

      {/* Right: lap list */}
      <div className="w-48 md:w-56 bg-white/5 border-l border-white/10 flex flex-col">
        <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Laps</span>
          {laps.length > 0 && (
            <span className="text-[10px] text-white/40">{laps.length}</span>
          )}
        </div>

        {laps.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[11px] text-white/25 text-center px-4">Press Lap while running to record split times</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            {[...laps].reverse().map((lapTime, reversedIdx) => {
              const idx = laps.length - 1 - reversedIdx;
              const prev = idx > 0 ? laps[idx - 1] : 0;
              const delta = lapTime - prev;
              const isLatest = reversedIdx === 0;
              return (
                <div key={idx}
                  className={`flex items-center justify-between px-4 py-2 border-b border-white/5 ${isLatest ? 'bg-white/8' : ''}`}>
                  <span className={`text-[11px] font-bold ${isLatest ? 'text-blue-300' : 'text-white/40'}`}>
                    #{idx + 1}
                  </span>
                  <div className="text-right">
                    <div className={`text-xs font-mono font-semibold tabular-nums ${isLatest ? 'text-white' : 'text-white/60'}`}>
                      {fmt(lapTime)}
                    </div>
                    <div className="text-[9px] font-mono text-white/30 tabular-nums">
                      +{fmt(delta)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// HIIT Timer
export function HIITTimer() {
  const [workSec, setWorkSec] = useState(30);
  const [restSec, setRestSec] = useState(10);
  const [phase, setPhase] = useState<'work' | 'rest' | 'prep'>('prep');
  const [timeLeft, setTimeLeft] = useState(3);
  const [isRunning, setIsRunning] = useState(false);

  const reset = () => { setIsRunning(false); setPhase('prep'); setTimeLeft(3); };

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  // Phase transitions when timeLeft hits 0
  useEffect(() => {
    if (!isRunning || timeLeft > 0) return;
    const next = phase === 'prep' ? 'work' : phase === 'work' ? 'rest' : 'work';
    setPhase(next);
    setTimeLeft(next === 'work' ? workSec : restSec);
  }, [timeLeft, isRunning, phase, workSec, restSec]);

  const bgs = { prep: 'from-slate-800 to-slate-900', work: 'from-orange-800 to-red-900', rest: 'from-blue-800 to-blue-900' };
  const accents = { prep: 'text-slate-300 bg-slate-500/20', work: 'text-orange-300 bg-orange-500/20', rest: 'text-blue-300 bg-blue-500/20' };
  const btns = { prep: 'bg-slate-500 hover:bg-slate-400', work: 'bg-orange-500 hover:bg-orange-400', rest: 'bg-blue-500 hover:bg-blue-400' };
  const labels = { prep: 'Get Ready', work: 'Work', rest: 'Rest' };

  return (
    <div className={`w-full aspect-video rounded-lg flex flex-col items-center justify-center gap-4 p-8 transition-colors duration-500 bg-gradient-to-br ${bgs[phase]}`}>
      <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${accents[phase]}`}>
        {labels[phase]}
      </div>

      <div className="text-8xl md:text-9xl font-extrabold text-white font-mono tabular-nums">
        {timeLeft}
      </div>

      <div className="flex gap-6">
        <DurationInput label="Work (sec)" value={workSec} min={5} max={300} step={5} onChange={(v) => setWorkSec(v)} disabled={isRunning} />
        <DurationInput label="Rest (sec)" value={restSec} min={5} max={300} step={5} onChange={(v) => setRestSec(v)} disabled={isRunning} />
      </div>

      <div className="flex gap-3">
        <button onClick={() => setIsRunning(!isRunning)}
          className={`px-7 py-2.5 rounded-xl font-semibold text-white transition ${btns[phase]}`}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset}
          className="px-7 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl font-semibold text-white transition">
          Reset
        </button>
      </div>
    </div>
  );
}

// Focus Screen - countdown timer
export function FocusScreen() {
  const [focusMin, setFocusMin] = useState(30);
  const [totalSecs, setTotalSecs] = useState(30 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const isDone = totalSecs === 0;

  const applyFocusMin = (v: number) => {
    setFocusMin(v);
    if (!isRunning) setTotalSecs(v * 60);
  };
  const reset = () => { setIsRunning(false); setTotalSecs(focusMin * 60); };

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setTotalSecs((t) => { if (t <= 1) { setIsRunning(false); return 0; } return t - 1; });
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const secs = totalSecs % 60;

  return (
    <div className="w-full aspect-video bg-gradient-to-br from-indigo-950 to-slate-900 rounded-lg flex flex-col items-center justify-center gap-5 p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
        {isDone ? '✓ Session Complete' : isRunning ? 'Stay Focused' : 'Ready to Focus'}
      </p>

      <div className={`text-6xl md:text-7xl font-extrabold font-mono tabular-nums tracking-tight transition-colors ${isDone ? 'text-emerald-400' : 'text-white'}`}>
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(secs).padStart(2, '0')}
      </div>

      <DurationInput label="Duration (min)" value={focusMin} min={1} max={480} step={5} onChange={applyFocusMin} disabled={isRunning} />

      <div className="flex gap-3">
        <button onClick={() => isDone ? reset() : setIsRunning(!isRunning)}
          className="px-7 py-2.5 bg-indigo-500 hover:bg-indigo-400 rounded-xl font-semibold text-white transition">
          {isDone ? 'Restart' : isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset}
          className="px-7 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl font-semibold text-white transition">
          Reset
        </button>
      </div>
    </div>
  );
}

// Meditation Breather
export function MeditationBreather() {
  const [scale, setScale] = useState(1);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  useEffect(() => {
    const cycle = async () => {
      // Inhale
      for (let i = 0; i <= 100; i++) {
        await new Promise((r) => setTimeout(r, 40));
        setScale(1 + i / 100);
      }
      setPhase('hold');

      // Hold
      await new Promise((r) => setTimeout(r, 4000));
      setPhase('exhale');

      // Exhale
      for (let i = 100; i >= 0; i--) {
        await new Promise((r) => setTimeout(r, 40));
        setScale(1 + i / 100);
      }
      setPhase('inhale');
    };

    cycle();
  }, []);

  return (
    <div className="w-full aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg flex flex-col items-center justify-center p-8">
      <div
        className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 dark:from-purple-500 dark:to-blue-500 transition-transform duration-1000"
        style={{ transform: `scale(${scale})` }}
      />
      <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-8 capitalize">{phase}</p>
    </div>
  );
}

// Fireplace Ambient
export function FireplaceAmbient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      if (cancelled) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flickering flames
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 5) * (i + 0.5);
        const flameHeight = Math.random() * 200 + 100;

        const gradient = ctx.createLinearGradient(x, canvas.height, x, canvas.height - flameHeight);
        gradient.addColorStop(0, 'rgba(255, 100, 0, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 200, 0, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 255, 100, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(x, canvas.height, 50 + Math.random() * 30, flameHeight, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-900" />
  );
}

// Rain Ambient
export function RainAmbient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const drops: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < 100; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      });
    }

    const animate = () => {
      if (cancelled) return;

      ctx.fillStyle = 'rgba(100, 150, 200, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(150, 200, 255, 0.6)';
      ctx.lineWidth = 2;

      drops.forEach((drop) => {
        drop.y += 5;
        if (drop.y > canvas.height) {
          drop.y = -10;
          drop.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + 10);
        ctx.stroke();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-600 dark:bg-gray-800" />
  );
}

// Particle System
export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { settings, updateSetting } = useToolSettings('particle-system', { count: 50, speed: 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;
    let cancelled = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; life: number }> = [];
    const count = (settings.count as number) || 50;
    const speed = (settings.speed as number) || 2;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        life: Math.random(),
      });
    }

    const animate = () => {
      if (cancelled) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.01;

        if (p.life <= 0) {
          p.life = 1;
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
        }

        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

        ctx.fillStyle = `rgba(100, 200, 255, ${p.life * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, [settings.count, settings.speed]);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="w-full aspect-video rounded-lg border border-gray-300 dark:border-gray-600 bg-black" />
      <div className="space-y-2">
        <label className="block text-sm font-semibold">Particle Count: {settings.count}</label>
        <input type="range" min="10" max="200" value={settings.count as number} onChange={(e) => updateSetting('count', Number(e.target.value))} className="w-full" />
      </div>
    </div>
  );
}

// Productivity Dashboard
export function ProductivityDashboard() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const { settings, updateSetting } = useToolSettings('productivity-dashboard', { elapsedSeconds: 0 });

  return (
    <div className="w-full aspect-video bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900 dark:to-pink-900 rounded-lg p-8 flex flex-col">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Productivity Dashboard</h2>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Timer */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Focus Time</p>
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            {Math.floor((settings.elapsedSeconds as number) / 60)}:{String((settings.elapsedSeconds as number) % 60).padStart(2, '0')}
          </p>
        </div>

        {/* To-Do List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">Tasks</p>
          <div className="flex-1 space-y-2 overflow-y-auto">
            {todos.map((todo, i) => (
              <div key={i} className="text-sm text-gray-700 dark:text-gray-300 flex justify-between">
                <span>- {todo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
