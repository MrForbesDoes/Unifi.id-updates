import type { Metadata } from 'next';
import CarbonReportingClient from './CarbonReportingClient';

const description =
  'Carbon reporting and action planning for councils, schools and academy trusts. Through our partnership with TrackZero, Unifi.id brings carbon data, actions and progress into one structured platform.';

export const metadata: Metadata = {
  title: {
    absolute: 'Carbon Reporting for Councils, Schools and Academy Trusts | unifi.id',
  },
  description,
  keywords: [
    'carbon reporting',
    'carbon reporting for councils',
    'school carbon reporting',
    'academy trust carbon reporting',
    'TrackZero',
    'climate action plan',
    'unifi.id',
  ],
  alternates: {
    canonical: 'https://unifi.id/energy/carbon-reporting',
  },
  openGraph: {
    title: 'Carbon Reporting for Councils, Schools and Academy Trusts | unifi.id',
    description,
    url: 'https://unifi.id/energy/carbon-reporting',
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function CarbonReportingPage() {
  return <CarbonReportingClient />;
}
