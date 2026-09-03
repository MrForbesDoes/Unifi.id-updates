'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import Link from 'next/link';

import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { sectors } from '@/src/content/sectors';

export default function SectorsClient() {
  return (
    <>
{/* Hero */}
      <Section className="bg-white min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <H1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                Sectors
              </H1>
              <div className="space-y-4 mb-10 max-w-3xl">
                <p className="text-lg md:text-xl text-gray-600">
                  Start with your sector, then follow the pathways across platform (Cortex), fire
                  safety (FireGuard), and energy.
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                  Each route is designed to relieve budget pressure, strengthen compliance, and
                  reduce disruption.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/solutions/hub">Explore solutions</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={pickUnifiPlaceholder('hero', 'sectors-hero')}
                  alt=""
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sector cards */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Sector pathways
            </H2>
            <p className="text-base md:text-lg text-gray-700">
              Use these pathways to orient your priorities. Each sector then connects to the same
              core routes: Cortex, FireGuard, and Energy.
            </p>
          </div>

          <ul className="grid md:grid-cols-3 gap-6" aria-label="Sector pathways">
            {sectors.map((sector) => {
              const href = sector.comingSoon ? undefined : `/sectors/${sector.slug}`;

              const content = (
                <Card
                  withImage={false}
                  className={`h-full transition-shadow ${
                    href ? 'hover:shadow-md focus-within:shadow-md' : 'opacity-75'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-900"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={sector.icon.svgPath} />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <H3 className="text-xl font-semibold text-gray-900">{sector.title}</H3>
                        {sector.comingSoon ? (
                          <span className="text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5">
                            Coming soon
                          </span>
                        ) : null}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{sector.summary}</p>
                      <p className="text-base md:text-lg text-gray-700 mt-3">{sector.description}</p>

                      <div className="mt-5">
                        <p className="text-sm font-medium text-gray-900 mb-2">Recommended routes</p>
                        <div className="flex flex-wrap gap-2">
                          {sector.recommendedRoutes.slice(0, 3).map((route) => (
                            <span
                              key={route.href}
                              className="text-xs font-medium text-gray-800 bg-gray-50 border border-gray-200 rounded-full px-2 py-1"
                            >
                              {route.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {href ? (
                        <div className="mt-6">
                          <span className="inline-flex items-center text-sm font-medium text-gray-900 underline underline-offset-4">
                            View pathway
                            <span className="ml-1" aria-hidden="true">
                              →
                            </span>
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Card>
              );

              return (
                <li key={sector.slug} className="h-full">
                  {href ? (
                    <Link
                      href={href}
                      className="block h-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      aria-label={`View ${sector.title} sector pathway`}
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* Next step */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Choose a starting point
            </H2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              If you want to understand the platform first, start with Cortex. If you're focused
              on immediate risk reduction, start with FireGuard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/platform/overview" variant="secondary">
                Cortex overview
              </ButtonLink>
              <ButtonLink href="/solutions/fireguard" variant="secondary">
                FireGuard
              </ButtonLink>
              <ButtonLink href="/energy/hub" variant="secondary">
                Energy
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
