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

export function WhiteBackgroundPhotos({ post }: Props) {
  return (
    <article>
      <p style={sx.p}>
        A clean white background is the industry standard for product photography, passport and ID
        photos, headshots, and online marketplace listings — but a professional sweep or studio kit
        costs money and takes up space. The good news: you can get the same result using things
        you already own. This guide walks through every approach, from the simplest to the most
        polished, all without buying anything.
      </p>

      <h2 style={sx.h2}>Method 1: A Screen as Your Background</h2>
      <p style={sx.p}>
        For small subjects — jewellery, cosmetics, food, small electronics, or anything that fits
        within the frame of a monitor — a white screen displayed on any desktop or laptop monitor
        works as an instant backdrop. Open the{' '}
        <Link to="/tool/white-screen" style={{ color: 'var(--text)' }}>White Screen</Link> tool,
        go fullscreen, turn brightness to maximum, and lay or prop your subject against the screen.
      </p>
      <p style={sx.p}>
        Shoot at an angle slightly below the screen surface so the camera looks up into the
        bright background rather than catching the floor or desk behind the subject. A 15–20°
        upward camera angle eliminates almost all background clutter for small objects.
      </p>
      <div style={sx.callout}>
        <strong>Best for:</strong> Jewellery, cosmetics, small electronics, food styling, candles,
        stationery. Anything that fits within a 40–60 cm shooting zone.
      </div>

      <h2 style={sx.h2}>Method 2: Window Light + White Card</h2>
      <p style={sx.p}>
        The most underrated free studio setup: a large north- or east-facing window on an overcast
        day provides soft, diffused, shadow-free light — the same quality that photographers pay
        thousands for with studio strobes and softboxes. Overcast sky is essentially a giant
        softbox. The missing piece is the background.
      </p>
      <p style={sx.p}>
        A single sheet of white poster board (A1 size, roughly $2 at any office supply store)
        curved from a vertical surface down onto the horizontal shooting surface creates a seamless
        white sweep. Place your subject on the curve. This eliminates the visible horizon line
        that makes photos look amateurish.
      </p>
      <ul style={sx.ul}>
        <li>Position your subject 30–60 cm in front of the window</li>
        <li>Use a second screen displaying{' '}
          <Link to="/tool/white-screen" style={{ color: 'var(--text)' }}>white</Link> on the opposite
          side to fill in shadows — this acts as a free reflector</li>
        <li>Shoot with the window to the side of your subject, not behind it (backlit subjects
          create silhouettes unless you have additional fill)</li>
      </ul>
      <div style={sx.callout}>
        <strong>Best for:</strong> Products, headshots, flat lays. Works on any budget.
        Doesn't work on bright, sunny days — direct sunlight creates harsh shadows on
        the white background that are difficult to remove.
      </div>

      <h2 style={sx.h2}>Method 3: Screen-Lit White Background (No Natural Light Required)</h2>
      <p style={sx.p}>
        For shooting at night or in a windowless room, you can use screens as both the background
        and the light source simultaneously. This requires two devices.
      </p>
      <h3 style={sx.h3}>Setup</h3>
      <ul style={sx.ul}>
        <li><strong>Background device:</strong> A monitor or tablet displaying full white at max
          brightness, positioned upright behind the subject</li>
        <li><strong>Key light device:</strong> A second screen (laptop or phone) displaying{' '}
          <Link to="/tool/zoom-lighting" style={{ color: 'var(--text)' }}>Zoom Lighting</Link> or a{' '}
          <Link to="/tool/custom-color-screen" style={{ color: 'var(--text)' }}>warm white custom color</Link> (~#FFF5E0),
          positioned 30–45° to the side at the same height as the subject</li>
        <li><strong>Camera:</strong> Your phone or camera, positioned facing the subject with the
          white screen behind it</li>
      </ul>
      <p style={sx.p}>
        The key insight: the background screen serves double duty. It illuminates the background so
        it reads as white rather than grey, and the glow wraps around the edges of the subject,
        creating a natural rim-light separation that makes the subject "pop" from the background
        — the same technique used in commercial product photography.
      </p>
      <div style={sx.callout}>
        <strong>Best for:</strong> Night shooting, windowless rooms, any situation where you can't
        control natural light. Works especially well for jewellery and cosmetics where edge
        separation matters.
      </div>

      <h2 style={sx.h2}>Method 4: Passport Photos and Headshots</h2>
      <p style={sx.p}>
        Most countries require passport and official ID photos to have a plain white or off-white
        background. The official US requirement is a plain white or off-white background with
        no patterns, shadows, or objects. Canada requires a plain white or light-coloured background.
        The UK accepts plain cream or white.
      </p>
      <p style={sx.p}>
        Using a screen as your background is one of the cleanest approaches for this:
      </p>
      <ul style={sx.ul}>
        <li>Open the <Link to="/tool/white-screen" style={{ color: 'var(--text)' }}>White Screen</Link> tool
          on your largest monitor at max brightness</li>
        <li>Stand or sit 30–50 cm in front of it — close enough that the screen fills the
          visible background behind your head and shoulders, far enough that you're not casting
          a strong shadow on it</li>
        <li>Use a second screen or lamp in front of you for face lighting — a dim screen to
          your side prevents the "blown out" look that happens when the only light is behind you</li>
        <li>Have someone else take the photo at eye level or slightly above (never below —
          upward angles are not accepted for most passport formats)</li>
      </ul>
      <div style={sx.callout}>
        <strong>Note:</strong> Always check your specific country's official passport photo
        guidelines before printing. Background requirements vary: some require pure white (#FFFFFF),
        others accept off-white or light grey. Most screen-based setups produce a result that
        passes these requirements easily.
      </div>

      <h2 style={sx.h2}>Getting Pure White (Not Grey) in Your Photos</h2>
      <p style={sx.p}>
        The most common mistake with DIY white backgrounds is that they photograph grey. There are
        three reasons this happens and a fix for each:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: 20 }}>
        <table style={sx.table}>
          <thead>
            <tr>
              <th style={sx.th}>Problem</th>
              <th style={sx.th}>Cause</th>
              <th style={sx.th}>Fix</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Background looks grey', 'Background is underexposed (not enough light on it)', 'Increase background brightness or move it closer to a light source'],
              ['Shadow on background', 'Subject is too close to the background', 'Move subject 30–60 cm away from the background'],
              ['Background looks yellow or orange', 'Warm-tinted ambient light hitting the background', 'Use a neutral-temperature light source in front, or shoot near a window without warm lamps on'],
              ['Background looks blown out but subject is dark', 'Too much light on background relative to subject', 'Add a front light on the subject, or reduce background brightness'],
            ].map(([problem, cause, fix]) => (
              <tr key={problem as string}>
                <td style={{ ...sx.td, fontWeight: 600 }}>{problem}</td>
                <td style={sx.td}>{cause}</td>
                <td style={sx.td}>{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={sx.h2}>For Marketplace and E-Commerce Listings</h2>
      <p style={sx.p}>
        Amazon requires pure white backgrounds (#FFFFFF) for main product images. eBay and Etsy
        don't mandate white but consistently show higher conversion rates for white-background
        listings. Shopify's own data shows white or light neutral backgrounds outperform lifestyle
        shots for initial click-through from search results.
      </p>
      <p style={sx.p}>
        The screen-as-background method works well at this scale. For products larger than what
        fits comfortably against a 27-inch monitor, the window-light-plus-white-card method
        scales further. For very large products (furniture, clothing on a mannequin), a wall
        painted white with a large studio strobe or multiple screen fill lights is the DIY ceiling.
      </p>
      <p style={sx.p}>
        One practical tip: shoot tethered to your laptop if possible (most phone camera apps
        support wireless preview to a connected screen). This lets you see the full image while
        adjusting your setup rather than checking the phone screen between every shot.
      </p>

      <h2 style={sx.h2}>Quick Setup Checklist</h2>
      <ul style={sx.ul}>
        <li>Open <Link to="/tool/white-screen" style={{ color: 'var(--text)' }}>White Screen</Link> at max brightness on your background device</li>
        <li>Position subject 30–60 cm in front of the background (prevents shadow)</li>
        <li>Add a front or side fill light — a second screen, window, or lamp</li>
        <li>Shoot at eye level or slightly above the subject</li>
        <li>Check for grey cast: if background looks grey, increase background brightness or reduce ambient light in the room</li>
        <li>For passport photos: confirm your country's exact requirements before printing</li>
      </ul>

      <ContentRelatedTools tools={post.relatedTools} />
    </article>
  );
}
