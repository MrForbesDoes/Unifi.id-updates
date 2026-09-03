import type { Metadata } from 'next';
import NewsFireguardNewEraClient from './NewsFireguardNewEraClient';

export const metadata: Metadata = {
  title: {
    absolute: "Unifi.id & FireGuard: A New Era in Fire Safety | Unifi.id Insights",
  },
  description: "Learn how our integrated FireGuard solution is revolutionizing fire safety compliance and response times in complex environments.",
  alternates: {
    canonical: "https://unifi.id/news/fireguard-new-era",
  },
  openGraph: {
    title: "Unifi.id & FireGuard: A New Era in Fire Safety | Unifi.id Insights",
    description: "Learn how our integrated FireGuard solution is revolutionizing fire safety compliance and response times in complex environments.",
    url: "https://unifi.id/news/fireguard-new-era",
  },
};

export default function BlogPost() {
  return <NewsFireguardNewEraClient />;
}
