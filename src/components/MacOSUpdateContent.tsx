import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Pranking Mac users', desc: 'Works best on Mac owners — the Apple aesthetic is instantly recognizable to them' },
  { title: 'Apple fanboy trolling', desc: 'A timely gag for tech-enthusiast friends during a new macOS release season' },
  { title: 'Office pranks on designers', desc: 'Designers and creatives skew heavily Mac — the perfect target audience' },
  { title: 'Film and video props', desc: 'Period-accurate Mac screen for any production needing an Apple computer scene' },
  { title: 'Tech presentation humor', desc: 'Open at the start of a presentation for a self-aware Apple-user joke' },
  { title: 'April Fools — timed to macOS releases', desc: 'Time the prank for September/October when real macOS updates ship' },
  { title: 'macOS name discussion starter', desc: 'Apple\'s OS names (Big Sur, Monterey, Ventura) are inherently conversation-worthy' },
  { title: 'Escape room tech props', desc: 'Mac update screen as a prop in modern office or heist-themed rooms' },
  { title: 'Streamer content', desc: 'Fake a macOS update mid-stream for comedic effect with Mac-user audiences' },
  { title: 'Cross-platform ribbing', desc: 'The classic Windows vs Mac rivalry prank — show a Mac updating on a PC' },
];

const HOW_IT_WORKS = [
  'The full-screen display replicates the authentic macOS system update interface',
  'Apple-style progress bar and system update typography render precisely',
  'A realistic update message and macOS version number complete the illusion',
  'Set your preferred completion duration to control how long the prank runs',
  'Close the browser tab to reveal the unaffected machine instantly',
];

const IN_DEPTH = [
  {
    title: 'macOS: A Brief History',
    body: 'Apple\'s macOS (formerly Mac OS X) has used California geography for its naming convention since macOS 10.9 Mavericks in 2013. Before that, Mac OS X releases were named after big cats: Cheetah, Puma, Jaguar, Panther, Tiger, Leopard, Snow Leopard, Lion, and Mountain Lion (10.0–10.8, 2001–2012). California locations include Yosemite, El Capitan, Sierra, High Sierra, Mojave, Catalina, Big Sur, Monterey, Ventura, Sonoma, and Sequoia. The naming system has been praised for giving releases a geographic identity rather than version-number anonymity.',
  },
  {
    title: 'macOS Update Experience',
    body: 'macOS updates are delivered through the Software Update mechanism in System Preferences (System Settings in macOS Ventura and later). Major updates take 30–90 minutes and require a restart. The update screen — dark background, Apple logo, progress bar, and status message — is clean and characteristically Apple: minimal text, clear visual hierarchy, no unnecessary information. The process is significantly more reliable than Windows updates but still generates its share of frustration when a large update interrupts a workflow.',
  },
  {
    title: 'Apple Silicon and Update Speed',
    body: 'Macs with Apple Silicon (M1, M2, M3, M4) update significantly faster than Intel Macs — the integrated architecture means the system installer does not need to perform the same driver and firmware reconciliation that Intel Macs require. A typical major macOS update on Apple Silicon takes 15–25 minutes; Intel Macs often run 40–70 minutes for equivalent updates. This speed difference means the "how long will this take?" panic of the prank is more acute on users with older Intel machines who have real-world update trauma.',
  },
  {
    title: 'Mac vs PC: The Prank Demographic',
    body: 'The Mac user update prank is particularly effective because Mac users tend to be more emotionally attached to their machines than PC users — the Mac is often a lifestyle purchase, not just a utility. Mac users are more likely to have a strong reaction to an unexpected update interrupting their workflow because their relationship with the machine is more personal. The prank also plays on the Mac/PC rivalry: showing a macOS update is a subtle nod to the cultural dynamics between platforms.',
  },
  {
    title: 'macOS Security Update Behavior',
    body: 'In recent macOS versions, Apple introduced Rapid Security Response — small, targeted security patches that can be applied without a full restart, taking only a few minutes. These appear as small downloads in System Preferences and complete with a quick reboot. They are distinct from the full macOS version updates that require the longer update screen experience. The prank replicates the full update experience — which takes longer and feels more significant — rather than the rapid security response.',
  },
  {
    title: 'Cross-Platform Computing Humor',
    body: 'Mac vs PC humor has been a fixture of tech culture since Apple\'s famous "Get a Mac" ad campaign (2006–2009) featuring Justin Long as Mac and John Hodgman as PC. The campaign ran 66 ads and defined the personality narratives of both platforms for a generation of users. Today the rivalry is less sharp — Apple Silicon\'s performance has earned respect from former PC loyalists — but the cultural memory of the rivalry is deep enough that Mac/PC jokes retain strong recognition and comedic currency.',
  },
];

export function MacOSUpdateContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>The macOS update prank</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Apple-style precision applied to the art of pranking Mac users everywhere.
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
        { slug: 'ubuntu-update',     name: 'Ubuntu Update' },
        { slug: 'chromeos-update',   name: 'Chrome OS Update' },
        { slug: 'bsod',              name: 'Blue Screen of Death' },
      ]} />
    </>
  );
}
