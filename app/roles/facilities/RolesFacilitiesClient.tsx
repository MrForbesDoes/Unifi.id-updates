'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { Wrench, Map, Clock, CheckCircle } from "lucide-react";
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function RolesFacilitiesClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'role-facilities');

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
                <Wrench className="w-4 h-4 text-unifi-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Facilities Management</span>
              </div>
              <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Facilities Manager
              </H1>
              <Lead className="text-white/85 mb-10 max-w-2xl">
                Practical control for day-to-day delivery with consistent workflows and evidence-led reporting. Cortex™ helps you move from reactive maintenance to proactive estate management.
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/solutions/fireguard" variant="primary">Explore FireGuard</ButtonLink>
                <ButtonLink href="/platform/overview" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Cortex Overview
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Facilities Priorities */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">Facilities Priorities</H2>
            <Body>
              Cortex™ provides the tools and data needed to streamline day-to-day operations and improve occupant satisfaction across your estate.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Map className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Space Utilisation</H3>
              <Body className="text-gray-600">
                Understand how your buildings are actually being used. Use real-time occupancy data to optimise cleaning schedules, lighting, and HVAC.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Clock className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Predictive Maintenance</H3>
              <Body className="text-gray-600">
                Identify issues before they become complaints. Use system health monitoring to prioritise maintenance tasks based on actual usage and performance.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <CheckCircle className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Compliance Assurance</H3>
              <Body className="text-gray-600">
                Automate your compliance reporting. Cortex™ provides a continuous audit trail for fire safety, access control, and environmental standards.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Facilities Metrics Section */}
      <Section className="bg-unifi-light border border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6 text-gray-900">Facilities Metrics That Matter</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Real-Time Occupancy Density</H3>
                    <Body className="text-gray-600">Monitor live usage levels across different zones to ensure safety and comfort for all occupants.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Reactive vs. Proactive Task Ratio</H3>
                    <Body className="text-gray-600">Track your progress in reducing emergency call-outs through data-led predictive maintenance.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">System Health Score</H3>
                    <Body className="text-gray-600">A unified metric of the operational status of all critical building systems across your portfolio.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              <H3 className="text-2xl font-bold mb-6 text-gray-900">Cortex™ Facilities Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Predictive maintenance scheduling tools",
                  "Space utilization and density analytics",
                  "Automated work order generation",
                  "Real-time system health alerts",
                  "Continuous compliance audit trails"
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
                <ButtonLink href="/contact" className="w-full text-left">Book Facilities Demo</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-3xl font-bold mb-6">Ready to streamline your facilities?</H2>
          <Body className="mb-10 text-lg">
            Discover how Cortex™ can help you gain better control, reduce reactive work, and improve the performance of your buildings every day.
          </Body>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" size="lg">Book a Demo</ButtonLink>
            <ButtonLink href="/solutions/hub" variant="secondary" size="lg">Explore Solutions</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
