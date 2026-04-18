import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Pranking Chromebook users', desc: 'Chromebook owners know this screen — and will have an immediate reaction to it' },
  { title: 'School and education settings', desc: 'Chromebooks dominate K-12 education — a perfect target for a classroom prank' },
  { title: 'Pranking Google fans', desc: 'Chrome OS enthusiasts and Google ecosystem users will recognize it instantly' },
  { title: 'Unexpected victim selection', desc: 'Chrome OS users rarely expect pranks — the surprise factor is amplified' },
  { title: 'Enterprise Chromebook users', desc: 'Businesses deploying Chrome Enterprise create a large pool of potential victims' },
  { title: 'Tech gift unboxing pranks', desc: 'Display it when someone unboxes a new Chromebook for a setup moment' },
  { title: 'Film and video props', desc: 'Chrome OS update screen for any scene requiring a Google-branded computer' },
  { title: 'Cross-platform OS collection', desc: 'Collect all five OS update pranks for a complete operating system prank set' },
  { title: 'IT department humor', desc: 'Chrome OS administrators managing Chromebook fleets will appreciate the meta-humor' },
  { title: 'Remote worker pranks', desc: 'Many remote workers using Chromebooks will encounter this during a video call' },
];

const HOW_IT_WORKS = [
  'The screen replicates the authentic Chrome OS system update restart interface',
  'Google\'s distinctive Material Design aesthetic and color palette render precisely',
  'Familiar "Restart to update" messaging and Chrome OS progress indicators appear',
  'Set your preferred duration and watch the Chrome OS prank unfold',
  'Close the browser tab to immediately end the simulation',
];

const IN_DEPTH = [
  {
    title: 'Chrome OS: The Fastest-Updating OS',
    body: 'Chrome OS has one of the smoothest update experiences of any operating system. Updates download in the background while you work and are applied on the next restart — no lengthy installation process, no progress bar stalling at 89%. Most Chrome OS updates complete in under 5 minutes. Google achieves this through a dual-partition system: one partition runs the current OS while the update installs silently on the inactive partition, then the system simply boots into the new partition on restart. Users rarely notice updates happening.',
  },
  {
    title: 'Chrome OS in Education',
    body: 'Chrome OS has become the dominant platform in K-12 education in the United States and many other countries. Over 50 million students and educators use Chromebooks in schools. The advantages are significant: low cost (often $200–$350 per device), central management through Google Admin Console, automatic updates, and cloud-based storage that eliminates data loss from device damage. The Chrome OS update screen is one of the most-seen computer interfaces among students aged 6–18.',
  },
  {
    title: 'Chrome OS vs ChromeOS',
    body: 'In 2022, Google rebranded "Chrome OS" as "ChromeOS" (no space) — a subtle change that updated branding across devices and documentation. The platform itself also evolved significantly: ChromeOS now runs Android apps through the Play Store, supports Linux applications through a virtual machine called Crostini, and can run the full Chrome browser with extensions. Modern Chromebooks are far more capable than the "browser-only" reputation they earned in 2011 when the platform launched.',
  },
  {
    title: 'Google\'s Material Design Language',
    body: 'Chrome OS uses Google\'s Material Design language — a design system introduced in 2014 that emphasizes clean surfaces, subtle shadows, and purposeful motion. Material You (Material Design 3, introduced with Android 12) brought dynamic color theming based on wallpaper colors to ChromeOS in 2022, allowing the OS to generate a cohesive color palette from the device wallpaper. The result is a personalized, cohesive visual environment that differs meaningfully from both Windows and macOS in its design philosophy.',
  },
  {
    title: 'Chromebook Longevity and AUE Dates',
    body: 'Every Chromebook has an Auto-Update Expiration (AUE) date — typically 8–10 years from the device\'s release date — after which Google stops providing software updates. This has been a source of frustration for schools that purchased Chromebooks early and found them receiving no updates after 6–7 years. Google extended AUE dates in 2023 following pressure from educators. An expired Chromebook can still run Chrome OS, but without security updates, using it for sensitive data becomes inadvisable.',
  },
  {
    title: 'The Prank for Chrome OS Users',
    body: 'Chrome OS users are accustomed to seeing update notifications but not long update screens — the platform\'s fast update process means a lengthy update screen is slightly unusual and therefore somewhat alarming. The prank works particularly well timed to when the target is working on something important — when they see the update screen, the first instinct is "did I lose my work?" Since Chrome OS stores everything in Google Drive, the answer is usually no — but that realization comes a few panic-seconds later.',
  },
];

export function ChromeOSUpdateContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>The Chrome OS update prank</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Google\'s clean, fast-updating OS as a convincing prank for Chromebook users everywhere.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 10 }}>
          {USE_CASES.map(({ title, desc }) => (
            <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <span style={{ color: '#22c55e', fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{title}</p>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>How it works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10, marginTop: 16 }}>
          {HOW_IT_WORKS.map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--text)', color: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.55 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ ...headingSx, marginBottom: 20 }}>Complete guide</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px 32px' }}>
          {IN_DEPTH.map(({ title, body }) => (
            <div key={title}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <ContentRelatedTools tools={[
        { slug: 'windows-10-update', name: 'Windows 10 Update' },
        { slug: 'macos-update',      name: 'macOS Update' },
        { slug: 'ubuntu-update',     name: 'Ubuntu Update' },
        { slug: 'broken-screen',     name: 'Broken Screen' },
      ]} />
    </>
  );
}
