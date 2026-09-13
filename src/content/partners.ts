/**
 * Outbound partner links, with attribution.
 *
 * Why this exists: when we send someone to a partner we want the partner to be
 * able to see the traffic came from Unifi.id, so the value we generate is
 * evidenced rather than assumed.
 *
 * Two mechanisms, deliberately separate:
 *
 *  1. UTM parameters — standard, work immediately, need nothing from the partner.
 *     Any analytics platform on their side will attribute these to unifi.id.
 *
 *  2. A referral code — partner-specific, and only useful once they issue one.
 *     TrackZero has not supplied ours yet, so TRACKZERO_REFERRAL_CODE is empty
 *     and no referral parameter is emitted. Set it (and confirm the parameter
 *     name below matches what TrackZero expects) and every link picks it up.
 */

const TRACKZERO_BASE_URL = 'https://trackzero.eco/';

/** Supplied by TrackZero. Empty until they issue one — no parameter is added while blank. */
const TRACKZERO_REFERRAL_CODE = '';

/** Query parameter TrackZero reads the referral code from. Confirm before enabling the code above. */
const TRACKZERO_REFERRAL_PARAM = 'ref';

type PartnerLinkOptions = {
  /** Where on our site the link sits, e.g. "carbon-reporting". Becomes utm_content. */
  placement: string;
  /** Campaign grouping. Defaults to the evergreen partnership campaign. */
  campaign?: string;
};

export function trackZeroUrl({ placement, campaign = 'trackzero-partnership' }: PartnerLinkOptions) {
  const url = new URL(TRACKZERO_BASE_URL);
  url.searchParams.set('utm_source', 'unifi.id');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', campaign);
  url.searchParams.set('utm_content', placement);

  if (TRACKZERO_REFERRAL_CODE) {
    url.searchParams.set(TRACKZERO_REFERRAL_PARAM, TRACKZERO_REFERRAL_CODE);
  }

  return url.toString();
}

export const TRACKZERO_REFERRAL_CODE_CONFIGURED = Boolean(TRACKZERO_REFERRAL_CODE);
