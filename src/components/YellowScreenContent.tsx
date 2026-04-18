import React from 'react';

const USE_CASES = [
  { title: 'Reduce eye strain', desc: 'Warm yellow light is easier on eyes than white or blue light' },
  { title: 'Comfortable reading', desc: 'Mimics paper tone for a book-like reading experience' },
  { title: 'Detect blue stuck pixels', desc: 'Blue subpixel defects appear as dark or purple spots against yellow' },
  { title: 'Focus and concentration', desc: 'Yellow promotes mental clarity for studying and detailed work' },
  { title: 'Late-night computing', desc: 'Warmer than white, less sleep-disruptive than blue light' },
  { title: 'Color calibration', desc: 'Test warm tone reproduction for design and branding work' },
  { title: 'Ambient mood lighting', desc: 'Cozy, inviting atmosphere similar to candlelight or incandescent bulbs' },
  { title: 'Blue light reduction', desc: 'Less blue wavelength content than standard white screens' },
  { title: 'E-reader simulation', desc: 'Create a Kindle-like warm reading environment in any browser' },
  { title: 'Brand color testing', desc: 'Match yellow branding for presentations and design projects' },
];

const HOW_IT_WORKS = [
  'Activate the yellow screen at 40–60% brightness for comfortable reading',
  'Press the Fullscreen button (or F11) for distraction-free coverage',
  'Use for reading, writing, or long work sessions — yellow mimics paper',
  'Press ESC or use the Fullscreen button to exit',
];

const IN_DEPTH = [
  {
    title: 'Eye Strain Reduction',
    body: 'Yellow light reduces digital eye strain during extended screen time. The warm wavelength (570–590 nm) requires less ocular effort to process than cool white or blue light. Studies show warm-toned displays reduce reported eye fatigue, headaches, and dry eye symptoms during prolonged computer work. Yellow screens are particularly beneficial for people who experience discomfort with white backgrounds during reading, coding, writing, or data entry.',
  },
  {
    title: 'Reading Mode & E-Reader Simulation',
    body: "Yellow backgrounds mimic paper tones, creating familiar, comfortable reading environments similar to Kindle's warm light settings or physical book pages. This reduces the stark contrast of black text on bright white, which causes eye fatigue during long sessions. Many e-readers and reading apps offer sepia or warm modes based on this principle — yellow screens provide the same benefit for any content.",
  },
  {
    title: 'Blue Subpixel Defect Detection',
    body: "Yellow combines red and green light channels, making blue subpixel failures highly visible. Blue defects appear as dark blue, purple, or black spots against bright yellow because yellow is blue's complementary opposite. When a blue subpixel fails, it creates a void in the color mix, revealing itself as a dark spot. This test complements white screen testing for comprehensive display diagnostics.",
  },
  {
    title: 'Focus & Cognitive Performance',
    body: 'Warm yellow light enhances mental clarity and concentration for detailed work. Research suggests yellow environments promote positive mood, creativity, and sustained attention compared to cool or neutral tones. Students, programmers, writers, and designers use yellow screens during focus sessions to reduce visual distraction. The warmth provides enough stimulation for alertness without the overstimulation of bright white light.',
  },
  {
    title: 'Late-Night Computing',
    body: 'Yellow light contains significantly less blue wavelength content than white screens while remaining brighter and more functional than red or orange. This makes yellow ideal for evening computer work when you need visibility but want to minimize circadian disruption. Yellow is a middle ground — warmer than white (better for sleep) but brighter than red or orange (better for productivity). Use 1–2 hours before bedtime when you need to work but want to preserve sleep quality.',
  },
  {
    title: 'Warm Color Calibration & Design',
    body: "Test your display's yellow reproduction for design projects, branding work, and color-critical applications. Pure yellow should appear without green shifts (too much green) or orange tints (too much red). Designers working with yellow brand colors (McDonald's, IKEA, Snapchat, Best Buy) need accurate yellow reproduction. Verify uniformity across the screen and consistency with reference colors.",
  },
  {
    title: 'Ambient & Mood Lighting',
    body: 'Yellow creates warm, inviting, cozy atmospheres similar to candlelight or incandescent bulbs — but brighter and more functional. Use for ambient lighting during relaxation sessions or creating comfortable workspaces. Yellow evokes optimism, warmth, and energy without the intensity of white or the sleepiness of red and orange. Adjust brightness to set the mood — dimmer for relaxation, brighter for active use.',
  },
  {
    title: 'Accessible Reading Backgrounds',
    body: 'Some individuals with visual processing difficulties, dyslexia, or light sensitivity find black text on yellow backgrounds easier to read than traditional black-on-white. Yellow reduces glare and contrast harshness while maintaining readability. This accessibility benefit varies by individual — experiment to find what works best for your visual comfort.',
  },
];

export function YellowScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── Why people use it ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why people use yellow screen</h2>
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
              <span style={{ color: '#eab308', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
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
