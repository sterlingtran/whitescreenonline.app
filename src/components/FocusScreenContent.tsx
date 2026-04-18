import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Deep work sessions', desc: 'Enter a distraction-free state for your most cognitively demanding tasks' },
  { title: 'University studying', desc: 'Block out a defined study window when preparing for exams' },
  { title: 'Writing and drafting', desc: 'A minimal timer that disappears into the background while you write' },
  { title: 'Coding flow state', desc: 'Set a focus window and resist the urge to context-switch until it fires' },
  { title: 'Reading sessions', desc: 'Time a reading block with zero visual noise competing for attention' },
  { title: 'Research and analysis', desc: 'Protect a defined window for synthesis work that requires sustained thought' },
  { title: 'Remote work boundaries', desc: 'Signal to housemates that you are in a focus window — no interruptions' },
  { title: 'Creative brainstorming', desc: 'Give creative work a bounded window to prevent endless open-ended sessions' },
  { title: 'Language practice', desc: 'Commit to a defined immersion block for vocabulary or listening drills' },
  { title: 'Therapeutic focus training', desc: 'Practice sustained attention in incrementally longer intervals' },
];

const HOW_IT_WORKS = [
  'Set your focus duration — 30, 45, 60 minutes or a custom length',
  'Click Start — the timer begins on a minimal, distraction-free display',
  'The screen shows only the remaining time — nothing else competes for attention',
  'An alert sounds when your focus session ends',
  'Take a deliberate break before starting the next session',
];

const IN_DEPTH = [
  {
    title: 'Why Minimal Design Matters',
    body: 'Most productivity apps are counterproductive — they add visual complexity that competes with the work you\'re trying to do. A focus timer should disappear into the background after you start it. The minimal design of this tool is intentional: no notifications, no progress bars, no gamification — just the time remaining. The absence of stimulation is the feature.',
  },
  {
    title: 'The Neuroscience of Deep Work',
    body: 'Sustained focus activates the prefrontal cortex and enables what researchers call "flow" — a state of complete absorption in a challenging task. Flow requires approximately 15–20 minutes of uninterrupted engagement to initiate. Every notification or context switch resets this timer. A fixed-length focus session creates the commitment device needed to reach and sustain flow.',
  },
  {
    title: 'Choosing the Right Duration',
    body: 'Attention spans are not fixed — they depend on the task, your current cognitive load, and training. Beginners should start with 25–30 minute sessions. Experienced deep workers can sustain 90-minute focus blocks, which aligns with the natural ultradian rhythm — the 90-minute biological cycle that governs attention and energy. Listen to your natural focus patterns and schedule sessions accordingly.',
  },
  {
    title: 'Focus vs. Pomodoro Timer',
    body: 'The Pomodoro Timer breaks work into 25-minute intervals with mandatory breaks — it is designed for fragmented tasks and busy knowledge workers who need to context-switch frequently. The Focus Timer is designed for uninterrupted deep work on a single task. Use Pomodoro for email, admin, and communication; use the Focus Timer for writing, coding, analysis, and any work that benefits from sustained cognitive engagement.',
  },
  {
    title: 'Creating a Focus Ritual',
    body: 'Consistently entering a focus session becomes easier when you attach it to a ritual: close all browser tabs except what you need, put on headphones (even without music), fill a water bottle, and start the timer. This sequence signals to your brain that focus time has begun — the same way athletes use pre-game routines to reach peak performance state on demand.',
  },
  {
    title: 'Protecting Focus with Environment',
    body: 'The timer manages time. Your environment manages interruption. Before starting a focus session: silence your phone, close communication apps, and hang a "do not disturb" signal if needed. Research by Gloria Mark at UC Irvine found that after an interruption, it takes an average of 23 minutes to return to the original task — each interruption costs far more time than the interruption itself.',
  },
];

export function FocusScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a distraction-free focus timer</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          A timer that gets out of the way — so you can do your best work.
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
        { slug: 'pomodoro-timer',      name: 'Pomodoro Timer' },
        { slug: 'meditation-breather', name: 'Meditation Breather' },
        { slug: 'countdown-timer',     name: 'Countdown Timer' },
        { slug: 'stopwatch',           name: 'Stopwatch' },
      ]} />
    </>
  );
}
