import type { Metadata } from 'next';
import JsonLd from '@/src/components/JsonLd';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/src/lib/schema';
import DisplayEnergyCertificatesClient from './DisplayEnergyCertificatesClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Display Energy Certificates for Schools and Public Buildings | unifi.id',
  },
  description:
    'Arrange Display Energy Certificates through an accredited assessor, coordinate renewals across public estates and turn operational energy evidence into action.',
  keywords: ["display energy certificate", "display energy certificates for schools", "DEC certificate", "DEC for schools", "display energy certificate requirements", "display energy certificate cost", "DEC renewal", "public building energy rating", "unifi.id"],
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
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            "name": "Display Energy Certificates",
            "serviceType": "Display Energy Certificate coordination and renewals",
            "audiences": [
              "Schools and academy trusts",
              "Local authorities",
              "Universities",
              "NHS and health estates"
            ],
            "alternateNames": [
              "DEC",
              "Display Energy Certificate for schools"
            ],
            "description": "Arrange Display Energy Certificates through an accredited assessor, coordinate renewals across public estates and turn operational energy evidence into action.",
            "path": "/energy/certificates/display-energy-certificates/"
          }),
          buildBreadcrumbSchema([{"name": "Home", "path": "/"}, {"name": "Energy Solutions", "path": "/energy/hub/"}, {"name": "Display Energy Certificates", "path": "/energy/certificates/display-energy-certificates/"}]),
        ]}
      />
      <DisplayEnergyCertificatesClient />
    </>
  );
}
