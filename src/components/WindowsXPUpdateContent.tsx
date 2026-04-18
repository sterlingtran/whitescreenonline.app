import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Millennial and Gen X pranks', desc: 'Anyone who used XP in their formative years will have an instant visceral reaction' },
  { title: 'Retro tech nostalgia', desc: 'The XP update screen is a portal directly back to 2002–2008 computing' },
  { title: 'Office pranks with a twist', desc: 'More surprising than Windows 10 — who is still getting XP updates?' },
  { title: '2000s-themed parties', desc: 'Authentic retro tech prop for decade-themed events' },
  { title: 'Tech history presentations', desc: 'Show students what early 2000s PC updates looked like in practice' },
  { title: 'IT nostalgia content', desc: 'Sysadmins and IT veterans will fondly — or not so fondly — remember this screen' },
  { title: 'Retro gaming setups', desc: 'Display alongside other retro computing props for authentic era atmosphere' },
  { title: 'Streamer throwback content', desc: 'Pull up for retro-themed streams or "what if it was 2003" content bits' },
  { title: 'Film and video props', desc: 'Period-accurate computer screen for productions set in the early 2000s' },
  { title: 'Surprise factor pranks', desc: 'The confusion of an XP update on modern hardware doubles the comedy' },
];

const HOW_IT_WORKS = [
  'The screen replicates the authentic Windows XP Service Pack update interface',
  'Classic blue and green XP color scheme with the distinctive progress bar style',
  'Familiar "Please do not turn off your computer" messaging creates instant recognition',
  'Set your preferred duration and let the nostalgia — and panic — unfold',
  'Close the browser tab instantly to end the prank',
];

const IN_DEPTH = [
  {
    title: 'Windows XP: The Most Beloved OS',
    body: 'Windows XP, released in October 2001, became the most widely used operating system in history — at its peak it ran on over 75% of PCs worldwide. Its five-year mainstream support lifecycle stretched to January 2009, and extended support ran until April 2014 — a remarkable 13 years. XP\'s combination of stability (compared to Windows ME), friendly aesthetics, and solid hardware compatibility made it the default choice for homes, schools, businesses, and governments worldwide. Many users refused to upgrade even after official support ended.',
  },
  {
    title: 'Windows XP End of Life: A Global Crisis',
    body: 'When Microsoft ended extended support for Windows XP on April 8, 2014, approximately 29% of all Windows PCs still ran the OS — hundreds of millions of machines suddenly receiving no security updates. Healthcare systems, ATMs, point-of-sale terminals, and government computers worldwide ran XP past its end-of-life date. The NHS in the UK paid Microsoft millions for extended custom support. In 2017, the WannaCry ransomware attack exploited an unpatched XP vulnerability and spread to over 230,000 computers in 150 countries.',
  },
  {
    title: 'The Bliss Wallpaper',
    body: 'The default Windows XP "Bliss" wallpaper — rolling green hills under a blue sky with white clouds — is one of the most viewed photographs in history. It was taken by photographer Charles O\'Rear in January 1996 in Sonoma County, California, on film (not digital). Microsoft purchased the photo outright. The actual location has since been developed into vineyards and no longer resembles the photo. Bliss is inseparable from the XP experience and triggers instant nostalgic recognition for anyone who used the OS.',
  },
  {
    title: 'Windows Update in the XP Era',
    body: 'XP used the Windows Update website — you visited windowsupdate.microsoft.com in Internet Explorer, which downloaded and ran an ActiveX control to scan your system and display available updates. The process was manual and optional, which meant vast numbers of machines ran without critical security patches. Service Pack 2 (2004) introduced Automatic Updates and the Windows Security Center, dramatically improving security hygiene. This shift from manual to automatic updating became the template for all subsequent Windows versions.',
  },
  {
    title: 'Nostalgia and the XP Aesthetic',
    body: 'The Windows XP visual style — rounded corners, glossy taskbar buttons, green Start button, the Luna and Royale themes — represents a specific moment in design history: the transition from flat Windows 2000 to the exuberant, candy-colored Web 2.0 aesthetic. The XP interface was deliberately friendlier and more colorful than its predecessor. Today it reads as vintage and charming — the same way 1970s harvest gold appliances or 1980s neon graphics feel: dated in a way that inspires affection rather than embarrassment.',
  },
  {
    title: 'The Prank\'s Unique Twist',
    body: 'The Windows XP update prank works differently than modern OS updates because the incongruity itself is the joke: why is this machine getting an XP update? XP support ended over a decade ago. The confusion about what system is being updated, combined with nostalgia for the interface, creates a doubled reaction — first the panic of an unexpected update, then the confusion of recognizing the ancient UI, then the realization. The XP prank rewards people who remember the OS most — making it particularly effective on anyone over 30.',
  },
];

export function WindowsXPUpdateContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>The nostalgic Windows XP update prank</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          The most beloved operating system of its era — now a perfect prank and nostalgia trip.
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
        { slug: 'windows-10-update', name: 'Windows 10 Update' },
        { slug: 'macos-update',      name: 'macOS Update' },
        { slug: 'bsod',              name: 'Blue Screen of Death' },
        { slug: 'hacker-typer',      name: 'Hacker Typer' },
      ]} />
    </>
  );
}
