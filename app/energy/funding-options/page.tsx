import type { Metadata } from 'next';
import JsonLd from '@/src/components/JsonLd';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/src/lib/schema';
import EnergyFundingOptionsClient from './EnergyFundingOptionsClient';

export const metadata: Metadata = {
  title: {
    absolute: "Energy Upgrade Funding: Salix, PSDS and Finance Options | unifi.id",
  },
  description: "Funding routes for LED, heating, solar and energy upgrades, including Salix finance and the Public Sector Decarbonisation Scheme for public bodies, plus options that reduce upfront capital, subject to eligibility.",
  keywords: ["energy efficiency funding", "Salix funding", "Public Sector Decarbonisation Scheme", "PSDS", "LED lighting funding for schools", "LED lighting grants for schools", "heat pump grants for schools", "energy upgrade finance", "unifi.id"],
  alternates: {
    canonical: "https://unifi.id/energy/funding-options",
  },
  openGraph: {
    title: "Energy Upgrade Funding: Salix, PSDS and Finance Options | unifi.id",
    description: "Funding routes for LED, heating, solar and energy upgrades, including Salix finance and the Public Sector Decarbonisation Scheme for public bodies, plus options that reduce upfront capital, subject to eligibility.",
    url: "https://unifi.id/energy/funding-options",
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function FundingOptions() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            "name": "Energy upgrade funding support",
            "serviceType": "Energy efficiency funding and finance",
            "audiences": [
              "Schools and academy trusts",
              "Local authorities",
              "Commercial estates"
            ],
            "description": "Funding routes for LED, heating, solar and energy upgrades, including Salix finance and the Public Sector Decarbonisation Scheme for public bodies, plus options that reduce upfront capital, subject to eligibility.",
            "path": "/energy/funding-options/"
          }),
          buildBreadcrumbSchema([{"name": "Home", "path": "/"}, {"name": "Energy Solutions", "path": "/energy/hub/"}, {"name": "Funding Options", "path": "/energy/funding-options/"}]),
        ]}
      />
      <EnergyFundingOptionsClient />
    </>
  );
}
