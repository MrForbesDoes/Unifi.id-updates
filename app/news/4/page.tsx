import type { Metadata } from 'next';
import News4Client from './News4Client';

export const metadata: Metadata = {
  title: {
    absolute: "Case Study: How a University Saved 30% on Energy Costs | Unifi.id Insights",
  },
  description: "Explore our recent partnership with a leading educational institution and see how Cortex delivered verifiable energy savings.",
  alternates: {
    canonical: "https://unifi.id/news/4",
  },
  openGraph: {
    title: "Case Study: How a University Saved 30% on Energy Costs | Unifi.id Insights",
    description: "Explore our recent partnership with a leading educational institution and see how Cortex delivered verifiable energy savings.",
    url: "https://unifi.id/news/4",
  },
};

export default function BlogPost() {
  return <News4Client />;
}
