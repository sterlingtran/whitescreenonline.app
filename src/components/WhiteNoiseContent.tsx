import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Sleep and falling asleep', desc: 'Mask sudden sounds like traffic, neighbors, and snoring that interrupt sleep' },
  { title: 'Focus and deep work', desc: 'Consistent background noise reduces distracting environmental interruptions' },
  { title: 'Tinnitus relief', desc: 'A neutral noise floor can reduce the perceived loudness of ringing in the ears' },
  { title: 'Infant sleep', desc: 'White noise mimics womb sounds and helps babies fall and stay asleep' },
  { title: 'Open office blocking', desc: 'Mask keyboard noise, phone calls, and colleague conversations while working' },
  { title: 'TV static aesthetic', desc: 'Retro analog TV static look for creative backgrounds and videos' },
  { title: 'Privacy in meetings', desc: 'Play near a door to mask conversations in sensitive discussions' },
  { title: 'Study sessions', desc: 'Consistent audio-visual noise environment for reading and memorization' },
  { title: 'ASMR and visual ambiance', desc: 'Animated static grain creates a calming, textured visual field' },
  { title: 'Photo and video backdrops', desc: 'Static grain screen as a retro backdrop for creative shoots' },
];

const HOW_IT_WORKS = [
  'The animated canvas generates randomized pixel noise at 60 frames per second',
  'Toggle the audio component to add white noise sound alongside the visual',
  'Adjust grain density and speed to control the intensity of the effect',
  'Use fullscreen mode to cover the entire display with animated static',
  'The tool runs entirely in the browser — no downloads or accounts needed',
];

const IN_DEPTH = [
  {
    title: 'White Noise vs Pink Noise vs Brown Noise',
    body: 'White noise contains equal energy at all frequencies — it sounds like a television between channels or a fan on high. Pink noise has more energy in lower frequencies and sounds like steady rain or a waterfall — many sleep researchers consider it more pleasant and effective than white noise. Brown noise (also called red noise) emphasizes even lower frequencies, producing a deep, rumbling sound like thunder or a strong wind. Try each to find which frequency profile helps you most.',
  },
  {
    title: 'The Science of Noise Masking',
    body: 'White noise improves sleep not by being relaxing in itself, but through acoustic masking — raising the ambient noise floor so that sudden sounds (a door closing, a car horn) produce less of a relative volume spike. It is the sudden change in sound level that wakes people, not the absolute volume. A consistent noise baseline reduces these spikes. Research published in the Journal of Caring Sciences found white noise significantly reduced the time to fall asleep in ICU patients.',
  },
  {
    title: 'Visual Static and Focus',
    body: 'The animated grain canvas provides a neutral visual anchor — something for peripheral vision to rest on without engaging conscious attention. Unlike other screensavers or videos, static noise carries no narrative or information, making it cognitively non-demanding. This makes it useful as a secondary display background during focus work: present, but not distracting.',
  },
  {
    title: 'Tinnitus and Hyperacusis',
    body: 'Audiologists sometimes recommend white noise as part of Tinnitus Retraining Therapy (TRT) — the theory being that a neutral broadband noise reduces the brain\'s focus on the phantom tinnitus signal over time. White noise is also used for hyperacusis (sound sensitivity), providing gentle habituation exposure to broadband sound at comfortable volumes. Always consult an audiologist before using sound therapy for clinical hearing conditions.',
  },
  {
    title: 'Analog TV Static: The History',
    body: 'Before digital television replaced analog broadcasts, turning to an unused channel produced the iconic white noise static — caused by thermal noise in the TV receiver circuit and, partially, by cosmic microwave background radiation. This sound and image became deeply embedded in popular culture, appearing in horror films, sci-fi, and as a symbol of the boundary between the broadcast world and silence. The visual grain is now primarily a nostalgic and aesthetic element.',
  },
  {
    title: 'Using White Noise for Infant Sleep',
    body: 'Newborns spend months surrounded by the constant, loud white noise of the womb — blood flow, heartbeat, and muffled external sounds produce roughly 85 decibels of in-utero noise. The silence of a quiet room is actually foreign and stimulating for newborns. White noise at a moderate volume (50–60 dB, similar to a shower) has been shown in multiple studies to help newborns fall asleep faster and stay asleep longer. Keep the source at least 7 feet from the crib and below 85 dB to protect hearing.',
  },
];

export function WhiteNoiseContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a white noise screen</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          Animated static noise — for sleep, focus, relaxation, and retro aesthetics.
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
        { slug: 'radar-screen',        name: 'Radar Screen' },
        { slug: 'broken-screen',       name: 'Broken Screen' },
        { slug: 'rain-ambient',        name: 'Rain Ambient' },
        { slug: 'particle-system',     name: 'Particle System' },
      ]} />
    </>
  );
}
