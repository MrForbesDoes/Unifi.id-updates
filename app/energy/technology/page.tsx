import type { Metadata } from 'next';
import JsonLd from '@/src/components/JsonLd';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/src/lib/schema';
import EnergyTechnologyClient from './EnergyTechnologyClient';

export const metadata: Metadata = {
  title: {
    absolute: "LED Lighting, Heat Pumps and Solar Upgrades | Decarbonisation Technology | unifi.id",
  },
  description: "LED lighting upgrades, heat pumps, HVAC and solar for UK estates. LED typically cuts lighting energy by 50-80% with a 3-7 year payback, subject to site conditions. Funded routes available, subject to eligibility.",
  keywords: ["LED lighting upgrade", "LED lighting for schools", "heat pump installation", "commercial heat pump", "air source heat pump for schools", "HVAC upgrade", "commercial solar panels", "decarbonisation technology", "unifi.id"],
  alternates: {
    canonical: "https://unifi.id/energy/technology",
  },
  openGraph: {
    title: "LED Lighting, Heat Pumps and Solar Upgrades | Decarbonisation Technology | unifi.id",
    description: "LED lighting upgrades, heat pumps, HVAC and solar for UK estates. LED typically cuts lighting energy by 50-80% with a 3-7 year payback, subject to site conditions. Funded routes available, subject to eligibility.",
    url: "https://unifi.id/energy/technology",
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function EnergyTechnology() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            "name": "LED lighting, heat pump, HVAC and solar upgrades",
            "serviceType": "Energy efficiency upgrades",
            "audiences": [
              "Schools and academy trusts",
              "Local authorities",
              "Commercial estates"
            ],
            "alternateNames": [
              "LED lighting upgrades",
              "Heat pump installation",
              "Solar PV installation"
            ],
            "description": "LED lighting upgrades, heat pumps, HVAC and solar for UK estates. LED typically cuts lighting energy by 50-80% with a 3-7 year payback, subject to site conditions. Funded routes available, subject to eligibility.",
            "path": "/energy/technology/"
          }),
          buildBreadcrumbSchema([{"name": "Home", "path": "/"}, {"name": "Energy Solutions", "path": "/energy/hub/"}, {"name": "Our Technology", "path": "/energy/technology/"}]),
        ]}
      />
      <EnergyTechnologyClient />
    </>
  );
}
