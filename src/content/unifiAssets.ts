export const unifiAssets = {
  logo: '/unifi-assets/logo.png',
  icons: [
    '/unifi-assets/cropped-icon-Transparent-small--180x180.png',
    '/unifi-assets/cropped-icon-Transparent-small--192x192.png',
    '/unifi-assets/cropped-icon-Transparent-small--270x270.png',
    '/unifi-assets/cropped-icon-Transparent-small--32x32.png',
  ],

  // Hero imagery (top-level hero-*.jpg files from the "Unifi Site Images" folder)
  photos: [
    '/unifi-assets/hero-1a.webp',
    '/unifi-assets/hero-1b.webp',
    '/unifi-assets/hero-1c.webp',
    '/unifi-assets/hero-1d.webp',
    '/unifi-assets/hero-2.webp',
    '/unifi-assets/hero-3.webp',
    '/unifi-assets/hero-4.webp',
    '/unifi-assets/hero-5.webp',
    '/unifi-assets/hero-6.webp',
    '/unifi-assets/hero-7.webp',
    '/unifi-assets/hero-8.webp',
  ],

  // Card imagery (optimized webp)
  cards: [
    '/unifi-assets/card-1.webp',
    '/unifi-assets/card-2.webp',
    '/unifi-assets/card-3.webp',
    '/unifi-assets/card-4.webp',
    '/unifi-assets/card-5.webp',
    '/unifi-assets/card-6.webp',
    '/unifi-assets/card-7.webp',
    '/unifi-assets/card-8.webp',
    '/unifi-assets/card-9.webp',
    '/unifi-assets/card-10.webp',
    '/unifi-assets/card-11.webp',
    '/unifi-assets/card-12.webp',
  ],

  misc: [
    // A few additional photography options from the extracted folders (avoid black & white shots)
    '/unifi-assets/canary/photo-1692890528796-4b3fb17ec33b.webp',
    '/unifi-assets/canary/photo-1694902304056-b4ba1412d7b7.webp',
    '/unifi-assets/canary/photo-1694980876919-dbec5edba9a2.webp',
    '/unifi-assets/canary/photo-1696074010622-65271d2f423b.webp',
    '/unifi-assets/corporate/photo-1521737711867-e3b97375f902.webp',
    '/unifi-assets/corporate/photo-1556761175-4b46a572b786.webp',
    '/unifi-assets/corporate/photo-1600880292203-757bb62b4baf.webp',
    '/unifi-assets/corporate/photo-1590650046871-92c887180603.webp',
  ],
};


// One unique photo per page. Heroes are assigned here explicitly rather than hashed into a
// small pool, which previously put the same image on up to seven pages.
export const imageBySeed: Record<string, string> = {
  'about': '/unifi-assets/corporate/photo-1558959356-2f36c7322d3b.webp',
  'book-demo-hero': '/unifi-assets/corporate/photo-1554902843-260acd0993f8.webp',
  'carbon-action-plan': '/unifi-assets/corporate/photo-1590402494682-cd3fb53b1f70.webp',
  'contact-hero': '/unifi-assets/corporate/photo-1560264357-8d9202250f21.webp',
  'cortex-platform': '/unifi-assets/canary/photo-1691766383671-a23baffc63a1.webp',
  'display-energy-certificates': '/unifi-assets/card-1.webp',
  'energy-clamp-meters': '/unifi-assets/card-3.webp',
  'energy-club': '/unifi-assets/corporate/photo-1557804506-d8017c1e4856.webp',
  'energy-contact': '/unifi-assets/corporate/photo-1610387853988-7a1623efb207.webp',
  'energy-funding': '/unifi-assets/card-11.webp',
  'energy-hub': '/unifi-assets/card-6.webp',
  'energy-monitoring': '/unifi-assets/corporate/photo-1538688273852-e29027c0c176.webp',
  'energy-survey': '/unifi-assets/card-5.webp',
  'energy-team': '/unifi-assets/hero-3.webp',
  'energy-technology': '/unifi-assets/card-12.webp',
  'energy-trap': '/unifi-assets/card-10.webp',
  'fireguard': '/unifi-assets/corporate/photo-1632923945886-9974836e0706.webp',
  'insurelink': '/unifi-assets/canary/photo-1694901935650-474295eb9e9d.webp',
  'legal-support-hero': '/unifi-assets/corporate/photo-1496681859237-6039cd585c4e.webp',
  'news-3': '/unifi-assets/corporate/photo-1507206130118-b5907f817163.webp',
  'news-4': '/unifi-assets/corporate/photo-1508780709619-79562169bc64.webp',
  'news-beyond-capacity': '/unifi-assets/corporate/photo-1510074377623-8cf13fb86c08.webp',
  'news-data-driven-partnerships': '/unifi-assets/corporate/photo-1577415124269-fc1140a69e91.webp',
  'news-data-driven-security': '/unifi-assets/corporate/photo-1512428559087-560fa5ceab42.webp',
  'news-decarbonisation-funding-post': '/unifi-assets/canary/photo-1759229582318-36e1986d0d80.webp',
  'news-fireguard-new-era': '/unifi-assets/canary/photo-1701285138787-70ed060677da.webp',
  'news-fireguard-post': '/unifi-assets/canary/photo-1714217592126-49103112dd09.webp',
  'news-future-of-smart-buildings': '/unifi-assets/canary/photo-1720713790402-46a074e0bfed.webp',
  'news-hero': '/unifi-assets/canary/photo-1701642792376-0faadfb0d13c.webp',
  'news-live-view-post': '/unifi-assets/canary/photo-1695063199997-191266d4ab15.webp',
  'news-transforming-fire-safety': '/unifi-assets/canary/photo-1696535958472-16e647f6028a.webp',
  'non-domestic-epc': '/unifi-assets/hero-7.webp',
  'partners-hero': '/unifi-assets/corporate/photo-1513530534585-c7b1394c6d51.webp',
  'resources-hero': '/unifi-assets/corporate/photo-1598979072814-fa8af5d80de8.webp',
  'role-ceo': '/unifi-assets/corporate/photo-1603202662747-00e33e7d1468.webp',
  'role-cfo': '/unifi-assets/corporate/photo-1606857521015-7f9fcf423740.webp',
  'role-coo': '/unifi-assets/corporate/photo-1616587896595-51352538155b.webp',
  'role-esg-lead': '/unifi-assets/corporate/photo-1622674777904-386b3ef30c4a.webp',
  'role-facilities': '/unifi-assets/corporate/photo-1622675205169-901710ac8643.webp',
  'role-fire-safety-lead': '/unifi-assets/corporate/photo-1630673394533-b13bef31abf2.webp',
  'role-security-head': '/unifi-assets/canary/photo-1694965383009-d2ae2750b7cc.webp',
  'sectors-hero': '/unifi-assets/corporate/photo-1483058712412-4245e9b90334.webp',
  'solutions-hub': '/unifi-assets/hero-2.webp',
  'trackzero-schools-hero': '/unifi-assets/hero-6.webp',
};

export type PlaceholderKind = 'hero' | 'card' | 'logo';

export function withBasePath(path: string) {
  // GitHub Pages serves this repo under /<repo>/, so absolute /unifi-assets/... URLs 404.
  // We inject NEXT_PUBLIC_BASE_PATH during the Pages build to fix asset paths.
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!base) return path;
  const normBase = base.startsWith('/') ? base : `/${base}`;
  // avoid double slashes
  return `${normBase}${path.startsWith('/') ? '' : '/'}${path}`.replace(/\/\/+/, '/');
}

export function pickUnifiPlaceholder(kind: PlaceholderKind, seed: string = 'default') {
  if (kind === 'logo') return withBasePath(unifiAssets.logo);
  if (imageBySeed[seed]) return withBasePath(imageBySeed[seed]);

  const pool =
    kind === 'hero'
      ? unifiAssets.photos
      : kind === 'card'
        ? unifiAssets.cards
        : [...unifiAssets.photos, ...unifiAssets.cards, ...unifiAssets.misc];

  const s = hash(seed);
  return withBasePath(pool[s % pool.length]);
}

function hash(input: string) {
  // tiny deterministic hash
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}
