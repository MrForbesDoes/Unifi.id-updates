import type { Metadata } from 'next';
import NonDomesticEpcClient from './NonDomesticEpcClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Non-Domestic EPC Assessment | unifi.id',
  },
  description:
    'Arrange a Non-Domestic EPC through an accredited assessor, manage certificates across your portfolio and turn recommendations into a practical energy improvement plan.',
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
  return <NonDomesticEpcClient />;
}
