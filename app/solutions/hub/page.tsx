import type { Metadata } from 'next';
import SolutionsHubClient from './SolutionsHubClient';

export const metadata: Metadata = {
  title: {
    absolute: "Solutions Hub | Smart Building & Fire Safety Solutions | unifi.id",
  },
  description: "Explore Unifi.id's suite of modular technologies designed to make your building safer, smarter, and more efficient. From occupancy intelligence to fire safety.",
  alternates: {
    canonical: "https://unifi.id/solutions/hub",
  },
  openGraph: {
    title: "Solutions Hub | Smart Building & Fire Safety Solutions | unifi.id",
    description: "Explore Unifi.id's suite of modular technologies designed to make your building safer, smarter, and more efficient. From occupancy intelligence to fire safety.",
    url: "https://unifi.id/solutions/hub",
  },
};

export default function SolutionsHub() {
  return <SolutionsHubClient />;
}
