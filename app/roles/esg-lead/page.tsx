import type { Metadata } from 'next';
import RolesEsgLeadClient from './RolesEsgLeadClient';

export const metadata: Metadata = {
  title: {
    absolute: "ESG & Sustainability Lead | Data-Led Net Zero Intelligence | unifi.id",
  },
  description: "Cortex™ provides the verifiable data needed for Net Zero pathways and carbon reporting. Deliver real sustainability impact with defensible building intelligence.",
  alternates: {
    canonical: "https://unifi.id/roles/esg-lead",
  },
  openGraph: {
    title: "ESG & Sustainability Lead | Data-Led Net Zero Intelligence | unifi.id",
    description: "Cortex™ provides the verifiable data needed for Net Zero pathways and carbon reporting. Deliver real sustainability impact with defensible building intelligence.",
    url: "https://unifi.id/roles/esg-lead",
  },
};

export default function RoleESGLead() {
  return <RolesEsgLeadClient />;
}
