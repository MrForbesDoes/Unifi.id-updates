'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { CheckCircle, Calendar, MessageSquare } from 'lucide-react';

export default function EnergyContactClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-contact');

  return (
    <>
<Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Energy contact hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <H1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
                Book Your Free Energy Survey
              </H1>
              <div className="space-y-4 mb-10 animate-fade-in-up">
                <p className="text-lg md:text-xl text-white/85">
                  Discover how Unifi.id can deliver smarter buildings, lower energy costs, and greener futures for your organisation. Book a free energy survey or get in touch with our energy team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-unifi-green/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-unifi-green" />
                </div>
                <H2 className="text-2xl font-bold text-gray-900">Book Your Free Survey</H2>
              </div>
              <Body className="mb-6 text-gray-600">
                Get a comprehensive assessment of your building's energy efficiency opportunities with our expert team. No obligation, completely free.
              </Body>
              <ul className="space-y-3 mb-8">
                {[
                  "Complete energy audit of your facilities",
                  "Detailed savings projections",
                  "Fully funded upgrade options",
                  "Implementation timeline planning"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-0.5" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/energy/survey">Book Free Survey</ButtonLink>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-unifi-green/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-unifi-green" />
                </div>
                <H2 className="text-2xl font-bold text-gray-900">Contact Energy Team</H2>
              </div>
              <Body className="mb-6 text-gray-600">
                Have questions about Unifi.id's energy solutions? Our energy specialists are here to help with expert guidance tailored to your specific needs.
              </Body>
              <ul className="space-y-3 mb-8">
                {[
                  "Energy efficiency consultations",
                  "Funding options guidance",
                  "Implementation planning",
                  "Custom solution development"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-0.5" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/energy/team">Contact Energy Team</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H3 className="text-2xl font-bold text-gray-900 mb-8 text-left">Why Choose Unifi.id Energy Solutions?</H3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 animate-fade-in-up">
              <H3 className="text-lg font-bold text-gray-900 mb-2">Zero Upfront Cost</H3>
              <Body className="text-gray-600">Fully funded upgrades using projected energy savings. No capital outlay required.</Body>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 animate-fade-in-up">
              <H3 className="text-lg font-bold text-gray-900 mb-2">Immediate Savings</H3>
              <Body className="text-gray-600">Start reducing energy costs from day one with proven technologies.</Body>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 animate-fade-in-up">
              <H3 className="text-lg font-bold text-gray-900 mb-2">Proven Results</H3>
              <Body className="text-gray-600">Measurable improvements in efficiency, sustainability, and compliance.</Body>
            </div>
          </div>
          <div className="mt-8 text-left">
            <ButtonLink href="/energy/hub" variant="secondary">Back to Energy Hub</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
