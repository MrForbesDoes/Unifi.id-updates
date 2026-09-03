import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: {
    absolute: "About Unifi.id | Our Mission, Approach & Commitment",
  },
  description: "Learn about Unifi.id, a smart building intelligence company based in Canary Wharf. We help organisations optimise estates for safety, efficiency, and net zero.",
  alternates: {
    canonical: "https://unifi.id/about",
  },
  openGraph: {
    title: "About Unifi.id | Our Mission, Approach & Commitment",
    description: "Learn about Unifi.id, a smart building intelligence company based in Canary Wharf. We help organisations optimise estates for safety, efficiency, and net zero.",
    url: "https://unifi.id/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
