import type { Metadata } from 'next';
import EnergyMonitoringClient from './EnergyMonitoringClient';

export const metadata: Metadata = {
  title: {
    absolute: "Energy Monitoring | unifi.id",
  },
  description: "Understand your energy consumption to identify savings opportunities and track the performance of your upgrades.",
  alternates: {
    canonical: "https://unifi.id/energy/monitoring",
  },
  openGraph: {
    title: "Energy Monitoring | unifi.id",
    description: "Understand your energy consumption to identify savings opportunities and track the performance of your upgrades.",
    url: "https://unifi.id/energy/monitoring",
  },
};

export default function EnergyMonitoring() {
  return <EnergyMonitoringClient />;
}
