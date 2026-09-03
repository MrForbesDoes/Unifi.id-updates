import type { Metadata } from 'next';
import NewsDataDrivenSecurityClient from './NewsDataDrivenSecurityClient';

export const metadata: Metadata = {
  title: {
    absolute: "Data-Driven Security That Works Smarter | Unifi.id Insights",
  },
  description: "Traditional access control focuses on the door. Modern security requires presence intelligence - real-time awareness of who is actually somewhere.",
  alternates: {
    canonical: "https://unifi.id/news/data-driven-security",
  },
  openGraph: {
    title: "Data-Driven Security That Works Smarter | Unifi.id Insights",
    description: "Traditional access control focuses on the door. Modern security requires presence intelligence - real-time awareness of who is actually somewhere.",
    url: "https://unifi.id/news/data-driven-security",
  },
};

export default function BlogPost() {
  return <NewsDataDrivenSecurityClient />;
}
