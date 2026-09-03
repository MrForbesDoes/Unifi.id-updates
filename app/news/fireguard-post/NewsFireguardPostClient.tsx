'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function NewsFireguardPostClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-fireguard-post');

  return (
    <main className="min-h-screen">
<Section className="relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="News article hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/10 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 w-full pt-24">
          <div className="max-w-4xl mx-auto px-6">
            
                      <ButtonLink href="/news" variant="outline" size="sm" className="mb-8 text-white border-white hover:bg-white hover:text-black">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
                      </ButtonLink>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>January 10, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Unifi.id Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>Fire Safety</span>
                        </div>
                      </div>
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Beyond the Certificate: Living Fire System Intelligence, 24/7</H1>
                      <Lead className="mb-12 text-white/85">
                        Most commercial buildings pass their annual fire safety inspection. But what happens in the 364 days between one certificate and the next?
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              Fire safety compliance is often viewed as a series of periodic checks: the annual inspection, the monthly alarm test, the weekly fire door check. While these are essential, they only provide a snapshot of a building's safety at a specific moment in time.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">The Gap in Compliance</H2>
            <Body className="mb-6">
              In the intervals between these checks, a building's fire safety status can change significantly. A fire door can be propped open, an alarm sensor can fail, or a new hazard can be introduced. Without continuous monitoring, these issues can go undetected until it's too late.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Living Fire System Intelligence</H2>
            <Body className="mb-6">
              Unifi.id's FireGuard™ platform introduces the concept of "living fire system intelligence." By providing 24/7 monitoring of your building's fire safety systems, we ensure that you have a continuous, real-time view of your compliance status.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "Compliance isn't a certificate on a wall; it's a continuous state of readiness. Living fire system intelligence ensures that your building is safe every day of the year, not just on inspection day."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Benefits of 24/7 Monitoring</H2>
            <Body className="mb-6">
              With FireGuard™, building managers can:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>Receive instant alerts when a fire safety system component fails or is tampered with.</li>
              <li>Identify and address compliance gaps in real-time.</li>
              <li>Provide a continuous, tamper-proof audit trail for regulators and insurers.</li>
              <li>Improve the overall safety and resilience of their property portfolio.</li>
            </ul>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              In the modern regulatory environment, "good enough" is no longer acceptable when it comes to fire safety. By embracing living fire system intelligence, building managers can move beyond the annual certificate and provide a higher standard of protection for their occupants and their business.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Experience Living Fire System Intelligence</H3>
              <Body className="text-gray-600 mb-8">
                Discover how FireGuard™ can provide the continuous monitoring your building needs.
              </Body>
              <ButtonLink href="/solutions/fireguard" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Explore FireGuard</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
