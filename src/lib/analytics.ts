/**
 * Event names are fixed by the Energy Solutions implementation brief (section 16).
 * Keep them stable — reports and any downstream dashboards key off these strings.
 */
export type EnergyEventName =
  | 'energy_tab_select'
  | 'energy_service_cta'
  | 'energy_crosslink'
  | 'energy_form_submit'
  | 'partner_outbound';

export type EnergyEventProps = {
  /** Page the event fired on. Filled in automatically when omitted. */
  page?: string;
  /** Tab identifier, for Explore by Technology / Explore by Sector selections. */
  tab?: string;
  /** Sector or sub-sector identifier. */
  sector?: string;
  /** Service the event relates to: trackzero, monitoring, clamp-meters, epc, dec... */
  service?: string;
  /** Visible label of the control that was used. */
  cta?: string;
  /** Destination path or URL, for cross-links and outbound links. */
  destination?: string;
};

type PlausibleFn = (event: string, options?: { props?: Record<string, string> }) => void;

declare global {
  interface Window {
    plausible?: PlausibleFn;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Sends an analytics event to whichever provider is installed.
 *
 * Deliberately provider-agnostic: it forwards to Plausible and to a GTM/GA4
 * dataLayer if either is present, and does nothing at all if neither is. That
 * means event instrumentation can ship before the platform decision is made,
 * and swapping providers later touches this file only.
 */
export function trackEvent(name: EnergyEventName, props: EnergyEventProps = {}): void {
  if (typeof window === 'undefined') return;

  const payload: Record<string, string> = {};
  const merged: EnergyEventProps = {
    page: window.location?.pathname,
    ...props,
  };

  for (const [key, value] of Object.entries(merged)) {
    if (typeof value === 'string' && value.trim()) {
      payload[key] = value.trim();
    }
  }

  try {
    window.plausible?.(name, { props: payload });
  } catch {
    // Analytics must never break the page.
  }

  try {
    window.dataLayer?.push({ event: name, ...payload });
  } catch {
    // Analytics must never break the page.
  }
}
