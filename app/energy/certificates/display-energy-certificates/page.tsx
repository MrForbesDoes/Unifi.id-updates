import type { Metadata } from 'next';
import DisplayEnergyCertificatesClient from './DisplayEnergyCertificatesClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Display Energy Certificates | unifi.id',
  },
  description:
    'Display Energy Certificates show how a public building actually uses energy. Understand who qualifies, how long a DEC lasts, and how to turn operational evidence into measurable improvement.',
  alternates: {
    canonical: 'https://unifi.id/energy/certificates/display-energy-certificates',
  },
  openGraph: {
    title: 'Display Energy Certificates | unifi.id',
    description:
      'Display Energy Certificates show how a public building actually uses energy. Understand who qualifies, how long a DEC lasts, and how to turn operational evidence into measurable improvement.',
    url: 'https://unifi.id/energy/certificates/display-energy-certificates',
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function DisplayEnergyCertificatesPage() {
  return <DisplayEnergyCertificatesClient />;
}
