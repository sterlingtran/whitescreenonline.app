import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Match brand colors', desc: 'Display your exact brand hex code as a full-screen swatch for presentations' },
  { title: 'Photography fill light', desc: 'Use any hue as a colored fill or rim light for product and portrait photography' },
  { title: 'Color grading reference', desc: 'Generate a flat reference color for white balance and color chart calibration' },
  { title: 'Interior design preview', desc: 'Hold paint swatches against the screen to compare colors in real light' },
  { title: 'Accessibility testing', desc: 'View exact colors to evaluate contrast ratios and readability for WCAG compliance' },
  { title: 'Dead pixel detection', desc: 'Cycle through custom colors to reveal stuck pixels that standard tests miss' },
  { title: 'Mood lighting', desc: 'Use a tablet as a colored ambient light source — choose any warm or cool hue' },
  { title: 'Stage and event lighting', desc: 'Color-match screen backgrounds to physical stage lighting rigs' },
  { title: 'Graphic design reference', desc: 'Display precise Pantone or RAL color equivalents as hex codes on screen' },
  { title: 'UI / UX prototyping', desc: 'Quickly visualize how a background color feels at full scale before committing' },
];

const HOW_IT_WORKS = [
  'Choose from the 80-color curated palette for instant results',
  'Or type any 6-digit hex code (e.g. #1A2B3C) directly',
  'Adjust R, G, B sliders for precise numerical control',
  'Use the native color picker for visual color selection',
  'Click Fullscreen to expand the color across your entire display',
];

const IN_DEPTH = [
  {
    title: 'Hex Codes, RGB, and HSL',
    body: 'Hex codes are the most universal color format — a 6-digit combination of red, green, and blue channel values written in base 16 (e.g., #FF5733). RGB notation expresses the same values on a 0–255 scale per channel. HSL (hue, saturation, lightness) is intuitive for choosing colors by appearance. This tool accepts hex input and provides RGB sliders so you can approach color from whichever angle you prefer.',
  },
  {
    title: 'Photography: Colored Fill Light',
    body: 'A screen displaying a solid, saturated color becomes a practical colored fill light for product photography and video. Red, orange, and yellow hues add warmth; cyan and blue create cool separation. The effect is most visible when shooting in a dim room with the screen angled slightly off-axis. Adjust brightness in the settings panel to control the light intensity without changing exposure settings.',
  },
  {
    title: 'Color Grading and Display Calibration',
    body: 'Video editors and colorists use specific reference colors — 75% white, 100% red, legal limits — to verify monitor accuracy before grading. A custom color screen displaying the exact hex value needed provides a fast, free reference without requiring dedicated calibration hardware. Compare the displayed color against a physical Pantone chip to assess monitor color accuracy.',
  },
  {
    title: 'Accessibility and WCAG Testing',
    body: 'WCAG 2.1 AA requires a minimum 4.5:1 contrast ratio for body text. Visualizing background and text color combinations at full scale helps UX designers catch low-contrast pairings before development. Use a custom color screen to generate the exact background hex, then hold printed or on-screen text samples against it to evaluate legibility across different lighting conditions.',
  },
  {
    title: 'Brand Color Presentations',
    body: 'Designers presenting brand identity work can display primary, secondary, and accent colors at full-screen scale to communicate how a color feels in context — not just as a chip in a style guide. A 15-inch laptop screen displaying a brand\'s exact blue communicates more than a 1-inch swatch. Use the keyboard to cycle between colors during a live client presentation.',
  },
  {
    title: 'Interior Design and Paint Matching',
    body: 'Match wall paint swatches against digital color codes by holding the swatch directly against the screen. While monitors vary in color accuracy, this technique helps confirm whether a physical paint color leans warm or cool compared to a reference hex code. Use in combination with indirect natural light for the most accurate comparison — avoid direct sunlight, which oversaturates the screen.',
  },
];

export function CustomColorScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a custom color screen</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Any color. Any device. Instant fullscreen display — no software required.
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
        { slug: 'white-screen',    name: 'White Screen' },
        { slug: 'black-screen',    name: 'Black Screen' },
        { slug: 'dead-pixel-test', name: 'Dead Pixel Test' },
        { slug: 'rgb-gradient',    name: 'RGB Gradient' },
      ]} />
    </>
  );
}
