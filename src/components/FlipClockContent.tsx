import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Office clock display', desc: 'A beautiful, distraction-free time display for a secondary monitor or screen' },
  { title: 'Presentation timer', desc: 'Display the current time elegantly during conference talks and workshops' },
  { title: 'Reception and lobby displays', desc: 'Professional, eye-catching digital clock for waiting areas' },
  { title: 'Retro-themed events', desc: 'Evokes the aesthetic of 1970s airports, train stations, and hotel lobbies' },
  { title: 'Photography and video backdrops', desc: 'Retro clock background for time-themed photo and video shoots' },
  { title: 'Home office ambient display', desc: 'A stylish clock that adds character to a home office setup' },
  { title: 'Retail and restaurant display', desc: 'Tasteful clock for counters and point-of-sale areas' },
  { title: 'Event countdown display', desc: 'Display time alongside events as a time reference for attendees' },
  { title: 'Streamer overlay', desc: 'Unique retro clock aesthetic as an element in stream layouts' },
  { title: 'Screensaver replacement', desc: 'A functional screensaver that shows useful information while idle' },
];

const HOW_IT_WORKS = [
  'The clock displays hours, minutes, and seconds with animated flip transitions',
  'Each digit panel flips with a realistic mechanical animation when the number changes',
  'Toggle between 12-hour and 24-hour time format in the settings',
  'Customize background color, card color, and text color to match your setup',
  'Use fullscreen mode for maximum impact on a large or dedicated display',
];

const IN_DEPTH = [
  {
    title: 'The Mechanical Flip Clock',
    body: 'The split-flap display — commonly called a flip clock or Solari board — was invented in the 1950s and became the dominant public information display technology through the 1970s and 80s. Individual numeral cards were attached to rotating drums; as time progressed, the drum would advance and the current card would flip down with a characteristic clack. The sound of a large split-flap board updating — hundreds of cards flipping simultaneously — is one of the most distinctive sounds of mid-century transport infrastructure.',
  },
  {
    title: 'Solari Boards in Airports and Stations',
    body: 'The Solari di Udine company in Italy manufactured the most iconic split-flap boards, which became known generically as "Solari boards." They were used in airports, train stations, and hotel lobbies worldwide. The last major analog Solari board in US service — at Penn Station in New York — was retired in 2016. Boards at Schiphol Airport in Amsterdam and Zürich Airport remain in service. The flipping animation and ambient sound became so beloved that digital replacements now often simulate it.',
  },
  {
    title: 'CSS Flip Animation',
    body: 'The flip clock animation is achieved entirely with CSS 3D transforms — no canvas, no WebGL. The flip transition uses rotateX() to pivot the card around its horizontal center, with two card faces (the static next value and the flipping current value) switching visibility at the halfway point of the animation. Getting the timing, easing, and shadow effects right requires careful calibration to avoid visual glitches. The result is a smooth, GPU-accelerated animation that runs at 60fps without impacting performance.',
  },
  {
    title: 'Retro Design Resurgence',
    body: 'Flip clock aesthetics have experienced a significant design revival driven by nostalgia and a broader "analog revival" movement in digital design. Apps like Fliqlo (Mac screensaver), streaming interfaces, and countless web designs have adopted the flip clock as a symbol of elegant simplicity — function without ornamentation. The combination of mechanical motion and crisp typography taps into a cultural longing for the craftsmanship of pre-digital objects.',
  },
  {
    title: 'Time Display for Focus and Productivity',
    body: 'A dedicated clock display has cognitive benefits over checking a phone or status bar: it does one thing only, requires no mode-switching, and does not trigger notification checks. Glancing at a flip clock provides only time — no messages, no calendar bubbles, no battery anxiety. For deep work sessions, having a physical or virtual analog time reference that cannot push notifications is genuinely conducive to focus.',
  },
  {
    title: 'Display Sizes and Contexts',
    body: 'The flip clock scales elegantly to any display size. On a 13-inch laptop used as an office clock, the display sits comfortably at a normal viewing distance. On a 55-inch TV in a lobby, the large digits are readable from across a room. For presentation use, the contrast between the clock background and card colors determines readability against ambient light — dark cards on a light background perform better in bright conference rooms; light-on-dark works well in dim environments.',
  },
];

export function FlipClockContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a flip clock display</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          The classic split-flap aesthetic — elegant, functional, and unmistakably retro.
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
        { slug: 'dvd-screensaver',     name: 'DVD Screensaver' },
        { slug: 'matrix-screensaver',  name: 'Matrix Screensaver' },
        { slug: 'motivational-quote',  name: 'Motivational Quotes' },
        { slug: 'countdown-timer',     name: 'Countdown Timer' },
      ]} />
    </>
  );
}
