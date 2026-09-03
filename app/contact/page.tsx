import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | Book a Demo of Cortex™ Intelligence | unifi.id",
  },
  description: "Get in touch with Unifi.id or book a personalised demonstration of Cortex™. Discover how we deliver smarter buildings, safer people, and greener futures.",
  alternates: {
    canonical: "https://unifi.id/contact",
  },
  openGraph: {
    title: "Contact Us | Book a Demo of Cortex™ Intelligence | unifi.id",
    description: "Get in touch with Unifi.id or book a personalised demonstration of Cortex™. Discover how we deliver smarter buildings, safer people, and greener futures.",
    url: "https://unifi.id/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
