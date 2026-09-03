'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';

export default function PrivacyClient() {
  return (
    <>
<Section className="bg-white min-h-[40vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6">
          <H1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Privacy Policy (GDPR-Compliant)
          </H1>
          <Body className="text-lg text-gray-600">
            Last Updated: January 2025
          </Body>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</H2>
            <Body className="text-gray-700">
              Unifi.id, Limited is the data controller responsible for your personal data. We provide building intelligence, occupancy monitoring, and decarbonisation solutions to organisations.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">What Data We Collect</H2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Name, job title, company name</li>
              <li>Email address, phone number</li>
              <li>Usage data (pages visited, forms submitted)</li>
              <li>Information submitted via contact forms</li>
              <li>Technical data via cookies and analytics tools</li>
              <li>For clients: RFID tag data and occupancy system metadata</li>
            </ul>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Data</H2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To respond to enquiries</li>
              <li>To provide services and customer support</li>
              <li>To personalise content and improve user experience</li>
              <li>To deliver insights through our SaaS platform</li>
              <li>For legal and compliance purposes</li>
            </ul>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</H2>
            <Body className="text-gray-700 mb-4">
              We may share your data with trusted service providers and subcontractors who assist in delivering our services, and with legal or regulatory bodies when required by law.
            </Body>
            <Body className="text-gray-700 font-semibold">
              We never sell your data to third parties.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</H2>
            <Body className="text-gray-700">
              We retain your data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When no longer required, data is securely deleted or anonymised.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</H2>
            <Body className="text-gray-700 mb-4">
              Under GDPR, you have the right to:
            </Body>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Access or correct your data</li>
              <li>Request deletion or restriction of processing</li>
              <li>Object to processing</li>
              <li>Lodge a complaint with the ICO (UK) or your local supervisory authority</li>
            </ul>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Contact</H2>
            <Body className="text-gray-700">
              For privacy enquiries or to exercise your rights, contact us at{' '}
              <a href="mailto:privacy@unifi.id" className="text-unifi-blue hover:underline font-medium">privacy@unifi.id</a>
              . Unifi.id, Limited - Canary Wharf, London.
            </Body>
          </div>

          <div className="pt-8">
            <ButtonLink href="/legal-support" variant="secondary">Back to Legal & Support</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
