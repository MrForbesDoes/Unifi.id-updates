'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function NewsDecarbonisationFundingPostClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-decarbonisation-funding-post');

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
                          <span>December 10, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Unifi.id Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>Sustainability</span>
                        </div>
                      </div>
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Decarbonisation: Why Waiting Costs More Than Acting</H1>
                      <Lead className="mb-12 text-white/85">
                        For estates managers, finance teams, and boardroom leaders, decarbonisation is no longer a distant ambition - it's a commercial and regulatory reality.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              The pressure to decarbonise is coming from all sides: regulators, investors, customers, and employees. For organizations with large property portfolios, the challenge is significant. However, the cost of inaction is even higher.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">The Commercial Reality of Carbon</H2>
            <Body className="mb-6">
              Carbon is no longer just an environmental metric; it's a financial one. Rising energy costs, carbon taxes, and the potential for "stranded assets" are all making decarbonisation a commercial necessity. Organizations that fail to act now risk significant financial exposure in the years to come.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Regulatory Landscape</H2>
            <Body className="mb-6">
              Governments around the world are introducing increasingly stringent regulations around building energy efficiency and carbon emissions. Failing to meet these standards can result in heavy fines, legal action, and damage to your organization's reputation.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "Decarbonisation is not just about saving the planet; it's about future-proofing your business. The organizations that lead in sustainability today will be the most resilient and successful tomorrow."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Path Forward: Data-Led Decarbonisation</H2>
            <Body className="mb-6">
              The first step in any decarbonisation journey is understanding your current performance. Unifi.id's Cortex™ platform provides the granular, real-time data needed to identify energy waste, prioritize interventions, and track progress toward your Net Zero targets.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              Decarbonisation is a complex challenge, but it's also a significant opportunity. By embracing data-led decarbonisation today, organizations can reduce their energy costs, meet their regulatory obligations, and lead the way in sustainability for years to come.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Accelerate your journey to Net Zero</H3>
              <Body className="text-gray-600 mb-8">
                Discover how Cortex™ can provide the data and insights you need to decarbonise your estate.
              </Body>
              <ButtonLink href="/energy/hub" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Explore Decarbonisation Hub</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
