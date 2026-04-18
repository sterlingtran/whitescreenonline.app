import { Link } from 'react-router-dom';
import { PageSEO } from '@/src/components/PageSEO';
import { Layout } from '@/src/components/Layout';
import { ChevronRight } from 'lucide-react';

const EFFECTIVE_DATE = 'April 18, 2026';
const LAST_UPDATED   = 'April 18, 2026';

const sx = {
  h2: { fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 10, marginTop: 36 } as React.CSSProperties,
  p:  { fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 12 } as React.CSSProperties,
  ul: { fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8, paddingLeft: 20, marginBottom: 12 } as React.CSSProperties,
};

export function PrivacyPolicy() {
  return (
    <Layout>
      <PageSEO
        title="Privacy Policy - White Screen Online"
        description="Privacy policy for White Screen Online. How we collect, use, and protect your data — including PIPEDA, GDPR, and CASL compliance information."
        canonical="https://whitescreenonline.app/privacy-policy"
        noindex
      />

      <div className="wrap" style={{ maxWidth: 720, paddingTop: 36, paddingBottom: 72 }}>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-3)', marginBottom: 28 }}>
          <Link to="/" style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
            Home
          </Link>
          <ChevronRight size={11} />
          <span style={{ color: 'var(--text-2)' }}>Privacy Policy</span>
        </nav>

        <h1 className="h1" style={{ marginBottom: 6 }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 8 }}>
          <strong>Effective date:</strong> {EFFECTIVE_DATE}
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 36 }}>
          <strong>Last updated:</strong> {LAST_UPDATED}
        </p>

        <p style={sx.p}>
          White Screen Online ("we", "us", "our") is operated by an independent developer based in Canada.
          This privacy policy explains what personal information we collect, how we use it, and what rights you have
          over it. We are committed to protecting your privacy and complying with applicable privacy laws, including
          Canada's <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and, where applicable,
          the EU General Data Protection Regulation (GDPR).
        </p>

        <h2 style={sx.h2}>1. Information We Collect</h2>
        <p style={sx.p}><strong>Information you provide directly:</strong> We do not require registration or accounts.
          If you contact us by email, we receive your email address and the content of your message.</p>
        <p style={sx.p}><strong>Usage analytics:</strong> We use Vercel Analytics and Google Analytics 4 to understand
          how visitors use the site. This includes pages visited, time on site, general geographic region (country/city),
          device type, browser, and referral source. IP addresses are anonymized before storage. We do not collect
          names, email addresses, or precise location data through analytics.</p>
        <p style={sx.p}><strong>Advertising data:</strong> Google AdSense may collect information to serve
          personalized ads, including cookie identifiers, browser type, and browsing behaviour across sites that
          use Google advertising services. See Section 5 for opt-out options.</p>
        <p style={sx.p}><strong>Browser local storage:</strong> We use browser local storage (not cookies) to save
          your tool settings, favorites, and theme preference. This data is stored only on your device and is
          never transmitted to our servers.</p>

        <h2 style={sx.h2}>2. Cookies</h2>
        <p style={sx.p}>
          We use the following categories of cookies:
        </p>
        <ul style={sx.ul}>
          <li><strong>Analytics cookies</strong> — Google Analytics sets cookies (_ga, _ga_*, _gid) to distinguish
            users and sessions. These persist for up to 2 years.</li>
          <li><strong>Advertising cookies</strong> — Google AdSense sets cookies to serve and measure ads.
            These may include cross-site tracking cookies used for interest-based advertising.</li>
          <li><strong>No essential cookies</strong> — We do not set any session or authentication cookies.
            The site functions fully without cookies if you block them in your browser.</li>
        </ul>
        <p style={sx.p}>
          You can manage or block cookies in your browser settings. Blocking analytics and advertising cookies
          does not affect any tool functionality.
        </p>

        <h2 style={sx.h2}>3. How We Use Your Information</h2>
        <p style={sx.p}>We use collected information to:</p>
        <ul style={sx.ul}>
          <li>Understand which tools are most used and how to improve them</li>
          <li>Serve non-intrusive display advertising that supports the free service</li>
          <li>Respond to inquiries sent to our contact email</li>
          <li>Monitor site performance and diagnose technical issues</li>
        </ul>
        <p style={sx.p}>
          We do not sell personal information to third parties. We do not use personal information for automated
          decision-making or profiling for purposes other than aggregate analytics.
        </p>

        <h2 style={sx.h2}>4. Legal Bases for Processing (GDPR)</h2>
        <p style={sx.p}>
          For users in the European Economic Area (EEA), UK, or Switzerland, our legal bases for processing
          personal data are:
        </p>
        <ul style={sx.ul}>
          <li><strong>Legitimate interests</strong> — Analytics to improve the service (Art. 6(1)(f) GDPR)</li>
          <li><strong>Consent</strong> — Personalized advertising via Google AdSense (Art. 6(1)(a) GDPR).
            You may withdraw consent at any time using the opt-out methods in Section 5.</li>
          <li><strong>Contract performance</strong> — Responding to direct email inquiries</li>
        </ul>

        <h2 style={sx.h2}>5. Third-Party Services</h2>
        <p style={sx.p}><strong>Google Analytics 4</strong> — Google LLC, USA. Analytics data is processed under
          Google's data processing terms. Google may transfer data internationally under Standard Contractual Clauses.
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text)', marginLeft: 4 }}>Google Privacy Policy</a></p>
        <p style={sx.p}><strong>Google AdSense</strong> — Google LLC, USA. AdSense may serve personalized ads
          based on your browsing history. You can opt out of personalized advertising at&nbsp;
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text)' }}>adssettings.google.com</a> or through the&nbsp;
          <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text)' }}>NAI opt-out tool</a>.</p>
        <p style={sx.p}><strong>Vercel Analytics</strong> — Vercel Inc., USA. Lightweight privacy-focused analytics
          that does not use cookies or fingerprinting.
          <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text)', marginLeft: 4 }}>Vercel Privacy Policy</a></p>

        <h2 style={sx.h2}>6. Your Rights</h2>
        <p style={sx.p}><strong>All users:</strong> You can clear browser local storage and cookies at any time
          through your browser settings. Doing so removes all stored preferences and analytics identifiers.</p>
        <p style={sx.p}><strong>Canadian residents (PIPEDA):</strong> You have the right to access personal
          information we hold about you, request corrections, and withdraw consent for collection or use.
          Contact us at the address below to exercise these rights.</p>
        <p style={sx.p}><strong>EEA/UK residents (GDPR):</strong> You have the right to access, rectify, erase,
          restrict, or port your personal data, and to object to processing. You also have the right to lodge a
          complaint with your local supervisory authority. To exercise GDPR rights, contact us at the email below.</p>
        <p style={sx.p}><strong>California residents (CCPA):</strong> You have the right to know what personal
          information is collected, to delete it, and to opt out of its sale. We do not sell personal information.</p>

        <h2 style={sx.h2}>7. Data Retention</h2>
        <p style={sx.p}>
          Google Analytics retains user-level data for 14 months by default. Aggregate report data is retained
          indefinitely. Email correspondence is retained for as long as necessary to respond to and resolve inquiries.
          Browser local storage data persists on your device until you clear it manually.
        </p>

        <h2 style={sx.h2}>8. International Data Transfers</h2>
        <p style={sx.p}>
          This site is operated from Canada. Analytics and advertising data processed by Google may be transferred
          to and stored in the United States or other countries. Google relies on Standard Contractual Clauses
          approved by the European Commission for international transfers from the EEA. Vercel processes data
          in compliance with its Privacy Shield successor framework obligations.
        </p>

        <h2 style={sx.h2}>9. Children's Privacy</h2>
        <p style={sx.p}>
          White Screen Online is not directed to children under 13. We do not knowingly collect personal
          information from children. If you believe a child has provided us with personal information,
          contact us and we will delete it promptly.
        </p>

        <h2 style={sx.h2}>10. Electronic Communications (CASL)</h2>
        <p style={sx.p}>
          White Screen Online does not send commercial electronic messages (newsletters, promotional emails,
          or marketing communications). We will only send email in direct response to an inquiry you initiate.
          This section is provided for compliance with Canada's Anti-Spam Legislation (CASL, S.C. 2010, c. 23).
        </p>

        <h2 style={sx.h2}>11. Changes to This Policy</h2>
        <p style={sx.p}>
          We may update this policy from time to time. When we do, we will update the "Last updated" date
          at the top of this page. Continued use of the site after changes constitutes acceptance of the
          updated policy. Material changes will be noted in the change date.
        </p>

        <h2 style={sx.h2}>12. Contact</h2>
        <p style={sx.p}>
          For privacy inquiries, data access requests, or to withdraw consent:
        </p>
        <p style={{ ...sx.p, marginBottom: 0 }}>
          White Screen Online<br />
          Canada<br />
          <a href="mailto:hello@whitescreenonline.app" style={{ color: 'var(--text)' }}>
            hello@whitescreenonline.app
          </a>
        </p>

        <div style={{ marginTop: 48, display: 'flex', gap: 20, fontSize: 14 }}>
          <Link to="/" style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
            ← Back to home
          </Link>
          <Link to="/about" style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
            About
          </Link>
        </div>

      </div>
    </Layout>
  );
}
