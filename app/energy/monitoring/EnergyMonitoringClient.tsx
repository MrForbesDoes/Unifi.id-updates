'use client';
import { H1, H2, Body } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function EnergyMonitoringClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-monitoring');

  return (
    <>
<Section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Energy monitoring hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-blue/20 via-transparent to-unifi-green/10" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <div className="mb-6 animate-fade-in-up" />
            <H1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
              Energy Monitoring
            </H1>
            <Body className="text-lg md:text-xl text-white/85 max-w-3xl animate-fade-in-up">
              Understand your energy consumption to identify savings opportunities and track the performance of your upgrades.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-3xl mx-auto px-6 text-left">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Content Coming Soon</H2>
          <Body className="mb-8 text-gray-600">
            We are currently developing this section to provide detailed information about our energy monitoring solutions. Check back soon for updates.
          </Body>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/energy/contact">Contact Energy Team</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">Back to Energy Hub</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
