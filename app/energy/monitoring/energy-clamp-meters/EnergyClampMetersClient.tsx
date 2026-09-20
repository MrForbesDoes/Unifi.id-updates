'use client';

import Image from 'next/image';
import { Activity, BarChart3, Building2, CheckCircle, Clock, Fan, Gauge, Lightbulb, Plug, Settings, Wind, Zap } from 'lucide-react';

import Card from '@/src/components/Card';
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import { Body, H1, H2, H3, Lead } from '@/src/components/Typography';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import RelatedEnergyServices from '@/src/components/RelatedEnergyServices';

const whatItDoes = [
  {
    icon: Gauge,
    title: 'Circuit-level visibility',
    body: 'Monitor fixed loads that cannot be measured through a Smart Socket.',
  },
  {
    icon: Clock,
    title: 'Time-based evidence',
    body: 'See how selected circuits behave during occupied hours, overnight, at weekends and through seasonal changes.',
  },
  {
    icon: BarChart3,
    title: 'Decision-ready data',
    body: 'Translate measured consumption into energy, cost and emissions information for operational and investment decisions.',
  },
];

const applications = [
  {
    icon: Lightbulb,
    title: 'Lighting circuits',
    body: 'Measure lighting demand across a floor, building or selected area, including out-of-hours consumption.',
  },
  {
    icon: Wind,
    title: 'Heating, ventilation and air conditioning',
    body: 'Understand the electrical demand of fans, pumps, air-conditioning systems and related plant.',
  },
  {
    icon: Fan,
    title: 'Compressors and specialist equipment',
    body: 'Track high-load equipment where overall utility data cannot show individual operating patterns.',
  },
  {
    icon: Building2,
    title: 'Fixed plant and distribution circuits',
    body: 'Monitor other selected fixed loads that sit outside the reach of plug-level monitoring.',
  },
];

const dashboardUses = [
  'Compare selected circuits, buildings or operating periods.',
  'Identify unusual demand and avoidable out-of-hours use.',
  'See when demand peaks and which loads coincide, so operating patterns can be adjusted where practical.',
  'Support investment decisions with measured evidence rather than assumptions.',
  'Track the result after a change has been made.',
];

const projectStages = [
  {
    title: 'Before an upgrade',
    body: 'Establish the baseline, identify operating patterns and test the scale of the opportunity.',
  },
  {
    title: 'During delivery',
    body: 'Observe changes as equipment, controls or working practices are introduced.',
  },
  {
    title: 'After completion',
    body: 'Compare the new pattern with the baseline and assess the measured result.',
  },
];

const services = [
  {
    icon: Gauge,
    title: 'Energy Clamp Meters',
    body: 'Circuit-level visibility for lighting, HVAC, compressors, plant and other fixed electrical loads.',
  },
  {
    icon: Plug,
    title: 'Smart Sockets',
    body: 'Appliance-level visibility and control for plug-in equipment.',
  },
  {
    icon: BarChart3,
    title: 'TrackZero',
    body: 'Portfolio-level carbon reporting, action planning and progress tracking across one organisation or a wider estate.',
  },
];

const process = [
  {
    step: '1',
    title: 'Define the question',
    body: 'Agree what you need to understand, which buildings or circuits matter and what decision the data must support.',
  },
  {
    step: '2',
    title: 'Survey and design',
    body: 'Confirm the electrical arrangement, single-phase or three-phase requirements, meter locations and installation plan.',
  },
  {
    step: '3',
    title: 'Install and establish the baseline',
    body: 'A qualified electrician completes the installation and the selected circuits begin reporting to the dashboard.',
  },
  {
    step: '4',
    title: 'Review and act',
    body: 'Interpret the data, identify practical actions and continue monitoring to assess the result.',
  },
];

export default function EnergyClampMetersClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-clamp-meters');

  return (
    <>
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Electrical distribution board in a commercial building"
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
                <Zap className="h-4 w-4" aria-hidden="true" />
                <span>Energy Solutions · Energy Monitoring</span>
              </div>

              <H1 className="mt-6 mb-6 text-white">Measure the Energy Your Bills Cannot Explain</H1>

              <Lead className="max-w-3xl text-white/85">
                A utility bill shows the total. It does not show which circuits are driving the cost,
                what continues to run outside operating hours or whether an upgrade has delivered the
                result you expected. Energy Clamp Meters provide circuit-level visibility across fixed
                electrical loads, turning hidden consumption into evidence you can act on.
              </Lead>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink
                  href="/energy/contact"
                  variant="primary"
                  data-track-event="energy_service_cta"
                  data-track-service="clamp-meters"
                  data-track-cta="Request an Energy Clamp Meter Review"
                >
                  Request an Energy Clamp Meter Review
                </ButtonLink>
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
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-5">See What Each Circuit Is Costing You</H2>
            <Body className="mb-4">
              Energy Clamp Meters are installed at the distribution board to measure the electricity
              flowing through selected circuits. Instead of seeing one figure for the whole building,
              you can separate the consumption of lighting, heating, ventilation, air conditioning,
              compressors and other fixed plant.
            </Body>
            <Body>
              The result is a more useful view of where electricity is being consumed, when demand
              rises and where operating patterns may be creating avoidable cost.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {whatItDoes.map(({ icon: Icon, title, body }) => (
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
            <H2 className="mb-5">What Energy Clamp Meters Can Monitor</H2>
            <Body>
              The right monitoring plan depends on the building and the decision you need to make.
              Typical applications include:
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {applications.map(({ icon: Icon, title, body }) => (
              <Card key={title} withImage={false} className="border-unifi-blue/10 bg-white">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <H3 className="text-xl">{title}</H3>
                <Body>{body}</Body>
              </Card>
            ))}
          </div>

          <div className="mt-10 max-w-4xl rounded-2xl border border-unifi-blue/10 bg-white p-6">
            <H3 className="mb-3 text-lg">Technical qualification</H3>
            <Body>
              Single-phase and three-phase supplies can be monitored. The required meter and
              installation design are confirmed during survey. Installation is completed by a
              qualified electrician, and any need for an interruption to supply is confirmed for the
              specific site. The monitoring hardware reports to the dashboard over the site&apos;s
              network, and connectivity requirements are confirmed during survey.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <H2 className="mb-5">Energy, Cost and Emissions in One Dashboard</H2>
            <Body className="mb-8">
              The meter data feeds into a dashboard where consumption can be viewed over time and
              translated into cost and emissions information. This creates a common evidence base for
              estates, finance and sustainability teams.
            </Body>

            <ul className="space-y-4">
              {dashboardUses.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" aria-hidden="true" />
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <H2 className="mb-5">See the Peaks. Change the Pattern.</H2>
            <Body>
              Monitoring is not only a reporting tool. Circuit-level data shows when demand peaks and
              which loads are running at the same time. Where operating patterns can be changed, for
              example by staggering high-demand activity or removing out-of-hours running, the same
              evidence supports smoother, lower demand and can reduce avoidable capacity-related
              costs, subject to the site&apos;s tariff and supply arrangements.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-5">Measure Before, Verify After</H2>
            <Body>
              Energy Clamp Meters can be used before, during and after an improvement project. A
              baseline shows how the circuit currently performs. Continued monitoring then shows
              whether the intervention changed consumption in the way the business case expected.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projectStages.map(({ title, body }) => (
              <Card key={title} withImage={false} className="border-unifi-blue/10">
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
            <H2 className="mb-5">Energy Clamp Meters, Smart Sockets and TrackZero</H2>
            <Body>
              Each service answers a different question. They can be used independently or combined to
              build a more complete view of energy performance.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <Card key={title} withImage={false} className="border-unifi-blue/10 bg-white">
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

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <H2 className="mb-5">Monitoring First, Control Where It Fits</H2>
            <Body className="mb-4">
              Energy Clamp Meters measure consumption. They do not provide automated control on their
              own. Where control or optimisation is worth exploring, it is scoped separately against
              the system design and equipment already in place. It may require bespoke design, API
              integration and additional control hardware.
            </Body>
            <Body>
              Monitoring can be deployed as a complete standalone project. You do not need to commit
              to automated control in order to gain useful evidence.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="mb-10 max-w-4xl">A Practical Four-Step Process</H2>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, body }) => (
              <li key={step} className="rounded-2xl border border-unifi-blue/10 bg-white p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-unifi-blue text-white font-bold">
                  {step}
                </div>
                <H3 className="text-lg">{title}</H3>
                <Body>{body}</Body>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <H2 className="mb-5">Start with the Circuit That Matters Most</H2>
            <Body className="mb-8">
              You do not need to monitor everything at once. Start with the circuit, building or
              operating pattern that is hardest to explain, then expand the evidence where it adds
              value.
            </Body>

            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="/energy/contact"
                variant="primary"
                data-track-event="energy_service_cta"
                data-track-service="clamp-meters"
                data-track-cta="Request an Energy Clamp Meter Review"
              >
                Request an Energy Clamp Meter Review
              </ButtonLink>
              <ButtonLink href="/energy/monitoring" variant="secondary">
                Explore Energy Monitoring
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <RelatedEnergyServices
        backgroundColor="gray"
        heading="Where this leads next"
        links={[
          {
            href: '/energy/hub',
            label: 'Smart Sockets',
            description: 'Appliance-level visibility and control for plug-in equipment.',
            service: 'smart-sockets',
          },
          {
            href: '/energy/carbon-reporting',
            label: 'TrackZero Carbon Reporting',
            description: 'Carry the measured evidence into reporting, action planning and progress tracking.',
            service: 'trackzero',
          },
          {
            href: '/energy/technology',
            label: 'LED, Heating and Wider Technology Options',
            description: 'See the upgrades the measured evidence can support.',
            service: 'technology',
          },
        ]}
      />
    </>
  );
}
