import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Office pranks', desc: 'Leave it running on a coworker\'s screen while they\'re away from their desk' },
  { title: 'April Fools', desc: 'Classic gag that looks convincingly real at a glance' },
  { title: 'Roommate pranks', desc: 'Convince a housemate their laptop screen cracked while they were out' },
  { title: 'Sibling trolling', desc: 'Instantly credible prank for younger siblings who just borrowed your device' },
  { title: 'Classroom laughs', desc: 'Project on a classroom display for a harmless, reversible teacher joke' },
  { title: 'Halloween display', desc: 'Add to a tech-horror setup — broken screens fit the aesthetic perfectly' },
  { title: 'Party trick', desc: 'Pull up the broken screen on someone\'s phone for a quick group laugh' },
  { title: 'Film and photo props', desc: 'Use as a background for "broken tech" themed shoots or thumbnails' },
  { title: 'Social media content', desc: 'Screenshot the broken screen effect for visual storytelling' },
  { title: 'Customer service roleplay', desc: 'Training scenarios for how to react to device damage complaints' },
];

const HOW_IT_WORKS = [
  'Open the tool on the target device in full-screen mode',
  'Realistic crack patterns radiate from an impact point on the display',
  'Optional color distortion mimics LCD pixel damage near the cracks',
  'The screen looks identical to a genuinely shattered display',
  'Close the browser tab to instantly reveal the unharmed screen',
];

const IN_DEPTH = [
  {
    title: 'Why It Looks Real',
    body: 'Modern LCD and OLED screens shatter in predictable patterns — radial cracks emanate from the impact point with irregular, branching fractures spreading outward. The broken screen simulation replicates these physics-accurate crack patterns with SVG overlays, combined with simulated color bleed and pixel corruption effects near the cracks. At a glance, or on a phone across the room, the effect is genuinely convincing.',
  },
  {
    title: 'The Best Setup for Maximum Effect',
    body: 'For the most effective prank: open the tool, activate full-screen mode (F11), then set the device down naturally as if you\'ve walked away. The key is that the device should be in a position where the victim finds it themselves rather than you handing it to them — the discovery moment creates the most authentic reaction. Works best on devices they care about, like a laptop they just bought.',
  },
  {
    title: 'Cracked Screen Repair Costs: The Real Story',
    body: 'Part of what makes the broken screen prank work so well is the visceral, immediate calculation victims make about repair costs. iPhone screen replacements run $129–$329 depending on model. MacBook displays can cost $400–$600. Android flagship screens range from $200–$450. Samsung Galaxy glass replacements top out at over $500. These real costs — instantly calculated in the victim\'s head — amplify the prank\'s impact dramatically before they realize it\'s fake.',
  },
  {
    title: 'Prank Ethics and Consent',
    body: 'A good prank has a clear end point where the prank is revealed and both parties laugh. The broken screen prank is best deployed on people with good senses of humor who enjoy playful jabs. Avoid pranking people who are already stressed, who have anxiety about finances, or who have recently had an actual screen break — the line between funny and cruel is context-dependent. Always reveal the prank quickly, before genuine distress sets in.',
  },
  {
    title: 'Customizing the Crack Pattern',
    body: 'The impact point, crack density, and color distortion can all be customized in the settings panel. A single central impact point looks like a drop. Multiple impact points in a corner suggest a fall from a specific angle. Heavy color distortion near the cracks adds realism. For more casual pranks, lighter crack patterns without distortion are convincing from a distance. For up-close victims or tech-savvy targets, max out all settings.',
  },
  {
    title: 'Using as a Creative Background',
    body: 'Beyond pranks, the broken screen aesthetic is a popular visual motif in tech-themed content. Thumbnails showing a "cracked" screen signal danger, failure, or dramatic events. Use the tool as a background for screenshots, overlay it in video editing software, or use it as a background for product review content discussing screen durability. The recognizable visual shorthand communicates device vulnerability instantly.',
  },
];

export function BrokenScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a broken screen prank</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Shockingly realistic cracked screen simulation — instant prank, zero damage.
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
        { slug: 'radar-screen',  name: 'Radar Screen' },
        { slug: 'white-noise',   name: 'White Noise' },
        { slug: 'bsod',          name: 'Blue Screen of Death' },
        { slug: 'hacker-typer',  name: 'Hacker Typer' },
      ]} />
    </>
  );
}
