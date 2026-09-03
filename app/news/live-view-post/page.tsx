import type { Metadata } from 'next';
import NewsLiveViewPostClient from './NewsLiveViewPostClient';

export const metadata: Metadata = {
  title: {
    absolute: "The Power of LiveView – Total Building Awareness in One Place | Unifi.id Insights",
  },
  description: "Most buildings are a mess of disconnected systems. Unifi.id's unified command centre transforms fragmented data into actionable building intelligence.",
  alternates: {
    canonical: "https://unifi.id/news/live-view-post",
  },
  openGraph: {
    title: "The Power of LiveView – Total Building Awareness in One Place | Unifi.id Insights",
    description: "Most buildings are a mess of disconnected systems. Unifi.id's unified command centre transforms fragmented data into actionable building intelligence.",
    url: "https://unifi.id/news/live-view-post",
  },
};

export default function BlogPost() {
  return <NewsLiveViewPostClient />;
}
