import type { MetadataRoute } from 'next';
import { sectors } from '@/src/content/sectors';

export const dynamic = 'force-static';

const baseUrl = 'https://unifi.id';

const staticRoutes = [
  '/',
  '/about',
  '/book-demo',
  '/contact',
  '/partners',
  '/pricing',
  '/privacy',
  '/legal-support',
  '/modern-slavery',
  '/resources',
  '/news',
  '/news/beyond-capacity',
  '/news/data-driven-partnerships',
  '/news/data-driven-security',
  '/news/decarbonisation-funding-post',
  '/news/fireguard-new-era',
  '/news/fireguard-post',
  '/news/future-of-smart-buildings',
  '/news/live-view-post',
  '/news/transforming-fire-safety',
  '/news/3',
  '/news/4',
  '/platform/overview',
  '/roles/ceo',
  '/roles/cfo',
  '/roles/coo',
  '/roles/esg-lead',
  '/roles/facilities',
  '/roles/fire-safety-lead',
  '/roles/security-head',
  '/sectors',
  '/sectors/hub',
  '/solutions/hub',
  '/solutions/fireguard',
  '/solutions/insurelink',
  '/energy/hub',
  '/energy/carbon-reporting',
  '/energy/carbon-action-plan',
  '/energy/contact',
  '/energy/energy-club',
  '/energy/funding-options',
  '/energy/monitoring',
  '/energy/monitoring/energy-clamp-meters',
  '/energy/certificates/non-domestic-epc',
  '/energy/certificates/display-energy-certificates',
  '/energy/survey',
  '/energy/team',
  '/energy/technology',
  '/energy/the-energy-trap',
];

const sectorRoutes = sectors.filter((sector) => !sector.comingSoon).map((sector) => `/sectors/${sector.slug}`);

// Energy Solutions pages carry the search terms the site most wants to rank for.
const priorityRoutes = new Set([
  '/energy/hub',
  '/energy/carbon-reporting',
  '/energy/monitoring',
  '/energy/monitoring/energy-clamp-meters',
  '/energy/certificates/non-domestic-epc',
  '/energy/certificates/display-energy-certificates',
  '/energy/technology',
  '/energy/funding-options',
]);

// The site is exported with trailing slashes, so list the final URLs rather than ones that redirect.
const withTrailingSlash = (route: string) => (route.endsWith('/') ? route : `${route}/`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [...staticRoutes, ...sectorRoutes].map((route) => ({
    url: `${baseUrl}${withTrailingSlash(route)}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : priorityRoutes.has(route) ? 0.9 : 0.6,
  }));
}
