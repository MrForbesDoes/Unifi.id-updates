import type { Metadata } from 'next';
import RolesSecurityHeadClient from './RolesSecurityHeadClient';

export const metadata: Metadata = {
  title: {
    absolute: "Security Head | Data-Led Physical Security Intelligence | unifi.id",
  },
  description: "Cortex™ provides the real-time presence intelligence needed to transform physical security into a proactive, data-led operation. Gain total building awareness.",
  alternates: {
    canonical: "https://unifi.id/roles/security-head",
  },
  openGraph: {
    title: "Security Head | Data-Led Physical Security Intelligence | unifi.id",
    description: "Cortex™ provides the real-time presence intelligence needed to transform physical security into a proactive, data-led operation. Gain total building awareness.",
    url: "https://unifi.id/roles/security-head",
  },
};

export default function RoleSecurityHead() {
  return <RolesSecurityHeadClient />;
}
