import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Presentations & talks', desc: 'Keep speakers on time with a visible countdown on a shared screen' },
  { title: 'Cooking & baking', desc: 'Set exact cook times — no more over- or under-cooked food' },
  { title: 'Classroom tests', desc: 'Display a full-screen timer for students taking exams or quizzes' },
  { title: 'Meeting time-boxes', desc: 'Limit agenda items so meetings finish on schedule' },
  { title: 'Workout intervals', desc: 'Time rest periods between sets, HIIT rounds, or stretch holds' },
  { title: 'Study sessions', desc: 'Work in focused blocks — know exactly how much time remains' },
  { title: 'Event countdowns', desc: 'Count down to a speech, product launch, or event start' },
  { title: 'Kids activities', desc: 'Make cleanup or task time visible and fair for children' },
  { title: 'Board games', desc: 'Add time pressure to turn-based games like chess or trivia' },
  { title: 'Meditation sessions', desc: 'Know when your sit ends without constantly checking the clock' },
];

const HOW_IT_WORKS = [
  'Enter your desired time in hours, minutes, and seconds',
  'Press Start — the countdown begins immediately',
  'Pause and resume at any point without losing your time',
  'Press Fullscreen to expand for presentations or shared displays',
  'An alert sounds when the countdown reaches zero',
];

const IN_DEPTH = [
  {
    title: 'Presentations and Classrooms',
    body: 'A fullscreen countdown timer is one of the most effective tools for keeping presentations, lectures, and exams on track. Display it on a projector or second screen so both the presenter and audience can see the remaining time. The large, readable clock eliminates the awkward back-channel communication between speakers and event organizers.',
  },
  {
    title: 'Cooking and Kitchen Timing',
    body: 'Kitchen timers on smartphones get buried under notifications. A fullscreen browser countdown stays visible and impossible to miss — especially useful on tablets mounted in the kitchen. Set precise durations for roasting, proofing dough, marinating meat, or timing a multi-course meal with multiple overlapping timers.',
  },
  {
    title: 'Fitness and Interval Training',
    body: 'Time your rest intervals between weightlifting sets or track how long you hold a yoga pose. A large countdown display is far easier to glance at than a phone screen mid-workout. Combine it with the HIIT Timer for structured interval sessions with automatic switching between work and rest periods.',
  },
  {
    title: 'Deep Work and Study',
    body: 'Research consistently shows that working in bounded time blocks improves focus and reduces procrastination. Knowing you have 45 minutes (not an open-ended session) creates urgency and reduces task-switching. Use the countdown timer alongside the Pomodoro Timer for a complete focus workflow.',
  },
  {
    title: 'Keyboard Shortcuts',
    body: 'Start or pause with the spacebar, reset with R, and toggle fullscreen with F — all without touching the mouse. These shortcuts make the countdown timer practical for presenters managing clickers and educators who need quick control during class without walking back to the keyboard.',
  },
  {
    title: 'Custom Colors and Clock Size',
    body: 'Choose background and text colors to match your brand, slide theme, or event color scheme. The adjustable clock size means the timer stays readable whether it is on a laptop screen, a 65-inch conference room display, or a tablet next to the stove.',
  },
];

export function CountdownTimerContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a countdown timer</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Works on any device — phone, tablet, laptop, or connected TV.
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
        { slug: 'pomodoro-timer',  name: 'Pomodoro Timer' },
        { slug: 'stopwatch',       name: 'Stopwatch' },
        { slug: 'hiit-timer',      name: 'HIIT Timer' },
        { slug: 'focus-screen',    name: 'Focus Timer' },
      ]} />
    </>
  );
}
