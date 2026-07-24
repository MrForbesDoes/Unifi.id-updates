'use client';

import React from 'react';
import Image from 'next/image';
import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CheckCircle,
  ChevronDown,
  ClipboardList,
  FileSpreadsheet,
  GraduationCap,
  Landmark,
  Leaf,
  Megaphone,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  University,
  Users,
} from 'lucide-react';

import Card from '@/src/components/Card';
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import { SEO } from '@/src/components/SEO';
import { Body, H1, H2, H3, Lead } from '@/src/components/Typography';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { submitLeadForm } from '@/src/lib/leadForms';

type SchoolTab = {
  id: string;
  label: string;
  body: string;
};

type ToolkitStep = {
  label: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
};

type FaqItem = {
  question: string;
  answer: string;
};

const schoolTabs: SchoolTab[] = [
  {
    id: 'maintained',
    label: 'Maintained schools',
    body:
      'Maintained schools often work within local-authority oversight, where estate-wide energy data may already sit centrally. TrackZero helps schools turn that fragmented picture into a usable carbon baseline and reporting workflow that fits existing LA relationships instead of duplicating them.',
  },
  {
    id: 'academies',
    label: 'Academies & free schools',
    body:
      'Academies and free schools usually own their own reporting responsibilities without the reporting support structure a local authority might provide. TrackZero centralises that work in one place, giving school leaders a practical alternative to ad hoc spreadsheets or one-off consultant projects.',
  },
  {
    id: 'mats',
    label: 'Multi-academy trusts',
    body:
      'For MATs, the challenge is rarely one school. It is consolidating data across many sites, creating trust-wide roll-ups, and reporting in a way trustees can use. TrackZero supports site-level visibility and centralised reporting so sustainability leads can manage the whole estate with far less friction.',
  },
  {
    id: 'independent',
    label: 'Independent schools',
    body:
      'Independent schools are regulated by the DfE and face the same core expectations around sustainability leads and Climate Action Plans, but without local-authority infrastructure around them. TrackZero gives them a structured route to baseline emissions, track progress, and report clearly to governors and parents.',
  },
  {
    id: 'special',
    label: 'Special schools',
    body:
      'Special schools often have more complex estates, transport needs, and specialist facilities that make baseline measurement harder. TrackZero helps teams capture that complexity more clearly and turn it into a reporting process that is still manageable for busy operational staff.',
  },
  {
    id: 'early-years',
    label: 'Early years & nurseries',
    body:
      'Smaller estates do not remove the expectation to appoint a sustainability lead and track progress. TrackZero gives early years settings a lightweight, affordable way to start building a baseline and demonstrating that climate planning is active, not just aspirational.',
  },
];

const toolkitSteps: ToolkitStep[] = [
  {
    label: 'Measure',
    body: 'Easily measure and understand your carbon footprint for Scopes 1, 2 and 3.',
    icon: ClipboardList,
  },
  {
    label: 'Plan',
    body: 'Set reduction targets and create a plan with actions to achieve them.',
    icon: Target,
  },
  {
    label: 'Engage',
    body: 'Engage your suppliers and customers to support Scope 3 reporting and reduction.',
    icon: Users,
  },
  {
    label: 'Reduce',
    body: 'Take immediate action to reduce your carbon footprint and achieve your targets.',
    icon: TrendingDown,
  },
  {
    label: 'Report',
    body: 'Effortlessly generate audit-grade regulatory and voluntary reporting.',
    icon: FileSpreadsheet,
  },
  {
    label: 'Promote',
    body: 'Share your sustainability story with your stakeholders and customers.',
    icon: Megaphone,
  },
];

const benefits = [
  {
    title: 'Tailored',
    body: 'Customised to your sector and needs to ensure ease and accuracy.',
    icon: Target,
  },
  {
    title: 'Easy-to-use',
    body: 'Designed for real people to get started quickly with no technical background.',
    icon: Sparkles,
  },
  {
    title: 'Supported',
    body: 'Get hands-on support from our sustainability team, whenever you need it.',
    icon: ShieldCheck,
  },
  {
    title: 'Affordable',
    body: 'Flexible pricing for organisations of all sizes with no hidden costs.',
    icon: Briefcase,
  },
];

const stats = [
  {
    value: '36%',
    label: "of the UK's building emissions come from schools and universities",
  },
  {
    value: '2,500+',
    label: "schools have joined the Let's Go Zero campaign pledging to reach net zero",
  },
  {
    value: '80%',
    label: 'of young people want to take action to help the environment',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'Do all UK schools need a Climate Action Plan?',
    answer:
      'Yes. The Department for Education expects every education setting in England — including maintained schools, academies, multi-academy trusts, independent schools, special schools, and early years settings — to appoint a sustainability lead and publish a Climate Action Plan. While not yet statutory, this is a firm government expectation with progress reporting from 2025 onwards.',
  },
  {
    question: 'What is the difference between maintained schools and academies for carbon reporting?',
    answer:
      'Maintained schools are overseen by their local authority, which may hold estate-wide energy data and support sustainability planning. Academies and free schools operate as independent charitable trusts, so they typically own their own reporting — though many belong to a multi-academy trust that coordinates carbon data centrally. TrackZero works for both single-site schools and trust-wide roll-ups.',
  },
  {
    question: 'Do independent schools need to comply with DfE climate requirements?',
    answer:
      "Yes. The DfE's Sustainability and Climate Change Strategy applies to all education settings, and independent schools are regulated by the department. They are expected to appoint a sustainability lead and maintain a Climate Action Plan covering decarbonisation, adaptation, biodiversity, and climate education — the same core pillars as state-funded schools.",
  },
  {
    question: 'When do academy trusts need SECR reporting?',
    answer:
      'Large multi-academy trusts that meet two or more SECR size thresholds — over 250 employees, turnover above £36 million, or a balance sheet total above £18 million — must include energy use and carbon disclosures in their annual trustees’ report. Trusts consuming more than 40,000 kWh of UK energy must report; smaller trusts can state why disclosures are omitted.',
  },
  {
    question: 'What emissions should schools measure?',
    answer:
      'Most schools start with Scope 1 and 2 emissions from gas heating, purchased electricity, and school transport fuel. Scope 3 covers procurement, catering, waste, staff commuting, and school trips — often the largest share. The DfE recommends using UK Government conversion factors and standards such as the GHG Protocol. TrackZero guides you through each scope with school-relevant categories and emissions-per-pupil intensity ratios.',
  },
  {
    question: 'Can TrackZero support multi-academy trusts with many schools?',
    answer:
      'Yes. TrackZero lets MATs collect emissions data across individual sites, calculate trust-wide totals, and produce consolidated reports for trustees, governors, and SECR disclosures. Sustainability leads can monitor progress at both school and trust level, set shared reduction targets, and engage staff and students with clear, accessible dashboards.',
  },
];

const partnerClients = [
  'Bridgestone',
  'Cranfield University',
  'x+why',
  'Robinson',
  'LMF Energy Services',
  'Sleek Events',
  'F. Ball and Co',
  'Sustainable X',
  'Northamptonshire Chamber of Commerce',
  'Green Team Consulting',
  'Silverstone Technology Cluster',
  'TrainEasy',
  'Synergy',
  'Frontier Space',
  'Milton Keynes Chamber of Commerce',
  'Green Future Investments Ltd',
  'Innoviz',
];

const partnerIcons = [
  Building2,
  University,
  Users,
  Landmark,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Leaf,
  Bot,
  School,
];

export default function CarbonReportingPage() {
  const heroImage = pickUnifiPlaceholder('hero', 'trackzero-schools-hero');
  const [activeSchoolTab, setActiveSchoolTab] = React.useState(schoolTabs[0].id);
  const initialForm = {
    name: '',
    email: '',
    organisation: '',
    role: '',
    message: '',
    subject: 'TrackZero carbon reporting enquiry',
    website: '',
  };
  const [form, setForm] = React.useState(initialForm);
  const [submissionStatus, setSubmissionStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const activeSchoolContent = schoolTabs.find((tab) => tab.id === activeSchoolTab) || schoolTabs[0];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmissionStatus('loading');
    setErrorMessage('');

    try {
      await submitLeadForm('energy_contact', form);
      setForm(initialForm);
      setSubmissionStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to submit the form right now.');
      setSubmissionStatus('error');
    }
  }

  return (
    <main className="min-h-screen">
      <SEO
        title="Carbon accounting and reporting for UK schools | Unifi.id"
        description="Unifi.id helps UK schools and multi-academy trusts track emissions, report progress, and support their Climate Action Plan."
      />

      <Section className="relative overflow-hidden min-h-[75vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Carbon reporting and sustainability hero image for schools" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/20 via-transparent to-unifi-blue/20" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl pt-16">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-white/75">
                <Leaf className="h-4 w-4" />
                <span>Energy Solutions · Carbon Reporting for UK Schools</span>
              </div>

              <H1 className="mt-6 mb-6 text-white">
                Track and report carbon emissions for UK schools
              </H1>

              <Lead className="max-w-3xl text-white/85">
                Every school in England is expected to have a sustainability lead and Climate Action
                Plan in place. TrackZero gives headteachers, bursars, and trust sustainability
                leads the tools to track emissions and report progress to support that plan —
                affordably and without spreadsheets.
              </Lead>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="#get-in-touch" variant="primary">
                  Book a Demo
                </ButtonLink>
                <ButtonLink
                  href="#get-in-touch"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Get Started
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 max-w-4xl">
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-unifi-blue">
              Trusted by industry leaders and experts, from start-ups to global brands
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-0">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
            <div className="marquee-right flex w-max gap-4 py-3">
              {[...partnerClients, ...partnerClients].map((client, index) => {
                const Icon = partnerIcons[index % partnerIcons.length];
                return <LogoChip key={`${client}-${index}`} name={client} Icon={Icon} />;
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <H2 className="mb-5">What UK schools are expected to deliver</H2>
              <Body className="mb-6">
                The Department for Education&apos;s Sustainability and Climate Change Strategy sets
                clear expectations for every education setting in England. By the end of 2025,
                schools should have:
              </Body>
              <ul className="space-y-4">
                {[
                  'A nominated sustainability lead to drive action and awareness',
                  'A published Climate Action Plan covering decarbonisation, adaptation, biodiversity, and climate education',
                  'Progress monitoring and reporting, with estate emissions baselined and tracked from 2025',
                  "Alignment with initiatives such as Let's Go Zero, which sets net zero targets for schools between 2025 and 2035",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-green" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
              <Body className="mt-6">
                TrackZero helps you move from policy to practice — baselining emissions, tracking
                reductions, and reporting progress against your Climate Action Plan.
              </Body>
            </div>

            <Card
              className="border-unifi-blue/10"
              imageSrc="/unifi-assets/corporate/photo-1590650046871-92c887180603.webp"
              imageAlt="Education and workplace team reviewing climate planning on a laptop."
              imageAspectClassName="aspect-[4/3]"
              seed="schools-obligation"
            >
              <H3 className="text-xl">From expectation to evidence</H3>
              <Body>
                The practical challenge is not understanding that the expectation exists. It is
                turning that expectation into a measurable, repeatable reporting process that
                leadership, governors, and trust stakeholders can actually use.
              </Body>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-4">Built for every type of UK school</H2>
            <Body>
              The reporting requirement is shared. The operating context is not. Choose the school
              type closest to your estate and governance model.
            </Body>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {schoolTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSchoolTab(tab.id)}
                className={`rounded-full px-5 py-3 font-bold transition-all ${
                  activeSchoolTab === tab.id
                    ? 'bg-unifi-blue text-white shadow-lg'
                    : 'bg-unifi-light text-unifi-gray-dark hover:bg-unifi-blue/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <Card withImage={false} className="border-unifi-blue/10">
            <div className="flex items-center gap-3">
              <School className="h-6 w-6 text-unifi-blue" />
              <H3 className="text-2xl">{activeSchoolContent.label}</H3>
            </div>
            <Body>{activeSchoolContent.body}</Body>
          </Card>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-4">How TrackZero helps school sustainability leads</H2>
            <Body>
              Whether you&apos;re a bursar juggling the budget, a teacher leading eco-club, or a
              trust-wide sustainability director, TrackZero gives you a single platform to track
              emissions and report progress — without needing a dedicated carbon consultant.
            </Body>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              'Baseline Scope 1, 2 and 3 emissions using UK Government conversion factors',
              'Monitor emissions progress to inform your Climate Action Plan and decarbonisation targets',
              'Calculate emissions-per-pupil intensity ratios for meaningful year-on-year comparison',
              'Engage staff and students with accessible dashboards and progress tracking',
              'Generate audit-ready reports for governors, trustees, and DfE progress reviews',
            ].map((item) => (
              <div
                key={item}
                className="rounded-sm border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-green" />
                  <Body>{item}</Body>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-4">Built to make carbon compliance easier for everyone</H2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-sm border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-green/10 text-unifi-green">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <H3 className="mb-3 text-xl">{benefit.title}</H3>
                <Body>{benefit.body}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <H2 className="mb-5">SECR reporting for large academy trusts</H2>
              <Body className="mb-6">
                Multi-academy trusts that meet two or more SECR size thresholds must disclose
                energy use and greenhouse gas emissions in their annual trustees&apos; report under
                Streamlined Energy and Carbon Reporting (SECR).
              </Body>
              <ul className="space-y-4">
                {[
                  'Energy data collection across trust sites',
                  'UK Government emissions factors and SECR report templates',
                  'Emissions-per-pupil intensity ratios for trustees’ reports',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-green" />
                    <Body>{item}</Body>
                  </li>
                ))}
              </ul>
            </div>

            <Card
              className="border-black/5"
              imageSrc="/unifi-assets/corporate/photo-1504384308090-c894fdcc538d.webp"
              imageAlt="Trust leadership reviewing reporting and disclosure documents together."
              imageAspectClassName="aspect-[16/10]"
              seed="secr-trusts"
            >
              <H3 className="text-xl">Consolidated reporting without trust-wide chaos</H3>
              <Body>
                For MATs, the reporting challenge is operational as much as technical. The value is
                in getting site-by-site data into a form trustees can actually review and act on.
              </Body>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-4">The complete carbon management toolkit, without the complexity</H2>
            <Body>
              TrackZero guides in-house teams and sustainability professionals through every stage
              of carbon management, with or without prior expertise.
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {toolkitSteps.map((step) => (
              <div
                key={step.label}
                className="rounded-sm border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
                  <step.icon className="h-6 w-6" />
                </div>
                <H3 className="mb-3 text-xl">{step.label}</H3>
                <Body>{step.body}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-4xl">
            <H2 className="mb-4">Why schools are taking action now</H2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-sm border border-unifi-blue/10 bg-white p-8 shadow-sm"
              >
                <div className="mb-2 text-4xl font-bold text-unifi-blue">{stat.value}</div>
                <Body>{stat.label}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <H2 className="mb-4">UK school carbon reporting, common questions answered</H2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-sm border border-gray-200 bg-white px-6 py-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <H3 className="text-xl">{faq.question}</H3>
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-unifi-blue transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-4">
                  <Body>{faq.answer}</Body>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray" className="scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6" id="get-in-touch">
          <div className="grid items-start gap-6 lg:grid-cols-3">
            <Card withImage={false} className="lg:col-span-2">
              <H2 className="text-2xl font-bold text-gray-900">
                Start your sustainability journey today
              </H2>
              <Body className="text-gray-600">
                Join our growing platform of organisations making the transition to a more
                sustainable future. Unifi.id can help you bring TrackZero into a school or trust
                workflow that is auditable, affordable, and easier to run.
              </Body>

              <div className="mt-5 flex flex-wrap gap-3">
                {['Easy to use', 'Affordable', 'Collaborative', 'Supported', 'Auditable'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-unifi-light px-4 py-2 text-sm font-semibold text-unifi-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
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

                <Field
                  label="Your name"
                  value={form.name}
                  required
                  onChange={(value) => setForm((p) => ({ ...p, name: value }))}
                />
                <Field
                  label="Your email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(value) => setForm((p) => ({ ...p, email: value }))}
                />
                <Field
                  label="School or trust"
                  required
                  value={form.organisation}
                  onChange={(value) => setForm((p) => ({ ...p, organisation: value }))}
                />
                <Field
                  label="Role"
                  value={form.role}
                  onChange={(value) => setForm((p) => ({ ...p, role: value }))}
                />

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3"
                    placeholder="Tell us whether you want a demo, support for a Climate Action Plan, or trust-wide reporting help."
                  />
                </div>

                {submissionStatus === 'success' ? (
                  <div className="md:col-span-2 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
                    Thanks, your message has been sent to the Unifi.id energy team.
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
                    className="rounded-full bg-unifi-dark px-8 py-3 font-semibold text-white transition-colors hover:bg-black"
                  >
                    {submissionStatus === 'loading' ? 'Submitting...' : 'Book a Demo'}
                  </button>
                  <ButtonLink href="/energy/team" variant="secondary">
                    Get Started
                  </ButtonLink>
                </div>
              </form>
            </Card>

            <Card withImage={false} className="h-full">
              <H2 className="text-xl font-bold text-gray-900">Credibility markers</H2>
              <ul className="mt-4 space-y-3">
                {[
                  'Certified B Corporation',
                  'Carbon Accounting Alliance',
                  'Bankers for Net Zero SME Sustainability Data Taskforce',
                  'ISO 27001',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-unifi-green" />
                    <Body>{item}</Body>
                  </li>
                ))}
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
  onChange: (value: string) => void;
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

function LogoChip({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex min-w-[280px] items-center gap-4 rounded-sm border border-gray-200 bg-white px-6 py-5 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-unifi-blue/10 text-unifi-blue">
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-base font-semibold text-unifi-dark">{name}</div>
    </div>
  );
}
