import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Pranking developer friends', desc: 'Developers and sysadmins who use Ubuntu will have an immediate visceral response' },
  { title: 'Linux community humor', desc: 'The Ubuntu update prank is a niche but deeply appreciated joke in Linux circles' },
  { title: 'Tech team office pranks', desc: 'Engineering offices running Ubuntu servers will recognize this immediately' },
  { title: 'Developer conference laughs', desc: 'Pull up at a tech meetup or conference to instant recognition from the crowd' },
  { title: 'Surprising tech-savvy victims', desc: 'Works well on the people who think they\'re too smart to be pranked' },
  { title: 'Terminal aesthetic enthusiasts', desc: 'The Ubuntu terminal update look is a beloved aesthetic in developer culture' },
  { title: 'DevOps team entertainment', desc: 'Any team that runs apt-get update regularly will appreciate — and panic at — this' },
  { title: 'Linux history demonstrations', desc: 'Show the Ubuntu update interface during discussions about Linux package management' },
  { title: 'Film and tech production props', desc: 'Authentic Linux terminal for any production needing a developer screen' },
  { title: 'CS classroom demonstrations', desc: 'Introduce students to what Linux package updates look like in practice' },
];

const HOW_IT_WORKS = [
  'The screen simulates a terminal-style Ubuntu package update in progress',
  'Scrolling package names and apt-get style output fill the terminal display',
  'Familiar Ubuntu orange/purple color scheme signals Linux authenticity',
  'Progress through "Reading package lists... Building dependency tree..." phases',
  'Close the browser tab to end the simulation and reveal the real system',
];

const IN_DEPTH = [
  {
    title: 'Ubuntu and the apt Package Manager',
    body: 'Ubuntu uses the APT (Advanced Package Tool) package management system, inherited from Debian. The core commands are `sudo apt-get update` (refreshes the package index from repositories) and `sudo apt-get upgrade` (downloads and installs available package updates). The terminal output during an update — "Reading package lists...", "Building dependency tree...", "Calculating upgrade..." followed by a list of packages to be upgraded — is intimately familiar to anyone who manages Ubuntu systems regularly.',
  },
  {
    title: 'Ubuntu\'s Release Naming Conventions',
    body: 'Ubuntu releases follow a version scheme (YY.MM) and alliterative animal adjective names. Released twice yearly, each version gets a name like "Focal Fossa" (20.04), "Jammy Jellyfish" (22.04), "Noble Numbat" (24.04). Long Term Support (LTS) releases, published every two years in April, receive 5 years of standard support and up to 10 years with Extended Security Maintenance. The LTS releases are the most widely deployed in enterprise and server environments.',
  },
  {
    title: 'Why Linux Users Take Updates Seriously',
    body: 'Linux users — particularly those managing servers — treat system updates as genuine security events. Running `apt-get upgrade` on a production server is a deliberate, consequential action, not the passive background download that Windows updates have become. Linux package updates can affect libraries that other software depends on, potentially breaking applications. This means Linux administrators have a more alert, sometimes anxious relationship with the update process — exactly the psychology that makes the Ubuntu prank effective.',
  },
  {
    title: 'The Linux Desktop Experience',
    body: 'Ubuntu offers a graphical Software Updater application as a friendlier alternative to terminal updates, but most experienced Linux users prefer the terminal — it provides more information, allows better control, and runs faster. The terminal update experience has become a cultural touchstone: the rapidly scrolling package list, the dependency resolution messages, the "Do you want to continue? [Y/n]" prompt. These familiar interaction patterns make the fake Ubuntu update immediately recognizable to its target audience.',
  },
  {
    title: 'Ubuntu in Data Centers and Cloud',
    body: 'Canonical reports that Ubuntu is the most widely deployed Linux distribution on public cloud platforms, running the majority of AWS EC2 instances and a large fraction of Google Cloud and Azure workloads. Ubuntu Server is the foundation for countless web servers, databases, containerized applications, and machine learning infrastructure worldwide. The operating system that most people use only as a prank target runs an enormous fraction of the global internet.',
  },
  {
    title: 'apt vs snap: The Modern Ubuntu',
    body: 'Modern Ubuntu (since version 18.04) includes the Snap package manager alongside APT. Snap packages are self-contained application bundles that include all dependencies — similar to macOS app bundles. Snap updates are automatic and run in the background. The coexistence of apt and snap has been controversial in the Ubuntu community: apt packages are preferred by developers for their transparency and control, while snap packages suit casual desktop users who want automatic updates. This friction is itself a popular source of Linux community humor.',
  },
];

export function UbuntuUpdateContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>The Ubuntu Linux update prank</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Terminal-style Linux updates — the niche prank that lands perfectly with developers.
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
        { slug: 'chromeos-update',   name: 'Chrome OS Update' },
        { slug: 'hacker-typer',      name: 'Hacker Typer' },
      ]} />
    </>
  );
}
