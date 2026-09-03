import type { Metadata } from 'next';
import ModernSlaveryClient from './ModernSlaveryClient';

export const metadata: Metadata = {
  title: {
    absolute: "Modern Slavery Statement | unifi.id",
  },
  description: "Unifi.id's commitment to ethical practices and our statement on modern slavery in our operations and supply chain.",
  alternates: {
    canonical: "https://unifi.id/modern-slavery",
  },
  openGraph: {
    title: "Modern Slavery Statement | unifi.id",
    description: "Unifi.id's commitment to ethical practices and our statement on modern slavery in our operations and supply chain.",
    url: "https://unifi.id/modern-slavery",
  },
};

export default function ModernSlavery() {
  return <ModernSlaveryClient />;
}
