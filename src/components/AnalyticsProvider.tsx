'use client';

import { useEffect } from 'react';
import { trackEvent, type EnergyEventName, type EnergyEventProps } from '@/src/lib/analytics';

const TRACKED_EVENTS: EnergyEventName[] = [
  'energy_tab_select',
  'energy_service_cta',
  'energy_crosslink',
  'energy_form_submit',
  'partner_outbound',
];

function isTrackedEvent(value: string | undefined): value is EnergyEventName {
  return !!value && (TRACKED_EVENTS as string[]).includes(value);
}

/**
 * Attaches one delegated click listener for the whole site.
 *
 * Anything that should report a click just carries data attributes:
 *
 *   data-track-event="energy_service_cta"
 *   data-track-service="dec"
 *   data-track-cta="Explore Display Energy Certificates"
 *
 * Keeping instrumentation declarative means call sites stay readable, new pages
 * opt in without wiring handlers, and the listener count stays at one.
 */
export default function AnalyticsProvider() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const el = target?.closest?.('[data-track-event]') as HTMLElement | null;
      if (!el) return;

      const name = el.dataset.trackEvent;
      if (!isTrackedEvent(name)) return;

      const props: EnergyEventProps = {
        tab: el.dataset.trackTab,
        sector: el.dataset.trackSector,
        service: el.dataset.trackService,
        cta: el.dataset.trackCta || el.textContent?.trim().slice(0, 80),
        destination:
          el.dataset.trackDestination || el.getAttribute('href') || undefined,
      };

      trackEvent(name, props);
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
