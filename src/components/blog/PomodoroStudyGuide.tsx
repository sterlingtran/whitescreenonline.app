import { Link } from 'react-router-dom';
import { ContentRelatedTools } from '@/src/components/ContentRelatedTools';
import type { BlogPost } from '@/src/data/blog';

const sx = {
  h2: { fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 10, marginTop: 36 } as React.CSSProperties,
  h3: { fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8, marginTop: 24 } as React.CSSProperties,
  p:  { fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 16 } as React.CSSProperties,
  ul: { fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, paddingLeft: 22, marginBottom: 16 } as React.CSSProperties,
  card: {
    padding: '20px 24px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    marginBottom: 20,
  } as React.CSSProperties,
  callout: {
    padding: '16px 20px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderLeft: '3px solid var(--text-3)',
    borderRadius: 'var(--radius)',
    marginBottom: 20,
    fontSize: 14,
    color: 'var(--text-2)',
    lineHeight: 1.7,
  } as React.CSSProperties,
};

interface Props { post: BlogPost }

export function PomodoroStudyGuide({ post }: Props) {
  return (
    <article>
      <p style={sx.p}>
        The Pomodoro Technique — 25 minutes of focused work followed by a 5-minute break — was
        originally designed for knowledge work tasks where you already know what to do and just
        need to sit down and do it. Studying is different. It involves retrieval, understanding,
        and memory consolidation, which means the standard Pomodoro protocol needs some adjustments
        to work at its best.
      </p>
      <p style={sx.p}>
        This guide covers how to adapt the method for studying, which subjects benefit most, and
        how to use a free online timer without installing anything.
      </p>

      <h2 style={sx.h2}>Why Pomodoro Works for Studying</h2>
      <p style={sx.p}>
        Sustained studying without breaks leads to diminishing returns — a phenomenon sometimes
        called "vigilance decrement." Attention and working memory performance drop measurably
        after 20–30 minutes of continuous cognitive effort on the same task. Short breaks restore
        this capacity, letting you maintain high-quality attention across a longer total session.
      </p>
      <p style={sx.p}>
        There's also a psychological element. Open-ended study sessions ("I'll study until I feel
        ready") tend to expand indefinitely without producing proportional results, and the lack
        of a clear endpoint makes them feel draining. Defined time blocks create a sense of
        completion — finishing four Pomodoros feels tangibly different from "studying for two hours."
      </p>

      <h2 style={sx.h2}>How Studying Differs From Work Tasks</h2>
      <p style={sx.p}>
        When you're writing code or drafting a document, you're producing something. You can see
        your output and switch tasks cleanly at the end of a block. Studying is different in two ways:
      </p>
      <ul style={sx.ul}>
        <li><strong>You can't always stop mid-concept.</strong> If you're in the middle of understanding
          a proof or a complex argument, stopping at exactly 25 minutes can interrupt consolidation.
          The Pomodoro should be a minimum, not a hard stop — finish the thought before pausing.</li>
        <li><strong>Active retrieval during breaks helps.</strong> Unlike work tasks where breaks
          are truly rest periods, the most effective study breaks include a brief mental review
          of what you just studied — a 30-second self-quiz before you stand up. This exploits
          the "testing effect": retrieving information strengthens the memory trace more than
          re-reading it.</li>
      </ul>

      <h2 style={sx.h2}>Adapting the Duration by Subject</h2>

      <h3 style={sx.h3}>Memorization tasks (vocab, formulas, dates, anatomy)</h3>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Recommended:</strong> 20–25 min Pomodoro / 5 min break<br />
          <strong>Why:</strong> Short, intense retrieval practice works better than long passive review.
          Use the Pomodoro for active recall (flashcards, practice problems) rather than reading.
          Use the{' '}
          <Link to="/tool/pomodoro-timer" style={{ color: 'var(--text)' }}>Pomodoro Timer</Link> with
          default 25/5 settings.
        </p>
      </div>

      <h3 style={sx.h3}>Reading and comprehension (textbooks, papers, case law)</h3>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Recommended:</strong> 45–50 min / 10 min break<br />
          <strong>Why:</strong> Dense reading often requires 10–15 minutes just to rebuild context
          when you return from a break. Longer blocks with longer breaks reduce this re-entry cost.
          Use the{' '}
          <Link to="/tool/countdown-timer" style={{ color: 'var(--text)' }}>Countdown Timer</Link> set
          to 45 or 50 minutes for this variant.
        </p>
      </div>

      <h3 style={sx.h3}>Problem sets and practice exams (maths, engineering, science)</h3>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Recommended:</strong> 25 min Pomodoro / 5 min break, then review errors<br />
          <strong>Why:</strong> Problem-solving benefits from short focused bursts. If you're stuck
          on a problem after 5–7 minutes, move on — the break often produces insight (the "incubation
          effect"). Use the error review time at the start of the next Pomodoro, not the end of the
          current one.
        </p>
      </div>

      <h3 style={sx.h3}>Writing (essays, lab reports, research papers)</h3>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Recommended:</strong> 25 min writing / 5 min break, keep editing separate<br />
          <strong>Why:</strong> Writing and editing compete for the same cognitive resources.
          Pomodoros dedicated purely to drafting (no editing) produce more output. Schedule
          separate editing Pomodoros after the drafting session.
        </p>
      </div>

      <h2 style={sx.h2}>What to Do During Study Breaks</h2>
      <p style={sx.p}>
        The break is not optional, and what you do during it matters. Effective break activities:
      </p>
      <ul style={sx.ul}>
        <li><strong>Stand up and move.</strong> Even 2–3 minutes of walking increases blood flow
          to the prefrontal cortex and restores attention faster than sitting still.</li>
        <li><strong>Do a 30-second self-quiz.</strong> Before you leave your desk, briefly recall
          the main points of what you just studied without looking at your notes. This retrieval
          attempt — even a partial one — strengthens memory consolidation during the break.</li>
        <li><strong>Breathe.</strong> The{' '}
          <Link to="/tool/meditation-breather" style={{ color: 'var(--text)' }}>Meditation Breather</Link> tool
          runs a guided breathing cycle that takes about 2–3 minutes and measurably reduces
          cortisol. Useful if you're studying under exam pressure.</li>
      </ul>

      <div style={sx.callout}>
        <strong>What not to do during breaks:</strong> Check social media, read news, or watch
        short-form video. These are highly stimulating and activate the same reward circuits that
        compete with focused work. After a social media break, it typically takes 5–7 minutes
        to re-enter a focused state — longer than the break itself.
      </div>

      <h2 style={sx.h2}>How Many Pomodoros Do You Need?</h2>
      <p style={sx.p}>
        A common question is how many study Pomodoros are needed for a given task. A rough guide:
      </p>
      <ul style={sx.ul}>
        <li><strong>1 Pomodoro (25 min):</strong> Reviewing notes for a single lecture. Quick
          vocab revision. Reading a short paper.</li>
        <li><strong>2–3 Pomodoros:</strong> Working through one chapter or one problem set.
          Writing a first draft section.</li>
        <li><strong>4 Pomodoros (one full session):</strong> Serious preparation for one
          exam topic. A complete essay draft.</li>
        <li><strong>8+ Pomodoros (two sessions, separate day):</strong> Spaced review for an
          upcoming exam. Deep research on a complex topic.</li>
      </ul>
      <p style={sx.p}>
        The spaced repetition principle applies here: two sessions of four Pomodoros on different
        days produces better retention than eight Pomodoros in a single marathon session. If you
        have a week before an exam, four short daily sessions outperform one all-night cram.
      </p>

      <h2 style={sx.h2}>Reducing Distractions During Study Pomodoros</h2>
      <p style={sx.p}>
        The Pomodoro only works if the 25 minutes is genuinely focused. Common setups that help:
      </p>
      <ul style={sx.ul}>
        <li>Open the{' '}
          <Link to="/tool/focus-screen" style={{ color: 'var(--text)' }}>Focus Screen</Link> on a
          secondary monitor or TV — a minimal, blank display alongside your study material signals
          to your brain that this is a focused work period.</li>
        <li>Play <Link to="/tool/white-noise" style={{ color: 'var(--text)' }}>white noise</Link> or
          brown noise at a moderate volume to mask unpredictable background sounds (conversation,
          traffic) that interrupt attention without masking the silence you might need for thinking.</li>
        <li>Put your phone face-down in a different room. A{' '}
          <a href="https://doi.org/10.1086/691462" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>2017 University of Texas study</a>{' '}
          found that the mere visible presence of a smartphone reduces available cognitive capacity —
          even if it's off.</li>
        <li>Use a dedicated browser profile or window for studying with no bookmarks bar and
          no personal tabs visible.</li>
      </ul>

      <h2 style={sx.h2}>Quick-Start: Your First Study Session</h2>
      <ul style={sx.ul}>
        <li>Open the <Link to="/tool/pomodoro-timer" style={{ color: 'var(--text)' }}>Pomodoro Timer</Link> and pin the tab</li>
        <li>Write down exactly what you intend to study in this session before starting</li>
        <li>Put your phone away (not just face-down — away)</li>
        <li>Start the timer. Work on only the stated task until the alarm</li>
        <li>Take the 5-minute break — stand up, do a quick self-quiz, breathe</li>
        <li>Repeat. After four Pomodoros, take a 20–30 minute break before the next session</li>
      </ul>

      <ContentRelatedTools tools={post.relatedTools} />
    </article>
  );
}
