import type { Metadata } from 'next';
import EnergyHubClient from './EnergyHubClient';

export const metadata: Metadata = {
  title: {
    absolute: "Energy Hub | Carbon Reporting and Carbon Action Plan Solutions | unifi.id",
  },
  description: "Build a carbon action plan with funded LED, smart sockets, heating, HVAC, solar, and carbon reporting support from Unifi.id.",
  alternates: {
    canonical: "https://unifi.id/energy/hub",
  },
  openGraph: {
    title: "Energy Hub | Carbon Reporting and Carbon Action Plan Solutions | unifi.id",
    description: "Build a carbon action plan with funded LED, smart sockets, heating, HVAC, solar, and carbon reporting support from Unifi.id.",
    url: "https://unifi.id/energy/hub",
  },
};

export default function EnergyHubPage() {
  return <EnergyHubClient />;
}
