'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { Settings, Layers, Zap, Activity } from "lucide-react";
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function RolesCooClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'role-coo');

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
                <Settings className="w-4 h-4 text-unifi-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Operational Leadership</span>
              </div>
              <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                COO / Operations Director
              </H1>
              <Lead className="text-white/85 mb-10 max-w-2xl">
                Operational efficiency, system integration, and performance across sites. Cortex™ translates fragmented building data into a unified operational command centre.
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/platform/overview" variant="primary">Platform Overview</ButtonLink>
                <ButtonLink href="/solutions/hub" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Explore Solutions
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Operational Priorities */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">Operational Priorities</H2>
            <Body>
              Cortex™ provides the visibility and control needed to scale best practices and eliminate operational bottlenecks across complex estates.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Layers className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">System Integration</H3>
              <Body className="text-gray-600">
                Break down silos. Cortex™ unites data from security, fire safety, energy, and occupancy into a single, actionable intelligence layer.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Zap className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Efficiency at Scale</H3>
              <Body className="text-gray-600">
                Standardise workflows across your entire portfolio. Use cross-site benchmarking to identify top performers and areas for improvement.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Activity className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Predictive Performance</H3>
              <Body className="text-gray-600">
                Move from reactive fire-fighting to proactive management. Use real-time alerts to address issues before they impact operations.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Operational Metrics Section */}
      <Section className="bg-unifi-light border border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6 text-gray-900">Operational Metrics That Matter</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Cross-Site Performance Index</H3>
                    <Body className="text-gray-600">Benchmark every building in your estate against a unified set of operational KPIs.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">System Uptime & Health</H3>
                    <Body className="text-gray-600">Real-time visibility into the status of critical safety and operational infrastructure across all sites.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Workflow Automation Rate</H3>
                    <Body className="text-gray-600">Track the reduction in manual reporting and administrative burden on your operational teams.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              <H3 className="text-2xl font-bold mb-6 text-gray-900">Cortex™ Operational Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Unified operational command centre",
                  "Cross-site performance benchmarking",
                  "Predictive maintenance and safety alerts",
                  "Automated operational reporting",
                  "Integrated system health monitoring"
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
                <ButtonLink href="/contact" className="w-full text-left">Request Operational Audit</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-3xl font-bold mb-6">Ready to unify your operations?</H2>
          <Body className="mb-10 text-lg">
            See how Cortex™ can transform your fragmented building systems into a single, high-performance operational estate.
          </Body>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" size="lg">Book a Demo</ButtonLink>
            <ButtonLink href="/platform/overview" variant="secondary" size="lg">Explore the Platform</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
