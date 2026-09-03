import type { Metadata } from 'next';
import EnergyFundingOptionsClient from './EnergyFundingOptionsClient';

export const metadata: Metadata = {
  title: {
    absolute: "Funding Options | Energy Upgrades Without Upfront Capital | unifi.id",
  },
  description: "Multiple funding routes available to support your building upgrade programme with zero upfront capital required.",
  alternates: {
    canonical: "https://unifi.id/energy/funding-options",
  },
  openGraph: {
    title: "Funding Options | Energy Upgrades Without Upfront Capital | unifi.id",
    description: "Multiple funding routes available to support your building upgrade programme with zero upfront capital required.",
    url: "https://unifi.id/energy/funding-options",
  },
};

export default function FundingOptions() {
  return <EnergyFundingOptionsClient />;
}
