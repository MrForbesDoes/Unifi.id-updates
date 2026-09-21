import type { Metadata } from 'next';
import JsonLd from '@/src/components/JsonLd';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/src/lib/schema';
import CarbonReportingClient from './CarbonReportingClient';

const description =
  'Carbon reporting and action planning for councils, schools and academy trusts. Through our partnership with TrackZero, Unifi.id brings carbon data, actions and progress into one structured platform.';

export const metadata: Metadata = {
  title: {
    absolute: 'Carbon Reporting for Councils, Schools and Academy Trusts | unifi.id',
  },
  description,
  keywords: ["carbon reporting", "carbon reporting for councils", "carbon accounting for councils", "school carbon reporting", "climate action plan schools", "climate action plan for schools", "academy trust carbon reporting", "SECR academy trust", "TrackZero", "unifi.id"],
  alternates: {
    canonical: 'https://unifi.id/energy/carbon-reporting',
  },
  openGraph: {
    title: 'Carbon Reporting for Councils, Schools and Academy Trusts | unifi.id',
    description,
    url: 'https://unifi.id/energy/carbon-reporting',
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function CarbonReportingPage() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            "name": "Carbon reporting and action planning",
            "serviceType": "Carbon reporting and climate action planning",
            "audiences": [
              "Local authorities",
              "Schools and academy trusts",
              "Universities"
            ],
            "alternateNames": [
              "Climate Action Plan support for schools",
              "Carbon accounting for councils"
            ],
            "description": "Carbon reporting and action planning for councils, schools and academy trusts. Through our partnership with TrackZero, Unifi.id brings carbon data, actions and progress into one structured platform.",
            "path": "/energy/carbon-reporting/"
          }),
          buildBreadcrumbSchema([{"name": "Home", "path": "/"}, {"name": "Energy Solutions", "path": "/energy/hub/"}, {"name": "Carbon Reporting", "path": "/energy/carbon-reporting/"}]),
        ]}
      />
      <CarbonReportingClient />
    </>
  );
}
