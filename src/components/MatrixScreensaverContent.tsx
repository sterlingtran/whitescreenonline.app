import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Desktop screensaver', desc: 'The quintessential hacker-aesthetic screensaver for any monitor or TV' },
  { title: 'Gaming setup display', desc: 'Run on a secondary monitor for a cyberpunk or hacker-themed desktop' },
  { title: 'Halloween party display', desc: 'Eerie, atmospheric green cascade perfect for tech-horror events' },
  { title: 'Escape room props', desc: 'Hacking or surveillance themed rooms need the Matrix code aesthetic' },
  { title: 'Film and video production', desc: 'Practical screen prop for any scene requiring a hacking or computer motif' },
  { title: 'Streaming background', desc: 'Atmospheric ambient display on a secondary screen during streams' },
  { title: 'Office prank background', desc: 'Leave it on a coworker\'s screen for a moment of theatrical confusion' },
  { title: 'Coding ambiance', desc: 'Some developers find the falling code visually stimulating while working' },
  { title: 'Tech talk visual', desc: 'Open during a cybersecurity presentation for instant atmosphere' },
  { title: 'Social media content', desc: 'Instantly recognizable visual for tech-themed videos and thumbnails' },
];

const HOW_IT_WORKS = [
  'Columns of characters rain down the screen at staggered speeds and lengths',
  'Characters are chosen from Katakana, Latin, and numeric character sets',
  'Each column has a bright "head" character with a fading trail behind it',
  'Adjust falling speed, character density, font size, and color in settings',
  'Use fullscreen for the complete immersive effect on any display',
];

const IN_DEPTH = [
  {
    title: 'The Origin of the Matrix Code Rain',
    body: 'The cascading green code in The Matrix (1999) was designed by visual effects artist Janek Sirrs and production designer Owen Paterson. The characters are a mix of reversed Latin letters, Arabic numerals, and Katakana (a Japanese syllabary). According to production lore, they were sourced from sushi recipes scanned by production designer Simon Whiteley — though this claim has never been officially confirmed. The green-on-black palette was chosen to distinguish the simulated reality of the Matrix from the desaturated blue-grey of the real world.',
  },
  {
    title: 'Character Sets and the Digital Rain',
    body: 'The digital rain uses three primary character sets: Katakana (カタカナ), the Japanese syllabary used primarily for foreign words, giving the code an Eastern/exotic aesthetic to Western audiences; standard Latin alphabet and numerals; and custom invented characters. Each column drops at a slightly different speed and length, creating the layered, organic feel. The bright "head" character represents the active computation — the fading trail below represents decaying memory.',
  },
  {
    title: 'Why Green on Black',
    body: 'The green phosphor terminal aesthetic dates to the original monochrome CRT computer monitors of the late 1970s and early 1980s. Terminals like the DEC VT100 used green phosphor because green is the wavelength the human eye is most sensitive to — it requires less brightness to appear the same perceived luminance as red or blue. The monochrome green terminal became the visual symbol of early computing, hacking culture, and technical expertise. The Matrix elevated this aesthetic to mainstream cultural consciousness.',
  },
  {
    title: 'Influence on Hacker Culture Aesthetics',
    body: 'The Matrix\'s visual language became the template for hacker aesthetics in popular culture for the following two decades. Terminal emulators adopted green-on-black themes (Solarized Dark, Gruvbox Dark with green accents). Cyberpunk game aesthetics from Deus Ex to Cyberpunk 2077 use the same green/teal text on dark background. Security conference talks use the aesthetic deliberately to signal expertise. The Matrix transformed a functional technical interface into a cultural identity marker.',
  },
  {
    title: 'Canvas Performance Optimization',
    body: 'Animating hundreds of simultaneous falling columns at 60 frames per second requires careful performance optimization. The animation uses an HTML5 canvas with a semi-transparent black fill on each frame rather than clearing the canvas entirely — this naturally produces the fading trail effect without tracking individual character positions. Each column is tracked as a simple Y-position in an array; the browser\'s requestAnimationFrame API handles frame timing. Modern hardware handles this at full resolution without GPU strain.',
  },
  {
    title: 'Variations and Customization',
    body: 'The core Matrix aesthetic has spawned many variations: white-on-black for an elegant minimal look; red-on-black for a horror or danger theme; blue for a cold technical aesthetic; gold or amber for a warm retro-terminal vibe. Changing the character set — using only hex digits (0-9, A-F) for a computer-science aesthetic, or binary (0 and 1) for maximum minimalism — changes the feel entirely while maintaining the recognizable falling structure. All of these variants are configurable in the settings panel.',
  },
];

export function MatrixScreensaverContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>The iconic Matrix falling code screensaver</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Cascading green characters — the definitive symbol of hacker culture and digital reality.
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
        { slug: 'hacker-typer',        name: 'Hacker Typer' },
        { slug: 'dvd-screensaver',     name: 'DVD Screensaver' },
        { slug: 'starfield-screensaver', name: 'Starfield' },
        { slug: 'radar-screen',        name: 'Radar Screen' },
      ]} />
    </>
  );
}
