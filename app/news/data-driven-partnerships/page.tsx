import type { Metadata } from 'next';
import NewsDataDrivenPartnershipsClient from './NewsDataDrivenPartnershipsClient';

export const metadata: Metadata = {
  title: {
    absolute: "Data-Driven Partnerships - How Unifi.id Makes Other Systems Better | Unifi.id Insights",
  },
  description: "Our platform was designed to make your existing infrastructure smarter - not obsolete. We turn legacy systems into intelligent systems.",
  alternates: {
    canonical: "https://unifi.id/news/data-driven-partnerships",
  },
  openGraph: {
    title: "Data-Driven Partnerships - How Unifi.id Makes Other Systems Better | Unifi.id Insights",
    description: "Our platform was designed to make your existing infrastructure smarter - not obsolete. We turn legacy systems into intelligent systems.",
    url: "https://unifi.id/news/data-driven-partnerships",
  },
};

export default function BlogPost() {
  return <NewsDataDrivenPartnershipsClient />;
}
