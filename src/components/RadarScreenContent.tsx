import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Sci-fi themed events', desc: 'Ambient radar display sets a futuristic or military tech atmosphere' },
  { title: 'Escape rooms', desc: 'Add authentic-looking radar screens to surveillance or mission-control set pieces' },
  { title: 'Film and video productions', desc: 'Practical screen prop for command center, submarine, or military scenes' },
  { title: 'Gaming setups', desc: 'Display on a secondary monitor for a tactical or sci-fi desktop aesthetic' },
  { title: 'Trade show booths', desc: 'Moving radar animation draws attention on large displays at exhibitions' },
  { title: 'Office pranks', desc: 'Leave running on a coworker\'s screen for a moment of confusion' },
  { title: 'Classroom demonstrations', desc: 'Visual aid when teaching radar physics, sonar, or wave propagation' },
  { title: 'Halloween displays', desc: 'Eerie, sweeping green animation fits horror and sci-fi Halloween setups' },
  { title: 'Waiting room ambiance', desc: 'Unusual, calming animation for lobbies or customer waiting areas' },
  { title: 'Background for video calls', desc: 'Unusual, memorable virtual background for tech-themed presentations' },
];

const HOW_IT_WORKS = [
  'A rotating sweep line moves clockwise around a circular grid display',
  'Simulated contacts appear and fade on the screen as the sweep passes',
  'Optional sonar ping sound fires on each revolution of the sweep',
  'Adjust sweep speed, contact density, and color in the settings panel',
  'Use fullscreen mode for maximum visual impact on large displays',
];

const IN_DEPTH = [
  {
    title: 'How Real Radar Works',
    body: 'RADAR (Radio Detection And Ranging) works by emitting radio wave pulses and detecting the echoes that bounce back from objects in the environment. The time delay between transmission and return determines distance; the direction of the antenna determines bearing. The rotating sweep on a Plan Position Indicator (PPI) — the classic circular display — shows a snapshot of the antenna\'s current pointing direction. Contacts appear where echoes were detected on the previous revolution.',
  },
  {
    title: 'Sonar vs Radar',
    body: 'Radar uses electromagnetic waves (radio frequencies) and operates in air or space. Sonar (Sound Navigation and Ranging) uses acoustic waves and operates underwater — submarines and ships use sonar because radio waves are absorbed by water almost immediately. Both technologies produce the same iconic circular sweep display, which is why submarine films and aircraft films share the same visual vocabulary. The simulation here covers both aesthetics.',
  },
  {
    title: 'Radar in Popular Culture',
    body: 'The circular radar display is one of the most recognizable symbols of Cold War-era military technology — appearing in war films, submarine dramas, and Cold War thrillers from the 1950s onward. The tension of watching a sweep line complete its rotation, wondering if a new contact will appear, made the display an ideal dramatic device. Today the aesthetic has expanded into sci-fi, gaming, and tech branding as a symbol of detection, awareness, and surveillance.',
  },
  {
    title: 'Air Traffic Control',
    body: 'Modern air traffic control systems use Secondary Surveillance Radar (SSR) rather than primary radar — aircraft transponders respond to ground station interrogations with their identity, altitude, and GPS position. The classic sweep display has been replaced by digital displays showing precise aircraft positions. However, military and weather radar systems still use primary radar sweeps, and weather radar — which displays precipitation returns — is the most visible everyday use of radar technology.',
  },
  {
    title: 'Weather Radar',
    body: 'The weather radar displays you see in weather apps use the same circular sweep principle. Doppler weather radar (NEXRAD in the US) emits pulses and measures both the return strength (precipitation intensity) and the Doppler shift (movement toward or away from the radar site). This allows meteorologists to detect wind speed and direction within storms, identify tornado rotation signatures, and track storm movement — all from the iconic sweeping display.',
  },
  {
    title: 'Green Phosphor: The Classic Display Color',
    body: 'Early radar displays used cathode ray tubes with green phosphor coatings because green is the color the human eye is most sensitive to, making it the easiest to read in dimly lit operational environments. The phosphor persistence — the way the green glow slowly faded after the sweep passed — was not just aesthetic but functional: it allowed operators to see contact history from the previous several revolutions. This distinctive green-on-black aesthetic is now inseparable from the radar cultural identity.',
  },
];

export function RadarScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use an animated radar screen</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Classic sonar sweep animation — for ambiance, film props, education, and events.
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
        { slug: 'white-noise',         name: 'White Noise' },
        { slug: 'broken-screen',       name: 'Broken Screen' },
        { slug: 'matrix-screensaver',  name: 'Matrix Screensaver' },
        { slug: 'smpte-color-bars',    name: 'SMPTE Color Bars' },
      ]} />
    </>
  );
}
