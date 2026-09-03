'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function NewsDataDrivenPartnershipsClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-data-driven-partnerships');

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
                          <span>December 20, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Unifi.id Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>Partnerships</span>
                        </div>
                      </div>
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Data-Driven Partnerships - How Unifi.id Makes Other Systems Better</H1>
                      <Lead className="mb-12 text-white/85">
                        Our platform was designed to make your existing infrastructure smarter - not obsolete. We turn legacy systems into intelligent systems.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              In the world of smart buildings, the "rip and replace" approach is often costly, disruptive, and unnecessary. At Unifi.id, we believe in a different approach: **integration**. Our platform is designed to work with your existing infrastructure, making it smarter and more effective through the power of data.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">Making Legacy Systems Intelligent</H2>
            <Body className="mb-6">
              Most buildings already have a significant investment in security, fire safety, and energy management systems. However, these systems are often "dumb" - they collect data but don't provide actionable intelligence. Unifi.id's Cortex™ platform acts as an intelligence layer, integrating with these legacy systems to provide real-time visibility and control.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Power of Collaboration</H2>
            <Body className="mb-6">
              We partner with leading technology providers across the building management spectrum to ensure our platform works seamlessly with the tools you already use. Whether it's access control, fire safety, or energy monitoring, our data-driven partnerships make every system in your building better.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "Our goal is to create a unified building intelligence ecosystem. By partnering with other technology providers, we can deliver a solution that is truly greater than the sum of its parts."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Benefits of Integration</H2>
            <Body className="mb-6">
              By embracing data-driven partnerships and integration, building managers can:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>Extend the life and value of their existing infrastructure.</li>
              <li>Reduce the cost and disruption of building upgrades.</li>
              <li>Gain a unified, real-time view of building performance and safety.</li>
              <li>Create a more resilient and responsive building environment.</li>
            </ul>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              The future of smart buildings is not about individual devices; it's about how those devices work together. By focusing on integration and data-driven partnerships, Unifi.id is helping building managers create smarter, safer, and more efficient environments without the need for costly "rip and replace" projects.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Make your building smarter with Unifi.id</H3>
              <Body className="text-gray-600 mb-8">
                Discover how our platform can integrate with your existing systems to provide the intelligence you need.
              </Body>
              <ButtonLink href="/partners" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Explore Our Partners</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
