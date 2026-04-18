import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Detect yellow stuck pixels', desc: 'Yellow and orange defects stand out dramatically against pure blue' },
  { title: 'Test color accuracy', desc: 'Verify blue channel reproduction and uniformity across your display' },
  { title: 'Morning alertness', desc: 'Blue light promotes wakefulness and helps regulate circadian rhythm' },
  { title: 'Photography lighting', desc: 'Cool-toned fill light for modern, tech, and futuristic aesthetics' },
  { title: 'Subpixel testing', desc: 'Spot red and green subpixel failures as magenta or cyan dots' },
  { title: 'Screen calibration', desc: 'Check color temperature consistency across the entire panel' },
  { title: 'Video backgrounds', desc: 'Professional cool-toned backdrop for calls and presentations' },
  { title: 'Creative mood lighting', desc: 'Calming blue ambient light for workspaces and streaming setups' },
  { title: 'Blue light assessment', desc: 'Test how much blue light your device emits at normal brightness' },
  { title: 'OLED maintenance', desc: 'Exercise blue pixels uniformly to reduce image retention' },
];

const HOW_IT_WORKS = [
  'Click the blue screen preview to activate it',
  'Press the Fullscreen button (or F11 on desktop) for full coverage',
  'Adjust brightness to find stuck pixels or set the right lighting mood',
  'Press ESC or use the Fullscreen button to exit',
];

const IN_DEPTH = [
  {
    title: 'Yellow & Orange Stuck Pixel Detection',
    body: 'Blue screens are the most effective color for detecting yellow and orange stuck pixels. When both red and green subpixels get stuck in the "on" position, they create yellow or orange bright spots that are dramatically visible against pure blue. If you have noticed color distortion but cannot identify the source, a blue screen test is the best place to start.',
  },
  {
    title: 'Red & Green Subpixel Testing',
    body: 'Individual subpixel failures show clearly on blue screens. Red subpixel defects appear as magenta or reddish bright spots. Green subpixel issues manifest as cyan or bright green dots. Combined with red and green screen tests, blue provides complete RGB subpixel coverage for thorough display diagnostics.',
  },
  {
    title: 'Color Accuracy & Calibration',
    body: 'Test your display\'s blue channel reproduction for photography, video editing, and graphic design. Blue is a critical channel in RGB displays and requires precise calibration for accurate color grading. Check for uniform blue tone across the entire screen — variations indicate calibration problems or manufacturing defects.',
  },
  {
    title: 'Morning Productivity & Alertness',
    body: 'Blue light exposure during morning hours suppresses melatonin production and signals your body to wake up. Use blue screens for 15–30 minutes after waking to improve alertness, focus, and cognitive performance. This mimics natural daylight\'s effect on circadian rhythm and can help combat morning grogginess.',
  },
  {
    title: 'Photography & Video Lighting',
    body: 'Create cool, modern lighting for product photography, tech demos, or creative portraits. Blue fill light adds dimension without warmth — perfect for futuristic themes, tech products, or creating contrast with warm key lights. Adjust brightness to control intensity and match your lighting setup.',
  },
  {
    title: 'Screen Uniformity Testing',
    body: 'Blue screens reveal color temperature variations and panel uniformity issues invisible on other colors. Look for lighter or darker blue patches across the display — uneven tones indicate aging backlights, quality control problems, or manufacturing defects. Set brightness to 50% in a dark room for best results.',
  },
  {
    title: 'OLED Burn-In Prevention',
    body: 'Displaying solid blue exercises blue OLED subpixels uniformly, potentially reducing image retention. Blue subpixels typically age faster than red or green on OLED displays, so periodic blue screen sessions help balance pixel wear. Rotate through other solid colors for comprehensive OLED maintenance.',
  },
  {
    title: 'Video Background & Virtual Meetings',
    body: 'Blue screens provide professional, calming backdrops for video calls and presentations. Cool blue tones convey trust and professionalism without the clinical harshness of pure white or the dramatic intensity of dark colors — subtle enough to avoid distraction while maintaining visual presence.',
  },
];

export function BlueScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── Why people use it ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why people use blue screen</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Works on any device — phones, tablets, laptops, monitors, and TVs.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: 10,
        }}>
          {USE_CASES.map(({ title, desc }) => (
            <div
              key={title}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '12px 16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
              }}
            >
              <span style={{ color: '#3b82f6', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{title}</p>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ────────────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>How it works</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 10,
          marginTop: 16,
        }}>
          {HOW_IT_WORKS.map((text, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '14px 16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
              }}
            >
              <span style={{
                width: 26, height: 26, borderRadius: '50%',
                background: 'var(--text)', color: 'var(--bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, flexShrink: 0,
              }}>
                {i + 1}
              </span>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.55 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── In-depth guide ──────────────────────── */}
      <section>
        <h2 style={{ ...headingSx, marginBottom: 20 }}>Complete guide</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px 32px',
        }}>
          {IN_DEPTH.map(({ title, body }) => (
            <div key={title}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <ContentRelatedTools tools={[
        { slug: 'dead-pixel-test',    name: 'Dead Pixel Test' },
        { slug: 'green-screen',       name: 'Green Screen' },
        { slug: 'red-screen',         name: 'Red Screen' },
        { slug: 'purple-screen',      name: 'Purple Screen' },
        { slug: 'white-screen',       name: 'White Screen' },
      ]} />
    </>
  );
}
