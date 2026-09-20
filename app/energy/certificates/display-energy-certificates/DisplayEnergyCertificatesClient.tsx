'use client';

import Image from 'next/image';
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  CheckCircle,
  ClipboardList,
  Eye,
  Gauge,
  Layers,
  Ruler,
  School,
  Users,
} from 'lucide-react';

import Card from '@/src/components/Card';
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { H1, H2, H3, Body, Lead } from '@/src/components/Typography';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import RelatedEnergyServices from '@/src/components/RelatedEnergyServices';

const conditions = [
  {
    icon: Building2,
    title: 'Occupied by a public authority',
    body: 'The building is occupied in whole or in part by a public authority.',
  },
  {
    icon: Users,
    title: 'Frequently visited by the public',
    body: 'Members of the public visit the building frequently as part of its normal operation.',
  },
  {
    icon: Ruler,
    title: 'Over 250 square metres',
    body: 'The building has a total useful floor area greater than 250 square metres.',
  },
];

const certificateComparison = [
  {
    icon: Gauge,
    title: 'Display Energy Certificate',
    body: 'Uses actual metered energy consumption over the relevant 12-month period to show operational performance.',
  },
  {
    icon: ClipboardList,
    title: 'Energy Performance Certificate',
    body: 'Uses a standardised model of the building fabric and installed services to show calculated asset performance.',
  },
];

const validityPeriods = [
  {
    title: 'Buildings over 1,000 square metres',
    body: 'The DEC is valid for 12 months. The accompanying advisory report is valid for 7 years.',
  },
  {
    title: 'Buildings over 250 and up to 1,000 square metres',
    body: 'The DEC and advisory report are both valid for 10 years.',
  },
];

const monitoringConnections = [
  'Bring annual energy records together before the assessment is due.',
  'Use Energy Clamp Meters to understand selected circuits and fixed loads.',
  'Use Smart Sockets to see and control plug-in equipment where appropriate.',
  'Use TrackZero to connect operational data, actions and progress across the wider estate.',
  'Use continued monitoring to assess whether an intervention changed consumption.',
];

const estateCoordination = [
  'Maintain a single view of certificate and advisory-report status.',
  'Schedule renewals before certificates expire.',
  'Coordinate assessments and information gathering across multiple sites.',
  'Compare advisory reports to identify recurring issues and estate-wide opportunities.',
  'Prioritise monitoring and investment where the evidence indicates the greatest need.',
];

export default function DisplayEnergyCertificatesClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'display-energy-certificates');

  return (
    <>
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Public building entrance"
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
                <Eye className="h-4 w-4" aria-hidden="true" />
                <span>Energy Certificates · Display Energy Certificates</span>
              </div>

              <H1 className="mt-6 mb-6 text-white">
                Show How Your Public Building Actually Uses Energy
              </H1>

              <Lead className="max-w-3xl text-white/85">
                A Display Energy Certificate uses metered consumption to show how a public building
                has performed in operation. Unifi.id coordinates the assessment through an accredited
                assessor, helps estates manage renewals and connects the advisory report to a
                programme of measurable improvement.
              </Lead>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink
                  href="/energy/contact"
                  variant="primary"
                  data-track-event="energy_service_cta"
                  data-track-service="dec"
                  data-track-cta="Enquire About a Display Energy Certificate"
                >
                  Enquire About a Display Energy Certificate
                </ButtonLink>
                <ButtonLink
                  href="/energy/monitoring"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                  data-track-event="energy_crosslink"
                  data-track-service="dec"
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
          <div className="mb-10 max-w-4xl rounded-2xl border border-unifi-blue/15 bg-unifi-blue/5 p-6">
            <Body>
              We do not simply arrange a DEC. We help public-sector estates stay compliant, manage
              renewals and turn operational energy evidence into a programme of measurable
              improvement.
            </Body>
          </div>

          <div className="mb-10 max-w-4xl">
            <H2 className="mb-5">The Three Conditions That Make a DEC Apply</H2>
            <Body>
              In England and Wales, a Display Energy Certificate and advisory report are required when
              all three of the following conditions apply to the building:
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {conditions.map(({ icon: Icon, title, body }) => (
              <Card key={title} withImage={false} className="border-unifi-blue/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <H3 className="text-xl">{title}</H3>
                <Body>{body}</Body>
              </Card>
            ))}
          </div>

          <div className="mt-10 max-w-4xl rounded-2xl border border-unifi-blue/10 bg-unifi-light p-6">
            <Body>
              Buildings close to the threshold, mixed-use premises and sites made up of several blocks
              should be considered individually. The requirement follows the building, its occupier and
              its use.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <School className="h-6 w-6 text-unifi-blue" aria-hidden="true" />
              <H2>Most Schools and Academies Are Included</H2>
            </div>
            <Body>
              Department for Education guidance confirms that the requirement includes most schools and
              academies. For local authorities and academy trusts, the practical challenge is not one
              certificate. It is maintaining the right certificate and advisory report across every
              qualifying building, each with its own floor area, data and renewal date.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-5">Actual Energy Use, Not Calculated Asset Performance</H2>
            <Body>A DEC and an EPC answer different questions about a building.</Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certificateComparison.map(({ icon: Icon, title, body }) => (
              <Card key={title} withImage={false} className="border-unifi-blue/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <H3 className="text-xl">{title}</H3>
                <Body>{body}</Body>
              </Card>
            ))}
          </div>

          <div className="mt-10 max-w-4xl">
            <Body>
              The operational view responds to how the building is occupied and managed. It can reveal
              the effect of heating schedules, out-of-hours use, changing occupancy and practical
              operating decisions.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <H2 className="mb-5">An A to G Rating That Must Be Displayed</H2>
            <Body className="mb-4">
              The DEC shows operational energy performance on a scale from A to G, with A representing
              the best performance and G the worst. It also includes the operational rating figure used
              to benchmark the building against typical performance for its type.
            </Body>
            <Body className="mb-4">
              A valid certificate must be displayed at all times in a prominent place that is clearly
              visible to members of the public, such as a reception area, entrance or foyer. The
              occupier must also have a valid advisory report in its possession or control.
            </Body>
            <Body>
              Failing to display a valid certificate, or to hold a valid advisory report, carries fixed
              penalties of £500 and £1,000 respectively. Once renewals are managed centrally, staying
              compliant is straightforward.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <H2 className="mb-5">The Advisory Report Is the Starting Point for Action</H2>
            <Body className="mb-4">
              The certificate shows where the building currently sits. The advisory report identifies
              measures that may improve its energy performance, including operational changes, upgrades
              to building services and longer-term technology options.
            </Body>
            <Body>
              The recommendations should be treated as a starting point for investigation. Before
              investment is approved, they should be tested against the building&apos;s actual
              operating pattern, technical constraints and measured consumption.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <div className="flex items-center gap-3">
              <CalendarClock className="h-6 w-6 text-unifi-blue" aria-hidden="true" />
              <H2>Current Validity Periods</H2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {validityPeriods.map(({ title, body }) => (
              <Card key={title} withImage={false} className="border-unifi-blue/10 bg-white">
                <H3 className="text-xl">{title}</H3>
                <Body>{body}</Body>
              </Card>
            ))}
          </div>

          <div className="mt-10 max-w-4xl">
            <Body>
              A mixed estate may therefore contain annual and 10-year renewal cycles at the same time.
              Coordinating those dates centrally reduces the risk of certificates being overlooked. The
              government has said it will respond later in 2026 to consultation questions on when DECs
              are required and how long they last; the periods above apply until any change is made.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-5">Delivered Through an Accredited DEC Assessor</H2>
            <Body className="mb-4">
              Only an accredited and appropriately qualified energy assessor can produce and lodge a
              Display Energy Certificate and advisory report. The completed documents are lodged on the
              official register.
            </Body>
            <Body>
              Unifi.id is not an accredited DEC assessor and does not issue certificates. We arrange
              and coordinate the assessment through an accredited assessor, help organise site
              information and energy records, manage the process across one or many buildings, track
              renewal dates and connect the findings to the wider energy programme.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card withImage={false} className="border-unifi-blue/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <Building2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <H3 className="text-xl">Unifi.id</H3>
              <Body>
                Coordinates the process, data gathering, renewal programme and improvement
                follow-through.
              </Body>
            </Card>
            <Card withImage={false} className="border-unifi-blue/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <BadgeCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <H3 className="text-xl">Accredited DEC assessor</H3>
              <Body>
                Reviews the building and energy information, produces the DEC and advisory report, and
                lodges the documents.
              </Body>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <H2 className="mb-5">Connect the Certificate to Monitoring and Improvement</H2>
            <Body className="mb-8">
              A DEC is built from metered consumption. Better energy information therefore supports
              both the certificate process and the decisions that follow it.
            </Body>

            <ul className="space-y-4">
              {monitoringConnections.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <Layers className="h-6 w-6 text-unifi-blue" aria-hidden="true" />
              <H2>Coordinate a Multi-Site Estate</H2>
            </div>
            <Body className="mb-8">
              A council, NHS body or academy trust may be managing the same requirement across dozens
              or hundreds of qualifying buildings. Unifi.id can help turn separate certificates and
              expiry dates into one coordinated programme.
            </Body>

            <ul className="space-y-4">
              {estateCoordination.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray" className="scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6" id="display-energy-certificate-enquiry">
          <H2 className="mb-5">Arrange a Display Energy Certificate</H2>
          <Body className="mb-8">
            Tell us how many buildings are involved, their approximate floor areas and whether you need
            a first certificate, a renewal programme or support acting on advisory-report findings. We
            will explain the assessment route and how the operational evidence can support a wider
            programme of improvement.
          </Body>

          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href="/energy/contact"
              data-track-event="energy_service_cta"
              data-track-service="dec"
              data-track-cta="Enquire About a Display Energy Certificate"
            >
              Enquire About a Display Energy Certificate
            </ButtonLink>
            <ButtonLink
              href="/energy/monitoring"
              variant="secondary"
              data-track-event="energy_crosslink"
              data-track-service="dec"
              data-track-cta="Explore Energy Monitoring"
            >
              Explore Energy Monitoring
            </ButtonLink>
          </div>

          <p className="mt-12 border-t border-gray-200 pt-6 text-sm leading-relaxed text-unifi-gray">
            This page provides general information about Display Energy Certificate requirements in
            England and Wales and is not legal advice. Requirements should be confirmed for the
            individual building. Different arrangements apply elsewhere in the UK. Requirements are
            under review and are expected to change during 2026. This page was last reviewed on 16
            September 2026.
          </p>
        </div>
      </Section>

      <RelatedEnergyServices
        backgroundColor="white"
        heading="Where this leads next"
        links={[
          {
            href: '/energy/monitoring/energy-clamp-meters',
            label: 'Energy Clamp Meters',
            description: 'Circuit-level visibility across lighting, HVAC, compressors and fixed plant.',
            service: 'clamp-meters',
          },
          {
            href: '/energy/carbon-reporting',
            label: 'TrackZero Carbon Reporting',
            description: 'Connect operational data, actions and progress across the wider estate.',
            service: 'trackzero',
          },
          {
            href: '/energy/technology',
            label: 'Technology Options',
            description: 'LED, heating, solar and the upgrades an advisory report often points to.',
            service: 'technology',
          },
        ]}
      />
    </>
  );
}
