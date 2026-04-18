import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Flattering beauty lighting', desc: 'Softens skin tones for makeup application and selfies' },
  { title: 'Photography fill light', desc: 'Gentle, romantic lighting for portraits and beauty shots' },
  { title: 'Calming atmosphere', desc: 'Pink reduces stress and aggression — the Baker-Miller effect' },
  { title: 'Romantic ambiance', desc: "Valentine's Day, weddings, date nights, and special occasions" },
  { title: 'Nursery lighting', desc: 'Gentle, soothing light for babies and young children' },
  { title: 'Breast cancer awareness', desc: 'Pink ribbon events, fundraisers, and support campaigns' },
  { title: 'Kawaii and cute aesthetic', desc: 'Popular in kawaii gaming, streaming, and pastel social media' },
  { title: 'Brand color testing', desc: 'Match pink branding for Barbie, Victoria\'s Secret, T-Mobile, and more' },
  { title: 'Makeup tutorials', desc: 'Soft lighting for beauty content and cosmetics videos' },
  { title: 'Feminine spaces', desc: 'Beauty rooms, dressing areas, and feminine home decor' },
];

const HOW_IT_WORKS = [
  'Position the screen 2–4 feet from your face at eye level for beauty lighting',
  'Set brightness to 40–70% for soft, flattering fill light',
  'For ambiance, reduce to 20–40% to create a gentle, romantic atmosphere',
  'Press ESC or use the Fullscreen button to exit',
];

const IN_DEPTH = [
  {
    title: 'Flattering Beauty & Portrait Lighting',
    body: 'Pink is one of the most flattering colors for human skin tones, creating soft illumination that minimizes blemishes, evens complexion, and adds warmth without harsh shadows. Beauty influencers, makeup artists, and portrait photographers use pink lighting because it complements natural skin undertones, reduces the appearance of redness or discoloration, and creates a soft-focus effect similar to professional beauty lighting. Position pink screens as fill lights during makeup application, selfies, or portrait photography for naturally flattering results.',
  },
  {
    title: 'Calming & Stress-Reducing Properties',
    body: 'Research on "Baker-Miller Pink" shows that certain shades of pink can reduce aggression, anxiety, and stress levels. While the effect is debated, multiple studies document calming responses to pink environments. Pink screens create soothing atmospheres for relaxation, meditation, or stress relief. The gentle warmth provides comfort without the intensity of red or the coolness of blue — a psychological middle ground associated with nurturing, safety, and calmness.',
  },
  {
    title: 'Romantic & Special Occasion Ambiance',
    body: "Pink is universally associated with romance, love, and affection. Use pink ambient lighting for Valentine's Day celebrations, romantic dinners, marriage proposals, wedding receptions, or date nights at home. Pink creates intimate, warm, loving atmospheres without the intensity of red. Adjust brightness based on desired mood — dimmer (20–30%) for intimate romance, brighter (50–60%) for festive celebrations.",
  },
  {
    title: 'Nursery & Baby Soothing Light',
    body: "Pink provides gentle, non-stimulating illumination perfect for nurseries, feeding time, diaper changes, or calming fussy babies. The soft warm glow is easier on infant eyes than bright white light, creates a nurturing environment, and doesn't disrupt developing sleep patterns as much as blue-heavy white light. For nighttime baby care when you need visibility, pink is far gentler than standard white lighting.",
  },
  {
    title: 'Beauty Content & Makeup Tutorials',
    body: 'Beauty YouTubers, TikTok creators, and Instagram influencers use pink backgrounds and lighting to create aesthetically pleasing beauty content. Pink complements cosmetics, skincare products, and beauty tools while providing flattering illumination for demonstrating makeup application. Pink screens work as webcam backgrounds, product photography backdrops, or fill lighting for tutorials. The color aligns with beauty industry aesthetics and creates cohesive visual branding.',
  },
  {
    title: 'Kawaii, Cute & Pastel Aesthetics',
    body: 'Pink dominates kawaii (cute) culture, pastel gaming setups, and soft aesthetic trends popular on social media. Gamers, streamers, and content creators use pink lighting to match kawaii peripherals, create soft girl or pastel goth aesthetics, or establish distinctive cute branding. Pink works particularly well with white, mint, lavender, and pastel blue for cohesive color schemes — appealing strongly to specific gaming and streaming communities.',
  },
  {
    title: 'Photography & Video Production',
    body: 'Professional photographers use pink fill lights for beauty photography, fashion editorials, cosmetics advertising, and portrait work requiring soft, flattering illumination. Pink light warms skin tones naturally, reduces the appearance of skin imperfections, creates gentle catchlights in eyes, and adds romantic mood to images. Position tablets or monitors at 45–90 degrees from subjects and combine with neutral key lights for professional results.',
  },
  {
    title: 'Feminine Branding & Marketing',
    body: "Major brands use pink to convey feminine qualities and warmth: Victoria's Secret, Barbie, Benefit Cosmetics, Glossier, T-Mobile, and Cosmopolitan. Test your display's pink reproduction for branding projects, product packaging design, or marketing materials. Pink should appear without orange shifts (too much red) or purple shifts (too much blue). Verify uniform tone and consistency with brand color specifications.",
  },
];

export function PinkScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── Why people use it ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why people use pink screen</h2>
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
              <span style={{ color: '#ec4899', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
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
        { slug: 'purple-screen',       name: 'Purple Screen' },
        { slug: 'orange-screen',       name: 'Orange Screen' },
        { slug: 'white-screen',        name: 'White Screen' },
        { slug: 'custom-color-screen', name: 'Custom Color Screen' },
      ]} />
    </>
  );
}
