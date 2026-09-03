import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | unifi.id",
  },
  description: "How Unifi.id collects, uses, and protects your personal information. GDPR-compliant data handling for building intelligence services.",
  alternates: {
    canonical: "https://unifi.id/privacy",
  },
  openGraph: {
    title: "Privacy Policy | unifi.id",
    description: "How Unifi.id collects, uses, and protects your personal information. GDPR-compliant data handling for building intelligence services.",
    url: "https://unifi.id/privacy",
  },
};

export default function Privacy() {
  return <PrivacyClient />;
}
