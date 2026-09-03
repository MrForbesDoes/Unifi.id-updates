import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: {
    absolute: "Pricing | Flexible Licensing for Building Intelligence | unifi.id",
  },
  description: "Choose the licensing model that best fits your organisation - from single buildings to enterprise-wide deployments. Per-building, enterprise, or outcome-based pricing.",
  alternates: {
    canonical: "https://unifi.id/pricing",
  },
  openGraph: {
    title: "Pricing | Flexible Licensing for Building Intelligence | unifi.id",
    description: "Choose the licensing model that best fits your organisation - from single buildings to enterprise-wide deployments. Per-building, enterprise, or outcome-based pricing.",
    url: "https://unifi.id/pricing",
  },
};

export default function Pricing() {
  return <PricingClient />;
}
