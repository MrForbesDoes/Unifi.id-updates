import type { Metadata } from 'next';
import SectorsClient from './SectorsClient';

export const metadata: Metadata = {
  title: {
    absolute: "Sectors | Building Intelligence by Industry | unifi.id",
  },
  description: "Start with your sector, then follow the pathways across platform (Cortex), fire safety (FireGuard), and energy.",
  alternates: {
    canonical: "https://unifi.id/sectors",
  },
  openGraph: {
    title: "Sectors | Building Intelligence by Industry | unifi.id",
    description: "Start with your sector, then follow the pathways across platform (Cortex), fire safety (FireGuard), and energy.",
    url: "https://unifi.id/sectors",
  },
};

export default function Sectors() {
  return <SectorsClient />;
}
