import type { Metadata } from 'next';
import RolesFacilitiesClient from './RolesFacilitiesClient';

export const metadata: Metadata = {
  title: {
    absolute: "Facilities Manager | Proactive Building & Estate Management | unifi.id",
  },
  description: "Cortex™ helps facilities managers move from reactive maintenance to proactive estate management. Streamline day-to-day operations and improve occupant satisfaction.",
  alternates: {
    canonical: "https://unifi.id/roles/facilities",
  },
  openGraph: {
    title: "Facilities Manager | Proactive Building & Estate Management | unifi.id",
    description: "Cortex™ helps facilities managers move from reactive maintenance to proactive estate management. Streamline day-to-day operations and improve occupant satisfaction.",
    url: "https://unifi.id/roles/facilities",
  },
};

export default function RoleFacilities() {
  return <RolesFacilitiesClient />;
}
