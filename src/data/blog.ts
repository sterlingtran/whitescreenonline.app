export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;          // ISO YYYY-MM-DD
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
    readingTime: 8,
    tags: ['productivity', 'focus', 'work from home', 'pomodoro'],
    relatedTools: [
      { slug: 'pomodoro-timer',     name: 'Pomodoro Timer' },
      { slug: 'focus-screen',       name: 'Focus Screen' },
      { slug: 'white-noise',        name: 'White Noise' },
      { slug: 'meditation-breather',name: 'Meditation Breather' },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}
