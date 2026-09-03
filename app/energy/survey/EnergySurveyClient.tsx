'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/src/components/Section';
import { H1, H2, Body } from '@/src/components/Typography';
import Card from '@/src/components/Card';
import { ButtonLink } from '@/src/components/ButtonLink';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { submitLeadForm } from '@/src/lib/leadForms';

export default function EnergySurveyClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-survey');
  const initialForm = {
    name: '',
    email: '',
    phone: '',
    organisation: '',
    postcode: '',
    buildings: '',
    message: '',
    website: '',
  };
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    postcode: '',
    buildings: '',
    message: '',
    website: '',
  });
  const [submissionStatus, setSubmissionStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  async function handleSurveySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmissionStatus('loading');
    setErrorMessage('');

    try {
      await submitLeadForm('energy_survey', form);
      setForm(initialForm);
      setSubmissionStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to submit the form right now.');
      setSubmissionStatus('error');
    }
  }

  return (
    <main className="min-h-screen">
{/* Hero */}
      <Section className="relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/15" />
        </div>
        <div className="relative z-10 w-full pt-24">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <H1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
                Book a Free Energy Survey
              </H1>
              <Body className="text-lg md:text-xl text-white/85">
                Tell us a little about your estate and we’ll arrange a free, no-obligation survey. You’ll get a clear view of savings potential and funded upgrade options.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <Card withImage={false} className="lg:col-span-2">
              <H2 className="text-2xl font-bold text-gray-900">Survey request form</H2>
              <Body className="text-gray-600">
                This goes to the Unifi.id energy team (separate from the general contact form).
              </Body>

              <form
                className="mt-6 grid md:grid-cols-2 gap-4"
                onSubmit={handleSurveySubmit}
              >
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label className="block text-sm font-medium text-gray-700">Website</label>
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3"
                  />
                </div>

                <Field label="Your name" required value={form.name} onChange={(v) => setForm((p) => ({ ...p, name: v }))} />
                <Field label="Your email" required type="email" value={form.email} onChange={(v) => setForm((p) => ({ ...p, email: v }))} />
                <Field label="Phone" value={form.phone} onChange={(v) => setForm((p) => ({ ...p, phone: v }))} />
                <Field label="Organisation" value={form.organisation} onChange={(v) => setForm((p) => ({ ...p, organisation: v }))} />
                <Field label="Postcode" value={form.postcode} onChange={(v) => setForm((p) => ({ ...p, postcode: v }))} />
                <Field label="Number of buildings" value={form.buildings} onChange={(v) => setForm((p) => ({ ...p, buildings: v }))} />

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">What should we know?</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    rows={6}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3"
                    placeholder="e.g., building type, current issues, target savings, timelines…"
                  />
                </div>

                {submissionStatus === 'success' ? (
                  <div className="md:col-span-2 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
                    Submission received. Thanks, your survey request has been sent.
                  </div>
                ) : null}

                {submissionStatus === 'error' ? (
                  <div className="md:col-span-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submissionStatus === 'loading'}
                    className="px-8 py-3 rounded-full bg-unifi-dark text-white font-semibold hover:bg-black transition-colors"
                  >
                    {submissionStatus === 'loading' ? 'Submitting...' : 'Submit survey request'}
                  </button>
                  <ButtonLink href="/energy/contact" variant="secondary">
                    Back to Energy
                  </ButtonLink>
                </div>
              </form>
            </Card>

            <Card withImage={false} className="h-full">
              <H2 className="text-xl font-bold text-gray-900">What you’ll get</H2>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                <li>Assessment of energy efficiency opportunities</li>
                <li>Indicative savings projections</li>
                <li>Fully funded upgrade options (where applicable)</li>
                <li>Implementation timeline planning</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3"
      />
    </div>
  );
}
