'use client';
import { useState } from 'react';
import { ButtonLink } from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import PageActions from '@/src/components/PageActions';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import Text from '@/src/components/Text';
import { ChevronDown, ChevronUp, Lock, AlertTriangle, Camera, Settings, Wrench, Leaf, Shield, TrendingUp, DollarSign, Building2, Users } from 'lucide-react';

type PartnerTab = 'technology' | 'service' | 'risk';

type PartnerCard = {
  title: string;
  subtitle: string;
  icon: typeof Lock;
  iconColor: string;
  description: string;
  details: { label: string; content: string }[];
};

const technologyPartners: PartnerCard[] = [
  {
    title: 'Access Control Partners',
    subtitle: 'Manufacturers & integrators of access control systems',
    icon: Lock,
    iconColor: 'text-blue-600 bg-blue-100',
    description: 'Access control is the backbone of estate security, but most systems stop at entry and exit logs. What they cannot do is show who is still inside, how long they have stayed, or whether they have left during an evacuation.',
    details: [
      { label: 'Why It Matters', content: 'Clients are under pressure to prove duty of care, safeguard restricted zones, and manage hybrid work patterns. Swipe logs are not enough for regulators or insurers.' },
      { label: 'Benefits', content: 'Real-time occupancy insights, compliance assurance, and people-flow analytics create a premium layer of intelligence you can embed into your existing solutions.' },
      { label: 'How It Works', content: 'Cortex reconciles swipes, passive RFID, WiFi/BLE, and facial recognition events into unified presence data - powering live evacuation musters, anomaly detection, and zone-based reporting.' },
      { label: 'Client Outcome', content: 'Access control moves from security infrastructure to operational intelligence, helping your clients cut costs, satisfy regulators, and strengthen safety - while you differentiate your offer.' },
    ],
  },
  {
    title: 'Fire Safety System Providers',
    subtitle: 'Manufacturers of detection & suppression systems',
    icon: AlertTriangle,
    iconColor: 'text-red-600 bg-red-100',
    description: 'Fire detection and suppression hardware is essential, but without intelligence, it only answers one question: Did the alarm go off? Cortex answers the bigger one: Is everyone safe, and did the system work as expected?',
    details: [
      { label: 'Why It Matters', content: 'Clients face mounting liability from fire incidents, and insurers are tightening their requirements for real-time evidence.' },
      { label: 'Benefits', content: 'Cortex adds predictive maintenance, FireGuard-powered compliance reporting, and evacuation data to your fire systems.' },
      { label: 'How It Works', content: 'FireLink aggregates panel data; FireSure interprets it into actionable insights; FireSafe links occupancy data to evacuation. Cortex fuses them into live dashboards, creating a total fire safety intelligence layer.' },
      { label: 'Client Outcome', content: 'Your fire systems evolve from static compliance tools into continuous safety platforms with measurable ROI and co-sell opportunities.' },
    ],
  },
  {
    title: 'Security System Integrators',
    subtitle: 'Surveillance & physical security specialists',
    icon: Camera,
    iconColor: 'text-slate-600 bg-slate-100',
    description: 'Traditional surveillance provides video evidence - but little live intelligence. Cortex transforms this into actionable security oversight.',
    details: [
      { label: 'Why It Matters', content: 'Facilities managers and security chiefs need more than footage; they need real-time alerts on anomalies, dwell-time breaches, or perimeter intrusions.' },
      { label: 'Benefits', content: 'Cortex adds intelligence that makes surveillance proactive - identifying irregular patterns before they escalate.' },
      { label: 'How It Works', content: 'Safeguard fuses structured presence data with camera feeds and access logs, alerting operators to unauthorised presence, unusual movement, or crowding.' },
      { label: 'Client Outcome', content: 'Clients gain a living security layer that prevents incidents rather than just recording them - and you elevate your security offering above the competition.' },
    ],
  },
  {
    title: 'BMS Providers',
    subtitle: 'Building Management System manufacturers & integrators',
    icon: Settings,
    iconColor: 'text-green-600 bg-green-100',
    description: 'BMS platforms are powerful but often blind to the human element. Cortex fills that gap, providing live occupancy data that makes every building system more responsive.',
    details: [
      { label: 'Why It Matters', content: 'Clients need to prove energy savings, optimise HVAC, and hit ESG targets - and they cannot without real occupancy intelligence.' },
      { label: 'Benefits', content: 'Predictive maintenance, energy optimisation, and unified analytics add significant value to your BMS offer.' },
      { label: 'How It Works', content: 'Cortex streams reconciled occupancy data into BMS platforms via API, enabling HVAC and lighting to adapt dynamically to live headcounts.' },
      { label: 'Client Outcome', content: 'A BMS that does not just manage systems, but responds intelligently to people - creating measurable cost savings and ESG benefits.' },
    ],
  },
];

const servicePartners: PartnerCard[] = [
  {
    title: 'Facilities Management (FM) Companies',
    subtitle: 'FM operators & maintenance providers',
    icon: Wrench,
    iconColor: 'text-orange-600 bg-orange-100',
    description: 'FM contracts are increasingly judged on efficiency, uptime, and compliance. Cortex equips FM companies with the data to prove performance - and proactively improve it.',
    details: [
      { label: 'Why It Matters', content: 'Clients want service providers who deliver measurable results, not just maintenance.' },
      { label: 'Benefits', content: 'Predictive maintenance, proactive issue detection, and automated compliance reporting.' },
      { label: 'How It Works', content: 'Cortex provides real-time occupancy and infrastructure health data, triggering alerts before failures occur and structuring compliance reports automatically.' },
      { label: 'Client Outcome', content: 'FM providers become strategic partners, not commodity contractors - delivering uptime, compliance assurance, and cost savings.' },
    ],
  },
  {
    title: 'Energy & ESG Consultants',
    subtitle: 'Sustainability specialists & carbon auditors',
    icon: Leaf,
    iconColor: 'text-emerald-600 bg-emerald-100',
    description: 'Cortex enables consultants to move from estimates to evidence by tying energy use directly to occupancy.',
    details: [
      { label: 'Why It Matters', content: 'ESG reports are under scrutiny; assumptions will not satisfy regulators, investors, or boards.' },
      { label: 'Benefits', content: 'Live energy monitoring, carbon footprint analytics, and defensible ESG compliance reporting.' },
      { label: 'How It Works', content: 'Cortex captures occupancy-linked energy data, creating dashboards and reporting frameworks aligned with Net Zero pathways.' },
      { label: 'Client Outcome', content: 'Consultants deliver evidence-based ESG roadmaps, helping clients secure funding, hit sustainability targets, and reduce costs.' },
    ],
  },
];

const riskPartners: PartnerCard[] = [
  {
    title: 'Life Safety Partners',
    subtitle: 'Emergency response specialists & life safety system providers',
    icon: Shield,
    iconColor: 'text-blue-600 bg-blue-100',
    description: 'Life safety systems (alarms, mass notification, evacuation drills) are often siloed and reactive. Cortex turns them into live, verifiable safety intelligence.',
    details: [
      { label: 'Why It Matters', content: 'Regulators demand proof of evacuation success, insurers want evidence of risk reduction, and emergency responders need real-time clarity.' },
      { label: 'Benefits', content: 'Cortex adds continuous safety monitoring, automated muster lists, and compliance audit trails.' },
      { label: 'How It Works', content: 'FireSafe integrates directly with alarms and panels, delivering dashboards that show who is out, who remains, and where they are. Notifications sync with responders, giving them live intelligence in critical moments.' },
      { label: 'Client Outcome', content: 'Safer evacuations, fewer false alarms, stronger compliance, and a defensible audit trail - making you the partner who delivers more than alarms.' },
    ],
  },
  {
    title: 'Insurers & Risk Data Partners',
    subtitle: 'Insurers, brokers, and risk assessors',
    icon: TrendingUp,
    iconColor: 'text-purple-600 bg-purple-100',
    description: 'Insurance has long been based on assumptions and historical audits. Cortex replaces this with continuous, live proof of compliance and safety performance.',
    details: [
      { label: 'Why It Matters', content: 'Underwriters want evidence, not promises. Claims and premiums hinge on defensible, real-world data.' },
      { label: 'Benefits', content: 'Insurers gain risk reduction insights, clients gain premium optimisation leverage, and brokers gain faster claims handling.' },
      { label: 'How It Works', content: 'InsureLink streams FireGuard and FireSafe data directly into risk models - from evacuation timelines to asset uptime.' },
      { label: 'Client Outcome', content: 'A shift from static to evidence-driven underwriting - rewarding safer estates with lower premiums.' },
    ],
  },
];

function PartnerCardComponent({ partner }: { partner: PartnerCard }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = partner.icon;

  return (
    <Card
      className="overflow-hidden"
      seed={partner.title}
      imageAspectClassName="aspect-[21/9]"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left flex items-start gap-4"
      >
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${partner.iconColor}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <Text as="h3" variant="h3" className="mb-1">{partner.title}</Text>
          <Text variant="body" className="text-gray-600 text-sm mb-2">{partner.subtitle}</Text>
          <Text variant="body" className="text-gray-700">{partner.description}</Text>
        </div>
        <div className="flex-shrink-0 mt-1">
          {expanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
        </div>
      </button>
      {expanded && (
        <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
          {partner.details.map((detail) => (
            <div key={detail.label}>
              <Text as="h4" variant="h3" className="mb-2 text-sm font-semibold text-gray-900">{detail.label}</Text>
              <Text variant="body" className="text-gray-700">{detail.content}</Text>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

const partnershipModels = [
  { icon: DollarSign, title: 'Co-Sell & Revenue Share', description: 'Grow recurring revenue together.', color: 'text-green-600 bg-green-100' },
  { icon: Building2, title: 'Joint Solutions', description: 'Pair Cortex™ intelligence with your systems for differentiated value.', color: 'text-blue-600 bg-blue-100' },
  { icon: TrendingUp, title: 'Market Expansion', description: 'Access new markets from corporate and education to healthcare, government, and defence.', color: 'text-purple-600 bg-purple-100' },
  { icon: Users, title: 'Client Retention', description: 'Keep your client relationships, enhance them with intelligence.', color: 'text-orange-600 bg-orange-100' },
];

export default function PartnersClient() {
  const [activeTab, setActiveTab] = useState<PartnerTab>('technology');

  const currentPartners = activeTab === 'technology' ? technologyPartners : activeTab === 'service' ? servicePartners : riskPartners;

  const tabContent = {
    technology: {
      heading: 'Technology Integration Partners',
      description: 'Transform existing hardware into intelligent systems. Cortex™ integrates seamlessly with access control, fire safety, security, and building management systems to add real-time intelligence and compliance capabilities.',
    },
    service: {
      heading: 'Service & Consulting Partners',
      description: 'Elevate service delivery with data-driven insights. Transform from reactive maintenance to predictive operations, and from estimated reporting to evidence-based consulting.',
    },
    risk: {
      heading: 'Risk & Compliance Partners',
      description: 'Move from reactive safety to proactive risk management. Replace assumptions with real-time evidence and transform compliance from a cost centre into a competitive advantage.',
    },
  };

  return (
    <main className="min-h-screen">
{/* Hero with image (site-wide pattern) */}
      <Section className="relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={pickUnifiPlaceholder('hero', 'partners-hero')}
            alt="Partners hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/10 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <Text as="h1" variant="h1" className="mb-6 text-white">
                Partners
              </Text>
              <div className="space-y-4 mb-10">
                <Text variant="lead" className="text-xl font-semibold text-white/90">
                  Extend Your Systems. Amplify Your Value.
                </Text>
                <Text variant="body" className="text-white/85">
                  Cortex™ integrates directly into partner platforms - delivering real-time intelligence, compliance assurance, and ESG transparency that enhance outcomes for your clients. By joining our ecosystem, you expand your service offer, unlock new recurring revenue, and position yourself as a leader in intelligent, people-first solutions.
                </Text>
              </div>

              <PageActions>
                <ButtonLink href="/contact">Become a Partner</ButtonLink>
                <ButtonLink
                  href="/solutions/hub"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black"
                >
                  Explore solutions
                </ButtonLink>
              </PageActions>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
            {[
              { id: 'technology' as PartnerTab, label: 'Technology Partners' },
              { id: 'service' as PartnerTab, label: 'Service Partners' },
              { id: 'risk' as PartnerTab, label: 'Risk & Compliance' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            <Text as="h2" variant="h2" className="mb-4">{tabContent[activeTab].heading}</Text>
            <Text variant="body" className="mb-10 max-w-3xl">{tabContent[activeTab].description}</Text>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {currentPartners.map((partner) => (
                <PartnerCardComponent key={partner.title} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Partnership Model */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Text as="h2" variant="h2" className="mb-10">Partnership Model</Text>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipModels.map((model) => {
              const Icon = model.icon;
              return (
                <Card key={model.title} withImage={false}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${model.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <Text as="h3" variant="h3" className="mb-2">{model.title}</Text>
                  <Text variant="body" className="text-gray-600">{model.description}</Text>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Join the Ecosystem */}
      <Section>
        <div className="max-w-3xl mx-auto px-6 text-left">
          <Text as="h2" variant="h2" className="mb-6">Join the Ecosystem</Text>
          <Text variant="body" className="mb-6">
            Together, we make buildings safer, greener, and more resilient. As a Cortex partner, you keep your client relationships while extending your value with live, defensible intelligence.
          </Text>
          <Text variant="body" className="mb-10">
            Let us build the next generation of smart estates, together.
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <ButtonLink href="/contact">Become a Partner</ButtonLink>
            <ButtonLink href="/contact" variant="outline">Schedule Discussion</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
