import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Morning meditation', desc: 'Start the day with a guided breathing session before checking your phone' },
  { title: 'Pre-sleep wind-down', desc: 'Slow your nervous system and reduce racing thoughts before bed' },
  { title: 'Anxiety and stress relief', desc: 'Activate the parasympathetic nervous system during moments of stress' },
  { title: '4-7-8 breathing', desc: 'Practice the clinically studied 4-7-8 technique for relaxation response' },
  { title: 'Box breathing', desc: 'Use the Navy SEAL-popularized 4-4-4-4 technique for calm under pressure' },
  { title: 'Between work sessions', desc: 'Reset mentally and physically before starting a new focus block' },
  { title: 'Yoga and stretching', desc: 'Synchronize breath with movement during yin yoga or flexibility work' },
  { title: 'Pre-performance nerves', desc: 'Calm nerves before a presentation, interview, or competition' },
  { title: 'Mindfulness practice', desc: 'Use the animated circle as an anchor for present-moment awareness' },
  { title: 'Panic and overbreathing', desc: 'Counter hyperventilation by following the guided exhale phase' },
];

const HOW_IT_WORKS = [
  'Set your inhale duration, hold duration, and exhale duration in seconds',
  'Choose a session length — or let it run continuously',
  'The animated circle expands on inhale, holds at peak, and contracts on exhale',
  'Follow the visual guide without counting — the animation does the timing',
  'An optional sound cue marks each phase transition',
];

const IN_DEPTH = [
  {
    title: 'How Controlled Breathing Changes Your Body',
    body: 'Controlled breathing directly modulates the autonomic nervous system. Slow, extended exhales activate the vagus nerve and shift the body from sympathetic (fight-or-flight) to parasympathetic (rest-and-digest) dominance. Heart rate slows, blood pressure drops, and cortisol levels decrease within minutes of beginning a slow breathing practice. This is not relaxation as a metaphor — it is measurable physiology.',
  },
  {
    title: '4-7-8 Breathing Technique',
    body: 'Developed by Dr. Andrew Weil based on pranayama yoga techniques, the 4-7-8 method involves inhaling for 4 seconds, holding the breath for 7 seconds, and exhaling slowly for 8 seconds. The extended hold builds CO2 tolerance, and the long exhale maximally activates the relaxation response. Set inhale to 4, hold to 7, and exhale to 8 in the settings to practice this technique.',
  },
  {
    title: 'Box Breathing (4-4-4-4)',
    body: 'Box breathing — equal durations of inhale, hold, exhale, and hold-empty — is used by the US Navy SEALs, paramedics, and emergency responders to maintain composure under extreme stress. The symmetrical pattern is easy to remember and effective at stabilizing heart rate variability. Set all four phases to 4 seconds for the classic protocol. Experienced practitioners move to 6 or 8 seconds per side.',
  },
  {
    title: 'Diaphragmatic vs Chest Breathing',
    body: 'Most people breathe shallowly from the chest during stress, activating the sympathetic nervous system. Diaphragmatic breathing — filling the abdomen before the chest — is the target for all breathing techniques. Place one hand on your belly and one on your chest. During inhale, the belly should rise first. During exhale, it falls last. The animated circle\'s expansion is a visual cue for belly expansion.',
  },
  {
    title: 'Building a Daily Practice',
    body: 'Research shows that as few as 5 minutes of daily controlled breathing practice significantly reduces baseline anxiety and improves heart rate variability over several weeks. The most effective way to build the habit is to anchor it to an existing routine: immediately after waking, before a morning coffee, or as the first step of your wind-down routine before sleep. Consistency matters more than session length.',
  },
  {
    title: 'Using Breathing Before Deep Work',
    body: 'A 3–5 minute breathing session before starting focused work primes the prefrontal cortex by reducing baseline cortisol and arousal. Studies by researchers at Stanford show that physiological sighing — a double inhale through the nose followed by a long exhale — is the fastest single breath pattern for reducing stress. Use the meditation breather before starting a Focus Timer or Pomodoro session for a measurable performance edge.',
  },
];

export function MeditationBreatherContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a guided breathing tool</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Control your breath — control your nervous system. Free, visual, and works anywhere.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: 10,
        }}>
          {USE_CASES.map(({ title, desc }) => (
            <div
              key={title}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '12px 16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
              }}
            >
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 10,
          marginTop: 16,
        }}>
          {HOW_IT_WORKS.map((text, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '14px 16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
              }}
            >
              <span style={{
                width: 26, height: 26, borderRadius: '50%',
                background: 'var(--text)', color: 'var(--bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, flexShrink: 0,
              }}>
                {i + 1}
              </span>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.55 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ ...headingSx, marginBottom: 20 }}>Complete guide</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px 32px',
        }}>
          {IN_DEPTH.map(({ title, body }) => (
            <div key={title}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <ContentRelatedTools tools={[
        { slug: 'focus-screen',    name: 'Focus Timer' },
        { slug: 'pomodoro-timer',  name: 'Pomodoro Timer' },
        { slug: 'countdown-timer', name: 'Countdown Timer' },
        { slug: 'white-screen',    name: 'White Screen' },
      ]} />
    </>
  );
}
