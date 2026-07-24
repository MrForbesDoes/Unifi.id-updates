'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SEO } from '@/src/components/SEO';
import { Section } from '@/src/components/Section';
import { H1, H2, H3, Body } from '@/src/components/Typography';
import { ButtonLink } from '@/src/components/ButtonLink';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { Lightbulb, Thermometer, Sun, ArrowRight, Zap } from 'lucide-react';

type TechTab = 'led' | 'hvac' | 'solar';

export default function EnergyTechnology() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-technology');
  const [active, setActive] = useState<TechTab>('led');

  return (
    <>
      <SEO
        title="Decarbonisation Technology for Carbon Reporting | Unifi.id"
        description="Explore funded energy technologies that cut waste, improve carbon reporting, and turn your carbon action plan into delivery."
      />

      {/* Hero */}
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Decarbonisation technology hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/20" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="mb-6 animate-fade-in-up" />

              <H1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
                Decarbonisation Technology
              </H1>

              <div className="space-y-4 animate-fade-in-up">
                <Body className="text-white/85 text-lg">
                  True decarbonisation isn't achieved through a single technology — it's the result of multiple systems working intelligently together. From LED lighting and advanced heating systems to solar generation and smart energy controls, every upgrade plays a role in reducing waste, improving operational efficiency, and making carbon reporting more credible.
                </Body>
                <Body className="text-white/80 text-lg">
                  At Unifi.id, we design and deliver complete, future-proof solutions that balance innovation with reliability. We focus on technologies that have been rigorously tested, offer clear returns on investment, and can integrate seamlessly into your existing infrastructure.
                </Body>
                <Body className="text-white/80 text-lg">
                  Each installation is more than a technical upgrade — it's a once-in-a-generation opportunity to transform how your estate consumes, manages, and generates energy.
                </Body>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up">
                <ButtonLink href="/energy/hub" variant="primary">Back to Energy Hub</ButtonLink>
                <ButtonLink
                  href="/energy/contact"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black"
                >
                  Book a Free Energy Survey
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Upgrade Technologies */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-left mb-10">
            <H2 className="mb-4">Core upgrade technologies for carbon reporting and action</H2>
            <Body className="text-lg text-unifi-gray-dark">
              Start with the technology that delivers the biggest impact for your estate. Each solution can be implemented independently or as part of a comprehensive upgrade programme that supports a stronger carbon action plan.
            </Body>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {
              [
                { id: 'led' as const, label: 'LED Lighting', icon: Lightbulb },
                { id: 'hvac' as const, label: 'Heating & HVAC', icon: Thermometer },
                { id: 'solar' as const, label: 'Solar & Renewables', icon: Sun },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={
                    'px-6 py-3 rounded-full font-bold transition-all border-2 flex items-center gap-2 ' +
                    (active === t.id
                      ? 'bg-unifi-blue text-white border-unifi-blue shadow-lg'
                      : 'bg-white text-unifi-gray-dark border-gray-200 hover:border-unifi-blue/30')
                  }
                >
                  <t.icon className="w-4 h-4" />
                  {t.label}
                </button>
              ))
            }
          </div>

          {active === 'led' && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="max-w-4xl mx-auto text-left mb-12">
                <H2 className="mb-3">LED Lighting</H2>
                <Body className="text-unifi-gray-dark text-lg">
                  Complete lighting transformation with smart controls for maximum efficiency.
                </Body>
              </div>

              <div className="max-w-4xl mx-auto space-y-4 text-left">
                <Body className="text-unifi-gray-dark">
                  Modern LED lighting is one of the most proven, high-impact upgrades any organisation can make. It delivers up to 80% energy savings, extends fixture life to 25 years or more, and enhances visibility, safety, and wellbeing across every environment.
                </Body>
                <Body className="text-unifi-gray-dark">
                  Unlike older fluorescent or halogen systems, high-quality LEDs maintain light levels and colour performance for decades. When combined with smart controls, daylight sensors, and occupancy detection, lighting becomes intelligent — responding automatically to how spaces are used and cutting waste without compromising comfort.
                </Body>
                <Body className="text-unifi-gray-dark">
                  This isn't just about lower energy bills. It's about building resilience: fewer maintenance call-outs, longer component life, and verifiable ESG improvements. A single well-executed LED upgrade can fund itself through savings while improving the quality and safety of the spaces people use every day.
                </Body>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: 'Up to 80% energy savings',
                    desc: 'Immediate reduction in lighting consumption compared with fluorescent or halogen.',
                  },
                  {
                    title: '25+ years fixture life',
                    desc: 'Drastically reduced maintenance burden and call-outs across estates.',
                  },
                  {
                    title: 'Verifiable ESG impact',
                    desc: 'Measured outcomes support reporting, governance, and sustainability commitments.',
                  },
                ].map((c) => (
                  <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                    <H3 className="text-lg mb-3">{c.title}</H3>
                    <Body className="text-unifi-gray-dark">{c.desc}</Body>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === 'hvac' && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="max-w-4xl mx-auto text-left mb-12">
                <H2 className="mb-3">Heating &amp; HVAC</H2>
                <Body className="text-unifi-gray-dark text-lg">
                  Modern heating, ventilation, and air-conditioning solutions for optimal comfort and efficiency.
                </Body>
              </div>

              <div className="max-w-4xl mx-auto space-y-4 text-left">
                <Body className="text-unifi-gray-dark">
                  Heating and cooling are often responsible for more than half of a building's total energy use — making them one of the most critical levers for decarbonisation. By upgrading ageing plant to modern systems such as heat pumps, high-efficiency condensing boilers, and smart controls, organisations can cut both costs and emissions while improving comfort and reliability.
                </Body>
                <Body className="text-unifi-gray-dark">
                  Advanced systems automatically adjust output to match occupancy, outside temperature, and usage patterns. They deliver stable warmth and healthier air quality across complex estates while reducing waste.
                </Body>
                <Body className="text-unifi-gray-dark">
                  For schools, local authorities, and large commercial sites, modernising HVAC isn't just an environmental upgrade — it's a chance to stabilise budgets, extend asset life, and demonstrate leadership in sustainability.
                </Body>
              </div>

              <div className="grid md:grid-cols-5 gap-4 mt-12">
                {[
                  'Heat Pumps',
                  'High-Efficiency Boilers',
                  'Smart Controls & Zoning',
                  'Biomass Heating',
                  'Hybrid Systems',
                ].map((label) => (
                  <div key={label} className="bg-white p-5 rounded-xl border border-unifi-gray text-left animate-fade-in-up">
                    <Body className="font-bold text-unifi-blue">{label}</Body>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === 'solar' && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="max-w-4xl mx-auto text-left mb-12">
                <H2 className="mb-3">Solar &amp; Renewables</H2>
                <Body className="text-unifi-gray-dark text-lg">
                  On-site energy generation to reduce grid dependency and cut carbon emissions.
                </Body>
              </div>

              <div className="max-w-4xl mx-auto space-y-4 text-left">
                <Body className="text-unifi-gray-dark">
                  Solar and renewable systems empower estates to generate their own clean electricity, stabilising costs and reducing exposure to volatile energy prices. By converting sunlight into usable power — and combining it with battery storage and smart energy management — organisations can offset a significant portion of their grid consumption and strengthen long-term resilience.
                </Body>
                <Body className="text-unifi-gray-dark">
                  These systems are silent, low-maintenance, and highly scalable. Whether roof-mounted, ground-mounted, or integrated into building façades, they immediately begin reducing operational costs and emissions. Over time, they can turn unused space into a self-funding, revenue-producing energy asset.
                </Body>
              </div>

              <div className="text-left mt-12">
                <ButtonLink href="/energy/hub" variant="secondary">Explore Solar & Renewables in the Hub</ButtonLink>
              </div>
            </div>
          )}

          <div className="text-left mt-14">
            <ButtonLink href="/energy/contact" variant="blue">
              Speak to a Specialist
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section backgroundColor="gray">
        <div className="container px-6 text-left">
          <div className="max-w-3xl mx-auto">
            <H2 className="mb-4">Ready to turn carbon reporting into a carbon action plan?</H2>
            <Body className="text-unifi-gray-dark mb-8">
              Start with a free survey. We'll identify the highest-impact opportunities and structure a programme that is low-disruption, evidence-led, and aligned to your governance requirements.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/energy/contact" variant="primary">Book a Free Energy Survey</ButtonLink>
              <ButtonLink href="/energy/hub" variant="secondary">Back to Energy Hub</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
