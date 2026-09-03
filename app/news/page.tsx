import type { Metadata } from 'next';
import NewsClient from './NewsClient';

export const metadata: Metadata = {
  title: {
    absolute: "News & Blog | Smart Building Insights & Case Studies | unifi.id",
  },
  description: "Stay updated with the latest insights, case studies, and updates on smart building intelligence, fire safety, and sustainability from Unifi.id.",
  alternates: {
    canonical: "https://unifi.id/news",
  },
  openGraph: {
    title: "News & Blog | Smart Building Insights & Case Studies | unifi.id",
    description: "Stay updated with the latest insights, case studies, and updates on smart building intelligence, fire safety, and sustainability from Unifi.id.",
    url: "https://unifi.id/news",
  },
};

export default function NewsHub() {
  return <NewsClient />;
}
