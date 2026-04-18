import React from 'react';
import { ContentRelatedTools } from './ContentRelatedTools';

const USE_CASES = [
  { title: 'Coffee shops and cafés', desc: 'Present customers with a clean tipping interface directly on a counter tablet' },
  { title: 'Food trucks', desc: 'No POS hardware required — any browser-enabled tablet becomes a tip screen' },
  { title: 'Restaurants and bars', desc: 'Show a professional tipping prompt at the end of a counter order' },
  { title: 'Service counters', desc: 'Hair salons, nail studios, and spas can prompt for tips without awkward conversation' },
  { title: 'Popup and market stalls', desc: 'Temporary setups get professional tipping without a dedicated POS system' },
  { title: 'Event catering', desc: 'Bartenders and food stations at events can accept tips without cash-only jars' },
  { title: 'Retail with service add-ons', desc: 'Prompt for tips on alteration, assembly, or installation services at checkout' },
  { title: 'Tour guides and operators', desc: 'Present a discrete tip prompt to guests at the end of a tour or experience' },
  { title: 'Freelancers taking in-person payment', desc: 'Add a tip prompt to Venmo, Square, or any card reader workflow' },
  { title: 'No app, no account', desc: 'Works on any browser — no POS subscription or hardware required' },
];

const HOW_IT_WORKS = [
  'Enter the subtotal amount for the transaction',
  'Set up to three tip percentage options (e.g. 15%, 20%, 25%)',
  'Hand the tablet to the customer — they tap their chosen tip',
  'The selected tip amount and new total are displayed clearly',
  'Reset for the next customer with one tap',
];

const IN_DEPTH = [
  {
    title: 'Why a Dedicated Tip Screen Increases Tips',
    body: 'Research consistently shows that digital tip prompts increase both tip frequency and average tip size compared to cash tip jars or no prompt at all. The act of presenting a screen with pre-calculated options removes the mental friction of calculating a percentage and normalizes tipping as the expected behavior. Square and Toast have both reported that businesses using digital tip prompts see 20–30% increases in tip rates within the first month.',
  },
  {
    title: 'Setting the Right Percentages',
    body: 'The choice of tip options shapes customer behavior. A classic setup is 15%, 18%, 20% — the middle option becomes the default for most customers. Cafés and counter service typically use 15%, 20%, 25% since the base check is lower. Fine dining may anchor higher at 18%, 20%, 25%. Avoid starting below 15% as it anchors the minimum expectation too low. Always include a "custom amount" option for customers who want to tip differently.',
  },
  {
    title: 'Works Without a POS System',
    body: 'Commercial POS systems like Square, Toast, and Clover include built-in tip prompts — but they require hardware, monthly fees, and setup. This tip screen works on any browser on any device you already own — an iPad, a cheap Android tablet, or even a laptop angled toward the customer. For small businesses, pop-ups, and freelancers who only need occasional in-person tip collection, a free browser-based solution is far more practical.',
  },
  {
    title: 'Creating a Low-Pressure Customer Experience',
    body: 'Counter service tipping can feel socially awkward when the staff member is watching the customer decide. A well-designed tip screen normalizes the interaction by making it a private transaction between the customer and the screen. The clean interface signals professionalism and reduces the guilt or pressure a cash jar can create. Customers who decline to tip on a digital screen feel less observed than when they push a physical jar aside.',
  },
  {
    title: 'Tablet Positioning and Workflow',
    body: 'Mount the tablet at a natural arm-extension distance on the customer side of the counter, slightly angled upward for comfortable viewing. Use a tablet stand that prevents the screen from tipping — customers need to tap with some force. Run the browser in full-screen mode (F11) to eliminate browser chrome and create an app-like experience. If the counter is shared, use the reset button between customers to clear the previous transaction total.',
  },
  {
    title: 'Legal Considerations for Service Charges',
    body: 'In the United States, tips collected through a digital prompt are legally considered voluntary gratuities, not service charges, provided customers are not required to pay them. Mandatory service charges (automatically added to the bill) have different wage and tax implications. Consult local labor regulations regarding tip pooling, tip credit wages, and disclosure requirements — rules vary significantly by state and municipality.',
  },
];

export function TipScreenContent() {
  const headingSx: React.CSSProperties = {
    fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6,
  };

  return (
    <>
      <section style={{ marginBottom: 44 }}>
        <h2 style={headingSx}>Why use a digital tip screen</h2>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>
          A professional tipping interface for any counter, any device — no POS required.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: 10,
        }}>
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
        { slug: 'white-screen',        name: 'White Screen' },
        { slug: 'custom-color-screen', name: 'Custom Color Screen' },
        { slug: 'focus-screen',        name: 'Focus Timer' },
        { slug: 'countdown-timer',     name: 'Countdown Timer' },
      ]} />
    </>
  );
}
