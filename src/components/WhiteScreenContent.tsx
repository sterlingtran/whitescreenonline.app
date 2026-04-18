import React from 'react';

const USE_CASES = [
  { title: 'Find dead pixels', desc: 'Spot black dots and stuck pixels on any monitor or phone screen' },
  { title: 'Clean your screen', desc: 'Bright background reveals dust, fingerprints, and smudges instantly' },
  { title: 'Emergency light', desc: 'Read or work when the light switch is too far away' },
  { title: 'Makeup lighting', desc: 'Bright, even light source for applying makeup or taking photos' },
  { title: 'Blank screen focus', desc: 'Eliminate distractions on a second monitor while you work or study' },
  { title: 'Drawing light box', desc: 'Trace drawings at night by placing paper directly on your screen' },
  { title: 'Photography fill light', desc: 'Soft fill light for video calls, product shots, and portraits' },
  { title: 'Catch flies', desc: 'Attracts small flies and gnats to the display — yes, really' },
  { title: 'Animation tracing', desc: 'DIY light table for traditional animation and flipbook tracing' },
  { title: 'Monitor calibration', desc: 'Verify brightness uniformity and check for backlight bleed' },
];

const HOW_IT_WORKS = [
  'Click the white screen preview to activate it',
  'Press the Fullscreen button (or F11 on desktop) for full coverage',
  'Adjust brightness and color temperature using the controls',
  'Press ESC or use the Fullscreen button to exit',
];

const IN_DEPTH = [
  {
    title: 'Monitor & Display Testing',
    body: "Test your screen's brightness uniformity, color accuracy, and backlight performance. A pure white screen helps identify display issues like backlight bleeding, dead pixels, and color inconsistencies across your monitor, laptop, TV, or mobile device. Look for dark patches indicating backlight problems or uneven brightness distribution.",
  },
  {
    title: 'Dead Pixel Detection',
    body: 'Quickly spot dead or stuck pixels on your display. A solid white background makes it easy to identify black spots (dead pixels) or colored dots (stuck pixels), especially on new monitors or after screen repairs. Move your head slightly while scanning to catch subtle defects.',
  },
  {
    title: 'Screen Cleaning Companion',
    body: 'Illuminate dust, fingerprints, and smudges on your screen surface. The bright white background acts as a backlight that reveals dirt invisible on dark screens, making cleaning more thorough. After cleaning, use the white screen again to verify every smudge is gone.',
  },
  {
    title: 'Photography & Video Lighting',
    body: 'Use your device as an emergency fill light, hair light, or background illumination for photos and videos. Adjust the color temperature from cool to warm white to match your lighting setup — perfect for product photography, selfies, or video calls in poorly lit rooms.',
  },
  {
    title: 'Reading & Task Light',
    body: 'Convert your tablet or phone into a portable reading light when the lamp is across the room or during a power outage. Adjust brightness and warmth for comfortable nighttime reading without disturbing others sleeping nearby.',
  },
  {
    title: 'Display Calibration & Color Grading',
    body: 'Professionals use white screens to calibrate monitors for photography, video editing, and graphic design. Check white balance accuracy and ensure your display shows true whites without color casts — no yellowing or bluish tints.',
  },
  {
    title: 'Creative Work & Animation',
    body: 'Traditional animators place paper directly on tablet screens with a white background to trace drawings — a free DIY light table. Artists working at night can see paper drawings clearly without expensive equipment.',
  },
  {
    title: 'Focus & Productivity',
    body: 'On dual monitor setups, display a white screen on the secondary monitor to eliminate visual distractions from notifications and open tabs. Creates a clean, distraction-free visual environment for deep work or studying.',
  },
];

export function WhiteScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── Why people use it ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why people use white screen</h2>
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
              <span style={{ color: '#22c55e', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
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
    </>
  );
}
