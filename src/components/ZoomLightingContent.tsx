import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Video calls and Zoom', desc: 'Look professional with balanced key and fill light before your next meeting' },
  { title: 'YouTube filming', desc: 'Simulate a two-light setup before investing in expensive studio equipment' },
  { title: 'Twitch streaming', desc: 'Eliminate flat, harsh webcam lighting with a virtual key and fill setup' },
  { title: 'LinkedIn profile video', desc: 'Record professional headshots and intro videos with controlled lighting' },
  { title: 'Online interviews', desc: 'Create a polished first impression for job interviews and client calls' },
  { title: 'Podcast recording', desc: 'Improve face camera quality for video podcast recordings' },
  { title: 'Teaching online', desc: 'Look engaged and well-lit for students in virtual classrooms' },
  { title: 'Photography planning', desc: 'Preview how key and fill light ratios affect shadows and dimension' },
  { title: 'Product demos', desc: 'Demonstrate products on camera with professional-looking illumination' },
  { title: 'Content creation', desc: 'Improve social media video quality without buying lighting gear' },
];

const HOW_IT_WORKS = [
  'Position your device or monitor to face you at roughly eye level',
  'Adjust the key light intensity — this is your main, brighter light source',
  'Set the fill light lower than the key to soften shadows without eliminating them',
  'Choose warm (3200K) or cool (5600K) color temperatures to match your environment',
  'Open your video call or recording app and preview the effect on your webcam',
];

const IN_DEPTH = [
  {
    title: 'Key Light and Fill Light Explained',
    body: 'Professional lighting uses at least two lights: a key light and a fill light. The key light is the primary, brighter source — it defines the subject and creates shape. The fill light is softer and placed on the opposite side — it reduces the harshness of shadows created by the key. A classic key-to-fill ratio of 2:1 or 3:1 creates dimensional, flattering on-camera lighting without looking flat or theatrical.',
  },
  {
    title: 'Color Temperature for Video Calls',
    body: 'Color temperature is measured in Kelvin and describes whether light appears warm (orange, 2700–3200K) or cool (blue-white, 5500–6500K). Daylight is approximately 5600K. Most webcams auto-balance to ambient light, so if you use a warm-toned monitor as a key light, your webcam may shift colors unexpectedly. Match your simulated lighting temperature to the dominant light in your room for the most natural result.',
  },
  {
    title: 'Why Screen Lighting Works',
    body: 'An LCD or OLED display is a diffuse, soft light source — similar to a professional softbox. Unlike bare bulbs or LED strips, screens distribute light evenly across a large panel surface. This creates flattering, soft lighting without harsh specular highlights. The larger the screen, the softer the light — a 27-inch monitor provides noticeably softer illumination than a 13-inch laptop.',
  },
  {
    title: 'Positioning for Zoom and Teams',
    body: 'For the most flattering video call lighting: place your main screen (with the simulated key light) directly behind your webcam or slightly off to one side at a 45-degree angle. Position a second screen or a white wall reflection as fill on the opposite side. The key should be slightly above eye level — mimicking natural overhead daylight — to create gentle under-eye shadows that give depth without being unflattering.',
  },
  {
    title: 'Without Additional Equipment',
    body: 'Most lighting advice recommends buying ring lights, softboxes, or LED panels. But if you have a laptop, monitor, or tablet, you already have a capable light source. This tool lets you experiment with lighting ratios and color temperatures without spending anything. Once you find a setup that works, you can decide whether dedicated equipment is worth the investment based on real results, not speculation.',
  },
  {
    title: 'Streaming and Content Creation',
    body: 'Streamers and YouTubers consistently receive better engagement when they are well-lit on camera — lighting quality signals production value and professionalism. Using a second monitor displaying a warm key light and a tablet or ring light for fill creates a budget two-point lighting setup. Combine this with a dark or neutral background to make your face the clear focus of the frame.',
  },
];

export function ZoomLightingContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use virtual lighting for video calls</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Look professional on camera without buying a single piece of lighting equipment.
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
        { slug: 'ring-light',         name: 'Ring Light' },
        { slug: 'rgb-gradient',       name: 'RGB Gradient' },
        { slug: 'white-screen',       name: 'White Screen' },
        { slug: 'custom-color-screen',name: 'Custom Color Screen' },
      ]} />
    </>
  );
}
