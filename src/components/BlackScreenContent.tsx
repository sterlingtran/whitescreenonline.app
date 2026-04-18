import React from 'react';

const USE_CASES = [
  { title: 'Find stuck pixels', desc: 'Bright colored dots reveal pixels that refuse to turn off' },
  { title: 'Test backlight bleed', desc: 'See light leaking from LCD screen edges in a dark room' },
  { title: 'Check OLED burn-in', desc: 'Detect image retention and ghost images on OLED and AMOLED panels' },
  { title: 'Verify screen uniformity', desc: 'Spot uneven black levels and manufacturing defects' },
  { title: 'New device quality control', desc: 'Test before the warranty or return window closes' },
  { title: 'Contrast ratio testing', desc: 'Measure true black depth for photo and video editing work' },
  { title: 'IPS glow detection', desc: 'Identify off-angle corner glow typical of IPS panels' },
  { title: 'Save OLED battery', desc: 'Black pixels consume zero power on OLED and AMOLED displays' },
  { title: 'Verify cleaning results', desc: 'Streaks invisible on light backgrounds show up clearly on black' },
  { title: 'Light leak testing', desc: 'Find external light entering the display assembly through gaps' },
];

const HOW_IT_WORKS = [
  'Clean your screen first — dust can look like stuck pixels',
  'Display black screen in a completely dark room',
  'Look for bright red, green, blue, or white dots — those are stuck pixels',
  'Check edges and corners for backlight bleed and glow',
];

const IN_DEPTH = [
  {
    title: 'Stuck Pixel Detection',
    body: 'Black screens are the gold standard for detecting stuck pixels — pixels that remain permanently lit when they should be off. Stuck pixels appear as bright colored dots (red, green, blue, white, cyan, magenta, or yellow) dramatically visible against pure black. This is the opposite of dead pixels, which appear as black dots on white screens. Some stuck pixels self-correct after days of varied content; others require pixel-fixing software or a warranty replacement.',
  },
  {
    title: 'Backlight Bleed & Clouding',
    body: 'LCD monitors use backlights behind liquid crystal layers. When light leaks around edges or through the panel unevenly, it creates "backlight bleed" (bright edges) or "clouding" (bright interior patches). Black screens in dark rooms reveal these defects immediately. IPS panels typically show more bleed than VA panels. Moderate edge bleeding is common; severe bleeding affecting the viewing experience warrants a warranty claim.',
  },
  {
    title: 'OLED Burn-In & Image Retention',
    body: 'OLED displays can develop burn-in — permanent ghost images from static content displayed repeatedly. Navigation bars, channel logos, game HUDs, and taskbars are common culprits. Black screens reveal burn-in as discolored patches or faint ghost images where pixels have aged unevenly. Temporary image retention fades after hours; permanent burn-in never fades. Many OLED devices include pixel refresh features — run these if issues appear.',
  },
  {
    title: 'Screen Uniformity & Quality Control',
    body: 'Manufacturing variations cause uneven black levels across displays. Black screens reveal uniformity issues: darker patches, lighter areas, or inconsistent tone across the panel. High-quality professional monitors show uniform deep blacks; budget displays often have noticeable variation. Photographers and video editors require excellent uniformity for color-critical work. Test new displays systematically at multiple brightness levels.',
  },
  {
    title: 'IPS Glow Phenomenon',
    body: 'IPS panels exhibit "IPS glow" — a silvery-white shimmer from corners when viewed at an angle on black screens. This is a characteristic of IPS technology, not a defect, and intensity varies by panel quality. Unlike backlight bleed (visible straight-on), IPS glow disappears when viewing perpendicular to the screen. VA panels avoid IPS glow but have narrower viewing angles.',
  },
  {
    title: 'Contrast Ratio Verification',
    body: 'Contrast ratio measures the difference between the brightest white and darkest black. Black screens reveal true black depth — critical for HDR content, movies, and professional editing. LCD panels cannot produce true black (they block backlight imperfectly, appearing gray). OLED and AMOLED produce true black because pixels turn completely off. Compare black screens across devices to evaluate contrast capabilities.',
  },
  {
    title: 'OLED Battery Conservation',
    body: 'OLED and AMOLED displays consume power only for lit pixels. Black pixels require zero power because they are completely off. Displaying black screens on OLED phones and tablets extends battery life significantly compared to white screens. Dark mode apps and black wallpapers reduce power consumption on OLED devices. This advantage does not apply to LCD screens, which always use backlight power regardless of color.',
  },
  {
    title: 'Dead vs Stuck Pixel Differences',
    body: 'Dead pixels are always black — visible on white screens but invisible on black. Stuck pixels are always bright — visible as colored dots on black screens. Test both black and white screens to identify which type you have. Many warranties cover dead pixels but not stuck pixels, or require a minimum quantity for replacement. Knowing the distinction is critical before making a warranty claim.',
  },
];

export function BlackScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── Why people use it ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why people use black screen</h2>
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
              <span style={{ color: '#6b7280', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
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
