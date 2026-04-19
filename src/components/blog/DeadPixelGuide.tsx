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

export function DeadPixelGuide({ post }: Props) {
  return (
    <article>
      <p style={sx.p}>
        You just unboxed a new monitor or noticed a tiny dot that doesn't change color when you scroll.
        Is it a dead pixel? A stuck pixel? Does it matter? This guide explains what's actually happening
        inside your panel, how to run a proper test with no software, and what your options are before
        your warranty window closes.
      </p>

      <h2 style={sx.h2}>Dead Pixels, Stuck Pixels, and Hot Pixels — What's the Difference?</h2>
      <p style={sx.p}>
        These three terms are often used interchangeably, but they describe different failure modes in
        the LCD or OLED panel:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: 20 }}>
        <table style={sx.table}>
          <thead>
            <tr>
              <th style={sx.th}>Type</th>
              <th style={sx.th}>What it looks like</th>
              <th style={sx.th}>Cause</th>
              <th style={sx.th}>Fixable?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={sx.td}><strong>Dead pixel</strong></td>
              <td style={sx.td}>Always black on every color</td>
              <td style={sx.td}>Transistor failure — pixel receives no power</td>
              <td style={sx.td}>Rarely. Usually permanent.</td>
            </tr>
            <tr>
              <td style={sx.td}><strong>Stuck pixel</strong></td>
              <td style={sx.td}>Always one color (red, green, blue, white)</td>
              <td style={sx.td}>Sub-pixel locked in the on position</td>
              <td style={sx.td}>Sometimes. Pixel-cycling tools help.</td>
            </tr>
            <tr>
              <td style={sx.td}><strong>Hot pixel</strong></td>
              <td style={sx.td}>Bright white dot, most visible in dark scenes</td>
              <td style={sx.td}>All three sub-pixels stuck on simultaneously</td>
              <td style={sx.td}>Rarely.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={sx.p}>
        In practice, what most people call a "dead pixel" is actually a stuck pixel — which is good
        news, because stuck pixels sometimes resolve themselves or can be coaxed unstuck. True dead
        pixels (always black) are permanent hardware failures.
      </p>

      <h2 style={sx.h2}>How to Test Your Monitor in 5 Minutes (No Software)</h2>
      <p style={sx.p}>
        The most reliable way to test is to fill your screen with a single solid color and scan carefully.
        Defective pixels are nearly invisible against a complex background but obvious against flat color.
        You need to cycle through at least four colors:
      </p>
      <ul style={sx.ul}>
        <li><strong>Black</strong> — reveals bright stuck or hot pixels</li>
        <li><strong>White</strong> — reveals dead (always-black) pixels</li>
        <li><strong>Red, Green, Blue</strong> — reveals sub-pixel failures that only show on specific colors</li>
      </ul>

      <p style={sx.p}>
        Use the <Link to="/tool/dead-pixel-test" style={{ color: 'var(--text)' }}>Dead Pixel Test</Link> tool
        which cycles through all these colors automatically. Put your browser in fullscreen mode (F11
        on Windows, ⌘+Shift+F on Mac) and look at the entire panel systematically — scan in rows
        from top to bottom. Take your time; a 27-inch monitor has over 8 million pixels and a defect
        can be very small.
      </p>

      <div style={sx.callout}>
        <strong>Before you test:</strong> Clean your screen first. Dust, fingerprints, and smudges look
        surprisingly similar to stuck pixels, especially on black backgrounds. Use a dry microfiber
        cloth. Don't press — pressure can temporarily create stuck-looking blotches.
      </div>

      <h3 style={sx.h3}>How to run the test manually (without the tool)</h3>
      <p style={sx.p}>
        If you prefer to test without a tool: open the full-screen tools for{' '}
        <Link to="/tool/black-screen" style={{ color: 'var(--text)' }}>black</Link>,{' '}
        <Link to="/" style={{ color: 'var(--text)' }}>white</Link>,{' '}
        <Link to="/tool/red-screen" style={{ color: 'var(--text)' }}>red</Link>,{' '}
        <Link to="/tool/green-screen" style={{ color: 'var(--text)' }}>green</Link>, and{' '}
        <Link to="/tool/blue-screen" style={{ color: 'var(--text)' }}>blue</Link> on this site.
        Enter fullscreen on each, scan the panel, then navigate to the next color. The{' '}
        <Link to="/tool/custom-color-screen" style={{ color: 'var(--text)' }}>custom color screen</Link> lets
        you check specific sub-pixel channels by entering pure R, G, or B hex codes.
      </p>

      <h2 style={sx.h2}>How Many Dead Pixels Are Acceptable?</h2>
      <p style={sx.p}>
        This depends on the panel grade and manufacturer policy. The{' '}
        <a href="https://en.wikipedia.org/wiki/ISO_9241" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>ISO 9241-307 standard</a>{' '}
        defines pixel fault classes:
      </p>
      <ul style={sx.ul}>
        <li><strong>Class 1</strong> — Zero allowed defects. What you expect from a premium display.</li>
        <li><strong>Class 2</strong> — Up to 2 bright sub-pixels, 2 dark sub-pixels. Common mid-range.</li>
        <li><strong>Class 3</strong> — Up to 5 defects. Budget panels.</li>
      </ul>
      <p style={sx.p}>
        Most manufacturers don't advertise their dead pixel policy upfront. Dell and Apple typically
        use Class 1 (zero tolerance) for premium lines. Many budget monitor brands use Class 2 or
        Class 3 — meaning they can ship with defects and still consider it "within spec."
      </p>
      <div style={sx.callout}>
        <strong>Read your warranty before buying:</strong> Look for "zero bright dot policy" or "pixel
        perfect guarantee." If you can't find it, the brand likely doesn't offer it. LG, ASUS, and
        BenQ offer zero dead pixel guarantees on select product lines.
      </div>

      <h2 style={sx.h2}>Can You Fix a Stuck Pixel?</h2>

      <h3 style={sx.h3}>Pixel-cycling software</h3>
      <p style={sx.p}>
        Stuck pixels sometimes respond to rapid color cycling — rapidly flashing through RGB colors
        causes the stuck transistor to "unlock." Free tools like JScreenFix and PixelHealer run a
        small flashing rectangle over the affected area for 20–30 minutes. Success rate is roughly
        30–50% for genuinely stuck pixels (not dead ones). It doesn't work for dead pixels because
        the transistor isn't receiving power, so cycling has no effect.
      </p>

      <h3 style={sx.h3}>Gentle pressure (use with caution)</h3>
      <p style={sx.p}>
        Light pressure with a soft cloth over the stuck pixel can sometimes clear liquid crystal
        material that's misaligned. Apply gentle pressure with a fingertip through a microfiber
        cloth while cycling colors. <strong>Don't press hard.</strong> LCD panels can crack from
        excessive pressure, which creates a far worse (and non-warranty-covered) defect.
      </p>

      <h3 style={sx.h3}>Heat</h3>
      <p style={sx.p}>
        Some LCD stuck pixels respond to heat because it changes the viscosity of the liquid crystal
        material. Running your display at full brightness for several hours in a warm room has resolved
        stuck pixels for some users. Don't apply heat directly (no heat guns).
      </p>

      <h2 style={sx.h2}>When to Claim Warranty</h2>
      <p style={sx.p}>
        Test your monitor within the first week of purchase. Warranties typically cover dead pixels
        for 1–3 years from purchase, but some manufacturers require defects to be reported within
        30 days. Key steps:
      </p>
      <ul style={sx.ul}>
        <li>Document the defect: take a close-up photo with your phone (works better than a screenshot)</li>
        <li>Note the exact location — measure from corners if possible</li>
        <li>Check the manufacturer's dead pixel policy online before contacting support</li>
        <li>If the policy allows returns for defects, initiate the process immediately — don't wait</li>
      </ul>
      <p style={sx.p}>
        If you purchased from a retailer with a generous return window (Best Buy, Amazon, B&H), a
        visible dead pixel is usually sufficient grounds for an exchange within that window, regardless
        of the manufacturer's own policy. Take advantage of the retailer window before escalating to
        the manufacturer.
      </p>

      <h2 style={sx.h2}>Summary</h2>
      <ul style={sx.ul}>
        <li>Test within the first few days on full-color backgrounds (black, white, red, green, blue)</li>
        <li>A stuck pixel (always one color) may be fixable; a dead pixel (always black) usually isn't</li>
        <li>Use the free <Link to="/tool/dead-pixel-test" style={{ color: 'var(--text)' }}>Dead Pixel Test</Link> tool — no software installation needed</li>
        <li>Document and claim warranty early — windows are often shorter than you expect</li>
      </ul>

      <ContentRelatedTools tools={post.relatedTools} />
    </article>
  );
}
