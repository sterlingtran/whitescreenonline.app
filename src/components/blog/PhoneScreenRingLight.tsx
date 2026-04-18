import { Link } from 'react-router-dom';
import { ContentRelatedTools } from '@/src/components/ContentRelatedTools';
import type { BlogPost } from '@/src/data/blog';

const sx = {
  h2: { fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 10, marginTop: 36 } as React.CSSProperties,
  h3: { fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8, marginTop: 24 } as React.CSSProperties,
  p:  { fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 16 } as React.CSSProperties,
  ul: { fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, paddingLeft: 22, marginBottom: 16 } as React.CSSProperties,
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

export function PhoneScreenRingLight({ post }: Props) {
  return (
    <article>
      <p style={sx.p}>
        You don't need to spend $30–$80 on a ring light for better-looking video calls or phone portraits.
        Every smartphone, tablet, and laptop you own is already a high-quality light source — you just
        need the right settings and positioning. Here's exactly how to use any screen as a DIY fill light,
        and which free tools make it easier.
      </p>

      <h2 style={sx.h2}>Why Screens Make Good Lights</h2>
      <p style={sx.p}>
        Modern displays can output 400–1000 nits of brightness. A budget ring light typically produces
        around 500–800 lux at 50 cm. Held at the same distance, a 13-inch laptop screen can match or
        exceed that — especially when displaying a full-white image at maximum brightness. The light is
        large relative to the subject (your face), which means it produces soft, even illumination with
        gentle shadow edges — the same quality you'd get from a professional softbox.
      </p>
      <p style={sx.p}>
        The only real limitation of a screen versus a dedicated ring light is that you can't angle it
        independently of where you're looking. For video calls this isn't an issue — your screen is
        already in front of you. For phone photography, a second device held off to the side works perfectly.
      </p>

      <h2 style={sx.h2}>Step-by-Step: Setting Up Your Screen Light</h2>

      <h3 style={sx.h3}>1. Open a full-screen white or warm-white display</h3>
      <p style={sx.p}>
        Open <Link to="/" style={{ color: 'var(--text)' }}>White Screen Online</Link> on the device
        you want to use as a light. Turn brightness to maximum. For a neutral fill light, use plain
        white. For warmth that's flattering on skin, try a warm cream or amber — around <strong>#FFF5E0</strong> to{' '}
        <strong>#FFE4B5</strong> — using the{' '}
        <Link to="/tool/custom-color-screen" style={{ color: 'var(--text)' }}>Custom Color Screen</Link> or{' '}
        <Link to="/tool/zoom-lighting" style={{ color: 'var(--text)' }}>Zoom Lighting</Link> tool.
      </p>
      <div style={sx.callout}>
        <strong>Color temperature tip:</strong> Standard daylight is 5500–6500K (blue-white).
        Incandescent bulbs are 2700–3200K (warm orange). A warm cream hex like #FFE8C8 approximates
        roughly 3500K — flattering for skin tones without making everything look orange.
      </div>

      <h3 style={sx.h3}>2. Position the light correctly</h3>
      <p style={sx.p}>
        For video calls: your monitor is already your key light. If your face looks uneven or one side
        is too dark, prop a second screen (phone or tablet) slightly off to the side at a 45° angle
        to add fill. The fill light should be about half as bright as the key — dim it in your OS
        display settings or use the brightness slider in the{' '}
        <Link to="/tool/zoom-lighting" style={{ color: 'var(--text)' }}>Zoom Lighting tool</Link>.
      </p>
      <p style={sx.p}>
        For phone portraits: hold your secondary device (or ask someone to hold it) roughly level with
        the subject's face, at arm's length, angled slightly toward them. The{' '}
        <Link to="/tool/ring-light" style={{ color: 'var(--text)' }}>Ring Light Simulator</Link> works
        well here — the circular gradient mimics the catchlight pattern of a real ring light in the
        subject's eyes, which gives photos a professional look.
      </p>

      <h3 style={sx.h3}>3. Control the ratio</h3>
      <p style={sx.p}>
        Key-to-fill ratio determines how dramatic or natural your lighting looks:
      </p>
      <ul style={sx.ul}>
        <li><strong>1:1 ratio</strong> — Both lights equal brightness. Flat, even. Good for video calls, product photography, and tutorials.</li>
        <li><strong>2:1 ratio</strong> — Key light twice as bright as fill. Natural, three-dimensional. Flattering for most faces.</li>
        <li><strong>4:1 ratio</strong> — High contrast. Dramatic side lighting. Better for artistic portraits than professional video calls.</li>
      </ul>
      <p style={sx.p}>
        In practice: set your main screen (key) to 100% brightness and your secondary screen (fill)
        to 50% for a roughly 2:1 ratio. Use OS brightness controls or the slider in the Zoom Lighting tool.
      </p>

      <h2 style={sx.h2}>Best Screen Colors for Different Situations</h2>

      <h3 style={sx.h3}>Video calls and Zoom meetings</h3>
      <p style={sx.p}>
        Plain white (#FFFFFF) or soft warm white (#FFF8F0) at full brightness. Point your main monitor
        toward your face. If you have a second screen, use it as fill from the side. This alone will
        make you look significantly better than ambient room lighting in most home offices.
      </p>

      <h3 style={sx.h3}>Selfies and phone portraits</h3>
      <p style={sx.p}>
        Warm white to golden (#FFE4B5) works well indoors. Hold the screen at eye level, slightly above,
        angled 15–20° downward toward your face. This recreates the Rembrandt lighting pattern used by
        portrait photographers — a small triangle of light on the shadowed cheek.
      </p>

      <h3 style={sx.h3}>Product photography</h3>
      <p style={sx.p}>
        Use full white for accurate color reproduction of products. Place one screen on each side of the
        subject for even, shadow-free illumination. If you need to show texture, use only one screen at
        a 45° angle — the single-side shadow reveals three-dimensionality.
      </p>

      <h3 style={sx.h3}>Creative and colored lighting</h3>
      <p style={sx.p}>
        The <Link to="/tool/rgb-gradient" style={{ color: 'var(--text)' }}>RGB Gradient Light</Link> tool
        lets you display a two-color gradient — useful for split-tone lighting effects in photography
        and content creation. A blue-to-purple gradient works well for a "studio" aesthetic popular
        on YouTube and Twitch.
      </p>

      <h2 style={sx.h2}>Limitations to Know</h2>
      <ul style={sx.ul}>
        <li><strong>Not for distance:</strong> Screen light drops off fast. It works best within 1–2 metres.</li>
        <li><strong>Heat:</strong> Displaying pure white at max brightness for extended periods can warm your device. Fine for video calls; give your phone a break between long portrait sessions.</li>
        <li><strong>Reflections:</strong> If you're shooting glass or shiny objects, a white screen will create a visible rectangular reflection. Use a custom color or dim the brightness to reduce this.</li>
        <li><strong>Battery:</strong> Max brightness drains battery fast. Keep your fill device plugged in if possible.</li>
      </ul>

      <h2 style={sx.h2}>Quick-Start Checklist</h2>
      <ul style={sx.ul}>
        <li>Open the <Link to="/tool/white-screen" style={{ color: 'var(--text)' }}>white screen</Link> or Zoom Lighting tool on your fill device</li>
        <li>Set display brightness to maximum</li>
        <li>Position at eye level, 30–60 cm from your face</li>
        <li>Adjust color temperature to suit your room (warmer indoors, cooler near windows)</li>
        <li>Set fill to ~50% of key light brightness for a natural 2:1 ratio</li>
        <li>Check the result in your camera app before your call or shoot</li>
      </ul>

      <ContentRelatedTools tools={post.relatedTools} />
    </article>
  );
}
