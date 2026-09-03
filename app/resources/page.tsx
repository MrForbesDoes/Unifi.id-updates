import type { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';

export const metadata: Metadata = {
  title: {
    absolute: "Resources | Knowledge Hub for Building Intelligence | unifi.id",
  },
  description: "A structured library for decision makers: explainers, pathways, and clear next steps. Explore our conservative, credible, and compliance-led resources.",
  alternates: {
    canonical: "https://unifi.id/resources",
  },
  openGraph: {
    title: "Resources | Knowledge Hub for Building Intelligence | unifi.id",
    description: "A structured library for decision makers: explainers, pathways, and clear next steps. Explore our conservative, credible, and compliance-led resources.",
    url: "https://unifi.id/resources",
  },
};

export default function Resources() {
  return <ResourcesClient />;
}
