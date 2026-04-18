import { Link } from 'react-router-dom';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ChevronRight } from 'lucide-react';

const sx = {
  h2: { fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 10 } as React.CSSProperties,
  p: { fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 16 } as React.CSSProperties,
};

export function About() {
  return (
    <Layout>
      <PageSEO
        title="About White Screen Online — Free Display & Timer Tools"
        description="White Screen Online is a free collection of display and productivity tools built for anyone who needs a quick, reliable browser-based utility. No login, no ads on tools."
        canonical="https://whitescreenonline.app/about"
      />

      <div className="wrap" style={{ maxWidth: 720, paddingTop: 36, paddingBottom: 72 }}>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-3)', marginBottom: 28 }}>
          <Link to="/" style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
            Home
          </Link>
          <ChevronRight size={11} />
          <span style={{ color: 'var(--text-2)' }}>About</span>
        </nav>

        <h1 className="h1" style={{ marginBottom: 8 }}>About White Screen Online</h1>
        <p style={{ fontSize: 15, color: 'var(--text-2)', marginBottom: 40 }}>
          Free, fast browser tools — built for real use cases by a real person.
        </p>

        {/* What it is */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={sx.h2}>What is White Screen Online?</h2>
          <p style={sx.p}>
            White Screen Online is a free collection of 40+ browser-based display, timer, lighting, and productivity tools.
            Every tool runs entirely in the browser — no account, no download, no subscription. Open the URL,
            use the tool, close the tab. That's it.
          </p>
          <p style={sx.p}>
            The site started as a single white screen tool — useful for cleaning a monitor, checking for dead pixels,
            or using a phone as a quick fill light. It grew from there into timers, color screens, screensavers, ambient displays,
            and a handful of tools that are genuinely hard to find elsewhere without creating an account or installing an app.
          </p>
        </section>

        {/* Who built it */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={sx.h2}>Who built it?</h2>
          <p style={sx.p}>
            White Screen Online is an independent project built and maintained by a developer based in Canada.
            It is not a product of a large company — it is a solo-built utility site maintained because the tools are genuinely useful
            and because building a fast, ad-light, no-login utility site is the right way to serve people who just need something to work.
          </p>
          <p style={sx.p}>
            The site is built with React, Vite, and TypeScript. Every page is statically prerendered for fast load times.
            Tools that use the camera, microphone, or audio APIs request permission only when you explicitly use them —
            never silently in the background.
          </p>
        </section>

        {/* Why free */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={sx.h2}>Why is it free?</h2>
          <p style={sx.p}>
            The site is free to use and is supported by non-intrusive display advertising (Google AdSense).
            Ads appear in page margins and between content sections — never overlaid on the tools themselves.
            If you use an ad blocker, the tools work exactly the same.
          </p>
          <p style={sx.p}>
            There is no freemium tier, no email capture, no "sign up for full access", and no tracking beyond
            standard analytics. The goal is a tool that is fast, honest, and useful — not one that extracts
            value from its users.
          </p>
        </section>

        {/* Accuracy and freshness */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={sx.h2}>Guide content and accuracy</h2>
          <p style={sx.p}>
            Each tool page includes a written guide covering use cases, how the tool works, and relevant background
            information. These guides are written and maintained by the site creator. Where scientific or technical
            claims are made (sleep research, color science, broadcast standards), the information is based on
            established sources — though the site does not publish academic citations inline.
          </p>
          <p style={sx.p}>
            Content is reviewed and updated periodically. The last full content review was completed in{' '}
            <strong style={{ color: 'var(--text)' }}>April 2026</strong>.
          </p>
        </section>

        {/* Contact */}
        <section style={{
          padding: '24px 28px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          marginBottom: 40,
        }}>
          <h2 style={{ ...sx.h2, marginBottom: 8 }}>Contact</h2>
          <p style={{ ...sx.p, marginBottom: 12 }}>
            For questions, bug reports, tool requests, or press inquiries:
          </p>
          <a
            href="mailto:hello@whitescreenonline.app"
            style={{
              display: 'inline-block',
              fontSize: 15,
              fontWeight: 600,
              color: 'var(--text)',
              borderBottom: '2px solid var(--border)',
              paddingBottom: 2,
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            hello@whitescreenonline.app
          </a>
          <p style={{ ...sx.p, marginTop: 16, marginBottom: 0, fontSize: 13 }}>
            Based in Canada &nbsp;·&nbsp; Response time: typically within 2–3 business days
          </p>
        </section>

        <div style={{ display: 'flex', gap: 20, fontSize: 14 }}>
          <Link to="/" style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
            ← Back to tools
          </Link>
          <Link to="/privacy-policy" style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
            Privacy Policy
          </Link>
        </div>

      </div>
    </Layout>
  );
}
