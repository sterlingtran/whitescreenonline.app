import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Relaxation and unwinding', desc: 'The infinite warp through stars is hypnotic and genuinely calming' },
  { title: 'Space-themed events', desc: 'Astronomy nights, planetarium events, and sci-fi conventions all benefit' },
  { title: 'Desktop screensaver', desc: 'One of the most beloved screensaver effects since the Windows 3D Pipes era' },
  { title: 'Meditation background', desc: 'A non-distracting moving visual anchor for eyes-open meditation' },
  { title: 'Bedroom ambient display', desc: 'Simulate flying through space on a wall-mounted or ceiling-facing screen' },
  { title: 'Waiting room display', desc: 'Universally appealing animation that requires no context or explanation' },
  { title: 'Gaming setup ambiance', desc: 'Warp drive effect complements space games and sci-fi desktop themes' },
  { title: 'Film and video backdrop', desc: 'Use as a practical screen background for sci-fi themed productions' },
  { title: 'Classroom science display', desc: 'Visual aid for discussions about space, scale, and the speed of light' },
  { title: 'Sleep aid visual', desc: 'Flowing, directional motion is non-stimulating and conducive to drowsiness' },
];

const HOW_IT_WORKS = [
  'Hundreds of star particles start near the center and fly outward at warp speed',
  'Stars grow larger and brighter as they approach the viewer, creating depth',
  'Adjust star density, warp speed, and star size in the settings panel',
  'The animation runs at 60fps on the HTML5 canvas — smooth on all devices',
  'Use fullscreen mode to completely immerse yourself in the starfield',
];

const IN_DEPTH = [
  {
    title: 'The 3D Starfield Illusion',
    body: 'The starfield warp effect creates a compelling illusion of 3D motion through two-dimensional projection. Each star is assigned a random depth value (Z position); as the animation progresses, Z decreases — moving the star closer to the viewer. The star\'s 2D screen position is calculated by projecting the 3D point: x_screen = x / z * scale. As Z approaches 0, the star moves rapidly outward from the center and grows larger, creating the sensation of flying through space at high speed.',
  },
  {
    title: 'Warp Drive and Science Fiction',
    body: 'The starfield warp visual — stars stretching into lines as speed increases — was first popularized in Star Wars (1977) when the Millennium Falcon jumps to hyperspace. It became the universal sci-fi shorthand for faster-than-light travel. The actual physics of near-light-speed travel would look different (relativistic aberration would actually concentrate stars toward the direction of travel), but the cinematic starfield warp has so thoroughly defined the cultural expectation that realistic depictions feel wrong.',
  },
  {
    title: 'The Original Windows Screensaver',
    body: 'Microsoft included a 3D Starfield screensaver in Windows 3.x and Windows 95 — it was one of the most recognized screensavers of the PC era. The implementation was a simple but effective 2D projection of random star positions, drawn as white circles that grew and moved outward. The Windows screensaver ran as a separate executable with a .scr extension and was widely customized through third-party tools. Our web implementation reproduces the same effect with modern canvas rendering.',
  },
  {
    title: 'The Real Appearance of Stars from Space',
    body: 'Astronauts report that stars from outside the atmosphere appear as extremely bright, perfectly stable points — no twinkling, no diffraction rays, no movement. The vast distances between stars make motion at spacecraft speeds (tens of thousands of km/h) produce no perceptible relative motion in the starfield. True stellar parallax — the slight apparent shift of nearby stars against background stars — takes a full year to become measurable. The warp sensation in screensavers is entirely fictional, but compelling.',
  },
  {
    title: 'Relaxation and the Moving Visual Field',
    body: 'Smooth, predictable motion in the visual field — like the starfield\'s radial expansion — activates optic flow processing in the brain. Optic flow (the sensation of motion through an environment) is a fundamental visual computation associated with navigation and movement. Research suggests that smooth optical flow without a navigation task triggers a relaxed, drift-like mental state similar to being a passenger in a moving vehicle. This is why the starfield is uniquely good for relaxation compared to non-directional animations.',
  },
  {
    title: 'Performance on Different Devices',
    body: 'Canvas animation performance scales with both the number of particles and the screen resolution. On high-DPI (retina) displays, the canvas is rendered at 2x or 3x pixel density — which multiplies the drawing cost significantly. The starfield dynamically adjusts the particle count and render resolution to maintain 60fps across devices from budget phones to high-refresh-rate desktop monitors. If you notice slowdown, reduce star density in the settings to restore smooth performance.',
  },
];

export function StarfieldContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use the starfield screensaver</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Fly through space at warp speed — relaxing, beautiful, and endlessly hypnotic.
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
        { slug: 'dvd-screensaver',    name: 'DVD Screensaver' },
        { slug: 'matrix-screensaver', name: 'Matrix Screensaver' },
        { slug: 'particle-system',    name: 'Particle System' },
        { slug: 'rain-ambient',       name: 'Rain Ambient' },
      ]} />
    </>
  );
}
