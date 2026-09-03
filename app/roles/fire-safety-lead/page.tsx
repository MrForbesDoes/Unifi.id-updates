import type { Metadata } from 'next';
import RolesFireSafetyLeadClient from './RolesFireSafetyLeadClient';

export const metadata: Metadata = {
  title: {
    absolute: "Fire Safety Lead | Continuous Fire Safety Intelligence | unifi.id",
  },
  description: "Cortex™ and FireGuard™ provide the continuous intelligence needed to safeguard lives and property. Automate compliance and gain real-time evacuation intelligence.",
  alternates: {
    canonical: "https://unifi.id/roles/fire-safety-lead",
  },
  openGraph: {
    title: "Fire Safety Lead | Continuous Fire Safety Intelligence | unifi.id",
    description: "Cortex™ and FireGuard™ provide the continuous intelligence needed to safeguard lives and property. Automate compliance and gain real-time evacuation intelligence.",
    url: "https://unifi.id/roles/fire-safety-lead",
  },
};

export default function RoleFireSafetyLead() {
  return <RolesFireSafetyLeadClient />;
}
