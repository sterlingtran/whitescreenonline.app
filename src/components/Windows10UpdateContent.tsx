import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Office desk pranks', desc: 'The most universally recognized update screen — works on virtually any Windows user' },
  { title: 'April Fools Day', desc: 'A prank with perfect timing — trigger it Monday morning when updates feel plausible' },
  { title: 'Avoiding an unwanted meeting', desc: 'Excuse yourself from a meeting that is running long with a "sudden update"' },
  { title: 'Streamer entertainment', desc: 'Fake a mid-stream system update for dramatic effect and viewer reactions' },
  { title: 'Tech support humor', desc: 'The Windows update screen is practically sacred meme material in IT departments' },
  { title: 'Classroom demonstrations', desc: 'Show students what the update screen looks like during a Windows troubleshooting lesson' },
  { title: 'Conversation starter', desc: 'Leave running on a laptop at a coffee shop and watch reactions from passersby' },
  { title: 'Film and video props', desc: 'Realistic Windows update background for any production needing a tech scene' },
  { title: 'Halloween tech decor', desc: 'A frozen update at 99% is a specific kind of horror that every Windows user understands' },
  { title: 'Escape room props', desc: 'A "stuck Windows update" mission adds authentic tech frustration to puzzle scenarios' },
];

const HOW_IT_WORKS = [
  'The full-screen display mimics the authentic Windows 10 update interface exactly',
  'An animated progress bar advances from 0% to 100% over your chosen duration',
  'Familiar phase messages ("Working on updates...", "Getting things ready") cycle through',
  'Set a custom completion time from 1 minute to over an hour for maximum commitment',
  'Close the browser tab to instantly end the prank and reveal the real desktop',
];

const IN_DEPTH = [
  {
    title: 'Why Windows Updates Are Universally Dreaded',
    body: 'Windows 10 updates have a reputation — sometimes deserved — for interrupting work at the worst possible moments, taking unpredictable amounts of time, and occasionally causing problems. The Windows Update experience has been a consistent pain point for Windows users since the forced-update policies of Windows 10 in 2015–2016. This universal shared frustration is precisely what makes the fake update prank so effective: the victim\'s reaction is grounded in real accumulated annoyance, not just surprise.',
  },
  {
    title: 'The Psychology of the Progress Bar',
    body: 'Progress bars that pause or move erratically cause disproportionate frustration compared to bars that move steadily even at the same average speed. Research by Chris Harrison at Carnegie Mellon found that progress bars that accelerate — starting slow and speeding up — feel 11% faster subjectively than linearly progressing bars. The Windows update progress bar is infamous for doing the opposite: moving quickly to 30%, then stalling for extended periods — a psychologically optimized frustration machine.',
  },
  {
    title: 'Windows Update History',
    body: 'Windows XP used Windows Update as an opt-in web service. Vista introduced Windows Update as a built-in control panel. Windows 7 allowed scheduling and deferral. Windows 10 made updates mandatory for Home edition users — a controversial decision that prevented users from delaying critical security patches but also forced reboots at inconvenient times. Windows 11 extended the update experience while adding more granular scheduling options and improved reliability.',
  },
  {
    title: 'Setting Up the Perfect Prank',
    body: 'The most effective Windows 10 update prank requires three elements: timing, commitment, and positioning. Timing means deploying it early in the morning (when updates seem plausible) or right before an important meeting. Commitment means setting a 30–60 minute duration so the victim has significant time to worry before checking. Positioning means leaving the laptop somewhere the victim will find it naturally — not handing it to them, which invites immediate scrutiny.',
  },
  {
    title: 'Fake Updates in Popular Culture',
    body: 'The "is this a real update?" panic has spawned countless memes, Reddit posts, and tweets. The Windows update experience is such a universal shared frustration that content about it consistently performs well across demographics. The fake update prank genre has its own dedicated community of tools and videos — it remains one of the most enduring tech pranks precisely because Windows updates are a shared cultural experience that spans age, profession, and technical expertise.',
  },
  {
    title: 'Real Windows Update Troubleshooting',
    body: 'If you are troubleshooting an actual stuck Windows update: check Windows Update history in Settings → Update & Security → Windows Update → View Update History. Stuck updates are often caused by corrupted update cache — running the Windows Update Troubleshooter or clearing the SoftwareDistribution folder resolves most cases. Check the Windows Update log at C:\\Windows\\Logs\\WindowsUpdate for error codes. Most "stuck" updates are actually still progressing at a slow but functional pace.',
  },
];

export function Windows10UpdateContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why the Windows 10 update prank always works</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          The most universally recognized update screen — realistic, reversible, and guaranteed to land.
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
        { slug: 'windows-xp-update', name: 'Windows XP Update' },
        { slug: 'macos-update',      name: 'macOS Update' },
        { slug: 'ubuntu-update',     name: 'Ubuntu Update' },
        { slug: 'bsod',              name: 'Blue Screen of Death' },
      ]} />
    </>
  );
}
