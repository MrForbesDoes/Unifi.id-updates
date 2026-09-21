import type { Metadata } from 'next';
import JsonLd from '@/src/components/JsonLd';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/src/lib/schema';
import NonDomesticEpcClient from './NonDomesticEpcClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Non-Domestic EPC Assessment | unifi.id',
  },
  description:
    'Arrange a Non-Domestic EPC through an accredited assessor, manage certificates across your portfolio and turn recommendations into a practical energy improvement plan.',
  keywords: ["non domestic EPC", "non-domestic EPC", "commercial EPC", "non domestic EPC cost", "non domestic EPC requirements", "non domestic EPC exemptions", "MEES", "minimum energy efficiency standards", "unifi.id"],
  alternates: {
    canonical: 'https://unifi.id/energy/certificates/non-domestic-epc',
  },
  openGraph: {
    title: 'Non-Domestic EPC Assessment | unifi.id',
    description:
      'Arrange a Non-Domestic EPC through an accredited assessor, manage certificates across your portfolio and turn recommendations into a practical energy improvement plan.',
    url: 'https://unifi.id/energy/certificates/non-domestic-epc',
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function NonDomesticEpcPage() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            "name": "Non-Domestic EPC",
            "serviceType": "Non-Domestic Energy Performance Certificate coordination",
            "audiences": [
              "Commercial landlords",
              "Local authorities",
              "Commercial estates"
            ],
            "alternateNames": [
              "Commercial EPC",
              "Non-Domestic Energy Performance Certificate"
            ],
            "description": "Arrange a Non-Domestic EPC through an accredited assessor, manage certificates across your portfolio and turn recommendations into a practical energy improvement plan.",
            "path": "/energy/certificates/non-domestic-epc/"
          }),
          buildBreadcrumbSchema([{"name": "Home", "path": "/"}, {"name": "Energy Solutions", "path": "/energy/hub/"}, {"name": "Non-Domestic EPC", "path": "/energy/certificates/non-domestic-epc/"}]),
        ]}
      />
      <NonDomesticEpcClient />
    </>
  );
}
