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

export function OLEDBurnIn({ post }: Props) {
  return (
    <article>
      <p style={sx.p}>
        OLED displays produce stunning contrast and true blacks, but they come with a well-documented
        trade-off: image retention and permanent burn-in. If you own an OLED TV, monitor, or phone —
        or are considering buying one — this guide explains exactly what causes burn-in, which usage
        patterns accelerate it, and how moving screensavers reduce the risk.
      </p>

      <h2 style={sx.h2}>Why OLED Burns In (and LCD Doesn't)</h2>
      <p style={sx.p}>
        In an LCD display, a single backlight illuminates the entire panel. The liquid crystal layer
        just blocks or allows that light through — the backlight itself doesn't wear out unevenly
        because it lights everything equally.
      </p>
      <p style={sx.p}>
        OLED is fundamentally different. Each pixel is its own light source — a tiny organic compound
        that emits light when current passes through it. These organic compounds degrade over time:
        the more a pixel emits light, and the brighter that light, the faster the organic material
        breaks down. A pixel that has displayed a bright red channel for thousands of hours will dim
        relative to surrounding pixels that have seen less use.
      </p>
      <p style={sx.p}>
        The result is uneven pixel aging. When all pixels are showing the same content, the aging is
        uniform and invisible. When some pixels are consistently brighter or more active than others
        — because a static UI element like a channel logo or taskbar sits in the same position for
        hours every day — those pixels age faster. Eventually the difference becomes visible as a
        permanent ghost image: <strong>burn-in</strong>.
      </p>

      <div style={sx.callout}>
        <strong>Image retention vs. burn-in:</strong> These are different. Image retention is
        temporary — a ghost image that disappears after a few minutes of displaying varied content.
        It's caused by the same mechanism but is reversible. True burn-in is permanent pixel
        degradation that cannot be undone.
      </div>

      <h2 style={sx.h2}>Which Use Cases Cause Burn-In Fastest</h2>
      <p style={sx.p}>
        Not all OLED usage causes burn-in equally. The risk depends on three factors: brightness,
        duration, and static content. High-brightness static content displayed for long periods is
        the worst combination.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: 20 }}>
        <table style={sx.table}>
          <thead>
            <tr>
              <th style={sx.th}>Use case</th>
              <th style={sx.th}>Risk level</th>
              <th style={sx.th}>Why</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['News channel left on all day', 'Very high', 'Bright static ticker and logo in fixed positions for hours'],
              ['Video games with HUDs', 'High', 'Health bars, minimaps, and score counters are static and often bright'],
              ['Computer monitor (taskbar, dock)', 'High', 'Static OS UI elements visible at full brightness for the whole workday'],
              ['Sports broadcast watching', 'Medium', 'Score bugs and station logos are static, but typical viewing sessions are shorter'],
              ['Movies and TV shows (varied content)', 'Low', 'Full-screen video with constantly changing images — even pixel usage'],
              ['Brief daily use, varied content', 'Very low', 'Normal, mixed usage spreads aging evenly across the panel'],
            ].map(([use, risk, why]) => (
              <tr key={use as string}>
                <td style={sx.td}>{use}</td>
                <td style={{ ...sx.td, fontWeight: 600 }}>{risk}</td>
                <td style={sx.td}>{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={sx.h2}>How Screensavers Reduce Burn-In Risk</h2>
      <p style={sx.p}>
        Screensavers were originally designed to prevent exactly this problem on early CRT monitors,
        which had the same phosphor-degradation issue. The logic is simple: a moving, varied image
        means no single pixel is consistently brighter than its neighbors, so degradation is distributed
        evenly across the panel.
      </p>
      <p style={sx.p}>
        Modern OLED TVs and monitors include their own screensavers, but there are situations where
        you might want a browser-based one instead:
      </p>
      <ul style={sx.ul}>
        <li>Using a computer connected to an OLED TV as a display</li>
        <li>Running a presentation or kiosk on an OLED screen</li>
        <li>Using a browser in full-screen mode for extended periods</li>
        <li>Leaving a smart TV browser open on a static page</li>
      </ul>

      <h3 style={sx.h3}>Which screensavers are best for OLED protection?</h3>
      <p style={sx.p}>
        The key properties for an OLED-safe screensaver are:
      </p>
      <ul style={sx.ul}>
        <li><strong>Full coverage:</strong> Bright elements should move across the entire panel over
          time, not stay in a fixed region.</li>
        <li><strong>Dark background:</strong> OLED pixels emit no light when showing black, so a
          dark-background screensaver dramatically reduces total panel strain during idle periods.</li>
        <li><strong>Varied brightness:</strong> Alternating between bright and dark across the panel
          distributes aging more evenly than a uniformly bright animation.</li>
      </ul>

      <p style={sx.p}>
        With those criteria in mind, here are the screensavers from this site ranked for OLED safety:
      </p>
      <ul style={sx.ul}>
        <li>
          <Link to="/tool/dvd-screensaver" style={{ color: 'var(--text)' }}>DVD Screensaver</Link> —
          a single bright element bouncing across a black background. Near-ideal: the bright logo
          moves to every corner of the screen over time, while the vast majority of pixels remain
          off (black). The original OLED screensaver.
        </li>
        <li>
          <Link to="/tool/starfield-screensaver" style={{ color: 'var(--text)' }}>Starfield Screensaver</Link> —
          small bright points moving on black. Excellent OLED profile — dark background,
          bright elements distributed across the whole panel, high motion.
        </li>
        <li>
          <Link to="/tool/particle-system" style={{ color: 'var(--text)' }}>Particle System</Link> —
          configurable particles on a dark background. Good coverage and high variety of
          pixel activity across the panel.
        </li>
        <li>
          <Link to="/tool/matrix-screensaver" style={{ color: 'var(--text)' }}>Matrix Screensaver</Link> —
          green text on black. Good for OLED but heavier on the green sub-pixel channel;
          fine for short sessions, less ideal for permanent display installations.
        </li>
      </ul>

      <div style={sx.callout}>
        <strong>Avoid:</strong> Any full-screen white or bright-color screensaver on OLED. Displaying
        pure white forces all three sub-pixels (red, green, blue) to full brightness simultaneously
        and is the fastest way to cause uneven panel aging. White screens are fine for short-term
        use as light sources but should never run unattended on an OLED display.
      </div>

      <h2 style={sx.h2}>Built-In OLED Protection Features</h2>
      <p style={sx.p}>
        Modern OLED TVs and monitors include several automatic protections you should know about:
      </p>
      <ul style={sx.ul}>
        <li><strong>Pixel shift:</strong> The entire image is imperceptibly nudged by 1–2 pixels
          every few minutes. Over long periods this prevents any single pixel from accumulating
          more usage than its neighbors.</li>
        <li><strong>Automatic brightness limiting (ABL):</strong> When the average picture level
          (APL) is very high — a lot of bright content on screen at once — the panel dims the
          overall brightness automatically to reduce organic compound stress. This is why some
          OLED displays look dimmer in bright scenes than their peak brightness spec would suggest.</li>
        <li><strong>Logo detection / static content detection:</strong> Some OLED TVs (LG, Sony)
          detect static bright regions and automatically dim them after a defined period. Samsung
          QD-OLED panels use a different architecture with quantum dot color conversion that
          partially mitigates the uneven aging issue.</li>
        <li><strong>Panel refresh / pixel compensation:</strong> Running during power-off cycles,
          this recalibrates pixel brightness to account for cumulative uneven aging. Most OLED
          TVs run this automatically when switched off.</li>
      </ul>

      <h2 style={sx.h2}>Practical Rules for OLED Longevity</h2>
      <ul style={sx.ul}>
        <li>Don't leave news channels or sports broadcasts running in the background as ambient TV</li>
        <li>Enable your display's built-in screensaver for sessions over 30 minutes with static content</li>
        <li>Reduce brightness — running at 60–70% instead of 100% significantly slows pixel degradation</li>
        <li>Use Dark Mode for OS interfaces on OLED computer monitors — black UI elements aren't emitting light at all</li>
        <li>For gaming, look for settings to reduce HUD brightness or use "cinema mode" which reduces the pixel-level contrast of static elements</li>
        <li>Use a browser-based screensaver (like those above) when displaying the browser full-screen for extended periods</li>
      </ul>
      <p style={sx.p}>
        OLED burn-in is a real risk but a manageable one. Modern OLED panels are significantly more
        resistant than early generations, and most users who follow basic usage guidelines will
        never experience it. The concern is primarily for high-volume, specific-use-case scenarios:
        commercial signage, broadcast monitoring, heavy news-watching, and all-day computer use
        without a screensaver.
      </p>

      <ContentRelatedTools tools={post.relatedTools} />
    </article>
  );
}
