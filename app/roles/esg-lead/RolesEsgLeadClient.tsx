'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { Leaf, BarChart, Shield, Globe } from "lucide-react";
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function RolesEsgLeadClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'role-esg-lead');

  return (
    <main className="min-h-screen">
{/* Hero Section */}
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Role hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-blue/20 via-transparent to-unifi-green/10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                <Leaf className="w-4 h-4 text-unifi-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Sustainability Leadership</span>
              </div>
              <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                ESG / Sustainability Lead
              </H1>
              <Lead className="text-white/85 mb-10 max-w-2xl">
                Net Zero pathways, carbon reporting, and defensible sustainability claims. Cortex™ provides the verifiable data needed to withstand scrutiny and deliver real impact.
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/energy/hub" variant="primary">Decarbonisation Hub</ButtonLink>
                <ButtonLink href="/contact" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Book a Demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ESG Priorities */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">ESG Priorities</H2>
            <Body>
              Cortex™ addresses the growing demand for transparency and measurable outcomes in corporate sustainability and governance.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <BarChart className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Defensible Reporting</H3>
              <Body className="text-gray-600">
                Eliminate greenwashing risks. Cortex™ provides granular, real-time data on energy consumption and carbon emissions that is audit-ready.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Globe className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Net Zero Pathways</H3>
              <Body className="text-gray-600">
                Identify the most impactful interventions. Use occupancy-linked energy data to prioritise retrofits and funded upgrades for maximum carbon reduction.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Shield className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Social & Governance</H3>
              <Body className="text-gray-600">
                Demonstrate your commitment to occupant health and safety. Provide transparent reporting on building compliance and environmental standards.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* ESG Metrics Section */}
      <Section className="bg-unifi-light border border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6 text-gray-900">ESG Metrics That Matter</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Carbon Footprint per Occupant</H3>
                    <Body className="text-gray-600">A more accurate measure of building efficiency that accounts for actual usage patterns.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Energy Waste Reduction</H3>
                    <Body className="text-gray-600">Track the direct impact of occupancy-led HVAC and lighting control on your total energy spend.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Compliance Transparency Score</H3>
                    <Body className="text-gray-600">A real-time metric of how well your estate is meeting safety and environmental health standards.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              <H3 className="text-2xl font-bold mb-6 text-gray-900">Cortex™ ESG Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Carbon footprint tracking and reporting",
                  "Energy optimization recommendations",
                  "ESG reporting automation tools",
                  "Defensible sustainability data sets",
                  "Occupant health and safety reporting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-unifi-blue flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-unifi-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink href="/contact" className="w-full text-left">Request ESG Data Sample</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-3xl font-bold mb-6">Ready to deliver real ESG impact?</H2>
          <Body className="mb-10 text-lg">
            Discover how Cortex™ can provide the verifiable data and actionable insights you need to hit your Net Zero targets and lead in sustainability.
          </Body>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" size="lg">Book a Demo</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary" size="lg">Explore Decarbonisation Hub</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
