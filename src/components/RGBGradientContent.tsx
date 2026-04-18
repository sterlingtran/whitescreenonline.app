import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Gaming setup aesthetics', desc: 'Match your screen gradient to RGB keyboard, mouse, and peripheral lighting' },
  { title: 'Creative photography', desc: 'Use a gradient screen as a colored background or two-tone fill light' },
  { title: 'Neon portrait photography', desc: 'Split-tone light faces with complementary colors for editorial portraits' },
  { title: 'Music video production', desc: 'Add colored screen gradients as practical lights in low-budget video shoots' },
  { title: 'Fashion photography', desc: 'Colorful gradient backgrounds add dynamism to clothing and accessory shots' },
  { title: 'Twitch and streaming overlays', desc: 'Match your screen to broadcast themes or season-specific color palettes' },
  { title: 'Background for product shots', desc: 'Soft gradients add depth to product photography without physical props' },
  { title: 'Ambient room lighting', desc: 'Use a large monitor or TV as a color-changing ambient light source' },
  { title: 'Color theory study', desc: 'Visualize complementary, analogous, and triadic color combinations at scale' },
  { title: 'Presentation backgrounds', desc: 'Create striking gradient backdrops for slide decks and on-screen visuals' },
];

const HOW_IT_WORKS = [
  'Choose your first gradient color using the color picker or hex input',
  'Choose a second gradient color for the opposite end of the blend',
  'Select the gradient direction — horizontal, vertical, or diagonal',
  'Adjust the midpoint to bias the blend toward either color',
  'Click Fullscreen to expand the gradient across your entire display',
];

const IN_DEPTH = [
  {
    title: 'Linear vs Radial Gradients',
    body: 'A linear gradient transitions smoothly between two colors along a straight axis — horizontal, vertical, or diagonal. A radial gradient emanates from a central point outward, creating a circular or elliptical blend. Linear gradients are more versatile for photography and video use since they produce even split-tone lighting. Radial gradients create a spotlight effect — useful for product photography where you want to draw attention to the center of frame.',
  },
  {
    title: 'Split-Tone Photography',
    body: 'Split-tone lighting places two different colored lights on opposite sides of the subject. The technique creates visual depth and a striking editorial look — popularized in music video and fashion photography. A magenta-to-cyan gradient, for example, illuminates the left side of a face with warm pink and the right with cool blue. The blend between them creates a naturalistic transition rather than a hard color line.',
  },
  {
    title: 'Color Harmony for Gradients',
    body: 'The most visually pleasing gradients use colors that are harmonious: complementary colors (opposite on the color wheel) create high contrast and tension; analogous colors (adjacent on the wheel) create smooth, natural transitions. A blue-to-purple gradient is analogous — elegant and calm. A red-to-cyan gradient is complementary — bold and dynamic. Start with the palette presets to explore both categories before customizing.',
  },
  {
    title: 'Using Screens as Practical Lights',
    body: 'In film and photography, a "practical light" is a real light source visible in the shot — a lamp, neon sign, or window. A large screen displaying a gradient acts as a practical light: it illuminates the subject and is visible in the background, adding color and depth simultaneously. Positioning a 27-inch monitor with a gradient 45 degrees to camera left provides both key illumination and a colorful background element in one.',
  },
  {
    title: 'RGB and Gaming Aesthetics',
    body: 'RGB lighting in gaming peripherals and PC builds is driven by the same design principles as gradient lighting in photography — color creates mood and signals personality. A red-to-black gradient matches aggressive gaming themes; blue-to-purple suits sci-fi aesthetics; orange-to-yellow complements warm, retro setups. Using this tool as a screen gradient that matches your peripheral RGB sync creates a cohesive, immersive desktop environment.',
  },
  {
    title: 'Gradient Direction and Composition',
    body: 'Gradient direction determines how color energy flows through the frame. A top-to-bottom gradient suggests sky and ground — natural, grounding. A left-to-right gradient implies movement and direction. A diagonal gradient creates dynamic tension and draws the eye across the composition. For portrait photography, a left-to-right diagonal at 45 degrees typically produces the most flattering split-tone effect, as it aligns with the natural direction of face illumination.',
  },
];

export function RGBGradientContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use an RGB gradient screen</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Two colors, infinite combinations — for photography, streaming, and ambient lighting.
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
        { slug: 'ring-light',          name: 'Ring Light' },
        { slug: 'zoom-lighting',       name: 'Zoom Lighting' },
        { slug: 'custom-color-screen', name: 'Custom Color Screen' },
        { slug: 'white-screen',        name: 'White Screen' },
      ]} />
    </>
  );
}
