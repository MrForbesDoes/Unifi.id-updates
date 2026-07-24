'use client';

import { ArrowDownToLine, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Body, H1, H2, H3 } from '@/src/components/Typography';
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import { SEO } from '@/src/components/SEO';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

const paperCoverage = [
  'The long-run trend in UK electricity prices, and why the crisis reset the baseline rather than reversing it.',
  'The four structural forces keeping prices high and volatile, from gas-set pricing to grid constraints and rising demand.',
  'The mathematics of compounding, and what wasted energy really costs over a twenty-year horizon.',
  'Where the largest and cheapest savings hide, and how quickly efficiency measures pay for themselves.',
  'Why efficiency is the fastest way to relieve the grid, not just the bill, and why the public sector is placed to lead.',
];

const evidenceStats = [
  { value: '98%', label: 'of the time gas still sets British electricity prices' },
  { value: '+25%', label: 'expected growth in electricity demand within the next decade' },
  { value: '£90bn', label: 'potential UK grid investment expected by 2031' },
  { value: '6-18 months', label: 'typical payback for intelligent socket control' },
];

const paperSections = [
  {
    title: 'The argument in one page',
    body: 'British electricity is among the most expensive in the developed world, and the forces behind that are structural rather than temporary. The paper argues that wasted energy gets more expensive every year, so delay is not a neutral decision but an escalating cost.',
  },
  {
    title: 'Part 1: Electricity has only ever travelled in one direction',
    body: 'The historical record is the first warning sign. Business electricity prices surged through the energy crisis, but they did not return to their old baseline. The paper frames 2022 as a reset to a higher plateau, not a temporary detour.',
  },
  {
    title: 'Part 2: Why this is structural, not a passing phase',
    body: 'Four structural pressures are laid out: gas still sets the price most of the time, the grid requires major bill-funded rebuilding, balancing costs are climbing, and electricity demand is set to grow sharply. Together they bias future prices upward and keep volatility in the system.',
  },
  {
    title: 'Part 3: The tyranny of compounding',
    body: 'A wasted kilowatt-hour does not stay at today’s tariff. Over the life of a building system, even modest annual price escalation turns a manageable inefficiency into a major financial drain. The paper uses this compounding effect to show why waiting becomes the costliest option.',
  },
  {
    title: 'Part 4: What inefficiency is actually costing you',
    body: 'The paper focuses on the most common sources of recoverable waste: legacy lighting, always-on plug loads, and heating. It points to LED upgrades, smart socket control, and targeted building improvements as practical ways to remove waste that would otherwise keep compounding.',
  },
  {
    title: 'Parts 5-7: Delay, counter-arguments, and the public-sector opportunity',
    body: 'The closing sections tackle the “prices might fall later” counterpoint, argue that efficiency still wins on timing and risk, and position public-sector estates as a place where early action can deliver budget relief, carbon reduction, and system-wide benefit at the same time.',
  },
];

export default function TheEnergyTrap() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-trap');

  return (
    <>
      <SEO
        title="The Energy Trap | Why the Cost of Waiting Only Grows"
        description="A Unifi.id decarbonisation paper on why UK electricity prices remain structurally high, why wasted energy compounds over time, and why acting sooner is the cheaper move."
      />

      <Section className="relative overflow-hidden min-h-[68vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="The Energy Trap hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#083a2a]/40 via-black/10 to-unifi-blue/20" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Decarbonisation Research Paper
            </div>
            <H1 className="mt-6 max-w-5xl text-white mb-6">The Energy Trap</H1>
            <Body className="text-xl md:text-2xl text-white max-w-4xl leading-relaxed">
              British electricity is among the most expensive in the developed world, and the forces holding it there are structural, not temporary. This paper explains why the cost of waiting only grows.
            </Body>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/papers/The_Energy_Trap.pdf"
                className="inline-flex items-center gap-2 rounded-sm bg-white px-8 py-4 text-lg font-medium text-unifi-dark transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-unifi-light hover:shadow-lg"
              >
                <ArrowDownToLine className="w-5 h-5" />
                Download the PDF
              </a>
              <ButtonLink href="/energy/contact" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                Discuss Your Estate Strategy
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div className="space-y-6 text-left">
            <H2>The core argument</H2>
            <Body className="text-lg text-unifi-gray-dark">
              Most organisations treat the 2022 energy crisis as a spike that will pass. The evidence assembled in this paper points the other way: gas still sets the price of British electricity most of the time, the grid needs major investment that will be recovered through bills, balancing costs are rising, and demand is climbing.
            </Body>
            <Body className="text-lg text-unifi-gray-dark">
              The consequence is simple but expensive. The price of a wasted unit of energy is not fixed; it escalates. Over the life of lighting, heating, and equipment, avoidable waste compounds into a much larger cost than most estates teams and finance leaders initially model.
            </Body>
            <Body className="text-lg text-unifi-gray-dark">
              Deferring an efficiency upgrade is therefore not a passive wait-and-see choice. It is an active choice to keep paying a rising tariff on waste that could already have been removed.
            </Body>
          </div>

          <div className="rounded-3xl border border-unifi-blue/10 bg-unifi-light p-8 text-left">
            <H3 className="mb-5">What this paper covers</H3>
            <ul className="space-y-4">
              {paperCoverage.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <ArrowRight className="w-4 h-4 mt-1 text-unifi-blue flex-shrink-0" />
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>
            <Body className="mt-6 text-sm text-unifi-gray-dark">
              Approximately a 15-minute read, built from UK government, Ofgem, NESO, the Climate Change Committee, and other primary sources.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left mb-10">
            <H2 className="mb-4">The evidence at a glance</H2>
            <Body className="text-lg text-unifi-gray-dark">
              The paper ties long-run market structure to the everyday cost of wasted energy in buildings.
            </Body>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {evidenceStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-unifi-blue/10 bg-white p-8 text-left shadow-sm">
                <div className="text-4xl font-bold text-unifi-blue mb-3">{stat.value}</div>
                <Body className="text-unifi-gray-dark">{stat.label}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left mb-10">
            <H2 className="mb-4">Inside the paper</H2>
            <Body className="text-lg text-unifi-gray-dark">
              The page below captures the flow of the report, from the historical record to the case for action.
            </Body>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {paperSections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-black/5 bg-unifi-light p-8 text-left">
                <H3 className="mb-4">{section.title}</H3>
                <Body className="text-unifi-gray-dark">{section.body}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left mb-8">
            <H2 className="mb-4">Read more</H2>
            <Body className="text-lg text-unifi-gray-dark">
              Download the full PDF to read the complete paper.
            </Body>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <a
              href="/papers/The_Energy_Trap.pdf"
              className="inline-flex items-center gap-2 rounded-sm bg-unifi-dark px-8 py-4 text-lg font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
            >
              <ArrowDownToLine className="w-5 h-5" />
              Download the PDF
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
