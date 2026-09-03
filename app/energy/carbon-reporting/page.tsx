import type { Metadata } from 'next';
import CarbonReportingClient from './CarbonReportingClient';

export const metadata: Metadata = {
  title: 'Carbon accounting and reporting for UK schools',
  description:
    'Unifi.id helps UK schools and multi-academy trusts track emissions, report progress, and support their Climate Action Plan.',
  keywords: ['carbon reporting', 'carbon accounting', 'school carbon reporting', 'unifi.id'],
  alternates: {
    canonical: 'https://unifi.id/energy/carbon-reporting',
  },
  openGraph: {
    title: 'Carbon accounting and reporting for UK schools | unifi.id',
    description:
      'Unifi.id helps UK schools and multi-academy trusts track emissions, report progress, and support their Climate Action Plan.',
    url: 'https://unifi.id/energy/carbon-reporting',
  },
};

export default function CarbonReportingPage() {
  return <CarbonReportingClient />;
}
