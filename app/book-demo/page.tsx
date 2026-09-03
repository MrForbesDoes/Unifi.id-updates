import type { Metadata } from 'next';
import BookDemoClient from './BookDemoClient';

export const metadata: Metadata = {
  title: {
    absolute: "Book a Demo | Unifi.id",
  },
  description: "Request a personalised demo of Cortex™. We'll follow up to understand your estate, goals, and timelines.",
  alternates: {
    canonical: "https://unifi.id/book-demo",
  },
  openGraph: {
    title: "Book a Demo | Unifi.id",
    description: "Request a personalised demo of Cortex™. We'll follow up to understand your estate, goals, and timelines.",
    url: "https://unifi.id/book-demo",
  },
};

export default function BookDemoPage() {
  return <BookDemoClient />;
}
