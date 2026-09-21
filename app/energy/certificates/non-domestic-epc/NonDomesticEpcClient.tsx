'use client';

import Image from 'next/image';
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  CheckCircle,
  ClipboardList,
  FileSearch,
  FileText,
  Layers,
  Scale,
  Target,
  TrendingDown,
} from 'lucide-react';

import Card from '@/src/components/Card';
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { H1, H2, H3, Body, Lead } from '@/src/components/Typography';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import SectionImage from '@/src/components/SectionImage';
import UnifiMark from '@/src/components/UnifiMark';
import RelatedEnergyServices from '@/src/components/RelatedEnergyServices';

const triggerPoints = [
  'A newly constructed building is being completed and handed over.',
  'A building, or a separately occupied part of it, is being sold.',
  'A building, or a separately occupied part of it, is being let to a new tenant.',
];

const assessmentOutputs = [
  {
    icon: Scale,
    title: 'An A to G rating',
    body: 'A consistent view of modelled energy performance that allows one building to be compared with another.',
  },
  {
    icon: ClipboardList,
    title: 'A recommendation report',
    body: 'Potential measures that may improve the building’s energy performance. It is a starting point for further investigation, not a costed design.',
  },
  {
    icon: BadgeCheck,
    title: 'An official record',
    body: 'The certificate is lodged on the government register, where its authenticity and current status can be checked.',
  },
];

const exemptionCategories = [
  'Places of worship and buildings used for religious activities.',
  'Temporary buildings with a planned time of use of two years or less.',
  'Stand-alone buildings with a total useful floor area of less than 50 square metres.',
  'Industrial sites, workshops and non-residential agricultural buildings with low energy demand.',
  'Buildings due to be demolished, where the relevant conditions are met.',
  'Certain protected buildings, where compliance with minimum energy performance requirements would unacceptably alter their character or appearance.',
];

const businessCaseSteps = [
  {
    icon: FileSearch,
    title: 'Read the recommendations in context',
    body: 'Identify which measures are genuinely relevant to the building and its intended use.',
  },
  {
    icon: Target,
    title: 'Test the opportunity with measured data',
    body: 'Use utility, circuit-level or appliance-level information to understand where energy is actually being consumed.',
  },
  {
    icon: ClipboardList,
    title: 'Prioritise and sequence the work',
    body: 'Compare cost, disruption, carbon impact, operational value and available funding before committing investment.',
  },
  {
    icon: TrendingDown,
    title: 'Verify the result',
    body: 'Continue measuring after an intervention so the outcome can be assessed rather than assumed.',
  },
];

const portfolioSupport = [
  'Maintain a consolidated view of certificate status and validity dates.',
  'Plan assessments ahead of sales, lettings and lease events.',
  'Coordinate accredited assessors across multiple sites.',
  'Review recommendation reports together to identify repeated estate-wide opportunities.',
  'Connect certificate findings to monitoring, technology and funding decisions.',
];

export default function NonDomesticEpcClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'non-domestic-epc');

  return (
    <>
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Commercial building exterior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-blue/20 via-transparent to-unifi-blue/10" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl pt-16">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-white/75">
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>Energy Certificates · Non-Domestic EPC</span>
              </div>

              <H1 className="mt-6 mb-6 text-white">
                Understand Your Building&apos;s Energy Rating and What to Do Next
              </H1>

              <Lead className="max-w-3xl text-white/85">
                A Non-Domestic EPC provides a standardised rating of a building&apos;s energy
                performance. It can meet an immediate requirement for construction, sale or letting,
                but its value should not end when the certificate is lodged. Unifi.id coordinates the
                assessment through an accredited non-domestic energy assessor and helps turn the
                recommendation report into a practical improvement plan.
              </Lead>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink
                  href="/energy/contact"
                  variant="primary"
                  data-track-event="energy_service_cta"
                  data-track-service="non-domestic-epc"
                  data-track-cta="Enquire About a Non-Domestic EPC"
                >
                  Enquire About a Non-Domestic EPC
                </ButtonLink>
                <ButtonLink
                  href="/energy/monitoring"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                  data-track-event="energy_crosslink"
                  data-track-service="non-domestic-epc"
                  data-track-cta="Explore Energy Monitoring"
                >
                  Explore Energy Monitoring
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
            <H2 className="mb-5">When a Non-Domestic EPC Is Generally Required</H2>
            <Body className="mb-8">
              In England and Wales, a Non-Domestic EPC is generally required when a qualifying
              non-domestic building is constructed, sold or rented out. The requirement can apply to a
              whole building or to a part designed or altered for separate occupation.
            </Body>

            <ul className="mb-8 space-y-4">
              {triggerPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>

            <Body>
              Where a valid certificate already exists, it can normally be reused for the transaction.
              A Non-Domestic EPC remains valid for its full period unless a newer certificate is
              lodged, in which case the newer certificate becomes the valid one. A lease renewal or
              extension with an existing tenant does not trigger a new certificate. An EPC should be
              commissioned before marketing begins, and the government has said it intends to require
              a certificate to be in place from the point a building is first marketed. Requirements
              should always be checked against the circumstances of the individual property.
            </Body>
          </div>
            <SectionImage src="/unifi-assets/canary/photo-1694979822204-ec3713409a36.webp" alt="Commercial office buildings that need a Non-Domestic EPC when sold or let" className="" />
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
            <H2 className="mb-5">Minimum Standards Also Apply to Let Property</H2>
            <Body className="mb-4">
              Under the Minimum Energy Efficiency Standards, a landlord in England and Wales cannot
              let, or continue to let, a non-domestic property with an EPC rating below E unless a
              valid exemption has been registered. The rating on a Non-Domestic EPC therefore affects
              what an owner can do with a building, not only what has to be disclosed.
            </Body>
            <Body>
              Government has proposed raising the minimum standard over the coming years and has not
              yet confirmed a timetable. Planning improvements now, with the recommendation report as
              the starting point, avoids a transaction or a lease event forcing the work at short
              notice.
            </Body>
          </div>
            <SectionImage src="/unifi-assets/corporate/photo-1517502884422-41eaead166d4.webp" alt="Let office space subject to the Minimum Energy Efficiency Standards" className=" lg:order-first" />
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-5">What the Assessment Provides</H2>
            <Body>
              The assessment produces a certificate and recommendation report based on a standardised
              model of the building, its fabric and its installed services.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {assessmentOutputs.map(({ icon: Icon, title, body }) => (
              <Card key={title} withImage={false} className="border-unifi-blue/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <H3 className="text-xl">{title}</H3>
                <Body>{body}</Body>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-5">Delivered Through an Accredited Assessor</H2>
            <Body className="mb-4">
              A Non-Domestic EPC must be produced by an accredited and appropriately qualified
              non-domestic energy assessor. The assessor completes the assessment and lodges the
              certificate on the official register for England and Wales.
            </Body>
            <Body>
              Unifi.id is not an accredited energy assessor and does not issue certificates. We
              arrange and coordinate the assessment through an accredited assessor, help organise
              access, drawings and site information, keep the process moving and connect the completed
              recommendation report to the wider energy programme.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card withImage={false} className="border-unifi-blue/10 bg-white">
              <div className="mb-4 flex h-12 items-center">
                <UnifiMark className="h-6" />
              </div>
              <H3 className="text-xl">Unifi.id</H3>
              <Body>Coordinates the process, site information and next-stage improvement planning.</Body>
            </Card>
            <Card withImage={false} className="border-unifi-blue/10 bg-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <BadgeCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <H3 className="text-xl">Accredited assessor</H3>
              <Body>
                Carries out the assessment, produces the certificate and recommendation report, and
                lodges the result.
              </Body>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <CalendarClock className="h-6 w-6 text-unifi-blue" aria-hidden="true" />
              <H2>How Long a Non-Domestic EPC Lasts</H2>
            </div>
            <Body className="mb-4">
              A Non-Domestic EPC is currently valid for 10 years, or until it is replaced by a newer
              certificate. The same valid certificate can generally be used for more than one sale or
              letting during that period. Changes to validity periods were consulted on during 2025;
              at the time of writing the 10-year period continues to apply.
            </Body>
            <Body>
              A voluntary reassessment may still be useful after material improvements, particularly
              where an owner wants the registered rating to reflect the upgraded building before a sale
              or letting.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <H2 className="mb-5">Exemptions Need to Be Confirmed for the Property</H2>
            <Body className="mb-8">
              Some buildings are outside the requirement or are treated differently. The main
              categories in England and Wales are:
            </Body>

            <ul className="mb-8 space-y-4">
              {exemptionCategories.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>

            <Body className="mb-4">
              The last of these is changing. In its March 2026 response, the government confirmed that
              it intends to remove the EPC exemption for heritage buildings, so that they will need a
              valid certificate when marketed, let or sold. An exemption from minimum standards will
              remain where the improvements would unacceptably alter the building&apos;s special
              character. Timing is still to be confirmed.
            </Body>
            <Body>
              The position depends on the building&apos;s construction, use, services and
              circumstances, and an exemption that applied in the past will not necessarily apply
              today. Unifi.id can help identify which buildings appear likely to need an assessment and
              coordinate the next step. Any legal reliance on an exemption should be confirmed for the
              individual property.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] mb-10">
            <div>
            <H2 className="mb-5">Turn Recommendations into an Improvement Business Case</H2>
            <Body>
              The recommendation report is generated from a standardised model. It identifies
              potential measures, but it does not know how the building is operated, which loads are
              driving cost or which intervention best fits the capital plan.
            </Body>
          </div>
            <SectionImage src="/unifi-assets/hero-4.webp" alt="Reviewing an energy improvement business case from an EPC recommendation report" className="" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {businessCaseSteps.map(({ icon: Icon, title, body }) => (
              <Card key={title} withImage={false} className="border-unifi-blue/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <H3 className="text-xl">{title}</H3>
                <Body>{body}</Body>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
            <div className="mb-5 flex items-center gap-3">
              <Layers className="h-6 w-6 text-unifi-blue" aria-hidden="true" />
              <H2>Support Across a Portfolio</H2>
            </div>
            <Body className="mb-8">
              Across a multi-site estate, Non-Domestic EPCs become a coordination challenge. Buildings
              have different certificates, lodgement dates, lease events and improvement needs.
              Unifi.id can help bring those moving parts into one managed programme.
            </Body>

            <ul className="space-y-4">
              {portfolioSupport.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>
          </div>
            <SectionImage src="/unifi-assets/hero-1d.webp" alt="Multi-building commercial property portfolio" className=" lg:order-first" />
          </div>
        </div>
      </Section>

      <Section backgroundColor="white" className="scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6" id="non-domestic-epc-enquiry">
          <H2 className="mb-5">Arrange a Non-Domestic EPC</H2>
          <Body className="mb-8">
            Tell us about the building or portfolio, the reason for the assessment and any relevant
            transaction or programme date. We will explain what information is needed, coordinate the
            assessment route and show how the result can support the next decision.
          </Body>

          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href="/energy/contact"
              data-track-event="energy_service_cta"
              data-track-service="non-domestic-epc"
              data-track-cta="Enquire About a Non-Domestic EPC"
            >
              Enquire About a Non-Domestic EPC
            </ButtonLink>
            <ButtonLink
              href="/energy/monitoring"
              variant="secondary"
              data-track-event="energy_crosslink"
              data-track-service="non-domestic-epc"
              data-track-cta="Explore Energy Monitoring"
            >
              Explore Energy Monitoring
            </ButtonLink>
          </div>

          <p className="mt-12 border-t border-gray-200 pt-6 text-sm leading-relaxed text-unifi-gray">
            This page provides general information about Non-Domestic EPC requirements in England and
            Wales and is not legal advice. Requirements and exemptions should be confirmed for the
            individual property. Different rules apply in Scotland and Northern Ireland. Requirements
            are under review and are expected to change during 2026. This page was last reviewed on 16
            September 2026.
          </p>
        </div>
      </Section>

      <RelatedEnergyServices
        backgroundColor="gray"
        heading="Where this leads next"
        links={[
          {
            href: '/energy/monitoring',
            label: 'Energy Monitoring',
            description: 'Test the recommendation report against how the building actually uses energy.',
            service: 'monitoring',
          },
          {
            href: '/energy/technology',
            label: 'Technology Options',
            description: 'LED, heating, solar and the wider upgrades behind a rating improvement.',
            service: 'technology',
          },
          {
            href: '/energy/funding-options',
            label: 'Funding Options',
            description: 'Routes that can reduce or remove upfront capital, subject to eligibility.',
            service: 'funding',
          },
        ]}
      />
    </>
  );
}
