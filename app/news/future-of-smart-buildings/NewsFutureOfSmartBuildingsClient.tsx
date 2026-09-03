'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function NewsFutureOfSmartBuildingsClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-future-of-smart-buildings');

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
                          <span>January 15, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Unifi.id Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>Smart Buildings</span>
                        </div>
                      </div>
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">The Future of Smart Buildings: A 2026 Outlook</H1>
                      <Lead className="mb-12 text-white/85">
                        Discover the key trends shaping the future of building management, from AI-driven energy savings to enhanced security protocols.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              As we move further into 2026, the concept of the "smart building" is evolving. It's no longer just about having connected devices; it's about how those devices work together to create an intelligent, responsive, and sustainable environment.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">Trend 1: AI-Driven Energy Optimization</H2>
            <Body className="mb-6">
              Artificial Intelligence is moving from a buzzword to a practical tool for energy management. By analyzing occupancy patterns and environmental data, AI can optimize HVAC and lighting systems in real-time, delivering significant energy savings without compromising occupant comfort.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Trend 2: Enhanced Security Protocols</H2>
            <Body className="mb-6">
              Security is becoming more proactive and data-led. The integration of presence intelligence with access control allows for real-time threat detection and faster incident response, creating a safer environment for everyone.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "The future of smart buildings lies in the integration of data. When our systems talk to each other, we can create environments that are safer, more efficient, and more responsive to the needs of their occupants."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">Trend 3: Focus on Sustainability and ESG</H2>
            <Body className="mb-6">
              Sustainability is no longer an optional extra; it's a core requirement for building management. Smart buildings are playing a critical role in helping organizations hit their Net Zero targets by providing the data needed to reduce energy waste and track carbon reduction progress.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              The future of smart buildings is bright. By embracing new technologies and focusing on data integration, building managers can create environments that are not only smarter but also safer, more sustainable, and more efficient for everyone.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Build the future with Unifi.id</H3>
              <Body className="text-gray-600 mb-8">
                Discover how our platform can help you create a smarter, safer, and more sustainable building today.
              </Body>
              <ButtonLink href="/platform/overview" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Explore the Platform</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
