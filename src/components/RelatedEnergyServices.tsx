'use client';

import { ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { Body, H2 } from './Typography';

export type RelatedLink = {
  href: string;
  label: string;
  description: string;
  /** Short service key for analytics, e.g. "monitoring", "dec". */
  service: string;
};

type Props = {
  heading?: string;
  intro?: string;
  links: RelatedLink[];
  backgroundColor?: 'auto' | 'white' | 'gray' | 'blue';
};

/**
 * Standard "where this leads next" block used on the pages the brief marks as
 * cross-link-only changes, so reporting, monitoring, certificates and the
 * physical technologies all connect without rewriting those pages.
 */
export default function RelatedEnergyServices({
  heading = 'Where this leads next',
  intro,
  links,
  backgroundColor = 'white',
}: Props) {
  const cardFill = backgroundColor === 'gray' ? 'bg-white' : 'bg-unifi-light';

  return (
    <Section backgroundColor={backgroundColor}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 max-w-3xl">
          <H2 className="mb-3">{heading}</H2>
          {intro ? <Body>{intro}</Body> : null}
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {links.map(({ href, label, description, service }) => (
            <li key={href}>
              <a
                href={href}
                className={`group flex h-full items-start gap-4 rounded-sm border border-gray-200 ${cardFill} p-6 transition-all hover:border-unifi-blue/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-unifi-blue/30`}
                data-track-event="energy_crosslink"
                data-track-service={service}
                data-track-cta={label}
              >
                <ArrowRight
                  className="mt-1 h-5 w-5 flex-shrink-0 text-unifi-blue transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-semibold text-unifi-dark">{label}</span>
                  <span className="mt-1 block text-sm text-gray-600">{description}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
