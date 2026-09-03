import type { Metadata } from 'next';
import NewsTransformingFireSafetyClient from './NewsTransformingFireSafetyClient';

export const metadata: Metadata = {
  title: {
    absolute: "Transforming Fire Safety with Real-Time Evacuation Intelligence | Unifi.id Insights",
  },
  description: "Fire drills and evacuation protocols are often treated as tick-box exercises. Discover how live data and instant insight can transform fire safety.",
  alternates: {
    canonical: "https://unifi.id/news/transforming-fire-safety",
  },
  openGraph: {
    title: "Transforming Fire Safety with Real-Time Evacuation Intelligence | Unifi.id Insights",
    description: "Fire drills and evacuation protocols are often treated as tick-box exercises. Discover how live data and instant insight can transform fire safety.",
    url: "https://unifi.id/news/transforming-fire-safety",
  },
};

export default function BlogPost() {
  return <NewsTransformingFireSafetyClient />;
}
