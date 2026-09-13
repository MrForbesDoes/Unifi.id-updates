'use client';

import Image from 'next/image';
import {
  Activity,
  BadgeCheck,
  CalendarClock,
  CheckCircle,
  ClipboardList,
  Eye,
  Gauge,
  Landmark,
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

const qualifyingConditions = [
  {
    title: 'Occupied by a public authority',
    body:
      'The building is occupied, in whole or in part, by a public authority. That covers a wide range of organisations, from councils and NHS bodies to schools and academy trusts.',
    icon: Landmark,
  },
  {
    title: 'Frequently visited by the public',
    body:
      'The building is frequently visited by members of the public. It is the pattern of public visiting that matters, not whether the building is formally described as public-facing.',
    icon: Users,
  },
  {
    title: 'Over 250 square metres of useful floor area',
    body:
      'The building has a total useful floor area of more than 250 square metres. Floor area is assessed for the building, which is why larger sites made up of several blocks need to be looked at carefully.',
    icon: Ruler,
  },
];

const advisoryReportContents = [
  'Recommended measures for improving the operational energy performance of the building',
  'An indication of the relative effort or investment each measure is likely to involve',
  'A practical starting point for discussion between estates, finance and facilities teams',
  'A reference document the assessor produces alongside the certificate itself',
];

const monitoringLinkedBenefits = [
  'Annual energy figures stop being a once-a-year data-gathering exercise',
  'Out-of-hours and holiday consumption becomes visible, which is often where the easiest savings sit',
  'Changes made during the year can be checked against the meter rather than assumed',
  'The following year’s certificate is supported by evidence you have already been watching',
];

const estateCoordination = [
  'A single register of which buildings hold a current certificate and when each one expires',
  'Renewals scheduled ahead of time rather than chased after the date has passed',
  'Assessments coordinated through accredited assessors across many sites at once',
  'Advisory report findings compared across the estate, so recurring issues can be tackled as a programme',
];

export default function DisplayEnergyCertificatesClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'display-energy-certificates');

  return (
    <>
      <Section className="relative overflow-hidden min-h-[72vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Entrance of a public building of the kind that requires a Display Energy Certificate"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-blue/20 via-transparent to-unifi-blue/10" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl pt-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                <Eye className="h-4 w-4" />
                Energy certificates · Display Energy Certificates
              </div>

              <H1 className="mt-6 mb-6 text-white">
                Show How Your Public Building Actually Uses Energy
              </H1>

              <Lead className="max-w-3xl text-white/85">
                We do not simply arrange a DEC. We help public-sector estates stay compliant, manage
                renewals and turn operational energy evidence into a programme of measurable
                improvement.
              </Lead>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="#dec-enquiry">Enquire about a Display Energy Certificate</ButtonLink>
                <ButtonLink
                  href="/energy/monitoring"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
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
          <div className="max-w-4xl mb-10">
            <H2 className="mb-4">The three conditions that make a DEC apply</H2>
            <Body>
              In England and Wales, the Display Energy Certificate requirement is built on three
              conditions. All three need to apply to the same building before a certificate is
              required, which is why two neighbouring sites can be treated differently.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {qualifyingConditions.map((condition) => (
              <div key={condition.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <condition.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <H3 className="mb-3 text-xl">{condition.title}</H3>
                <Body>{condition.body}</Body>
              </div>
            ))}
          </div>

          <Body className="mt-8 max-w-4xl">
            Where a building sits close to one of those thresholds, or where a site is made up of
            several connected buildings, the position is worth establishing properly rather than
            assumed either way.
          </Body>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <H2 className="mb-4">Most schools and academies are included</H2>
              <Body className="mb-6">
                Schools are one of the clearest examples of all three conditions applying at once.
                They are occupied by a public authority, they are frequently visited by parents,
                carers, governors and the wider community, and most school buildings comfortably
                exceed the floor area threshold.
              </Body>
              <Body className="mb-6">
                That applies to maintained schools and to academies and academy trusts alike. The
                governance arrangement differs, but the certificate requirement follows the building
                and its use, not the funding route. For a multi-academy trust, the practical effect is
                that the obligation repeats across every qualifying site in the trust, each with its
                own renewal date.
              </Body>
              <Body>
                Colleges, sixth forms and other education settings should be assessed on the same
                three conditions rather than by assuming a category applies.
              </Body>
            </div>

            <Card
              className="border-unifi-blue/10"
              imageSrc="/unifi-assets/corporate/photo-1590650046871-92c887180603.webp"
              imageAlt="School business manager reviewing building energy information on a laptop"
              imageAspectClassName="aspect-[4/3]"
              seed="dec-schools"
            >
              <div className="flex items-center gap-3">
                <School className="h-6 w-6 text-unifi-blue" aria-hidden="true" />
                <H3 className="text-xl">One requirement, many sites</H3>
              </div>
              <Body>
                For trusts and local authorities, the difficulty is rarely understanding the
                requirement. It is keeping track of dozens of buildings, each with its own
                certificate, its own expiry date and its own energy data to gather.
              </Body>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <H2 className="mb-4">Actual energy use, not calculated performance</H2>
            <Body>
              This is the difference that matters most, and the one most often missed. A Display
              Energy Certificate and an EPC answer two different questions about the same building.
            </Body>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-unifi-blue/10 bg-unifi-blue/5 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <Activity className="h-6 w-6" aria-hidden="true" />
              </div>
              <H3 className="mb-3 text-xl">A DEC measures operational energy use</H3>
              <Body>
                The rating is based on the energy the building has actually consumed over the previous
                twelve months, taken from meter readings and fuel records. It reflects how the
                building is really run: occupancy patterns, heating schedules, equipment left on
                overnight, and the decisions made day to day.
              </Body>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-unifi-light p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <Gauge className="h-6 w-6" aria-hidden="true" />
              </div>
              <H3 className="mb-3 text-xl">An EPC models asset performance</H3>
              <Body>
                An EPC rating is calculated from the building fabric and installed services under
                standardised assumptions. It describes the building as designed rather than as
                operated, which is why a well-specified building can still consume far more energy
                than its asset rating suggests.
              </Body>
            </div>
          </div>

          <Body className="mt-8 max-w-4xl">
            Both have a place. The operational view is the one that changes when you change how the
            building is run, which is what makes it useful as a management tool rather than only a
            compliance document.
          </Body>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <H2 className="mb-4">The A to G rating and the duty to display it</H2>
              <Body className="mb-6">
                A Display Energy Certificate reports the building&rsquo;s operational energy
                performance on a scale from A to G, with A representing the best performance and G the
                worst. The letter band is accompanied by an operational rating figure, benchmarked
                against typical performance for that type of building, so the band is always shown
                with the number behind it rather than on its own.
              </Body>
              <Body className="mb-6">
                The certificate is not a document to be filed. It must be displayed in a place that is
                prominently visible to the public who visit the building, which in practice usually
                means a reception area, main entrance or foyer.
              </Body>
              <Body>
                That public display is the point of the scheme. It puts the same information in front
                of staff, visitors, parents and elected members, and it tends to prompt questions that
                a filed certificate never would.
              </Body>
            </div>

            <div className="rounded-3xl border border-unifi-blue/10 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </div>
              <H3 className="mb-3 text-xl">Displayed, and readable</H3>
              <Body>
                Worth checking alongside the requirement itself: that the certificate on the wall is
                the current one, that it is at a height where it can actually be read, and that the
                band and rating figure are both legible rather than obscured by other notices.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Card
              className="border-unifi-blue/10"
              imageSrc="/unifi-assets/corporate/photo-1504384308090-c894fdcc538d.webp"
              imageAlt="Facilities and estates colleagues reviewing an advisory report together"
              imageAspectClassName="aspect-[16/10]"
              seed="dec-advisory-report"
            >
              <div className="flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-unifi-blue" aria-hidden="true" />
                <H3 className="text-xl">The half that gets forgotten</H3>
              </div>
              <Body>
                The certificate goes on the wall and the advisory report goes in a drawer. Reversing
                that habit is the single cheapest improvement most estates can make to how they use
                the process.
              </Body>
            </Card>

            <div className="max-w-3xl">
              <H2 className="mb-4">The advisory report</H2>
              <Body className="mb-6">
                A Display Energy Certificate is issued together with an advisory report. The
                certificate tells you where the building currently sits. The advisory report is the
                part that talks about what could change.
              </Body>
              <ul className="space-y-4">
                {advisoryReportContents.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
              <Body className="mt-6">
                Because the recommendations are generated from a standard methodology, they should be
                read as a prompt rather than a specification. Which measures are worth pursuing
                depends on how your building is actually used, and that is a question for your
                consumption data.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <H2 className="mb-4">How long a certificate and advisory report last</H2>
            <Body>
              Validity depends on the size of the building, and the certificate and the advisory
              report do not always expire together. These are the current periods in England and
              Wales.
            </Body>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-unifi-blue/10 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <CalendarClock className="h-6 w-6" aria-hidden="true" />
              </div>
              <H3 className="mb-3 text-xl">Buildings over 1,000 square metres</H3>
              <Body>
                The Display Energy Certificate is valid for twelve months and needs to be renewed
                annually. The accompanying advisory report is valid for seven years, so it carries
                across several certificate cycles.
              </Body>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <CalendarClock className="h-6 w-6" aria-hidden="true" />
              </div>
              <H3 className="mb-3 text-xl">Buildings between 250 and 1,000 square metres</H3>
              <Body>
                Both the Display Energy Certificate and the advisory report are valid for ten years,
                so the renewal cycle is far less frequent than for larger buildings.
              </Body>
            </div>
          </div>

          <Body className="mt-8 max-w-4xl">
            For a mixed estate, this is where the administrative burden comes from. A larger building
            needs attention every year while a smaller one does not come round again for a decade,
            and the two cycles rarely line up neatly.
          </Body>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <H2 className="mb-4">Certificates must come from an accredited assessor</H2>
              <Body className="mb-6">
                A Display Energy Certificate and its advisory report must be produced by an energy
                assessor who is accredited for this type of assessment, and the certificate is lodged
                on the official register for England and Wales.
              </Body>
              <Body>
                Unifi.id is not an accredited DEC assessor and does not issue certificates. We arrange
                the assessment and coordinate it through an accredited assessor. What we add is
                everything around that: collating the twelve months of energy data the assessment
                needs, keeping renewal dates under control across an estate, and making sure the
                advisory report feeds into a plan rather than a drawer.
              </Body>
            </div>

            <div className="rounded-3xl border border-unifi-blue/10 bg-unifi-blue/5 p-8">
              <H3 className="mb-5 text-xl">How the work divides</H3>
              <ul className="space-y-4">
                {[
                  'We arrange the assessment and coordinate site access and information',
                  'We gather and check the twelve months of consumption data the assessment relies on',
                  'An accredited assessor carries out the assessment and lodges the certificate',
                  'We track expiry dates and manage renewals across your buildings',
                  'We help you act on the advisory report and measure whether it worked',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <H2 className="mb-4">Connecting the certificate to monitoring and improvement</H2>
            <Body>
              Because a Display Energy Certificate is based on metered consumption, anything that
              improves the quality and frequency of your energy data improves the certificate process
              too. It also turns an annual obligation into something you can manage continuously.
            </Body>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <H3 className="mb-4 text-xl">What better data changes</H3>
              <ul className="space-y-4">
                {monitoringLinkedBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-unifi-blue/10 bg-white p-8 shadow-sm">
              <H3 className="mb-4 text-xl">Where to go next</H3>
              <Body className="mb-6">
                Each of these pages covers one part of the route from an annual certificate to a
                programme of improvement you can evidence.
              </Body>
              <div className="flex flex-col gap-3">
                <ButtonLink href="/energy/monitoring" variant="secondary" size="sm">
                  See how Energy Monitoring supports annual reporting
                </ButtonLink>
                <ButtonLink href="/energy/monitoring/energy-clamp-meters/" variant="secondary" size="sm">
                  Read about Energy Clamp Meters for circuit-level data
                </ButtonLink>
                <ButtonLink href="/energy/carbon-reporting" variant="secondary" size="sm">
                  Explore TrackZero carbon reporting for public-sector estates
                </ButtonLink>
                <ButtonLink href="/energy/technology" variant="secondary" size="sm">
                  Review the Technology options behind the improvements
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <H2 className="mb-4">Coordinating a multi-site estate</H2>
              <Body className="mb-6">
                A single Display Energy Certificate is straightforward. A county council, an NHS trust
                or a multi-academy trust is managing the same task many times over, with different
                buildings, different floor areas, different validity periods and different people
                responsible at each site.
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

            <Card
              withImage={false}
              className="border-unifi-blue/10 h-full bg-unifi-light"
            >
              <div className="flex items-center gap-3">
                <Layers className="h-6 w-6 text-unifi-blue" aria-hidden="true" />
                <H3 className="text-xl">From scattered dates to one programme</H3>
              </div>
              <Body>
                Once the whole estate sits in one view, renewals stop being reactive and the advisory
                reports can be read together. Recurring findings across many buildings are usually a
                stronger business case than any single site would make on its own.
              </Body>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray" className="scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6" id="dec-enquiry">
          <H2 className="mb-4">Enquire about a Display Energy Certificate</H2>
          <Body className="mb-8">
            Tell us how many buildings are involved, roughly how large they are, and whether you are
            arranging a first certificate, managing renewals, or looking to act on advisory report
            findings. We will come back with what the assessment would involve and how the
            operational data behind it can support a longer improvement programme.
          </Body>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/energy/contact">Contact the Unifi.id energy team</ButtonLink>
            <ButtonLink href="/energy/carbon-reporting" variant="secondary">
              Explore TrackZero carbon reporting
            </ButtonLink>
          </div>

          <p className="mt-12 border-t border-gray-200 pt-6 text-sm leading-relaxed text-unifi-gray">
            This page provides general information about Display Energy Certificate requirements in
            England and Wales and is not legal advice. Requirements should be confirmed for the
            individual building. Different arrangements apply elsewhere in the UK.
          </p>
        </div>
      </Section>
    </>
  );
}
