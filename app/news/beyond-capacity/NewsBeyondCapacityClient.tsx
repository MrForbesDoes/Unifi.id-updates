'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function NewsBeyondCapacityClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-beyond-capacity');

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
                          <span>January 20, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Unifi.id Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>Compliance</span>
                        </div>
                      </div>
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Beyond Capacity: Using Occupancy Data to Keep Venues Safe & Compliant</H1>
                      <Lead className="mb-12 text-white/85">
                        Managing a venue's capacity isn't just about guest experience - it's a legal obligation and the foundation of your operating license.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              For venue managers, the challenge of capacity management is constant. Whether it's a stadium, a nightclub, or a corporate event space, knowing exactly how many people are in the building - and where they are concentrated - is essential for safety, compliance, and operational efficiency.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">The Risk of Overcrowding</H2>
            <Body className="mb-6">
              Overcrowding isn't just uncomfortable for guests; it's a major safety hazard. It can lead to crushing, blocked exits, and delayed emergency responses. Furthermore, exceeding your licensed capacity can result in heavy fines, legal action, and the loss of your operating license.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Real-Time Occupancy: A New Standard</H2>
            <Body className="mb-6">
              Traditional methods of tracking capacity, such as manual clickers or ticket sales, are often inaccurate and provide no information about where people are within the venue. Unifi.id's Cortex™ platform provides a real-time, zone-by-zone view of occupancy, allowing venue managers to:
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "Accurate occupancy data is the foundation of venue safety. It allows us to manage crowds proactively and ensure every guest has a safe and enjoyable experience."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">Proactive Crowd Management</H2>
            <Body className="mb-6">
              With Cortex™, venue managers can:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>Monitor live occupancy levels against licensed capacity in real-time.</li>
              <li>Identify "hotspots" where overcrowding is starting to occur.</li>
              <li>Deploy staff to manage crowd flow before issues escalate.</li>
              <li>Provide verifiable evidence of compliance for local authorities and licensing boards.</li>
            </ul>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              In the modern venue environment, "good enough" is no longer acceptable when it comes to capacity management. By leveraging real-time occupancy data, venue managers can move beyond simple counting and provide a higher standard of safety and compliance for their guests and their business.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Ensure your venue is safe and compliant</H3>
              <Body className="text-gray-600 mb-8">
                Discover how real-time occupancy data can transform your venue management.
              </Body>
              <ButtonLink href="/contact" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Book a Demo</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
