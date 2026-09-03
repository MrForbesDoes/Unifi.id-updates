'use client';
import { useState } from 'react';
import { H1, H2, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { GraduationCap, Heart, Building2, ShoppingBag, Factory, Shield, Landmark } from "lucide-react";
import Image from 'next/image';
import { withBasePath } from '@/src/content/unifiAssets';

type SectorTab = 'public' | 'private' | 'high-security';

const publicSectors = [
  { icon: GraduationCap, iconColor: "text-blue-600", title: "Education", description: "Universities, schools, and campuses face unique challenges around student safety, energy efficiency, and regulatory compliance.", benefits: ["Fire safety compliance", "Campus-wide occupancy tracking", "Energy optimisation", "Emergency response"], link: "/sectors/education" },
  { icon: Heart, iconColor: "text-red-600", title: "Healthcare", description: "Hospitals and care facilities require continuous safety monitoring, infection control support, and operational efficiency.", benefits: ["Patient safety monitoring", "Infection control zones", "Staff tracking", "Compliance reporting"], link: "/sectors/healthcare" },
  { icon: Landmark, iconColor: "text-purple-600", title: "Government", description: "Public sector buildings demand rigorous compliance, security, and transparent reporting for taxpayer accountability.", benefits: ["Regulatory compliance", "Security protocols", "Energy transparency", "Audit-ready reporting"], link: "/sectors/public-sector" },
];

const privateSectors = [
  { icon: Building2, iconColor: "text-gray-600", title: "Commercial", description: "Office buildings and corporate campuses need to optimise space utilisation, reduce costs, and enhance employee experience.", benefits: ["Space optimisation", "Hybrid work support", "Cost reduction", "ESG reporting"], link: "/sectors/corporate" },
  { icon: ShoppingBag, iconColor: "text-green-600", title: "Retail", description: "Retail environments require real-time capacity management, customer flow analytics, and safety compliance.", benefits: ["Capacity management", "Customer analytics", "Safety compliance", "Loss prevention"], link: "/sectors/corporate" },
  { icon: Factory, iconColor: "text-orange-600", title: "Industrial", description: "Manufacturing and industrial facilities need robust safety systems, operational efficiency, and worker protection.", benefits: ["Worker safety", "Hazard zone monitoring", "Operational efficiency", "Incident prevention"], link: "/sectors/corporate" },
];

const highSecuritySector = {
  icon: Shield,
  iconColor: "text-slate-700",
  title: "High Security",
  description: "Defence, critical infrastructure, and secure facilities require the highest levels of access control and threat detection. Security failures, unauthorised access, or delayed emergency response can have national security implications. Cortex™ delivers military-grade building intelligence.",
  benefits: ["Advanced access control", "Threat detection", "Perimeter security", "Classified zone management"],
  link: "/sectors/public-sector",
};

export default function SectorsHubClient() {
  const [activeTab, setActiveTab] = useState<SectorTab>('public');

  const renderSectorCard = (sector: typeof publicSectors[0]) => {
    const Icon = sector.icon;
    return (
      <div key={sector.title} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
        <Icon className={`h-12 w-12 ${sector.iconColor} mb-4`} />
        <H3 className="text-2xl font-bold text-gray-900 mb-3">{sector.title}</H3>
        <p className="text-gray-600 mb-4">{sector.description}</p>
        <ul className="space-y-2 mb-6">
          {sector.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-primary mt-1">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <ButtonLink href={sector.link} variant="outline" className="w-full">
          Explore {sector.title}
        </ButtonLink>
      </div>
    );
  };

  return (
    <main className="min-h-screen">
{/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={withBasePath('/unifi-assets/corporate/photo-1600880292203-757bb62b4baf.webp')}
            alt="Sectors hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-left py-16 md:py-24">
            <H1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sectors</H1>
            <p className="text-lg md:text-xl text-white/85">
              Every sector faces unique challenges. Cortex™ delivers tailored intelligence solutions that address the specific safety, compliance, and operational needs of your industry.
            </p>
          </div>
        </div>
      </Section>

      {/* Main Tabs */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
            {[
              { id: 'public' as SectorTab, label: 'Public Sector' },
              { id: 'private' as SectorTab, label: 'Private Sector' },
              { id: 'high-security' as SectorTab, label: 'High Security' },
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

          {/* Public Sector Tab */}
          {activeTab === 'public' && (
            <div>
              <H2 className="text-2xl font-semibold text-gray-900 mb-6">Public Sector</H2>
              <p className="text-gray-600 mb-10 max-w-3xl">
                Education, healthcare, and government estates share common challenges: complex compliance, tight budgets, and the need for transparent, audit-ready reporting. Cortex™ delivers the intelligence that keeps public buildings safe, efficient, and accountable.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publicSectors.map(renderSectorCard)}
              </div>
            </div>
          )}

          {/* Private Sector Tab */}
          {activeTab === 'private' && (
            <div>
              <H2 className="text-2xl font-semibold text-gray-900 mb-6">Private Sector</H2>
              <p className="text-gray-600 mb-10 max-w-3xl">
                Commercial, retail, and industrial facilities each have distinct operational needs - from hybrid work optimisation to capacity management and worker safety. Cortex™ adapts to your sector while delivering consistent visibility and control.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {privateSectors.map(renderSectorCard)}
              </div>
            </div>
          )}

          {/* High Security Tab */}
          {activeTab === 'high-security' && (
            <div>
              <H2 className="text-2xl font-semibold text-gray-900 mb-6">High Security</H2>
              <p className="text-gray-600 mb-10 max-w-3xl">
                Defence facilities, data centres, and critical national infrastructure cannot tolerate uncertainty. Cortex™ delivers military-grade building intelligence for environments where security and compliance are non-negotiable.
              </p>
              <div className="max-w-2xl">
                {(() => {
                  const Icon = highSecuritySector.icon;
                  return (
                    <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow">
                      <Icon className={`h-12 w-12 ${highSecuritySector.iconColor} mb-4`} />
                      <H3 className="text-2xl font-bold text-gray-900 mb-3">{highSecuritySector.title}</H3>
                      <p className="text-gray-600 mb-4">{highSecuritySector.description}</p>
                      <ul className="space-y-2 mb-6">
                        {highSecuritySector.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-primary mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <ButtonLink href={highSecuritySector.link} variant="outline" className="w-full">
                        Explore High Security
                      </ButtonLink>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Why Sector-Specific */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-left text-gray-900 mb-8">Why Sector-Specific Solutions Matter</H2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-left">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="text-xl font-semibold text-gray-900 mb-2">Compliance</H3>
                <p className="text-gray-600">Each sector has unique regulatory requirements that Cortex™ addresses directly.</p>
              </div>
            </div>
            <div className="text-left">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="text-xl font-semibold text-gray-900 mb-2">Operational Context</H3>
                <p className="text-gray-600">Solutions designed around how your sector actually operates day-to-day.</p>
              </div>
            </div>
            <div className="text-left">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</H3>
                <p className="text-gray-600">Case studies and outcomes specific to your industry.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Which Sector Fits Your Needs?</H2>
          <p className="text-gray-600 mb-6">
            Our team can help you identify the right solution for your specific building portfolio and requirements.
          </p>
          <ButtonLink href="/contact" variant="primary">
            Talk to Our Team
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
