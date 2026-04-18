import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Makeup tutorials', desc: 'Even, shadow-free frontal lighting that flatters skin tones on camera' },
  { title: 'Portrait photography', desc: 'Create the signature ring catchlight in the subject\'s eyes' },
  { title: 'Selfies and self-portraits', desc: 'Eliminate harsh shadows and uneven lighting in self-taken photos' },
  { title: 'YouTube and TikTok content', desc: 'Achieve the professional look that top creators use in home studios' },
  { title: 'Skin care and beauty reviews', desc: 'Consistent, reproducible lighting for product demonstrations' },
  { title: 'Video calls and streaming', desc: 'Circular catchlights signal professional setup to viewers' },
  { title: 'Product photography', desc: 'Soft, even fill light minimizes harsh specular highlights on shiny products' },
  { title: 'Nail art documentation', desc: 'Shadow-free lighting reveals fine nail art detail clearly on camera' },
  { title: 'Dentistry and medical', desc: 'Even frontal illumination for intraoral photography and documentation' },
  { title: 'Testing before buying', desc: 'Simulate ring light results before purchasing hardware' },
];

const HOW_IT_WORKS = [
  'Adjust the intensity slider to set the brightness of the simulated ring',
  'Choose warm (tungsten, ~3200K) or cool (daylight, ~5600K) color temperature',
  'Use the size control to change the ring diameter relative to your screen',
  'Position your device to face you — the ring should frame your camera lens',
  'Open your camera app or video call to preview the effect live',
];

const IN_DEPTH = [
  {
    title: 'What Makes Ring Light Unique',
    body: 'A ring light is a circular light source that mounts around or directly behind a camera lens. Because the light surrounds the lens, shadows fall directly behind the subject — invisible to the camera. This creates the uniquely flat, even, shadow-free illumination that beauty and makeup photography relies on. The other signature characteristic is the circular catchlight — the ring-shaped reflection visible in the subject\'s eyes — now widely recognized as a marker of professional content creation.',
  },
  {
    title: 'Color Temperature: Warm vs Cool',
    body: 'Warm light (2700–3200K) mimics tungsten and candlelight — flattering for skin tones, creating a cozy, intimate atmosphere. Cool light (5500–6500K) mimics daylight — crisp, clinical, and accurate for color-sensitive work like skin care, dentistry, or product photography where true color rendition matters. Most beauty content uses slightly warm to neutral (4000–5000K) tones as a compromise between flattery and accuracy.',
  },
  {
    title: 'Ring Light vs Softbox',
    body: 'Softboxes produce directional light from one side, creating natural-looking shadows and depth. Ring lights produce frontal, shadowless light — flatter but less dimensional. Softboxes suit portrait and commercial photography where depth and dimensionality are valued. Ring lights suit beauty, makeup, and self-filming where shadow-free, even skin illumination is the priority. Neither is superior — they serve different aesthetic goals.',
  },
  {
    title: 'Positioning for Best Results',
    body: 'Mount the ring light at eye level with the camera at the center of the ring — this creates the circular catchlight and eliminates under-eye shadows. Tilting the ring down slightly can add a subtle shadow under the chin for jawline definition. Moving the ring further back reduces intensity and softens shadows. Closer positioning increases brightness and creates a larger, more visible catchlight.',
  },
  {
    title: 'Intensity and Exposure',
    body: 'Higher intensity is not always better. Overexposure from a ring light too close or too bright creates blown-out highlights on the forehead, nose tip, and cheekbones — especially on oily skin. Dial intensity back until skin shows texture without harsh specular highlights. Use your camera\'s histogram or highlight warning to find the optimal intensity before recording.',
  },
  {
    title: 'Planning Before Buying Hardware',
    body: 'Ring lights range from $20 clip-on LED circles to $300+ professional studio units. Use this simulator to understand how ring lighting affects your specific camera, room, and skin tone before spending money. Test different intensities and temperatures. If the simulation looks good, a mid-range ring light ($60–$100) will deliver those results with actual physical light output. If the effect doesn\'t suit your content style, try the Zoom Lighting simulator instead.',
  },
];

export function RingLightContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a ring light</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Even, shadow-free lighting — the standard for beauty, makeup, and content creation.
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
        { slug: 'zoom-lighting',       name: 'Zoom Lighting' },
        { slug: 'rgb-gradient',        name: 'RGB Gradient' },
        { slug: 'white-screen',        name: 'White Screen' },
        { slug: 'custom-color-screen', name: 'Custom Color Screen' },
      ]} />
    </>
  );
}
