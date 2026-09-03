
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Building, TrendingUp, Shield, DollarSign, AlertTriangle, CheckCircle, Target, GraduationCap, School, Award, Users, ArrowRight, Lightbulb, Thermometer, Sun, Plug } from 'lucide-react';
import { H1, H2, H3, Body, Lead } from '@/src/components/Typography';
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { fadeInUp, staggerContainer } from '@/src/components/motion';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

const sectorTechTabs = [
  { id: 'led', label: 'LED Lighting', icon: Lightbulb },
  { id: 'smart-sockets', label: 'Smart Sockets', icon: Plug },
  { id: 'heating', label: 'Heating & HVAC', icon: Thermometer },
  { id: 'solar', label: 'Solar & Renewables', icon: Sun },
] as const;

type MainTab = 'technology' | 'sector';
type TechnologyTab = 'led' | 'smart-sockets' | 'heating' | 'solar';
type SectorTab = 'education' | 'corporate' | 'public';
type SectorTechnologyTab = 'led' | 'smart-sockets' | 'heating' | 'solar';
type EducationTab =
  | 'higher-ed'
  | 'primary-secondary'
  | 'further-education'
  | 'state-schools'
  | 'mats'
  | 'independent'
  | 'groups';
type CorporateTab = 'office' | 'retail' | 'mixed' | 'hospitality' | 'industrial';
type PublicTab = 'local' | 'nhs' | 'gov' | 'emergency';
type NestedSectorDetail = {
  heading: string;
  paragraphs: readonly string[];
  benefitsHeading: string;
  benefits: readonly string[];
  closing: string;
  challengesHeading: string;
  challenges: readonly {
    title: string;
    description: string;
    features: readonly string[];
  }[];
  ctaLabel: string;
};

type SectorIntroCardContent = {
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
};

const sectorTechnologyContent = {
  education: {
    led: {
      heading: 'LED Lighting Solutions for Education',
      description:
        'From primary schools to sprawling university campuses, the education sector is facing unprecedented energy and infrastructure pressure. Our LED lighting solutions deliver immediate savings while modernizing learning environments across all education sectors.',
      benefits: [],
      challenges: [],
      ctaLabel: 'Discuss Education Lighting',
    },
    'smart-sockets': {
      heading: 'Smart Sockets for Education Estates',
      description:
        'Education sites carry a surprising amount of small-power waste across classrooms, staff rooms, IT suites, and shared spaces. Smart sockets help estates teams manage those loads more intelligently while improving carbon reporting and reducing avoidable spend.',
      benefits: [
        'Reduce standby waste from classroom, admin, and shared-space devices',
        'Automate control around timetables, holidays, and estate access',
        'Capture better small-power data for carbon action planning',
      ],
      challenges: [
        'Plug-load waste often sits outside estate reporting despite being widespread',
        'Manual shutdown routines are unreliable across busy, distributed sites',
        'Schools need quick wins that do not disrupt teaching or safeguarding',
      ],
      ctaLabel: 'Discuss Smart Sockets for Education',
    },
    heating: {
      heading: 'Heating & HVAC for Education Estates',
      description:
        'Schools, colleges, and universities need reliable comfort across classrooms, halls, labs, and accommodation. Modern heating and HVAC upgrades reduce wasted energy, improve wellbeing, and help education estates modernise without capital strain.',
      benefits: [
        'Stabilise comfort across classrooms, lecture halls, residences, and sports spaces',
        'Replace inefficient boilers and ageing plant with modern low-carbon systems',
        'Use funded delivery models to protect teaching and estate budgets',
      ],
      challenges: [
        'Holiday windows and term-time operations demand carefully phased delivery',
        'Older buildings often suffer from patchy controls and uneven heat distribution',
        'Comfort complaints, compliance pressure, and carbon goals all collide in one estate strategy',
      ],
      ctaLabel: 'Discuss Heating for Education',
    },
    solar: {
      heading: 'Solar & Renewables for Education Estates',
      description:
        'Education campuses often have large roof space, predictable daytime demand, and strong sustainability ambitions. Solar can offset grid reliance, support teaching estates, and create visible progress against net zero commitments.',
      benefits: [
        'Turn campus roof space into long-term electricity savings',
        'Support ESG, sustainability reporting, and student-facing climate commitments',
        'Pair on-site generation with funded upgrades across wider estates programmes',
      ],
      challenges: [
        'Mixed-age estates require feasibility checks across multiple buildings',
        'Export, storage, and demand profiles vary between campuses and school sites',
        'Projects must align with holiday works, safeguarding, and estate access planning',
      ],
      ctaLabel: 'Explore Solar for Education',
    },
  },
  corporate: {
    led: {
      heading: 'LED Lighting for Corporate Real Estate',
      description:
        'Corporate real estate demands high performance, reliability, and cost efficiency. LED lighting delivers all three - reducing energy costs by up to 80%, enhancing workspace quality, and supporting ESG commitments across your entire portfolio.',
      benefits: [],
      challenges: [],
      ctaLabel: 'Discuss Corporate Lighting',
    },
    'smart-sockets': {
      heading: 'Smart Sockets for Corporate Spaces',
      description:
        'Smart sockets bring plug-in equipment into view, helping teams control the hidden loads that often sit outside a formal carbon action plan. They reduce standby waste, support carbon reporting, and give estates teams a practical route to quick wins across occupied spaces.',
      benefits: [
        'Control plug-load waste without changing how teams use their buildings',
        'Capture real-time device-level insights that strengthen carbon reporting',
        'Deploy quickly across live spaces with minimal disruption',
      ],
      challenges: [
        'Plug loads are often unmanaged, yet they remain a persistent source of avoidable spend',
        'Hybrid occupancy and extended trading hours make manual shutdown routines unreliable',
        'Carbon action plans need measurable quick wins, not another spreadsheet exercise',
      ],
      ctaLabel: 'Discuss Smart Sockets for Corporate Estates',
    },
    heating: {
      heading: 'Heating & HVAC for Corporate Real Estate',
      description:
        'Corporate buildings live or die on comfort, operational control, and cost predictability. Heating and HVAC upgrades help landlords and occupiers reduce waste, improve workspace quality, and future-proof assets against compliance and energy-price pressure.',
      benefits: [
        'Reduce heating and cooling waste across offices, mixed-use assets, and managed portfolios',
        'Improve occupant comfort, air quality, and control strategies in premium workspaces',
        'Support EPC, MEES, and wider decarbonisation requirements with funded delivery',
      ],
      challenges: [
        'Multi-tenant buildings need upgrades planned around access, leases, and service continuity',
        'Ageing BMS, plant, and controls often hide expensive inefficiencies',
        'Asset managers need solutions that improve NOI, not just engineering performance',
      ],
      ctaLabel: 'Discuss Corporate HVAC',
    },
    solar: {
      heading: 'Solar & Renewables for Corporate Real Estate',
      description:
        'From office HQs to logistics sites, many corporate estates can generate clean power on-site. Solar helps reduce grid exposure, improve building performance metrics, and turn underused roof space into a strategic energy asset.',
      benefits: [
        'Cut daytime electricity demand and improve operating margins across portfolios',
        'Strengthen ESG reporting with visible, auditable on-site generation',
        'Support landlord and occupier decarbonisation strategies with long-life infrastructure',
      ],
      challenges: [
        'Ownership models and lease structures affect who captures the savings',
        'Feasibility varies across roof condition, tenant operations, and connection capacity',
        'Projects need to work alongside broader asset plans and capital events',
      ],
      ctaLabel: 'Explore Solar for Corporate Estates',
    },
  },
  public: {
    led: {
      heading: 'LED Lighting Solutions for Public Sector Buildings',
      description:
        'Public sector organizations face unique pressures to deliver value while meeting sustainability targets. Our LED solutions enable comprehensive upgrades without capital expenditure, funded through operational savings.',
      benefits: [],
      challenges: [],
      ctaLabel: 'Discuss Public Sector Lighting',
    },
    'smart-sockets': {
      heading: 'Smart Sockets for Public Sector Buildings',
      description:
        'Public buildings often carry hidden plug-load waste across offices, depots, clinical support spaces, and operational rooms. Smart sockets give estates teams a low-disruption way to control those loads, reduce waste, and strengthen carbon reporting with real data.',
      benefits: [
        'Control non-critical plug loads without major retrofit works',
        'Reduce standby consumption across varied public estates',
        'Improve evidence for carbon reporting and climate action updates',
      ],
      challenges: [
        'Public estates are diverse, making small-power waste hard to see consistently',
        'Manual routines vary between teams, sites, and operating schedules',
        'Councils, trusts, and services need measurable quick wins that show value',
      ],
      ctaLabel: 'Discuss Smart Sockets for Public Estates',
    },
    heating: {
      heading: 'Heating & HVAC for Public Sector Buildings',
      description:
        'From civic offices to health estates and frontline facilities, public buildings need dependable heating and ventilation that protects services while reducing waste. Modern HVAC upgrades can cut cost and carbon without waiting on scarce capital budgets.',
      benefits: [
        'Lower heating waste across complex public estates while protecting service delivery',
        'Improve comfort, resilience, and compliance in buildings used by staff and the public',
        'Use structured funding to accelerate delivery without derailing core budgets',
      ],
      challenges: [
        'Public buildings span very different use types, operating hours, and thermal demands',
        'Procurement, governance, and auditability matter as much as technical performance',
        'Upgrades must minimise disruption to public access and critical operations',
      ],
      ctaLabel: 'Discuss Public Sector HVAC',
    },
    solar: {
      heading: 'Solar & Renewables for Public Sector Buildings',
      description:
        'Public estates can use solar to reduce long-run operating costs, demonstrate climate leadership, and build resilience against future price shocks. The strongest projects align generation with the buildings and services that use energy during the day.',
      benefits: [
        'Generate visible savings for councils, trusts, and government occupiers',
        'Strengthen public-sector carbon reporting with measurable clean generation',
        'Pair renewable generation with wider efficiency upgrades to maximise return',
      ],
      challenges: [
        'Estate complexity, governance, and planning constraints require a clear delivery path',
        'Critical services need robust phasing, resilience planning, and operational continuity',
        'Projects must show value for money as well as environmental benefit',
      ],
      ctaLabel: 'Explore Solar for Public Estates',
    },
  },
} as const;

const corporateSectorIntroCopy: Record<CorporateTab, string> = {
  office:
    'Office buildings are under pressure to balance comfort, occupancy patterns, and stronger sustainability expectations without adding complexity for tenants or facilities teams. The technologies below show where offices can reduce waste quickly while building a more credible carbon action plan.',
  retail:
    'Retail operators need every square metre to work harder, which makes energy performance inseparable from margin, customer experience, and brand perception. These technology routes focus on practical ways to cut waste and improve carbon reporting without disrupting trading.',
  mixed:
    'Mixed-use developments rarely have one neat energy profile, so upgrades need to work across shared areas, tenants, and different operating hours. The options below highlight technologies that help owners simplify delivery while improving visibility, efficiency, and carbon performance.',
  hospitality:
    'Hospitality venues rely on atmosphere, comfort, and consistency, yet they also carry long operating hours and a high expectation of visible sustainability. The solutions below are designed to protect guest experience while reducing wasted energy behind the scenes.',
  industrial:
    'Industrial facilities need energy upgrades that support safety, uptime, and operational resilience, not just lower bills on paper. The technologies below prioritise robust improvements that reduce waste, strengthen reporting, and fit around real production demands.',
};

const publicSectorIntroCopy: Record<PublicTab, string> = {
  local:
    'Local authorities are expected to show visible progress on climate targets while protecting services and keeping public buildings operational. The technologies below help councils target measurable savings and stronger carbon reporting across diverse estates.',
  nhs:
    'NHS and health estates need solutions that reduce waste without compromising patient safety, staff wellbeing, or operational continuity. These technologies help trusts turn energy performance into a practical carbon action plan backed by evidence, not estimates.',
  gov:
    'Government estates are judged on delivery, value for money, and whether policy ambition shows up in the buildings people actually use. The options below focus on credible upgrades that support carbon reporting and demonstrate action as well as intent.',
  emergency:
    'Emergency services need resilient, low-disruption upgrades that protect readiness while reducing avoidable spend across stations, depots, and support estates. The technologies below are chosen to strengthen operational resilience and make carbon progress easier to evidence.',
};

const educationSectorCards: Record<
  Exclude<EducationTab, 'primary-secondary' | 'further-education'>,
  SectorIntroCardContent
> = {
  'higher-ed': {
    title: 'Higher Education',
    body:
      'Universities and colleges need estates that support learning, research, student wellbeing, and visible sustainability progress all at once. The technology options below are designed to help higher education teams cut waste, improve carbon reporting, and build a more defensible route to long-term decarbonisation.',
    icon: GraduationCap,
  },
  'state-schools': {
    title: 'State Schools',
    body:
      'State schools are under constant pressure to improve comfort, reduce energy waste, and make budgets stretch further without disrupting the school day. The technologies below focus on practical, fundable improvements that support compliance, lower bills, and make carbon action easier to evidence.',
    icon: School,
  },
  mats: {
    title: 'Multi-Academy Trusts',
    body:
      'MATs need a joined-up approach that works across multiple schools, varying building conditions, and central reporting requirements. These technology pathways help trusts standardise action, reduce avoidable spend, and strengthen estate-wide carbon reporting.',
    icon: Users,
  },
  independent: {
    title: 'Independent Schools',
    body:
      'Independent schools need estates that reflect both educational quality and responsible stewardship, while keeping disruption low for staff, pupils, and parents. The technology options below help schools improve building performance and show credible sustainability progress with less operational friction.',
    icon: Award,
  },
  groups: {
    title: 'School Groups',
    body:
      'School groups often inherit mixed estates, inconsistent data, and multiple decision-makers, which makes estate planning harder than it should be. The technologies below provide a clearer path to coordinated upgrades, measurable savings, and stronger reporting across the wider group.',
    icon: Users,
  },
};

const corporateSectorCards: Record<CorporateTab, SectorIntroCardContent> = {
  office: {
    title: 'Office Buildings',
    body:
      'Office buildings need to balance comfort, occupancy patterns, and ESG expectations without adding complexity for tenants or facilities teams. The technologies below help offices reduce waste, improve operational performance, and support a more credible carbon action plan.',
    icon: Building,
  },
  retail: {
    title: 'Retail',
    body:
      'Retail spaces need energy improvements that protect margin, support the customer experience, and work around live trading conditions. The technologies below focus on visible savings, stronger carbon reporting, and low-disruption delivery.',
    icon: TrendingUp,
  },
  mixed: {
    title: 'Mixed-Use Developments',
    body:
      'Mixed-use estates bring together different occupiers, operating hours, and service expectations, so energy upgrades need to stay flexible and coordinated. The technologies below help owners simplify delivery while improving visibility, efficiency, and carbon performance.',
    icon: Building,
  },
  hospitality: {
    title: 'Hospitality',
    body:
      'Hospitality venues rely on comfort, atmosphere, and consistency, which means efficiency projects have to work quietly in the background. The technologies below are designed to lower waste, protect guest experience, and support clearer sustainability reporting.',
    icon: Award,
  },
  industrial: {
    title: 'Industrial',
    body:
      'Industrial buildings need robust, measurable improvements that support uptime, safety, and operational resilience, not just lower bills in a presentation. The technologies below prioritise practical upgrades that reduce waste and strengthen long-term reporting.',
    icon: Shield,
  },
};

const publicSectorCards: Record<PublicTab, SectorIntroCardContent> = {
  local: {
    title: 'Local Authorities',
    body:
      'Local authorities need to show visible progress on climate goals while protecting services across diverse public estates. The technologies below help councils cut waste, improve resilience, and strengthen carbon reporting with measurable actions.',
    icon: Users,
  },
  nhs: {
    title: 'NHS & Health',
    body:
      'NHS and health estates need solutions that reduce waste without compromising patient safety, comfort, or operational continuity. The technologies below help trusts turn sustainability ambition into practical delivery backed by better energy data and reporting.',
    icon: Shield,
  },
  gov: {
    title: 'Government',
    body:
      'Government buildings are expected to show policy intent in real operational performance, with clear value for money and credible evidence. The technologies below support lower costs, better carbon reporting, and a clearer route to estate-wide action.',
    icon: Target,
  },
  emergency: {
    title: 'Emergency Services',
    body:
      'Emergency services need resilient, low-disruption upgrades that protect readiness across stations, depots, and support buildings. The technologies below focus on cutting waste, supporting operational continuity, and making carbon progress easier to evidence.',
    icon: AlertTriangle,
  },
};

const nestedSectorTechnologyContent = {
  education: {
    'smart-sockets': {
      'higher-ed': {
        heading: 'Higher Education: Smarter Control of Everyday Plug Loads',
        paragraphs: [
          'Universities carry thousands of plug-in devices across teaching spaces, offices, kitchens, libraries, and accommodation. Smart sockets help estates teams reduce small-power waste without getting in the way of campus life.',
          'They also add useful granularity to carbon reporting, making it easier to evidence quick wins alongside larger estate upgrades.',
        ],
        benefitsHeading: 'Unifi.id helps higher education estates deliver:',
        benefits: [
          'Automated shutdown across teaching and admin spaces',
          'Better visibility of plug-load use across complex estates',
          'Reduced standby waste during evenings, weekends, and holidays',
          'Useful small-power data for carbon reporting',
          'Low-disruption rollout in occupied buildings',
          'Quick wins that complement wider decarbonisation projects',
        ],
        closing:
          'For higher education, smart sockets offer a practical way to cut hidden waste while improving the quality of estate-wide energy data.',
        challengesHeading: 'Specific Challenges We Address for Higher Education Smart Sockets',
        challenges: [
          {
            title: 'Large, Varied Estates',
            description:
              'Campuses combine libraries, labs, offices, and shared spaces with very different usage patterns.',
            features: [
              'Scheduling by building or room type',
              'Remote control across multiple sites',
              'Reduced unmanaged out-of-hours use',
              'Scalable rollout by faculty or building',
            ],
          },
          {
            title: 'Holiday and Timetable Patterns',
            description:
              'Education occupancy shifts sharply through the year, making manual control inefficient.',
            features: [
              'Holiday and term-time schedules',
              'Adjustable control rules',
              'Reduced weekend standby waste',
              'Simple estate-team overrides',
            ],
          },
          {
            title: 'Evidence for Sustainability Teams',
            description:
              'Carbon reporting improves when smaller loads are measured instead of guessed.',
            features: [
              'Real small-power consumption data',
              'Supports carbon action plan updates',
              'Clear before-and-after comparisons',
              'Useful evidence for ESG reporting',
            ],
          },
        ],
        ctaLabel: 'Discuss Higher Education Smart Sockets',
      },
      'state-schools': {
        heading: 'State Schools: Cut Everyday Small-Power Waste',
        paragraphs: [
          'State schools use a wide mix of classroom devices, staff-room equipment, and shared appliances that often stay on longer than they need to. Smart sockets make it easier to control that waste around the school day without asking staff to police every plug.',
          'They are a simple, low-disruption way to improve energy performance while supporting wider school sustainability goals.',
        ],
        benefitsHeading: 'Unifi.id helps state schools deliver:',
        benefits: [
          'Automated control for classrooms, admin areas, and shared spaces',
          'Reduced plug-load waste during evenings, weekends, and holidays',
          'Low-disruption rollout suited to live school environments',
          'Better evidence for school carbon planning',
          'Practical savings that protect stretched budgets',
          'Simple estate-wide control rules',
        ],
        closing:
          'For state schools, smart sockets are an easy win that reduces waste without adding pressure to teaching teams.',
        challengesHeading: 'Specific Challenges We Address for State School Smart Sockets',
        challenges: [
          {
            title: 'Busy School-Day Routines',
            description:
              'Staff have better things to do than manage every plug and device manually.',
            features: [
              'Timed schedules by room type',
              'Automatic shutdown after hours',
              'Reduced reliance on manual checks',
              'Simple exceptions for essential devices',
            ],
          },
          {
            title: 'Holiday Closures',
            description:
              'Holiday periods can leave avoidable standby loads running for long stretches.',
            features: [
              'Term and holiday scheduling',
              'Quick estate-wide controls',
              'Reduced wasted energy when buildings are quiet',
              'Easy reset for reopening',
            ],
          },
          {
            title: 'Budget and Reporting Pressure',
            description:
              'Schools need practical savings that can also support sustainability reporting.',
            features: [
              'Measured reductions in small-power use',
              'Useful data for governors and trust leads',
              'Supports climate action planning',
              'Fast proof of value',
            ],
          },
        ],
        ctaLabel: 'Discuss State School Smart Sockets',
      },
      mats: {
        heading: 'MATs: Standardise Small-Power Control Across the Trust',
        paragraphs: [
          'Multi-academy trusts often inherit different shutdown habits, device types, and reporting quality from school to school. Smart sockets help create a more consistent trust-wide approach to plug-load control and small-power reporting.',
          'That means clearer visibility, easier rollout of quick wins, and more consistent evidence for central sustainability teams.',
        ],
        benefitsHeading: 'Unifi.id helps MATs deliver:',
        benefits: [
          'Standardised smart-socket policies across multiple schools',
          'Reduced standby waste across the wider estate',
          'Trust-level visibility of small-power consumption',
          'Low-disruption deployment in occupied schools',
          'Better carbon reporting consistency',
          'Quick wins that can scale school by school',
        ],
        closing:
          'For MATs, smart sockets create a more joined-up route to plug-load control, reporting, and repeatable savings.',
        challengesHeading: 'Specific Challenges We Address for MAT Smart Sockets',
        challenges: [
          {
            title: 'Inconsistent Estate Practices',
            description:
              'Each school may manage devices differently, making trust-wide control hard to enforce.',
            features: [
              'Shared control standards',
              'Simple rollout templates',
              'Remote oversight by central teams',
              'Consistent behaviour across schools',
            ],
          },
          {
            title: 'Portfolio Visibility',
            description:
              'Trust leaders need to see where avoidable waste is sitting across the estate.',
            features: [
              'Site-level comparisons',
              'Trust-wide small-power reporting',
              'Prioritised rollout planning',
              'Clear evidence of progress',
            ],
          },
          {
            title: 'Quick Wins at Scale',
            description:
              'Large estates need improvements that can be repeated without heavy project overhead.',
            features: [
              'Fast deployment model',
              'Low disruption by site',
              'Measurable early savings',
              'Supports wider decarbonisation plans',
            ],
          },
        ],
        ctaLabel: 'Discuss MAT Smart Sockets',
      },
      independent: {
        heading: 'Independent Schools: Visible Savings Without Disrupting the School Experience',
        paragraphs: [
          'Independent schools need estates that perform well for pupils, parents, and governors while still controlling operating costs. Smart sockets reduce hidden plug-load waste in a way that is easy to deploy and easy to evidence.',
          'They also provide a practical early action that supports broader sustainability storytelling and reporting.',
        ],
        benefitsHeading: 'Unifi.id helps independent schools deliver:',
        benefits: [
          'Automated control across classrooms, offices, and shared facilities',
          'Reduced standby waste without visible disruption',
          'Clearer energy data for sustainability reporting',
          'Quick-win savings that support wider investment cases',
          'Simple rollout across mixed estates',
          'Low-maintenance ongoing control',
        ],
        closing:
          'For independent schools, smart sockets are a straightforward way to improve efficiency while strengthening the estate story you can share with stakeholders.',
        challengesHeading: 'Specific Challenges We Address for Independent School Smart Sockets',
        challenges: [
          {
            title: 'Multiple Building Types',
            description:
              'Independent school estates often mix teaching, boarding, sports, and admin spaces.',
            features: [
              'Control by building type',
              'Flexible schedules',
              'Shared-space optimisation',
              'Support for phased deployment',
            ],
          },
          {
            title: 'Expectation of Quality',
            description:
              'Efficiency upgrades need to be effective without affecting the school environment.',
            features: [
              'Low-visibility installation approach',
              'Control of non-critical loads only',
              'Minimal day-to-day disruption',
              'Simple estate oversight',
            ],
          },
          {
            title: 'Governance and Reporting',
            description:
              'Governors and leadership teams increasingly expect measurable sustainability progress.',
            features: [
              'Trackable small-power data',
              'Useful carbon reporting evidence',
              'Supports action-plan updates',
              'Clear proof of savings',
            ],
          },
        ],
        ctaLabel: 'Discuss Independent School Smart Sockets',
      },
      groups: {
        heading: 'School Groups: Coordinate Plug-Load Control Across a Wider Estate',
        paragraphs: [
          'School groups need practical standards they can apply across sites without creating more admin for local teams. Smart sockets make it easier to cut hidden waste consistently while building better portfolio-level reporting.',
          'They work especially well as a scalable quick win alongside larger lighting, heating, or solar projects.',
        ],
        benefitsHeading: 'Unifi.id helps school groups deliver:',
        benefits: [
          'Coordinated control across multiple schools and support buildings',
          'Portfolio-wide visibility of small-power waste',
          'Reduced after-hours consumption across the estate',
          'Simple carbon reporting evidence for group leaders',
          'Fast, repeatable rollout model',
          'Supports wider group decarbonisation planning',
        ],
        closing:
          'For school groups, smart sockets provide a repeatable route to fast savings and better estate-wide visibility.',
        challengesHeading: 'Specific Challenges We Address for School Group Smart Sockets',
        challenges: [
          {
            title: 'Scale Without Complexity',
            description:
              'Groups need a model that can scale without becoming another admin burden.',
            features: [
              'Repeatable site rollout process',
              'Shared controls and templates',
              'Central oversight',
              'Low-touch local management',
            ],
          },
          {
            title: 'Estate Variation',
            description:
              'Different schools and inherited buildings make consistency difficult.',
            features: [
              'Flexible rules by site type',
              'Phased deployment planning',
              'Comparable reporting outputs',
              'Prioritisation by likely waste',
            ],
          },
          {
            title: 'Need for Measurable Progress',
            description:
              'Groups need evidence that quick wins are real and scalable.',
            features: [
              'Trackable savings by site',
              'Useful support for carbon reporting',
              'Estate-wide progress visibility',
              'Clear value for leadership teams',
            ],
          },
        ],
        ctaLabel: 'Discuss Smart Sockets for School Groups',
      },
    },
    heating: {
      'higher-ed': {
        heading: 'Higher Education: Heat Complex Estates Efficiently',
        paragraphs: [
          'Universities and colleges operate diverse estates spanning lecture halls, labs, libraries, residences, and sports facilities. Modern heating systems, air source heat pumps, and smart zoning controls deliver precise comfort at lower cost while supporting institutional carbon commitments.',
          'With funding from Salix, PSDS, and regional decarbonisation grants, campuses can modernise heating without capital outlay, reducing bills, cutting carbon, and strengthening compliance reporting.',
        ],
        benefitsHeading: 'Unifi.id helps higher education estates deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Funded upgrades through Salix, PSDS, and regional grants',
          'Lower maintenance costs with fewer breakdowns and longer equipment life',
          'Improved thermal comfort across diverse building types',
          'Full carbon reporting for Scope 1 and 2 emissions',
          'Future-ready infrastructure compatible with solar, storage, and smart buildings',
        ],
        closing:
          'Whether you are upgrading a single faculty building or an entire campus, Unifi.id delivers heating solutions that cut cost, reduce carbon, and meet compliance without capital outlay.',
        challengesHeading: 'Specific Challenges We Address for Higher Education',
        challenges: [
          {
            title: 'Diverse Building Types',
            description:
              'Universities operate labs, lecture halls, residences, and sports facilities, all with different heating demands.',
            features: [
              'Zone-based heating with independent controls',
              'Heat pumps sized for specific building types',
              'Integration with existing infrastructure where possible',
              'Future-ready phasing for expansion',
            ],
          },
          {
            title: 'Aging Infrastructure',
            description:
              'Many university buildings rely on outdated heating systems and challenging fabric conditions.',
            features: [
              'Retrofits compatible with existing radiator systems',
              'Low-temperature heat pumps for older buildings',
              'Insulation and fabric upgrades where required',
              'Phased implementation to minimise disruption',
            ],
          },
          {
            title: 'Carbon Targets & ESG Reporting',
            description:
              'Universities need measurable reductions that support institutional sustainability frameworks.',
            features: [
              '40-60% reduction in heating emissions',
              'Real-time carbon tracking via Cortex',
              'Support for institutional ESG reporting',
              'Audit-ready compliance documentation',
            ],
          },
        ],
        ctaLabel: 'Discuss Higher Education Heating',
      },
      'state-schools': {
        heading: 'State Schools: Deliver Comfort, Cut Bills, Meet DfE Standards',
        paragraphs: [
          'State schools face ageing boilers, tight budgets, and strict DfE requirements. Heat pumps, high-efficiency boilers, and smart zoning controls improve comfort while reducing waste and helping schools meet thermal and ventilation standards.',
          'With Salix and PSDS-backed delivery, heating upgrades can be delivered without capital outlay, improving learning environments while protecting teaching budgets.',
        ],
        benefitsHeading: 'Unifi.id helps state schools deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Funded upgrades through Salix and PSDS with no capital outlay',
          'Lower maintenance costs and fewer emergency failures',
          'Improved thermal comfort for students and staff',
          'DfE and BB101-aligned compliance support',
          'Full carbon reporting for Scope 1 and 2 emissions',
        ],
        closing:
          'Whether you are upgrading one school or a wider estate, Unifi.id delivers heating solutions that cut costs, improve comfort, and meet DfE standards without capital outlay.',
        challengesHeading: 'Specific Challenges We Address for State Schools',
        challenges: [
          {
            title: 'Aging Buildings & Poor Insulation',
            description:
              'Older school buildings often combine dated plant with inefficient envelopes.',
            features: [
              'Retrofits compatible with existing radiator systems',
              'Low-temperature heat pumps for older buildings',
              'Fabric upgrades where required',
              'Phased work to minimise disruption',
            ],
          },
          {
            title: 'Tight Budgets & Capital Constraints',
            description:
              'Schools rarely have spare capital for major heating modernisation.',
            features: [
              'Salix-approved funding structures',
              'PSDS grants where applicable',
              'Cashflow-neutral delivery models',
              'No upfront capital requirement',
            ],
          },
          {
            title: 'Compliance & Safeguarding',
            description:
              'Heating upgrades must support safe, comfortable, and compliant environments.',
            features: [
              'Thermal and ventilation alignment with standards',
              'Safer, more stable indoor environments',
              'Commissioning and performance testing',
              'Audit-ready documentation',
            ],
          },
        ],
        ctaLabel: 'Discuss State School Heating',
      },
      mats: {
        heading: 'Multi-Academy Trusts: Standardise Heating Across Your Estate',
        paragraphs: [
          'MATs manage multiple schools with inconsistent heating systems, fragmented reporting, and rising costs. Modern heat pumps, boilers, and controls create a consistent trust-wide strategy while improving comfort and reducing energy waste.',
          'With funded delivery through Salix, PSDS, and regional schemes, trusts can standardise heating across their estate without capital outlay and gain centralised reporting through Cortex.',
        ],
        benefitsHeading: 'Unifi.id helps MATs deliver:',
        benefits: [
          '40-60% reduction in heating energy use across the estate',
          'Standardised systems across multiple schools',
          'Funded upgrades with no capital outlay',
          'Centralised carbon reporting via Cortex',
          'Lower maintenance costs through economies of scale',
          'DfE-aligned compliance across the trust',
        ],
        closing:
          'Whether you operate five schools or fifty, Unifi.id delivers consistent heating, lower costs, and centralised carbon reporting without capital outlay.',
        challengesHeading: 'Specific Challenges We Address for MATs',
        challenges: [
          {
            title: 'Inconsistent Systems Across Schools',
            description:
              'Inherited plant and controls create maintenance inefficiency and uneven performance.',
            features: [
              'Consistent technology standards across the estate',
              'Centralised maintenance contracts',
              'Unified carbon reporting',
              'Phased rollout that respects school operations',
            ],
          },
          {
            title: 'Centralised Carbon Reporting',
            description:
              'Trust leadership needs estate-wide visibility on emissions and savings.',
            features: [
              'Trust-wide carbon dashboard',
              'School-by-school emissions tracking',
              'Automated reporting outputs',
              'Evidence for governance and compliance',
            ],
          },
          {
            title: 'Economies of Scale',
            description:
              'Larger groups can unlock better commercial terms if projects are structured correctly.',
            features: [
              'Volume pricing on equipment',
              'Centralised service contracts',
              'Trust-wide performance guarantees',
              'Phased funding across sites',
            ],
          },
        ],
        ctaLabel: 'Discuss Heating for MATs',
      },
      independent: {
        heading: 'Independent Schools: Deliver Premium Comfort, Meet ISI Standards',
        paragraphs: [
          'Independent schools are expected to deliver exceptional facilities while controlling costs across diverse estates. Modern heating systems improve comfort, reduce waste, and support sustainability positioning for parents, governors, and inspectors.',
          'Flexible funding including EPC-style models and green finance helps schools upgrade without diverting capital from core educational priorities.',
        ],
        benefitsHeading: 'Unifi.id helps independent schools deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Premium thermal comfort across teaching, boarding, and shared spaces',
          'Funded upgrades through EPC and green finance structures',
          'ISI-supportive compliance and sustainability evidence',
          'Improved reputation through visible environmental leadership',
          'Future-ready systems compatible with solar and storage',
        ],
        closing:
          'Whether you run boarding houses, sports facilities, or historic buildings, Unifi.id delivers heating solutions that enhance comfort, cut costs, and strengthen sustainability credentials.',
        challengesHeading: 'Specific Challenges We Address for Independent Schools',
        challenges: [
          {
            title: 'Historic Buildings & Listed Structures',
            description:
              'Many independent schools work within heritage constraints that restrict external alterations.',
            features: [
              'Internal heat pump and plant solutions',
              'Ground source options where appropriate',
              'Retrofits that respect existing systems',
              'Support with conservation requirements',
            ],
          },
          {
            title: '24/7 Heating Demand',
            description:
              'Boarding environments and extended-use facilities need dependable comfort around the clock.',
            features: [
              'Dual-source redundancy where needed',
              'Battery and resilience options',
              'Remote monitoring and predictive maintenance',
              '24/7 technical support pathways',
            ],
          },
          {
            title: 'Competitive Market & Parent Expectations',
            description:
              'Facilities quality and sustainability positioning directly affect perception and enrolment.',
            features: [
              'Superior thermal comfort across the estate',
              'Sustainability evidence for governors and parents',
              'Clear reporting for stakeholder communications',
              'Improved operational resilience',
            ],
          },
        ],
        ctaLabel: 'Discuss Independent School Heating',
      },
      groups: {
        heading: 'School Groups: Standardise Heating, Cut Costs, Report Carbon',
        paragraphs: [
          'School groups, diocesan trusts, and federations face the same problem at scale: inconsistent heating systems, fragmented reporting, and rising operating costs across multiple sites.',
          'Funded modernisation helps groups standardise heating technology, reduce maintenance burden, and build one reporting view across the estate without capital outlay.',
        ],
        benefitsHeading: 'Unifi.id helps school groups deliver:',
        benefits: [
          '40-60% reduction in heating energy use across the group',
          'Consistent systems and controls across sites',
          'Funded upgrades through Salix, PSDS, and green finance',
          'Centralised carbon reporting via Cortex',
          'Lower maintenance costs through scale',
          'DfE or ISI-aligned compliance across the estate',
        ],
        closing:
          'Whether you operate five schools or fifty, Unifi.id delivers consistent heating, lower costs, and group-wide reporting without capital outlay.',
        challengesHeading: 'Specific Challenges We Address for School Groups',
        challenges: [
          {
            title: 'Inconsistent Systems Across Schools',
            description:
              'Inherited assets and mixed standards make maintenance and planning harder than they should be.',
            features: [
              'Consistent equipment choices across schools',
              'Centralised maintenance contracts',
              'Unified carbon reporting',
              'Phased rollout to minimise disruption',
            ],
          },
          {
            title: 'Centralised Carbon Reporting',
            description:
              'Leadership teams need one view of performance across multiple sites.',
            features: [
              'Group-wide carbon dashboard',
              'School-by-school tracking',
              'Automated ESG reporting outputs',
              'Documentation aligned to regulatory needs',
            ],
          },
          {
            title: 'Economies of Scale',
            description:
              'Portfolio-wide projects should improve commercial terms, not multiply complexity.',
            features: [
              'Volume discounts on equipment',
              'Centralised maintenance contracts',
              'Group-wide performance guarantees',
              'Phased funding across the portfolio',
            ],
          },
        ],
        ctaLabel: 'Discuss Heating for School Groups',
      },
    },
    solar: {
      'higher-ed': {
        heading: 'Higher Education: Campus Solar That Strengthens Resilience and ESG',
        paragraphs: [
          'Universities have extensive roof space, predictable daytime electricity demand, and strong public-facing sustainability commitments. Solar PV with storage turns campuses into visible generators of clean power while reducing exposure to volatile grid prices.',
          'It also creates measurable evidence for net zero reporting and provides a practical platform for research, education, and estate-wide energy resilience.',
        ],
        benefitsHeading: 'Unifi.id helps higher education estates deliver:',
        benefits: [
          'Large roof areas ideal for solar installations',
          'Daytime generation aligned to campus energy use',
          'Educational and research value for students and staff',
          'Long-term energy price certainty',
          'Significant carbon reduction that is visible and measurable',
          'Battery storage and EV integration for wider estate resilience',
        ],
        closing:
          'This is not just about panels on roofs. It is about turning the campus into a lower-carbon, more resilient energy system.',
        challengesHeading: 'Specific Challenges We Address for Higher Education Solar',
        challenges: [
          {
            title: 'Complex Multi-Building Estates',
            description:
              'Campuses need solar strategies that work across different roof types, uses, and demand profiles.',
            features: [
              'Multi-building solar planning',
              'Generation sized to real campus demand',
              'Phased rollout across the estate',
              'Clear monitoring across sites',
            ],
          },
          {
            title: 'ESG, Research, and Reputation',
            description:
              'Higher education needs projects that deliver real savings and credible sustainability leadership.',
            features: [
              'Visible net zero progress',
              'Audit-friendly generation reporting',
              'Student-facing sustainability value',
              'Support for ESG communications',
            ],
          },
          {
            title: 'Energy Resilience',
            description:
              'Campuses benefit when generation, storage, and smart controls work together.',
            features: [
              'Battery storage for evening and weekend use',
              'Microgrid-ready architecture',
              'Integration with EV charging',
              'Long-term energy cost stability',
            ],
          },
        ],
        ctaLabel: 'Discuss Campus Solar',
      },
      'state-schools': {
        heading: 'State Schools: Solar That Cuts Bills and Supports Learning',
        paragraphs: [
          'Schools are well suited to solar because daytime generation closely matches their occupancy patterns and electricity demand. Roof-mounted PV reduces reliance on the grid and creates visible savings that support stretched budgets.',
          'Solar projects also support teaching, sustainability engagement, and long-term estate planning without requiring schools to divert scarce capital.',
        ],
        benefitsHeading: 'Unifi.id helps state schools deliver:',
        benefits: [
          'Large roof areas ideal for solar deployment',
          'Daytime generation matched to school operations',
          'Long-term energy price certainty',
          'Visible carbon reduction for school sustainability goals',
          'Battery storage options for extended use',
          'Educational value for pupils and communities',
        ],
        closing:
          'Solar helps schools reduce operational pressure while showing practical progress on climate and energy goals.',
        challengesHeading: 'Specific Challenges We Address for State School Solar',
        challenges: [
          {
            title: 'Budget Pressure',
            description:
              'Schools need lower bills without creating a new capital problem.',
            features: [
              'Funded deployment structures',
              'Immediate operational savings',
              'No need to divert teaching budgets',
              'Predictable long-term electricity costs',
            ],
          },
          {
            title: 'Estate Variability',
            description:
              'Different roof ages, site conditions, and building profiles require tailored delivery.',
            features: [
              'Site-by-site feasibility planning',
              'Roof suitability assessment',
              'Phased estate rollout',
              'Monitoring across multiple buildings',
            ],
          },
          {
            title: 'Sustainability Visibility',
            description:
              'Schools benefit when carbon savings are easy to explain and evidence.',
            features: [
              'Visible clean generation on site',
              'Simple reporting on savings and carbon',
              'Support for sustainability communications',
              'Clear educational value for students',
            ],
          },
        ],
        ctaLabel: 'Discuss Solar for State Schools',
      },
      mats: {
        heading: 'MATs: Standardise Solar Strategy Across the Trust',
        paragraphs: [
          'For MATs, solar works best when it is planned trust-wide rather than school by school. A centralised approach creates consistency in specification, reporting, and performance while capturing scale advantages.',
          'Solar and storage can reduce electricity costs across the estate and give trust leadership one clear view of generation, savings, and carbon reduction.',
        ],
        benefitsHeading: 'Unifi.id helps MATs deliver:',
        benefits: [
          'Portfolio-wide solar strategy across multiple schools',
          'Trust-level reporting on generation and carbon reduction',
          'Battery storage and EV integration where appropriate',
          'Long-term electricity cost stability',
          'Visible ESG progress across the estate',
          'Improved value through coordinated procurement',
        ],
        closing:
          'For MATs, solar is most powerful when it becomes an estate strategy rather than a collection of one-off projects.',
        challengesHeading: 'Specific Challenges We Address for MAT Solar',
        challenges: [
          {
            title: 'Multi-Site Coordination',
            description:
              'Trusts need a repeatable delivery model across different schools and roof conditions.',
            features: [
              'Portfolio-level planning',
              'Consistent specification standards',
              'Phased trust-wide deployment',
              'Single reporting view',
            ],
          },
          {
            title: 'Centralised Reporting',
            description:
              'Leadership needs simple oversight of generation, savings, and carbon outcomes.',
            features: [
              'Trust-wide dashboards',
              'School-by-school performance comparison',
              'Automated reporting outputs',
              'Clear evidence for trustees and governors',
            ],
          },
          {
            title: 'Procurement and Funding',
            description:
              'Scale should unlock better commercial terms and lower friction.',
            features: [
              'Coordinated funding structures',
              'Standardised delivery process',
              'Improved buying leverage',
              'Reduced implementation overhead',
            ],
          },
        ],
        ctaLabel: 'Discuss Solar for MATs',
      },
      independent: {
        heading: 'Independent Schools: Solar That Supports Reputation and Resilience',
        paragraphs: [
          'Independent schools need projects that reduce operating pressure while reinforcing premium campus standards and sustainability positioning. Solar PV provides visible environmental leadership and long-term electricity cost control.',
          'When paired with storage and smart energy management, it also improves resilience and helps schools show credible progress to parents, governors, and inspectors.',
        ],
        benefitsHeading: 'Unifi.id helps independent schools deliver:',
        benefits: [
          'Visible renewable infrastructure that strengthens sustainability positioning',
          'Long-term electricity price certainty',
          'Battery storage options for resilience and evening use',
          'Reduced operational cost pressure',
          'Support for ESG and stakeholder communications',
          'Integration with wider estate decarbonisation plans',
        ],
        closing:
          'Solar helps independent schools turn underused roof space into a visible long-term asset for both finance and reputation.',
        challengesHeading: 'Specific Challenges We Address for Independent School Solar',
        challenges: [
          {
            title: 'Campus Expectations',
            description:
              'Independent schools need infrastructure that supports premium environments and strong stakeholder confidence.',
            features: [
              'High-quality, discreet system design',
              'Clear sustainability storytelling',
              'Evidence for governors and parents',
              'Long-term estate value creation',
            ],
          },
          {
            title: 'Estate Constraints',
            description:
              'Historic or varied estates need careful feasibility and phased delivery.',
            features: [
              'Building-by-building assessment',
              'Heritage-sensitive planning where required',
              'Phased implementation',
              'Integration with wider estate works',
            ],
          },
          {
            title: 'Operational Resilience',
            description:
              'Schools benefit from systems that do more than just reduce bills.',
            features: [
              'Battery storage for extended self-consumption',
              'Support for EV charging',
              'Monitoring and reporting visibility',
              'Stronger long-term energy resilience',
            ],
          },
        ],
        ctaLabel: 'Discuss Solar for Independent Schools',
      },
      groups: {
        heading: 'School Groups: Portfolio Solar With Clear Estate-Wide Reporting',
        paragraphs: [
          'For school groups and federations, solar becomes more compelling when it is deployed portfolio-wide. It turns a fragmented set of buildings into a coordinated generation strategy with clearer governance and reporting.',
          'That means lower electricity costs, more consistent estate standards, and one view of progress across the whole group.',
        ],
        benefitsHeading: 'Unifi.id helps school groups deliver:',
        benefits: [
          'Portfolio-wide renewable energy strategy',
          'Group-level reporting on savings and carbon reduction',
          'Battery storage and EV integration opportunities',
          'Long-term electricity cost stability',
          'Improved procurement leverage through scale',
          'Visible environmental leadership across the group',
        ],
        closing:
          'Solar gives school groups a practical route to portfolio-wide savings, resilience, and ESG visibility.',
        challengesHeading: 'Specific Challenges We Address for School Group Solar',
        challenges: [
          {
            title: 'Inherited Estate Complexity',
            description:
              'Group operators often inherit buildings with mixed conditions and varying solar suitability.',
            features: [
              'Portfolio screening and feasibility',
              'Prioritised deployment roadmap',
              'Consistent technical standards',
              'Group-wide implementation planning',
            ],
          },
          {
            title: 'Governance and Reporting',
            description:
              'Groups need evidence that savings and carbon outcomes are real and trackable.',
            features: [
              'Centralised dashboards',
              'Site-by-site performance visibility',
              'Clear stakeholder reporting',
              'Evidence for ESG and financial oversight',
            ],
          },
          {
            title: 'Capital Prioritisation',
            description:
              'Portfolio operators need projects that protect capital for other strategic uses.',
            features: [
              'Funded delivery models',
              'Operational savings from day one',
              'Clear long-term energy value',
              'No need for portfolio-wide capital release',
            ],
          },
        ],
        ctaLabel: 'Discuss Solar for School Groups',
      },
    },
  },
  corporate: {
    'smart-sockets': {
      office: {
        heading: 'Office Smart Sockets: Cut Plug-Load Waste Without Disrupting Work',
        paragraphs: [
          'Office buildings are full of small devices that stay on long after teams leave, from monitors and printers to kitchen appliances and desk equipment. Smart sockets make those loads visible and controllable, helping facilities teams cut standby waste without relying on manual routines.',
          'They also create a cleaner stream of data for carbon reporting, giving occupiers and landlords a practical way to show progress against a carbon action plan with minimal disruption.',
        ],
        benefitsHeading: 'Unifi.id helps office buildings deliver:',
        benefits: [
          'Granular control of printers, screens, kitchens, and small-power circuits',
          'Automated shutdown schedules aligned to hybrid occupancy',
          'Real-time consumption data that supports carbon reporting',
          'Fast deployment without major building works',
          'Lower standby costs across shared and demised spaces',
          'Clear evidence of quick-win savings for ESG programmes',
        ],
        closing:
          'For offices, smart sockets turn hidden plug loads into a managed, measurable part of a wider decarbonisation programme.',
        challengesHeading: 'Specific Challenges We Address for Office Smart Sockets',
        challenges: [
          {
            title: 'Hybrid Occupancy',
            description:
              'Empty desks and partially occupied floors still leave a surprising amount of equipment drawing power.',
            features: [
              'Schedules around occupancy patterns',
              'Centralised remote shutoff',
              'Rules for meeting rooms and collaboration zones',
              'Reduced after-hours waste',
            ],
          },
          {
            title: 'Landlord and Tenant Visibility',
            description:
              'Small-power consumption is often poorly understood across shared offices and managed spaces.',
            features: [
              'Device-level consumption insight',
              'Evidence for service-charge conversations',
              'Plug-load baselining by zone',
              'Simple reporting for occupiers',
            ],
          },
          {
            title: 'Quick Wins for Carbon Plans',
            description:
              'Carbon action plans need low-friction projects that show progress quickly.',
            features: [
              'Rapid rollout with minimal disruption',
              'Measurable reductions from day one',
              'Supports wider carbon reporting',
              'Easy proof of concept by floor or site',
            ],
          },
        ],
        ctaLabel: 'Discuss Office Smart Sockets',
      },
      retail: {
        heading: 'Retail Smart Sockets: Control Small Power Without Interrupting Trade',
        paragraphs: [
          'Retail spaces depend on a wide mix of plug-in loads, from display lighting and POS equipment to back-of-house appliances and seasonal merchandising. Smart sockets help operators manage those loads more intelligently, reducing waste without affecting the customer experience.',
          'They are especially useful where long opening hours and dispersed teams make manual shutdown inconsistent and expensive.',
        ],
        benefitsHeading: 'Unifi.id helps retail estates deliver:',
        benefits: [
          'Automated control of non-critical plug loads across stores',
          'Reduced standby consumption during closed hours',
          'Better visibility for carbon reporting and SECR support',
          'Improved control of temporary or seasonal equipment',
          'Faster rollout than larger infrastructure upgrades',
          'Actionable data that protects already-tight margins',
        ],
        closing:
          'For retailers, smart sockets reduce hidden energy waste in ways that are practical, scalable, and easy to evidence.',
        challengesHeading: 'Specific Challenges We Address for Retail Smart Sockets',
        challenges: [
          {
            title: 'Extended Trading Hours',
            description:
              'Retail teams often trade long hours, which makes consistent shutdown routines difficult to enforce.',
            features: [
              'Store-level scheduling by trading pattern',
              'After-hours cutoffs for non-critical devices',
              'Remote overrides when needed',
              'Lower overnight waste',
            ],
          },
          {
            title: 'Seasonal Equipment Changes',
            description:
              'Promotions and layout changes introduce temporary plug loads that are easy to lose track of.',
            features: [
              'Device-level monitoring',
              'Flexible control for temporary displays',
              'Quick reconfiguration by season',
              'Usage comparisons across sites',
            ],
          },
          {
            title: 'Margin Protection',
            description:
              'Retail energy savings need to be tangible, not theoretical.',
            features: [
              'Measured plug-load savings',
              'Real-time consumption data',
              'Clear evidence for sustainability reporting',
              'Prioritised rollout to the highest-waste stores',
            ],
          },
        ],
        ctaLabel: 'Discuss Retail Smart Sockets',
      },
      mixed: {
        heading: 'Mixed-Use Smart Sockets: Manage Diverse Plug Loads in One Estate',
        paragraphs: [
          'Mixed-use developments combine different occupancies, operators, and expectations under one roof, which makes plug-load waste hard to see and even harder to manage. Smart sockets introduce a simple control layer that can flex by tenancy, shared area, and operating schedule.',
          'That makes them ideal for estates that need a low-disruption upgrade with measurable savings and better data.',
        ],
        benefitsHeading: 'Unifi.id helps mixed-use developments deliver:',
        benefits: [
          'Flexible control across shared areas, retail units, and office space',
          'Plug-load visibility that supports transparent carbon reporting',
          'Remote management without intrusive retrofit works',
          'Improved service-charge accountability for shared consumption',
          'Quick-win savings that complement bigger infrastructure upgrades',
          'Data-led prioritisation across complex estates',
        ],
        closing:
          'Smart sockets help mixed-use owners bring consistency and visibility to one of the most fragmented parts of building energy use.',
        challengesHeading: 'Specific Challenges We Address for Mixed-Use Smart Sockets',
        challenges: [
          {
            title: 'Different Occupancy Patterns',
            description:
              'Retail, office, and communal spaces all use energy differently throughout the day.',
            features: [
              'Schedules by space type',
              'Independent control by tenant or zone',
              'Shared-area optimisation',
              'Reduced unmanaged out-of-hours consumption',
            ],
          },
          {
            title: 'Shared Consumption',
            description:
              'Mixed-use operators need clearer evidence of what is being used, where, and by whom.',
            features: [
              'Zone-level plug-load monitoring',
              'Transparent reporting for stakeholders',
              'Service-charge support',
              'Improved estate-wide visibility',
            ],
          },
          {
            title: 'Low-Disruption Delivery',
            description:
              'Busy, occupied developments need quick improvements that do not trigger major works.',
            features: [
              'Fast deployment in live environments',
              'Minimal install disruption',
              'Phased rollouts by building or tenant',
              'Immediate data capture after installation',
            ],
          },
        ],
        ctaLabel: 'Discuss Mixed-Use Smart Sockets',
      },
      hospitality: {
        heading: 'Hospitality Smart Sockets: Reduce Hidden Waste Without Touching Guest Comfort',
        paragraphs: [
          'Hotels, venues, and hospitality spaces often run a surprising amount of small-power equipment around the clock, from back-of-house appliances to front-of-house amenities. Smart sockets help operators cut that hidden waste while keeping guest-facing service exactly where it needs to be.',
          'They also make it easier to identify where plug loads are working against margin and sustainability goals.',
        ],
        benefitsHeading: 'Unifi.id helps hospitality operators deliver:',
        benefits: [
          'Automated control for non-critical guest and back-of-house equipment',
          'Reduced standby energy use during quiet periods',
          'Consumption data that supports carbon reporting',
          'Minimal-disruption rollout in live environments',
          'Better visibility across kitchens, meeting rooms, and amenity spaces',
          'Low-cost wins that support broader decarbonisation plans',
        ],
        closing:
          'For hospitality, smart sockets provide an easy route to savings that stays invisible to guests but visible in the energy data.',
        challengesHeading: 'Specific Challenges We Address for Hospitality Smart Sockets',
        challenges: [
          {
            title: 'Always-On Operations',
            description:
              'Hospitality sites run long hours, which makes unnecessary plug-load use easy to overlook.',
            features: [
              'Time-based control around service periods',
              'Room and amenity scheduling',
              'Reduced overnight standby waste',
              'Remote overrides for operations teams',
            ],
          },
          {
            title: 'Guest Experience Protection',
            description:
              'Efficiency projects must never undermine comfort or service delivery.',
            features: [
              'Control of non-critical devices only',
              'Guest-safe automation rules',
              'Back-of-house prioritisation',
              'Phased deployment with operational sign-off',
            ],
          },
          {
            title: 'Sustainability Expectations',
            description:
              'Operators need measurable actions that support brand claims and reporting.',
            features: [
              'Clear plug-load reporting',
              'Supports wider carbon action plans',
              'Evidence for ESG and certification work',
              'Fast proof of savings across portfolios',
            ],
          },
        ],
        ctaLabel: 'Discuss Hospitality Smart Sockets',
      },
      industrial: {
        heading: 'Industrial Smart Sockets: Bring Small Power Under Control',
        paragraphs: [
          'Industrial sites often focus on heavy equipment first, but offices, welfare areas, charging stations, and ancillary devices still create steady plug-load waste. Smart sockets help facilities teams control those smaller loads without touching critical process equipment.',
          'That makes them a useful complement to larger projects, especially where estates teams want measurable savings and tighter reporting.',
        ],
        benefitsHeading: 'Unifi.id helps industrial facilities deliver:',
        benefits: [
          'Control of ancillary loads across offices, welfare, and support spaces',
          'Reduced standby use outside production hours',
          'Measured data for carbon reporting and SECR support',
          'Quick deployment alongside wider efficiency programmes',
          'Better visibility into overlooked energy use',
          'Low-disruption savings across operational estates',
        ],
        closing:
          'In industrial settings, smart sockets help capture the savings that usually sit outside the spotlight but still add up over time.',
        challengesHeading: 'Specific Challenges We Address for Industrial Smart Sockets',
        challenges: [
          {
            title: 'Overlooked Ancillary Loads',
            description:
              'Support spaces and small-power devices are easy to ignore in complex industrial estates.',
            features: [
              'Monitoring for offices and welfare spaces',
              'Automated shutdown outside shift times',
              'Plug-load baselining',
              'Better estate-wide visibility',
            ],
          },
          {
            title: 'Shift Patterns',
            description:
              'Variable operations make consistent manual shutdown routines unreliable.',
            features: [
              'Schedules by shift pattern',
              'Remote control for supervisors',
              'Reduced out-of-hours waste',
              'Simple exception handling',
            ],
          },
          {
            title: 'Reporting Discipline',
            description:
              'Industrial carbon plans need evidence from every meaningful load category, not just the biggest ones.',
            features: [
              'Measured data for small-power categories',
              'Supports SECR and internal reporting',
              'Evidence for phased decarbonisation',
              'Clear before-and-after comparisons',
            ],
          },
        ],
        ctaLabel: 'Discuss Industrial Smart Sockets',
      },
    },
    heating: {
      office: {
        heading: 'Office Buildings: Deliver Comfort, Cut Costs, Meet ESG Targets',
        paragraphs: [
          'Modern offices are expected to deliver exceptional comfort, operate efficiently, and meet strict ESG standards. Heat pumps, high-efficiency boilers, and smart zoning controls reduce waste while improving tenant experience.',
          'With EPC-style funding and green finance, heating upgrades can be delivered without capital outlay, reducing bills, carbon, and operational friction.',
        ],
        benefitsHeading: 'Unifi.id helps office buildings deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Premium comfort and more precise thermal control',
          'Funded upgrades through EPC and green finance',
          'BREEAM and LEED support',
          'SECR reporting and carbon visibility',
          'Better tenant satisfaction and retention',
        ],
        closing:
          'Whether you operate a single office or a national portfolio, Unifi.id delivers heating solutions that cut costs, reduce carbon, and improve tenant satisfaction.',
        challengesHeading: 'Specific Challenges We Address for Office Buildings',
        challenges: [
          {
            title: 'Multi-Tenant Environments',
            description:
              'Office buildings often need independent zones and transparent cost allocation.',
            features: [
              'Zone-based heating with independent controls',
              'Sub-metering for tenant billing',
              'BMS integration for central management',
              'Tenant-facing dashboards',
            ],
          },
          {
            title: 'ESG & Carbon Reporting',
            description:
              'Landlords need heating systems that support real carbon reporting rather than estimates.',
            features: [
              'Real-time carbon tracking via Cortex',
              'SECR-aligned reporting',
              'BREEAM and LEED support',
              'Audit-ready documentation',
            ],
          },
          {
            title: 'Tenant Retention & Satisfaction',
            description:
              'Comfort issues quickly become leasing and reputation issues in modern offices.',
            features: [
              'Precise temperature control by zone',
              'Fast response to heating requirements',
              'Quiet, efficient operation',
              'Integration with smart building systems',
            ],
          },
        ],
        ctaLabel: 'Discuss Office Heating',
      },
      retail: {
        heading: 'Retail: Deliver Comfort, Cut Costs, Enhance Customer Experience',
        paragraphs: [
          'Retail environments need reliable, efficient heating to support customer comfort, staff wellbeing, and product environments. Modern HVAC systems cut waste while supporting broader sustainability goals.',
          'Funded upgrades mean retail operators can modernise without capital outlay and start protecting margins through lower energy consumption.',
        ],
        benefitsHeading: 'Unifi.id helps retail estates deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Consistent comfort for customers and staff',
          'Funded upgrades through EPC and green finance',
          'BREEAM support and better sustainability positioning',
          'Automated carbon reporting for SECR',
          'Improved customer experience and brand perception',
        ],
        closing:
          'Whether you operate a single store or a national chain, Unifi.id delivers heating solutions that reduce cost and improve customer experience.',
        challengesHeading: 'Specific Challenges We Address for Retail',
        challenges: [
          {
            title: 'Variable Occupancy & Trading Hours',
            description:
              'Retail demand shifts throughout the day and across seasons.',
            features: [
              'Occupancy-based controls',
              'Automated schedules around trading hours',
              'Rapid warm-up for opening times',
              'Night setback to reduce waste',
            ],
          },
          {
            title: 'Large, Open Spaces',
            description:
              'Open-plan retail space is difficult to heat evenly and efficiently.',
            features: [
              'Zoned heating for different areas',
              'Radiant approaches for larger spaces',
              'Air curtains to reduce entrance losses',
              'Integrated ventilation strategies',
            ],
          },
          {
            title: 'Brand Reputation & Sustainability',
            description:
              'Retail brands are increasingly judged on visible environmental performance.',
            features: [
              '40-60% reduction in heating emissions',
              'BREEAM and SECR support',
              'Customer-facing sustainability messaging',
              'Integration with ESG reporting',
            ],
          },
        ],
        ctaLabel: 'Discuss Retail Heating',
      },
      mixed: {
        heading: 'Mixed-Use: Deliver Flexible Heating Across Diverse Spaces',
        paragraphs: [
          'Mixed-use developments combine residential, commercial, and retail spaces that all have different thermal patterns and service expectations. Smart heating systems create flexibility without multiplying complexity.',
          'Funded delivery helps owners modernise these environments without capital outlay while improving comfort, compliance, and cost control.',
        ],
        benefitsHeading: 'Unifi.id helps mixed-use developments deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Flexible zoning across residential, retail, and commercial areas',
          'Funded upgrades through EPC and green finance',
          'BREEAM and LEED support',
          'Automated carbon reporting for SECR',
          'Improved occupier satisfaction across the site',
        ],
        closing:
          'Unifi.id helps mixed-use developments deliver flexible heating, lower costs, and full regulatory support across diverse spaces.',
        challengesHeading: 'Specific Challenges We Address for Mixed-Use Developments',
        challenges: [
          {
            title: 'Diverse Heating Demands',
            description:
              'Different occupancies require different controls, schedules, and comfort outcomes.',
            features: [
              'Independent control by space type',
              'Flexible scheduling',
              'Sub-metering and allocation support',
              'Integration with building-wide BMS',
            ],
          },
          {
            title: 'Complex Metering & Billing',
            description:
              'Owners need transparent energy allocation across multiple occupier types.',
            features: [
              'Sub-metering for each tenant or zone',
              'Automated billing integration',
              'Tenant-facing dashboards',
              'Clear cost allocation visibility',
            ],
          },
          {
            title: 'Regulatory Compliance',
            description:
              'Mixed-use sites must support multiple compliance frameworks at once.',
            features: [
              'Building Regulations Part L alignment',
              'EPC improvement support',
              'BREEAM and LEED compatibility',
              'Audit-ready documentation',
            ],
          },
        ],
        ctaLabel: 'Discuss Mixed-Use Heating',
      },
      hospitality: {
        heading: 'Hospitality: Deliver Premium Comfort, Cut Costs, Enhance Guest Experience',
        paragraphs: [
          'Hotels, resorts, and hospitality venues need heating that supports guest expectations every hour of the day. Modern HVAC reduces waste while protecting service quality, ratings, and profitability.',
          'With funded delivery, hospitality operators can modernise without capital outlay and turn lower energy use into stronger operating margins.',
        ],
        benefitsHeading: 'Unifi.id helps hospitality estates deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Premium comfort for guests and staff',
          'Funded upgrades through EPC and green finance',
          'Support for BREEAM, Green Key, and SECR',
          'Automated carbon reporting',
          'Higher guest satisfaction through better comfort',
        ],
        closing:
          'Unifi.id helps hospitality operators deliver premium comfort, lower cost, and stronger sustainability positioning.',
        challengesHeading: 'Specific Challenges We Address for Hospitality',
        challenges: [
          {
            title: '24/7 Operation & Guest Expectations',
            description:
              'Guest comfort cannot be compromised, even when operating patterns vary.',
            features: [
              'Dual-source heating where needed',
              'Room-by-room temperature control',
              'Rapid response to guest needs',
              'Remote monitoring and predictive maintenance',
            ],
          },
          {
            title: 'Variable Occupancy',
            description:
              'Occupancy changes quickly by season, day, and event schedule.',
            features: [
              'Occupancy-based heating controls',
              'Scheduling by room status',
              'Night setback for unused spaces',
              'Integration with PMS workflows',
            ],
          },
          {
            title: 'Brand Reputation & Sustainability',
            description:
              'Hospitality brands increasingly compete on visible sustainability as well as service.',
            features: [
              '40-60% reduction in heating emissions',
              'Green Key and SECR support',
              'Guest-facing sustainability messaging',
              'Integration with ESG reporting',
            ],
          },
        ],
        ctaLabel: 'Discuss Hospitality Heating',
      },
      industrial: {
        heading: 'Industrial: Deliver Reliable Heating, Cut Costs, Meet Compliance',
        paragraphs: [
          'Industrial facilities need reliable heating to protect workers, equipment, and operational continuity. Modern systems reduce energy intensity while supporting health and safety requirements.',
          'Funded upgrades help industrial operators modernise without capital outlay and keep resources focused on core operations.',
        ],
        benefitsHeading: 'Unifi.id helps industrial facilities deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Reliable performance for workers and equipment',
          'Funded upgrades through EPC and green finance',
          'BREEAM support and stronger reporting',
          'Automated carbon visibility for SECR',
          'Improved safety and productivity through better comfort',
        ],
        closing:
          'Whether you run a single warehouse or a wider estate, Unifi.id delivers reliable heating that cuts cost and improves compliance.',
        challengesHeading: 'Specific Challenges We Address for Industrial Facilities',
        challenges: [
          {
            title: 'Large, Open Spaces',
            description:
              'High ceilings and wide spans make efficient industrial heating difficult.',
            features: [
              'Radiant heating for larger spaces',
              'Destratification strategies',
              'Zoned heating by work area',
              'High-efficiency infrared options',
            ],
          },
          {
            title: 'Process Heating & Equipment Protection',
            description:
              'Some areas need stable conditions to protect equipment and support production.',
            features: [
              'Dual-source redundancy',
              'Automated temperature control',
              'Integration with process monitoring',
              'Backup heating for critical areas',
            ],
          },
          {
            title: 'Health & Safety Compliance',
            description:
              'Industrial environments need comfort and compliance without operational disruption.',
            features: [
              'HSE-aligned temperature standards',
              'Safe surface temperature strategies',
              'Commissioning and performance testing',
              'Audit-ready documentation',
            ],
          },
        ],
        ctaLabel: 'Discuss Industrial Heating',
      },
    },
    solar: {
      office: {
        heading: 'On-Site Solar Generation. Energy Independence. Carbon Reduction.',
        paragraphs: [
          'Office buildings with suitable roof space can generate significant on-site renewable energy through solar PV. Combined with battery storage and smart energy management, this reduces grid dependence while cutting costs and carbon emissions.',
          'Solar also delivers predictable energy costs over 25+ years while strengthening ESG credentials and building value.',
        ],
        benefitsHeading: 'Unifi.id helps office buildings deliver:',
        benefits: [
          'Fully funded solar PV with battery storage and smart energy management',
          'Cashflow-positive projects generating immediate savings',
          'Significant on-site renewable generation reducing grid dependence',
          'Enhanced ESG performance and green building credentials',
          '25+ year asset life with long-term value',
        ],
        closing:
          'This is not just about solar panels. It is about energy independence and long-term sustainability that enhances asset value.',
        challengesHeading: 'Office Building Solar Challenges We Address',
        challenges: [
          {
            title: 'Capital Intensity',
            description:
              'Solar installations offer strong returns but often stall because of upfront investment.',
            features: [
              'Fully funded solution with no capital requirement',
              'Immediate energy savings from day one',
              'Long-term predictable energy costs',
            ],
          },
          {
            title: 'Grid Dependence',
            description:
              'Rising electricity costs make on-site generation increasingly strategic.',
            features: [
              'Significant on-site generation reducing imports',
              'Battery storage maximising self-consumption',
              'Protection from future price volatility',
            ],
          },
          {
            title: 'ESG & Tenant Expectations',
            description:
              'Tenants and investors increasingly expect credible renewable infrastructure.',
            features: [
              'Visible commitment to renewable energy',
              'Enhanced green building certifications',
              'Competitive advantage in tenant attraction',
            ],
          },
        ],
        ctaLabel: 'Discuss Office Solar',
      },
      retail: {
        heading: 'Retail Solar Solutions. Reduce Operating Costs. Demonstrate Sustainability.',
        paragraphs: [
          'Retail properties often combine large roof areas with daytime demand profiles that suit solar especially well. That means more self-consumption, lower grid imports, and clearer savings during expensive operating periods.',
          'Solar also provides visible evidence of sustainability commitment for both corporate reporting and customer perception.',
        ],
        benefitsHeading: 'Unifi.id helps retail properties deliver:',
        benefits: [
          'Fully funded solar installations tuned to retail operating patterns',
          'Maximised self-consumption during trading hours',
          'Immediate cost savings with cashflow-positive delivery',
          'Enhanced corporate sustainability credentials',
          'Long-term energy cost predictability',
        ],
        closing:
          'This is about more than generation. It is about protecting margins while demonstrating sustainability leadership.',
        challengesHeading: 'Retail Solar Challenges We Address',
        challenges: [
          {
            title: 'High Daytime Energy Use',
            description:
              'Retail activity often aligns strongly with solar generation profiles.',
            features: [
              'High self-consumption during trading hours',
              'Reduced peak-rate grid imports',
              'Battery storage optimising usage patterns',
            ],
          },
          {
            title: 'Large Roof Areas',
            description:
              'Many retail buildings have substantial unshaded roof space ideal for solar.',
            features: [
              'Maximised generation from available space',
              'Strong return on roof area',
              'Meaningful share of on-site electricity needs',
            ],
          },
          {
            title: 'Sustainability Visibility',
            description:
              'Solar offers an unusually visible proof point for environmental commitment.',
            features: [
              'Clear demonstration of commitment',
              'Enhanced corporate reporting credentials',
              'Positive consumer perception',
            ],
          },
        ],
        ctaLabel: 'Discuss Retail Solar',
      },
      mixed: {
        heading: 'Integrated Solar Solutions for Mixed-Use Developments.',
        paragraphs: [
          'Mixed-use developments combine residential, retail, office, and leisure demand under one roof. Solar and storage create one renewable strategy that can serve all zones while making the most of large roof and parking areas.',
          'The mix of occupancies can actually improve outcomes by creating complementary demand curves that increase self-consumption and battery value.',
        ],
        benefitsHeading: 'Unifi.id helps mixed-use developments deliver:',
        benefits: [
          'Unified renewable strategy across residential, retail, and commercial zones',
          'Smart allocation that optimises self-consumption',
          'Enhanced development value and marketability',
          'Large-scale solar capacity across roof and parking areas',
          'Complementary demand profiles that improve storage performance',
          'Visible green credentials for commercial and residential occupiers',
        ],
        closing:
          'This is about creating an integrated energy ecosystem that serves all development uses efficiently.',
        challengesHeading: 'Mixed-Use Solar Challenges We Address',
        challenges: [
          {
            title: 'Complex Energy Profiling',
            description:
              'Different zones have very different consumption patterns, making optimisation more complex.',
            features: [
              'Integrated solar and storage across all zones',
              'Real-time optimisation based on demand',
              'Unified visibility across residential and commercial areas',
            ],
          },
          {
            title: 'Development Value',
            description:
              'Renewable infrastructure increasingly affects marketability and occupier appeal.',
            features: [
              'Visible evidence of genuine environmental commitment',
              'Appeal to ESG-focused commercial tenants',
              'Lower energy costs that improve residential appeal',
            ],
          },
          {
            title: 'Management Complexity',
            description:
              'Multiple stakeholders and charge structures make deployment harder than in single-use buildings.',
            features: [
              'Single integrated platform across the development',
              'Clear allocation of costs and savings',
              'Fully funded model that removes capital coordination challenges',
            ],
          },
        ],
        ctaLabel: 'Discuss Mixed-Use Solar',
      },
      hospitality: {
        heading: 'Solar Power for Hospitality. Sustainability. Guest Appeal.',
        paragraphs: [
          'Hotels, resorts, and leisure facilities carry high energy demand across HVAC, hot water, catering, and shared spaces. Solar and storage help reduce operating costs while supporting guest-facing sustainability expectations.',
          'Battery-backed systems also improve resilience and allow more renewable energy to support evening and night-time demand.',
        ],
        benefitsHeading: 'Unifi.id helps hospitality properties deliver:',
        benefits: [
          '24/7 operations optimised with solar generation and battery storage',
          'Reduced operating costs that directly improve margins',
          'Enhanced guest appeal through visible sustainability commitment',
          'Battery-backed resilience that protects service continuity',
          'Competitive advantage in ESG-aware markets',
          'Stabilised energy costs over time',
        ],
        closing:
          'This is about more than renewable energy. It is about enhancing guest appeal while protecting margins.',
        challengesHeading: 'Hospitality Solar Challenges We Address',
        challenges: [
          {
            title: '24/7 Operations',
            description:
              'Continuous hospitality demand makes cost control difficult but also creates strong value for well-managed storage.',
            features: [
              'Solar during high-consumption daytime operations',
              'Battery storage for evening peaks',
              'Smart energy management that protects service quality',
            ],
          },
          {
            title: 'Guest Experience',
            description:
              'Modern travellers increasingly care about visible and credible sustainability.',
            features: [
              'Visible solar installations as green proof points',
              'Appeal to ESG-conscious corporate clients',
              'Differentiation in competitive markets',
            ],
          },
          {
            title: 'Operating Cost Control',
            description:
              'Energy is a major operating cost in hospitality and directly affects profit.',
            features: [
              'Reduced grid purchases',
              'More predictable energy costs',
              'Savings that flow directly to bottom-line performance',
            ],
          },
        ],
        ctaLabel: 'Discuss Hospitality Solar',
      },
      industrial: {
        heading: 'Industrial-Scale Solar for Manufacturing and Logistics.',
        paragraphs: [
          'Industrial facilities are often ideal solar candidates because they combine large roofs with heavy daytime electricity demand. Solar can offset a meaningful share of consumption while supporting supply-chain ESG expectations.',
          'At this scale, solar and storage become both an operational cost-control tool and a strategic signal to customers and stakeholders.',
        ],
        benefitsHeading: 'Unifi.id helps industrial facilities deliver:',
        benefits: [
          'Large roof areas that enable substantial generation',
          'Strong alignment between production schedules and solar output',
          'Significant absolute cost reduction on high-consumption sites',
          'Renewable credentials that support supply chain expectations',
          'Battery storage that maximises time-shifting and peak avoidance',
          'Scope 1 and 2 reduction that demonstrates climate leadership',
        ],
        closing:
          'This is about maintaining competitiveness while reducing both operational cost and carbon exposure.',
        challengesHeading: 'Industrial Solar Challenges We Address',
        challenges: [
          {
            title: 'Scale of Investment',
            description:
              'Industrial-scale systems can require major upfront capital without the right funding model.',
            features: [
              'Fully funded deployment',
              'Cost savings from day one',
              'Capital preserved for core operations and growth',
            ],
          },
          {
            title: 'Production Requirements',
            description:
              'Renewable systems must support, not compromise, operational reliability.',
            features: [
              'Systems matched to production energy profiles',
              'Battery storage for backup and peak support',
              'Grid connection retained for assurance',
            ],
          },
          {
            title: 'Corporate Sustainability',
            description:
              'Customers increasingly expect real progress on emissions and renewable adoption.',
            features: [
              'Direct Scope 2 reduction from on-site generation',
              'Stronger supply-chain position',
              'Transparent reporting to stakeholders',
            ],
          },
        ],
        ctaLabel: 'Discuss Industrial Solar',
      },
    },
  },
  public: {
    'smart-sockets': {
      local: {
        heading: 'Local Authorities: Tackle Hidden Plug-Load Waste Across Public Buildings',
        paragraphs: [
          'Council offices, libraries, leisure facilities, and community buildings all carry small-power loads that are easy to overlook but expensive to leave unmanaged. Smart sockets help local authorities reduce that waste without major works or disruption to public access.',
          'They also provide useful evidence for climate action updates, estate reporting, and budget conversations.',
        ],
        benefitsHeading: 'Unifi.id helps local authorities deliver:',
        benefits: [
          'Automated control of non-critical plug loads across public buildings',
          'Reduced standby use during evenings, weekends, and closures',
          'Better data for carbon reporting and climate action updates',
          'Low-disruption rollout across varied estates',
          'Quick-win savings that protect public budgets',
          'Simple controls for estates and facilities teams',
        ],
        closing:
          'For local authorities, smart sockets offer a practical and visible way to reduce hidden waste across diverse estates.',
        challengesHeading: 'Specific Challenges We Address for Local Authority Smart Sockets',
        challenges: [
          {
            title: 'Diverse Estate Types',
            description:
              'Councils manage many different buildings, each with different usage patterns and plug-load profiles.',
            features: [
              'Flexible scheduling by building type',
              'Remote control across multiple sites',
              'Consistent estate-wide standards',
              'Phased rollout by priority',
            ],
          },
          {
            title: 'Limited Budgets',
            description:
              'Quick, measurable savings matter when estates teams are under financial pressure.',
            features: [
              'Low-disruption delivery',
              'Fast evidence of savings',
              'Reduced out-of-hours waste',
              'Better use of existing budgets',
            ],
          },
          {
            title: 'Climate Accountability',
            description:
              'Public bodies need measurable progress they can explain clearly to leadership and communities.',
            features: [
              'Trackable small-power reductions',
              'Useful evidence for reporting',
              'Supports climate action plans',
              'Clear before-and-after comparisons',
            ],
          },
        ],
        ctaLabel: 'Discuss Local Authority Smart Sockets',
      },
      nhs: {
        heading: 'NHS & Health: Reduce Everyday Plug-Load Waste Without Affecting Care',
        paragraphs: [
          'Healthcare buildings use a wide range of plug-in equipment across offices, staff areas, support spaces, and non-clinical rooms. Smart sockets help trusts control those non-critical loads more effectively while keeping clinical operations protected.',
          'They also add useful detail to carbon reporting, helping estates teams evidence smaller operational wins alongside larger plant upgrades.',
        ],
        benefitsHeading: 'Unifi.id helps NHS and health estates deliver:',
        benefits: [
          'Control of non-clinical and support-area plug loads',
          'Reduced standby waste in admin, welfare, and shared spaces',
          'Low-disruption rollout across live healthcare estates',
          'Better small-power evidence for carbon reporting',
          'Quick-win savings that support stretched care budgets',
          'Simple rules that protect critical operations',
        ],
        closing:
          'For NHS and health estates, smart sockets help reduce hidden waste while keeping the focus on safe, uninterrupted care.',
        challengesHeading: 'Specific Challenges We Address for NHS & Health Smart Sockets',
        challenges: [
          {
            title: 'Operational Continuity',
            description:
              'Healthcare sites cannot risk efficiency measures interfering with critical services.',
            features: [
              'Control limited to non-critical loads',
              'Clear approval and exception rules',
              'Safe phased deployment',
              'Minimal impact on live environments',
            ],
          },
          {
            title: '24/7 Estates',
            description:
              'Round-the-clock use makes unmanaged support-area loads expensive over time.',
            features: [
              'Schedules around real occupancy',
              'Remote monitoring and control',
              'Reduced overnight standby waste',
              'Simple estate-team oversight',
            ],
          },
          {
            title: 'Reporting Pressure',
            description:
              'Trusts need evidence of progress that goes beyond major infrastructure alone.',
            features: [
              'Measured small-power data',
              'Supports carbon action planning',
              'Useful for trust reporting',
              'Clearer evidence of quick wins',
            ],
          },
        ],
        ctaLabel: 'Discuss NHS Smart Sockets',
      },
      gov: {
        heading: 'Government: Bring Small-Power Use Into View',
        paragraphs: [
          'Government buildings often contain a large amount of everyday plug-in equipment spread across offices, meeting spaces, and support areas. Smart sockets help teams control those loads more consistently while showing visible operational action behind policy commitments.',
          'They are a practical way to reduce waste, improve carbon reporting, and support wider estate efficiency programmes.',
        ],
        benefitsHeading: 'Unifi.id helps government estates deliver:',
        benefits: [
          'Automated control for non-critical office and support-area devices',
          'Reduced after-hours and weekend standby consumption',
          'Better evidence for carbon reporting and public accountability',
          'Low-disruption installation in occupied buildings',
          'Measured quick wins that support wider estate plans',
          'Simple estate-wide scheduling and oversight',
        ],
        closing:
          'For government buildings, smart sockets turn hidden small-power use into a measurable part of estate performance.',
        challengesHeading: 'Specific Challenges We Address for Government Smart Sockets',
        challenges: [
          {
            title: 'Distributed Office Loads',
            description:
              'Large government offices often have many small loads spread across multiple teams and spaces.',
            features: [
              'Control by room or zone',
              'Remote shutdown routines',
              'Reduced unmanaged out-of-hours use',
              'Scalable rollout by building',
            ],
          },
          {
            title: 'Need for Visible Delivery',
            description:
              'Efficiency action needs to be measurable and easy to explain to leadership.',
            features: [
              'Trackable savings data',
              'Supports carbon action updates',
              'Useful reporting outputs',
              'Clear operational evidence',
            ],
          },
          {
            title: 'Low-Disruption Requirement',
            description:
              'Occupied government buildings need quick improvements that avoid major project overhead.',
            features: [
              'Fast deployment approach',
              'Minimal building disruption',
              'Phased rollout planning',
              'Quick proof of value',
            ],
          },
        ],
        ctaLabel: 'Discuss Government Smart Sockets',
      },
      emergency: {
        heading: 'Emergency Services: Control Non-Critical Loads Without Compromising Readiness',
        paragraphs: [
          'Emergency services estates need operational resilience first, but they still carry a large amount of non-critical plug-load waste across offices, welfare areas, and support spaces. Smart sockets help services reduce that waste while protecting readiness and avoiding disruption to frontline operations.',
          'They also provide useful evidence for public-sector carbon reporting and climate commitments.',
        ],
        benefitsHeading: 'Unifi.id helps emergency services deliver:',
        benefits: [
          'Control of support-area and admin plug loads',
          'Reduced standby use during quieter operational periods',
          'Low-disruption rollout across stations and depots',
          'Better evidence for carbon reporting and governance',
          'Measured quick wins that protect frontline budgets',
          'Simple oversight for estates and operations teams',
        ],
        closing:
          'For emergency services, smart sockets reduce hidden waste in the background while operational readiness stays front and centre.',
        challengesHeading: 'Specific Challenges We Address for Emergency Services Smart Sockets',
        challenges: [
          {
            title: 'Readiness Comes First',
            description:
              'Efficiency measures cannot interfere with operational equipment or response capability.',
            features: [
              'Non-critical-load focus only',
              'Clear operational exceptions',
              'Safe rollout planning',
              'Remote control where appropriate',
            ],
          },
          {
            title: 'Mixed Building Use',
            description:
              'Stations combine operational, admin, welfare, and accommodation spaces with different energy patterns.',
            features: [
              'Schedules by zone type',
              'Flexible controls for support spaces',
              'Reduced out-of-hours waste',
              'Better visibility across sites',
            ],
          },
          {
            title: 'Need for Measurable Value',
            description:
              'Public-sector estates need clear proof that operational savings are real.',
            features: [
              'Trackable savings by site',
              'Useful carbon reporting evidence',
              'Supports climate action updates',
              'Clear before-and-after reporting',
            ],
          },
        ],
        ctaLabel: 'Discuss Emergency Service Smart Sockets',
      },
    },
    heating: {
      local: {
        heading: 'Local Authorities: Cut Heating Costs, Meet Carbon Targets, Deliver Compliance',
        paragraphs: [
          'Local authorities manage diverse estates across civic buildings, libraries, leisure centres, and housing. Modern heating systems help councils reduce waste, control costs, and support local climate commitments.',
          'With funding from Salix, PSDS, and regional schemes, heating can be modernised without capital outlay while improving comfort and reporting.',
        ],
        benefitsHeading: 'Unifi.id helps local authorities deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Funded upgrades through Salix and PSDS',
          'Lower maintenance costs and fewer breakdowns',
          'Climate emergency reporting support',
          'Building Regulations Part L alignment',
          'Centralised carbon reporting across the estate',
        ],
        closing:
          'Whether you operate civic buildings, leisure centres, or social housing, Unifi.id delivers heating solutions that cut costs and support compliance without capital outlay.',
        challengesHeading: 'Specific Challenges We Address for Local Authorities',
        challenges: [
          {
            title: 'Diverse Building Types',
            description:
              'Councils need one delivery partner that can work across many asset types.',
            features: [
              'Precise control across diverse estates',
              'Heat pumps sized to building type',
              'Integration with existing infrastructure',
              'Phased rollout to minimise disruption',
            ],
          },
          {
            title: 'Capital Constraints & Budget Pressures',
            description:
              'Capital is scarce and often under pressure from competing service demands.',
            features: [
              'Funded solutions through Salix, PSDS, and regional grants',
              'Cashflow-neutral terms',
              'EPC-style delivery where appropriate',
              'No upfront capital requirement',
            ],
          },
          {
            title: 'Climate Emergency Targets',
            description:
              'Councils need real reductions and credible evidence, not estimated progress.',
            features: [
              '40-60% reduction in heating emissions',
              'Real-time carbon tracking via Cortex',
              'Support for local climate targets',
              'Audit-ready reporting documentation',
            ],
          },
        ],
        ctaLabel: 'Discuss Local Authority Heating',
      },
      nhs: {
        heading: 'NHS & Health: Deliver Reliable Heating, Meet HTM Standards, Cut Costs',
        paragraphs: [
          'Healthcare buildings need reliable 24/7 heating that supports patient safety, staff performance, and infection-control requirements. Modern systems cut waste while helping trusts align to NHS Net Zero goals.',
          'With funded delivery, NHS estates teams can modernise without capital outlay and protect care budgets from rising energy spend.',
        ],
        benefitsHeading: 'Unifi.id helps NHS and health estates deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          '24/7 reliability for critical facilities',
          'Funded upgrades through Salix, PSDS, and NHS capital pathways',
          'HTM-aligned compliance support',
          'NHS Net Zero reporting support',
          'Lower maintenance costs and longer equipment life',
        ],
        closing:
          'Whether you operate a clinic or a major hospital, Unifi.id delivers heating solutions that cut costs, reduce carbon, and support HTM compliance without capital outlay.',
        challengesHeading: 'Specific Challenges We Address for NHS & Health',
        challenges: [
          {
            title: '24/7 Operation & Patient Safety',
            description:
              'Healthcare heating cannot fail without affecting patient care and operational risk.',
            features: [
              'Dual-source redundancy where needed',
              'Remote monitoring and predictive maintenance',
              '24/7 technical support pathways',
              'Backup heating for critical zones',
            ],
          },
          {
            title: 'HTM Standards & Infection Control',
            description:
              'Heating and ventilation must align to exacting healthcare standards.',
            features: [
              'HTM-aligned ventilation support',
              'Precise control for clinical areas',
              'Integration with air filtration systems',
              'Commissioning and performance testing',
            ],
          },
          {
            title: 'NHS Net Zero Targets',
            description:
              'Trusts need measurable reductions with auditable evidence.',
            features: [
              '40-60% reduction in heating emissions',
              'Real-time carbon tracking',
              'Alignment with NHS Net Zero goals',
              'Audit-ready reporting',
            ],
          },
        ],
        ctaLabel: 'Discuss NHS Heating',
      },
      gov: {
        heading: 'Government: Cut Heating Costs, Meet Net Zero Targets, Deliver Compliance',
        paragraphs: [
          'Government buildings must lead by example while operating under heavy scrutiny on budgets and delivery. Modern heating systems reduce carbon, improve comfort, and support estate-wide compliance.',
          'Funded delivery allows departments to modernise without capital outlay or lengthy approval cycles.',
        ],
        benefitsHeading: 'Unifi.id helps government estates deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          'Funded upgrades through Salix and PSDS',
          'Lower maintenance costs and fewer failures',
          'Government Net Zero reporting support',
          'Building Regulations Part L alignment',
          'Centralised carbon reporting via Cortex',
        ],
        closing:
          'Whether you operate administrative offices, public facilities, or heritage sites, Unifi.id delivers heating solutions that cut costs and support net zero delivery without capital outlay.',
        challengesHeading: 'Specific Challenges We Address for Government',
        challenges: [
          {
            title: 'Historic & Listed Buildings',
            description:
              'Many government buildings have heritage constraints that shape what can be installed and where.',
            features: [
              'Internal plant solutions',
              'Ground source options where suitable',
              'Retrofits compatible with older systems',
              'Support with conservation approvals',
            ],
          },
          {
            title: 'Capital Constraints & Funding Cycles',
            description:
              'Long funding cycles and competing priorities often delay otherwise viable projects.',
            features: [
              'Funded delivery through Salix and PSDS',
              'Cashflow-neutral structures',
              'EPC pathways where relevant',
              'No capital outlay required',
            ],
          },
          {
            title: 'Government Net Zero Targets',
            description:
              'Departments need measurable progress that stands up to scrutiny.',
            features: [
              '40-60% reduction in heating emissions',
              'Real-time carbon tracking via Cortex',
              'Support for Net Zero reporting',
              'Audit-ready documentation',
            ],
          },
        ],
        ctaLabel: 'Discuss Government Heating',
      },
      emergency: {
        heading: 'Emergency Services: Deliver Reliable Heating, Meet Compliance, Cut Costs',
        paragraphs: [
          'Emergency services require reliable heating around the clock to protect readiness, safety, and staff welfare. Modern systems reduce waste while supporting operational continuity and public-sector carbon goals.',
          'Funded upgrades help fire, police, and ambulance estates modernise without capital outlay while protecting frontline budgets.',
        ],
        benefitsHeading: 'Unifi.id helps emergency services deliver:',
        benefits: [
          '40-60% reduction in heating energy use',
          '24/7 reliability for operational readiness',
          'Funded upgrades through Salix and PSDS',
          'Building Regulations Part L alignment',
          'Carbon reduction reporting support',
          'Lower maintenance costs and longer equipment life',
        ],
        closing:
          'Whether you operate fire stations, police stations, or ambulance depots, Unifi.id delivers reliable heating that cuts cost and supports compliance without capital outlay.',
        challengesHeading: 'Specific Challenges We Address for Emergency Services',
        challenges: [
          {
            title: '24/7 Operation & Readiness',
            description:
              'Blue-light buildings need dependable heating regardless of time, weather, or callout pattern.',
            features: [
              'Dual-source redundancy',
              'Remote monitoring and predictive maintenance',
              '24/7 technical support',
              'Backup heating for critical areas',
            ],
          },
          {
            title: 'Rapid Warm-Up',
            description:
              'Some facilities, especially fire stations, lose heat quickly and need fast recovery.',
            features: [
              'High-output heating for appliance bays',
              'Air curtains to reduce heat loss',
              'Automated warm-up after door closure',
              'Zoned heating for offices and living quarters',
            ],
          },
          {
            title: 'Budget Constraints & Compliance',
            description:
              'Infrastructure investment must support operational readiness without draining frontline resources.',
            features: [
              'Funded delivery structures',
              'Building Regulations Part L support',
              'No capital outlay required',
              'Clear carbon and savings reporting',
            ],
          },
        ],
        ctaLabel: 'Discuss Emergency Service Heating',
      },
    },
    solar: {
      local: {
        heading: 'On-Site Renewable Generation. Energy Independence. Climate Action.',
        paragraphs: [
          'Local authority buildings with suitable roof space can generate substantial on-site renewable energy through solar PV. That reduces grid dependence, cuts operating costs, and demonstrates climate action to constituents.',
          'Combined with battery storage, solar also improves resilience and creates more predictable energy costs for pressured public budgets.',
        ],
        benefitsHeading: 'Unifi.id helps local authorities deliver:',
        benefits: [
          'Fully funded solar PV across council estates',
          'On-site generation that reduces grid dependence and costs',
          'Cashflow-positive delivery with immediate operational savings',
          'Significant carbon reduction supporting net zero commitments',
          'Visible climate leadership for communities',
        ],
        closing:
          'This is not just about solar panels. It is about energy independence and climate leadership that protects public budgets.',
        challengesHeading: 'Local Authority Solar Challenges We Address',
        challenges: [
          {
            title: 'Capital Constraints',
            description:
              'Strong business cases still stall when capital budgets are not available.',
            features: [
              'Fully funded solution with no capital requirement',
              'Immediate savings that protect service budgets',
              '25+ year asset life with long-term value',
            ],
          },
          {
            title: 'Energy Cost Volatility',
            description:
              'Unpredictable grid costs make annual budget planning harder than it should be.',
            features: [
              'On-site generation providing cost stability',
              'Battery storage maximising self-consumption',
              'Protection from future price rises',
            ],
          },
          {
            title: 'Climate Accountability',
            description:
              'Councils need visible progress toward net zero rather than abstract commitments.',
            features: [
              'Visible renewable infrastructure',
              'Measurable carbon reduction',
              'Clear public-facing climate action',
            ],
          },
        ],
        ctaLabel: 'Discuss Local Authority Solar',
      },
      nhs: {
        heading: 'NHS Solar Generation. Reduced Costs. Enhanced Resilience.',
        paragraphs: [
          'Healthcare buildings consume significant energy during the day, making them strong candidates for solar PV paired with battery storage. That creates savings while supporting NHS net zero commitments and operational resilience.',
          'For estates teams, reducing grid dependence means more resources can stay focused on patient care rather than utility spend.',
        ],
        benefitsHeading: 'Unifi.id helps NHS organisations deliver:',
        benefits: [
          'Fully funded solar installations across healthcare facilities',
          'Enhanced resilience for critical 24/7 operations',
          'Cashflow-positive projects that protect care budgets',
          'Significant carbon reduction for NHS net zero goals',
          'Battery storage for backup capability',
        ],
        closing:
          'This is about protecting patient care budgets while strengthening operational resilience with clean generation.',
        challengesHeading: 'Healthcare Solar Challenges We Address',
        challenges: [
          {
            title: 'High Energy Demand',
            description:
              'Healthcare estates have heavy daytime loads that make solar especially valuable.',
            features: [
              'Significant daytime self-consumption',
              'Reduced grid imports during expensive periods',
              'Savings redirected to care delivery',
            ],
          },
          {
            title: 'Energy Resilience Critical',
            description:
              'Clinical operations need dependable power and reduced vulnerability to grid disruption.',
            features: [
              'Battery storage that enhances resilience',
              'Backup capability during outages',
              'Reduced dependence on grid infrastructure',
            ],
          },
          {
            title: 'NHS Net Zero Commitment',
            description:
              'Trusts need credible renewable progress that stands up to scrutiny.',
            features: [
              'On-site renewable generation',
              'Measurable emissions reduction',
              'Demonstrable net zero progress',
            ],
          },
        ],
        ctaLabel: 'Discuss NHS Solar',
      },
      gov: {
        heading: 'Government Solar Leadership. Policy into Practice.',
        paragraphs: [
          'Government buildings need renewable infrastructure that demonstrates visible net zero progress while standing up to public scrutiny on cost and delivery. Solar and battery storage offer one of the clearest ways to lead by example.',
          'Fully funded delivery also helps departments move faster without compromising transparency or accountability.',
        ],
        benefitsHeading: 'Unifi.id helps government buildings deliver:',
        benefits: [
          'Visible renewable deployment that supports policy leadership',
          'Transparent, accountable funding structures',
          'Rapid deployment aligned to ministerial timelines',
          'Significant carbon reduction without upfront capital allocation',
          'Credible sustainability credentials that support leadership claims',
        ],
        closing:
          'This is about policy credibility as much as renewable energy. It shows climate leadership in a form the public can actually see.',
        challengesHeading: 'Government Solar Challenges We Address',
        challenges: [
          {
            title: 'Policy Credibility',
            description:
              'Governments are expected to lead by example, not just publish targets.',
            features: [
              'Visible solar installations as proof of commitment',
              'Measurable carbon reduction',
              'Clear support for net zero reporting obligations',
            ],
          },
          {
            title: 'Spending Transparency',
            description:
              'Public spending decisions need auditable costs and demonstrable value.',
            features: [
              'Complete cost transparency from day one',
              'Operational savings that are auditable over time',
              'No hidden capital requirements',
            ],
          },
          {
            title: 'Rapid Deployment',
            description:
              'Ambitious targets often collide with slow procurement and capital approvals.',
            features: [
              'Turnkey funded solution',
              'Streamlined delivery that supports urgent timelines',
              'Complete project management through commissioning',
            ],
          },
        ],
        ctaLabel: 'Discuss Government Solar',
      },
      emergency: {
        heading: 'Emergency Services: Power Critical Operations, Cut Costs, Build Resilience',
        paragraphs: [
          'Emergency services need reliable, resilient power for stations, depots, and control centres. Solar PV with battery storage reduces grid dependence and provides backup support during outages.',
          'It also helps services cut cost, lower carbon, and demonstrate environmental leadership without compromising readiness.',
        ],
        benefitsHeading: 'Unifi.id helps emergency services deliver:',
        benefits: [
          '30-50% reduction in electricity costs',
          'Operational resilience through backup power during grid failures',
          'Funded deployment through Salix, PSDS, and resilience grants',
          'Carbon reduction reporting for Scope 2 emissions',
          'Future-ready integration with EV charging and smart systems',
          'Enhanced public trust through visible environmental leadership',
        ],
        closing:
          'Whether you operate fire stations, police stations, or control centres, Unifi.id delivers solar and storage that cuts costs and protects operational resilience.',
        challengesHeading: 'Specific Challenges We Address for Emergency Services',
        challenges: [
          {
            title: 'Operational Resilience & Grid Dependency',
            description:
              'Blue-light services cannot afford power outages in critical spaces.',
            features: [
              'Battery storage for backup power',
              'Automatic islanding during outages',
              'Priority power for critical systems',
              'Integration with existing backup generators',
            ],
          },
          {
            title: '24/7 Operation & High Energy Demand',
            description:
              'Emergency estates run continuously and need systems tuned to that profile.',
            features: [
              'System sizing for 24/7 operations',
              'Smart energy management to maximise self-consumption',
              'Integration with HVAC, lighting, and IT loads',
              'Real-time monitoring via Cortex',
            ],
          },
          {
            title: 'Budget Constraints & Compliance',
            description:
              'Services need resilience and carbon progress without new capital burden.',
            features: [
              'Salix-approved and grant-friendly structures',
              'Support for PSDS and resilience funding',
              'No capital outlay required',
              'Clear compliance and reporting visibility',
            ],
          },
        ],
        ctaLabel: 'Discuss Emergency Service Solar',
      },
    },
  },
} as const satisfies Record<
  SectorTab,
  Partial<
    Record<
      Exclude<SectorTechnologyTab, 'led'>,
      Record<string, NestedSectorDetail>
    >
  >
>;

function NestedSectorTechnologyContent({ content }: { content: NestedSectorDetail }) {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-12">
        <div className="space-y-5">
          <H3 className="text-2xl">{content.heading}</H3>
          {content.paragraphs.map((paragraph) => (
            <Body key={paragraph} className="text-lg text-unifi-gray-dark">
              {paragraph}
            </Body>
          ))}
        </div>
        <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
          <H3 className="text-xl mb-5">{content.benefitsHeading}</H3>
          <ul className="space-y-4">
            {content.benefits.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                <Body>{item}</Body>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
        <H3 className="text-xl mb-5">{content.challengesHeading}</H3>
        <div className="grid md:grid-cols-3 gap-5">
          {content.challenges.map((item) => (
            <div key={item.title} className="rounded-2xl border border-unifi-blue/10 bg-unifi-light p-5 text-left">
              <H3 className="text-lg mb-3">{item.title}</H3>
              <Body className="text-unifi-gray-dark mb-4">{item.description}</Body>
              <ul className="space-y-2">
                {item.features.map((feature) => (
                  <li key={feature} className="text-sm font-bold text-unifi-blue flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <Body className="text-lg text-unifi-gray-dark">{content.closing}</Body>
        <div className="text-left">
          <ButtonLink href="/energy/contact" variant="primary">
            {content.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function SectorTechnologySpotlight({
  heading,
  description,
  benefits,
  challenges,
  ctaLabel,
}: {
  heading: string;
  description: string;
  benefits: readonly string[];
  challenges: readonly string[];
  ctaLabel: string;
}) {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start mb-12">
        <div className="space-y-5">
          <H3 className="text-2xl">{heading}</H3>
          <Body className="text-lg text-unifi-gray-dark">{description}</Body>
        </div>
        <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
          <H3 className="text-xl mb-5">What this unlocks</H3>
          <ul className="space-y-4">
            {benefits.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                <Body>{item}</Body>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
        <H3 className="text-xl mb-5">Delivery considerations for this sector</H3>
        <div className="grid md:grid-cols-3 gap-5">
          {challenges.map((item) => (
            <div key={item} className="rounded-2xl border border-unifi-blue/10 bg-unifi-light p-5 text-left">
              <Body className="text-unifi-gray-dark">{item}</Body>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 text-left">
        <ButtonLink href="/energy/contact" variant="primary">
          {ctaLabel}
        </ButtonLink>
      </div>
    </div>
  );
}

function SectorTechnologyTabs({
  tabs,
  activeTab,
  onChange,
}: {
  tabs: typeof sectorTechTabs;
  activeTab: SectorTechnologyTab;
  onChange: (tab: SectorTechnologyTab) => void;
}) {
  return (
    <div className="bg-white py-4 border-y border-black/5 mb-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-unifi-dark text-white shadow-lg'
                : 'bg-unifi-light text-unifi-gray-dark hover:bg-unifi-blue/10'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectorIntroCard({ content }: { content: SectorIntroCardContent }) {
  const Icon = content.icon;

  return (
    <div className="mb-12 rounded-3xl border border-unifi-blue/10 bg-unifi-blue/5 p-8">
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-unifi-blue shadow-sm">
          <Icon className="h-7 w-7" />
        </div>
        <div className="max-w-4xl">
          <H3 className="mb-3 text-2xl">{content.title}</H3>
          <Body className="text-lg text-unifi-gray-dark">{content.body}</Body>
        </div>
      </div>
    </div>
  );
}

export default function EnergyHubClient() {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('technology');
  const [activeTechTab, setActiveTechTab] = useState<TechnologyTab>('led');
  const [activeSectorTab, setActiveSectorTab] = useState<SectorTab>('education');
  const [activeSectorTechTab, setActiveSectorTechTab] = useState<SectorTechnologyTab>('led');
  const [activeEduTab, setActiveEduTab] = useState<EducationTab>('higher-ed');
  const [activeCorporateTab, setActiveCorporateTab] = useState<CorporateTab>('office');
  const [activePublicTab, setActivePublicTab] = useState<PublicTab>('local');
  const heroImage = pickUnifiPlaceholder('hero', 'energy-hub');
  const normalizedEducationTab: Exclude<EducationTab, 'primary-secondary' | 'further-education'> =
    activeEduTab === 'primary-secondary' || activeEduTab === 'further-education'
      ? 'state-schools'
      : activeEduTab;
  const visibleSectorTechTabs =
    sectorTechTabs;
  const activeSectorCard =
    activeSectorTab === 'education'
      ? educationSectorCards[normalizedEducationTab]
      : activeSectorTab === 'corporate'
        ? corporateSectorCards[activeCorporateTab]
        : publicSectorCards[activePublicTab];
  const activeSectorContent =
    activeSectorTab === 'corporate'
      ? sectorTechnologyContent.corporate[activeSectorTechTab]
      : activeSectorTab === 'education'
        ? sectorTechnologyContent.education[activeSectorTechTab]
        : sectorTechnologyContent.public[activeSectorTechTab];
  const activeNestedSectorDetail =
    activeSectorTab === 'education'
      ? activeSectorTechTab === 'led'
        ? null
        : nestedSectorTechnologyContent.education[activeSectorTechTab]?.[normalizedEducationTab]
      : activeSectorTab === 'corporate'
        ? activeSectorTechTab === 'led'
          ? null
          : nestedSectorTechnologyContent.corporate[activeSectorTechTab]?.[activeCorporateTab]
        : activeSectorTechTab === 'led'
          ? null
          : nestedSectorTechnologyContent.public[activeSectorTechTab]?.[activePublicTab];

  return (
    <main className="pt-0">
{/* Hero Section */}
      <Section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Decarbonisation hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl text-left"
          >
            <div className="h-20" aria-hidden="true" />
            <motion.div variants={fadeInUp}>
              <H1 className="text-white mb-6">Build a Carbon Action Plan That Stops Wasted Energy.</H1>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <Body className="text-white text-xl leading-relaxed">
                Every month, organisations of every size - from schools to global corporates - pour money into the pockets of energy companies by running outdated lighting, heating, and HVAC systems, and wasted plug power energy. It feels like you don't have the budget for upgrades. In reality, you do. You're just spending it in the wrong place.
              </Body>
              <Body className="text-white text-lg leading-relaxed">
                Unifi.id helps you redirect that wasted spend into fully funded upgrades in LED, smart sockets, heating, HVAC, solar and renewables. No capital outlay. No hidden costs. Just lower bills, lower carbon, stronger carbon reporting, and verifiable compliance. The savings stay with you, not your supplier.
              </Body>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-10">
              <ButtonLink href="/energy/carbon-action-plan">Explore Carbon Action Plans</ButtonLink>
              <ButtonLink
                href="/energy/carbon-reporting"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Carbon Reporting Support
              </ButtonLink>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Main Tabs Navigation */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-8">
                {[
                  { id: 'technology', label: 'Explore by Technology', icon: Zap },
                  { id: 'sector', label: 'Explore by Sector', icon: Building }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveMainTab(tab.id as MainTab)}
                className={`flex items-center gap-2 py-6 border-b-2 transition-all font-bold ${
                  activeMainTab === tab.id 
                    ? 'border-unifi-blue text-unifi-blue' 
                    : 'border-transparent text-unifi-gray-dark hover:text-unifi-blue'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeMainTab === 'technology' ? (
          <motion.div
            key="tech-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Tech Hero */}
            <Section backgroundColor="white">
              <div className="max-w-7xl mx-auto px-6 text-left max-w-3xl mx-auto">
                <H2 className="mb-6">Choose the technology mix for your carbon action plan</H2>
                <Body className="text-lg">
                  Start with the technology that delivers the biggest impact for your estate. Each solution can be implemented independently or as part of a comprehensive upgrade programme that supports carbon reporting and long-term decarbonisation.
                </Body>
              </div>
            </Section>

            {/* Tech Tabs */}
            <div className="bg-unifi-light py-4 border-y border-black/5">
              <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
                {[
                  { id: 'led', label: 'LED Lighting', icon: Lightbulb },
                  { id: 'smart-sockets', label: 'Smart Sockets', icon: Plug },
                  { id: 'heating', label: 'Heating & HVAC', icon: Thermometer },
                  { id: 'solar', label: 'Solar & Renewables', icon: Sun }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTechTab(tab.id as TechnologyTab)}
                    className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                      activeTechTab === tab.id
                        ? 'bg-unifi-blue text-white shadow-lg'
                        : 'bg-white text-unifi-gray-dark hover:bg-unifi-blue/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeTechTab === 'led' && (
              <div className="animate-in fade-in duration-500">
                {/* LED Hero Stats */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-16">
                      <H2 className="mb-4">LED Lighting Upgrades: Smarter Investment, Lifetime Returns</H2>
                      <Body className="text-lg text-unifi-gray-dark">
                        In today's climate of rising energy bills, stretched budgets, and ESG targets, LED upgrades remain one of the most powerful, proven investments available.
                      </Body>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                      {[
                        { val: '60%', label: 'Average Energy Reduction' },
                        { val: '3-5 Years', label: 'Typical Payback Period' },
                        { val: '25+ Years', label: 'LED Lifespan' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-unifi-blue/5 p-8 rounded-2xl text-left border border-unifi-blue/10">
                          <div className="text-4xl font-bold text-unifi-blue mb-2">{stat.val}</div>
                          <div className="text-unifi-gray-dark font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                      <Body className="text-lg leading-relaxed">
                        Modern LED systems are far more than simple replacements for old fixtures. They represent a complete transformation of your lighting infrastructure - combining energy efficiency, improved comfort, and dramatically reduced maintenance demands.
                      </Body>
                      <Body className="text-lg leading-relaxed">
                        While the upfront cost can feel significant, LED projects consistently deliver some of the best returns on investment of any sustainability measure. In many cases, the energy savings alone can fully finance the installation, allowing upgrades to proceed with no upfront capital outlay.
                      </Body>
                    </div>
                  </div>
                </Section>

                {/* LED Benefits */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-green animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <DollarSign className="w-8 h-8 text-unifi-green" />
                          <H3>Funding Without the Pain</H3>
                        </div>
                        <Body className="mb-6 font-medium">With energy savings typically exceeding 60%, institutions can often finance the installation through third-party funding at competitive rates.</Body>
                        <ul className="space-y-4">
                          {
                            [
                              "Finance your LED upgrade without touching your capital budget",
                              "Third-party funding covers all installation costs",
                              "Immediate positive cash flow from month one",
                              "Energy cost reductions exceed financing payments from day one"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-blue animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <TrendingUp className="w-8 h-8 text-unifi-blue" />
                          <H3>Long-term Benefits</H3>
                        </div>
                        <ul className="space-y-4">
                          {
                            [
                              "Money redirected into your own infrastructure instead of energy companies",
                              "Improving your estate while reducing costs",
                              "Most upgrades pay for themselves in less than five years",
                              "Savings continue long after the finance term ends"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Warning Section */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-red-50 border border-red-100 rounded-3xl p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-10 h-10 text-red-600" />
                      <H2 className="text-red-900">Beware of Unrealistic Promises</H2>
                      </div>
                      <Body className="text-red-800 mb-8 text-lg">
                        The LED market can be confusing. Some installers promote dramatic savings figures, paired with ultra-low installation costs and budget products. While seductive, these offers often come at a hidden price:
                      </Body>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">Hidden Risks</H3>
                          <ul className="space-y-2 text-red-800">
                            <li>• Fixtures that fail long before their rated life</li>
                            <li>• Poor compliance with recognised lighting standards</li>
                            <li>• Higher energy use as fittings degrade over time</li>
                            <li>• Replacements and disruptions that erase projected savings</li>
                          </ul>
                        </div>
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">The Real Cost</H3>
                          <Body className="text-red-800 mb-4">The result: the 'cheap' option is rarely cheap at all.</Body>
                          <ul className="space-y-2 text-red-800">
                            <li>• Products that are technically 'legal' but non-compliant</li>
                            <li>• Early failures requiring costly replacements</li>
                            <li>• Maintenance disruptions affecting operations</li>
                            <li>• Lost savings that never materialize</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* The Unifi.id Standard */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-12">
                      <H2 className="mb-4">The Unifi.id Standard</H2>
                      <Body className="text-lg">At Unifi.id, we deliver solutions that protect your budget not just this year, but every year:</Body>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle className="w-6 h-6 text-unifi-green" />
                          <H3 className="text-xl">Quality & Compliance</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Meeting or exceeding standards for education, workplaces, and public estates",
                              "Premium fixtures with certified performance ratings",
                              "20+ year LED lifespan with consistent performance",
                              "Fittings that maintain efficiency and light quality for their full rated life",
                              "Designed for longevity, protecting your long-term investment"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-green">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <Target className="w-6 h-6 text-unifi-blue" />
                          <H3 className="text-xl">Conservative & Reliable</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Realistic estimates based on real site conditions and dialogue",
                              "Conservative modelling, not unrealistic promises that disappoint",
                              "Experienced teams who handle the process end to end",
                              "Stress-free installation minimising disruption to your operations"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-blue">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>
              </div>
            )}

            {activeTechTab === 'smart-sockets' && (
              <div className="animate-in fade-in duration-500">
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-unifi-blue/10 flex items-center justify-center">
                          <Plug className="w-7 h-7 text-unifi-blue" />
                        </div>
                        <H2>Smart Sockets: cut wasted energy and CO2 in buildings with AI-driven plug load management system</H2>
                      </div>
                      <div className="space-y-6">
                        <Body className="text-lg text-unifi-gray-dark">
                          Make hidden energy usage visible and act on it automatically to cut energy bills, lower carbon emissions, and avoid powering unused space. Reduce plug load energy by 30-67% with 3-12-months payback.
                        </Body>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                      {[
                        { val: '30%-67%', label: 'Typical plug load energy savings' },
                        { val: '3-12 months', label: 'Typical Payback Period' },
                        { val: 'X2.4 return', label: 'On subscription' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-unifi-blue/5 p-8 rounded-2xl text-left border border-unifi-blue/10">
                          <div className="text-4xl font-bold text-unifi-blue mb-2">{stat.val}</div>
                          <div className="text-unifi-gray-dark font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6 mb-12">
                      <Body className="text-lg leading-relaxed">
                        Most buildings can't see up to 40% of their electricity use - nearly half of that is wasted. That's plug load energy: the everyday appliances running under the radar of traditional systems.
                      </Body>
                      <Body className="text-lg leading-relaxed">
                        Appliance-level control powered by AI identifies hidden energy drains and shuts them off automatically. Cut costs. Lower carbon. Reduce fire risk. Understand occupancy. All from a single system.
                      </Body>
                    </div>
                  </div>
                </Section>

                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <H3 className="text-xl text-unifi-blue mb-4">Immediate energy savings</H3>
                        <Body className="mb-4">Control every socket, every floor, every building with AI-powered insights to:</Body>
                        <ul className="space-y-3">
                          {[
                            'Cut carbon',
                            'Reduce risk',
                            'Automate compliance',
                            'Reduce plug load energy by 30-67%',
                            'See payback in 3-12-months'
                          ].map((item, i) => (
                            <li key={i} className="flex gap-2 text-unifi-gray-dark">
                              <span className="text-unifi-blue">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <H3 className="text-xl text-unifi-blue mb-4">Operational gains</H3>
                        <ul className="space-y-3 mb-6">
                          {[
                            'Fire risk detection and recurring value per socket from reduced maintenance and safer usage',
                            'Asset and space utilisation',
                            'Behaviour change'
                          ].map((item, i) => (
                            <li key={i} className="flex gap-2 text-unifi-gray-dark">
                              <span className="text-unifi-blue">•</span> {item}
                            </li>
                          ))}
                        </ul>
                        <Body className="mb-4">Gain complete oversight of plug load energy use across your entire estate:</Body>
                        <ul className="space-y-3">
                          {[
                            'Comparing buildings',
                            'Benchmarking performance',
                            'Identifying high-waste sites at a glance'
                          ].map((item, i) => (
                            <li key={i} className="flex gap-2 text-unifi-gray-dark">
                              <span className="text-unifi-blue">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6 text-left py-12">
                    <ButtonLink href="/energy/contact" variant="primary">Discuss Smart Sockets</ButtonLink>
                  </div>
                </Section>
              </div>
            )}

            {activeTechTab === 'heating' && (
              <div className="animate-in fade-in duration-500">
                {/* Heating & HVAC Hero Stats */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-16">
                      <H2 className="mb-4">Heating & HVAC: Cut Waste, Improve Comfort, Zero Capex</H2>
                      <Body className="text-lg text-unifi-gray-dark">
                        Outdated heating and HVAC systems are among the largest sources of energy waste in commercial buildings. Modern, efficient systems reduce operating costs while improving occupant comfort and compliance.
                      </Body>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                      {[
                        { val: '30-50%', label: 'Typical Heating Energy Reduction' },
                        { val: '5-10 Years', label: 'Typical Payback Period' },
                        { val: '15-20 Years', label: 'Modern System Lifespan' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-unifi-blue/5 p-8 rounded-2xl text-left border border-unifi-blue/10">
                          <div className="text-4xl font-bold text-unifi-blue mb-2">{stat.val}</div>
                          <div className="text-unifi-gray-dark font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                      <Body className="text-lg leading-relaxed">
                        Intelligent heating and HVAC upgrades optimise your building's climate control - reducing energy waste, improving comfort, and supporting sustainability targets. Boiler replacements, heat pumps, and building management system upgrades can all be delivered without upfront capital.
                      </Body>
                      <Body className="text-lg leading-relaxed">
                        Third-party funding structures allow energy and cost savings to finance the installation. Organisations redirect spend from wasted heating and cooling into fully funded upgrades, with positive cash flow from day one.
                      </Body>
                    </div>
                  </div>
                </Section>

                {/* Heating & HVAC Benefits */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-green animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <DollarSign className="w-8 h-8 text-unifi-green" />
                          <H3>Funding Without the Pain</H3>
                        </div>
                        <Body className="mb-6 font-medium">With heating and HVAC representing a major share of building energy use, savings from upgrades can often finance the entire project through third-party funding.</Body>
                        <ul className="space-y-4">
                          {
                            [
                              "Finance heating and HVAC upgrades without touching your capital budget",
                              "Third-party funding covers equipment and installation costs",
                              "Positive cash flow from month one",
                              "Energy cost reductions exceed financing payments from day one"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-blue animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <TrendingUp className="w-8 h-8 text-unifi-blue" />
                          <H3>Long-term Benefits</H3>
                        </div>
                        <ul className="space-y-4">
                          {
                            [
                              "Money redirected into your own infrastructure instead of energy companies",
                              "Improved occupant comfort and building performance",
                              "Most upgrades pay for themselves over the system lifespan",
                              "Savings continue long after the finance term ends"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Heating & HVAC Warning Section */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-red-50 border border-red-100 rounded-3xl p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-10 h-10 text-red-600" />
                        <H2 className="text-red-900">Beware of Unrealistic Promises</H2>
                      </div>
                      <Body className="text-red-800 mb-8 text-lg">
                        The heating and HVAC market can be confusing. Some installers promote dramatic savings figures with low installation costs and budget equipment. While seductive, these offers often come at a hidden price:
                      </Body>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">Hidden Risks</H3>
                          <ul className="space-y-2 text-red-800">
                            <li>• Equipment that fails before its rated life</li>
                            <li>• Poor compliance with building regulations</li>
                            <li>• Rising energy use as systems degrade</li>
                            <li>• Replacements and disruptions that erase projected savings</li>
                          </ul>
                        </div>
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">The Real Cost</H3>
                          <Body className="text-red-800 mb-4">The result: the 'cheap' option is rarely cheap at all.</Body>
                          <ul className="space-y-2 text-red-800">
                            <li>• Products that are technically 'legal' but non-compliant</li>
                            <li>• Early failures requiring costly replacements</li>
                            <li>• Maintenance disruptions affecting operations</li>
                            <li>• Lost savings that never materialize</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* The Unifi.id Standard - Heating */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-12">
                      <H2 className="mb-4">The Unifi.id Standard</H2>
                      <Body className="text-lg">At Unifi.id, we deliver heating and HVAC solutions that protect your budget not just this year, but every year:</Body>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle className="w-6 h-6 text-unifi-green" />
                          <H3 className="text-xl">Quality & Compliance</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Meeting or exceeding building regulations and standards",
                              "Premium equipment with certified performance ratings",
                              "Systems designed for longevity and reliability",
                              "Equipment that maintains efficiency for its full rated life",
                              "Designed for longevity, protecting your long-term investment"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-green">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <Target className="w-6 h-6 text-unifi-blue" />
                          <H3 className="text-xl">Conservative & Reliable</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Realistic estimates based on real site conditions and dialogue",
                              "Conservative modelling, not unrealistic promises that disappoint",
                              "Experienced teams who handle the process end to end",
                              "Stress-free installation minimising disruption to your operations"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-blue">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6 text-left py-12">
                    <ButtonLink href="/energy/contact" variant="primary">Discuss Heating & HVAC Upgrades</ButtonLink>
                  </div>
                </Section>
              </div>
            )}

            {activeTechTab === 'solar' && (
              <div className="animate-in fade-in duration-500">
                {/* Solar & Renewables Hero Stats */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-16">
                      <H2 className="mb-4">Solar & Renewables: Generate Clean Energy, Reduce Reliance on the Grid</H2>
                      <Body className="text-lg text-unifi-gray-dark">
                        Solar PV and renewable energy systems allow organisations to generate their own clean power, cut energy costs, and build long-term energy security. Fully funded solutions remove the capital barrier to adoption.
                      </Body>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                      {[
                        { val: '20-40%', label: 'Typical Electricity Cost Reduction' },
                        { val: '5-10 Years', label: 'Typical Payback Period' },
                        { val: '25+ Years', label: 'Solar Panel Lifespan' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-unifi-blue/5 p-8 rounded-2xl text-left border border-unifi-blue/10">
                          <div className="text-4xl font-bold text-unifi-blue mb-2">{stat.val}</div>
                          <div className="text-unifi-gray-dark font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                      <Body className="text-lg leading-relaxed">
                        Solar PV and renewable energy systems reduce reliance on the grid, lower electricity costs, and support decarbonisation targets. With third-party funding, organisations can install solar and other renewables with no upfront capital.
                      </Body>
                      <Body className="text-lg leading-relaxed">
                        Energy savings and export revenue can fully finance the installation. The savings stay with you, not your supplier - delivering immediate cost reduction and long-term energy security.
                      </Body>
                    </div>
                  </div>
                </Section>

                {/* Solar & Renewables Benefits */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-green animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <DollarSign className="w-8 h-8 text-unifi-green" />
                          <H3>Funding Without the Pain</H3>
                        </div>
                        <Body className="mb-6 font-medium">With electricity cost savings and export revenue, solar and renewable projects can often be fully financed through third-party funding.</Body>
                        <ul className="space-y-4">
                          {
                            [
                              "Finance solar and renewable installations without touching your capital budget",
                              "Third-party funding covers equipment and installation costs",
                              "Positive cash flow from month one",
                              "Energy cost reductions exceed financing payments from day one"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-blue animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <TrendingUp className="w-8 h-8 text-unifi-blue" />
                          <H3>Long-term Benefits</H3>
                        </div>
                        <ul className="space-y-4">
                          {
                            [
                              "Money redirected into your own energy generation instead of the grid",
                              "Reduced exposure to volatile energy prices",
                              "Most systems pay for themselves over their operational life",
                              "Savings and generation continue long after the finance term ends"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Solar & Renewables Warning Section */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-red-50 border border-red-100 rounded-3xl p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-10 h-10 text-red-600" />
                        <H2 className="text-red-900">Beware of Unrealistic Promises</H2>
                      </div>
                      <Body className="text-red-800 mb-8 text-lg">
                        The solar and renewables market can be confusing. Some installers promote dramatic savings figures with low installation costs and budget panels. While seductive, these offers often come at a hidden price:
                      </Body>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">Hidden Risks</H3>
                          <ul className="space-y-2 text-red-800">
                            <li>• Panels that underperform or fail before their rated life</li>
                            <li>• Poor compliance with grid connection and safety standards</li>
                            <li>• Declining output as systems degrade faster than expected</li>
                            <li>• Replacements and downtime that erase projected savings</li>
                          </ul>
                        </div>
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">The Real Cost</H3>
                          <Body className="text-red-800 mb-4">The result: the 'cheap' option is rarely cheap at all.</Body>
                          <ul className="space-y-2 text-red-800">
                            <li>• Products that are technically 'legal' but non-compliant</li>
                            <li>• Early failures requiring costly replacements</li>
                            <li>• Maintenance disruptions affecting operations</li>
                            <li>• Lost savings that never materialize</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* The Unifi.id Standard - Solar */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-12">
                      <H2 className="mb-4">The Unifi.id Standard</H2>
                      <Body className="text-lg">At Unifi.id, we deliver solar and renewable solutions that protect your budget not just this year, but every year:</Body>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle className="w-6 h-6 text-unifi-green" />
                          <H3 className="text-xl">Quality & Compliance</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Meeting or exceeding grid connection and safety standards",
                              "Premium panels with certified performance ratings",
                              "Systems designed for longevity and reliability",
                              "Equipment that maintains output for its full rated life",
                              "Designed for longevity, protecting your long-term investment"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-green">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <Target className="w-6 h-6 text-unifi-blue" />
                          <H3 className="text-xl">Conservative & Reliable</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Realistic estimates based on real site conditions and dialogue",
                              "Conservative modelling, not unrealistic promises that disappoint",
                              "Experienced teams who handle the process end to end",
                              "Stress-free installation minimising disruption to your operations"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-blue">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6 text-left py-12">
                    <ButtonLink href="/energy/contact" variant="primary">Explore Solar & Renewables</ButtonLink>
                  </div>
                </Section>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="sector-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Sector Tabs */}
            <div className="bg-unifi-light py-4 border-y border-black/5">
              <div className="max-w-7xl mx-auto px-6 flex justify-center gap-4">
                {[
                  { id: 'education', label: 'Education', icon: GraduationCap },
                  { id: 'corporate', label: 'Corporate', icon: Building },
                  { id: 'public', label: 'Public Sector', icon: Users }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveSectorTab(tab.id as SectorTab);
                      setActiveSectorTechTab('led');
                    }}
                    className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                      activeSectorTab === tab.id
                        ? 'bg-unifi-blue text-white shadow-lg'
                        : 'bg-white text-unifi-gray-dark hover:bg-unifi-blue/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeSectorTab === 'education' && (
              <div className="animate-in fade-in duration-500">
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-12">
                      <H2 className="mb-4">{activeSectorContent.heading}</H2>
                      <Body className="text-lg">
                        {activeSectorContent.description}
                      </Body>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                      {[
                        { id: 'higher-ed', label: 'Higher Ed' },
                        { id: 'state-schools', label: 'State Schools' },
                        { id: 'mats', label: 'MATs' },
                        { id: 'independent', label: 'Independent' },
                        { id: 'groups', label: 'Groups' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveEduTab(tab.id as EducationTab)}
                          className={`px-6 py-2 rounded-lg font-bold transition-all ${
                            activeEduTab === tab.id
                              ? 'bg-unifi-blue/10 text-unifi-blue border-2 border-unifi-blue'
                              : 'bg-unifi-light text-unifi-gray-dark border-2 border-transparent hover:border-unifi-blue/30'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <SectorIntroCard content={activeSectorCard} />

                    <SectorTechnologyTabs
                      tabs={visibleSectorTechTabs}
                      activeTab={activeSectorTechTab}
                      onChange={setActiveSectorTechTab}
                    />

                    {activeSectorTechTab !== 'led' && activeNestedSectorDetail && (
                      <NestedSectorTechnologyContent content={activeNestedSectorDetail} />
                    )}

                    {activeSectorTechTab === 'led' && activeEduTab === 'higher-ed' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <GraduationCap className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Smarter Lighting. Sustainable Estates. Without Capex Sacrifice.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Universities are global brands - and their estates shape the student experience, academic output, and institutional reputation.</Body>
                              <Body>But with capital tightly rationed between research, teaching, and student services, lighting infrastructure upgrades are often delayed - despite clear energy waste and rising compliance pressure.</Body>
                              <Body>Managing complex estates - with some buildings decades or even centuries old - outdated lighting fixtures drain budgets and compromise learning environments.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps universities deliver:</H3>
                            <ul className="space-y-4">
                              {
                                [
                                  "Fully funded LED lighting upgrades across entire estates",
                                  "Cashflow-positive projects paid from operational savings",
                                  "Phased LED modernisation that avoids academic disruption",
                                  "Verifiable energy and carbon reductions for ESG",
                                  "VAT recovery on qualifying works to boost net ROI"
                                ].map((item, i) => (
                                  <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                    <Body>{item}</Body>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-12">University-Specific Challenges We Address</H3>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Shield className="w-6 h-6 text-red-500" />
                              <H3 className="text-xl">Student Safety & Duty of Care</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Beyond fire drills, schools and universities must guarantee real-time oversight of students and staff across large, complex estates. Safeguarding requires visibility into who is on-site, where they are, and how quickly they can be accounted for in emergencies.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Building className="w-6 h-6 text-blue-500" />
                              <H3 className="text-xl">Security in Open Environments</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Education must remain welcoming - but also protected. Managing visitor access, monitoring anomalies, and securing high-risk zones without disrupting the learning environment is a constant balancing act.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Lightbulb className="w-6 h-6 text-yellow-500" />
                              <H3 className="text-xl">Energy Costs & ESG Targets</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Rising utility bills and tightening sustainability mandates demand smarter building controls. Without live occupancy data, energy and carbon reporting remain guesswork - and budgets suffer.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Award className="w-6 h-6 text-purple-500" />
                              <H3 className="text-xl">Complex Estates & Compliance</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Multi-building campuses face scrutiny from auditors, insurers, and regulators. Paper-based evacuation lists, static access logs, and estimated energy reports are no longer defensible.
                            </Body>
                          </div>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                          {[
                            {
                              title: "Historic Buildings",
                              icon: Building,
                              desc: "Heritage-sensitive LED retrofits that preserve architectural character while modernizing lighting infrastructure.",
                              features: ["Heritage-compatible solutions", "Planning permission support", "Conservation-compliant"],
                            },
                            {
                              title: "Complex Estates",
                              icon: TrendingUp,
                              desc: "Coordinated LED upgrades across multi-building campuses with diverse lighting needs.",
                              features: ["Phased implementation", "Minimal academic disruption", "Campus-wide coordination"],
                            },
                            {
                              title: "ESG & Compliance",
                              icon: Shield,
                              desc: "LED-specific energy efficiency improvements that support sustainability commitments.",
                              features: ["LED-specific carbon reporting", "Energy efficiency compliance", "Sustainability rankings support"],
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left h-full flex flex-col items-center"
                            >
                              <div className="w-14 h-14 rounded-2xl bg-unifi-blue/10 flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7 text-unifi-blue" />
                              </div>

                              <H3 className="text-xl mb-3">{item.title}</H3>
                              <Body className="text-unifi-gray-dark">{item.desc}</Body>

                              <ul className="mt-6 space-y-2">
                                {item.features.map((f, j) => (
                                  <li key={j} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activeEduTab === 'primary-secondary' && (
                      <div className="animate-in fade-in duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <School className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Smarter Lighting. Safer Schools. Brighter Futures.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Primary and secondary schools are vital community hubs, but often operate with tight budgets and aging infrastructure. Our LED lighting solutions provide immediate energy savings while creating improved learning environments for students and staff.</Body>
                              <Body>Upgrading to LED lighting can significantly reduce operational costs, enhance safety through better visibility, and contribute to a school's sustainability goals without requiring upfront capital investment.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps primary & secondary schools deliver:</H3>
                            <ul className="space-y-4">
                              {
                                [
                                  "Fully funded LED lighting upgrades across school estates",
                                  "Cashflow-positive projects paid from operational savings",
                                  "Improved learning environments with better light quality",
                                  "Reduced energy bills and carbon footprint",
                                  "Enhanced safety and security through improved visibility"
                                ].map((item, i) => (
                                  <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                    <Body>{item}</Body>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-12">Key Challenges for Primary & Secondary Education</H3>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <DollarSign className="w-6 h-6 text-green-500" />
                              <H3 className="text-xl">Budget Constraints</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Schools often face severe budget limitations, making it difficult to fund essential infrastructure upgrades like modern lighting systems.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Lightbulb className="w-6 h-6 text-yellow-500" />
                              <H3 className="text-xl">Outdated Infrastructure</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Many school buildings have old, inefficient lighting that consumes excessive energy and provides poor illumination, impacting learning and staff well-being.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Shield className="w-6 h-6 text-red-500" />
                              <H3 className="text-xl">Safety & Security</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Ensuring a safe and secure environment for students and staff is paramount. Improved lighting can deter unauthorized access and enhance visibility in and around school premises.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Award className="w-6 h-6 text-purple-500" />
                              <H3 className="text-xl">Environmental Targets</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Schools are increasingly under pressure to meet sustainability goals and reduce their carbon footprint, with energy consumption being a major factor.
                            </Body>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activeEduTab === 'further-education' && (
                      <div className="animate-in fade-in duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Users className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Optimised Learning Environments for Further Education.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Further education colleges and vocational training centers play a crucial role in skill development, but often face unique challenges related to diverse learning spaces and student demographics. Our LED lighting solutions offer flexible, energy-efficient upgrades that support various educational needs.</Body>
                              <Body>Modern LED lighting can improve focus and productivity in classrooms and workshops, reduce operating costs, and enhance the overall appeal of facilities, attracting and retaining students.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps further education institutions deliver:</H3>
                            <ul className="space-y-4">
                              {
                                [
                                  "Fully funded LED lighting upgrades for diverse learning spaces",
                                  "Cashflow-positive projects paid from operational savings",
                                  "Improved lighting quality for enhanced learning and practical training",
                                  "Significant reductions in energy consumption and maintenance costs",
                                  "Modernized facilities to attract and retain students"
                                ].map((item, i) => (
                                  <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                    <Body>{item}</Body>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-12">Key Challenges for Further Education</H3>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Target className="w-6 h-6 text-blue-500" />
                              <H3 className="text-xl">Diverse Learning Environments</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Further education institutions encompass a wide range of spaces, from traditional classrooms to specialized workshops and vocational training areas, each with unique lighting requirements.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <DollarSign className="w-6 h-6 text-green-500" />
                              <H3 className="text-xl">Funding & Investment</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Securing funding for infrastructure improvements can be challenging, often requiring institutions to seek solutions that offer immediate financial benefits.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <TrendingUp className="w-6 h-6 text-purple-500" />
                              <H3 className="text-xl">Attracting & Retaining Students</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Modern, well-lit facilities are crucial for creating an attractive learning environment that can help institutions draw in new students and keep existing ones engaged.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Lightbulb className="w-6 h-6 text-yellow-500" />
                              <H3 className="text-xl">Energy Efficiency & Sustainability</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Reducing energy consumption and operating costs while demonstrating a commitment to environmental responsibility are key priorities for further education providers.
                            </Body>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activeEduTab === 'state-schools' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <School className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Smarter Lighting. Brighter Schools. Without Capex Sacrifice.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>State schools are under relentless pressure to stretch every pound - with estate budgets often fixed or ringfenced, upgrades are pushed back year after year.</Body>
                              <Body>But delaying improvements doesn't just defer costs. It locks schools into higher energy bills, growing maintenance burdens, and environments that fall short of supporting pupils and staff. And waiting for government grants that may never arrive only prolongs the problem, leaving schools paying more each month for outdated, inefficient systems.</Body>
                              <Body>Lighting is often one of the largest energy drains in a school, with outdated fluorescent or halogen systems consuming far more power than modern LEDs. The result: wasted funds, poorer light quality, and missed opportunities to meet sustainability goals.</Body>
                              <Body>Yet replacing legacy lighting doesn't need to be prohibitively expensive. By structuring costs differently, schools can modernise without pulling money away from teaching and learning.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps state schools deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED lighting upgrades across classrooms and campuses',
                                'Cashflow-positive projects paid from operational savings, not school budgets',
                                'Phased installations timed around school hours and holidays to avoid disruption',
                                'Verifiable carbon reductions to meet regulatory and Ofsted-linked sustainability standards',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="text-left mb-8">
                          <H3 className="text-left mb-2">School-Specific Challenges We Address</H3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Aging Buildings',
                              desc: 'Decades-old classrooms and facilities require careful, non-disruptive upgrades.',
                              features: [
                                'Heritage-sensitive retrofits where required',
                                'Planning and compliance support',
                                'Minimal disruption to school operations',
                              ],
                            },
                            {
                              title: 'Tight Budgets',
                              desc: 'Fixed or ringfenced funding leaves little room for capital projects.',
                              features: [
                                'Fully funded models with no upfront cost',
                                'Immediate operational savings after installation',
                                'Long-term reduction in maintenance spend',
                              ],
                            },
                            {
                              title: 'Compliance & Safeguarding',
                              desc: 'Schools must meet energy efficiency, safety, and duty-of-care requirements.',
                              features: [
                                'Automated carbon reporting aligned with regulatory standards',
                                'Safer, brighter classrooms that support wellbeing',
                                'Evidence for sustainability and compliance audits',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-left">
                            With LED retrofits, schools aren't finding new money - they're redirecting wasted energy spend into brighter classrooms and safer estates that pay for themselves, often in less than five years.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activeEduTab === 'mats' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Users className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Portfolio Consistency. Local Delivery. Central Oversight.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>MAT estates teams have to balance central standards with site-level realities - across buildings of different age, condition, and usage.</Body>
                              <Body>LED programmes succeed when they are repeatable, measurable, and easy to roll out - with consistent reporting for CFOs, trustees, and compliance leads.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps MATs deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Standardised upgrade spec across the trust',
                                'Site-by-site phasing to minimise disruption',
                                'Simple governance reporting across all schools',
                                'Evidence of savings and carbon reduction over time'
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Multi-site governance',
                              desc: 'A clear, comparable view of upgrades and outcomes across the trust.',
                            },
                            {
                              title: 'Procurement control',
                              desc: 'A repeatable approach that reduces variation and avoids one-off site decisions.',
                            },
                            {
                              title: 'Low disruption delivery',
                              desc: 'Rollouts planned around term-time constraints and local operational needs.',
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                                        {activeSectorTechTab === 'led' && activeEduTab === 'independent' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Award className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Premium Environments. Measurable Savings. Stronger ESG Proof.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Independent schools are expected to deliver a high-quality campus experience while controlling operating costs across often diverse estates.</Body>
                              <Body>LED upgrades reduce energy waste and maintenance burden, while supporting sustainability reporting and investor-grade evidence where required.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps independent schools deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Improved learning and boarding environments with better light quality',
                                'Reduced maintenance callouts and lamp failures',
                                'Phased upgrades across classrooms, sports, and public areas',
                                'Clear reporting that supports ESG and stakeholder expectations'
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Campus standards',
                              desc: 'Upgrades aligned to quality expectations across teaching, boarding, and shared spaces.',
                            },
                            {
                              title: 'Operational resilience',
                              desc: 'Fewer failures and less reactive maintenance, with planned delivery.',
                            },
                            {
                              title: 'Evidence-led ESG',
                              desc: 'Measurement and reporting to support sustainability and stakeholder communications.',
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activeEduTab === 'groups' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Users className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">School Groups & Federations</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>School groups and federations face the challenge of managing multiple sites with shared resources and budgets. LED lighting offers a unified approach to reducing energy costs, improving facilities, and meeting environmental targets across all schools.</Body>
                              <Body>Our funded solutions enable groups to upgrade all sites simultaneously, with centralised monitoring and control providing transparency and consistency across the entire estate.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for school groups:</H3>
                            <ul className="space-y-4">
                              {[
                                'Upgrade multiple sites simultaneously',
                                'Centralised monitoring and reporting',
                                'Consistent quality across all schools',
                                'Significant cost savings group-wide',
                                'Meet shared ESG targets',
                                'No upfront capital required',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Multiple Sites',
                              desc: 'Managing different buildings across multiple locations is complex.',
                              features: [
                                'Rollout across all sites simultaneously',
                                'Centralised control and monitoring',
                                'Consistent standards and quality',
                                'Simplified management',
                              ],
                            },
                            {
                              title: 'Shared Budgets',
                              desc: 'Limited budgets must be stretched across multiple schools.',
                              features: [
                                'Funded solutions with no upfront cost',
                                'Group-wide energy savings',
                                'Reduced maintenance costs',
                                'Better value through scale',
                              ],
                            },
                            {
                              title: 'Reporting & Accountability',
                              desc: 'Demonstrating value and impact to governors and communities.',
                              features: [
                                'Real-time energy monitoring',
                                'Clear ROI and savings reporting',
                                'Carbon reduction tracking',
                                'ESG credentials enhancement',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-left">
                            Our LED solutions are designed for school groups. We understand the need for consistency, transparency, and value across multiple sites - and we deliver all three.
                          </Body>
                        </div>
                      </div>
                    )}
                  </div>
                </Section>
              </div>
            )}
          

            
            {activeSectorTab === 'corporate' && (
              <div className="animate-in fade-in duration-500">
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-12">
                      <H2 className="mb-4">{activeSectorContent.heading}</H2>
                      <Body className="text-lg">
                        {activeSectorContent.description}
                      </Body>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                      {[
                        { id: 'office', label: 'Office Buildings' },
                        { id: 'retail', label: 'Retail' },
                        { id: 'mixed', label: 'Mixed-Use' },
                        { id: 'hospitality', label: 'Hospitality' },
                        { id: 'industrial', label: 'Industrial' },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveCorporateTab(tab.id as CorporateTab)}
                          className={
                            'px-6 py-2 rounded-lg font-bold transition-all border-2 ' +
                            (activeCorporateTab === tab.id
                              ? 'bg-unifi-blue/10 text-unifi-blue border-unifi-blue'
                              : 'bg-unifi-light text-unifi-gray-dark border-transparent hover:border-unifi-blue/30')
                          }
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <SectorIntroCard content={activeSectorCard} />

                    <SectorTechnologyTabs
                      tabs={visibleSectorTechTabs}
                      activeTab={activeSectorTechTab}
                      onChange={setActiveSectorTechTab}
                    />

                    {activeSectorTechTab !== 'led' && activeNestedSectorDetail && (
                      <NestedSectorTechnologyContent content={activeNestedSectorDetail} />
                    )}

                    {activeSectorTechTab === 'led' && activeCorporateTab === 'office' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Office Buildings</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Modern office spaces demand lighting that enhances productivity, wellbeing, and energy efficiency. LED lighting transforms commercial offices - reducing operational costs by up to 80% while creating comfortable, productive environments that attract and retain tenants.</Body>
                              <Body>Our funded solutions mean landlords and occupiers can upgrade without capital expenditure, while smart controls adapt lighting to occupancy patterns and natural daylight, maximizing efficiency and comfort.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for office buildings:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80%',
                                'Enhance tenant satisfaction and retention',
                                'Improve workplace productivity and wellbeing',
                                'Meet ESG and MEES compliance requirements',
                                'Increase asset value and marketability',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-10">Challenges Office Buildings Face - And How LED Helps</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Rising Energy Costs',
                              desc: 'Energy bills are a significant operational expense for office buildings.',
                              features: [
                                'Up to 80% reduction in lighting energy use',
                                'Lower service charge costs for tenants',
                                'Improved NOI and building performance',
                                'Protection against future energy price rises',
                              ],
                            },
                            {
                              title: 'Tenant Expectations',
                              desc: 'Modern tenants expect high-quality, efficient, and sustainable workspaces.',
                              features: [
                                'Enhanced lighting quality and control',
                                'Improved workplace comfort and productivity',
                                'Smart controls for flexible working',
                                'Demonstrate ESG leadership',
                              ],
                            },
                            {
                              title: 'Compliance & Regulations',
                              desc: 'MEES, EPC ratings, and ESG reporting requirements are increasingly stringent.',
                              features: [
                                'Improve EPC ratings cost-effectively',
                                'Meet MEES compliance requirements',
                                'Support ESG and net-zero commitments',
                                'Comprehensive audit trail and reporting',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-left">
                            From single-occupier headquarters to multi-tenanted office blocks, our LED solutions deliver immediate cost savings, enhanced environments, and long-term value.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activeCorporateTab === 'retail' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Retail</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Retail environments rely on lighting to create atmosphere, showcase products, and drive sales. LED lighting transforms retail spaces - reducing energy costs by up to 80% while delivering superior color rendering, flexibility, and ambiance that enhances the customer experience.</Body>
                              <Body>Our funded solutions mean retailers and landlords can upgrade without capital expenditure, while smart controls enable dynamic lighting schemes that adapt to time of day, seasons, and promotional campaigns.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for retail:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80%',
                                'Enhance product presentation and sales',
                                'Create engaging customer experiences',
                                'Improve staff comfort and productivity',
                                'Meet ESG and MEES requirements',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-10">Challenges Retail Faces - And How LED Helps</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Product Presentation',
                              desc: 'Lighting quality directly impacts how products look and how customers perceive value.',
                              features: [
                                'Excellent color rendering (CRI 90+)',
                                'Flexible control for different displays',
                                'Consistent quality across store',
                                'Dynamic schemes for campaigns',
                              ],
                            },
                            {
                              title: 'Operating Costs',
                              desc: 'Energy and maintenance costs eat into tight margins.',
                              features: [
                                'Up to 80% reduction in lighting energy',
                                'Minimal maintenance requirements',
                                'Lower HVAC costs (less heat output)',
                                'Predictable long-term costs',
                              ],
                            },
                            {
                              title: 'Operating Hours',
                              desc: 'Extended trading hours mean lighting is on for long periods.',
                              features: [
                                'Exceptional lifespan (50,000+ hours)',
                                'Reduced lamp replacement frequency',
                                'Lower maintenance disruption',
                                'Smart controls for automated scheduling',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-left">
                            From high-street stores to shopping centres, our LED solutions help retailers create compelling environments while dramatically reducing operational costs.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activeCorporateTab === 'mixed' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Mixed-Use Developments</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Mixed-use developments combine residential, commercial, and retail spaces - each with different lighting needs and usage patterns. LED lighting provides the flexibility, efficiency, and control to optimize performance across all areas while reducing operational costs by up to 80%.</Body>
                              <Body>Our funded solutions mean developers and property managers can upgrade without capital expenditure, while integrated smart controls enable different lighting strategies for different zones, maximizing efficiency and comfort throughout the development.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for mixed-use:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80% across all areas',
                                'Flexible solutions for different space types',
                                'Integrated control and monitoring',
                                'Enhanced resident and tenant satisfaction',
                                'Meet diverse compliance requirements',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-10">
                          <H3 className="text-left mb-10">Challenges Mixed-Use Faces — And How LED Helps</H3>
                          <div className="grid md:grid-cols-3 gap-6">
                            {[
                              {
                                title: 'Diverse Requirements',
                                desc: 'Different spaces have different lighting needs, usage patterns, and aesthetic requirements.',
                                features: [
                                  'Tailored solutions for each space type',
                                  'Consistent quality across development',
                                  'Integrated control systems',
                                  'Flexible scheduling by zone',
                                ],
                              },
                              {
                                title: 'Service Charge Pressures',
                                desc: 'Residents and tenants are sensitive to service charge costs.',
                                features: [
                                  'Significant reduction in communal lighting costs',
                                  'Lower maintenance costs',
                                  'Transparent energy reporting',
                                  'Improved cost predictability',
                                ],
                              },
                              {
                                title: 'Safety & Security',
                                desc: 'Communal areas, car parks, and entrances must be well-lit for safety and security.',
                                features: [
                                  'Excellent light quality and coverage',
                                  'Reliable operation 24/7',
                                  'Integrated with security systems',
                                  'Emergency lighting compliance',
                                ],
                              },
                            ].map((c) => (
                              <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                                <H3 className="text-lg mb-3">{c.title}</H3>
                                <Body className="text-unifi-gray-dark">{c.desc}</Body>
                                <ul className="mt-5 space-y-2">
                                  {c.features.map((f) => (
                                    <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                      <ArrowRight className="w-3 h-3" /> {f}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8">
                            <Body className="text-unifi-gray-dark text-left">
                              Whether you're developing a new mixed-use scheme or managing an existing one, our LED solutions deliver the flexibility and performance you need across all areas.
                            </Body>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activeCorporateTab === 'hospitality' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Hospitality</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Hospitality venues depend on lighting to create ambiance, enhance guest experiences, and operate efficiently. LED lighting transforms hotels, restaurants, and leisure facilities - reducing energy costs by up to 80% while delivering the quality, flexibility, and control that creates memorable guest experiences.</Body>
                              <Body>Our funded solutions mean hoteliers can upgrade without capital expenditure, while smart controls enable dynamic lighting schemes that adapt throughout the day and for different events, creating the perfect atmosphere while minimizing energy waste.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for hospitality:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80%',
                                'Create engaging guest experiences',
                                'Flexible lighting for different occasions',
                                'Improve staff working environments',
                                'Meet sustainability expectations',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-10">Challenges Hospitality Faces — And How LED Helps</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Guest Experience',
                              desc: 'Lighting is critical to creating the right ambiance and guest satisfaction.',
                              features: [
                                'Excellent color rendering and quality',
                                'Dimmable and controllable',
                                'Dynamic scenes for different times/events',
                                'Consistent performance',
                              ],
                            },
                            {
                              title: '24/7 Operation',
                              desc: 'Lighting is in use continuously in many areas.',
                              features: [
                                'Exceptional lifespan reduces disruption',
                                'Reliable operation 24/7/365',
                                'Minimal maintenance requirements',
                                'Smart controls optimize usage',
                              ],
                            },
                            {
                              title: 'Sustainability Credentials',
                              desc: 'Guests increasingly choose venues based on environmental practices.',
                              features: [
                                'Significant carbon reduction',
                                'Enhanced ESG credentials',
                                'Demonstrate environmental commitment',
                                'Support green certifications',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-left">
                            Our LED solutions are designed for hospitality — delivering the ambiance and flexibility that creates memorable experiences while dramatically reducing the costs of lighting your venue.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activeCorporateTab === 'industrial' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Industrial</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Industrial and warehouse facilities demand robust, high-output lighting that operates reliably in challenging environments. LED lighting transforms industrial spaces — reducing energy costs by up to 80% while delivering superior light quality, instant start-up, and minimal maintenance that keeps operations running smoothly.</Body>
                              <Body>Our funded solutions mean facility managers can upgrade without capital expenditure, while smart controls and monitoring ensure optimal performance and enable predictive maintenance.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for industrial:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80%',
                                'Improve workplace safety and productivity',
                                'Minimal maintenance and downtime',
                                'Instant start-up in all conditions',
                                'Robust and reliable in harsh environments',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-10">Challenges Industrial Faces — And How LED Helps</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Safety & Visibility',
                              desc: 'Good lighting is essential for safety, quality control, and productivity.',
                              features: [
                                'High light output and uniformity',
                                'Excellent color rendering for inspection',
                                'Instant start-up (no warm-up time)',
                                'Reliable operation in all conditions',
                              ],
                            },
                            {
                              title: 'Maintenance Access',
                              desc: 'High-bay lighting is difficult and expensive to maintain.',
                              features: [
                                'Exceptional lifespan (50,000+ hours)',
                                'Reduced replacement frequency',
                                'Lower maintenance costs',
                                'Minimal operational disruption',
                              ],
                            },
                            {
                              title: 'Harsh Environments',
                              desc: 'Industrial environments can be dusty, dirty, hot, or cold.',
                              features: [
                                'Robust construction (IP65+ available)',
                                'Wide operating temperature range',
                                'Resistant to vibration and impact',
                                'Reliable performance in harsh conditions',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-left">
                            Our LED solutions are engineered for industrial environments — delivering the robustness, reliability, and performance your operations demand.
                          </Body>
                        </div>
                      </div>
                    )}

                    <div className="text-left mt-12">
                      <ButtonLink href="/energy/contact" variant="primary">Book a Free Energy Survey</ButtonLink>
                    </div>
                  </div>
                </Section>
              </div>
            )}

            {activeSectorTab === 'public' && (
              <div className="animate-in fade-in duration-500">
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-left mb-12">
                      <H2 className="mb-4">{activeSectorContent.heading}</H2>
                      <Body className="text-lg">
                        {activeSectorContent.description}
                      </Body>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                      {[
                        { id: 'local', label: 'Local Authorities' },
                        { id: 'nhs', label: 'NHS & Health' },
                        { id: 'gov', label: 'Government' },
                        { id: 'emergency', label: 'Emergency Services' },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActivePublicTab(tab.id as PublicTab)}
                          className={
                            'px-6 py-2 rounded-lg font-bold transition-all border-2 ' +
                            (activePublicTab === tab.id
                              ? 'bg-unifi-blue/10 text-unifi-blue border-unifi-blue'
                              : 'bg-unifi-light text-unifi-gray-dark border-transparent hover:border-unifi-blue/30')
                          }
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <SectorIntroCard content={activeSectorCard} />

                    <SectorTechnologyTabs
                      tabs={visibleSectorTechTabs}
                      activeTab={activeSectorTechTab}
                      onChange={setActiveSectorTechTab}
                    />

                    {activeSectorTechTab !== 'led' && activeNestedSectorDetail && (
                      <NestedSectorTechnologyContent content={activeNestedSectorDetail} />
                    )}

                    {activeSectorTechTab === 'led' && activePublicTab === 'local' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Modernize Public Buildings. Protect Budgets. Deliver Sustainability.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Local authorities manage diverse building portfolios - from council offices to community centers, libraries to leisure facilities. Energy costs continue to rise while budgets remain constrained, creating impossible choices between service delivery and infrastructure investment.</Body>
                              <Body>Outdated lighting systems waste public money every day. But with capital budgets under intense pressure, comprehensive LED upgrades often get deferred year after year, despite clear payback periods and carbon reduction benefits.</Body>
                              <Body>Public accountability demands value for money and demonstrable progress toward net zero commitments. LED retrofits deliver both - but only if funding barriers can be removed.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps local authorities deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED retrofits across public buildings',
                                'Immediate reductions in energy spend and maintenance burden',
                                'Phased delivery planned around public access and service continuity',
                                'Verifiable carbon reporting aligned with local authority targets',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activePublicTab === 'nhs' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Shield className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Better Lighting. Better Care. Lower Energy Costs.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>NHS facilities operate 24/7 with extensive lighting demands across clinical, administrative, and support areas. Energy costs represent a substantial portion of operational budgets - money that could otherwise support frontline care.</Body>
                              <Body>Healthcare environments require specific lighting quality for patient safety, staff wellbeing, and clinical effectiveness. LED technology delivers superior light quality while dramatically reducing energy consumption and maintenance requirements.</Body>
                              <Body>With NHS trusts under constant financial pressure and capital investment scrutinized intensely, comprehensive LED upgrades face significant barriers despite clear benefits. Our funding model removes these obstacles.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps NHS & health estates deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED lighting upgrades across clinical and non-clinical areas',
                                'Cashflow-positive projects paid from operational savings, protecting patient care budgets',
                                'Superior lighting quality supporting patient recovery and staff wellbeing',
                                'Reduced maintenance burden freeing estates teams for critical tasks',
                                'Significant carbon reduction supporting NHS net zero commitments',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-10">Healthcare Sector Challenges We Address</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: '24/7 Operations',
                              desc: 'Continuous operation with high lighting demands across diverse clinical areas.',
                              features: [
                                'Massive energy savings from LED efficiency',
                                'Lower cooling costs from reduced heat output',
                                'Reliable operation critical for patient safety',
                              ],
                            },
                            {
                              title: 'Lighting Quality Critical',
                              desc: 'Clinical requirements demand specific lighting characteristics for safety and effectiveness.',
                              features: [
                                'Superior color rendering for clinical accuracy',
                                'Flicker-free operation reducing eye strain',
                                'Appropriate light levels for different clinical areas',
                              ],
                            },
                            {
                              title: 'Maintenance Complexity',
                              desc: 'Accessing and maintaining lighting in clinical areas requires careful coordination.',
                              features: [
                                '10x longer LED lifespan reduces access requirements',
                                'Minimal disruption to clinical operations',
                                'Reduced infection control concerns',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-left">
                            With LED retrofits, NHS organizations redirect wasted energy spend into modern infrastructure that supports better patient outcomes and staff wellbeing while reducing operational costs.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activePublicTab === 'gov' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Modern Government Buildings. Fiscal Responsibility. Climate Leadership.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Government departments and agencies manage substantial building portfolios with diverse requirements - from ministerial offices to operational facilities. Energy efficiency improvements are policy priorities, but capital constraints often delay implementation.</Body>
                              <Body>Public sector organizations face intense scrutiny over spending decisions while being expected to demonstrate climate leadership. LED retrofits deliver both fiscal responsibility and environmental progress - if funding barriers can be overcome.</Body>
                              <Body>Traditional procurement processes and capital approval cycles make rapid LED deployment challenging. Our funding model enables departments to move quickly while maintaining full transparency and value for money.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps government estates deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED lighting upgrades across government estate - no capital approval delays',
                                'Cashflow-positive projects with transparent, auditable funding structures',
                                'Rapid deployment supporting ministerial commitments and policy objectives',
                                'Significant carbon reduction demonstrating climate leadership',
                                'Comprehensive energy reporting for transparency and accountability',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-10">Government Sector Challenges We Address</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Procurement Complexity',
                              desc: 'Traditional capital procurement creates delays and limits deployment pace.',
                              features: [
                                'Streamlined funded approach',
                                'Faster deployment without capital delays',
                                'Full transparency and auditability',
                              ],
                            },
                            {
                              title: 'Value for Money Scrutiny',
                              desc: 'Every spending decision must demonstrate clear public value and return.',
                              features: [
                                'Verifiable energy and cost savings',
                                'Transparent financial structures',
                                'Clear ROI for public investment',
                              ],
                            },
                            {
                              title: 'Policy Leadership Requirements',
                              desc: 'Government departments expected to lead on climate action and sustainability.',
                              features: [
                                'Significant carbon reduction from LED upgrades',
                                'Demonstrable progress toward net zero',
                                'Setting example for wider public sector',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-left">
                            With LED retrofits, government departments demonstrate fiscal responsibility and climate leadership simultaneously — modernizing infrastructure while protecting public funds.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeSectorTechTab === 'led' && activePublicTab === 'emergency' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Shield className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Reliable Lighting for Critical Operations. Zero Compromise on Safety.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Emergency service facilities - fire stations, police stations, ambulance stations - require reliable, high-quality lighting for operational readiness around the clock. Energy costs are significant, but upgrading infrastructure competes with frontline equipment and staffing needs.</Body>
                              <Body>These mission-critical facilities cannot tolerate lighting failures or quality compromises. LED technology delivers superior reliability and instant-on performance while dramatically reducing energy consumption and maintenance requirements.</Body>
                              <Body>For emergency service managers, protecting operational budgets is paramount. Our funding model enables comprehensive LED modernization without impacting frontline resources.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps emergency services deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED lighting upgrades across operational and administrative facilities',
                                'Cashflow-positive projects paid from energy savings, protecting frontline budgets',
                                'Superior lighting reliability critical for 24/7 emergency operations',
                                'Instant-on LED technology ensuring immediate full light output when needed',
                                'Reduced maintenance burden freeing estates teams for critical tasks',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-left mb-10">Emergency Services Challenges We Address</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Operational Reliability',
                              desc: 'Lighting must support 24/7 emergency response without failure.',
                              features: [
                                'Superior LED reliability vs traditional',
                                'Instant-on, no warm-up delays',
                                'Consistent performance in all conditions',
                              ],
                            },
                            {
                              title: 'Budget Protection',
                              desc: 'Infrastructure investment must not compromise frontline service capability.',
                              features: [
                                'Zero impact on operational budgets',
                                'Immediate energy cost savings',
                                'Resources stay focused on frontline delivery',
                              ],
                            },
                            {
                              title: 'Maintenance Efficiency',
                              desc: 'Estates teams need to focus on operational readiness, not lighting maintenance.',
                              features: [
                                '10x longer LED lifespan',
                                'Minimal maintenance intervention required',
                                'Reduced disruption to operational areas',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-left">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-left">
                            With LED retrofits, emergency services gain modern, reliable lighting infrastructure that supports operational readiness while delivering significant energy savings that protect frontline budgets.
                          </Body>
                        </div>
                      </div>
                    )}

                    <div className="text-left mt-12">
                      <ButtonLink href="/energy/contact" variant="primary">Book a Free Energy Survey</ButtonLink>
                    </div>
                  </div>
                </Section>
              </div>
            )}
</motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-unifi-blue rounded-3xl p-12 text-left text-white max-w-4xl mx-auto">
            <H2 className="text-white mb-6">Ready to Start Your Decarbonisation Journey?</H2>
            <Body className="text-white/80 text-lg mb-8">
              Join hundreds of organisations already saving millions in energy costs while protecting the planet.
            </Body>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink
                href="/contact"
                variant="secondary"
                className="bg-white border-white text-unifi-blue hover:bg-white/90"
              >
                Book an Energy Audit
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
                Talk to a Specialist
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
