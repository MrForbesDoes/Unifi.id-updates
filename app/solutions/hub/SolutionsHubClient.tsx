'use client';
import { H1, H2, H3 } from "@/src/components/Typography";
import { useState } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { fadeInUp, staggerContainer } from '@/src/components/motion';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { 
  Shield, AlertTriangle, Users, TrendingUp, Brain, Zap, 
  Radio, Footprints, Eye, Wifi, Layers, Network, Cpu,
  Building2, Heart, Landmark, ShoppingBag, Factory, GraduationCap
} from "lucide-react";

// Main tab type
type MainTab = "solutions" | "detection" | "fire";

// Sub-tab types
type SolutionsSubTab = "overview" | "access" | "fire-safety" | "occupancy" | "insights" | "energy";
type DetectionSubTab = "overview" | "sense" | "flow" | "cognito" | "echo";
type FireSubTab = "overview" | "fireguard" | "compliance";

export default function SolutionsHubClient() {
  const [mainTab, setMainTab] = useState<MainTab>("solutions");
  const [solutionsSubTab, setSolutionsSubTab] = useState<SolutionsSubTab>("overview");
  const [detectionSubTab, setDetectionSubTab] = useState<DetectionSubTab>("overview");
  const [fireSubTab, setFireSubTab] = useState<FireSubTab>("overview");
  const heroImage = pickUnifiPlaceholder('hero', 'solutions-hub');

  return (
    <main className="min-h-screen">
{/* Hero Section */}
      <Section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Solutions hub hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-blue/25 via-transparent to-unifi-green/15" />
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
                <H1 className="text-4xl md:text-5xl font-bold text-white mb-6">Solutions Hub</H1>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p className="text-lg md:text-xl text-white/85">
                  The Unifi.id Solutions Hub brings together a suite of modular technologies designed to make your building safer, smarter, and more efficient. Each solution delivers immediate value - and when combined, forms a powerful ecosystem managed through LiveView and powered by Cortex™, our central intelligence layer.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Main Tabs */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
            <button
              onClick={() => setMainTab("solutions")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 rounded-t-lg ${
                mainTab === "solutions"
                  ? "border-primary text-gray-900 bg-gray-200/70"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
              }`}
            >
              Smart Building Solutions
            </button>
            <button
              onClick={() => setMainTab("detection")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 rounded-t-lg ${
                mainTab === "detection"
                  ? "border-primary text-gray-900 bg-gray-200/70"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
              }`}
            >
              Detection Technologies
            </button>
            <button
              onClick={() => setMainTab("fire")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 rounded-t-lg ${
                mainTab === "fire"
                  ? "border-primary text-gray-900 bg-gray-200/70"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
              }`}
            >
              Fire Safety Systems
            </button>
          </div>

          {/* Tab Content */}
          {mainTab === "solutions" && <SolutionsTab subTab={solutionsSubTab} setSubTab={setSolutionsSubTab} />}
          {mainTab === "detection" && <DetectionTab subTab={detectionSubTab} setSubTab={setDetectionSubTab} />}
          {mainTab === "fire" && <FireTab subTab={fireSubTab} setSubTab={setFireSubTab} />}
        </div>
      </Section>
    </main>
  );
}

// Solutions Tab Component
function SolutionsTab({ subTab, setSubTab }: { subTab: SolutionsSubTab; setSubTab: (tab: SolutionsSubTab) => void }) {
  return (
    <div>
      {/* Solutions Hero */}
      <div className="mb-8">
        <H2 className="text-3xl font-bold text-gray-900 mb-4">Intelligence That Works Across Your Estate</H2>
        <p className="text-gray-700 mb-4">
          Every building is alive with movement, data, and systems - but without intelligence, they work in isolation. Unifi.id's Smart Building Solutions bring them together, transforming raw signals into actionable insights for safety, efficiency, and performance.
        </p>
        <p className="text-gray-700 font-semibold mb-4">We've organised our solutions by the challenges you face:</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Access Control & Security</strong> – Detect anomalies, prevent risks, and respond in real time.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Fire Safety & Evacuation</strong> – Know your systems are ready and your people are safe.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Live Occupancy Intelligence</strong> – See who's in, where they are, and how spaces are used.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Operational Insights</strong> – Understand the causes behind trends, not just the patterns.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Energy Performance</strong> – Align energy use with real demand, reducing cost and carbon.</span>
          </li>
        </ul>
        <p className="text-gray-700 italic">
          This is building intelligence, applied with purpose - tailored to the needs of your sector, and proven to deliver results.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: "overview" as const, label: "Overview" },
          { id: "access" as const, label: "Access & Security" },
          { id: "fire-safety" as const, label: "Fire Safety" },
          { id: "occupancy" as const, label: "Live Occupancy" },
          { id: "insights" as const, label: "Insights" },
          { id: "energy" as const, label: "Energy" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors border ${
              subTab === tab.id
                ? "bg-gray-200/80 text-gray-900 border-gray-300"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sub Tab Content */}
      {subTab === "overview" && <SolutionsOverview setSubTab={setSubTab} />}
      {subTab === "access" && <AccessSecurity />}
      {subTab === "fire-safety" && <FireSafety />}
      {subTab === "occupancy" && <LiveOccupancy />}
      {subTab === "insights" && <OperationalInsights />}
      {subTab === "energy" && <EnergyPerformance />}
    </div>
  );
}

// Sub-components for Solutions Tab
function SolutionsOverview({ setSubTab }: { setSubTab: (tab: SolutionsSubTab) => void }) {
  const modules = [
    {
      icon: Shield,
      color: "bg-slate-100 text-slate-700",
      title: "SafeGuard",
      description: "Dynamic access and security. Adaptive access control that reacts in real time.",
      features: ["Tailgating detection", "Real-time access visibility", "Facial recognition", "Anti-passback enforcement"],
      tab: "access" as const,
    },
    {
      icon: AlertTriangle,
      color: "bg-orange-100 text-orange-700",
      title: "FireSafe",
      description: "Fire strategy intelligence. Evacuation, compliance, and command-level safety insights.",
      features: ["Live evacuation monitoring", "Real-time roll calls", "Muster point tracking", "Fire panel integration"],
      tab: "fire-safety" as const,
    },
    {
      icon: Users,
      color: "bg-blue-100 text-blue-700",
      title: "Pulse",
      description: "Real-time occupancy intelligence. Know who's in your building, and where.",
      features: ["Live headcount", "Zone-level occupancy", "Movement tracking", "Density monitoring"],
      tab: "occupancy" as const,
    },
    {
      icon: TrendingUp,
      color: "bg-green-100 text-green-700",
      title: "Predict",
      description: "Predictive building intelligence for capacity planning and forecasting.",
      features: ["Capacity forecasting", "Trend analysis", "Predictive alerts", "Resource optimization"],
      tab: "insights" as const,
    },
    {
      icon: Brain,
      color: "bg-purple-100 text-purple-700",
      title: "Insights",
      description: "Behavioral analytics for space optimization and predictive intelligence.",
      features: ["Space utilization", "Behavioral patterns", "Usage analytics", "Optimization recommendations"],
      tab: "insights" as const,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module) => {
        const Icon = module.icon;
        return (
          <div key={module.title} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center mb-4`}>
              <Icon className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h4>
            <p className="text-gray-600 mb-4">{module.description}</p>
            <ul className="space-y-2 mb-6">
              {module.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSubTab(module.tab)}
              className="text-primary font-semibold hover:underline"
            >
              Learn More →
            </button>
          </div>
        );
      })}
    </div>
  );
}

function AccessSecurity() {
  return (
    <div className="space-y-8">
      <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
        <H3 className="text-2xl font-bold text-slate-900 mb-4">SafeGuard: Dynamic Access & Security</H3>
        <p className="text-slate-700 mb-6">
          SafeGuard transforms traditional access control into a dynamic, responsive security layer. By integrating real-time occupancy data with your existing security infrastructure, SafeGuard detects anomalies, prevents tailgating, and ensures that only authorized personnel are in specific zones at any given time.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Key Capabilities</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-slate-700">
                <span className="text-primary mt-1">•</span>
                <span>Real-time tailgating and piggybacking detection</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <span className="text-primary mt-1">•</span>
                <span>Automated zone-based access restrictions</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <span className="text-primary mt-1">•</span>
                <span>Behavioral anomaly detection and alerting</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <span className="text-primary mt-1">•</span>
                <span>Seamless integration with leading VMS and ACS platforms</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Use Cases</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-slate-700">
                <span className="text-primary mt-1">•</span>
                <span>High-security zone protection in corporate offices</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <span className="text-primary mt-1">•</span>
                <span>Automated visitor tracking and management</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <span className="text-primary mt-1">•</span>
                <span>Contractor monitoring and compliance verification</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left">
        <ButtonLink href="/contact">Book a Demo</ButtonLink>
      </div>
    </div>
  );
}

function FireSafety() {
  return (
    <div className="space-y-8">
      <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
        <H3 className="text-2xl font-bold text-orange-900 mb-4">FireSafe: Intelligence-Led Fire Safety</H3>
        <p className="text-orange-700 mb-6">
          FireSafe provides the critical intelligence layer needed for modern fire safety management. By connecting fire panels with real-time occupancy data, FireSafe enables precise evacuation management, automated compliance reporting, and command-level visibility during emergencies.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-orange-900 mb-3">Key Capabilities</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-orange-700">
                <span className="text-primary mt-1">•</span>
                <span>Live evacuation progress monitoring by floor and zone</span>
              </li>
              <li className="flex items-start gap-2 text-orange-700">
                <span className="text-primary mt-1">•</span>
                <span>Automated real-time roll calls and muster point tracking</span>
              </li>
              <li className="flex items-start gap-2 text-orange-700">
                <span className="text-primary mt-1">•</span>
                <span>Instant identification of missing or trapped persons</span>
              </li>
              <li className="flex items-start gap-2 text-orange-700">
                <span className="text-primary mt-1">•</span>
                <span>Digital fire logbook and compliance automation</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-orange-900 mb-3">Use Cases</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-orange-700">
                <span className="text-primary mt-1">•</span>
                <span>Complex multi-tenanted building evacuations</span>
              </li>
              <li className="flex items-start gap-2 text-orange-700">
                <span className="text-primary mt-1">•</span>
                <span>High-occupancy venue safety management</span>
              </li>
              <li className="flex items-start gap-2 text-orange-700">
                <span className="text-primary mt-1">•</span>
                <span>Automated fire drill performance auditing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left">
        <ButtonLink href="/solutions/fireguard">Explore FireGuard Platform</ButtonLink>
      </div>
    </div>
  );
}

function LiveOccupancy() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
        <H3 className="text-2xl font-bold text-blue-900 mb-4">Pulse: Real-Time Occupancy Intelligence</H3>
        <p className="text-blue-700 mb-6">
          Pulse is the foundation of the Unifi.id ecosystem, providing a continuous, real-time audit of building occupancy. By aggregating data from multiple detection technologies, Pulse delivers a single source of truth for how your spaces are being used right now.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-blue-900 mb-3">Key Capabilities</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-blue-700">
                <span className="text-primary mt-1">•</span>
                <span>Live headcount and density monitoring across all zones</span>
              </li>
              <li className="flex items-start gap-2 text-blue-700">
                <span className="text-primary mt-1">•</span>
                <span>Historical usage pattern analysis and benchmarking</span>
              </li>
              <li className="flex items-start gap-2 text-blue-700">
                <span className="text-primary mt-1">•</span>
                <span>Automated alerts for over-capacity or irregular usage</span>
              </li>
              <li className="flex items-start gap-2 text-blue-700">
                <span className="text-primary mt-1">•</span>
                <span>Executive-ready occupancy dashboards and reports</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-3">Use Cases</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-blue-700">
                <span className="text-primary mt-1">•</span>
                <span>Dynamic space planning and desk management</span>
              </li>
              <li className="flex items-start gap-2 text-blue-700">
                <span className="text-primary mt-1">•</span>
                <span>Cleaning and maintenance schedule optimization</span>
              </li>
              <li className="flex items-start gap-2 text-blue-700">
                <span className="text-primary mt-1">•</span>
                <span>Retail and hospitality flow analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left">
        <ButtonLink href="/contact">Learn More About Pulse</ButtonLink>
      </div>
    </div>
  );
}

function OperationalInsights() {
  return (
    <div className="space-y-8">
      <div className="bg-purple-50 p-8 rounded-xl border border-purple-200">
        <H3 className="text-2xl font-bold text-purple-900 mb-4">Predict & Insights: Behavioral Analytics</H3>
        <p className="text-purple-700 mb-6">
          Our advanced analytics modules go beyond simple data collection to provide deep behavioral insights and predictive intelligence. By understanding the 'why' behind building usage, you can make proactive decisions that optimize performance and enhance occupant experience.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-purple-900 mb-3">Key Capabilities</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-purple-700">
                <span className="text-primary mt-1">•</span>
                <span>Predictive occupancy forecasting based on historical data</span>
              </li>
              <li className="flex items-start gap-2 text-purple-700">
                <span className="text-primary mt-1">•</span>
                <span>Behavioral pattern recognition and anomaly detection</span>
              </li>
              <li className="flex items-start gap-2 text-purple-700">
                <span className="text-primary mt-1">•</span>
                <span>Space utilization optimization recommendations</span>
              </li>
              <li className="flex items-start gap-2 text-purple-700">
                <span className="text-primary mt-1">•</span>
                <span>Cross-estate performance benchmarking</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-purple-900 mb-3">Use Cases</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-purple-700">
                <span className="text-primary mt-1">•</span>
                <span>Long-term estate rationalization and planning</span>
              </li>
              <li className="flex items-start gap-2 text-purple-700">
                <span className="text-primary mt-1">•</span>
                <span>Workplace experience enhancement strategies</span>
              </li>
              <li className="flex items-start gap-2 text-purple-700">
                <span className="text-primary mt-1">•</span>
                <span>Operational resilience and risk management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left">
        <ButtonLink href="/contact">Learn More About Insights</ButtonLink>
      </div>
    </div>
  );
}

function EnergyPerformance() {
  return (
    <div className="space-y-8">
      <div className="bg-green-50 p-8 rounded-xl border border-green-200">
        <H3 className="text-2xl font-bold text-green-900 mb-4">Flow: Demand-Driven Energy Optimization</H3>
        <p className="text-green-700 mb-6">
          Flow aligns your building's energy consumption with actual human demand. By providing real-time occupancy signals to your BMS, lighting, and HVAC systems, Flow eliminates the waste of heating and lighting empty spaces, delivering immediate carbon and cost reductions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-green-900 mb-3">Key Capabilities</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-green-700">
                <span className="text-primary mt-1">•</span>
                <span>Real-time occupancy-based HVAC and lighting control</span>
              </li>
              <li className="flex items-start gap-2 text-green-700">
                <span className="text-primary mt-1">•</span>
                <span>Measurable carbon reduction tracking and reporting</span>
              </li>
              <li className="flex items-start gap-2 text-green-700">
                <span className="text-primary mt-1">•</span>
                <span>Integration with existing building management systems</span>
              </li>
              <li className="flex items-start gap-2 text-green-700">
                <span className="text-primary mt-1">•</span>
                <span>ESG compliance data and performance verification</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-900 mb-3">Use Cases</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-green-700">
                <span className="text-primary mt-1">•</span>
                <span>Net-zero transition and decarbonization initiatives</span>
              </li>
              <li className="flex items-start gap-2 text-green-700">
                <span className="text-primary mt-1">•</span>
                <span>Operational cost reduction in large estates</span>
              </li>
              <li className="flex items-start gap-2 text-green-700">
                <span className="text-primary mt-1">•</span>
                <span>Green building certification support (LEED, BREEAM)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left">
        <ButtonLink href="/energy/hub">Explore Energy Solutions</ButtonLink>
      </div>
    </div>
  );
}

// Detection Tab Component
function DetectionTab({ subTab, setSubTab }: { subTab: DetectionSubTab; setSubTab: (tab: DetectionSubTab) => void }) {
  return (
    <div>
      <div className="mb-8">
        <H2 className="text-3xl font-bold text-gray-900 mb-4">The Eyes and Ears of Your Building</H2>
        <p className="text-gray-700 mb-6">
          To act intelligently, a building must first be able to see and hear. Unifi.id's Detection Technologies provide the high-fidelity data needed to power our intelligence modules, using a range of non-intrusive sensors to capture occupancy, movement, and environmental signals.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: "overview" as const, label: "Overview" },
          { id: "sense" as const, label: "Sense" },
          { id: "flow" as const, label: "Flow" },
          { id: "cognito" as const, label: "Cognito" },
          { id: "echo" as const, label: "Echo" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors border ${
              subTab === tab.id
                ? "bg-gray-200/80 text-gray-900 border-gray-300"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {subTab === "overview" && <DetectionOverview setSubTab={setSubTab} />}
      {subTab === "sense" && <SenseTech />}
      {subTab === "flow" && <FlowTech />}
      {subTab === "cognito" && <CognitoTech />}
      {subTab === "echo" && <EchoTech />}
    </div>
  );
}

function DetectionOverview({ setSubTab }: { setSubTab: (tab: DetectionSubTab) => void }) {
  const techs = [
    {
      icon: Radio,
      title: "Sense",
      desc: "RFID-based Detection",
      tab: "sense" as const,
    },
    {
      icon: Footprints,
      title: "Flow",
      desc: "Anonymous Footfall Analytics",
      tab: "flow" as const,
    },
    {
      icon: Eye,
      title: "Cognito",
      desc: "Facial Recognition",
      tab: "cognito" as const,
    },
    {
      icon: Wifi,
      title: "Echo",
      desc: "WiFi Device Detection",
      tab: "echo" as const,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {techs.map((tech) => {
        const Icon = tech.icon;
        return (
          <div key={tech.title} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center mb-4">
              <Icon className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{tech.title}</h4>
            <p className="text-gray-600 mb-4 text-sm">{tech.desc}</p>
            <button
              onClick={() => setSubTab(tech.tab)}
              className="text-primary font-semibold hover:underline text-sm"
            >
              Learn More →
            </button>
          </div>
        );
      })}
    </div>
  );
}

function SenseTech() {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200">
      <H3 className="text-2xl font-bold text-gray-900 mb-4">Sense: Environmental & Occupancy Detection</H3>
      <p className="text-gray-700 mb-6">
        Sense uses passive RFID detection to identify presence in and around your buildings without any manual input from users. No door swipes, no camera feeds—just continuous, anonymous awareness of where people are.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-gray-900 mb-3">KEY CAPABILITIES</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Passive RFID-based presence detection</li>
            <li>• Entry and zone-level awareness</li>
            <li>• Zero user interaction required</li>
            <li>• Works with badges, keyfobs, or wearable RFID tokens</li>
            <li>• Detection range scalable to environment</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3">USE CASES</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Supporting Unifi-Pulse data where access logs aren't available</li>
            <li>• Real-time occupancy analytics without disrupting users</li>
            <li>• Mustering augmentation for visitors or unregistered personnel</li>
            <li>• Detection for high-throughput or open-access spaces</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function FlowTech() {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200">
      <H3 className="text-2xl font-bold text-gray-900 mb-4">Flow - Anonymous Footfall Analytics</H3>
      <p className="text-gray-900 font-semibold mb-3">
        Movement Intelligence. Privacy First. Achievable Insights
      </p>
      <p className="text-gray-700 mb-6">
        Flow captures anonymous movement patterns and behavioral analytics to optimize space utilization without compromising individual privacy.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-gray-900 mb-3">KEY CAPABILITIES</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Anonymous footfall tracking</li>
            <li>• Movement pattern analysis</li>
            <li>• Dwell time measurement</li>
            <li>• Traffic flow optimization</li>
            <li>• Privacy-first behavioral analytics</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3">USE CASES</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Space utilization optimization</li>
            <li>• Queue management and flow control</li>
            <li>• Retail analytics and customer journey mapping</li>
            <li>• Building layout optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CognitoTech() {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200">
      <H3 className="text-2xl font-bold text-gray-900 mb-4">Cognito - Facial Recognition</H3>
      <p className="text-gray-900 font-semibold mb-3">
        Identity Intelligence. Instant Verification. Enhanced Security
      </p>
      <p className="text-gray-700 mb-6">
        Cognito provides advanced facial recognition and identity intelligence, enabling instant verification and seamless access control.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-gray-900 mb-3">KEY CAPABILITIES</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Face recognition with masks</li>
            <li>• Identity verification</li>
            <li>• Visitor management integration</li>
            <li>• Access control automation</li>
            <li>• Real-time alerts and notifications</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3">USE CASES</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Contactless access control</li>
            <li>• VIP recognition and service</li>
            <li>• Security threat detection</li>
            <li>• Visitor management automation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function EchoTech() {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200">
      <H3 className="text-2xl font-bold text-gray-900 mb-4">Echo - WiFi Device Detection</H3>
      <p className="text-gray-900 font-semibold mb-3">
        The Digital Whisper Layer That Closes the Occupancy Gap
      </p>
      <p className="text-gray-700 mb-6">
        Echo uses passive WiFi detection to identify presence based on the quiet digital signals devices emit as people move through your building. It catches the people no other system sees.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-gray-900 mb-3">KEY CAPABILITIES</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Passive WiFi signal detection</li>
            <li>• Anonymous by default, identity-aware where appropriate</li>
            <li>• Works with smartphones, tablets, and wearables</li>
            <li>• Continuous presence monitoring</li>
            <li>• Invisible to end users</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3">USE CASES</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Validating evacuation completeness</li>
            <li>• High-throughput area monitoring</li>
            <li>• Closing detection gaps in existing systems</li>
            <li>• Supporting visitors and unregistered personnel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Fire Tab Component
function FireTab({ subTab, setSubTab }: { subTab: FireSubTab; setSubTab: (tab: FireSubTab) => void }) {
  return (
    <div>
      <div className="mb-8">
        <H2 className="text-3xl font-bold text-gray-900 mb-4">Fire Safety Systems & Compliance</H2>
        <p className="text-gray-700 mb-6">
          Unifi.id provides a comprehensive fire safety intelligence platform that connects your physical fire systems with real-time occupancy data. This ensures that in the event of an emergency, you have the live insights needed to protect lives and manage evacuations with confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 rounded-lg bg-red-100 text-red-700 flex items-center justify-center mb-6">
            <Shield className="h-6 w-6" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">FireGuard™ Platform</h4>
          <p className="text-gray-600 mb-6">
            Our flagship fire safety solution. A complete intelligence platform for real-time fire system monitoring, evacuation management, and insurance risk reduction.
          </p>
          <ButtonLink href="/solutions/fireguard">Learn More About FireGuard</ButtonLink>
        </div>

        <div className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
            <Network className="h-6 w-6" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">InsureLink™</h4>
          <p className="text-gray-600 mb-6">
            Connect your fire safety performance directly with your insurers. Provide the evidence-based data needed to reduce premiums and improve risk profiles.
          </p>
          <ButtonLink href="/solutions/insurelink">Learn More About InsureLink</ButtonLink>
        </div>
      </div>

      <div className="bg-unifi-light border border-black/5 p-12 rounded-2xl text-left">
        <H2 className="text-gray-900 mb-6">Ready to transform your building safety?</H2>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Book a demo with our fire safety specialists to see how our intelligence-led solutions can protect your people and your estate.
        </p>
        <ButtonLink href="/contact">Book a Demo</ButtonLink>
      </div>
    </div>
  );
}
