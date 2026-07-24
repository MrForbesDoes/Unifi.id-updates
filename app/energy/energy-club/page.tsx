'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { SEO } from '@/src/components/SEO';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { CheckCircle, Building2, Factory, Users, School, Leaf, Shield } from 'lucide-react';

export default function EnergyClub() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-club');

  return (
    <>
      <SEO
        title="Unifi.id Energy Club | Carbon Reporting and Smarter Buying"
        description="Join the free Energy Club for simpler buying, clearer carbon reporting, and practical support for your carbon action plan."
      />
      <Section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Energy Club hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full text-left">
            <H1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
              The free energy club built for businesses like yours.
            </H1>
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white mb-5 animate-fade-in-up">
              Free to join for all non-domestic customers
            </div>
            <Body className="text-lg md:text-xl text-white/85 max-w-3xl animate-fade-in-up">
              This Year: the Unifi.id Energy Club brings together simpler energy buying, clearer carbon reporting, and practical support without the usual complexity. It is open to all non-domestic customers, completely free to join, and designed to help you save money with no commitment and no upfront cost.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-gray-900 mb-8 text-left">What members get</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Lower energy costs", desc: "Benefit from stronger buying power and clearer routes to long-term savings." },
              { title: "Clearer carbon reporting", desc: "Use better energy data to strengthen carbon reporting and support your carbon action plan." },
              { title: "Straightforward pricing", desc: "See transparent pricing and supplier options without hidden broker conflicts." },
              { title: "Flexible support", desc: "Choose the level of guidance you need, from a simple switch review to wider planning support." },
              { title: "No fee to join", desc: "Membership is completely free, with no commitment, no threshold, and no upfront cost." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex gap-4 animate-fade-in-up">
                <CheckCircle className="w-6 h-6 text-unifi-green flex-shrink-0 mt-1" />
                <div>
                  <H3 className="font-bold text-gray-900 mb-2">{item.title}</H3>
                  <Body className="text-gray-600 text-sm">{item.desc}</Body>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <H2 className="text-2xl font-bold text-gray-900 mb-6">Open to every non-domestic customer</H2>
              <ul className="space-y-4">
                {[
                  { icon: Building2, label: "Single-site businesses and growing teams" },
                  { icon: Factory, label: "Industrial and operational sites" },
                  { icon: Users, label: "Multi-site operators and managed estates" },
                  { icon: School, label: "Schools, charities, and public-facing organisations" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex gap-3 items-center animate-fade-in-up">
                      <Icon className="w-8 h-8 text-unifi-blue flex-shrink-0" />
                      <Body>{item.label}</Body>
                    </li>
                  );
                })}
              </ul>
              <Body className="mt-4 text-gray-600 italic">If you are a non-domestic customer, you can join. No minimum size, no sector restriction, and no spend threshold.</Body>
            </div>
            <div>
              <H2 className="text-2xl font-bold text-gray-900 mb-6">Support for carbon reporting and action</H2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Leaf className="w-6 h-6 text-unifi-green flex-shrink-0 mt-1" />
                  <div>
                    <H3 className="font-bold text-gray-900 mb-1">Clearer carbon reporting</H3>
                    <Body className="text-gray-600 text-sm">Use better consumption insight and supply choices to make carbon reporting easier to manage and explain.</Body>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Shield className="w-6 h-6 text-unifi-green flex-shrink-0 mt-1" />
                  <div>
                    <H3 className="font-bold text-gray-900 mb-1">A simpler path to action</H3>
                    <Body className="text-gray-600 text-sm">Get practical support when you are ready to turn reporting into a carbon action plan and lower-cost delivery.</Body>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-3xl mx-auto px-6 text-left">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Join the Energy Club</H2>
          <Body className="mb-8 text-gray-600">
            Joining is completely free for all non-domestic customers. There is no commitment, no joining fee, and no pressure to switch until you are ready.
          </Body>
          <Body className="mb-8 text-gray-600">
            If you want a simpler way to buy energy, strengthen carbon reporting, or start shaping a carbon action plan, this is a low-friction place to begin.
          </Body>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/energy/contact">Join Free</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">Back to Energy Hub</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
