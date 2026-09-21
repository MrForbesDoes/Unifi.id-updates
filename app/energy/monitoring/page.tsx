import type { Metadata } from 'next';
import JsonLd from '@/src/components/JsonLd';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/src/lib/schema';
import EnergyMonitoringClient from './EnergyMonitoringClient';

const title = "Energy Monitoring | Portfolio, Circuit and Appliance Level | unifi.id";
const description =
  "Energy monitoring at portfolio, circuit and appliance level. TrackZero reporting, Energy Clamp Meters and Smart Sockets show which circuits, systems and appliances use your energy, before and after an upgrade.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: ["energy monitoring", "commercial energy monitoring", "energy monitoring system", "building energy monitoring", "sub-metering", "circuit level energy monitoring", "energy management for schools", "unifi.id"],
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
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            "name": "Energy monitoring",
            "serviceType": "Energy monitoring and measurement",
            "audiences": [
              "Local authorities",
              "Schools and academy trusts",
              "Universities",
              "Commercial estates"
            ],
            "alternateNames": [
              "Commercial energy monitoring",
              "Building energy monitoring"
            ],
            "description": "Energy monitoring at portfolio, circuit and appliance level. TrackZero reporting, Energy Clamp Meters and Smart Sockets show which circuits, systems and appliances use your energy, before and after an upgrade.",
            "path": "/energy/monitoring/"
          }),
          buildBreadcrumbSchema([{"name": "Home", "path": "/"}, {"name": "Energy Solutions", "path": "/energy/hub/"}, {"name": "Energy Monitoring", "path": "/energy/monitoring/"}]),
        ]}
      />
      <EnergyMonitoringClient />
    </>
  );
}
