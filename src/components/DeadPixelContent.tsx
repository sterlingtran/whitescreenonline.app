import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Find dead pixels', desc: 'Black dots visible on every color — pixel is permanently off' },
  { title: 'Detect stuck pixels', desc: 'Colored dots that refuse to change regardless of the test color' },
  { title: 'Spot hot pixels', desc: 'Always-bright white dots most dramatic on black screens' },
  { title: 'Test backlight bleed', desc: 'See light leaking from LCD edges during the black screen test' },
  { title: 'Verify color uniformity', desc: 'Spot uneven tones and color shifts across the panel' },
  { title: 'New device quality check', desc: 'Test before the return window closes — typically 14–30 days' },
  { title: 'Test used devices before buying', desc: 'Sellers should allow testing — if they refuse, walk away' },
  { title: 'Document for warranty claims', desc: 'Photo evidence on multiple color backgrounds strengthens claims' },
  { title: 'Mobile screen testing', desc: 'Test phones and tablets with matched aspect ratios' },
  { title: 'Professional display QA', desc: 'Zero tolerance standard for photo and video editing monitors' },
];

const HOW_IT_WORKS = [
  'Clean your screen — dust and fingerprints easily look like dead pixels',
  'Choose auto-cycle for a quick scan or manual mode to inspect closely',
  'Go fullscreen and scan each color from top-left to bottom-right in strips',
  'Document any defects with photos on multiple color backgrounds for warranty claims',
];

const IN_DEPTH = [
  {
    title: 'Dead Pixels — Permanently Off',
    body: 'Dead pixels appear as tiny black dots on every test color — white, red, green, blue, and yellow. The pixel is completely non-functional and will not display any color. Dead pixels occur when transistors fail, cutting power to the entire pixel. They are most noticeable on light backgrounds where the black dot stands out sharply. Dead pixels cannot be repaired and typically require display replacement under warranty.',
  },
  {
    title: 'Stuck Pixels — Fixed Incorrect Color',
    body: 'Stuck pixels display one wrong color regardless of what should be shown. Common colors: bright red (green and blue subpixels off), bright green (red and blue off), bright blue (red and green off), white (all subpixels on), cyan (red off), magenta (green off), yellow (blue off). Stuck pixels are most visible on black backgrounds. Some self-correct over time; others can be fixed with software that rapidly cycles colors.',
  },
  {
    title: 'Hot Pixels & Backlight Bleed',
    body: 'Hot pixels remain bright white on all test colors, appearing most dramatically on black screens. More common on OLED than LCD displays. During the black screen test, also watch for bright patches around edges or corners — this is backlight bleed, not a pixel defect. LCD monitors use backlights behind the panel; imperfect seals allow light to leak through. Test in a completely dark room for accurate assessment.',
  },
  {
    title: 'Color Uniformity Issues',
    body: 'As you cycle through solid colors, watch for uneven tones across the display. One side appearing lighter or darker than the other indicates panel uniformity problems. Color shifts — one area appearing more blue, red, or green than another — suggest calibration defects. Uniformity issues affect professional color-critical work and may qualify for warranty replacement on professional-grade monitors.',
  },
  {
    title: 'When to Test Your Display',
    body: 'Test new monitors, laptops, phones, and tablets immediately — within the return period (typically 14–30 days). After it expires you are limited to manufacturer warranty policies, which often require multiple defects. Test before accepting delivery of expensive professional displays. Test immediately after repairs or warranty replacements. Always test used devices before completing a purchase — sellers should allow it.',
  },
  {
    title: 'Manufacturer Warranty Policies',
    body: 'Most manufacturers require 3–10 dead pixels before replacing a consumer display. Professional monitors have stricter 0–1 tolerance. Laptops typically require 3–5 dead pixels, or 1 in the center. Many warranties cover dead pixels but not stuck pixels — read your specific terms. Defects in the center viewing area are weighted more heavily than edges. Retailer return periods usually accept returns for any defect regardless of type.',
  },
  {
    title: 'Can Stuck Pixels Be Fixed?',
    body: 'Sometimes. Programs that rapidly cycle RGB colors can unstick pixels — success rate is 10–30%, best within the first 48 hours. Popular tools: JScreenFix (web-based), PixelHealer (Windows). Run for 20–60 minutes while monitoring the stuck pixel. Alternatively, wait — some stuck pixels self-correct after days of varied content. Gentle pressure with a soft cloth while cycling colors is a last resort with real risk of creating more damage.',
  },
  {
    title: 'Scanning Methodically',
    body: "Don't just glance — systematically scan the entire screen. Start top-left, move across in horizontal strips to top-right, drop down one strip and scan back left. This grid pattern ensures you examine every area. Pixel defects are tiny — moving too quickly will miss them. Spend 10–15 seconds per color, totaling 2–3 minutes minimum. For a potential defect, cycle through multiple colors to confirm: true dead pixels appear black on all colors, stuck pixels show the same wrong color on all backgrounds.",
  },
];

export function DeadPixelContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── What you can find ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>What you can test for</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Works on any device — monitors, laptops, phones, tablets, and TVs.
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
              <span style={{ color: '#8b5cf6', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
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

      {/* ── What each color reveals ──────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ ...headingSx, marginBottom: 16 }}>What each color reveals</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 8,
        }}>
          {[
            { color: '#111', label: 'Black', dot: '#fff', defect: 'Stuck pixels, hot pixels, backlight bleed' },
            { color: '#fff', label: 'White', dot: '#111', defect: 'Dead pixels (black dots), stuck subpixels' },
            { color: '#ef4444', label: 'Red', dot: '#fff', defect: 'Cyan, blue, and green subpixel defects' },
            { color: '#22c55e', label: 'Green', dot: '#fff', defect: 'Magenta, red, and blue subpixel defects' },
            { color: '#3b82f6', label: 'Blue', dot: '#fff', defect: 'Yellow, orange, and red subpixel defects' },
            { color: '#808080', label: 'Gray', dot: '#fff', defect: 'Uniformity issues and subtle dead pixels' },
          ].map(({ color, label, dot, defect }) => (
            <div
              key={label}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 14px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
              }}
            >
              <span style={{
                width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                background: color, border: '1px solid var(--border-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: dot, opacity: 0.5 }} />
              </span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{label}</p>
                <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.4 }}>{defect}</p>
              </div>
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
        { slug: 'white-screen',  name: 'White Screen' },
        { slug: 'black-screen',  name: 'Black Screen' },
        { slug: 'red-screen',    name: 'Red Screen' },
        { slug: 'green-screen',  name: 'Green Screen' },
        { slug: 'blue-screen',   name: 'Blue Screen' },
      ]} />
    </>
  );
}
