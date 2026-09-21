import type { Metadata } from 'next';
import JsonLd from '@/src/components/JsonLd';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/src/lib/schema';
import EnergyHubClient from './EnergyHubClient';

const title = "Energy Efficiency Solutions for Schools, Councils and Estates | unifi.id";
const description =
  "Energy efficiency solutions for UK schools, councils, universities and estates: carbon reporting, energy monitoring, Display Energy Certificates, Non-Domestic EPCs, LED lighting, heat pumps, HVAC and solar, with funding support.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: ["energy efficiency solutions", "energy efficiency for schools", "energy efficiency for councils", "school energy management", "decarbonisation for public sector", "LED lighting for schools", "heat pumps for schools", "carbon reporting", "energy monitoring", "unifi.id"],
  alternates: {
    canonical: "https://unifi.id/energy/hub",
  },
  openGraph: {
    title,
    description,
    url: "https://unifi.id/energy/hub",
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function EnergyHubPage() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            "name": "Energy efficiency and decarbonisation services",
            "serviceType": "Energy efficiency and decarbonisation",
            "audiences": [
              "Local authorities",
              "Schools and academy trusts",
              "Universities",
              "NHS and health estates",
              "Commercial estates"
            ],
            "alternateNames": [
              "Energy & Decarbonisation Hub"
            ],
            "description": "Energy efficiency solutions for UK schools, councils, universities and estates: carbon reporting, energy monitoring, Display Energy Certificates, Non-Domestic EPCs, LED lighting, heat pumps, HVAC and solar, with funding support.",
            "path": "/energy/hub/"
          }),
          buildBreadcrumbSchema([{"name": "Home", "path": "/"}, {"name": "Energy Solutions", "path": "/energy/hub/"}]),
        ]}
      />
      <EnergyHubClient />
    </>
  );
}
