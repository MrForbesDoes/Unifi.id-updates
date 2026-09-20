import type { Metadata } from 'next';
import EnergyClampMetersClient from './EnergyClampMetersClient';

const description =
  'See where fixed electrical loads are using energy. Unifi.id Energy Clamp Meters provide circuit-level energy, cost and emissions data for non-domestic estates.';

export const metadata: Metadata = {
  title: {
    absolute: 'Energy Clamp Meters | Circuit-Level Energy Monitoring | unifi.id',
  },
  description,
  keywords: [
    'energy clamp meters',
    'circuit-level energy monitoring',
    'commercial building energy monitoring',
    'unifi.id',
  ],
  alternates: {
    canonical: 'https://unifi.id/energy/monitoring/energy-clamp-meters',
  },
  openGraph: {
    title: 'Energy Clamp Meters | Circuit-Level Energy Monitoring | unifi.id',
    description,
    url: 'https://unifi.id/energy/monitoring/energy-clamp-meters',
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function EnergyClampMetersPage() {
  return <EnergyClampMetersClient />;
}
