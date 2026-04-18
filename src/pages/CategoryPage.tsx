import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getCategory, getToolsByCategory } from '@/src/data/tools';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ToolCard } from '@/src/components/ToolCard';

const CATEGORY_CONTENT: Record<string, string[]> = {
  'solid-colors': [
    'Solid color screens are the core monitor test tools on White Screen Online. Use them to fill the entire display with a clean, distraction-free color for checking stuck pixels, spotting dust, cleaning glass, matching light spill, or creating a simple background for photos and video calls.',
    'Start with the white, black, red, green, and blue screens when you need basic display checks. The custom color screen gives you more control when you need a specific hue for lighting, content creation, or visual calibration.',
  ],
  lighting: [
    'Lighting tools turn your monitor, tablet, or phone into a practical light source for quick setup work. They are useful for video calls, product shots, selfies, streaming tests, and temporary fill light when you do not want to install a dedicated lighting app.',
    'The lighting category includes simple full-screen light tools as well as adjustable effects like ring light, Zoom lighting, and RGB gradients. Use lower brightness for comfort and higher brightness only when you need a stronger short-term light source.',
  ],
  'prank-screens': [
    'Prank screens are full-screen visual effects designed for harmless jokes, demos, and entertainment. They work best when you need something that looks convincing at a glance without installing software or changing any system settings.',
    'These tools should be used responsibly. Broken screen, blue screen, radar, hacker-style, and tip screens are visual simulations only and do not damage the device or modify the operating system.',
  ],
  'fake-updates': [
    'Fake update screens simulate common operating system update flows in the browser. They are useful for harmless office pranks, video props, presentations, and creating a temporary full-screen update look without touching the actual computer settings.',
    'Each fake update page is browser-based and reversible. Press Escape or exit fullscreen to return to the normal page, and avoid using these screens in situations where someone might lose work or think their device is actually broken.',
  ],
  screensavers: [
    'Screensaver tools provide animated full-screen visuals for ambience, nostalgia, and lightweight display decoration. They are useful on a spare monitor, TV, projector, or tablet when you want motion without opening a heavy app.',
    'This category includes classic effects like DVD bounce, matrix rain, starfields, clocks, broadcast bars, and particle visuals. They run in the browser and can be exited without changing device settings.',
  ],
  timers: [
    'Timer and productivity tools help with focused work, workouts, meetings, breaks, and simple time tracking. They are intentionally quick to launch so you can start a countdown, stopwatch, Pomodoro session, or focus display without creating an account.',
    'Some timer tools include controls such as lap, reset, or interval settings. Those pages are designed to keep interaction available while the tool is active, unlike passive screen tools where clicking can exit fullscreen.',
  ],
  entertainment: [
    'Ambient and entertainment tools create calm, playful, or decorative full-screen experiences in the browser. They are useful for background atmosphere, short breaks, study sessions, or making an idle display feel more intentional.',
    'Use ambient sound, quote, rain, particle, and breathing tools when you want a simple visual or audio environment without opening a larger media app. Everything runs locally in the browser and can be closed at any time.',
  ],
};

export function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const category = getCategory(categorySlug!);
  const tools = getToolsByCategory(categorySlug!);

  if (!category) {
    return (
      <Layout>
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Category Not Found</h1>
          <button onClick={() => navigate('/')} className="btn btn-dark">Back to Home</button>
        </div>
      </Layout>
    );
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.whitescreenonline.app/' },
      { '@type': 'ListItem', position: 2, name: category.name, item: `https://www.whitescreenonline.app/category/${category.slug}` },
    ],
  };
  const content = CATEGORY_CONTENT[category.slug] ?? [category.description];

  return (
    <Layout>
      <PageSEO
        title={`${category.name} - Free Online Tools | White Screen Online`}
        description={`${category.description} Browse all ${tools.length} free tools. No login required.`}
        canonical={`https://www.whitescreenonline.app/category/${category.slug}`}
        jsonLd={breadcrumbSchema}
      />

      <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>

        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-3)', marginBottom: 24 }}>
          <Link to="/" style={{ color: 'var(--text-3)' }} onMouseEnter={e => (e.currentTarget.style.color='var(--text)')} onMouseLeave={e => (e.currentTarget.style.color='var(--text-3)')}>Home</Link>
          <ChevronRight size={11} />
          <span style={{ color: 'var(--text-2)' }}>{category.name}</span>
        </nav>

        <h1 className="h1" style={{ marginBottom: 8 }}>{category.name}</h1>
        <p className="body-sm" style={{ marginBottom: 28 }}>{category.description}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 10,
        }}>
          {tools.map(t => <ToolCard key={t.id} tool={t} />)}
        </div>

        <section style={{
          marginTop: 44,
          padding: '24px 28px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
        }}>
          <h2 className="h2" style={{ marginBottom: 12 }}>About {category.name}</h2>
          {content.map((paragraph) => (
            <p key={paragraph} className="body-sm" style={{ maxWidth: 760, marginBottom: 12 }}>
              {paragraph}
            </p>
          ))}
          {tools.length > 0 && (
            <p className="body-sm" style={{ maxWidth: 760, marginBottom: 0 }}>
              Popular tools in this category include{' '}
              {tools.slice(0, 4).map((tool, index) => (
                <span key={tool.id}>
                  <Link to={`/tool/${tool.slug}`} style={{ color: 'var(--text)', fontWeight: 600 }}>
                    {tool.name}
                  </Link>
                  {index < Math.min(tools.length, 4) - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          )}
        </section>
      </div>
    </Layout>
  );
}
