import type { Metadata } from 'next';
import JsonLd from '@/src/components/JsonLd';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/src/lib/schema';
import EnergyClampMetersClient from './EnergyClampMetersClient';

const description =
  'See where fixed electrical loads are using energy. Unifi.id Energy Clamp Meters provide circuit-level energy, cost and emissions data for non-domestic estates.';

export const metadata: Metadata = {
  title: {
    absolute: 'Energy Clamp Meters | Circuit-Level Energy Monitoring | unifi.id',
  },
  description,
  keywords: ["energy clamp meters", "clamp meter energy monitoring", "sub-metering", "sub metering system", "circuit level energy monitoring", "commercial energy monitoring system", "energy monitoring for universities", "unifi.id"],
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
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            "name": "Energy Clamp Meters",
            "serviceType": "Circuit-level energy monitoring and sub-metering",
            "audiences": [
              "Commercial estates",
              "Universities",
              "Local authorities",
              "Schools and academy trusts"
            ],
            "alternateNames": [
              "Circuit-level energy monitoring",
              "Electrical sub-metering"
            ],
            "description": "See where fixed electrical loads are using energy. Unifi.id Energy Clamp Meters provide circuit-level energy, cost and emissions data for non-domestic estates.",
            "path": "/energy/monitoring/energy-clamp-meters/"
          }),
          buildBreadcrumbSchema([{"name": "Home", "path": "/"}, {"name": "Energy Solutions", "path": "/energy/hub/"}, {"name": "Energy Monitoring", "path": "/energy/monitoring/"}, {"name": "Energy Clamp Meters", "path": "/energy/monitoring/energy-clamp-meters/"}]),
        ]}
      />
      <EnergyClampMetersClient />
    </>
  );
}
