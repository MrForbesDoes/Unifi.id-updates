import type { Metadata } from 'next';
import SectorsHubClient from './SectorsHubClient';

export const metadata: Metadata = {
  title: {
    absolute: "Sectors | Intelligent Building Solutions by Industry | unifi.id",
  },
  description: "Every sector faces unique challenges. Cortex™ delivers tailored intelligence solutions for Public Sector, Private Sector, and High Security environments.",
  alternates: {
    canonical: "https://unifi.id/sectors/hub",
  },
  openGraph: {
    title: "Sectors | Intelligent Building Solutions by Industry | unifi.id",
    description: "Every sector faces unique challenges. Cortex™ delivers tailored intelligence solutions for Public Sector, Private Sector, and High Security environments.",
    url: "https://unifi.id/sectors/hub",
  },
};

export default function SectorsHub() {
  return <SectorsHubClient />;
}
