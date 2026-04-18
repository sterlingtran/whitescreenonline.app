import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Video background removal', desc: 'Industry-standard chroma keying for YouTube, TikTok, and film production' },
  { title: 'Live streaming', desc: 'Virtual backgrounds for Twitch, OBS, Zoom, and Microsoft Teams' },
  { title: 'Detect magenta stuck pixels', desc: 'Red and blue subpixel defects stand out clearly against green' },
  { title: 'Weather forecasts', desc: 'Professional broadcast-style presentations with graphics behind you' },
  { title: 'Product videos', desc: 'Clean backgrounds for product demonstrations and reviews' },
  { title: 'Content creation', desc: 'Tutorial videos, talking-head content, and vlogs with any backdrop' },
  { title: 'Photography composites', desc: 'Replace backgrounds in Photoshop or Lightroom with ease' },
  { title: 'Virtual production', desc: 'Film-quality VFX and real-time background replacement' },
  { title: 'Subpixel testing', desc: 'Check red and blue channel accuracy across your display' },
  { title: 'DIY green screen', desc: 'Turn any display into a portable chroma key backdrop instantly' },
];

const HOW_IT_WORKS = [
  'Position your device 6–8 feet behind yourself for chroma keying',
  'Press the Fullscreen button for even, uninterrupted green coverage',
  'Record with your camera, then remove the green in your editing software',
  "Avoid wearing green — it will become transparent during keying",
];

const IN_DEPTH = [
  {
    title: 'Chroma Keying & Background Replacement',
    body: "Green is the industry-standard color for background removal in video production. Its wavelength (495–570 nm) is furthest from human skin tones, allowing clean separation between subject and background. Hollywood productions, YouTube creators, weather forecasters, and live streamers use green screens daily. In post-production, editing software removes the green and replaces it with any background — virtual sets, exotic locations, or graphic elements.",
  },
  {
    title: 'Live Streaming & Virtual Backgrounds',
    body: 'Content creators use green screens with OBS Studio, Streamlabs, Zoom, and Microsoft Teams to replace backgrounds in real time. This creates professional-looking streams without revealing your actual location, adds branding elements, or transports you to virtual environments. Gamers, educators, business presenters, and podcasters all rely on green screen for polished productions.',
  },
  {
    title: 'Magenta & Red Stuck Pixel Detection',
    body: 'Green screens are essential for detecting red and blue subpixel failures. When both subpixels get stuck in the "on" position, they create bright magenta dots highly visible against green. Individual red subpixel defects appear as red dots, while blue defects show as cyan. Combined with red and blue screen tests, green provides complete RGB subpixel diagnostic coverage.',
  },
  {
    title: 'YouTube & Content Creation',
    body: 'Professional YouTubers use green screens for tutorials, product reviews, talking-head content, and creative productions. Green screen technology lets you appear anywhere — in front of product demos, over screen recordings, in branded environments, or fantastical locations. This production value was once limited to Hollywood budgets but is now accessible to anyone with a camera and editing software.',
  },
  {
    title: 'Photography Composites & Product Shots',
    body: 'Photographers use green backgrounds for portrait composites, product photography, and creative work. Shoot subjects against green, then replace backgrounds in Photoshop or Lightroom. This technique creates studio-quality results without expensive backdrops, allows seasonal background changes without reshoots, and enables impossible or fantasy locations.',
  },
  {
    title: 'Weather Forecasting & Presentations',
    body: 'Television meteorologists stand in front of green screens while weather maps appear behind them. The same technique works for business presentations, educational content, or any scenario where you need to appear in front of graphics, maps, charts, or slides — creating engaging, professional content that holds viewer attention.',
  },
  {
    title: 'Display Testing & Calibration',
    body: 'Beyond video production, green screens test display quality and color accuracy. Check green channel uniformity across the panel — variations indicate calibration issues or manufacturing defects. Ensure pure green reproduction without yellow (too much red) or cyan (too much blue) color casts. Critical for photography and video editing monitors requiring accurate color.',
  },
  {
    title: 'Film & Broadcast Production',
    body: 'Professional film and television productions use massive green screens for visual effects sequences. Actors perform against green while VFX artists add environments in post-production. The same technology scales to independent filmmakers, corporate video production, and smartphone content creators using portable green screen apps.',
  },
];

export function GreenScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── Why people use it ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why people use green screen</h2>
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

      <ContentRelatedTools tools={[
        { slug: 'blue-screen',         name: 'Blue Screen' },
        { slug: 'red-screen',          name: 'Red Screen' },
        { slug: 'dead-pixel-test',     name: 'Dead Pixel Test' },
        { slug: 'custom-color-screen', name: 'Custom Color Screen' },
        { slug: 'white-screen',        name: 'White Screen' },
      ]} />
    </>
  );
}
