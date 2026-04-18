import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Monitor calibration', desc: 'Verify color accuracy, luminance levels, and primary/secondary hue rendering' },
  { title: 'Video production reference', desc: 'Set broadcast-legal color levels before recording or editing footage' },
  { title: 'AV equipment testing', desc: 'Test signal transmission integrity through cables, switchers, and processors' },
  { title: 'Retro aesthetic displays', desc: 'Classic test pattern look for retro-themed setups and video art' },
  { title: 'Broadcast education', desc: 'Teach students about color space, luminance, and video signal standards' },
  { title: 'Live event technical checks', desc: 'Verify display chain before a live event or broadcast goes to air' },
  { title: 'Photography studio calibration', desc: 'Reference known color targets for monitor-to-print color matching' },
  { title: 'Streaming test pattern', desc: 'Display during pre-stream technical check to verify broadcast chain' },
  { title: 'Display art installation', desc: 'The test pattern as intentional visual art — references broadcast history' },
  { title: 'Content creation thumbnails', desc: 'Retro test pattern aesthetic for tech-review video thumbnails' },
];

const HOW_IT_WORKS = [
  'The SMPTE 75% color bars are rendered in precise pixel-accurate columns',
  'The lower section includes the PLUGE strip for black level calibration',
  'Optional scan lines overlay adds a CRT monitor aesthetic',
  'Use fullscreen mode to fill the entire display for accurate calibration use',
  'Cross-reference the displayed colors against broadcast specifications for QC work',
];

const IN_DEPTH = [
  {
    title: 'What Are SMPTE Color Bars?',
    body: 'SMPTE (Society of Motion Picture and Television Engineers) color bars are a standardized test pattern used throughout the broadcast television industry since the 1970s. The pattern consists of eight vertical bars of specific colors and luminance values: white, yellow, cyan, green, magenta, red, blue, and black. The values are defined precisely so that any properly calibrated monitor or broadcast chain will display them identically — making them a universal reference for color accuracy.',
  },
  {
    title: 'The Color Bar Sequence Explained',
    body: 'The eight bars represent white (100% luminance), followed by the three subtractive primary colors at 75%: yellow (red + green), cyan (green + blue), green, then the three additive primaries: magenta (red + blue), red, blue — and finally black. The 75% bars (not 100%) are the standard because they sit within the broadcast-legal luminance range and allow headroom for overdriving detection. A display showing the yellow bar as orange-yellow is likely miscalibrated.',
  },
  {
    title: 'The PLUGE Strip',
    body: 'Below the main color bars is the PLUGE (Picture Line-Up Generation Equipment) strip — three very dark bars around the black level. The left bar is slightly below black, the center bar is true black, and the right bar is slightly above black. On a correctly calibrated display, the left bar should disappear into the black background while the right bar remains barely visible. The PLUGE is used to set the black level (brightness) of a monitor — a critical first step in any calibration workflow.',
  },
  {
    title: 'Broadcast Legal Color Ranges',
    body: 'Broadcast television defines legal video levels to prevent signal clipping and transmission distortion. Legal luminance runs from 7.5 IRE (black) to 100 IRE (white) in the NTSC system, or 0–100% in SDI digital systems. Legal chroma limits ensure colors remain within the displayable gamut of consumer televisions. The SMPTE color bars are specifically designed to sit at the edge of these limits — a perfectly transmitted test signal should show the bars at exactly the correct values.',
  },
  {
    title: 'Using Bars for Modern Display Calibration',
    body: 'Professional video monitors are calibrated using color bars and a waveform monitor — a hardware device that plots video signal levels on a graticule. The vectorscope (part of most waveform monitors) shows chrominance values as vectors on a polar display; correct calibration places each color bar\'s vector dot directly on its target. Consumer displays can be calibrated to the bars by eye using the PLUGE for black level and the luminance bars for contrast, though hardware tools provide far more accuracy.',
  },
  {
    title: 'Test Patterns in Digital Art',
    body: 'The SMPTE color bars have been adopted by visual artists and designers as a symbol of the broadcast era — nostalgic, geometric, and loaded with technical authority. Artists like Cory Arcangel have incorporated test patterns into fine art pieces exploring television history and signal culture. In graphic design, the color bar pattern communicates authenticity, technical expertise, and media savvy. It appears in album artwork, web design, and film title sequences as shorthand for "broadcast-grade production."',
  },
];

export function SMPTEColorBarsContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use SMPTE color bars</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          The broadcast industry standard for color calibration, AV testing, and retro aesthetics.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 10 }}>
          {USE_CASES.map(({ title, desc }) => (
            <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10, marginTop: 16 }}>
          {HOW_IT_WORKS.map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--text)', color: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.55 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ ...headingSx, marginBottom: 20 }}>Complete guide</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px 32px' }}>
          {IN_DEPTH.map(({ title, body }) => (
            <div key={title}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <ContentRelatedTools tools={[
        { slug: 'dead-pixel-test',     name: 'Dead Pixel Test' },
        { slug: 'custom-color-screen', name: 'Custom Color Screen' },
        { slug: 'dvd-screensaver',     name: 'DVD Screensaver' },
        { slug: 'white-screen',        name: 'White Screen' },
      ]} />
    </>
  );
}
