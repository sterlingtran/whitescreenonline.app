import { Link } from 'react-router-dom';
import { ContentRelatedTools } from '@/src/components/ContentRelatedTools';
import type { BlogPost } from '@/src/data/blog';

const sx = {
  h2: { fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 10, marginTop: 36 } as React.CSSProperties,
  h3: { fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8, marginTop: 24 } as React.CSSProperties,
  p:  { fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 16 } as React.CSSProperties,
  ul: { fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, paddingLeft: 22, marginBottom: 16 } as React.CSSProperties,
  table: { width: '100%', borderCollapse: 'collapse' as const, marginBottom: 20, fontSize: 14 },
  th: { textAlign: 'left' as const, padding: '8px 12px', background: 'var(--surface)', borderBottom: '1px solid var(--border)', color: 'var(--text)', fontWeight: 600 },
  td: { padding: '8px 12px', borderBottom: '1px solid var(--border)', color: 'var(--text-2)', verticalAlign: 'top' as const },
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

export function NoiseColorGuide({ post }: Props) {
  return (
    <article>
      <p style={sx.p}>
        You've probably heard that white noise helps people sleep and focus — but then stumbled across
        pink noise, brown noise, and maybe even green or violet noise, and wondered what any of it
        means. The differences are real and measurable, and choosing the right one for your situation
        makes a noticeable difference. This guide explains the science in plain terms and gives you a
        practical recommendation for each use case.
      </p>

      <h2 style={sx.h2}>What "Noise Color" Actually Means</h2>
      <p style={sx.p}>
        Sound is made up of frequencies — from low bass rumbles to high-pitched hiss. When we talk
        about noise "color," we're describing how the energy (loudness) is distributed across those
        frequencies. The naming convention is borrowed from{' '}
        <a href="https://en.wikipedia.org/wiki/Colors_of_noise" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>light physics</a>:
        just as white light contains all visible wavelengths equally, white noise contains all audible
        frequencies at equal intensity.
      </p>
      <p style={sx.p}>
        Each noise "color" has a specific mathematical relationship between frequency and energy level.
        That relationship is what makes them sound — and function — differently.
      </p>

      <h2 style={sx.h2}>White Noise: Equal Energy Across All Frequencies</h2>
      <p style={sx.p}>
        White noise gives every frequency — from 20 Hz bass to 20,000 Hz treble — exactly the same
        amount of energy. The result sounds like television static or a loud hiss. It's technically
        the most "complete" noise mask because it covers the entire frequency spectrum.
      </p>
      <p style={sx.p}>
        However, that complete high-frequency coverage is also why many people find white noise harsh
        or fatiguing over long periods. Human hearing is more sensitive to high frequencies, so the
        flat energy distribution of white noise sounds treble-heavy and abrasive compared to how we
        perceive natural sounds.
      </p>
      <div style={sx.callout}>
        <strong>Best for:</strong> Short-duration concentration bursts, clinical/medical environments,
        tinnitus masking. Not ideal for extended sleep sessions for many people.
      </div>

      <h2 style={sx.h2}>Pink Noise: More Power in the Bass</h2>
      <p style={sx.p}>
        <a href="https://en.wikipedia.org/wiki/Pink_noise" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>Pink noise</a>{' '}
        reduces energy as frequency increases — specifically, energy drops by 3 dB per octave as you
        go up the frequency range. This means lower frequencies have more power than higher ones.
        The result sounds like a gentle rain shower, a fan running nearby, or a waterfall at medium
        distance. Most people find it significantly more pleasant than white noise for extended listening.
      </p>
      <p style={sx.p}>
        Pink noise matches the natural distribution of many sounds in the environment, which may be
        why it tends to feel less intrusive. Interestingly, brain activity itself shows a pink noise
        pattern — the brain's{' '}
        <a href="https://en.wikipedia.org/wiki/Neural_oscillation" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>neural oscillations</a>{' '}
        have a 1/f (pink) frequency distribution, which has led some researchers to investigate
        whether pink noise synchronizes more naturally with brain states during sleep.
      </p>
      <p style={sx.p}>
        A{' '}
        <a href="https://doi.org/10.3389/fnhum.2017.00109" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>2017 study published in Frontiers in Human Neuroscience</a>{' '}
        found that pink noise synchronized with slow-wave sleep oscillations increased deep sleep
        duration in older adults and produced measurable improvements in memory consolidation the
        following morning.
      </p>
      <div style={sx.callout}>
        <strong>Best for:</strong> Sleep, long study sessions, background focus noise for open-plan
        offices. The most versatile noise color for most use cases.
      </div>

      <h2 style={sx.h2}>Brown Noise: Deep, Bass-Heavy Rumble</h2>
      <p style={sx.p}>
        Brown noise (also called red noise or Brownian noise) drops energy even more steeply than
        pink — by 6 dB per octave. The high frequencies are almost entirely absent, leaving a deep,
        low rumble that sounds like heavy rain, thunder in the distance, or standing near a large
        waterfall. It has nothing to do with the color brown — it's named after{' '}
        <a href="https://en.wikipedia.org/wiki/Brownian_motion" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>Robert Brown</a>,
        whose work on Brownian motion describes the same random process mathematically.
      </p>
      <p style={sx.p}>
        Brown noise has gained significant popularity online — particularly among people with ADHD
        who report that the deep, low-frequency content quiets mental chatter in a way that white
        or pink noise doesn't. The proposed mechanism is that the bass frequencies engage auditory
        processing enough to reduce the brain's tendency to self-generate distracting internal
        narratives, without the high-frequency content of white noise creating its own distraction.
      </p>
      <p style={sx.p}>
        The research base here is thinner than for pink noise, but subjective reports are consistent
        enough that it's worth trying if white and pink noise haven't worked well for you.
      </p>
      <div style={sx.callout}>
        <strong>Best for:</strong> Deep focus on creative or analytical tasks, people who find white
        noise too harsh, those with ADHD who benefit from heavy sensory input. Also excellent for
        masking low-frequency sounds like traffic and HVAC.
      </div>

      <h2 style={sx.h2}>Side-by-Side Comparison</h2>
      <div style={{ overflowX: 'auto', marginBottom: 20 }}>
        <table style={sx.table}>
          <thead>
            <tr>
              <th style={sx.th}>Noise type</th>
              <th style={sx.th}>Sounds like</th>
              <th style={sx.th}>Best for sleep?</th>
              <th style={sx.th}>Best for focus?</th>
              <th style={sx.th}>Masks low frequencies?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['White', 'TV static, hiss', 'Moderate', 'Short sessions', 'Yes (full spectrum)'],
              ['Pink',  'Gentle rain, fan', 'Best overall', 'Long sessions', 'Moderate'],
              ['Brown', 'Heavy rain, rumble', 'Good (bass sleepers)', 'Deep creative work', 'Best'],
            ].map(([type, sounds, sleep, focus, low]) => (
              <tr key={type}>
                <td style={{ ...sx.td, fontWeight: 600 }}>{type}</td>
                <td style={sx.td}>{sounds}</td>
                <td style={sx.td}>{sleep}</td>
                <td style={sx.td}>{focus}</td>
                <td style={sx.td}>{low}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={sx.h2}>Which Should You Use for Sleeping?</h2>
      <p style={sx.p}>
        For most people, <strong>pink noise</strong> is the best starting point for sleep. Its
        natural frequency distribution is less likely to feel intrusive, and the research on sleep
        memory consolidation points specifically to pink noise. If you share a bedroom with a partner
        who snores, or live near a busy road, pink noise at a moderate volume (around 50 dB — roughly
        the level of a quiet conversation) masks the most disruptive mid-frequency sounds.
      </p>
      <p style={sx.p}>
        If you live near a highway or hear low-frequency rumble from traffic or building HVAC, try
        brown noise — its stronger bass content does a better job masking those frequencies.
      </p>
      <p style={sx.p}>
        White noise is less commonly recommended for all-night sleep because the high-frequency
        content can cause auditory fatigue. Short sessions (20–30 minutes falling asleep) are fine,
        but many people find they wake up feeling unrested after an entire night of white noise.
      </p>

      <h2 style={sx.h2}>Which Should You Use for Studying or Deep Work?</h2>
      <p style={sx.p}>
        The answer depends on what's distracting you and what kind of work you're doing:
      </p>
      <ul style={sx.ul}>
        <li><strong>Unpredictable conversations or office chatter:</strong> Pink noise. Its full-spectrum
          coverage masks speech frequencies effectively, and it's comfortable for long sessions without
          ear fatigue.</li>
        <li><strong>Traffic, construction, or bass-heavy environmental sounds:</strong> Brown noise.
          The deep content competes directly with the low-frequency noise you're trying to block.</li>
        <li><strong>Complete silence that's too distracting:</strong> White noise. Paradoxically, some
          people find complete silence more distracting than moderate background noise because their
          brain fills the quiet with internal chatter. White noise adds just enough signal to occupy
          that auditory processing channel.</li>
        <li><strong>ADHD or high cognitive load tasks:</strong> Brown noise — based on community
          consensus and preliminary research, though controlled studies are limited.</li>
      </ul>

      <h2 style={sx.h2}>Volume Matters as Much as Color</h2>
      <p style={sx.p}>
        A 2020 review in <em>Applied Ergonomics</em> found that noise at or above 65 dB meaningfully
        impaired cognitive performance on complex tasks — regardless of noise type. The benefits of
        background noise for focus occur in the 45–60 dB range (quieter than a normal conversation).
        Louder is not better. If you can't easily hear someone talking normally over your noise, it's
        probably too loud.
      </p>
      <p style={sx.p}>
        For sleep, aim for 45–55 dB — enough to mask intermittent sounds, but not loud enough to
        become its own sleep disruptor. Some research suggests that habitual dependence on white noise
        for sleep (where you can no longer sleep without it) may occur at higher volumes; keeping
        the level moderate avoids this.
      </p>
      <div style={sx.callout}>
        <strong>Quick calibration:</strong> Set your noise at a level where you can just hear it
        when the room is otherwise quiet, but it fades into the background after a minute or two
        of not thinking about it. If you notice it, it's too loud.
      </div>

      <h2 style={sx.h2}>How to Try All Three Right Now</h2>
      <p style={sx.p}>
        The{' '}
        <Link to="/tool/white-noise" style={{ color: 'var(--text)' }}>White Noise Screen</Link> tool
        on this site generates white, pink, and brown noise directly in your browser — no app, no
        account, no download. Open it, select your noise color, and adjust the volume with the slider.
        It runs in a browser tab so you can keep it open alongside your work without switching apps.
      </p>
      <p style={sx.p}>
        For a Pomodoro-style study session, open the noise generator in one tab and the{' '}
        <Link to="/tool/pomodoro-timer" style={{ color: 'var(--text)' }}>Pomodoro Timer</Link> in another.
        Pin both tabs, start the timer, and let the noise run throughout your work block. When the
        break alarm sounds, pause or reduce the noise — the contrast helps your brain register that
        the work period has ended.
      </p>

      <ContentRelatedTools tools={post.relatedTools} />
    </article>
  );
}
