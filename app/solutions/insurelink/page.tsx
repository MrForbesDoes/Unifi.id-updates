import type { Metadata } from 'next';
import SolutionsInsurelinkClient from './SolutionsInsurelinkClient';

export const metadata: Metadata = {
  title: {
    absolute: "InsureLink | Verifiable Building Risk & Assurance Evidence | unifi.id",
  },
  description: "InsureLink bridges the gap between building performance and insurance risk. Provide verifiable evidence to reduce premiums and improve coverage.",
  alternates: {
    canonical: "https://unifi.id/solutions/insurelink",
  },
  openGraph: {
    title: "InsureLink | Verifiable Building Risk & Assurance Evidence | unifi.id",
    description: "InsureLink bridges the gap between building performance and insurance risk. Provide verifiable evidence to reduce premiums and improve coverage.",
    url: "https://unifi.id/solutions/insurelink",
  },
};

export default function InsureLink() {
  return <SolutionsInsurelinkClient />;
}
