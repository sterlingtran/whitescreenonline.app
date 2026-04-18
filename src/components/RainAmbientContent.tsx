import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Sleep and falling asleep', desc: 'Rain sound is one of the most effective natural sleep aids available' },
  { title: 'Deep focus and work', desc: 'Consistent rain masks distracting environmental sounds for sustained concentration' },
  { title: 'Study sessions', desc: 'Background rain reduces task-switching and improves reading retention' },
  { title: 'Meditation and mindfulness', desc: 'The visual animation provides a gentle anchor for eyes-open meditation' },
  { title: 'Stress and anxiety relief', desc: 'Rain sounds reliably reduce cortisol and activate the relaxation response' },
  { title: 'Cozy home ambiance', desc: 'Create the atmosphere of a rainy evening without leaving the room' },
  { title: 'Writing and creative work', desc: 'Rain is strongly associated with introspection and creative thinking' },
  { title: 'Background for video calls', desc: 'A calming, non-distracting ambient display while on audio-only calls' },
  { title: 'Napping and resting', desc: 'Short rest sessions are deeper and more restorative with ambient rain sound' },
  { title: 'Office mask for open plans', desc: 'Rain audio provides consistent background masking for open office noise' },
];

const HOW_IT_WORKS = [
  'The canvas animation renders hundreds of falling rain drops with realistic physics',
  'Toggle the audio component to add synchronized rain and optional thunder sounds',
  'Adjust rain density, speed, and wind angle to match your preferred storm intensity',
  'Enable thunder mode for periodic rumbles and lightning flashes',
  'Use fullscreen for full immersion — visual and audio fill your entire display',
];

const IN_DEPTH = [
  {
    title: 'Why Rain Sounds Promote Sleep and Focus',
    body: 'Rain sound is a form of pink noise — a broadband sound with more energy in lower frequencies than white noise. Pink noise closely matches the 1/f pattern found throughout nature (ocean waves, wind, heartbeat) and appears uniquely matched to the brain\'s natural rhythms. Research published in Frontiers in Human Neuroscience found that pink noise synchronized with brain oscillations during sleep deepened slow-wave sleep and improved next-day memory consolidation by 22–26%.',
  },
  {
    title: 'Acoustic Masking in Loud Environments',
    body: 'Rain sound works as a focus aid primarily through acoustic masking — raising the consistent background noise floor so that sudden, distracting sounds (a door slamming, a phone ringing, a conversation starting) produce less of a relative volume spike. Cognitive research shows that it is sudden changes in the acoustic environment, not sustained volume, that trigger involuntary attention shifts. Rain\'s consistent broadband frequency coverage masks a wider range of disruptive sounds than a fan or white noise machine.',
  },
  {
    title: 'The Psychology of Rain and Mood',
    body: 'Rain has paradoxical psychological effects: it is associated with introspection, creativity, and cozy comfort (a phenomenon called "petrichor mood") while also being linked in some studies to mild depressive tendencies in sensitive individuals. The positive associations appear to dominate for people who actively choose to listen to rain sounds — the act of seeking out the stimulus implies a positive expectation. Rainy-day creativity boosts are well documented in behavioral research, particularly for abstract thinking tasks.',
  },
  {
    title: 'ASMR and Autonomous Sensory Meridian Response',
    body: 'Rain is one of the most popular ASMR (Autonomous Sensory Meridian Response) triggers — a tingling sensation some people experience in response to specific soft sounds. Rain recordings consistently rank among the top ASMR content categories on YouTube. The repetitive, non-threatening, and slightly unpredictable nature of rain (each drop slightly different in timing) may be what distinguishes it from pure white noise and makes it particularly effective as an ASMR trigger.',
  },
  {
    title: 'Thunder and Startle Response',
    body: 'Thunder in rain ambient contexts creates a controlled startle-and-resolution cycle — the distant rumble triggers a mild arousal response that quickly resolves back to calm. This micro-pattern of tension and release is characteristic of many relaxing media (slow music, ocean waves) and may be part of why rain with occasional thunder is more engaging and relaxing than pure rain without thunder. Keep thunder volume lower than rain for optimal relaxation — the ratio matters.',
  },
  {
    title: 'Rain Animation: The Technical Approach',
    body: 'Realistic rain animation requires simulating both the falling phase and the splash phase. Each drop is a short, angled line with a slight opacity variation to simulate depth. Wind angle is applied by offsetting the horizontal velocity, creating the characteristic diagonal streaks of a windy storm. On impact with the bottom edge, drops generate small circular ripple animations. The canvas animation updates at 60fps using requestAnimationFrame with a particle pool that reuses dropped objects rather than creating new ones — essential for performance on mobile devices.',
  },
];

export function RainAmbientContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use rain ambient sound and visuals</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Nature\'s most effective sleep and focus aid — animated and free in any browser.
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
        { slug: 'particle-system',       name: 'Particle System' },
        { slug: 'starfield-screensaver', name: 'Starfield' },
        { slug: 'white-noise',           name: 'White Noise' },
        { slug: 'meditation-breather',   name: 'Meditation Breather' },
      ]} />
    </>
  );
}
