'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { Shield, Eye, Users, Bell } from "lucide-react";
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function RolesSecurityHeadClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'role-security-head');

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
                <Shield className="w-4 h-4 text-unifi-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Security Leadership</span>
              </div>
              <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Security Head
              </H1>
              <Lead className="text-white/85 mb-10 max-w-2xl">
                Access control, threat detection, and perimeter security. Cortex™ provides the real-time presence intelligence needed to transform physical security into a proactive, data-led operation.
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/platform/overview" variant="primary">Platform Overview</ButtonLink>
                <ButtonLink href="/contact" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Book a Demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Security Priorities */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">Security Priorities</H2>
            <Body>
              Cortex™ addresses the critical need for total building awareness and rapid incident response across complex property portfolios.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Eye className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Presence Intelligence</H3>
              <Body className="text-gray-600">
                Know exactly who is on-site, where they are, and how they are moving in real-time. Move beyond simple door logs to total building awareness.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Bell className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Anomaly Detection</H3>
              <Body className="text-gray-600">
                Identify security threats before they escalate. Cortex™ uses real-time movement data to detect unusual patterns and trigger instant alerts.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Users className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Incident Response</H3>
              <Body className="text-gray-600">
                Coordinate faster, more effective responses to security incidents. Provide your teams with the live data they need to act with confidence.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Security Metrics Section */}
      <Section className="bg-unifi-light border border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6 text-gray-900">Security Metrics That Matter</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Real-Time Occupancy Awareness</H3>
                    <Body className="text-gray-600">A live, zone-by-zone view of building occupancy to ensure security protocols are being followed.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Security Anomaly Alert Rate</H3>
                    <Body className="text-gray-600">Track the effectiveness of your proactive threat detection and the speed of your team's response.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-gray-900">Perimeter Integrity Score</H3>
                    <Body className="text-gray-600">A unified metric of the health and status of all access control and perimeter security systems.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              <H3 className="text-2xl font-bold mb-6 text-gray-900">Cortex™ Security Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Real-time presence intelligence dashboard",
                  "Proactive anomaly detection and alerts",
                  "Integrated incident response coordination",
                  "Estate-wide security risk analytics",
                  "Unified access control and monitoring"
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
                <ButtonLink href="/contact" className="w-full text-left">Book Security Demo</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-3xl font-bold mb-6">Ready to transform your security?</H2>
          <Body className="mb-10 text-lg">
            Discover how Cortex™ can help you gain total building awareness, detect threats proactively, and protect your people with real-time intelligence.
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
