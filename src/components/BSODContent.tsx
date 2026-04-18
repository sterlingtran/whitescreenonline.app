import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Office pranks', desc: 'The classic desk prank — leave running on a coworker\'s screen before a meeting' },
  { title: 'April Fools Day', desc: 'One of the most recognizable and effective tech pranks available' },
  { title: 'Avoiding boring calls', desc: 'Fake a system crash to escape a meeting you cannot reschedule out of' },
  { title: 'Streamer entertainment', desc: 'Pull the fake BSOD prank live on stream for viewer reactions' },
  { title: 'IT department humor', desc: 'The BSOD is practically the official joke of systems administrators everywhere' },
  { title: 'Halloween party tech decor', desc: 'Display on monitors around a party for a haunted tech atmosphere' },
  { title: 'Film and video props', desc: 'Use as a background screen in productions requiring a crashed computer' },
  { title: 'Tech support roleplay', desc: 'Training scenario for diagnosing and responding to stop errors' },
  { title: 'Classroom demonstrations', desc: 'Discuss crash dump analysis and kernel panic recovery with a live example' },
  { title: 'Content thumbnails', desc: 'Screenshot for tech-disaster-themed YouTube or blog thumbnails' },
];

const HOW_IT_WORKS = [
  'The full-screen blue background mimics the authentic Windows stop error display',
  'A realistic stop error code and crash message is displayed prominently',
  'Optional progress bar simulates "collecting information" as Windows does',
  'Customizable error codes and messages make the prank more targeted',
  'Close the browser tab or press Escape to instantly reveal the unharmed computer',
];

const IN_DEPTH = [
  {
    title: 'What the BSOD Actually Is',
    body: 'The Blue Screen of Death (officially: Blue Screen, or BSoD) is a stop error displayed by the Windows kernel when it encounters a critical error from which it cannot recover safely. Rather than risk data corruption, the operating system halts entirely and displays diagnostic information: a stop error code (e.g., IRQL_NOT_LESS_OR_EQUAL, MEMORY_MANAGEMENT), memory addresses, and driver information. The blue screen has been part of Windows since version 3.0 in 1990.',
  },
  {
    title: 'The Evolution of the Blue Screen',
    body: 'Windows 95 and XP featured white text on bright blue — dense with technical information. Windows 8 introduced the modern design: a clean blue gradient, a large frowning face emoticon, and a simplified "Your PC ran into a problem" message. Windows 10 added a QR code that links to Microsoft support documentation. The emotional shift from information-dense to user-friendly reflects broader changes in Microsoft\'s UX philosophy — and made the modern BSOD oddly charming.',
  },
  {
    title: 'Common Real Stop Error Codes',
    body: 'IRQL_NOT_LESS_OR_EQUAL (0x0000000A) occurs when a kernel process accesses memory at an inappropriate interrupt request level — often caused by faulty drivers. PAGE_FAULT_IN_NONPAGED_AREA (0x00000050) indicates the system tried to access a memory page that does not exist. CRITICAL_PROCESS_DIED (0x000000EF) fires when a critical system process terminates unexpectedly. SYSTEM_SERVICE_EXCEPTION (0x0000003B) is often caused by antivirus software or outdated drivers.',
  },
  {
    title: 'Why the Prank Stays Effective',
    body: 'The BSOD prank persists because the blue screen remains genuinely feared by PC users. Even experienced users have a moment of panic before realizing it\'s not real — the Pavlovian response to seeing blue plus white text is years of conditioning. The prank works best on Windows users who have previously experienced a real BSOD and remember the helpless feeling. Mac users tend to be less affected — they know blue stop errors are not a macOS thing.',
  },
  {
    title: 'Diagnosing Real Blue Screens',
    body: 'If you are actually troubleshooting a Windows stop error: note the error code and check Event Viewer (eventvwr.msc) for System error logs. The minidump file in C:\\Windows\\Minidump contains crash information readable with WinDbg. Common causes are driver conflicts (check recently installed or updated drivers), faulty RAM (run Windows Memory Diagnostic), overheating (check CPU/GPU temperatures), or failing storage (run chkdsk). Most BSODs are driver or hardware issues, not operating system corruption.',
  },
  {
    title: 'macOS and Linux Equivalents',
    body: 'macOS has a "kernel panic" — a grey or black screen with multilingual "You need to restart your computer" text. Linux systems display a kernel panic as text on the console, often with a call trace showing exactly which code path triggered the error. Both are conceptually identical to the Windows BSOD — a hard halt to prevent data corruption. Neither has the same cultural cachet as the Windows blue screen, which remains the universal symbol of catastrophic computer failure.',
  },
];

export function BSODContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why the BSOD prank never gets old</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          The most iconic tech prank — realistic, reversible, and always gets a reaction.
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
        { slug: 'hacker-typer',      name: 'Hacker Typer' },
        { slug: 'white-noise',       name: 'White Noise' },
        { slug: 'broken-screen',     name: 'Broken Screen' },
        { slug: 'windows-10-update', name: 'Windows 10 Update' },
      ]} />
    </>
  );
}
