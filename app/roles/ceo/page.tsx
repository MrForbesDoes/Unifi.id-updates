import type { Metadata } from 'next';
import RolesCeoClient from './RolesCeoClient';

export const metadata: Metadata = {
  title: {
    absolute: "CEO & Managing Director | Strategic Building Intelligence | unifi.id",
  },
  description: "Cortex™ translates complex building data into executive-level intelligence. Manage risk, ensure duty of care, and drive ESG leadership across your entire estate.",
  alternates: {
    canonical: "https://unifi.id/roles/ceo",
  },
  openGraph: {
    title: "CEO & Managing Director | Strategic Building Intelligence | unifi.id",
    description: "Cortex™ translates complex building data into executive-level intelligence. Manage risk, ensure duty of care, and drive ESG leadership across your entire estate.",
    url: "https://unifi.id/roles/ceo",
  },
};

export default function RoleCEO() {
  return <RolesCeoClient />;
}
