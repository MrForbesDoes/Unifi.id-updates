import type { Metadata } from 'next';
import NonDomesticEpcClient from './NonDomesticEpcClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Non-Domestic EPC | unifi.id',
  },
  description:
    'Understand when a Non-Domestic EPC is required, what the assessment provides, and how to turn the recommendation report into a costed improvement programme.',
  alternates: {
    canonical: 'https://unifi.id/energy/certificates/non-domestic-epc',
  },
  openGraph: {
    title: 'Non-Domestic EPC | unifi.id',
    description:
      'Understand when a Non-Domestic EPC is required, what the assessment provides, and how to turn the recommendation report into a costed improvement programme.',
    url: 'https://unifi.id/energy/certificates/non-domestic-epc',
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function NonDomesticEpcPage() {
  return <NonDomesticEpcClient />;
}
