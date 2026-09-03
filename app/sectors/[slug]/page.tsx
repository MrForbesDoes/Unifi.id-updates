import { H1, H2, H3 } from '@/src/components/Typography';
import { notFound } from 'next/navigation';

import Image from 'next/image';
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import { getSectorBySlug, sectors } from '@/src/content/sectors';
import { pickUnifiPlaceholder, withBasePath } from '@/src/content/unifiAssets';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector || sector.comingSoon) return {};
  const title = `${sector.title} Sector | Unifi.id`;
  const canonical = `https://unifi.id/sectors/${sector.slug}`;
  return {
    title: { absolute: title },
    description: sector.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: sector.description,
      url: canonical,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return sectors.filter((s) => !s.comingSoon).map((s) => ({ slug: s.slug }));
}

export default async function SectorPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector || sector.comingSoon) notFound();

  const challenges = sector.challenges ?? [];
  const solutions = sector.solutions ?? [];
  const cta = sector.cta;

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={withBasePath(sector.heroImage || pickUnifiPlaceholder('hero', sector.slug))}
            alt={`${sector.title} sector hero image`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-white/80 mb-3 animate-fade-in-up">Sector</p>
              <H1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
                {sector.title}
              </H1>
              <p className="text-lg md:text-xl text-white/85 mb-8 animate-fade-in-up">
                {sector.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                <ButtonLink href="/contact" variant="primary">
                  Talk to us
                </ButtonLink>
                <ButtonLink
                  href="/solutions/hub"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black"
                >
                  Explore solutions
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Challenges */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Challenges</H2>
            <p className="text-base md:text-lg text-gray-700">
              The most common constraints we see in this sector - and why they create risk, waste, or
              avoidable manual work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((c) => (
              <Card key={c.title} withImage={false}>
                <H3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</H3>
                <p className="text-base md:text-lg text-gray-700">{c.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Solutions</H2>
            <p className="text-base md:text-lg text-gray-700">
              Two routes that consistently deliver the fastest improvement in visibility, assurance,
              and operational control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s) => {
              const lower = s.title.toLowerCase();
              const isFireGuard = lower.includes('fireguard');
              const isCortex = lower.includes('cortex');
              const ctaHref = isFireGuard ? '/solutions/fireguard' : isCortex ? '/platform/overview' : undefined;
              const ctaLabel = isFireGuard ? 'Discover FireGuard' : isCortex ? 'Discover Cortex' : undefined;

              return (
                <Card key={s.title} withImage={false}>
                  <H3 className="text-xl font-semibold text-gray-900 mb-4">{s.title}</H3>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    {s.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>

                  {ctaHref && ctaLabel ? (
                    <ButtonLink href={ctaHref} variant="secondary">
                      {ctaLabel}
                    </ButtonLink>
                  ) : null}
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Sector CTA */}
      {cta ? (
        <Section>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Outcome</H2>
              <p className="text-base md:text-lg text-gray-700">{cta.resultStatement}</p>
            </div>

            <div className="max-w-4xl">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">{cta.title}</H2>
                <p className="text-base md:text-lg text-gray-700 mb-8">{cta.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ButtonLink href={cta.primaryCta.href} variant="primary">
                    {cta.primaryCta.label}
                  </ButtonLink>
                  <ButtonLink href={cta.secondaryCta.href} variant="secondary">
                    {cta.secondaryCta.label}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}
