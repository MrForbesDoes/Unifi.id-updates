import type { Metadata } from 'next';
import EnergyTeamClient from './EnergyTeamClient';

export const metadata: Metadata = {
  title: {
    absolute: "Contact the Energy Team | Unifi.id",
  },
  description: "Contact the Unifi.id energy team for energy efficiency consultations, funding guidance, and implementation planning.",
  alternates: {
    canonical: "https://unifi.id/energy/team",
  },
  openGraph: {
    title: "Contact the Energy Team | Unifi.id",
    description: "Contact the Unifi.id energy team for energy efficiency consultations, funding guidance, and implementation planning.",
    url: "https://unifi.id/energy/team",
  },
};

export default function EnergyTeamContactPage() {
  return <EnergyTeamClient />;
}
