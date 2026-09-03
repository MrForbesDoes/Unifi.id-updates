import type { Metadata } from 'next';
import News3Client from './News3Client';

export const metadata: Metadata = {
  title: {
    absolute: "Decarbonisation Deep Dive: The ROI of Green Tech | Unifi.id Insights",
  },
  description: "We break down the long-term financial benefits of investing in decarbonisation technologies for your property portfolio.",
  alternates: {
    canonical: "https://unifi.id/news/3",
  },
  openGraph: {
    title: "Decarbonisation Deep Dive: The ROI of Green Tech | Unifi.id Insights",
    description: "We break down the long-term financial benefits of investing in decarbonisation technologies for your property portfolio.",
    url: "https://unifi.id/news/3",
  },
};

export default function BlogPost() {
  return <News3Client />;
}
