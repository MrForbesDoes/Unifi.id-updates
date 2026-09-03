'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from '@/src/components/Section';
import Text from '@/src/components/Text';
import { ButtonLink } from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import { fadeInUp, staggerContainer } from '@/src/components/motion';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { Cloud, Cpu, Lock, Database, GitBranch, Zap, Building2, Network, Target } from 'lucide-react';

export default function PlatformOverviewClient() {
  const [activeTab, setActiveTab] = useState('modular');
  const heroImage = pickUnifiPlaceholder('hero', 'cortex-platform');

  return (
    <main className="min-h-screen">
{/* Hero Section */}
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Cortex platform hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp}>
                <Text as="h1" variant="h1" className="mb-4 text-white">
                  Introducing Cortex™
                </Text>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Text variant="lead" className="text-white/90 font-semibold mb-8">
                  The Real-Time Intelligence Engine for Smart Buildings
                </Text>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Text variant="body" className="text-lg text-white/90">
                  Smart organisations don't just manage buildings - they optimise them around the people who bring them to life.
                </Text>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Intro (moved outside hero) */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 py-14">
          <Text variant="body" className="mb-6">
            Cortex™ is the intelligence layer behind Unifi.id's mission to transform buildings from static spaces into adaptive, responsive environments. It connects the dots between systems and sensors - occupancy, lighting, energy, fire safety, compliance, and more - turning raw data into meaningful, real-time insight.
          </Text>
          <Text variant="body" className="font-semibold mb-4">
            With Cortex™, leadership teams gain total operational awareness:
          </Text>
          <div className="space-y-2">
            <Text variant="body">• Who is in the building and where</Text>
            <Text variant="body">• Whether safety protocols are being followed</Text>
            <Text variant="body">• Which spaces are under- or over-utilised</Text>
            <Text variant="body">• Where energy is being wasted or saved</Text>
            <Text variant="body">• What actions are needed to meet compliance and ESG targets</Text>
          </div>
        </div>
      </Section>

      {/* Cortex Capabilities */}
      <Section className="bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <Text as="h2" variant="h2" className="text-left mb-12">
            Cortex™ Capabilities
          </Text>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
            <Card className="border-t-4 border-blue-500" seed="Live Occupancy Intelligence" imageSrc="/unifi-assets/canary/photo-1692890528796-4b3fb17ec33b.webp" imageAlt="Live occupancy intelligence">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
              <Text as="h3" variant="h3" className="text-left mb-3 text-sm">
                Live Occupancy Intelligence
              </Text>
              <Text variant="body" className="text-sm text-left">
                Track people-flow in real time across floors and zones. Make smarter decisions about staffing, cleaning, heating/cooling, and safety drills.
              </Text>
            </Card>

            <Card className="border-t-4 border-orange-500" seed="Risk & Security" imageSrc="/unifi-assets/corporate/photo-1600880292203-757bb62b4baf.webp" imageAlt="Risk and security">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-orange-600 text-xl">🛡️</span>
              </div>
              <Text as="h3" variant="h3" className="text-left mb-3 text-sm">
                Risk & Security
              </Text>
              <Text variant="body" className="text-sm text-left">
                Know when restricted areas are breached or usage patterns are irregular. Flag anomalies before they become threats.
              </Text>
            </Card>

            <Card className="border-t-4 border-red-500" seed="Fire Safety Compliance" imageSrc="/unifi-assets/canary/photo-1694902304056-b4ba1412d7b7.webp" imageAlt="Fire safety compliance">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-red-600 text-xl">🔥</span>
              </div>
              <Text as="h3" variant="h3" className="text-left mb-3 text-sm">
                Fire Safety Compliance
              </Text>
              <Text variant="body" className="text-sm text-left">
                See instant alerts for blocked exits, overcrowding, or floor breaches. Support live headcounts and real-time evacuation insight.
              </Text>
            </Card>

            <Card className="border-t-4 border-green-500" seed="Energy Performance" imageSrc="/unifi-assets/canary/photo-1696074010622-65271d2f423b.webp" imageAlt="Energy performance">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-600 text-xl">⚡</span>
              </div>
              <Text as="h3" variant="h3" className="text-left mb-3 text-sm">
                Energy Performance
              </Text>
              <Text variant="body" className="text-sm text-left">
                Reduce waste by syncing lighting, HVAC and more to actual use. Cortex™ identifies inefficiencies and recommends corrective actions.
              </Text>
            </Card>

            <Card className="border-t-4 border-purple-500 sm:col-span-2 sm:max-w-[520px] sm:mx-auto xl:col-span-1 xl:max-w-none" seed="Operational Insights" imageSrc="/unifi-assets/corporate/photo-1590650046871-92c887180603.webp" imageAlt="Operational insights">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-xl">📊</span>
              </div>
              <Text as="h3" variant="h3" className="text-left mb-3 text-sm">
                Operational Insights
              </Text>
              <Text variant="body" className="text-sm text-left">
                Benchmark usage, spot trends, and feed predictive models. All insights available in clear, executive-ready dashboards or automated reports.
              </Text>
            </Card>
          </div>
        </div>
      </Section>

      {/* Tabbed Content */}
      <Section>
        <div className="max-w-6xl mx-auto px-6 pb-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
            {[
              { id: 'modular', label: 'Modular Solutions' },
              { id: 'architecture', label: 'Platform Architecture' },
              { id: 'licensing', label: 'Licensing' },
              { id: 'integration', label: 'Integration' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content - Modular Solutions */}
          {activeTab === 'modular' && (
            <div className="space-y-12">
              <div>
                <Text as="h2" variant="h2" className="mb-4">
                  How Modular Solutions Work
                </Text>
                <Text variant="body" className="text-lg">
                  Build your intelligent building ecosystem step by step. Start with core platform capabilities, add detection technologies as needed, and deploy specialized intelligence modules for specific outcomes.
                </Text>
              </div>

              {/* Foundation Platform */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📚</span>
                  </div>
                  <Text as="h3" variant="h3">Foundation Platform</Text>
                </div>
                <Text variant="body" className="mb-6 text-gray-600">
                  The essential building blocks that power every intelligent building solution
                </Text>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Cortex™',
                      desc: 'Central intelligence platform that processes all building data',
                      image: '/unifi-assets/corporate/photo-1556761175-4b46a572b786.webp',
                    },
                    {
                      title: 'Pulse',
                      desc: 'Aggregator of detection technologies data into clear, zone-by-zone occupancy audits',
                      image: '/unifi-assets/corporate/photo-1600880292203-757bb62b4baf.webp',
                    },
                    {
                      title: 'LiveView',
                      desc: 'Live building visualization and control interface',
                      image: '/unifi-assets/canary/photo-1692890528796-4b3fb17ec33b.webp',
                    },
                  ].map((item) => (
                    <Card key={item.title} seed={item.title} imageSrc={item.image} imageAlt={item.title}>
                      <Text as="h3" variant="h3" className="mb-2">{item.title}</Text>
                      <Text variant="body">{item.desc}</Text>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Detection Technologies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">🌐</span>
                  </div>
                  <Text as="h3" variant="h3">Detection Technologies</Text>
                </div>
                <Text variant="body" className="mb-6 text-gray-600">
                  Advanced sensor technologies that capture critical building and occupant data
                </Text>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { title: 'Sense', desc: 'RFID-based Detection', image: '/unifi-assets/card-7.webp' },
                    { title: 'Flow', desc: 'Anonymous Footfall', image: '/unifi-assets/card-8.webp' },
                    { title: 'Cognito', desc: 'Facial Recognition', image: '/unifi-assets/card-9.webp' },
                    { title: 'Echo', desc: 'WiFi Device Detection', image: '/unifi-assets/card-10.webp' },
                  ].map((item) => (
                    <Card key={item.title} seed={item.title} imageSrc={item.image} imageAlt={item.title}>
                      <Text as="h3" variant="h3" className="mb-2">{item.title}</Text>
                      <Text variant="body">{item.desc}</Text>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Intelligence Modules */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-xl">🧠</span>
                  </div>
                  <Text as="h3" variant="h3">Intelligence Modules</Text>
                </div>
                <Text variant="body" className="mb-6 text-gray-600">
                  Specialized AI modules that transform sensor data into actionable insights
                </Text>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { title: 'SafeGuard', desc: 'Comprehensive security monitoring', image: '/unifi-assets/card-11.webp' },
                    { title: 'FireSafe', desc: 'Advanced fire prevention and detection', image: '/unifi-assets/card-12.webp' },
                    { title: 'Predict', desc: 'Occupancy forecasting and planning', image: '/unifi-assets/canary/photo-1692890528796-4b3fb17ec33b.webp' },
                    { title: 'Insights', desc: 'Executive reporting and analytics', image: '/unifi-assets/corporate/photo-1590650046871-92c887180603.webp' },
                  ].map((item) => (
                    <Card key={item.title} seed={item.title} imageSrc={item.image} imageAlt={item.title}>
                      <Text as="h3" variant="h3" className="mb-2">{item.title}</Text>
                      <Text variant="body">{item.desc}</Text>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Specialized Platforms */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 text-xl">🛡️</span>
                  </div>
                  <Text as="h3" variant="h3">Complete Specialised Platforms</Text>
                </div>
                <Text variant="body" className="mb-6 text-gray-600">
                  Pre-integrated solutions combining multiple modules for specific industry needs
                </Text>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-t-4 border-red-500" seed="FireGuard" imageSrc="/unifi-assets/card-4.webp" imageAlt="FireGuard">
                    <Text as="h3" variant="h3" className="mb-2">FireGuard</Text>
                    <Text variant="body" className="mb-4">Complete fire safety ecosystem combining detection, prevention, and emergency response capabilities</Text>
                    <ButtonLink href="/solutions/fireguard" variant="outline">Learn More</ButtonLink>
                  </Card>
                  <Card className="border-t-4 border-blue-500" seed="InsureLink" imageSrc="/unifi-assets/card-6.webp" imageAlt="InsureLink">
                    <Text as="h3" variant="h3" className="mb-2">InsureLink</Text>
                    <Text variant="body" className="mb-4">Insurance-integrated platform that reduces premiums through demonstrated risk management</Text>
                    <ButtonLink href="/solutions/insurelink" variant="outline">Learn More</ButtonLink>
                  </Card>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-8">
                <Text as="h3" variant="h3" className="mb-4">Ready to Build Your Solution?</Text>
                <Text variant="body" className="mb-6">Explore our complete portfolio of solutions and discover how to create the perfect intelligent building ecosystem for your needs.</Text>
                <ButtonLink href="/solutions/hub">View Solutions Hub</ButtonLink>
              </div>
            </div>
          )}

          {/* Tab Content - Platform Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-12">
              <div>
                <Text as="h2" variant="h2" className="mb-4">Enterprise-Grade Technical Foundation</Text>
                <Text variant="body" className="text-lg">
                  Built on a cloud-native, AI-powered architecture that delivers enterprise-grade performance, security, and scalability for any building portfolio.
                </Text>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-blue-500" withImage={false}>
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="h-8 w-8 text-blue-600" />
                    <Text as="h3" variant="h3">Cloud-Native Infrastructure</Text>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Auto-scaling microservices architecture</li>
                    <li>• 99.9% uptime with global redundancy</li>
                    <li>• Edge computing for real-time processing</li>
                    <li>• Unlimited scalability for any portfolio size</li>
                  </ul>
                </Card>
                <Card className="border-l-4 border-green-500" withImage={false}>
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="h-8 w-8 text-green-600" />
                    <Text as="h3" variant="h3">AI & Data Processing</Text>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Real-time machine learning inference</li>
                    <li>• Stream processing for millions of events/second</li>
                    <li>• Advanced analytics and predictive modelling</li>
                    <li>• Continuous learning and model optimisation</li>
                  </ul>
                </Card>
                <Card className="border-l-4 border-purple-500" withImage={false}>
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="h-8 w-8 text-purple-600" />
                    <Text as="h3" variant="h3">Security & Compliance</Text>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Zero-trust architecture with end-to-end encryption</li>
                    <li>• SOC 2 Type II and ISO 27001 certified</li>
                    <li>• GDPR compliant with data residency options</li>
                    <li>• Advanced threat detection and monitoring</li>
                  </ul>
                </Card>
              </div>

              <div>
                <Text as="h3" variant="h3" className="mb-6 text-left">Platform Architecture Overview</Text>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="bg-slate-50" withImage={false}>
                    <div className="text-left">
                      <Database className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                      <Text as="h4" variant="h3" className="mb-2">Data Layer</Text>
                      <Text variant="body" className="text-sm">Real-time data ingestion and processing</Text>
                    </div>
                  </Card>

                  <Card className="bg-slate-50" withImage={false}>
                    <div className="text-left">
                      <Cpu className="h-10 w-10 text-green-600 mx-auto mb-3" />
                      <Text as="h4" variant="h3" className="mb-2">AI Engine</Text>
                      <Text variant="body" className="text-sm">Machine learning and analytics</Text>
                    </div>
                  </Card>

                  <Card className="bg-slate-50" withImage={false}>
                    <div className="text-left">
                      <GitBranch className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                      <Text as="h4" variant="h3" className="mb-2">API Gateway</Text>
                      <Text variant="body" className="text-sm">Integration and orchestration</Text>
                    </div>
                  </Card>

                  <Card className="bg-slate-50" withImage={false}>
                    <div className="text-left">
                      <Zap className="h-10 w-10 text-orange-600 mx-auto mb-3" />
                      <Text as="h4" variant="h3" className="mb-2">Application Layer</Text>
                      <Text variant="body" className="text-sm">User interfaces and experiences</Text>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content - Licensing */}
          {activeTab === 'licensing' && (
            <div className="space-y-12">
              <div>
                <Text as="h2" variant="h2" className="mb-4">Flexible Licensing for Every Need</Text>
                <Text variant="body" className="text-lg">
                  Choose the licensing model that best fits your organisation, from single buildings to enterprise-wide deployments.
                </Text>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card seed="Per-Building" imageAlt="Per-Building">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <Text as="h3" variant="h3" className="mb-2">Per-Building</Text>
                  <Text variant="body" className="mb-6">Perfect for single sites or gradual rollouts</Text>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Monthly or annual per-building pricing</li>
                    <li>• No minimum commitment required</li>
                    <li>• Scale up or down as needed</li>
                    <li>• Full feature access included</li>
                  </ul>
                  <div className="text-blue-600 font-semibold mb-6">Starting from £500/month</div>
                  <ButtonLink href="/contact" variant="outline" className="w-full">Discuss Options</ButtonLink>
                </Card>
                <Card className="border-2 border-primary relative" seed="Enterprise" imageAlt="Enterprise">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</span>
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 mt-2">
                    <Network className="h-8 w-8 text-green-600" />
                  </div>
                  <Text as="h3" variant="h3" className="mb-2">Enterprise</Text>
                  <Text variant="body" className="mb-6">Comprehensive agreements for large portfolios</Text>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Volume discounts for multiple buildings</li>
                    <li>• Dedicated account management</li>
                    <li>• Priority support and SLA guarantees</li>
                    <li>• Custom integrations included</li>
                  </ul>
                  <div className="text-green-600 font-semibold mb-6">Contact for pricing</div>
                  <ButtonLink href="/contact" variant="primary" className="w-full">Discuss Licensing</ButtonLink>
                </Card>
                <Card seed="Outcome-Based" imageAlt="Outcome-Based">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <Text as="h3" variant="h3" className="mb-2">Outcome-Based</Text>
                  <Text variant="body" className="mb-6">Pay based on achieved savings and benefits</Text>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Share of energy savings achieved</li>
                    <li>• Performance guarantees included</li>
                    <li>• Aligned incentives for optimisation</li>
                    <li>• Risk mitigation for customers</li>
                  </ul>
                  <div className="text-purple-600 font-semibold mb-6">15–25% of savings</div>
                  <ButtonLink href="/contact" variant="outline" className="w-full">Discuss Options</ButtonLink>
                </Card>
              </div>
            </div>
          )}

          {/* Tab Content - Integration */}
          {activeTab === 'integration' && (
            <div className="space-y-12">
              <div>
                <Text as="h2" variant="h2" className="mb-4">Universal Integration Capabilities</Text>
                <Text variant="body" className="text-lg">
                  Connect with any building system, sensor, or software through our comprehensive integration framework.
                </Text>
              </div>

              <div className="space-y-10">
                <div>
                  <Text as="h3" variant="h3" className="mb-6">Integration Benefits</Text>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-l-4 border-blue-500" withImage={false}>
                      <Text as="h4" variant="h3" className="mb-2">Modular Deployment</Text>
                      <Text variant="body">Deploy individual modules without affecting existing systems. Each module integrates independently.</Text>
                    </Card>
                    <Card className="border-l-4 border-green-500" withImage={false}>
                      <Text as="h4" variant="h3" className="mb-2">Unified Platform</Text>
                      <Text variant="body">Single dashboard for all building systems. No more switching between multiple interfaces.</Text>
                    </Card>
                    <Card className="border-l-4 border-purple-500" withImage={false}>
                      <Text as="h4" variant="h3" className="mb-2">Future-Ready</Text>
                      <Text variant="body">Add new modules and capabilities as they become available without system overhauls.</Text>
                    </Card>
                  </div>
                </div>

                <div>
                  <Text as="h3" variant="h3" className="mb-6">Supported Systems</Text>
                  <div className="flex flex-wrap gap-3">
                    {['BACnet', 'Modbus', 'MQTT', 'REST APIs', 'OPC-UA', 'SNMP', 'Wi-Fi', 'Ethernet', 'Cellular', 'Fire Systems', 'HVAC', 'Lighting', 'Access Control'].map((sys) => (
                      <span key={sys} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Final CTA */}
      <Section backgroundColor="gray" className="pt-10">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <Text as="h2" variant="h2" className="mb-6">Ready to see Cortex™ in action?</Text>
          <Text variant="body" className="mb-8 text-lg">
            Book a personalized demo to discover how our real-time intelligence platform can transform your estate management.
          </Text>
          <ButtonLink href="/contact">Book Your Demo</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
