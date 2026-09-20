import type { Metadata } from 'next';
import DisplayEnergyCertificatesClient from './DisplayEnergyCertificatesClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Display Energy Certificates for Schools and Public Buildings | unifi.id',
  },
  description:
    'Arrange Display Energy Certificates through an accredited assessor, coordinate renewals across public estates and turn operational energy evidence into action.',
  alternates: {
    canonical: 'https://unifi.id/energy/certificates/display-energy-certificates',
  },
  openGraph: {
    title: 'Display Energy Certificates for Schools and Public Buildings | unifi.id',
    description:
      'Arrange Display Energy Certificates through an accredited assessor, coordinate renewals across public estates and turn operational energy evidence into action.',
    url: 'https://unifi.id/energy/certificates/display-energy-certificates',
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function DisplayEnergyCertificatesPage() {
  return <DisplayEnergyCertificatesClient />;
}
