import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Ambient display and ambiance', desc: 'Softly drifting particles create a calming, living background for any space' },
  { title: 'Office lobby displays', desc: 'Visually interesting without demanding attention from visitors or staff' },
  { title: 'Meditation visual anchor', desc: 'Follow individual particles as a gentle mindfulness focus exercise' },
  { title: 'Waiting room screens', desc: 'Non-distracting motion that reduces perceived wait time without distraction' },
  { title: 'Screensaver replacement', desc: 'A living, evolving display that prevents screen burn without going blank' },
  { title: 'Event backdrops', desc: 'Elegant particle animations suit weddings, product launches, and gala events' },
  { title: 'Streaming idle screen', desc: 'Beautiful brb/pause screen with customizable colors to match brand palette' },
  { title: 'Video production background', desc: 'Cinematic particle effects as a practical screen backdrop for interviews' },
  { title: 'Creative inspiration display', desc: 'Some find gentle, emergent motion stimulating for creative thinking' },
  { title: 'Relaxation and stress relief', desc: 'Slow, drifting motion without destination is cognitively non-demanding' },
];

const HOW_IT_WORKS = [
  'Dozens to hundreds of particles spawn at random positions across the canvas',
  'Each particle moves with gentle velocity, gravity, and slight randomized drift',
  'Adjust particle count, size, speed, and physics in the settings panel',
  'Choose from circles, stars, squares, or custom shapes for the particle type',
  'Particles respawn continuously — the display never depletes or repeats',
];

const IN_DEPTH = [
  {
    title: 'Particle Systems in Computer Graphics',
    body: 'A particle system is a technique in computer graphics that uses a large number of small sprites or shapes to simulate amorphous phenomena — fire, smoke, water, sparks, dust, and snow. Each particle has independent properties: position, velocity, lifetime, size, color, and opacity. A central emitter spawns particles according to configurable rules; each frame, the system updates all particle properties and removes expired particles. The aggregate behavior of many simple particles creates convincing complex visual phenomena.',
  },
  {
    title: 'Why Particle Animation Is Relaxing',
    body: 'Gentle particle animations share characteristics with natural phenomena humans evolved alongside: falling leaves, dust motes in light, snowfall, fireflies. These patterns — non-threatening, unpredictable but non-urgent, directionless — activate what researchers call "soft fascination" — gentle attention that does not tax the directed attention system. Unlike goal-directed tasks, soft fascination allows the prefrontal cortex to rest and recover. This is the same mechanism behind Attention Restoration Theory (ART) explaining why nature reduces mental fatigue.',
  },
  {
    title: 'Adjusting Physics Parameters',
    body: 'The particle system\'s physics settings control the movement character of the simulation. Gravity pulls particles downward — reduce it for floating bubbles, increase it for falling snow or sparks. Velocity determines how energetically particles move. Turbulence adds random directional variation each frame — high turbulence produces a chaotic, swirling look; zero turbulence makes particles drift in perfectly straight lines. Lifetime determines how long each particle exists before disappearing and respawning. Combining these parameters produces radically different visual moods.',
  },
  {
    title: 'Color and Opacity Design',
    body: 'Particle color palettes significantly affect the emotional tone of the display. Warm ambers and oranges (ember, firefly, autumn leaves) feel cozy and intimate. Cool blues and teals (bubbles, ice crystals, rain) feel calm and spacious. Complementary color pairs (blue/orange, purple/yellow) create visual tension and depth. Reducing particle opacity to 20–40% creates a translucent, layered look where overlapping particles blend naturally. High opacity at low particle count suits bold, graphic aesthetics.',
  },
  {
    title: 'Particle Systems in Game Development',
    body: 'Particle systems are fundamental to real-time game graphics — virtually every visual effect in modern games uses them: muzzle flash, fire, water splashes, magic spells, weather, dust, and crowd simulation. Game engines like Unity and Unreal Engine have sophisticated built-in particle systems with GPU-accelerated particle evaluation. The browser-based version uses the CPU-driven canvas API, which scales to hundreds of particles comfortably but becomes frame-rate limited at thousands of simultaneous particles on mid-range hardware.',
  },
  {
    title: 'Emergent Behavior and Complexity',
    body: 'One of the most compelling aspects of particle systems is emergent behavior — complex, organic-looking patterns arising from simple rules applied to many particles. Flocking simulations (like Craig Reynolds\' Boids algorithm) use three simple rules — separation, alignment, cohesion — to produce lifelike swarm behavior from individual particle interactions. Even without interaction rules, the random variation in initial conditions and physics parameters produces patterns that feel alive and purposeful rather than mechanical.',
  },
];

export function ParticleSystemContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a particle system display</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Gently drifting particles — living, calming ambiance for any screen or space.
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
        { slug: 'rain-ambient',          name: 'Rain Ambient' },
        { slug: 'starfield-screensaver', name: 'Starfield' },
        { slug: 'matrix-screensaver',    name: 'Matrix Screensaver' },
        { slug: 'dvd-screensaver',       name: 'DVD Screensaver' },
      ]} />
    </>
  );
}
