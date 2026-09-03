'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { Briefcase, Shield, TrendingUp, BarChart3 } from "lucide-react";
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function RolesCeoClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'role-ceo');

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
                <Briefcase className="w-4 h-4 text-unifi-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Executive Leadership</span>
              </div>
              <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                CEO / Managing Director
              </H1>
              <Lead className="text-white/85 mb-10 max-w-2xl">
                Strategic oversight, risk management, and demonstrable duty of care across your entire estate. Cortex™ translates complex building data into executive-level intelligence.
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/contact" variant="primary">Request Executive Briefing</ButtonLink>
                <ButtonLink href="/platform/overview" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Platform Overview
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Strategic Priorities */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Priorities</H2>
            <Body>
              Cortex™ addresses the core concerns of executive leadership by providing a single source of truth for estate performance and risk.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Shield className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Duty of Care</H3>
              <Body className="text-gray-600">
                Prove you are meeting your legal and ethical obligations with real-time evidence of fire safety, occupancy limits, and environmental health.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <TrendingUp className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Operational Risk</H3>
              <Body className="text-gray-600">
                Identify and mitigate systemic risks before they become incidents. Gain visibility into compliance gaps across multiple sites instantly.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <BarChart3 className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">ESG Leadership</H3>
              <Body className="text-gray-600">
                Move beyond speculative reporting. Cortex™ provides defensible data on carbon reduction and energy efficiency for stakeholder transparency.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Metrics Section */}
      <Section className="bg-unifi-light border border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6 text-gray-900">Executive Metrics That Matter</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Estate-Wide Compliance Score</H3>
                    <Body className="text-gray-600">A real-time aggregate of fire safety, access control, and regulatory adherence across all properties.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Utilisation Efficiency</H3>
                    <Body className="text-gray-600">Understand the true ROI of your physical footprint by tracking actual occupancy vs. capacity.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Carbon Intensity Index</H3>
                    <Body className="text-gray-600">Defensible data on energy waste and carbon footprint reduction for annual reporting and ESG audits.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              <H3 className="text-2xl font-bold mb-6 text-gray-900">Cortex™ Executive Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Executive dashboard with real-time risk visibility",
                  "Audit-ready compliance reporting",
                  "ESG metrics and progress tracking",
                  "Estate-wide performance benchmarking",
                  "Strategic investment decision support"
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
                <ButtonLink href="/contact" className="w-full text-left">Book Executive Demo</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-3xl font-bold mb-6">Ready to lead with intelligence?</H2>
          <Body className="mb-10 text-lg">
            Join the forward-thinking CEOs who are transforming their estates into smarter, safer, and more efficient assets with Cortex™.
          </Body>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" size="lg">Contact Sales</ButtonLink>
            <ButtonLink href="/sectors/hub" variant="secondary" size="lg">Explore by Sector</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
