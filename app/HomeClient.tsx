'use client';
import HeroSection from '@/src/components/HeroSection';
import ChallengeSection from '@/src/components/ChallengeSection';
import CortexSection from '@/src/components/CortexSection';
import SolutionsSection from '@/src/components/SolutionsSection';
import SectorsSection from '@/src/components/SectorsSection';
import CTASection from '@/src/components/CTASection';

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <ChallengeSection />
      <CortexSection />
      <SolutionsSection />
      <SectorsSection />
      <CTASection />
    </>
  );
}
