import type { Metadata } from 'next';
import RolesCfoClient from './RolesCfoClient';

export const metadata: Metadata = {
  title: {
    absolute: "CFO & Finance Director | Financial Building Intelligence | unifi.id",
  },
  description: "Cortex™ provides the financial literacy your estate data has been missing. Control costs, justify ROI, and optimize capital planning with verifiable data.",
  alternates: {
    canonical: "https://unifi.id/roles/cfo",
  },
  openGraph: {
    title: "CFO & Finance Director | Financial Building Intelligence | unifi.id",
    description: "Cortex™ provides the financial literacy your estate data has been missing. Control costs, justify ROI, and optimize capital planning with verifiable data.",
    url: "https://unifi.id/roles/cfo",
  },
};

export default function RoleCFO() {
  return <RolesCfoClient />;
}
