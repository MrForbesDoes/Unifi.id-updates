import type { Metadata } from 'next';
import CarbonActionPlanClient from './CarbonActionPlanClient';

export const metadata: Metadata = {
  title: 'Carbon Action Plan and Carbon Reporting',
  description:
    'Create a carbon action plan with clearer carbon reporting, funded upgrades, and practical delivery support from Unifi.id.',
  keywords: ['carbon action plan', 'carbon reporting', 'decarbonisation plan', 'unifi.id'],
  alternates: {
    canonical: 'https://unifi.id/energy/carbon-action-plan',
  },
  openGraph: {
    title: 'Carbon Action Plan and Carbon Reporting | unifi.id',
    description:
      'Create a carbon action plan with clearer carbon reporting, funded upgrades, and practical delivery support from Unifi.id.',
    url: 'https://unifi.id/energy/carbon-action-plan',
  },
};

export default function CarbonActionPlanPage() {
  return <CarbonActionPlanClient />;
}
