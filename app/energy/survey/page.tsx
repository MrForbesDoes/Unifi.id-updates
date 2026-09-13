import type { Metadata } from 'next';
import EnergySurveyClient from './EnergySurveyClient';

export const metadata: Metadata = {
  title: {
    absolute: "Book a Free Energy Survey | Unifi.id",
  },
  description: "Book a free, no-obligation energy survey with Unifi.id. Get an expert assessment, savings projections, and funded upgrade options subject to eligibility.",
  alternates: {
    canonical: "https://unifi.id/energy/survey",
  },
  openGraph: {
    title: "Book a Free Energy Survey | Unifi.id",
    description: "Book a free, no-obligation energy survey with Unifi.id. Get an expert assessment, savings projections, and funded upgrade options subject to eligibility.",
    url: "https://unifi.id/energy/survey",
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function EnergySurveyPage() {
  return <EnergySurveyClient />;
}
