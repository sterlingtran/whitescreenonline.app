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

export function Terms() {
  return (
    <Layout>
      <PageSEO
        title="Terms of Service - White Screen Online"
        description="Terms of service for White Screen Online. Rules for using the site, intellectual property, disclaimers, and governing law."
        canonical="https://www.whitescreenonline.app/terms"
      />

      <div className="wrap" style={{ maxWidth: 720, paddingTop: 36, paddingBottom: 72 }}>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-3)', marginBottom: 28 }}>
          <Link to="/" style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
            Home
          </Link>
          <ChevronRight size={11} />
          <span style={{ color: 'var(--text-2)' }}>Terms of Service</span>
        </nav>

        <h1 className="h1" style={{ marginBottom: 6 }}>Terms of Service</h1>
        <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 8 }}>
          <strong>Effective date:</strong> {EFFECTIVE_DATE}
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 36 }}>
          <strong>Last updated:</strong> {LAST_UPDATED}
        </p>

        <p style={sx.p}>
          These Terms of Service ("Terms") govern your access to and use of White Screen Online
          ("we", "us", "our"), a free browser-based utility site operated by an independent developer
          based in Canada. By using the site you agree to these Terms. If you do not agree, do not
          use the site.
        </p>

        <h2 style={sx.h2}>1. The Service</h2>
        <p style={sx.p}>
          White Screen Online provides free, browser-based display and productivity tools - including
          color screens, timers, screensavers, lighting simulators, and ambient displays. All tools
          run entirely in your browser. No account, registration, or download is required.
        </p>
        <p style={sx.p}>
          We reserve the right to modify, suspend, or discontinue any tool or feature at any time
          without notice. We are not liable to you or any third party for any modification, suspension,
          or discontinuation of the service.
        </p>

        <h2 style={sx.h2}>2. Acceptable Use</h2>
        <p style={sx.p}>You may use White Screen Online for personal, non-commercial purposes.
          You agree not to:</p>
        <ul style={sx.ul}>
          <li>Scrape, crawl, or systematically extract content from the site using automated tools</li>
          <li>Attempt to reverse-engineer, decompile, or copy the site's source code for redistribution</li>
          <li>Use the site in any way that could damage, disable, or impair its operation or servers</li>
          <li>Use the site to transmit malware, spam, or any harmful or unlawful content</li>
          <li>Circumvent or interfere with any security or access controls</li>
          <li>Misrepresent your identity or affiliation in connection with your use of the site</li>
        </ul>
        <p style={sx.p}>
          Commercial use of the site's tools (for example, using the tools as part of a paid service
          you offer to others) is permitted provided you do not redistribute or rehost the tools
          themselves.
        </p>

        <h2 style={sx.h2}>3. Intellectual Property</h2>
        <p style={sx.p}>
          All content on White Screen Online - including but not limited to the site design, code,
          written guides, tool interfaces, and graphics - is owned by White Screen Online or its
          licensors and is protected by applicable copyright and intellectual property laws.
        </p>
        <p style={sx.p}>
          You may not reproduce, distribute, modify, create derivative works of, publicly display,
          or exploit any content from this site without our prior written permission, except as
          expressly permitted by these Terms or applicable law.
        </p>
        <p style={sx.p}>
          Personal, non-commercial use of the tools - including taking screenshots of tool outputs
          for personal creative projects - is permitted without restriction.
        </p>

        <h2 style={sx.h2}>4. Third-Party Services</h2>
        <p style={sx.p}>
          The site uses the following third-party services, each governed by its own terms and
          privacy policies:
        </p>
        <ul style={sx.ul}>
          <li><strong>Google Analytics 4</strong> - website analytics (Google LLC)</li>
          <li><strong>Google AdSense</strong> - display advertising (Google LLC)</li>
          <li><strong>Vercel</strong> - hosting and edge delivery (Vercel Inc.)</li>
        </ul>
        <p style={sx.p}>
          We are not responsible for the practices, content, or availability of these third-party
          services. Your use of the site constitutes acknowledgment that these services may collect
          data as described in our{' '}
          <Link to="/privacy-policy" style={{ color: 'var(--text)' }}>Privacy Policy</Link>.
        </p>

        <h2 style={sx.h2}>5. Disclaimer of Warranties</h2>
        <p style={sx.p}>
          White Screen Online is provided <strong>"as is"</strong> and <strong>"as available"</strong>{' '}
          without warranties of any kind, express or implied. We expressly disclaim all warranties,
          including but not limited to implied warranties of merchantability, fitness for a particular
          purpose, title, and non-infringement.
        </p>
        <p style={sx.p}>
          We do not warrant that the site will be uninterrupted, error-free, or free of viruses or
          other harmful components. We do not warrant the accuracy, completeness, or usefulness of
          any content on the site. You use the site entirely at your own risk.
        </p>
        <p style={sx.p}>
          Some jurisdictions do not allow the exclusion of implied warranties. In those jurisdictions,
          the above exclusions apply to the maximum extent permitted by applicable law.
        </p>

        <h2 style={sx.h2}>6. Limitation of Liability</h2>
        <p style={sx.p}>
          To the maximum extent permitted by applicable law, White Screen Online and its operator
          shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages - including but not limited to loss of data, loss of profits, or business interruption
          - arising out of or in connection with your use of or inability to use the site, even if
          advised of the possibility of such damages.
        </p>
        <p style={sx.p}>
          Our total aggregate liability to you for any claim arising out of or relating to these
          Terms or your use of the site shall not exceed CAD $10.00. This limitation reflects the
          fact that the service is provided free of charge.
        </p>

        <h2 style={sx.h2}>7. Indemnification</h2>
        <p style={sx.p}>
          You agree to indemnify, defend, and hold harmless White Screen Online and its operator
          from and against any claims, liabilities, damages, losses, and expenses (including
          reasonable legal fees) arising out of or in any way connected with your access to or
          use of the site, your violation of these Terms, or your violation of any third-party rights.
        </p>

        <h2 style={sx.h2}>8. Privacy</h2>
        <p style={sx.p}>
          Your use of White Screen Online is also governed by our{' '}
          <Link to="/privacy-policy" style={{ color: 'var(--text)' }}>Privacy Policy</Link>, which
          is incorporated into these Terms by reference. By using the site you consent to the data
          practices described in the Privacy Policy.
        </p>

        <h2 style={sx.h2}>9. Modifications to These Terms</h2>
        <p style={sx.p}>
          We may revise these Terms at any time. When we do, we will update the "Last updated" date
          at the top of this page. Your continued use of the site after any change constitutes
          acceptance of the updated Terms. We encourage you to review these Terms periodically.
        </p>

        <h2 style={sx.h2}>10. Governing Law and Dispute Resolution</h2>
        <p style={sx.p}>
          These Terms are governed by and construed in accordance with the laws of the Province of
          British Columbia and the federal laws of Canada applicable therein, without regard to
          conflict of law principles.
        </p>
        <p style={sx.p}>
          Any dispute arising out of or relating to these Terms or your use of the site shall be
          subject to the exclusive jurisdiction of the courts of British Columbia, Canada. If you
          are accessing the site from outside Canada, you acknowledge that your use is subject to
          Canadian law and you consent to jurisdiction in British Columbia for any disputes.
        </p>

        <h2 style={sx.h2}>11. Severability</h2>
        <p style={sx.p}>
          If any provision of these Terms is held to be invalid, illegal, or unenforceable, that
          provision shall be modified to the minimum extent necessary to make it enforceable, and
          the remaining provisions shall continue in full force and effect.
        </p>

        <h2 style={sx.h2}>12. Entire Agreement</h2>
        <p style={sx.p}>
          These Terms, together with the{' '}
          <Link to="/privacy-policy" style={{ color: 'var(--text)' }}>Privacy Policy</Link>,
          constitute the entire agreement between you and White Screen Online regarding your use
          of the site and supersede all prior agreements and understandings.
        </p>

        <h2 style={sx.h2}>13. Contact</h2>
        <p style={sx.p}>
          For questions about these Terms:
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
            Back to home
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
