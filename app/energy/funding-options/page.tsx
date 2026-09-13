import type { Metadata } from 'next';
import EnergyFundingOptionsClient from './EnergyFundingOptionsClient';

export const metadata: Metadata = {
  title: {
    absolute: "Funding Options | Energy Upgrades Without Upfront Capital | unifi.id",
  },
  description: "Multiple funding routes to support your building upgrade programme, including options that reduce or remove upfront capital, subject to eligibility.",
  alternates: {
    canonical: "https://unifi.id/energy/funding-options",
  },
  openGraph: {
    title: "Funding Options | Energy Upgrades Without Upfront Capital | unifi.id",
    description: "Multiple funding routes to support your building upgrade programme, including options that reduce or remove upfront capital, subject to eligibility.",
    url: "https://unifi.id/energy/funding-options",
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function FundingOptions() {
  return <EnergyFundingOptionsClient />;
}
