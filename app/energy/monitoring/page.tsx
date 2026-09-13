import type { Metadata } from 'next';
import EnergyMonitoringClient from './EnergyMonitoringClient';

const title = 'Energy Monitoring | unifi.id';
const description =
  'A utility bill rarely shows which circuits, systems or appliances used your energy. Unifi.id combines organisational reporting, circuit-level monitoring and appliance-level intelligence to turn overall consumption into actionable evidence.';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: 'https://unifi.id/energy/monitoring',
  },
  openGraph: {
    title,
    description,
    url: 'https://unifi.id/energy/monitoring',
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function EnergyMonitoring() {
  return <EnergyMonitoringClient />;
}
