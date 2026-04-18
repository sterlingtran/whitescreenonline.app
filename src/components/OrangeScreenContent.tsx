import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Maximum sleep protection', desc: 'Warmer than yellow, nearly as effective as red for melatonin preservation' },
  { title: 'Sunset simulation', desc: 'Mimic natural evening light to signal bedtime to your body clock' },
  { title: 'Comfortable evening reading', desc: 'Brighter than red, warmer than yellow — the ideal nighttime balance' },
  { title: 'Cozy ambient lighting', desc: 'Warm ambient color for relaxation and evening wind-downs' },
  { title: 'Evening computer work', desc: 'Work productively while protecting sleep cycles before bed' },
  { title: 'Golden hour photography', desc: 'Warm sunset-style lighting for portraits and product shots any time' },
  { title: 'Seasonal mood lighting', desc: 'Autumn atmosphere and winter coziness on demand' },
  { title: 'Blue light elimination', desc: 'Minimal blue wavelength content for eye comfort and sleep health' },
  { title: 'Wind-down routine', desc: 'Train your brain to recognize sleep preparation time' },
  { title: 'Color calibration', desc: 'Test warm orange tone reproduction for design and branding work' },
];

const HOW_IT_WORKS = [
  'Activate the orange screen 1–2 hours before bedtime',
  'Set brightness to 30–50% for reading or 20–40% for ambient lighting',
  'Orange simulates sunset, signaling your body to begin winding down',
  'Press ESC or use the Fullscreen button to exit',
];

const IN_DEPTH = [
  {
    title: 'Maximum Sleep Protection',
    body: 'Orange light (590–620 nm) provides exceptional sleep protection — research shows orange wavelengths cause less than 5% melatonin suppression compared to white light\'s 50%+. Orange sits in the sweet spot: warm enough to preserve circadian rhythm but bright enough to remain functional for evening activities. Use orange screens 1–2 hours before bedtime when you need to work or read without compromising sleep quality.',
  },
  {
    title: 'Sunset & Circadian Rhythm Simulation',
    body: "Orange light mimics natural sunset, signaling your body's internal clock that day is ending. In nature, the sun's color temperature shifts from white at midday to orange at sunset to red at twilight. This gradual warm shift triggers melatonin production and prepares your body for sleep. Orange screens simulate this natural transition — especially valuable during winter months with early sunsets or for shift workers with irregular schedules.",
  },
  {
    title: 'Comfortable Evening Reading',
    body: 'Orange provides the optimal balance for bedtime reading or late-night computer work. Red light preserves sleep but can be too dim for extended reading — insufficient brightness causes its own eye strain. Yellow is brighter but contains more melatonin-suppressing blue wavelengths. Orange splits the difference: bright enough to read without squinting, warm enough to maintain sleep-readiness. Adjust brightness to 30–50% for ideal reading comfort.',
  },
  {
    title: 'Cozy Ambient & Mood Lighting',
    body: 'Orange creates warm, inviting atmospheres perfect for relaxation, meditation, evening socializing, or romantic settings. The warmth evokes comfort, safety, and coziness. Use orange ambient lighting for dinner parties, meditation sessions, evening wind-down routines, or any scenario where you want warmth without the intensity of red or the brightness of yellow.',
  },
  {
    title: 'Golden Hour Photography',
    body: "Photographers prize golden hour — the period before sunset when sunlight appears warm orange-gold. Orange screens simulate this coveted light for portraits, product photography, and creative video work at any time of day. Use tablets or monitors as warm fill lights at 45–90 degrees from subjects. Orange lighting adds warmth, dimension, and emotional appeal — perfect for lifestyle photography, food shots, or romantic portraits.",
  },
  {
    title: 'Wind-Down Sleep Routine',
    body: 'Incorporating orange light into your evening routine signals your brain it is time to transition from active day to restful night. Start using orange screens about 2 hours before bedtime. The consistent warm lighting becomes a behavioral cue for sleep preparation, similar to dimming lights or changing into pajamas. Combined with other sleep hygiene practices — consistent bedtime, cool room, no screens in bed — orange lighting supports healthy sleep patterns.',
  },
  {
    title: 'Blue Light Elimination',
    body: 'Orange contains virtually no blue wavelengths (450–495 nm) that cause digital eye strain and disrupt sleep. While blue light filters reduce blue content from your display, orange light eliminates it from the start. For people highly sensitive to blue light or those experiencing severe sleep disruption from evening screen use, orange provides maximum blue light protection while maintaining comfortable usability for reading and work.',
  },
  {
    title: 'Autumn & Seasonal Atmosphere',
    body: 'Orange evokes fall foliage, harvest seasons, and autumn warmth. Use orange ambient lighting to create seasonal atmospheres during autumn months or themed events. The warm tone psychologically connects to seasonal transitions and coziness. Perfect for seasonal gatherings, creating a relaxed autumnal mood indoors, or bringing that harvest warmth to any space regardless of the season outside.',
  },
];

export function OrangeScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      {/* ── Why people use it ───────────────────── */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why people use orange screen</h2>
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
              <span style={{ color: '#f97316', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
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
        { slug: 'red-screen',    name: 'Red Screen' },
        { slug: 'yellow-screen', name: 'Yellow Screen' },
        { slug: 'dead-pixel-test', name: 'Dead Pixel Test' },
        { slug: 'pink-screen',   name: 'Pink Screen' },
      ]} />
    </>
  );
}
