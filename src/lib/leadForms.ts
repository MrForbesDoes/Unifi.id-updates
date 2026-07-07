export type LeadFormType = 'demo' | 'contact' | 'energy_survey' | 'energy_contact' | 'carbon_reporting_contact';

export type LeadFormData = Record<string, string | number | boolean | null | undefined>;

export type LeadSubmissionResult = {
  ok: boolean;
  leadId?: string;
  message?: string;
};

const leadFormDestinations: Record<LeadFormType, { email: string; label: string }> = {
  demo: { email: 'info@unifi.id', label: 'Demo request' },
  contact: { email: 'info@unifi.id', label: 'Website enquiry' },
  energy_survey: { email: 'energy@unifi.id', label: 'Energy survey request' },
  energy_contact: { email: 'energy@unifi.id', label: 'Energy team enquiry' },
  carbon_reporting_contact: { email: 'energy@unifi.id', label: 'Carbon reporting enquiry' },
};

export async function submitLeadForm(
  formType: LeadFormType,
  data: LeadFormData,
): Promise<LeadSubmissionResult> {
  const leadApiUrl = getLeadApiUrl();

  if (!leadApiUrl) {
    submitViaMailto(formType, data);
    return { ok: true, message: 'Email draft opened.' };
  }

  const response = await fetch(leadApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      formType,
      data,
      sourcePage: typeof window !== 'undefined' ? window.location.pathname : undefined,
    }),
  });

  let payload: LeadSubmissionResult = { ok: false };

  try {
    payload = await response.json();
  } catch {
    payload = { ok: false, message: 'The lead service returned an invalid response.' };
  }

  if (!response.ok || !payload.ok) {
    throw new Error(payload.message || 'Unable to submit the form right now.');
  }

  return payload;
}

function getLeadApiUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_LEAD_API_URL || process.env.VITE_LEAD_API_URL;

  if (configuredUrl) {
    return configuredUrl;
  }

  if (
    typeof window !== 'undefined' &&
    ['localhost', '127.0.0.1'].includes(window.location.hostname)
  ) {
    return 'http://localhost:8787/api/leads';
  }

  return '';
}

function submitViaMailto(formType: LeadFormType, data: LeadFormData) {
  if (typeof window === 'undefined') {
    throw new Error('Lead service is not configured.');
  }

  const destination = leadFormDestinations[formType];
  const subject = `[Unifi.id] ${String(data.subject || destination.label).trim()}`;
  const body = Object.entries(data)
    .filter(([key, value]) => key !== 'website' && value !== null && value !== undefined && String(value).trim())
    .map(([key, value]) => `${formatLabel(key)}: ${String(value).trim()}`)
    .join('\n');

  window.location.href = `mailto:${destination.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function formatLabel(key: string) {
  return key.replace(/[_-]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}
