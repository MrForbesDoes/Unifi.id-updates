import type { Metadata } from 'next';
import EnergyHubClient from './EnergyHubClient';

const title = "Energy & Decarbonisation Hub | Stop Paying for Wasted Energy | unifi.id";
const description =
  "Identify and reduce wasted energy, then reinvest in your estate. Carbon reporting, energy monitoring, certificates, LED, heating, HVAC and solar support from Unifi.id.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
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
  return <EnergyHubClient />;
}
