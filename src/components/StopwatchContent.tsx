import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Running and athletics', desc: 'Time race laps, sprint intervals, or personal record attempts' },
  { title: 'Cooking and baking', desc: 'Track elapsed cooking time without committing to a fixed duration' },
  { title: 'Swimming and cycling', desc: 'Record lap splits and analyze pacing across a workout' },
  { title: 'Public speaking practice', desc: 'Time your speech to hit the target duration without going over' },
  { title: 'Meetings and interviews', desc: 'Track how long a meeting is running to stay respectful of time' },
  { title: 'Competitive gaming', desc: 'Time speedrun attempts, puzzle solving, or reaction speed drills' },
  { title: 'Science experiments', desc: 'Record accurate elapsed time for lab procedures and titration' },
  { title: 'Car maintenance', desc: 'Time brake bleeds, oil changes, and torque sequences to spec' },
  { title: 'Billable work tracking', desc: 'Start the stopwatch when you begin a task, stop when done' },
  { title: 'Kids games', desc: 'Time hide-and-seek, chores, or competitive activities fairly' },
];

const HOW_IT_WORKS = [
  'Click Start to begin counting elapsed time in milliseconds',
  'Press Lap to record a split time without stopping the clock',
  'Click Stop to pause — the elapsed time is preserved',
  'Switch to Countdown mode for time-limited tasks',
  'Press Reset to clear the display and start fresh',
];

const IN_DEPTH = [
  {
    title: 'Stopwatch vs Countdown Timer',
    body: 'A stopwatch measures how long something takes by counting up from zero. A countdown timer measures how long you have left by counting down from a set time. Use a stopwatch when the duration is unknown — how long does it take to run a mile, complete a task, or cook a meal? Use a countdown when you need to stay within a fixed time limit, like a 10-minute presentation slot or a 30-second ad read.',
  },
  {
    title: 'Lap Timing and Split Analysis',
    body: 'Lap splits are the stopwatch\'s most powerful feature. Record a split time at the end of each lap without stopping the overall clock. After your run, swim, or race, compare lap times to analyze pacing — did you go out too fast, negative split, or hold even pace? Lap data is the foundation of athletic training and performance analysis.',
  },
  {
    title: 'Countdown Mode for Time Limits',
    body: 'Switch to countdown mode when you need to work within a hard limit. Set the duration in minutes and seconds — the timer counts down and alerts you at zero. Countdown mode is ideal for presentations with strict time slots, cooking tasks with defined durations, and study intervals where you want to work until the timer fires rather than watching the clock.',
  },
  {
    title: 'Millisecond Precision',
    body: 'The stopwatch displays hundredths of a second — enough precision for most athletic and professional timing needs. This level of accuracy matters for distinguishing close finishing times in sprint competitions, comparing technique variants in skill development, and recording precise durations for technical documentation.',
  },
  {
    title: 'Fitness Applications',
    body: 'Athletes use stopwatches to time rest intervals between strength training sets — research shows specific rest durations optimize hypertrophy (60–90 seconds) or strength (3–5 minutes) adaptations. Runners use split times to monitor pace consistency across long runs. Swimmers record 100m splits to track fitness improvements over a training block.',
  },
  {
    title: 'Productivity and Work Tracking',
    body: 'Starting a stopwatch when you begin a task creates gentle accountability — you can see exactly how long you\'ve been working. This awareness reduces time blindness and helps you build accurate estimates for similar work in the future. Freelancers who track task durations with a stopwatch consistently bill more accurately and underestimate less.',
  },
];

export function StopwatchContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use an online stopwatch</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Free, precise, and works on any device — no app download needed.
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
        { slug: 'countdown-timer', name: 'Countdown Timer' },
        { slug: 'pomodoro-timer',  name: 'Pomodoro Timer' },
        { slug: 'hiit-timer',      name: 'HIIT Timer' },
        { slug: 'focus-screen',    name: 'Focus Timer' },
      ]} />
    </>
  );
}
