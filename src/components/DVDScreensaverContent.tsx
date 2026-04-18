import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Corner hit watching', desc: 'The internet\'s favorite idle activity — will the logo hit the corner?' },
  { title: 'Office nostalgia', desc: 'A beloved reminder of the DVD player era for millennial and Gen X coworkers' },
  { title: 'Waiting room display', desc: 'Hypnotic animation loops endlessly without audio or user interaction' },
  { title: 'Presentation pause screen', desc: 'Replace a static slide with something more engaging during breaks' },
  { title: 'TV screensaver replacement', desc: 'Display on a large TV during parties for ambient visual entertainment' },
  { title: 'Retro-themed events', desc: 'Perfect visual for 2000s-themed parties and nostalgic gatherings' },
  { title: 'Classroom brain break', desc: 'Put on during a short break — students will inevitably watch for a corner hit' },
  { title: 'Burn-in prevention test', desc: 'Moving animation prevents display burn-in during idle periods' },
  { title: 'Stream idle screen', desc: 'Use as a brb/idle screen — viewers will watch and wait for the corner' },
  { title: 'Meme recreation', desc: 'Recreate the iconic Office episode scene for content or laughs' },
];

const HOW_IT_WORKS = [
  'The DVD logo bounces around the screen, changing color on each wall hit',
  'A corner hit counter tracks the total number of exact corner bounces',
  'Adjust the logo size, bounce speed, and starting position in settings',
  'Use fullscreen mode for the authentic large-screen experience',
  'Watch patiently — a perfect corner hit is rarer than you think',
];

const IN_DEPTH = [
  {
    title: 'Why Everyone Knows This Screensaver',
    body: 'The DVD logo screensaver was the default screensaver on millions of DVD players, set-top boxes, and home theater systems from the late 1990s through the 2010s. Families left their DVD player menus on overnight, and the bouncing logo became part of the ambient furniture of millions of living rooms. A 2010 episode of The Office (S4E14, "Stress Relief") brought global attention to the corner-hit phenomenon, turning a nostalgic memory into an internet obsession.',
  },
  {
    title: 'The Mathematics of a Corner Hit',
    body: 'A perfect corner hit requires the logo to arrive at the exact corner pixel simultaneously in both the X and Y axes. The probability of a corner hit depends on the screen dimensions and logo size — on a standard 16:9 display, a perfect corner hit occurs roughly every 15–30 minutes depending on speed and logo size. The corner hit is genuinely rare enough to feel satisfying, which is why people actually watch and wait. Some setups can go hours without one.',
  },
  {
    title: 'The Physics of the Bounce',
    body: 'The bouncing logo follows simple reflection physics: when the logo hits a horizontal wall, the Y velocity reverses; when it hits a vertical wall, the X velocity reverses. The path is deterministic — given a starting position and velocity, you can calculate exactly when every future corner hit will occur. The feeling that corner hits are unpredictable is an illusion; they\'re entirely predictable, just infrequent enough to feel like an event.',
  },
  {
    title: 'Screensavers: A Brief History',
    body: 'Screensavers were originally functional — they prevented CRT monitor phosphor burn-in by preventing static images from being displayed too long. Moving, changing images prevented the persistent phosphor glow that would permanently etch static UI elements into the screen. LCD and OLED displays eliminated the burn-in problem for most use cases, making screensavers purely aesthetic. The DVD logo bouncer was one of the last screensavers people actually watched intentionally rather than dismissing immediately.',
  },
  {
    title: 'OLED Burn-In and Moving Images',
    body: 'While LCD screens largely eliminated the burn-in risk that screensavers were designed to address, OLED displays (used in premium TVs, iPhones, and high-end monitors) can still experience burn-in from static images displayed at high brightness for extended periods. A moving screensaver — like the bouncing DVD logo — remains genuinely protective on OLED displays. TV manufacturers now build pixel-shifting and logo-dimming features into their software to address this.',
  },
  {
    title: 'Color Changes on Wall Hits',
    body: 'The original DVD screensaver changed color on each wall hit because the player cycled through a preset color palette to maximize visual variation. The color transitions — from blue to red to green to yellow — happened automatically without any pattern that felt arbitrary. This small design detail, combined with the physics of the bounce, created an oddly satisfying loop that could hold attention for minutes at a time. Our simulation faithfully replicates this color-change behavior.',
  },
];

export function DVDScreensaverContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>The iconic bouncing DVD screensaver</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Everyone knows it. Everyone watches for the corner hit. How long will you wait?
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
        { slug: 'flip-clock',          name: 'Flip Clock' },
        { slug: 'matrix-screensaver',  name: 'Matrix Screensaver' },
        { slug: 'starfield-screensaver', name: 'Starfield' },
        { slug: 'smpte-color-bars',    name: 'SMPTE Color Bars' },
      ]} />
    </>
  );
}
