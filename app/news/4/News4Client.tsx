'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function News4Client() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-4');

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
                          <span>November 20, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Unifi.id Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>Case Study</span>
                        </div>
                      </div>
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Case Study: How a University Saved 30% on Energy Costs</H1>
                      <Lead className="mb-12 text-white/85">
                        Explore our recent partnership with a leading educational institution and see how Cortex delivered verifiable energy savings.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              Universities face a unique set of challenges when it comes to energy management. With large, complex campuses, diverse building types, and fluctuating occupancy patterns, identifying and reducing energy waste can be a daunting task.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">The Challenge</H2>
            <Body className="mb-6">
              A leading UK university was struggling with rising energy costs and a lack of visibility into building performance. Their existing systems were fragmented, and they had no way of correlating energy spend with actual building usage.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Solution: Cortex™</H2>
            <Body className="mb-6">
              The university partnered with Unifi.id to implement the Cortex™ platform across their main campus. By integrating real-time occupancy data with their existing energy monitoring systems, we were able to provide a clear, zone-by-zone view of energy waste.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "Cortex™ provided us with the visibility we had been missing. By understanding how our buildings were actually being used, we were able to identify and eliminate significant energy waste."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Results</H2>
            <Body className="mb-6">
              Within the first six months of implementation, the university achieved:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>**30% reduction in total energy costs** through occupancy-led HVAC and lighting control.</li>
              <li>**Verifiable carbon footprint reduction** for annual ESG reporting.</li>
              <li>**Improved occupant comfort and safety** through real-time environmental monitoring.</li>
              <li>**Data-led capital planning** for future building upgrades.</li>
            </ul>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              The university's success demonstrates the power of data-led energy management. By embracing the Cortex™ platform, educational institutions can reduce their costs, hit their sustainability targets, and create better environments for their students and staff.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Deliver verifiable savings for your institution</H3>
              <Body className="text-gray-600 mb-8">
                Discover how Cortex™ can help you reduce energy waste and improve building performance.
              </Body>
              <ButtonLink href="/sectors/education" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Explore Education Solutions</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
