import type { Metadata } from 'next';
import EnergyTechnologyClient from './EnergyTechnologyClient';

export const metadata: Metadata = {
  title: {
    absolute: "Decarbonisation Technology for Carbon Reporting | Unifi.id",
  },
  description: "Explore funded energy technologies that cut waste, improve carbon reporting, and turn your carbon action plan into delivery.",
  alternates: {
    canonical: "https://unifi.id/energy/technology",
  },
  openGraph: {
    title: "Decarbonisation Technology for Carbon Reporting | Unifi.id",
    description: "Explore funded energy technologies that cut waste, improve carbon reporting, and turn your carbon action plan into delivery.",
    url: "https://unifi.id/energy/technology",
  },
};

export default function EnergyTechnology() {
  return <EnergyTechnologyClient />;
}
