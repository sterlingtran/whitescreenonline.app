import { useRef, useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link, useSearchParams } from 'react-router-dom';
import { ChevronRight, Maximize2 } from 'lucide-react';
import { getTool, getRelatedTools, CATEGORIES, TOOLS } from '@/src/data/tools';
import { getFAQs } from '@/src/data/faqs';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ToolCard } from '@/src/components/ToolCard';
import { FAQ } from '@/src/components/FAQ';
import { WhiteScreenContent } from '@/src/components/WhiteScreenContent';
import { BlueScreenContent } from '@/src/components/BlueScreenContent';
import { GreenScreenContent } from '@/src/components/GreenScreenContent';
import { RedScreenContent } from '@/src/components/RedScreenContent';
import { BlackScreenContent } from '@/src/components/BlackScreenContent';
import { YellowScreenContent } from '@/src/components/YellowScreenContent';
import { DeadPixelContent } from '@/src/components/DeadPixelContent';
import { OrangeScreenContent } from '@/src/components/OrangeScreenContent';
import { PurpleScreenContent } from '@/src/components/PurpleScreenContent';
import { PinkScreenContent } from '@/src/components/PinkScreenContent';
import { ColorScreen } from '@/src/tools/ColorScreen';
import { CustomColorScreen } from '@/src/tools/CustomColorScreen';
import { DeadPixelTest } from '@/src/tools/DeadPixelTest';
import { TipScreen } from '@/src/tools/TipScreen';
import { CountdownTimer } from '@/src/tools/CountdownTimer';
import * as Placeholders from '@/src/tools/Placeholders';

/* ── Tool renderer ─────────────────────────────── */
function ToolRenderer({ tool }: { tool: NonNullable<ReturnType<typeof getTool>> }) {
  if (tool.componentKey === 'colorScreen') {
    const p = tool.componentProps as { color: string; colorName: string };
    return <ColorScreen color={p.color} colorName={p.colorName} toolId={tool.id} />;
  }
  if (tool.componentKey === 'tipScreen')        return <TipScreen />;
  if (tool.componentKey === 'countdownTimer')   return <CountdownTimer />;

  const map: Record<string, React.ComponentType<any>> = {
    customColorScreen:     CustomColorScreen,
    deadPixelTest:         DeadPixelTest,
    zoomLighting:          Placeholders.ZoomLighting,
    ringLight:             Placeholders.RingLight,
    rgbGradient:           Placeholders.RGBGradient,
    whiteNoise:            Placeholders.WhiteNoise,
    brokenScreen:          Placeholders.BrokenScreen,
    radarScreen:           Placeholders.RadarScreen,
    bsod:                  Placeholders.BSOD,
    hackerTyper:           Placeholders.HackerTyper,
    fakeUpdate:            Placeholders.FakeUpdate,
    dvdScreensaver:        Placeholders.DVDScreensaver,
    flipClock:             Placeholders.FlipClock,
    motivationalQuote:     Placeholders.MotivationalQuote,
    smpteColorBars:        Placeholders.SMPTEColorBars,
    matrixScreensaver:     Placeholders.MatrixScreensaver,
    starfieldScreensaver:  Placeholders.StarfieldScreensaver,
    pomodoroTimer:         Placeholders.PomodoroTimer,
    stopwatch:             Placeholders.Stopwatch,
    hiitTimer:             Placeholders.HIITTimer,
    focusScreen:           Placeholders.FocusScreen,
    meditationBreather:    Placeholders.MeditationBreather,
    fireplaceAmbient:      Placeholders.FireplaceAmbient,
    rainAmbient:           Placeholders.RainAmbient,
    particleSystem:        Placeholders.ParticleSystem,
    productivityDashboard: Placeholders.ProductivityDashboard,
  };

  const Comp = map[tool.componentKey];
  if (Comp) return <Comp />;
  return <p style={{ padding: '40px 0', color: 'var(--text-3)', fontSize: 14, textAlign: 'center' }}>Coming soon.</p>;
}

/* ── Fullscreen wrapper (for non-color tools) ── */
function ToolWithFullscreen({ tool }: { tool: NonNullable<ReturnType<typeof getTool>> }) {
  const isColor = tool.componentKey === 'colorScreen';

  // Tools that manage their own fullscreen — render directly without wrapper
  const isSelfManaged = isColor || tool.componentKey === 'tipScreen' || tool.componentKey === 'countdownTimer';
  if (isSelfManaged) return <ToolRenderer tool={tool} />;

  // Other tools: wrap with a fullscreen container + hover button
  const ref = useRef<HTMLDivElement>(null);
  const [isFS, setIsFS] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFS(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const enter = () => ref.current?.requestFullscreen().catch(() => {});
  const exit  = () => document.exitFullscreen?.().catch(() => {});
  const toggle = () => isFS ? exit() : enter();

  return (
    <div
      ref={ref}
      className="card"
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <ToolRenderer tool={tool} />

      {/* Fullscreen button — visible on hover when not fullscreen */}
      {!isFS && (
        <button
          onClick={(e) => { e.stopPropagation(); toggle(); }}
          style={{
            position: 'absolute', bottom: 12, right: 12,
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '6px 12px',
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(6px)',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: 12,
            fontWeight: 500,
            opacity: 0,
            transition: 'opacity 0.2s',
          }}
          className="fs-hint"
        >
          <Maximize2 size={12} /> Fullscreen
        </button>
      )}

      <style>{`
        div:has(> .fs-hint):hover .fs-hint { opacity: 1 !important; }
      `}</style>
    </div>
  );
}


/* ── Page ───────────────────────────────────────── */
export function ToolPage() {
  const { toolSlug } = useParams<{ toolSlug: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const autoFS = searchParams.get('fs') === '1';

  const tool = getTool(toolSlug!);
  const related = getRelatedTools(toolSlug!);
  const allOther = useMemo(() => TOOLS.filter(t => t.slug !== toolSlug).slice(0, 12), [toolSlug]);
  const faqs = getFAQs(toolSlug!);
  const category = CATEGORIES.find(c => c.id === tool?.category);

  if (!tool) {
    return (
      <Layout>
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Tool Not Found</h1>
          <p className="body-sm" style={{ marginBottom: 24 }}>The tool you are looking for does not exist.</p>
          <button onClick={() => navigate('/')} className="btn btn-dark">Back to Home</button>
        </div>
      </Layout>
    );
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whitescreenonline.app/' },
      ...(category ? [{ '@type': 'ListItem', position: 2, name: category.name, item: `https://whitescreenonline.app/category/${category.slug}` }] : []),
      { '@type': 'ListItem', position: category ? 3 : 2, name: tool.name, item: `https://whitescreenonline.app/tool/${tool.slug}` },
    ],
  };

  return (
    <Layout>
      <PageSEO
        title={tool.seoTitle}
        description={tool.seoDescription}
        canonical={`https://whitescreenonline.app/tool/${tool.slug}`}
        jsonLd={[faqSchema, breadcrumbSchema]}
      />

      <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>

        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-3)', marginBottom: 20 }}>
          <Link to="/" style={{ color: 'var(--text-3)' }} onMouseEnter={e => (e.currentTarget.style.color='var(--text)')} onMouseLeave={e => (e.currentTarget.style.color='var(--text-3)')}>Home</Link>
          {category && (
            <>
              <ChevronRight size={11} />
              <Link to={`/category/${category.slug}`} style={{ color: 'var(--text-3)' }} onMouseEnter={e => (e.currentTarget.style.color='var(--text)')} onMouseLeave={e => (e.currentTarget.style.color='var(--text-3)')}>
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight size={11} />
          <span style={{ color: 'var(--text-2)' }}>{tool.name}</span>
        </nav>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h1 className="h1" style={{ marginBottom: 8 }}>{tool.name}</h1>
          <p style={{ fontSize: 15, color: 'var(--text-2)', maxWidth: 480, margin: '0 auto' }}>
            {tool.longDescription}
          </p>
        </div>

        {/* Tool */}
        <ToolWithFullscreen tool={tool} />

        {/* Other Tools grid */}
        <section style={{ marginTop: 52 }}>
          <h2 className="h2" style={{ marginBottom: 14 }}>Other Tools</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 10,
          }}>
            {(related.length > 0 ? related : allOther).map(t => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        </section>

        <hr className="divider" style={{ margin: '48px 0 40px' }} />

        {/* Color screens get rich content; all others get the generic About */}
        {tool.slug === 'white-screen' ? (
          <WhiteScreenContent />
        ) : tool.slug === 'blue-screen' ? (
          <BlueScreenContent />
        ) : tool.slug === 'green-screen' ? (
          <GreenScreenContent />
        ) : tool.slug === 'red-screen' ? (
          <RedScreenContent />
        ) : tool.slug === 'black-screen' ? (
          <BlackScreenContent />
        ) : tool.slug === 'yellow-screen' ? (
          <YellowScreenContent />
        ) : tool.slug === 'dead-pixel-test' ? (
          <DeadPixelContent />
        ) : tool.slug === 'orange-screen' ? (
          <OrangeScreenContent />
        ) : tool.slug === 'purple-screen' ? (
          <PurpleScreenContent />
        ) : tool.slug === 'pink-screen' ? (
          <PinkScreenContent />
        ) : (
          <section style={{ marginBottom: 36 }}>
            <h2 className="h2" style={{ marginBottom: 10 }}>About {tool.name}</h2>
            <p className="body-sm" style={{ maxWidth: 680 }}>
              {tool.longDescription}
              {tool.uses.length > 0 && <> Common uses include: {tool.uses.join(', ')}.</>}
            </p>
          </section>
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section>
            <h2 className="h2" style={{ marginBottom: 6 }}>Frequently Asked Questions</h2>
            <p className="label" style={{ marginBottom: 16 }}>
              Everything you need to know about {tool.name.toLowerCase()}.
            </p>
            <FAQ faqs={faqs} />
          </section>
        )}

      </div>
    </Layout>
  );
}
