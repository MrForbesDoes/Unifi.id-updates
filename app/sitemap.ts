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
  '/roles',
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
  '/energy/survey',
  '/energy/team',
  '/energy/technology',
  '/energy/the-energy-trap',
];

const sectorRoutes = sectors.filter((sector) => !sector.comingSoon).map((sector) => `/sectors/${sector.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...sectorRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
