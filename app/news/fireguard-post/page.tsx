import type { Metadata } from 'next';
import NewsFireguardPostClient from './NewsFireguardPostClient';

export const metadata: Metadata = {
  title: {
    absolute: "Beyond the Certificate: Living Fire System Intelligence, 24/7 | Unifi.id Insights",
  },
  description: "Most commercial buildings pass their annual fire safety inspection. But what happens in the 364 days between one certificate and the next?",
  alternates: {
    canonical: "https://unifi.id/news/fireguard-post",
  },
  openGraph: {
    title: "Beyond the Certificate: Living Fire System Intelligence, 24/7 | Unifi.id Insights",
    description: "Most commercial buildings pass their annual fire safety inspection. But what happens in the 364 days between one certificate and the next?",
    url: "https://unifi.id/news/fireguard-post",
  },
};

export default function BlogPost() {
  return <NewsFireguardPostClient />;
}
