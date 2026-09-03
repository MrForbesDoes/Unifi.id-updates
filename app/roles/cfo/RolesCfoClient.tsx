'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { DollarSign, Calculator, PieChart, ShieldCheck } from "lucide-react";
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function RolesCfoClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'role-cfo');

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
                <DollarSign className="w-4 h-4 text-unifi-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Financial Leadership</span>
              </div>
              <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                CFO / Finance Director
              </H1>
              <Lead className="text-white/85 mb-10 max-w-2xl">
                Cost control, capital planning, and ROI justification for building investments. Cortex™ provides the financial literacy your estate data has been missing.
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/energy/hub" variant="primary">Explore Decarbonisation Hub</ButtonLink>
                <ButtonLink href="/contact" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Book a Demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Financial Priorities */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">Financial Priorities</H2>
            <Body>
              Cortex™ translates operational performance into financial outcomes, allowing for better capital allocation and waste reduction.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Calculator className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Cost Control</H3>
              <Body className="text-gray-600">
                Identify exactly where energy and operational spend is being wasted. Use occupancy data to right-size services and reduce unnecessary overheads.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <PieChart className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">ROI Justification</H3>
              <Body className="text-gray-600">
                Stop relying on speculative claims. Cortex™ provides the baseline data and post-implementation verification needed to justify capital expenditure.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <ShieldCheck className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Risk Mitigation</H3>
              <Body className="text-gray-600">
                Reduce the financial exposure of non-compliance and insurance premiums by providing verifiable evidence of safety and maintenance standards.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Financial Metrics Section */}
      <Section className="bg-unifi-light border border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6 text-gray-900">Financial Metrics That Matter</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Energy Spend vs. Occupancy</H3>
                    <Body className="text-gray-600">Correlate utility costs directly with building usage to identify "ghost" energy spend in empty spaces.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Cost per Occupant-Hour</H3>
                    <Body className="text-gray-600">A true measure of estate efficiency that goes beyond simple cost per square foot.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Maintenance ROI Tracking</H3>
                    <Body className="text-gray-600">Track the financial impact of moving from reactive to predictive maintenance models.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              <H3 className="text-2xl font-bold mb-6 text-gray-900">Cortex™ Financial Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Cost analytics and waste identification",
                  "ROI modeling for building upgrades",
                  "Energy spend optimization reports",
                  "Capital planning decision support",
                  "Insurance risk profile documentation"
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
                <ButtonLink href="/contact" className="w-full text-left">Request Financial ROI Case Study</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-3xl font-bold mb-6">Ready to optimize your estate spend?</H2>
          <Body className="mb-10 text-lg">
            Discover how Cortex™ can help you identify waste, justify investment, and prove financial outcomes across your property portfolio.
          </Body>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" size="lg">Book a Demo</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary" size="lg">Explore Funding Options</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
