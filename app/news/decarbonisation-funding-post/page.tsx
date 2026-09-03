import type { Metadata } from 'next';
import NewsDecarbonisationFundingPostClient from './NewsDecarbonisationFundingPostClient';

export const metadata: Metadata = {
  title: {
    absolute: "Decarbonisation: Why Waiting Costs More Than Acting | Unifi.id Insights",
  },
  description: "For estates managers, finance teams, and boardroom leaders, decarbonisation is no longer a distant ambition - it's a commercial and regulatory reality.",
  alternates: {
    canonical: "https://unifi.id/news/decarbonisation-funding-post",
  },
  openGraph: {
    title: "Decarbonisation: Why Waiting Costs More Than Acting | Unifi.id Insights",
    description: "For estates managers, finance teams, and boardroom leaders, decarbonisation is no longer a distant ambition - it's a commercial and regulatory reality.",
    url: "https://unifi.id/news/decarbonisation-funding-post",
  },
};

export default function BlogPost() {
  return <NewsDecarbonisationFundingPostClient />;
}
