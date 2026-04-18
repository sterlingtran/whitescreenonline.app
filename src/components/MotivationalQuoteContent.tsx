import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Office inspiration wall', desc: 'Rotate motivational quotes on a secondary display throughout the workday' },
  { title: 'Gym and fitness spaces', desc: 'Keep athletes mentally engaged with inspirational quotes between sets' },
  { title: 'Classroom display', desc: 'Start the day with a quote that sets a positive tone for learning' },
  { title: 'Morning routine anchor', desc: 'Read a new quote as part of a daily mindset ritual before work begins' },
  { title: 'Conference room idle screen', desc: 'Replace a static logo slide with rotating quotes during meeting breaks' },
  { title: 'Waiting room ambiance', desc: 'Give visitors something positive to read while waiting' },
  { title: 'Focus and study sessions', desc: 'A gentle motivational backdrop that does not compete for active attention' },
  { title: 'Retail and hospitality', desc: 'Brand your space with curated values-aligned quotes on display screens' },
  { title: 'Wellness and therapy spaces', desc: 'Affirming quotes create a supportive atmosphere in counseling environments' },
  { title: 'Screensaver for inspiration', desc: 'Replace a blank screensaver with something that builds mental posture' },
];

const HOW_IT_WORKS = [
  'Quotes rotate automatically at your chosen interval (30 seconds to 5 minutes)',
  'Each quote fades in smoothly — no jarring transitions or distractions',
  'Filter quotes by category: productivity, mindfulness, creativity, and more',
  'Customize font size, colors, and background to match your environment',
  'Use fullscreen mode for maximum impact as a display or screensaver',
];

const IN_DEPTH = [
  {
    title: 'Why Motivational Quotes Work',
    body: 'Motivational quotes work through a mechanism called cognitive priming — exposure to positive, achievement-oriented language activates corresponding mental frameworks. Reading "the only way to do great work is to love what you do" primes concepts of effort, quality, and passion in working memory. These activated concepts then influence subsequent attention, decision-making, and persistence. The effect is subtle but real — and accumulates with regular exposure over time.',
  },
  {
    title: 'The Best Quotes for Productivity',
    body: 'Research on motivational messaging suggests that process-focused quotes ("hard work beats talent when talent doesn\'t work hard") outperform outcome-focused quotes ("you can achieve anything") for sustained effort. Outcome-focused messaging can trigger premature goal satisfaction — imagining the achievement reduces motivation to pursue it. Process quotes reinforce the behaviors that lead to results without triggering this psychological trap.',
  },
  {
    title: 'Designing an Inspirational Environment',
    body: 'Behavioral economist Dan Ariely\'s research on environmental design shows that small, persistent cues in the work environment shape behavior more reliably than willpower or conscious intention. A motivational quote display is a low-intensity environmental cue — it does not demand attention but contributes to the ambient mental environment. Over weeks and months, consistently positive environmental cues compound into measurable differences in attitude and output.',
  },
  {
    title: 'Avoiding Quote Fatigue',
    body: 'Seeing the same quotes repeatedly reduces their impact through habituation — the nervous system stops responding to a stimulus that provides no new information. Combat quote fatigue by using a large quote library with random rotation, changing the category periodically, and setting longer rotation intervals so you see each quote infrequently. Fresh exposure to a familiar quote after a gap can actually strengthen its impact compared to constant repetition.',
  },
  {
    title: 'Curating Quotes for Teams',
    body: 'For team environments — offices, classrooms, gyms — quote curation matters more than in individual settings. Quotes should reflect the values and goals of the group, feel authentic to the culture, and be attributed accurately. Misattributed quotes (common on the internet) undermine credibility if a team member catches the error. For professional environments, favor quotes from respected figures in the relevant field over generic motivational content.',
  },
  {
    title: 'Using Quotes as Conversation Starters',
    body: 'A rotating quote display in a shared space naturally generates discussion — people notice quotes that resonate and mention them. This can become an organic mechanism for value-sharing and culture-building in teams. Managers and educators can use notable quotes as discussion prompts: "I saw that quote about feedback this morning — what does everyone think about how we give each other feedback here?" The display becomes a facilitation tool, not just ambiance.',
  },
];

export function MotivationalQuoteContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a motivational quotes display</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Rotating inspiration for offices, gyms, classrooms, and personal workspaces.
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
        { slug: 'flip-clock',          name: 'Flip Clock' },
        { slug: 'focus-screen',        name: 'Focus Timer' },
        { slug: 'meditation-breather', name: 'Meditation Breather' },
      ]} />
    </>
  );
}
