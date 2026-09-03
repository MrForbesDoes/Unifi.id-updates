'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function NewsDataDrivenSecurityClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-data-driven-security');

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
                          <span>January 28, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Unifi.id Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>Security</span>
                        </div>
                      </div>
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Data-Driven Security That Works Smarter</H1>
                      <Lead className="mb-12 text-white/85">
                        Traditional access control focuses on the door. Modern security requires presence intelligence - real-time awareness of who is actually somewhere.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              Physical security has long been defined by barriers: locks, gates, and card readers. While these tools are essential for controlling entry, they often fail to provide the most critical piece of information during an incident: **presence intelligence**.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">The Limitation of Legacy Systems</H2>
            <Body className="mb-6">
              Most legacy access control systems are "event-based." They record when a card is swiped at a reader, but they have no way of knowing if that person is still in the building, which zone they are in, or if they have moved to a different area. In an emergency, this lack of visibility is a significant risk.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Enter Presence Intelligence</H2>
            <Body className="mb-6">
              Unifi.id's Cortex™ platform transforms security from a reactive barrier into a proactive intelligence layer. By integrating real-time movement data with access control, we provide security heads with a live, zone-by-zone view of building occupancy.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "Security isn't just about keeping people out; it's about knowing exactly who is in, so you can protect them effectively."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">Actionable Insights for Security Teams</H2>
            <Body className="mb-6">
              With Cortex™, security teams can:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>Detect anomalies in movement patterns that may indicate a threat.</li>
              <li>Coordinate faster incident responses with live location data.</li>
              <li>Automate occupancy-based security protocols for high-risk zones.</li>
              <li>Provide verifiable evidence of security compliance for audits and insurance.</li>
            </ul>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              As buildings become more complex and threats more sophisticated, the data we collect must work harder. Data-driven security isn't just a trend; it's the new standard for protecting people and assets in the modern world.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Ready to upgrade your security intelligence?</H3>
              <Body className="text-gray-600 mb-8">
                Book a demo to see how Cortex™ can provide the presence intelligence your security operation needs.
              </Body>
              <ButtonLink href="/contact" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Book a Demo</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
