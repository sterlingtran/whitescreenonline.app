export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;          // ISO YYYY-MM-DD
  author: string;
  readingTime: number;   // minutes
  tags: string[];
  relatedTools: { slug: string; name: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'phone-screen-as-ring-light',
    title: 'How to Use Your Phone or Laptop Screen as a DIY Ring Light',
    description:
      'Turn any smartphone, tablet, or laptop into a free fill light for video calls, selfies, and portrait photography. Step-by-step guide with color temperature tips.',
    date: '2026-04-10',
    author: 'White Screen Online team',
    readingTime: 6,
    tags: ['lighting', 'video calls', 'photography', 'diy'],
    relatedTools: [
      { slug: 'ring-light',         name: 'Ring Light Simulator' },
      { slug: 'zoom-lighting',      name: 'Zoom Lighting' },
      { slug: 'white-screen',       name: 'White Screen' },
      { slug: 'custom-color-screen',name: 'Custom Color Screen' },
    ],
  },
  {
    slug: 'how-to-test-monitor-dead-pixels',
    title: 'How to Test Your Monitor for Dead Pixels — Free, No Software Required',
    description:
      'Dead pixels, stuck pixels, and hot pixels explained. How to spot them on any screen, run a proper test before your warranty expires, and whether they can be fixed.',
    date: '2026-04-12',
    author: 'White Screen Online team',
    readingTime: 7,
    tags: ['monitors', 'dead pixels', 'display testing', 'tech'],
    relatedTools: [
      { slug: 'dead-pixel-test',    name: 'Dead Pixel Test' },
      { slug: 'white-screen',       name: 'White Screen' },
      { slug: 'black-screen',       name: 'Black Screen' },
      { slug: 'custom-color-screen',name: 'Custom Color Screen' },
    ],
  },
  {
    slug: 'best-focus-tools-working-from-home',
    title: 'The Best Free Browser Tools for Focus and Deep Work (No Install Required)',
    description:
      'Working from home and struggling to concentrate? These free browser tools — Pomodoro timer, focus screen, white noise, and more — build better work habits without installing anything.',
    date: '2026-04-15',
    author: 'White Screen Online team',
    readingTime: 8,
    tags: ['productivity', 'focus', 'work from home', 'pomodoro'],
    relatedTools: [
      { slug: 'pomodoro-timer',     name: 'Pomodoro Timer' },
      { slug: 'focus-screen',       name: 'Focus Screen' },
      { slug: 'white-noise',        name: 'White Noise' },
      { slug: 'meditation-breather',name: 'Meditation Breather' },
    ],
  },
  {
    slug: 'color-temperature-guide',
    title: 'Color Temperature Explained: Warm vs Cool Light for Video Calls and Photography',
    description:
      'What is color temperature and why does it make your video calls look great or terrible? A practical guide to Kelvin, warm vs cool light, and how to choose the right screen color for any situation.',
    date: '2026-04-17',
    author: 'White Screen Online team',
    readingTime: 7,
    tags: ['lighting', 'color temperature', 'video calls', 'photography'],
    relatedTools: [
      { slug: 'zoom-lighting',      name: 'Zoom Lighting' },
      { slug: 'ring-light',         name: 'Ring Light Simulator' },
      { slug: 'custom-color-screen',name: 'Custom Color Screen' },
      { slug: 'rgb-gradient',       name: 'RGB Gradient Light' },
    ],
  },
  {
    slug: 'pomodoro-technique-for-studying',
    title: 'How to Use the Pomodoro Technique for Studying (With a Free Online Timer)',
    description:
      'The Pomodoro Technique works differently for studying than for work tasks. Learn how to adapt the method for different subjects, exam prep, and long reading sessions — with a free timer you can use right now.',
    date: '2026-04-18',
    author: 'White Screen Online team',
    readingTime: 7,
    tags: ['studying', 'pomodoro', 'productivity', 'focus'],
    relatedTools: [
      { slug: 'pomodoro-timer',     name: 'Pomodoro Timer' },
      { slug: 'countdown-timer',    name: 'Countdown Timer' },
      { slug: 'focus-screen',       name: 'Focus Screen' },
      { slug: 'white-noise',        name: 'White Noise' },
    ],
  },
  {
    slug: 'oled-burn-in-screensavers',
    title: 'OLED Burn-In Explained: What Causes It and How Screensavers Help',
    description:
      'OLED screens can develop permanent image retention from static content. Here\'s the science behind why it happens, which use cases are highest risk, and how moving screensavers protect your display.',
    date: '2026-04-18',
    author: 'White Screen Online team',
    readingTime: 8,
    tags: ['OLED', 'burn-in', 'screensavers', 'displays'],
    relatedTools: [
      { slug: 'dvd-screensaver',      name: 'DVD Screensaver' },
      { slug: 'matrix-screensaver',   name: 'Matrix Screensaver' },
      { slug: 'starfield-screensaver',name: 'Starfield Screensaver' },
      { slug: 'particle-system',      name: 'Particle System' },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}
