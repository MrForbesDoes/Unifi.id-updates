'use client';

import { type FormEvent, useState } from 'react';
import { H1, H2 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { SEO } from '@/src/components/SEO';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { submitLeadForm } from '@/src/lib/leadForms';

export default function BookDemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([key, value]) => [key, String(value)]),
    );

    try {
      await submitLeadForm('demo', data);
      form.reset();
      setSubmissionStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to submit the form right now.');
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen">
      <SEO
        title="Book a Demo | Unifi.id"
        description="Request a personalised demo of Cortex™. We'll follow up to understand your estate, goals, and timelines."
      />

      <Section className="relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={pickUnifiPlaceholder('hero', 'book-demo-hero')}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/10 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-left w-full pt-24">
          <H1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Demo</H1>
          <p className="text-lg md:text-xl text-white/85">
            Share a few details and we’ll get back to arrange a tailored walkthrough.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <H2 className="text-2xl font-bold text-gray-900 mb-6">Demo request form</H2>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >
                <div className="hidden" aria-hidden="true">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organisation</label>
                  <input
                    name="company"
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Company / Council / Trust"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <input
                    name="role"
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Estates Director / Facilities / Finance / ESG"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What do you want to see?</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="A quick overview of Cortex, FireGuard, occupancy intelligence, energy funding…"
                  />
                </div>

                {submissionStatus === 'success' ? (
                  <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
                    Submission received. Thanks, we’ll be in touch shortly to schedule your demo.
                  </div>
                ) : null}

                {errorMessage ? (
                  <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-sm bg-unifi-dark px-8 py-4 text-center text-lg font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-black hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit request'}
                  </button>

                  <ButtonLink href="/contact" variant="secondary" className="justify-center">
                    Back to contact
                  </ButtonLink>
                </div>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
