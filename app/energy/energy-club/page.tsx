import type { Metadata } from 'next';
import EnergyEnergyClubClient from './EnergyEnergyClubClient';

export const metadata: Metadata = {
  title: {
    absolute: "Unifi.id Energy Club | Carbon Reporting and Smarter Buying",
  },
  description: "Join the free Energy Club for simpler buying, clearer carbon reporting, and practical support for your carbon action plan.",
  alternates: {
    canonical: "https://unifi.id/energy/energy-club",
  },
  openGraph: {
    title: "Unifi.id Energy Club | Carbon Reporting and Smarter Buying",
    description: "Join the free Energy Club for simpler buying, clearer carbon reporting, and practical support for your carbon action plan.",
    url: "https://unifi.id/energy/energy-club",
  },
};

export default function EnergyClub() {
  return <EnergyEnergyClubClient />;
}
