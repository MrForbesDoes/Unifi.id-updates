import type { Metadata } from 'next';
import NewsBeyondCapacityClient from './NewsBeyondCapacityClient';

export const metadata: Metadata = {
  title: {
    absolute: "Beyond Capacity: Using Occupancy Data to Keep Venues Safe & Compliant | Unifi.id Insights",
  },
  description: "Managing a venue's capacity isn't just about guest experience - it's a legal obligation. Learn how occupancy data keeps venues safe and compliant.",
  alternates: {
    canonical: "https://unifi.id/news/beyond-capacity",
  },
  openGraph: {
    title: "Beyond Capacity: Using Occupancy Data to Keep Venues Safe & Compliant | Unifi.id Insights",
    description: "Managing a venue's capacity isn't just about guest experience - it's a legal obligation. Learn how occupancy data keeps venues safe and compliant.",
    url: "https://unifi.id/news/beyond-capacity",
  },
};

export default function BlogPost() {
  return <NewsBeyondCapacityClient />;
}
