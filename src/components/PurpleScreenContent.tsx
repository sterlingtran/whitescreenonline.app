import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Streaming backgrounds', desc: 'Popular Twitch and YouTube aesthetic for gaming and content setups' },
  { title: 'Detect green stuck pixels', desc: 'Green subpixel defects appear as bright dots against purple' },
  { title: 'Creative mood lighting', desc: 'Artistic, imaginative atmosphere for studios and workspaces' },
  { title: 'Meditation and relaxation', desc: 'Calming purple tones for mindfulness sessions and wind-down' },
  { title: 'Luxury ambiance', desc: 'Premium, sophisticated atmosphere for events and displays' },
  { title: 'Photography lighting', desc: 'Dramatic purple fill light for artistic portraits and fashion shoots' },
  { title: 'RGB gaming setups', desc: 'Match popular purple LED gaming aesthetics effortlessly' },
  { title: 'Brand color testing', desc: 'Match purple branding for Twitch, Yahoo, FedEx, Cadbury, and more' },
  { title: 'Color calibration', desc: 'Test magenta and purple reproduction for design work' },
  { title: 'Creativity boost', desc: 'Purple stimulates imagination and artistic thinking' },
];

const HOW_IT_WORKS = [
  'Activate the purple screen at 40–60% brightness for creative lighting',
  'Press the Fullscreen button (or F11) for full atmospheric coverage',
  'Use for streaming, creative work, meditation, or display testing',
  'Press ESC or use the Fullscreen button to exit',
];

const IN_DEPTH = [
  {
    title: 'Streaming & Content Creation',
    body: "Purple is one of the most popular colors for streaming setups and content creator aesthetics. The color evokes creativity, mystery, and energy — perfect for engaging audiences on Twitch, YouTube, or TikTok. Purple backgrounds create visual interest without overwhelming on-screen content, work well with RGB lighting setups popular in gaming culture, and align with major platform branding. Use purple screens as webcam backgrounds or ambient lighting during live broadcasts.",
  },
  {
    title: 'Green Subpixel Defect Detection',
    body: "Purple combines red and blue light channels, making green subpixel failures highly visible. When green subpixels get stuck off or fail to function, they appear as bright green, yellow-green, or cyan dots against the purple background. Purple's complementary relationship with green on the color wheel creates maximum contrast for detecting green channel defects that might be invisible on other test colors.",
  },
  {
    title: 'Creative & Artistic Mood Lighting',
    body: 'Purple stimulates imagination, creativity, and artistic thinking according to color psychology research. Artists, designers, writers, and creative professionals use purple ambient lighting to enhance creative flow. The color combines red\'s energy with blue\'s calmness, creating balanced stimulation ideal for creative problem-solving. Purple lighting in studios and workspaces establishes an atmosphere conducive to innovation and artistic expression.',
  },
  {
    title: 'Meditation & Mindfulness',
    body: 'Purple is associated with spirituality, mindfulness, and deep relaxation in many wellness traditions. It appears in chakra systems (crown chakra), meditation spaces, and yoga studios worldwide. Purple screens provide calming ambient lighting for meditation sessions, breathing exercises, and mindfulness practices. The cool tone promotes introspection and mental clarity while the warmth from red content prevents the coldness of pure blue.',
  },
  {
    title: 'Luxury & Sophisticated Atmospheres',
    body: 'Purple has long symbolized royalty, luxury, and exclusivity — from Roman emperors\' purple togas to modern premium branding. Use purple ambient lighting for upscale events, elegant dinner parties, luxury product displays, or creating premium atmospheres in retail or hospitality. The color conveys sophistication, quality, and refinement. Purple works exceptionally well for wine tastings, art gallery openings, or any scenario requiring elegant high-end ambiance.',
  },
  {
    title: 'Gaming & RGB Aesthetic',
    body: 'Purple dominates modern gaming aesthetics, appearing in RGB keyboards, mice, headsets, and room lighting. Gamers use purple screens to match hardware lighting setups, create immersive atmospheres, or serve as ambient backlighting during gameplay. Purple reduces eye strain compared to bright white while maintaining visual interest and energy. The color pairs perfectly with cyan and teal accents popular in gaming and cyberpunk aesthetics.',
  },
  {
    title: 'Photography & Video Lighting',
    body: 'Purple fill light creates dramatic, artistic, mysterious effects in portrait photography, music videos, fashion shoots, and creative commercial work. Position purple screens at 45–90 degrees from subjects for accent lighting, hair lights, or background color washing. Purple lighting evokes creativity, mystery, passion, or fantasy — perfect for artistic portraits, beauty photography, music artist promos, or fantasy-themed content.',
  },
  {
    title: 'Brand Color Accuracy Testing',
    body: "Test your display's purple and magenta reproduction for branding work and design projects. Major brands using purple include Twitch, Yahoo, FedEx, Cadbury, Hallmark, Roku, and Milka. Designers need accurate purple reproduction — too much blue creates violet, too much red creates magenta. Verify uniform purple tone across the screen and consistency with brand style guides requiring specific purple values.",
  },
];

export function PurpleScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── Why people use it ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why people use purple screen</h2>
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
              <span style={{ color: '#a855f7', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
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
        { slug: 'pink-screen',         name: 'Pink Screen' },
        { slug: 'dead-pixel-test',     name: 'Dead Pixel Test' },
        { slug: 'custom-color-screen', name: 'Custom Color Screen' },
      ]} />
    </>
  );
}
