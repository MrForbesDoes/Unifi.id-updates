'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { CheckCircle, PoundSterling, CreditCard, TrendingUp, FileText } from 'lucide-react';

export default function EnergyFundingOptionsClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-funding');

  return (
    <>
<Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Energy funding options hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full text-left">
            <div className="mb-6 animate-fade-in-up" />
            <H1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
              Funding Options
            </H1>
            <Body className="text-lg md:text-xl text-white/85 max-w-3xl mb-10 animate-fade-in-up">
              Multiple funding routes available to support your building upgrade programme with zero upfront capital required.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-gray-900 mb-8 text-left">Available Funding Models</H2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-unifi-green/10 flex items-center justify-center">
                  <PoundSterling className="w-6 h-6 text-unifi-green" />
                </div>
                <H3 className="text-xl font-bold text-gray-900">Grant & Subsidy Support</H3>
              </div>
              <Body className="mb-6 text-gray-600">
                Access to various government and local authority grants and incentives to reduce overall project costs.
              </Body>
              <ul className="space-y-3">
                {[
                  "Salix Finance for public sector",
                  "Local Authority Energy Efficiency schemes",
                  "Clean Growth Fund opportunities",
                  "We handle all applications and administration"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-0.5" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <H3 className="text-xl font-bold text-gray-900 mb-6">Sector-Specific Funding</H3>
              <div className="grid gap-4">
                {[
                  { icon: FileText, title: "Education", desc: "CIF funding, Salix grants, and education-specific programmes" },
                  { icon: CheckCircle, title: "Public Sector", desc: "PSDS, Local Authority schemes, and government initiatives" },
                  { icon: TrendingUp, title: "Commercial", desc: "Enhanced Capital Allowances and business financing options" },
                  { icon: FileText, title: "Industrial", desc: "Industrial Energy Transformation Fund and sector-specific support" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  const iconColors = ["bg-unifi-blue/10 text-unifi-blue", "bg-unifi-green/10 text-unifi-green", "bg-purple-100 text-purple-600", "bg-orange-100 text-orange-600"];
                  return (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 animate-fade-in-up">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconColors[i]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <H3 className="font-bold text-gray-900 mb-1">{item.title}</H3>
                        <Body className="text-sm text-gray-600">{item.desc}</Body>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-gray-900 mb-8 text-left">Typical Project Economics</H2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-unifi-blue/5 p-8 rounded-2xl text-left border border-unifi-blue/10">
              <div className="text-4xl font-bold text-unifi-blue mb-2">20-40%</div>
              <H3 className="text-lg font-bold text-gray-900 mb-1">Energy Savings</H3>
              <Body className="text-gray-600 text-sm">Typical reduction in energy costs</Body>
            </div>
            <div className="bg-unifi-blue/5 p-8 rounded-2xl text-left border border-unifi-blue/10">
              <div className="text-4xl font-bold text-unifi-blue mb-2">3-7 Years</div>
              <H3 className="text-lg font-bold text-gray-900 mb-1">Payback Period</H3>
              <Body className="text-gray-600 text-sm">Including financing and grants</Body>
            </div>
            <div className="bg-unifi-blue/5 p-8 rounded-2xl text-left border border-unifi-blue/10">
              <div className="text-4xl font-bold text-unifi-blue mb-2">15-20 Years</div>
              <H3 className="text-lg font-bold text-gray-900 mb-1">Asset Life</H3>
              <Body className="text-gray-600 text-sm">Continued savings after payback</Body>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-3xl mx-auto px-6 text-left">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore Your Funding Options?</H2>
          <Body className="mb-8 text-gray-600">
            Let our financing specialists identify the best funding route for your specific requirements.
          </Body>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/energy/survey">Book Free Survey</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">Back to Energy Hub</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
