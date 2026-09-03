import type { Metadata } from 'next';
import RolesCooClient from './RolesCooClient';

export const metadata: Metadata = {
  title: {
    absolute: "COO & Operations Director | Operational Building Intelligence | unifi.id",
  },
  description: "Cortex™ translates fragmented building data into a unified operational command centre. Drive efficiency at scale and standardise workflows across your entire portfolio.",
  alternates: {
    canonical: "https://unifi.id/roles/coo",
  },
  openGraph: {
    title: "COO & Operations Director | Operational Building Intelligence | unifi.id",
    description: "Cortex™ translates fragmented building data into a unified operational command centre. Drive efficiency at scale and standardise workflows across your entire portfolio.",
    url: "https://unifi.id/roles/coo",
  },
};

export default function RoleCOO() {
  return <RolesCooClient />;
}
