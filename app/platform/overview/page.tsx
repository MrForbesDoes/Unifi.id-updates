import type { Metadata } from 'next';
import PlatformOverviewClient from './PlatformOverviewClient';

export const metadata: Metadata = {
  title: {
    absolute: "Cortex™ Platform Overview | Unifi.id Real-Time Intelligence",
  },
  description: "Discover Cortex™, the intelligence layer behind Unifi.id's mission to transform buildings into adaptive, responsive environments. Gain total operational awareness.",
  alternates: {
    canonical: "https://unifi.id/platform/overview",
  },
  openGraph: {
    title: "Cortex™ Platform Overview | Unifi.id Real-Time Intelligence",
    description: "Discover Cortex™, the intelligence layer behind Unifi.id's mission to transform buildings into adaptive, responsive environments. Gain total operational awareness.",
    url: "https://unifi.id/platform/overview",
  },
};

export default function PlatformOverviewPage() {
  return <PlatformOverviewClient />;
}
