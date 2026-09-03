import type { Metadata } from 'next';
import SolutionsFireguardClient from './SolutionsFireguardClient';

export const metadata: Metadata = {
  title: {
    absolute: "FireGuard™ | Proactive Fire Safety & Compliance Intelligence | unifi.id",
  },
  description: "FireGuard™ delivers proactive and verifiable fire safety compliance for estates teams. Move from reactive checks to clear control, accountability, and reporting.",
  alternates: {
    canonical: "https://unifi.id/solutions/fireguard",
  },
  openGraph: {
    title: "FireGuard™ | Proactive Fire Safety & Compliance Intelligence | unifi.id",
    description: "FireGuard™ delivers proactive and verifiable fire safety compliance for estates teams. Move from reactive checks to clear control, accountability, and reporting.",
    url: "https://unifi.id/solutions/fireguard",
  },
};

export default function SolutionsFireguard() {
  return <SolutionsFireguardClient />;
}
