import type { Metadata } from 'next';
import TheEnergyTrapClient from './TheEnergyTrapClient';

export const metadata: Metadata = {
  title: 'The Energy Trap | Why the Cost of Waiting Only Grows',
  description:
    'A Unifi.id decarbonisation paper on why UK electricity prices remain structurally high, why wasted energy compounds over time, and why acting sooner is the cheaper move.',
  keywords: ['the energy trap', 'energy trap', 'UK electricity prices', 'decarbonisation', 'unifi.id'],
  alternates: {
    canonical: 'https://unifi.id/energy/the-energy-trap',
  },
  openGraph: {
    title: 'The Energy Trap | Why the Cost of Waiting Only Grows',
    description:
      'A Unifi.id decarbonisation paper on why UK electricity prices remain structurally high, why wasted energy compounds over time, and why acting sooner is the cheaper move.',
    url: 'https://unifi.id/energy/the-energy-trap',
  },
};

export default function TheEnergyTrap() {
  return <TheEnergyTrapClient />;
}
