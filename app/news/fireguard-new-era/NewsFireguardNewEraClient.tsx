'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function NewsFireguardNewEraClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-fireguard-new-era');

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
                          <span>January 5, 2026</span>
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
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Unifi.id & FireGuard: A New Era in Fire Safety</H1>
                      <Lead className="mb-12 text-white/85">
                        Learn how our integrated FireGuard solution is revolutionizing fire safety compliance and response times in complex environments.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              The partnership between Unifi.id and FireGuard™ represents a significant leap forward in fire safety technology. By combining Unifi.id's expertise in presence intelligence with FireGuard's advanced monitoring capabilities, we have created a solution that is truly greater than the sum of its parts.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">A Unified Approach to Safety</H2>
            <Body className="mb-6">
              Traditionally, fire safety and building security have been managed as separate silos. This fragmentation can lead to delays and confusion during an emergency. The Unifi.id and FireGuard™ integration breaks down these silos, providing a unified view of building safety and occupancy.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Revolutionizing Response Times</H2>
            <Body className="mb-6">
              In a fire emergency, every second counts. By providing real-time occupancy data directly to fire safety leads and emergency responders, our integrated solution allows for faster, more effective evacuations and incident responses.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "The integration of Unifi.id and FireGuard™ is a game-changer for fire safety. It provides the real-time intelligence needed to protect people and property in even the most complex environments."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">Key Features of the Integration</H2>
            <Body className="mb-6">
              The Unifi.id and FireGuard™ integrated solution includes:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>Real-time occupancy reporting during fire alarms.</li>
              <li>Continuous monitoring of fire safety system health.</li>
              <li>Automated compliance documentation and audit trails.</li>
              <li>Integrated incident response coordination tools.</li>
            </ul>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              The Unifi.id and FireGuard™ partnership is ushering in a new era of fire safety. By embracing integration and real-time intelligence, building managers can provide a higher standard of protection for their occupants and their business.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Experience the New Era of Fire Safety</H3>
              <Body className="text-gray-600 mb-8">
                Discover how the Unifi.id and FireGuard™ integration can transform your fire safety protocols.
              </Body>
              <ButtonLink href="/solutions/fireguard" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Explore FireGuard</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
