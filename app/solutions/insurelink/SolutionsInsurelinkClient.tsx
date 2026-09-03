'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/components/motion';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { ShieldCheck, FileText, BarChart, Lock } from "lucide-react";
export default function SolutionsInsurelinkClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'insurelink');
  return (
    <main className="min-h-screen">
{/* Hero Section */}
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InsureLink hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-blue/20 via-transparent to-purple-500/10" />
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
                  <ShieldCheck className="w-4 h-4 text-unifi-blue" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Risk & Assurance</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                  InsureLink
                </H1>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Lead className="text-white/85 mb-10">
                  Bridging the gap between building performance and insurance risk. InsureLink provides the verifiable evidence needed to reduce premiums and improve coverage.
                </Lead>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/contact" variant="primary">Discuss InsureLink</ButtonLink>
                <ButtonLink href="/solutions/hub" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Back to Solutions
                </ButtonLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Core Capabilities */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">Evidence-Led Assurance</H2>
            <Body>
              InsureLink transforms raw building data into a structured evidence layer that speaks the language of risk and insurance.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <FileText className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Verifiable Compliance</H3>
              <Body className="text-gray-600">
                Provide insurers with a continuous, tamper-proof audit trail of fire safety tests, maintenance schedules, and regulatory adherence.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <BarChart className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Risk Analytics</H3>
              <Body className="text-gray-600">
                Identify and quantify operational risks across your estate. Use real-time data to demonstrate proactive risk mitigation to your brokers.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <Lock className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Asset Protection</H3>
              <Body className="text-gray-600">
                Improve the resilience of your physical assets. InsureLink ensures that critical safety systems are always operational and effective.
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
              <H2 className="text-3xl font-bold mb-6">Why InsureLink Matters</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/10 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2">Premium Optimization</H3>
                    <Body className="text-gray-600">Use defensible data to negotiate better insurance terms based on actual building performance and safety standards.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/10 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2">Claims Acceleration</H3>
                    <Body className="text-gray-600">In the event of an incident, provide immediate, verifiable data to accelerate the claims process and reduce business interruption.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/10 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2">Demonstrable Duty of Care</H3>
                    <Body className="text-gray-600">Prove to stakeholders and regulators that you are meeting your legal and ethical obligations with real-time evidence.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <H3 className="text-2xl font-bold mb-6">InsureLink Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Continuous compliance audit trails",
                  "Estate-wide risk profile reports",
                  "Safety system health monitoring",
                  "Insurance-ready data exports",
                  "Proactive risk mitigation alerts"
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
                <ButtonLink href="/contact" className="w-fit">Request Risk Assessment</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-3xl font-bold mb-6">Ready to link data to assurance?</H2>
          <Body className="mb-10 text-lg">
            Discover how InsureLink can help you gain better coverage, reduce premiums, and prove your commitment to safety and risk management.
          </Body>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <ButtonLink href="/contact" size="lg">Contact Sales</ButtonLink>
            <ButtonLink href="/solutions/hub" variant="secondary" size="lg">Explore All Solutions</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
