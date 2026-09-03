'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { Building2, Network, Target } from 'lucide-react';

export default function PricingClient() {
  return (
    <>
{/* Hero Section */}
      <Section className="min-h-[40vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 w-full text-left">
          <H1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Flexible Licensing for Every Need
          </H1>
          <Body className="text-lg md:text-xl text-gray-600">
            Choose the licensing model that best fits your organisation, from single buildings to enterprise-wide deployments.
          </Body>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Per-Building */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Per-Building</H3>
              <Body className="text-gray-700 mb-6">
                Perfect for single sites or gradual rollouts
              </Body>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li>• Monthly or annual per-building pricing</li>
                <li>• No minimum commitment required</li>
                <li>• Scale up or down as needed</li>
                <li>• Full feature access included</li>
              </ul>
              <div className="text-blue-600 font-semibold mb-6">Starting from £500/month</div>
              <ButtonLink href="/contact" variant="outline" className="w-full">
                Discuss Options
              </ButtonLink>
            </div>

            {/* Enterprise */}
            <div className="bg-white border-2 border-primary rounded-lg p-8 relative hover:shadow-lg transition-shadow">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 mt-2">
                <Network className="h-8 w-8 text-green-600" />
              </div>
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</H3>
              <Body className="text-gray-700 mb-6">
                Comprehensive agreements for large portfolios
              </Body>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li>• Volume discounts for multiple buildings</li>
                <li>• Dedicated account management</li>
                <li>• Priority support and SLA guarantees</li>
                <li>• Custom integrations included</li>
              </ul>
              <div className="text-green-600 font-semibold mb-6">Contact for pricing</div>
              <ButtonLink href="/contact" variant="primary" className="w-full">
                Discuss Licensing
              </ButtonLink>
            </div>

            {/* Outcome-Based */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-purple-500 transition-colors">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Outcome-Based</H3>
              <Body className="text-gray-700 mb-6">
                Pay based on achieved savings and benefits
              </Body>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li>• Share of energy savings achieved</li>
                <li>• Performance guarantees included</li>
                <li>• Aligned incentives for optimisation</li>
                <li>• Risk mitigation for customers</li>
              </ul>
              <div className="text-purple-600 font-semibold mb-6">15–25% of savings</div>
              <ButtonLink href="/contact" variant="outline" className="w-full">
                Discuss Options
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-2xl font-semibold text-gray-900 mb-4">Need a tailored quote?</H2>
          <Body className="text-gray-700 mb-6">
            Our team will work with you to design a licensing model that aligns with your portfolio size, goals, and budget.
          </Body>
          <ButtonLink href="/contact">Contact Sales</ButtonLink>
        </div>
      </Section>
    </>
  );
}
