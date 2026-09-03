import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'unifi.id – Movement Intelligence with IoT – Seamless data solutions for smarter buildings',
  description:
    'Analytics and data insights are vital to build a structure to attain your ESG targets and avoid greenwashing. Unifi.id',
  alternates: {
    canonical: 'https://unifi.id/',
  },
  openGraph: {
    title: 'unifi.id – Movement Intelligence with IoT',
    description:
      'Analytics and data insights are vital to build a structure to attain your ESG targets and avoid greenwashing. Unifi.id',
    url: 'https://unifi.id/',
  },
};

export default function Home() {
  return <HomeClient />;
}
