'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function NewsTransformingFireSafetyClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-transforming-fire-safety');

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
                          <span>January 25, 2026</span>
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
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Transforming Fire Safety with Real-Time Evacuation Intelligence</H1>
                      <Lead className="mb-12 text-white/85">
                        Fire drills and evacuation protocols are often treated as tick-box exercises - necessary but not always effective. In reality, emergencies demand live data and instant insight.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              When a fire alarm sounds in a large commercial building, the primary goal is simple: get everyone out safely. However, the execution of this goal is often hampered by a lack of information. Who is still in the building? Where are they? Are they moving toward an exit?
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">The "Tick-Box" Trap</H2>
            <Body className="mb-6">
              Traditional fire safety relies heavily on static plans and periodic drills. While these are important, they don't account for the dynamic nature of a real emergency. A building's occupancy changes by the minute, and a fire can block planned evacuation routes, rendering static plans useless.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Live Data: The Critical Difference</H2>
            <Body className="mb-6">
              Unifi.id's FireGuard™ solution introduces real-time evacuation intelligence. By using presence detection technology, we provide fire safety leads and emergency responders with a live view of building occupancy during an alarm.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "In a fire emergency, every second counts. Knowing exactly where people are located allows responders to focus their efforts and save lives."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">How FireGuard™ Works</H2>
            <Body className="mb-6">
              FireGuard™ integrates directly with your building's fire alarm system. When an alarm is triggered, the platform instantly:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>Generates a live occupancy report for every zone in the building.</li>
              <li>Tracks the movement of people toward exits in real-time.</li>
              <li>Identifies individuals who may be trapped or in need of assistance.</li>
              <li>Provides emergency services with a digital "roll call" accessible on any device.</li>
            </ul>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              Fire safety is evolving from a compliance-led requirement to a data-led intelligence operation. By embracing real-time evacuation intelligence, building managers can move beyond the tick-box and provide a higher standard of protection for their occupants.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Protect your people with FireGuard™</H3>
              <Body className="text-gray-600 mb-8">
                Learn how real-time evacuation intelligence can transform your fire safety protocols.
              </Body>
              <ButtonLink href="/solutions/fireguard" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Explore FireGuard</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
