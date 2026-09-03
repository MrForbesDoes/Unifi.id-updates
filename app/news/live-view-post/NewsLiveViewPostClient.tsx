'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function NewsLiveViewPostClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-live-view-post');

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
                          <span>January 1, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Unifi.id Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>Platform</span>
                        </div>
                      </div>
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">The Power of LiveView – Total Building Awareness in One Place</H1>
                      <Lead className="mb-12 text-white/85">
                        Most buildings are a mess of disconnected systems. Unifi.id's unified command centre transforms fragmented data into actionable building intelligence.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              In the modern building environment, data is everywhere. However, this data is often trapped in disconnected silos: security systems, fire alarms, energy meters, and occupancy sensors. For building managers, this fragmentation makes it nearly impossible to get a clear, real-time view of building performance and safety.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">The Problem with Disconnected Systems</H2>
            <Body className="mb-6">
              When systems don't talk to each other, building managers are forced to manually correlate data from multiple sources. This is not only time-consuming but also prone to error. In an emergency, the lack of a unified view can lead to delays and confusion, putting people and property at risk.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Enter LiveView™</H2>
            <Body className="mb-6">
              Unifi.id's LiveView™ is a unified command centre that brings all your building data together in one place. By integrating data from security, fire safety, energy, and occupancy, LiveView™ provides building managers with total building awareness in real-time.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "LiveView™ is the brain of the smart building. It transforms fragmented data into actionable intelligence, allowing building managers to make better decisions, faster."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Benefits of Total Building Awareness</H2>
            <Body className="mb-6">
              With LiveView™, building managers can:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>Monitor all building systems from a single, intuitive dashboard.</li>
              <li>Identify and address operational issues in real-time.</li>
              <li>Coordinate faster, more effective incident responses with live data.</li>
              <li>Improve the overall efficiency, safety, and resilience of their property portfolio.</li>
            </ul>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              The future of building management lies in integration. By embracing total building awareness through LiveView™, building managers can move beyond disconnected systems and create environments that are safer, more efficient, and more responsive to the needs of their occupants.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Experience the Power of LiveView™</H3>
              <Body className="text-gray-600 mb-8">
                Discover how our unified command centre can transform your building management.
              </Body>
              <ButtonLink href="/platform/overview" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Explore the Platform</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
