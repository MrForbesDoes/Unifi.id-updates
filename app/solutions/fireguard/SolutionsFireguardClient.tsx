'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/components/motion';
import { pickUnifiPlaceholder, withBasePath } from '@/src/content/unifiAssets';
import { AlertTriangle, Shield, ClipboardCheck, Users, Activity, Bell } from "lucide-react";
export default function SolutionsFireguardClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'fireguard');
  return (
    <main className="min-h-screen">
{/* Hero Section */}
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="FireGuard hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                  <AlertTriangle className="w-4 h-4 text-unifi-blue" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Fire Safety & Compliance</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                  FireGuard™
                </H1>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Lead className="text-white/85 mb-10">
                  Proactive and verifiable fire safety and compliance designed for estates teams who need audit-ready evidence. Move from reactive checks to clear control, accountability, and reporting.
                </Lead>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/contact" variant="primary">Discuss FireGuard</ButtonLink>
                <ButtonLink href="/platform/overview" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  See Cortex™
                </ButtonLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* The Problem Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl md:text-4xl font-bold mb-6">The Risk with Traditional Fire Safety</H2>
              <Body className="mb-8 text-lg">
                Fragmented systems and manual processes create dangerous blind spots. When evidence is difficult to assemble, the organisation carries significant operational, legal, and reputational risk.
              </Body>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <H3 className="text-lg font-bold mb-1">Reactive Evidence</H3>
                    <Body className="text-gray-600">Teams spend time compiling proof after an incident rather than managing control before one occurs.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <H3 className="text-lg font-bold mb-1">Inconsistent Reporting</H3>
                    <Body className="text-gray-600">Different buildings and contractors produce varying standards of information, making estate-wide oversight impossible.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <H3 className="text-lg font-bold mb-1">Unclear Ownership</H3>
                    <Body className="text-gray-600">Critical actions fall between responsibilities when fire safety systems are not connected to a central intelligence layer.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-3xl -rotate-2"></div>
              <div className="relative aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src={withBasePath('/unifi-assets/canary/photo-1694902304056-b4ba1412d7b7.webp')}
                  alt="Fire safety monitoring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Capabilities Grid */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">FireGuard™ Capabilities</H2>
            <Body>
              FireGuard™ is built to support compliance-led teams: clear workflows, clear evidence, and a consistent approach across an entire estate.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Shield className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Control & Visibility</H3>
              <Body className="text-gray-600">
                Maintain a clear, real-time view of risk, actions, and system status across all buildings from a single dashboard.
              </Body>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <ClipboardCheck className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Audit-Ready Evidence</H3>
              <Body className="text-gray-600">
                Produce consistent, tamper-proof reporting that supports internal reviews and withstands external regulatory scrutiny.
              </Body>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Users className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Evacuation Intelligence</H3>
              <Body className="text-gray-600">
                Use real-time occupancy data to coordinate faster, safer evacuations and provide emergency services with a live digital roll call.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6">Why FireGuard™ is Different</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/10 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2">Continuous Monitoring</H3>
                    <Body className="text-gray-600">We don't just check once a year. We monitor your fire safety systems 24/7, ensuring they are always ready.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/10 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2">Integrated Intelligence</H3>
                    <Body className="text-gray-600">FireGuard™ links with security and occupancy data to provide a complete picture of building safety during an incident.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/10 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2">Defensible Compliance</H3>
                    <Body className="text-gray-600">Move beyond tick-box exercises to a state of demonstrable, data-led compliance that reduces insurance risk.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <H3 className="text-2xl font-bold mb-6">FireGuard™ Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Real-time fire system health dashboard",
                  "Automated compliance audit trails",
                  "Live evacuation occupancy reports",
                  "Estate-wide risk benchmarking",
                  "Integrated incident response tools"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-unifi-blue flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink href="/contact" className="w-full text-left">Book a FireGuard™ Demo</ButtonLink>
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
            Discover how FireGuard™ can help you gain total visibility, automate compliance, and protect your people with real-time intelligence.
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
