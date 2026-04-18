import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Home HIIT workouts', desc: 'Structure work/rest cycles without watching a clock between exercises' },
  { title: 'Tabata training', desc: '20 seconds on, 10 seconds off — the classic 8-round Tabata protocol' },
  { title: 'Boxing and martial arts', desc: 'Time rounds and rest periods for bag work, shadow boxing, and drills' },
  { title: 'Circuit training', desc: 'Cycle through stations automatically with clear audio cues for transitions' },
  { title: 'CrossFit and functional fitness', desc: 'Program AMRAP and EMOM workouts with precise interval control' },
  { title: 'Cycling and spin classes', desc: 'Time sprint intervals and recovery periods on a stationary bike' },
  { title: 'Jump rope training', desc: 'Structure on/off intervals for fat-burning rope skipping sessions' },
  { title: 'Athletic conditioning', desc: 'Build sport-specific endurance with programmable work-to-rest ratios' },
  { title: 'Group fitness instruction', desc: 'Run class intervals from a visible screen without coaching from a phone' },
  { title: 'Physical therapy', desc: 'Time exercise sets and controlled rest for rehabilitation protocols' },
];

const HOW_IT_WORKS = [
  'Set your work duration (e.g. 40 seconds) and rest duration (e.g. 20 seconds)',
  'Enter the number of rounds for the session',
  'Press Start — the timer counts down through work, alerts you, then switches to rest',
  'Audio cues signal every transition between work and rest phases',
  'The round counter tracks your progress toward the session total',
];

const IN_DEPTH = [
  {
    title: 'What Is HIIT and Why It Works',
    body: 'High-Intensity Interval Training (HIIT) alternates short bursts of maximum-effort exercise with brief recovery periods. This structure triggers EPOC (Excess Post-exercise Oxygen Consumption) — your body continues burning calories at an elevated rate for hours after the workout ends. Studies consistently show HIIT produces cardiovascular and metabolic adaptations comparable to steady-state cardio in a fraction of the time.',
  },
  {
    title: 'Work-to-Rest Ratios for Different Goals',
    body: 'The work-to-rest ratio determines the training stimulus. A 1:1 ratio (e.g. 30s work / 30s rest) builds cardiovascular endurance. A 2:1 ratio (40s work / 20s rest) increases intensity and caloric burn. A 1:2 ratio (20s work / 40s rest) allows higher peak intensity per interval — suitable for strength-focused conditioning. Adjust the ratio based on fitness level and session goal.',
  },
  {
    title: 'Tabata Protocol',
    body: 'Tabata is the most researched HIIT protocol: 20 seconds of maximum effort followed by 10 seconds of rest, repeated for 8 rounds (4 minutes total). It was developed by Japanese researcher Dr. Izumi Tabata and shown to improve both anaerobic and aerobic capacity simultaneously. Set work to 20s, rest to 10s, rounds to 8 for a faithful Tabata session.',
  },
  {
    title: 'Audio Cues and Transitions',
    body: 'The most common HIIT training mistake is missing interval transitions because you\'re focused on the exercise. Audio alerts eliminate the need to watch the screen — you hear the cue and switch without breaking rhythm or form. This is especially important during high-intensity movements like burpees, kettlebell swings, or battle ropes where maintaining focus on the screen is impractical.',
  },
  {
    title: 'Programming Rounds and Volume',
    body: 'Beginners should start with 4–6 rounds and work up to 8–12 as fitness improves. Total session volume — work time multiplied by rounds — should stay under 30 minutes for most HIIT workouts to avoid overtraining. Rest between rounds should be genuinely restorative: if you cannot hit the same pace in round 6 as round 1, either the rest period is too short or the work intensity is too high.',
  },
  {
    title: 'Warm-Up and Cool-Down',
    body: 'HIIT places significant demand on joints, connective tissue, and the cardiovascular system. A dedicated 5-minute warm-up of dynamic movements (leg swings, arm circles, light jogging) before starting the timer reduces injury risk significantly. Program a final 1:2 or 1:3 work-to-rest round at the end to signal the body to begin recovery before stretching.',
  },
];

export function HIITTimerContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a HIIT interval timer</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Structured intervals outperform unstructured cardio — the timer is the structure.
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
        { slug: 'countdown-timer', name: 'Countdown Timer' },
        { slug: 'focus-screen',    name: 'Focus Timer' },
      ]} />
    </>
  );
}
