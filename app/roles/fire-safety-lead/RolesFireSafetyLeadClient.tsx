'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { AlertTriangle, Shield, ClipboardCheck, Users } from "lucide-react";
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function RolesFireSafetyLeadClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'role-fire-safety-lead');

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
                <AlertTriangle className="w-4 h-4 text-unifi-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Fire Safety & Compliance</span>
              </div>
              <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Fire Safety Lead
              </H1>
              <Lead className="text-white/85 mb-10 max-w-2xl">
                Proactive control and audit-ready evidence across estates built for compliance-led teams. Cortex™ and FireGuard™ provide the continuous intelligence needed to safeguard lives and property.
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/solutions/fireguard" variant="primary">Explore FireGuard</ButtonLink>
                <ButtonLink href="/contact" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Book a Demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Fire Safety Priorities */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">Fire Safety Priorities</H2>
            <Body>
              Cortex™ addresses the critical need for real-time visibility and verifiable evidence in fire safety management across complex property portfolios.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Shield className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Continuous Monitoring</H3>
              <Body className="text-gray-600">
                Move beyond annual inspections. Gain 24/7 visibility into the health and status of your fire safety systems across all buildings in real-time.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <ClipboardCheck className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Audit-Ready Evidence</H3>
              <Body className="text-gray-600">
                Automate your compliance documentation. Cortex™ provides a tamper-proof audit trail of system tests, maintenance, and incident responses.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Users className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Evacuation Readiness</H3>
              <Body className="text-gray-600">
                Know exactly who is in the building during an emergency. Use real-time occupancy data to coordinate faster, safer evacuations and account for all people.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Fire Safety Metrics Section */}
      <Section className="bg-unifi-light border border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6 text-gray-900">Fire Safety Metrics That Matter</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Real-Time System Health Index</H3>
                    <Body className="text-gray-600">A live aggregate of the operational status of all fire detection and suppression systems across your estate.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Evacuation Time Analytics</H3>
                    <Body className="text-gray-600">Benchmark and improve evacuation performance using real-time occupancy and movement data.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Compliance Gap Visibility</H3>
                    <Body className="text-gray-600">Instantly identify buildings or zones that are falling behind on mandatory testing or maintenance schedules.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              <H3 className="text-2xl font-bold mb-6 text-gray-900">Cortex™ Fire Safety Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "FireGuard continuous monitoring platform",
                  "Real-time evacuation intelligence and analytics",
                  "Automated compliance audit trails",
                  "Estate-wide fire safety risk dashboard",
                  "Integrated incident response coordination"
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
                <ButtonLink href="/contact" className="w-full text-left">Request Fire Safety Audit</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-3xl font-bold mb-6">Ready to transform your fire safety?</H2>
          <Body className="mb-10 text-lg">
            Discover how Cortex™ and FireGuard™ can help you gain total visibility, automate compliance, and protect your people with real-time intelligence.
          </Body>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" size="lg">Book a Demo</ButtonLink>
            <ButtonLink href="/solutions/fireguard" variant="secondary" size="lg">Explore FireGuard</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
