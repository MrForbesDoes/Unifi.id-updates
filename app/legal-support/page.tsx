import type { Metadata } from 'next';
import LegalSupportClient from './LegalSupportClient';

export const metadata: Metadata = {
  title: {
    absolute: "Legal & Support | unifi.id",
  },
  description: "Privacy policy, terms of service, cookie policy, and support. Transparency, compliance, and support you can rely on.",
  alternates: {
    canonical: "https://unifi.id/legal-support",
  },
  openGraph: {
    title: "Legal & Support | unifi.id",
    description: "Privacy policy, terms of service, cookie policy, and support. Transparency, compliance, and support you can rely on.",
    url: "https://unifi.id/legal-support",
  },
};

export default function LegalSupportPage() {
  return <LegalSupportClient />;
}
