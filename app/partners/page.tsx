import type { Metadata } from 'next';
import PartnersClient from './PartnersClient';

export const metadata: Metadata = {
  title: {
    absolute: "Partners | Collaborative Building Intelligence | unifi.id",
  },
  description: "Cortex™ integrates directly into partner platforms - delivering real-time intelligence, compliance assurance, and ESG transparency. Extend your systems. Amplify your value.",
  alternates: {
    canonical: "https://unifi.id/partners",
  },
  openGraph: {
    title: "Partners | Collaborative Building Intelligence | unifi.id",
    description: "Cortex™ integrates directly into partner platforms - delivering real-time intelligence, compliance assurance, and ESG transparency. Extend your systems. Amplify your value.",
    url: "https://unifi.id/partners",
  },
};

export default function Partners() {
  return <PartnersClient />;
}
