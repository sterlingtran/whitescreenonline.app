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

export function WorkFromHomeFocus({ post }: Props) {
  return (
    <article>
      <p style={sx.p}>
        Working from home removes commute stress and bad office lighting, but it adds a new problem:
        everything that competes for your attention is in the same physical space as your work.
        The couch. The kitchen. Your phone. The browser with 47 open tabs.
      </p>
      <p style={sx.p}>
        The irony is that you already have the tools you need. Your browser — the same one you use
        for work — can create focused, distraction-reducing environments with no app install, no
        account, no subscription. Here are the ones that actually work.
      </p>

      <h2 style={sx.h2}>1. Pomodoro Timer — The Most Researched Focus Method</h2>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Best for:</strong> Knowledge workers, writers, developers, students.{' '}
          <Link to="/tool/pomodoro-timer" style={{ color: 'var(--text)' }}>Open the Pomodoro Timer →</Link>
        </p>
      </div>
      <p style={sx.p}>
        The Pomodoro Technique, developed by Francesco Cirillo in the late 1980s, alternates 25-minute
        focused work blocks with 5-minute breaks. After four cycles, you take a longer break of 15–30
        minutes. The technique works for two neuroscientific reasons:
      </p>
      <ul style={sx.ul}>
        <li><strong>Temporal anchoring:</strong> Knowing a break is coming makes it easier to resist distractions in the short term. You don't have to resist Twitter forever — just for 23 more minutes.</li>
        <li><strong>The <a href="https://en.wikipedia.org/wiki/Zeigarnik_effect" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>Zeigarnik Effect</a>:</strong> Incomplete tasks occupy working memory more than completed ones. Starting a Pomodoro creates an "open loop" that your brain wants to close, which reduces the urge to switch tasks.</li>
      </ul>
      <p style={sx.p}>
        A 2016 study in <em>Computers in Human Behavior</em> found that structured work-break cycles
        improved sustained attention compared to unstructured work sessions of the same duration.
        The key variable isn't the 25-minute duration specifically — it's having a defined end point.
      </p>
      <div style={sx.callout}>
        <strong>Setup tip:</strong> During your Pomodoro, close all non-work tabs. Use a second
        browser window (or profile) for work, and keep personal browsing in a separate window that
        you minimize entirely. This removes the tab bar as a distraction trigger.
      </div>

      <h2 style={sx.h2}>2. Focus Screen — Eliminate Visual Distraction</h2>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Best for:</strong> Deep reading, writing, reviewing documents.{' '}
          <Link to="/tool/focus-screen" style={{ color: 'var(--text)' }}>Open the Focus Screen →</Link>
        </p>
      </div>
      <p style={sx.p}>
        Gloria Mark, a professor at UC Irvine, found in a widely cited study that it takes an average
        of 23 minutes to return to full focus after an interruption. But less discussed in that research
        is what caused the interruptions: 44% were <em>self-initiated</em> — triggered by the person's
        own visual environment, not by external demands.
      </p>
      <p style={sx.p}>
        A minimal, blank focus screen on your secondary monitor (or on your main display when you need
        to think rather than type) removes the visual triggers that initiate those self-interruptions.
        No notifications, no task bars, no browser history. Just a neutral surface for your thinking.
      </p>
      <p style={sx.p}>
        The Focus Screen tool includes a built-in countdown timer. Set it for the length of your
        planned focus block, then put it fullscreen on a secondary display or TV while you work
        on your laptop. When the timer ends, you know to take a break without having to check a clock.
      </p>

      <h2 style={sx.h2}>3. White Noise — Block Auditory Distractions</h2>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Best for:</strong> Open-plan homes, coffee shops, anywhere with unpredictable noise.{' '}
          <Link to="/tool/white-noise" style={{ color: 'var(--text)' }}>Open the White Noise Generator →</Link>
        </p>
      </div>
      <p style={sx.p}>
        White noise works by masking other sounds rather than removing them. Your brain is tuned to
        detect changes in sound (a door slamming, someone saying your name) more than constant noise.
        By raising the ambient noise floor with a consistent broadband signal, individual sounds
        become less detectable above the threshold — effectively reducing interruptions from noise.
      </p>
      <p style={sx.p}>
        A 2020 meta-analysis in <em>Applied Ergonomics</em> found that background noise at 65–70 dB
        meaningfully reduced cognitive performance on complex tasks — but noise in the 50–55 dB range
        (a typical ambient office level) had no negative effect and in some cases improved alertness
        by preventing the "too quiet" vigilance decrement that occurs in silent rooms.
      </p>
      <ul style={sx.ul}>
        <li><strong>White noise</strong> — equal energy across all frequencies. Clinical, neutral.</li>
        <li><strong>Pink noise</strong> — more energy in lower frequencies. Sounds like rain or a fan. Most people find it easier to listen to for extended periods.</li>
        <li><strong>Brown noise</strong> — even more bass-heavy. Deep rumble. Preferred by many for blocking low-frequency sounds (traffic, HVAC).</li>
      </ul>

      <h2 style={sx.h2}>4. Meditation Breather — Reset Between Work Blocks</h2>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Best for:</strong> 5-minute Pomodoro breaks, pre-meeting calm-down, stress reduction.{' '}
          <Link to="/tool/meditation-breather" style={{ color: 'var(--text)' }}>Open the Meditation Breather →</Link>
        </p>
      </div>
      <p style={sx.p}>
        One of the most common mistakes with the Pomodoro Technique is using breaks to check social
        media. This doesn't rest your attention — it redirects it to a highly stimulating, reward-loop
        environment that makes it harder to refocus when the break ends.
      </p>
      <p style={sx.p}>
        Controlled breathing exercises during breaks are measurably better. Slow diaphragmatic breathing
        (4–6 breath cycles per minute) activates the parasympathetic nervous system via the vagus nerve,
        reducing cortisol and slowing heart rate within 2–3 minutes. The Meditation Breather tool
        guides you through box breathing (4 counts in, 4 hold, 4 out, 4 hold) — the same technique
        used by US Navy SEALs for pre-task stress regulation.
      </p>
      <p style={sx.p}>
        Even two minutes of guided breathing between Pomodoro sessions noticeably reduces the "wound
        up" feeling that accumulates after several consecutive work blocks.
      </p>

      <h2 style={sx.h2}>5. Countdown Timer — Time-Boxing for Single Tasks</h2>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Best for:</strong> Meetings, email batching, single-task deadlines.{' '}
          <Link to="/tool/countdown-timer" style={{ color: 'var(--text)' }}>Open the Countdown Timer →</Link>
        </p>
      </div>
      <p style={sx.p}>
        <a href="https://en.wikipedia.org/wiki/Parkinson%27s_law" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>Parkinson's Law</a> states that work expands to fill the time available. A task you expect to take
        two hours will take two hours, whether or not it actually requires that long. Time-boxing —
        setting an explicit countdown for a task — creates artificial urgency that counteracts this.
      </p>
      <p style={sx.p}>
        Use the countdown timer for:
      </p>
      <ul style={sx.ul}>
        <li>Email: set 20 minutes, process all inbox, stop</li>
        <li>Meetings: visible countdown on screen keeps everyone on track</li>
        <li>Code reviews, document drafts, planning sessions — any task where scope can creep</li>
      </ul>

      <h2 style={sx.h2}>6. HIIT Timer — For People Who Work Out at Home During the Day</h2>
      <div style={sx.card}>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          <strong>Best for:</strong> Desk workers who exercise during breaks.{' '}
          <Link to="/tool/hiit-timer" style={{ color: 'var(--text)' }}>Open the HIIT Timer →</Link>
        </p>
      </div>
      <p style={sx.p}>
        Exercise is the single most evidence-supported intervention for cognitive performance during
        work. A 2014 study in the <em>British Journal of Sports Medicine</em> found that a single
        bout of moderate-intensity exercise produced measurable improvements in attention and
        executive function lasting 30–60 minutes afterward.
      </p>
      <p style={sx.p}>
        Working from home gives you access to your own space mid-day. A 10–15 minute HIIT session
        during your long Pomodoro break — three to four rounds of bodyweight exercises — produces
        the same cognitive boost as a longer steady-state session, with significantly less time cost.
        The HIIT Timer handles the intervals so you don't have to watch a clock while you're working out.
      </p>

      <h2 style={sx.h2}>Putting It Together: A Suggested Day Structure</h2>
      <p style={sx.p}>
        These tools work best as a system rather than in isolation:
      </p>
      <ul style={sx.ul}>
        <li><strong>Start of work block:</strong> Open the Pomodoro Timer. Put on white noise. Close personal tabs.</li>
        <li><strong>5-min Pomodoro break:</strong> Open the Meditation Breather. Two minutes of box breathing. Get up and stretch.</li>
        <li><strong>Long break (after 4 Pomodoros):</strong> Do a 10–15 min HIIT session with the HIIT Timer.</li>
        <li><strong>Deep thinking tasks:</strong> Open Focus Screen on secondary monitor. Use countdown timer to time-box.</li>
        <li><strong>Afternoons:</strong> Shift to review and communication tasks — your prefrontal cortex fatigues through the day; save creative and analytical work for morning.</li>
      </ul>

      <div style={sx.callout}>
        All of these tools are free, run in any browser, require no account, and have no app to install.
        Open them in a pinned tab and they're always one click away.
      </div>

      <ContentRelatedTools tools={post.relatedTools} />
    </article>
  );
}
