import React from 'react';

const USE_CASES = [
  { title: 'Preserve night vision', desc: 'Astronomers, photographers, and pilots use red to stay dark-adapted' },
  { title: 'Sleep-friendly lighting', desc: "Red doesn't suppress melatonin like blue or white light" },
  { title: 'Detect cyan stuck pixels', desc: 'Green and blue subpixel defects show clearly against red' },
  { title: 'Darkroom work', desc: 'Traditional photography safe light for black-and-white film development' },
  { title: 'Gaming ambient light', desc: 'Reduces eye strain during extended night gaming sessions' },
  { title: 'Astronomy use', desc: 'Read star charts without ruining 20–30 minutes of dark adaptation' },
  { title: 'Wildlife photography', desc: 'Many animals have reduced red light sensitivity — less startling at night' },
  { title: 'Warm fill light', desc: 'Dramatic, sunset-style lighting for photography and video' },
  { title: 'Emergency lighting', desc: 'Navigate at night without disrupting your sleep cycle' },
  { title: 'Color calibration', desc: 'Test red channel accuracy for photo and video editing monitors' },
];

const HOW_IT_WORKS = [
  'Click the red screen preview to activate it',
  'Press the Fullscreen button (or F11 on desktop) for full coverage',
  'Set brightness to the lowest comfortable level for night vision use',
  'Press ESC or use the Fullscreen button to exit',
];

const IN_DEPTH = [
  {
    title: 'Night Vision Preservation',
    body: 'Human rod cells (responsible for night vision) are insensitive to red wavelengths above 620 nm. Red light lets you see tools, maps, or screens without triggering the chemical changes that reset dark adaptation. Astronomers read star charts, adjust telescope settings, and take notes during observations — all without destroying their carefully achieved night vision. Full dark adaptation takes 20–30 minutes; red light preserves it.',
  },
  {
    title: 'Sleep-Friendly Lighting',
    body: 'Red light has minimal impact on melatonin production compared to blue, white, or green wavelengths. Research shows red light (620–750 nm) causes the least disruption to circadian rhythm, making red screens ideal for late-night reading or device use without compromising sleep quality. Use red screens 1–2 hours before bedtime when you need illumination but want to maintain natural sleepiness.',
  },
  {
    title: 'Cyan & Green Stuck Pixel Detection',
    body: 'Red screens are essential for detecting green and blue subpixel failures. When green and blue subpixels both get stuck in the "on" position, they create bright cyan dots dramatically visible against red. Individual green subpixel defects appear as bright green dots, while blue defects show as cyan spots. Combined with green and blue screen tests, red completes full RGB subpixel diagnostic coverage.',
  },
  {
    title: 'Astronomy & Astrophotography',
    body: "Astronomers consider red light mandatory for nighttime work. After spending 20–30 minutes dark-adapting, any exposure to white or blue light resets the process. Red screens let astronomers consult apps, review images, and check exposure settings without destroying their night vision. Astrophotographers use red light to see camera controls during long exposures under dark skies.",
  },
  {
    title: 'Traditional Darkroom & Film Photography',
    body: 'Photographic paper and most black-and-white films are insensitive to red wavelengths, making red light the traditional "safelight" for darkrooms. Film enthusiasts and analog photographers still use red light when developing film, making contact prints, or working with light-sensitive materials. Red screens serve as convenient, portable safelights.',
  },
  {
    title: 'Wildlife & Nature Photography',
    body: 'Many animals have reduced sensitivity to red wavelengths compared to humans. Nocturnal wildlife photographers and researchers use red light to observe or photograph animals at night without startling subjects or disrupting natural behavior. While not invisible to all species, red light is far less disturbing than white. Effective for birding, mammal observation, and ecological research.',
  },
  {
    title: 'Warm Photography & Video Lighting',
    body: 'Red screens create dramatic, sunset-style lighting for portrait photography, product shots, and creative video work. Use tablets or monitors as warm fill lights positioned at 45–90 degrees from subjects. Red lighting adds intensity, drama, and emotional warmth to images — perfect for artistic portraits, moody product photography, or music videos.',
  },
  {
    title: 'Color Accuracy Testing & Calibration',
    body: 'Test your display\'s red channel for professional photo editing and video color grading. Pure red should display without orange tints (too much green) or magenta shifts (too much blue). Verify uniform red tone across the entire panel — variations indicate calibration issues or manufacturing defects. Critical for accurate skin tone reproduction in color-critical work.',
  },
];

export function RedScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── Why people use it ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why people use red screen</h2>
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
              <span style={{ color: '#ef4444', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
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
