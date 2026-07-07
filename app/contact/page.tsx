'use client';
import React from 'react';
import { H1, H2, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import Card from '@/src/components/Card';
import { CheckCircle2, Users, TrendingUp, PlugZap } from "lucide-react";
import { SEO } from '@/src/components/SEO';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { submitLeadForm } from '@/src/lib/leadForms';

export default function ContactPage() {
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '', website: '' });
  const [submissionStatus, setSubmissionStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmissionStatus('loading');
    setErrorMessage('');

    try {
      await submitLeadForm('contact', form);
      setForm({ name: '', email: '', subject: '', message: '', website: '' });
      setSubmissionStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to submit the form right now.');
      setSubmissionStatus('error');
    }
  }

  return (
    <main className="min-h-screen">
      <SEO 
        title="Contact Us | Book a Demo of Cortex™ Intelligence"
        description="Get in touch with Unifi.id or book a personalised demonstration of Cortex™. Discover how we deliver smarter buildings, safer people, and greener futures."
      />
      {/* Hero Section */}
      <Section className="relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={pickUnifiPlaceholder('hero', 'contact-hero')}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/10 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-left w-full pt-24">
          <H1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us / Book Demo
          </H1>
          <p className="text-lg md:text-xl text-white/85">
            Discover how Cortex™ can deliver smarter buildings, safer people, and greener futures for your organisation. Book a personalised demonstration or get in touch with our team.
          </p>
        </div>
      </Section>

      {/* Office locations */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 place-items-center">
            <Card withImage={false} className="h-full w-full max-w-md">
              <H3 className="text-lg font-semibold text-gray-900 mb-3">London Office (HQ)</H3>
              <div className="text-gray-700 space-y-1">
                <p>Unifi.id HQ</p>
                <p>Level 39</p>
                <p>One Canada Square</p>
                <p>Canary Wharf</p>
                <p>E14 5AB</p>
                <p>London (United Kingdom)</p>
              </div>
              <div className="mt-4 space-y-2">
                <a href="tel:+447785996916" className="text-gray-900 font-medium hover:underline">
                  +44 (0) 7785 996 916
                </a>
                <div>
                  <a href="mailto:info@unifi.id" className="text-unifi-blue font-medium hover:underline">
                    Email London
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-900">Opening Hours:</p>
                <p className="text-sm text-gray-700">Monday to Friday</p>
                <p className="text-sm text-gray-700">09:30 to 18:00 (GMT/BST)</p>
              </div>
            </Card>

            {/* Additional offices removed (keep London HQ only) */}
          </div>
        </div>
      </Section>

      {/* Contact / booking actions + form */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Book Your Demo */}
            <div className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg">
              <H2 className="text-2xl font-bold text-primary mb-4">Book Your Demo</H2>
              <p className="text-gray-600 mb-6">
                See Cortex™ in action with a tailored demonstration that shows how our platform can address your specific building management challenges and opportunities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Personalised platform walkthrough',
                  'ROI analysis for your buildings',
                  'Integration planning discussion',
                  'Next steps guidance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/book-demo" variant="primary" className="w-full">
                Book Demo
              </ButtonLink>
            </div>

            {/* Card 2: Get in Touch */}
            <div className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg">
              <H2 className="text-2xl font-bold text-primary mb-4">Get in Touch</H2>
              <p className="text-gray-600 mb-6">
                Have questions about how Cortex™ can work for your organisation? Our team is here to help with expert guidance tailored to your specific needs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Technical consultations',
                  'Implementation planning',
                  'Partnership opportunities',
                  'Custom solution development',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href="mailto:info@unifi.id" variant="secondary" className="w-full">
                Contact Us
              </ButtonLink>
            </div>
          </div>

          <div className="mt-32 max-w-3xl mx-auto">
            <Card withImage={false} className="p-6 md:p-8">
              <H2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Send us a message</H2>
              <p className="text-gray-600 mb-6">
                Tell us what you’re trying to achieve and we’ll route you to the right person.
              </p>

              <form
                className="space-y-4"
                onSubmit={handleContactSubmit}
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Your name (required)</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Your email (required)</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Your message (required)</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="What do you need help with?"
                  />
                </div>

                {submissionStatus === 'success' ? (
                  <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
                    Submission received. Thanks, your message has been sent.
                  </div>
                ) : null}

                {submissionStatus === 'error' ? (
                  <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={submissionStatus === 'loading'}
                    className="px-8 py-3 rounded-full bg-unifi-light border border-black/5 font-semibold hover:bg-gray-800 transition-colors"
                  >
                    {submissionStatus === 'loading' ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Choose Section */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-left mb-10">
            <H2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Cortex™?</H2>
            <p className="text-gray-600">
              A platform built to reduce risk, improve decision-making, and integrate cleanly with the systems you already rely on.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              {
                icon: Users,
                title: 'People-First Design',
                body: 'Every feature prioritises occupant wellbeing and experience.',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                body: 'Measurable improvements in efficiency, safety, and sustainability.',
              },
              {
                icon: PlugZap,
                title: 'Seamless Integration',
                body: 'Works with your existing systems without disruption.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} withImage={false} className="h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <H3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</H3>
                      <p className="text-gray-600">{item.body}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>
    </main>
  );
}
