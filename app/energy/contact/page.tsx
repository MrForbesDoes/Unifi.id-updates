import type { Metadata } from 'next';
import EnergyContactClient from './EnergyContactClient';

export const metadata: Metadata = {
  title: {
    absolute: "Book Your Free Energy Survey | unifi.id",
  },
  description: "Discover how Unifi.id can deliver smarter buildings, lower energy costs, and greener futures. Book a free energy survey or get in touch with our energy team.",
  alternates: {
    canonical: "https://unifi.id/energy/contact",
  },
  openGraph: {
    title: "Book Your Free Energy Survey | unifi.id",
    description: "Discover how Unifi.id can deliver smarter buildings, lower energy costs, and greener futures. Book a free energy survey or get in touch with our energy team.",
    url: "https://unifi.id/energy/contact",
  },
};

export default function EnergyContact() {
  return <EnergyContactClient />;
}
