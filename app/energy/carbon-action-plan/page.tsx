'use client';

import Image from 'next/image';
import { ClipboardList, FileSpreadsheet, Leaf, Target, CheckCircle } from 'lucide-react';

import { SEO } from '@/src/components/SEO';
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { H1, H2, H3, Body, Lead } from '@/src/components/Typography';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

const planSteps = [
  {
    title: 'Build the baseline',
    body: 'Understand where energy is being used, what is being wasted, and which emissions sources matter most across your estate.',
    icon: ClipboardList,
  },
  {
    title: 'Prioritise action',
    body: 'Turn the data into a practical programme with the right sequence of quick wins, funded upgrades, and longer-term decisions.',
    icon: Target,
  },
  {
    title: 'Report with confidence',
    body: 'Use clearer evidence, measurable progress, and better carbon reporting to show stakeholders what is changing and why it matters.',
    icon: FileSpreadsheet,
  },
];

const outcomes = [
  'A practical carbon action plan grounded in real estate data',
  'Clearer carbon reporting for boards, funders, and stakeholders',
  'Prioritised upgrades in LED, smart sockets, heating, HVAC, and solar',
  'A route to delivery that can reduce or remove upfront capital barriers',
];

export default function CarbonActionPlanPage() {
  const heroImage = pickUnifiPlaceholder('hero', 'carbon-action-plan');

  return (
    <>
      <SEO
        title="Carbon Action Plan and Carbon Reporting | Unifi.id"
        description="Create a carbon action plan with clearer carbon reporting, funded upgrades, and practical delivery support from Unifi.id."
      />

      <Section className="relative overflow-hidden min-h-[72vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Carbon action plan planning session" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/20" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl pt-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                <Leaf className="h-4 w-4" />
                Carbon action plan support for non-domestic estates
              </div>

              <H1 className="mt-6 mb-6 text-white">
                Build a carbon action plan you can actually deliver
              </H1>

              <Lead className="max-w-3xl text-white/85">
                A carbon action plan should do more than set an ambition. It should show where waste
                sits today, which upgrades matter most, and how better carbon reporting can support
                confident decisions across your estate.
              </Lead>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/energy/contact">Talk to the energy team</ButtonLink>
                <ButtonLink
                  href="/energy/carbon-reporting"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Explore carbon reporting
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <H2 className="mb-4">What a carbon action plan should include</H2>
            <Body className="text-lg text-unifi-gray-dark">
              The strongest plans connect reporting, priorities, and delivery. That means knowing
              where emissions come from, which projects will move the dial fastest, and how to turn
              good intent into measurable progress.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {planSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <step.icon className="h-6 w-6" />
                </div>
                <H3 className="mb-3 text-xl">{step.title}</H3>
                <Body>{step.body}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <H2 className="mb-4">How Unifi.id helps turn planning into action</H2>
              <Body className="mb-6">
                We help non-domestic customers connect carbon reporting to real estate decisions.
                That can include baselining energy use, identifying the highest-impact upgrades,
                and shaping a delivery pathway around funded LED, smart sockets, heating, HVAC, and
                solar projects.
              </Body>
              <Body>
                The goal is not another document that sits on a shelf. It is a plan with evidence,
                priorities, and a practical route to delivery.
              </Body>
            </div>

            <div className="rounded-3xl border border-unifi-blue/10 bg-unifi-blue/5 p-8">
              <H3 className="mb-5 text-xl">What this can unlock</H3>
              <ul className="space-y-4">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-blue" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="mb-4">Start with clearer carbon reporting</H2>
          <Body className="mb-8 text-unifi-gray-dark">
            If you need help building a carbon action plan, the first step is often a better view
            of your current position. We can help you strengthen carbon reporting, prioritise
            action, and map the right delivery path for your estate.
          </Body>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/energy/contact">Talk to our team</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">Back to Energy Hub</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
