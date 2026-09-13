'use client';

import Image from 'next/image';
import { Activity, BarChart3, CheckCircle, Gauge, Plug, Zap } from 'lucide-react';

import Card from '@/src/components/Card';
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import { Body, H1, H2, H3, Lead } from '@/src/components/Typography';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

const capabilities = [
  {
    icon: Gauge,
    title: 'Circuit-level visibility',
    body: 'Monitor selected fixed loads that cannot be measured through a Smart Socket.',
  },
  {
    icon: BarChart3,
    title: 'Energy, cost and emissions data',
    body: 'Bring consumption into a dashboard that supports operational and investment decisions.',
  },
  {
    icon: Activity,
    title: 'Measured verification',
    body: 'Establish a baseline before an upgrade and continue monitoring afterwards to assess the result.',
  },
];

const relatedLinks = [
  { href: '/energy/monitoring', label: 'Back to Energy Monitoring' },
  { href: '/energy/carbon-reporting', label: 'Bring the data into TrackZero carbon reporting' },
  { href: '/energy/hub', label: 'Compare Smart Sockets and other technologies' },
  { href: '/energy/technology', label: 'Browse LED, heating and wider technology options' },
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
                <Zap className="h-4 w-4" />
                <span>Energy Solutions · Energy Monitoring</span>
              </div>

              <H1 className="mt-6 mb-6 text-white">
                Energy Clamp Meters: See What Each Circuit Is Costing You
              </H1>

              <Lead className="max-w-3xl text-white/85">
                Overall energy bills can hide very different patterns of use. Energy Clamp Meters
                provide circuit-level visibility across lighting, HVAC, compressors, plant and other
                fixed electrical loads, showing when and where energy is being consumed.
              </Lead>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/energy/contact" variant="primary">
                  Discuss Energy Clamp Meters
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
            <H2 className="mb-5">What Energy Clamp Meters do</H2>
            <Body>
              A clamp meter measures the electricity flowing through a selected circuit. Installed at
              the distribution board, it reports consumption for the loads on that circuit rather
              than for the building as a whole, making it possible to separate lighting, heating,
              ventilation, compressors and other fixed plant from general building use.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <Card key={title} withImage={false} className="border-unifi-blue/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <Icon className="h-6 w-6" />
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
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <H2 className="mb-5">Installation and supported supplies</H2>
              <ul className="space-y-4">
                {[
                  'Single-phase and three-phase supplies can both be monitored, with the appropriate configuration selected for the site.',
                  'Installation is completed by a qualified electrician.',
                  'The scope of works, including whether any interruption to supply is required, is confirmed for the specific design during survey.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
            </div>

            <Card withImage={false} className="border-unifi-blue/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                <Plug className="h-6 w-6" />
              </div>
              <H3 className="text-xl">Monitoring, and the question of control</H3>
              <Body>
                Energy Clamp Meters measure consumption. They do not, in themselves, provide
                automated control. Where control or optimisation is required, it is assessed
                individually and may involve bespoke design, API integration and additional
                hardware. Monitoring can be deployed on its own without committing to a control
                project.
              </Body>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <H2 className="mb-5">How this fits with Smart Sockets and TrackZero</H2>
            <Body className="mb-8">
              Smart Sockets provide appliance-level visibility and control for plug-in equipment.
              Energy Clamp Meters complement them by monitoring circuits and fixed loads such as
              lighting, HVAC and plant. Together they provide a more complete view of building
              electricity use, and the resulting evidence can be carried into carbon reporting and
              action planning through TrackZero.
            </Body>

            <ul className="grid gap-3 sm:grid-cols-2">
              {relatedLinks.map(({ href, label }) => (
                <li key={href} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" />
                  <a
                    href={href}
                    className="text-unifi-blue underline underline-offset-4 hover:text-unifi-dark"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/energy/contact" variant="primary">
                Request an Energy Clamp Meter Review
              </ButtonLink>
              <ButtonLink href="/energy/hub" variant="secondary">
                Back to Energy Hub
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
