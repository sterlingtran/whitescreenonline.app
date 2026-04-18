import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Deep work sessions', desc: 'Work in 25-minute sprints to stay sharp and avoid mental fatigue' },
  { title: 'Student studying', desc: 'The most effective study technique proven by decades of research' },
  { title: 'Writing and drafting', desc: 'Beat writer\'s block by committing to just one focused 25-minute block' },
  { title: 'Software development', desc: 'Code in focused sprints and use breaks to step back and think' },
  { title: 'Email and admin', desc: 'Batch communication tasks into a single Pomodoro to avoid constant checking' },
  { title: 'Creative work', desc: 'Protect creative flow — no interruptions during the work interval' },
  { title: 'Language learning', desc: 'Vocabulary drills, grammar practice, and reading are all Pomodoro-friendly' },
  { title: 'Remote work', desc: 'Structure your home workday with clear boundaries between focus and breaks' },
  { title: 'Freelancing', desc: 'Track billable time by counting completed Pomodoros per project' },
  { title: 'ADHD management', desc: 'Short, bounded intervals are easier to commit to than open-ended sessions' },
];

const HOW_IT_WORKS = [
  'Set your work duration (default: 25 minutes) and break length (default: 5 minutes)',
  'Click Start — the timer counts down through your work session',
  'An audio alert sounds when the work session ends — take your break',
  'The timer automatically switches to break mode and counts down',
  'After 4 Pomodoros, take a longer 15–30 minute rest',
];

const IN_DEPTH = [
  {
    title: 'The Pomodoro Technique Explained',
    body: 'Developed by Francesco Cirillo in the late 1980s, the Pomodoro Technique is a time management method that uses a timer to break work into intervals — traditionally 25 minutes long — separated by short breaks. The name comes from the tomato-shaped kitchen timer Cirillo used as a university student. It remains one of the most widely adopted productivity frameworks in the world.',
  },
  {
    title: 'Why It Works: The Science',
    body: 'The Pomodoro Technique works because it harnesses two powerful cognitive principles: time-boxing and the Zeigarnik Effect. Time-boxing creates urgency that counters procrastination. The Zeigarnik Effect — the tendency to remember unfinished tasks — keeps your mind engaged between sessions. Regular breaks prevent decision fatigue and maintain glucose levels for sustained concentration.',
  },
  {
    title: 'Customizing Work and Break Durations',
    body: 'The classic 25/5 split is not universal. Many people find 50-minute work sessions with 10-minute breaks more effective once they\'ve built concentration stamina. Students preparing for exams often prefer 30/5. Software developers in flow states may want 45/15. Start with the default, then adjust based on your natural attention span until sessions feel both challenging and achievable.',
  },
  {
    title: 'Counting Pomodoros as Output',
    body: 'Francesco Cirillo\'s original method treats completed Pomodoros as measurable output — more useful than tracking hours because it measures actual focused work, not clock time. Tracking 8 Pomodoros in a workday is a concrete, honest measure of productivity. Freelancers and consultants use Pomodoro counts to estimate and bill project work more accurately.',
  },
  {
    title: 'Combining with Other Methods',
    body: 'The Pomodoro Technique integrates well with GTD (Getting Things Done) by helping you estimate how many Pomodoros a task requires. Pair it with time-blocking calendars by allocating Pomodoro sessions to calendar blocks. Use the Focus Timer for longer uninterrupted sessions when you need to enter deep flow without the 25-minute interruption cycle.',
  },
  {
    title: 'Protecting Your Break',
    body: 'The break is not optional — it is the mechanism that makes the system sustainable. During 5-minute breaks, leave your desk, look out a window (reduces eye strain), or do light movement. Avoid checking social media during breaks, as it engages the same cognitive networks as work and prevents recovery. The goal is genuine cognitive rest.',
  },
];

export function PomodoroTimerContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use the Pomodoro Technique</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          25 minutes of focused work, 5 minutes of rest — repeat until done.
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
        { slug: 'countdown-timer',     name: 'Countdown Timer' },
        { slug: 'stopwatch',           name: 'Stopwatch' },
        { slug: 'focus-screen',        name: 'Focus Timer' },
        { slug: 'meditation-breather', name: 'Meditation Breather' },
      ]} />
    </>
  );
}
