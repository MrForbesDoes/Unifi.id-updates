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

const triggerPoints = [
  'A building is newly constructed and about to be handed over or occupied',
  'A building, or a unit within it, is being sold',
  'A building, or a unit within it, is being let to a new tenant',
  'An existing certificate has expired and a transaction or letting is planned',
];

const assessmentOutputs = [
  {
    title: 'An energy rating for the building',
    body:
      'The assessment produces a rating band based on a standardised model of the building fabric, heating, cooling, ventilation and lighting, so one property can be compared against another on a like-for-like basis.',
    icon: FileText,
  },
  {
    title: 'A recommendation report',
    body:
      'Alongside the certificate, the assessor produces a report setting out potential measures for improving the building. It is a starting point for planning, rather than a costed design.',
    icon: ClipboardList,
  },
  {
    title: 'A record you can evidence',
    body:
      'Because the certificate is lodged centrally, it gives agents, funders, tenants and internal stakeholders a consistent reference point for the building rather than an internal estimate.',
    icon: BadgeCheck,
  },
];

const businessCaseSteps = [
  {
    title: 'Read the recommendations in context',
    body:
      'A recommendation report is generated from a standardised model, not from how your building is actually run. The first step is working out which measures are genuinely relevant to your site and which are not.',
    icon: FileSearch,
  },
  {
    title: 'Test the assumptions against real consumption',
    body:
      'Metered and sub-metered data shows where energy is actually being used and when. That evidence is what separates a plausible-looking measure from one worth funding.',
    icon: Target,
  },
  {
    title: 'Sequence the work and the funding',
    body:
      'Once priorities are clear, the measures can be sequenced into a programme, with the funding route considered alongside the technical scope rather than after it.',
    icon: TrendingDown,
  },
];

const portfolioSupport = [
  'A consolidated view of which buildings hold a current Non-Domestic EPC and which do not',
  'Renewals coordinated ahead of planned sales, lettings and lease events',
  'Assessments arranged through accredited non-domestic energy assessors across multiple sites',
  'Recommendation reports reviewed together, so estate-wide patterns are visible rather than site-by-site noise',
];

export default function NonDomesticEpcClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'non-domestic-epc');

  return (
    <>
      <Section className="relative overflow-hidden min-h-[72vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Commercial office building exterior, the type of property that requires a Non-Domestic EPC"
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
                <Building2 className="h-4 w-4" />
                Energy certificates · Non-Domestic EPC
              </div>

              <H1 className="mt-6 mb-6 text-white">
                Understand Your Building&apos;s Energy Rating - and What to Do Next
              </H1>

              <Lead className="max-w-3xl text-white/85">
                A Non-Domestic EPC tells you how your building is rated. It does not, on its own,
                tell you what to do about it. We arrange the assessment through an accredited
                non-domestic energy assessor, then help you turn the recommendation report into a
                costed, prioritised improvement programme.
              </Lead>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="#non-domestic-epc-enquiry">Enquire about a Non-Domestic EPC</ButtonLink>
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
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <H2 className="mb-4">When a Non-Domestic EPC is generally required</H2>
              <Body className="mb-6">
                In England and Wales, a Non-Domestic EPC is generally required at the points where a
                building changes hands or changes occupier. In practice, that usually means one of
                the following.
              </Body>
              <ul className="space-y-4">
                {triggerPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
              <Body className="mt-6">
                Minimum energy efficiency standards also apply to privately rented non-domestic
                property in England and Wales, which means the rating recorded on a Non-Domestic EPC
                can affect what an owner is able to do with a building, not only what they have to
                disclose. The position for any individual property should be confirmed before a
                transaction or letting is relied upon.
              </Body>
            </div>

            <Card
              className="border-unifi-blue/10"
              imageSrc="/unifi-assets/corporate/photo-1504384308090-c894fdcc538d.webp"
              imageAlt="Property and estates team reviewing building documents around a table"
              imageAspectClassName="aspect-[16/10]"
              seed="non-domestic-epc-triggers"
            >
              <H3 className="text-xl">The trigger is usually a transaction</H3>
              <Body>
                Because the requirement is tied to construction, sale and letting, a Non-Domestic EPC
                is often treated as a transactional formality and handled at the last minute. Planned
                earlier, the same assessment can feed directly into estate and capital planning.
              </Body>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <H2 className="mb-4">What the assessment provides</H2>
            <Body>
              A Non-Domestic EPC assessment produces more than a single letter. Understanding each
              part of the output is what makes the certificate useful after the transaction has
              completed.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {assessmentOutputs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <H3 className="mb-3 text-xl">{item.title}</H3>
                <Body>{item.body}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <H2 className="mb-4">Accredited assessors and the official register</H2>
              <Body className="mb-6">
                A Non-Domestic EPC must be produced by an energy assessor who is a member of an
                approved accreditation scheme and qualified for the type of building being assessed.
                Once produced, the certificate is lodged on the official register for England and
                Wales, which is what allows it to be looked up independently rather than taken on
                trust.
              </Body>
              <Body className="mb-6">
                Unifi.id is not an accredited energy assessor and does not issue certificates. We
                arrange and coordinate the assessment, which is delivered through an accredited
                non-domestic energy assessor. Our role is to manage the process around it: getting
                the right information to the assessor, keeping renewals on track, and making sure the
                output is actually used once it has been lodged.
              </Body>
            </div>

            <div className="rounded-3xl border border-unifi-blue/10 bg-unifi-blue/5 p-8">
              <H3 className="mb-5 text-xl">Where our role starts and stops</H3>
              <ul className="space-y-4">
                {[
                  'We arrange the assessment and coordinate access, drawings and site information',
                  'An accredited non-domestic energy assessor carries out the assessment and lodges the certificate',
                  'We help you interpret the recommendation report and build the improvement case',
                  'We track validity and renewal dates across your buildings',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
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
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-3xl border border-unifi-blue/10 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <CalendarClock className="h-6 w-6" aria-hidden="true" />
              </div>
              <H3 className="mb-3 text-xl">Ten years, unless something changes first</H3>
              <Body>
                A Non-Domestic EPC is currently valid for ten years from the date it is lodged. There
                is no requirement to replace it during that period simply because time has passed.
              </Body>
            </div>

            <div className="max-w-3xl">
              <H2 className="mb-4">How long a Non-Domestic EPC lasts</H2>
              <Body className="mb-6">
                Ten years sounds generous, and it is the reason certificates are so often forgotten.
                In practice, a certificate can become unhelpful well before it expires: if the
                building is extended, the heating or cooling plant is replaced, the lighting is
                upgraded, or the use of the space changes materially, the rating on file may no longer
                describe the building you now operate.
              </Body>
              <Body>
                A newer assessment may also be worth commissioning voluntarily, for example where an
                owner has completed improvement works and wants the rating on the register to reflect
                them ahead of a letting or sale.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <H2 className="mb-4">Exemptions and where they may apply</H2>
            <Body className="mb-6">
              Not every building requires a Non-Domestic EPC. The regulations recognise a number of
              categories where the requirement may not apply or may apply differently, and these are
              defined by the characteristics of the building rather than by the preference of the
              owner.
            </Body>
            <Body className="mb-6">
              Qualification is a question of fact for the individual property, and an exemption that
              applied in the past will not necessarily still apply today. Where an owner believes an
              exemption is available, it is worth establishing the basis for it and documenting it,
              rather than assuming the position carries forward.
            </Body>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-unifi-light p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <Scale className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <H3 className="mb-3 text-xl">What we can and cannot tell you</H3>
                <Body>
                  We can help you work through which of your buildings look likely to need a
                  Non-Domestic EPC and which may not, and arrange assessments accordingly. We are not
                  a legal adviser, and a view on whether a specific exemption applies should be
                  confirmed for the individual property before it is relied on.
                </Body>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <H2 className="mb-4">From recommendations to an improvement business case</H2>
            <Body>
              The recommendation report attached to a Non-Domestic EPC is a modelled list, not a
              delivery plan. Turning it into something a finance team will approve takes one more
              step, and that step is evidence.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {businessCaseSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <H3 className="mb-3 text-xl">{step.title}</H3>
                <Body>{step.body}</Body>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-unifi-blue/10 bg-white p-8 shadow-sm">
            <H3 className="mb-4 text-xl">Where to go next</H3>
            <Body className="mb-6">
              Each part of that sequence has its own page, so you can follow the thread that matters
              most to your estate.
            </Body>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/energy/monitoring" variant="secondary" size="sm">
                See how Energy Monitoring builds the evidence base
              </ButtonLink>
              <ButtonLink href="/energy/technology" variant="secondary" size="sm">
                Review the decarbonisation Technology options
              </ButtonLink>
              <ButtonLink href="/energy/funding-options" variant="secondary" size="sm">
                Compare Funding Options for the works
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <H2 className="mb-4">Support across a portfolio</H2>
              <Body className="mb-6">
                For a single building, a Non-Domestic EPC is an administrative task. Across a
                portfolio it becomes a tracking problem: different buildings, different lodgement
                dates, different lease events, and no single place where any of it is recorded.
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

            <Card
              className="border-unifi-blue/10"
              imageSrc="/unifi-assets/corporate/photo-1590650046871-92c887180603.webp"
              imageAlt="Estates manager reviewing portfolio energy data on a laptop"
              imageAspectClassName="aspect-[4/3]"
              seed="non-domestic-epc-portfolio"
            >
              <div className="flex items-center gap-3">
                <Layers className="h-6 w-6 text-unifi-blue" aria-hidden="true" />
                <H3 className="text-xl">One view, not a filing cabinet</H3>
              </div>
              <Body>
                The practical value of coordinating certificates across an estate is that renewals
                stop being a surprise, and the recommendation reports can be read together as a
                pattern rather than as unrelated documents.
              </Body>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray" className="scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6" id="non-domestic-epc-enquiry">
          <H2 className="mb-4">Enquire about a Non-Domestic EPC</H2>
          <Body className="mb-8">
            Tell us about the building or buildings involved, and whether the driver is a sale, a
            letting, a new build, an expiring certificate, or a wider improvement programme. We will
            come back with what the assessment would involve and how it can feed into your next set
            of decisions.
          </Body>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/energy/contact" data-track-event="energy_service_cta" data-track-service="non-domestic-epc" data-track-cta="Contact the Unifi.id energy team">Contact the Unifi.id energy team</ButtonLink>
            <ButtonLink href="/energy/funding-options" variant="secondary">
              Read about Funding Options for energy upgrades
            </ButtonLink>
          </div>

          <p className="mt-12 border-t border-gray-200 pt-6 text-sm leading-relaxed text-unifi-gray">
            This page provides general information about Non-Domestic EPC requirements in England and
            Wales and is not legal advice. Requirements and exemptions should be confirmed for the
            individual property. Different rules apply in Scotland and Northern Ireland.
          </p>
        </div>
      </Section>
    </>
  );
}
