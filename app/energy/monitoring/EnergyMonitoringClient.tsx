'use client';

import type { ComponentType } from 'react';
import Image from 'next/image';
import { Activity, Building2, Gauge, PlugZap, SlidersHorizontal } from 'lucide-react';

import Card from '@/src/components/Card';
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import { Body, H1, H2, H3, Lead } from '@/src/components/Typography';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

type VisibilityLevel = {
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  icon: ComponentType<{ className?: string }>;
  imageAlt: string;
  seed: string;
};

const visibilityLevels: VisibilityLevel[] = [
  {
    title: 'Portfolio and organisational level - TrackZero',
    body:
      'Bring carbon, energy and action data into a consistent structure across one organisation or an entire estate.',
    href: '/energy/carbon-reporting',
    linkLabel: 'Explore TrackZero carbon reporting',
    icon: Building2,
    imageAlt:
      'Estate manager reviewing organisation-wide carbon and energy reporting on a laptop.',
    seed: 'monitoring-trackzero',
  },
  {
    title: 'Circuit and fixed-load level - Energy Clamp Meters',
    body: 'Measure selected lighting, HVAC, compressor, plant and other fixed-load circuits.',
    href: '/energy/monitoring/energy-clamp-meters/',
    linkLabel: 'Explore Energy Clamp Meters',
    icon: Gauge,
    imageAlt:
      'Electrical distribution board with circuits serving lighting, HVAC and plant equipment.',
    seed: 'monitoring-clamp-meters',
  },
  {
    title: 'Appliance and plug-load level - Smart Sockets',
    body: 'See and control the consumption of individual plug-in appliances.',
    href: '/energy/hub',
    linkLabel: 'Explore Smart Sockets on the Energy Hub',
    icon: PlugZap,
    imageAlt: 'Plug-in appliances connected at a workplace socket outlet.',
    seed: 'monitoring-smart-sockets',
  },
];

const measurementStages: { title: string; body: string }[] = [
  {
    title: 'Establish the baseline',
    body: 'Understand current consumption before committing investment.',
  },
  {
    title: 'Diagnose the opportunity',
    body: 'Compare buildings, circuits, equipment and operating periods.',
  },
  {
    title: 'Support the business case',
    body: 'Translate energy use into cost and emissions information.',
  },
  {
    title: 'Verify the outcome',
    body: 'Continue monitoring after an intervention to assess the result.',
  },
];

export default function EnergyMonitoringClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-monitoring');

  return (
    <>
      <Section className="relative overflow-hidden min-h-[72vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Building services engineer reviewing energy consumption data on site"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-blue/20 via-transparent to-unifi-green/10" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl pt-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                <Activity className="h-4 w-4" />
                Energy monitoring for non-domestic estates
              </div>

              <H1 className="mt-6 mb-6 text-white">
                See Where Energy Goes. Know What to Change.
              </H1>

              <Lead className="max-w-3xl text-white/85">
                A utility bill tells you how much energy a building used. It rarely tells you which
                circuits, systems or appliances used it - or how much was consumed when the building
                was empty.
              </Lead>

              <Body className="mt-5 max-w-3xl text-white/80">
                Unifi.id combines organisational reporting, circuit-level monitoring and
                appliance-level intelligence to turn overall consumption into actionable evidence.
              </Body>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/energy/contact" data-track-event="energy_service_cta" data-track-service="monitoring" data-track-cta="Discuss Energy Monitoring">Discuss Energy Monitoring</ButtonLink>
                <ButtonLink
                  href="/energy/monitoring/energy-clamp-meters/"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Explore Energy Clamp Meters
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-unifi-blue">
              Energy Monitoring
            </div>
            <H2 className="mb-4">Visibility at Every Level</H2>
            <Body className="text-lg text-unifi-gray">
              Different decisions need different resolution. Monitoring can sit at the level of a
              whole organisation, a single circuit, or an individual appliance.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {visibilityLevels.map((level) => (
              <Card
                key={level.title}
                className="h-full border-unifi-blue/10"
                imageAlt={level.imageAlt}
                seed={level.seed}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <level.icon className="h-6 w-6" />
                </div>
                <H3 className="text-xl">{level.title}</H3>
                <Body>{level.body}</Body>
                <div className="pt-2">
                  <ButtonLink href={level.href} variant="secondary" size="sm">
                    {level.linkLabel}
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <H2 className="mb-4">Measure Before, During and After</H2>
            <Body className="text-lg text-unifi-gray">
              Monitoring is most useful when it runs across the whole life of a project, not only at
              the point a decision is made.
            </Body>
          </div>

          <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {measurementStages.map((stage, index) => (
              <li
                key={stage.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-unifi-blue/10 text-base font-bold text-unifi-blue">
                  <span aria-hidden="true">{index + 1}</span>
                  <span className="sr-only">{`Stage ${index + 1}`}</span>
                </div>
                <H3 className="mb-3 text-xl">{stage.title}</H3>
                <Body>{stage.body}</Body>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <H2 className="mb-4">From Visibility to Control</H2>
              <Body className="mb-6">
                Monitoring creates the evidence for better decisions. Where the system design and
                installed equipment allow, API integration and additional control hardware can also
                support automated control and optimisation.
              </Body>
              <Body>
                Every control project is assessed individually; monitoring can be deployed
                independently without committing to automated control.
              </Body>
            </div>

            <div className="rounded-3xl border border-unifi-blue/10 bg-unifi-blue/5 p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <SlidersHorizontal className="h-6 w-6" />
              </div>
              <H3 className="mb-4 text-xl">Monitoring first, control where it fits</H3>
              <Body>
                Start by measuring what the estate actually does. If automated control is then worth
                exploring, it is scoped as its own piece of work against the system design and
                equipment already in place.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="mb-4">Start with the evidence</H2>
          <Body className="mb-8 text-unifi-gray">
            Tell us about your estate and what you need to understand. We can talk through which
            level of monitoring fits the decision you are trying to make.
          </Body>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/energy/contact" data-track-event="energy_service_cta" data-track-service="monitoring" data-track-cta="Request a Monitoring Review">Request a Monitoring Review</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">
              Back to Energy Hub
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
