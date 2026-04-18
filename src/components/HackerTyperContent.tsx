import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Office pranks', desc: 'Pull up the terminal on a coworker\'s screen to look like you\'re "in the mainframe"' },
  { title: 'Movie and TV prop', desc: 'Classic "hacking scene" look for film productions and YouTube videos' },
  { title: 'Halloween costume accessory', desc: 'Carry a laptop showing the hacker screen as a prop with any tech costume' },
  { title: 'Escape room set dressing', desc: 'Add to hacking or espionage-themed escape room stations' },
  { title: 'Streamer entertainment', desc: 'Pull up the "hacking" screen while narrating a fake infiltration for stream comedy' },
  { title: 'Tech presentation humor', desc: 'Open during a talk to get a laugh before switching to the real slides' },
  { title: 'Social media content', desc: '"Hacking" videos with realistic-looking terminal output generate strong engagement' },
  { title: 'Convincing a non-tech audience', desc: 'Classic social engineering joke — look impressively technical to anyone watching' },
  { title: 'Gaming setup aesthetic', desc: 'Keep running on a secondary monitor for a "cyberpunk hacker" desktop feel' },
  { title: 'Party trick', desc: 'Type furiously while code streams across the screen — always gets a reaction' },
];

const HOW_IT_WORKS = [
  'Open the tool and start typing anything on your keyboard',
  'Each keystroke outputs lines of realistic-looking code and terminal output',
  'The screen fills with scrolling command-line text mimicking a hacking terminal',
  'Optional keyboard click sounds enhance the "furious typing" effect',
  'The Matrix rain effect runs in the background for added atmosphere',
];

const IN_DEPTH = [
  {
    title: 'Why Hacking Looks Nothing Like This',
    body: 'Real hacking is methodical, patient, and often tedious — running automated scanners, reviewing enumeration output, reading documentation, and waiting for exploits to execute. It looks like reading email, not the rapid-fire terminal floods in movies. The Hollywood hacking aesthetic — cascading green text, frantic typing, progress bars filling in seconds — bears no resemblance to actual penetration testing, which involves lots of waiting, research, and careful manual testing.',
  },
  {
    title: 'The Hollywood Hacking Trope',
    body: 'The "hacker typing furiously" visual was popularized by films like WarGames (1983), Hackers (1995), The Matrix (1999), and every subsequent thriller. The trope requires visual drama — a static terminal window reading "access granted" is not cinematic. So Hollywood invented a visual language: green text on black, rapid scrolling output, impossible typing speeds, and binary/hex aesthetics. This visual shorthand is now more recognized than actual terminal interfaces.',
  },
  {
    title: 'Actual Terminal Interfaces',
    body: 'Real terminals — command-line interfaces — are powerful but plain. The Unix terminal dates to the 1960s and uses text input/output with no graphics. Modern versions (bash, zsh, PowerShell) are enormously capable but look nothing like the movies. Tools like tmux split the screen into panes; syntax highlighting in vim or nvim adds color; custom prompts like Starship or Oh My Zsh add style. Real power users\' terminals are functional but barely resemble the hacker aesthetic.',
  },
  {
    title: 'Social Engineering and Perception',
    body: 'Cybersecurity researchers note that the Hollywood hacking aesthetic has shaped public perception of what expertise looks like — non-technical observers associate rapid typing and cascading terminal output with competence. This is precisely why the hacker typer works as a social trick: it activates pattern recognition for "person who knows what they\'re doing." Real social engineering exploits similar heuristics — appearing authoritative enough to bypass human verification.',
  },
  {
    title: 'The Matrix\'s Influence on Hacker Aesthetics',
    body: 'The Matrix (1999) codified the falling green code as the definitive hacker visual. The cascading Katakana and Latin characters were designed by production designer Owen Paterson and visual effects lead Janek Sirrs — they\'re actually a reflection of computer code in sushi recipes, visible if you pause the right frames. The film\'s color grading (heavy green tint inside the Matrix, blue-grey in the real world) became the template for tech-thriller visual language for the next decade.',
  },
  {
    title: 'Using It Responsibly',
    body: 'The hacker typer is comedy and entertainment — a gag that works because everyone recognizes the aesthetic. Using it to genuinely deceive someone into thinking a system is being compromised (social engineering, fraud, unauthorized access claims) crosses from prank into potential legal territory depending on jurisdiction and context. Keep it in the realm of obviously performative humor: Halloween costumes, stream comedy, and office jokes where the "reveal" happens quickly.',
  },
];

export function HackerTyperContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use the hacker typer</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Type anything — look like you\'re hacking the mainframe. The ultimate tech comedy tool.
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
        { slug: 'matrix-screensaver', name: 'Matrix Screensaver' },
        { slug: 'bsod',               name: 'Blue Screen of Death' },
        { slug: 'broken-screen',      name: 'Broken Screen' },
        { slug: 'radar-screen',       name: 'Radar Screen' },
      ]} />
    </>
  );
}
