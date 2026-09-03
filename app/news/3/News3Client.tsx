'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function News3Client() {
  const heroImage = pickUnifiPlaceholder('hero', 'news-3');

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
                          <span>December 1, 2025</span>
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
            
                      <H1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Decarbonisation Deep Dive: The ROI of Green Tech</H1>
                      <Lead className="mb-12 text-white/85">
                        We break down the long-term financial benefits of investing in decarbonisation technologies for your property portfolio.
                      </Lead>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              When it comes to decarbonisation, the conversation often focuses on the cost of implementation. However, for organizations with large property portfolios, the real story is the **Return on Investment (ROI)**. Investing in green technology isn't just good for the planet; it's a smart financial move.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">The Direct Financial Benefits</H2>
            <Body className="mb-6">
              The most immediate financial benefit of green tech is reduced energy spend. Technologies like LED lighting, high-efficiency HVAC systems, and solar panels can deliver significant savings on utility bills from day one. In many cases, these savings are enough to pay for the cost of the upgrade within a few years.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Beyond Energy Savings</H2>
            <Body className="mb-6">
              The ROI of green tech goes beyond simple energy savings. It also includes:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>**Reduced Maintenance Costs:** Modern green technologies are often more reliable and require less maintenance than legacy systems.</li>
              <li>**Increased Asset Value:** Buildings with high energy efficiency ratings and modern green tech are more attractive to tenants and investors, commanding higher rents and resale values.</li>
              <li>**Lower Insurance Premiums:** Many insurers offer lower premiums for buildings that meet high safety and environmental standards.</li>
              <li>**Access to Funding:** There are increasingly more grants and low-interest loans available for organizations investing in decarbonisation.</li>
            </ul>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "Investing in green tech is a strategic financial decision. It reduces operational costs, increases asset value, and future-proofs your estate against rising energy prices and carbon taxes."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Role of Data in ROI</H2>
            <Body className="mb-6">
              To truly understand the ROI of green tech, you need data. Unifi.id's Cortex™ platform provides the baseline data and post-implementation verification needed to accurately measure the financial impact of your decarbonisation investments.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              Decarbonisation is a commercial opportunity. By focusing on the long-term ROI of green tech, organizations can reduce their costs, increase their asset value, and lead the way in sustainability for years to come.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-light border border-black/5 rounded-2xl p-8 text-left">
              <H3 className="text-2xl font-bold mb-4 text-gray-900">Optimize your estate ROI</H3>
              <Body className="text-gray-600 mb-8">
                Discover how Cortex™ can help you identify and verify the financial impact of your green tech investments.
              </Body>
              <ButtonLink href="/energy/hub" variant="secondary" className="bg-white border-white text-unifi-dark hover:bg-white/90">Explore Decarbonisation Hub</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
