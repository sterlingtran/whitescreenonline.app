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

export function ColorTemperatureGuide({ post }: Props) {
  return (
    <article>
      <p style={sx.p}>
        You've probably noticed that some video calls look warm and inviting, while others look
        cold and clinical — even when the room lighting looks fine to the naked eye. The difference
        is almost always color temperature. Understanding it takes about five minutes, and fixing
        it costs nothing if you're using a screen as your light source.
      </p>

      <h2 style={sx.h2}>What Is Color Temperature?</h2>
      <p style={sx.p}>
        Color temperature describes the color of a light source, measured in Kelvin (K). Despite the
        name, it has nothing to do with heat — it's borrowed from physics. When a "black body" (an
        idealized object that absorbs all light) is heated, it glows different colors at different
        temperatures: red-orange at lower temperatures, shifting to white and then blue-white as it
        gets hotter.
      </p>
      <p style={sx.p}>
        Counterintuitively, a <em>lower</em> Kelvin number means a <em>warmer</em> (more orange)
        color, and a <em>higher</em> Kelvin number means a <em>cooler</em> (more blue) color. This
        trips up almost everyone the first time.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: 20 }}>
        <table style={sx.table}>
          <thead>
            <tr>
              <th style={sx.th}>Kelvin range</th>
              <th style={sx.th}>Color appearance</th>
              <th style={sx.th}>Common source</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1700–2000K', 'Deep amber / candlelight', 'Candles, old incandescent bulbs'],
              ['2700–3200K', 'Warm white / soft white', 'Household LED bulbs, table lamps'],
              ['3500–4100K', 'Neutral white', 'Office fluorescents, "cool white" LEDs'],
              ['5000–5500K', 'Daylight white', 'Electronic flash, "daylight" bulbs'],
              ['6000–7000K', 'Cool / bluish white', 'Overcast sky, some phone screens'],
              ['8000K+',     'Very blue',             'Open shade, blue sky'],
            ].map(([k, color, source]) => (
              <tr key={k}>
                <td style={sx.td}><strong>{k}</strong></td>
                <td style={sx.td}>{color}</td>
                <td style={sx.td}>{source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={sx.h2}>Why It Matters for Video Calls</h2>
      <p style={sx.p}>
        Your camera's white balance algorithm tries to make white objects look white under any light
        source. It does this by shifting the overall color of the image in the opposite direction of
        the dominant light. If your room has warm 2700K light, the camera shifts toward blue to
        compensate. If you're sitting by a window (5500K daylight), the camera shifts toward orange.
      </p>
      <p style={sx.p}>
        Problems arise when you mix color temperatures. If you have a warm lamp on one side and a
        cool window on the other, the camera can't compensate for both simultaneously. One side of
        your face looks orange and the other looks blue — an effect that reads as "bad lighting" even
        if viewers can't articulate why.
      </p>
      <div style={sx.callout}>
        <strong>The simplest rule:</strong> Use only one color temperature at a time. If you're near
        a window, turn off your warm lamps. If you're using artificial light, close the blinds or
        position yourself so the window isn't in your shot.
      </div>

      <h2 style={sx.h2}>Choosing the Right Color for Your Screen Light</h2>
      <p style={sx.p}>
        When you use a screen as a fill light — via the{' '}
        <Link to="/tool/zoom-lighting" style={{ color: 'var(--text)' }}>Zoom Lighting</Link> or{' '}
        <Link to="/tool/custom-color-screen" style={{ color: 'var(--text)' }}>Custom Color Screen</Link> tool
        — the color you display determines its color temperature. Here's how to match it to your situation:
      </p>

      <h3 style={sx.h3}>Matching your room lights (warm interior, 2700–3000K)</h3>
      <p style={sx.p}>
        If your room has standard warm LED or incandescent bulbs, use a warm white or soft cream on
        your screen. Good hex starting points: <strong>#FFF5E0</strong>, <strong>#FFE8C8</strong>,
        or <strong>#FFD9A0</strong>. These blend with your ambient light so the screen fill
        doesn't create a cool patch on one side of your face.
      </p>

      <h3 style={sx.h3}>Near a window (daylight, 5000–6500K)</h3>
      <p style={sx.p}>
        Use a neutral to cool white: <strong>#FFFFFF</strong> or <strong>#F0F4FF</strong>.
        A warm screen used alongside window light will create the mixed-temperature problem
        described above — the camera will struggle to balance both.
      </p>

      <h3 style={sx.h3}>Professional / studio look (consistent results)</h3>
      <p style={sx.p}>
        For the most consistent and camera-friendly result, aim for 5500–6000K — the "daylight"
        standard used by photographers and video professionals. On screen, this is a clean,
        slightly warm white: <strong>#FFF8F5</strong> to pure <strong>#FFFFFF</strong>.
        Set your camera's white balance to "daylight" or 5500K manually (if your app allows it)
        and use this color for all your fill lights. The result is predictable and neutral on any camera.
      </p>

      <h2 style={sx.h2}>Color Temperature and Skin Tones</h2>
      <p style={sx.p}>
        Different skin tones respond differently to color temperature:
      </p>
      <ul style={sx.ul}>
        <li><strong>Warm light (2700–3500K)</strong> adds richness and warmth to most skin tones.
          It's flattering for medium and dark complexions and creates a softer, more relaxed mood.</li>
        <li><strong>Neutral daylight (5000–5500K)</strong> renders skin tones most accurately —
          what you'd see outdoors on a bright overcast day. Best for professional or clinical contexts
          where accuracy matters.</li>
        <li><strong>Cool light (6500K+)</strong> can look harsh and washing-out on lighter skin tones,
          creating a bluish cast. Generally avoid for face-forward video unless you're going
          for a specific aesthetic.</li>
      </ul>
      <p style={sx.p}>
        There's no universally "correct" temperature — it depends on context, skin tone, and the
        look you want. Start at 3500–4000K as a neutral flattering baseline and adjust from there.
      </p>

      <h2 style={sx.h2}>Using the RGB Gradient for Split-Tone Lighting</h2>
      <p style={sx.p}>
        One creative technique in portrait photography and streaming setups is split-tone lighting:
        two different color temperatures on either side of the subject. A warm key (3000K equivalent)
        on one side and a cool fill (6500K equivalent) on the other creates a visually interesting
        contrast that separates the subject from the background.
      </p>
      <p style={sx.p}>
        The <Link to="/tool/rgb-gradient" style={{ color: 'var(--text)' }}>RGB Gradient Light</Link> tool
        lets you display a two-color gradient on your screen. Set one color to warm orange/amber
        and the other to cool blue-white for an instant split-tone setup using just one device.
      </p>

      <h2 style={sx.h2}>Practical Hex Codes by Use Case</h2>
      <div style={{ overflowX: 'auto', marginBottom: 20 }}>
        <table style={sx.table}>
          <thead>
            <tr>
              <th style={sx.th}>Use case</th>
              <th style={sx.th}>Recommended color</th>
              <th style={sx.th}>Approx. K equivalent</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Evening video calls (warm room)', '#FFE8C8', '~3000K'],
              ['Daytime calls (neutral)', '#FFF8F5', '~5000K'],
              ['Product photography (accurate)', '#FFFFFF', '~6500K'],
              ['Flattering portrait fill', '#FFD9A0', '~2800K'],
              ['Studio/broadcast standard', '#FFF5EE', '~5500K'],
            ].map(([use, hex, k]) => (
              <tr key={use as string}>
                <td style={sx.td}>{use}</td>
                <td style={sx.td}><code style={{ fontSize: 13 }}>{hex}</code></td>
                <td style={sx.td}>{k}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={sx.p}>
        Paste any of these hex codes into the{' '}
        <Link to="/tool/custom-color-screen" style={{ color: 'var(--text)' }}>Custom Color Screen</Link> tool,
        then go fullscreen and use it as your fill light. Adjust brightness via your OS display settings
        to control intensity.
      </p>

      <ContentRelatedTools tools={post.relatedTools} />
    </article>
  );
}
