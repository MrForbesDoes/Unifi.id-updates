'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';

export default function ModernSlaveryClient() {
  return (
    <>
<Section className="bg-white min-h-[40vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6">
          <H1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Modern Slavery Statement
          </H1>
          <Body className="text-lg text-gray-600">
            Financial Year 2024/25
          </Body>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Introduction from the Managing Director</H2>
            <Body className="text-gray-700">
              Unifi.id is committed to acting ethically and with integrity in all our business relationships. We have a zero-tolerance approach to modern slavery and human trafficking. This statement sets out the steps we have taken to ensure that slavery and human trafficking are not taking place in our business or supply chains.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Organisation's Structure</H2>
            <Body className="text-gray-700">
              Unifi.id, Limited is a UK-based company providing building intelligence and decarbonisation solutions. We operate from our headquarters in Canary Wharf, London, with a focused team and a supply chain predominantly based in the UK and EU.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Our Business</H2>
            <Body className="text-gray-700">
              We deliver real-time building intelligence through our Cortex™ platform, FireGuard fire safety solutions, and funded energy upgrades. Our business model centres on software, hardware integration, and project delivery with established technology and installation partners.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Our Clients</H2>
            <Body className="text-gray-700">
              Our clients include organisations such as Central Working, UCL, Deloitte, and a range of educational institutions, public sector bodies, and commercial estates. We work with clients who share our commitment to ethical and sustainable operations.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Our Policies on Slavery and Human Trafficking</H2>
            <Body className="text-gray-700">
              We are committed to ensuring there is no modern slavery or human trafficking in our supply chains or in any part of our business. Our policies reflect our commitment to acting ethically and with integrity in all our business relationships.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Due Diligence on Slavery and Human Trafficking</H2>
            <Body className="text-gray-700 mb-4">
              As part of our initiative to identify and mitigate risk:
            </Body>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>We limit our geographical scope to lower-risk jurisdictions (UK, EU, and established technology hubs)</li>
              <li>We maintain long-standing relationships with partners and conduct appropriate due diligence</li>
              <li>We have whistle-blower protection systems in place to encourage reporting of concerns</li>
            </ul>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Adherence to our Values</H2>
            <Body className="text-gray-700">
              We have a zero-tolerance approach to modern slavery. We expect the same high standards from all our contractors, suppliers, and partners. We will not work with any organisation that fails to meet these standards.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Training</H2>
            <Body className="text-gray-700">
              We provide training to relevant staff on the risks of modern slavery and human trafficking in our supply chains. This ensures that our team can identify and report any concerns.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Our Effectiveness in Combating Slavery and Human Trafficking</H2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Completion of supplier risk assessments and house audits where appropriate</li>
              <li>Labour monitoring systems and verification of working conditions</li>
              <li>Communication with suppliers on our expectations and ongoing dialogue</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <Body className="text-gray-600 italic mb-6">
              This statement is made pursuant to section 54(1) of the Modern Slavery Act 2015 and constitutes our slavery and human trafficking statement for the financial year 2024/25.
            </Body>
            <div className="border-l-4 border-unifi-blue pl-6">
              <Body className="font-bold text-gray-900">Paul Sheedy</Body>
              <Body className="text-gray-700">CEO & Founder</Body>
              <Body className="text-gray-700">Unifi.id, Limited</Body>
            </div>
          </div>

          <div className="pt-8">
            <ButtonLink href="/legal-support" variant="secondary">Back to Legal & Support</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
