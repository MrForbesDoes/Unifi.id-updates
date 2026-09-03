import type { Metadata } from 'next';
import NewsFutureOfSmartBuildingsClient from './NewsFutureOfSmartBuildingsClient';

export const metadata: Metadata = {
  title: {
    absolute: "The Future of Smart Buildings: A 2026 Outlook | Unifi.id Insights",
  },
  description: "Discover the key trends shaping the future of building management, from AI-driven energy savings to enhanced security protocols.",
  alternates: {
    canonical: "https://unifi.id/news/future-of-smart-buildings",
  },
  openGraph: {
    title: "The Future of Smart Buildings: A 2026 Outlook | Unifi.id Insights",
    description: "Discover the key trends shaping the future of building management, from AI-driven energy savings to enhanced security protocols.",
    url: "https://unifi.id/news/future-of-smart-buildings",
  },
};

export default function BlogPost() {
  return <NewsFutureOfSmartBuildingsClient />;
}
