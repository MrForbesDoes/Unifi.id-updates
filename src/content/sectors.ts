export type SectorRoute = {
  label: string;
  href: string;
  description: string;
};

export type SectorChallenge = {
  title: string;
  description: string;
};

export type SectorSolution = {
  title: string;
  bullets: string[];
};

export type Sector = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  /** Hero image for the sector page */
  heroImage?: string;
  icon: {
    label: string;
    svgPath: string;
  };
  keyOutcomes: string[];
  recommendedRoutes: SectorRoute[];
  challenges?: SectorChallenge[];
  solutions?: SectorSolution[];
  cta?: {
    resultStatement: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  comingSoon?: boolean;
};

export const sectors: Sector[] = [
  {
    slug: 'education',
    title: 'Education',
    summary: 'Estates teams under budget pressure - without disrupting learning.',
    description:
      'Support estates teams under budget pressure while maintaining compliance and minimising disruption.',
    heroImage: '/unifi-assets/education-classroom.webp',
    icon: {
      label: 'Graduation cap',
      svgPath:
        'M12 3 2 8l10 5 10-5-10-5Zm0 12L6 12v5l6 3 6-3v-5l-6 3Z',
    },
    keyOutcomes: [
      'Plan works around term time and occupancy constraints',
      'Evidence compliance with clear, auditable records',
      'Reduce disruption by prioritising the highest-risk items first',
    ],
    recommendedRoutes: [
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'Get visibility across buildings, assets, and responsibilities.',
      },
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Triage and reduce immediate fire risk with accountable workflows.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Identify energy waste and prioritise quick-win savings.',
      },
    ],
    challenges: [
      {
        title: 'Budget pressure',
        description: 'Maintenance and upgrades compete with frontline delivery, and investment decisions often lack evidence.',
      },
      {
        title: 'Compliance evidence',
        description: 'Audits require consistent records across buildings, contractors, and term-time constraints.',
      },
      {
        title: 'Occupancy constraints',
        description: 'Works must be planned around changing occupancy, safeguarding requirements, and critical spaces.',
      },
      {
        title: 'Reactive fire safety',
        description: 'Checks and drills can remain manual, creating blind spots and slow escalation when issues occur.',
      },
    ],
    solutions: [
      {
        title: 'Cortex™ (visibility and control)',
        bullets: [
          'Estate-wide operational picture across sites',
          'Clear responsibilities, ownership, and actions',
          'Evidence-led prioritisation of works and spend',
          'Audit-friendly reporting for leadership teams',
        ],
      },
      {
        title: 'FireGuard™ (risk reduction and assurance)',
        bullets: [
          'Accountable fire safety workflows and remediation tracking',
          'System status oversight and issue escalation',
          'Consistent evidence and audit trails',
          'Faster decision-making during incidents',
        ],
      },
    ],
    cta: {
      resultStatement:
        'A safer, more compliant estate - with upgrades planned around real occupancy and delivered with minimal disruption.',
      title: 'Map the right route for your sites',
      description:
        'Share your estate priorities and constraints. We will recommend the fastest path to visible risk reduction and defensible compliance.',
      primaryCta: { label: 'Talk to us', href: '/contact' },
      secondaryCta: { label: 'Explore solutions', href: '/solutions/hub' },
    },
  },
  {
    slug: 'corporate',
    title: 'Corporate',
    summary: 'Consistent oversight across offices and mixed-use estates.',
    description:
      'Create consistent visibility across office and mixed-use estates, with clear accountability and reporting.',
    heroImage: '/unifi-assets/corporate/photo-1551135049-8a33b5883817.webp',
    icon: {
      label: 'Office building',
      svgPath:
        'M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17h-2v-2H8v2H6Zm3-12h2V7H9v2Zm0 4h2v-2H9v2Zm4-4h2V7h-2v2Zm0 4h2v-2h-2v2Z',
    },
    keyOutcomes: [
      'Standardise reporting across sites and suppliers',
      'Make responsibilities and ownership unambiguous',
      'Improve assurance without slowing down delivery',
    ],
    recommendedRoutes: [
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'A single operational picture across your estate.',
      },
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Govern fire safety actions with clear accountability.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Track energy performance and support carbon reporting.',
      },
    ],
    challenges: [
      {
        title: 'Fragmented systems',
        description: 'Security, fire safety, occupancy, and energy data sit in silos, slowing down decisions.',
      },
      {
        title: 'Mixed-use complexity',
        description: 'Different tenants, floor plans, and suppliers make consistent oversight difficult.',
      },
      {
        title: 'Assurance at scale',
        description: 'Leadership needs consistent reporting across sites, not manual spreadsheets and checklists.',
      },
      {
        title: 'Energy and utilisation waste',
        description: 'Hybrid work patterns create under-used space and wasted HVAC/lighting without live insight.',
      },
    ],
    solutions: [
      {
        title: 'Cortex™ (estate intelligence)',
        bullets: [
          'Unified presence, systems, and operational signals',
          'Consistent reporting across sites and suppliers',
          'Clear accountability for actions and outcomes',
          'Executive-ready dashboards and audit trails',
        ],
      },
      {
        title: 'Energy route (reduce cost and carbon)',
        bullets: [
          'Identify waste and prioritise upgrades with evidence',
          'Align HVAC and lighting with real demand',
          'Support ESG reporting with defensible data',
          'Fund upgrades through measurable savings',
        ],
      },
    ],
    cta: {
      resultStatement:
        'A consistent operating picture across offices - with clearer accountability, lower risk, and better utilisation.',
      title: 'See what this looks like on your estate',
      description:
        'We can map your portfolio and show where visibility, compliance, and savings can be improved - site by site.',
      primaryCta: { label: 'Talk to us', href: '/contact' },
      secondaryCta: { label: 'Explore Cortex', href: '/platform/overview' },
    },
  },
  {
    slug: 'public-sector',
    title: 'Public sector',
    summary: 'Assurance and governance across complex multi-site portfolios.',
    description:
      'Reduce risk and waste across complex, multi-site portfolios where assurance and governance matter.',
    heroImage: '/unifi-assets/canary/photo-1695105082122-3739cd4e6dd4.webp',
    icon: {
      label: 'Shield',
      svgPath:
        'M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 18c-3.1-1.3-6-4.7-6-9V6.3L12 4l6 2.3V11c0 4.3-2.9 7.7-6 9Z',
    },
    keyOutcomes: [
      'Improve assurance with consistent evidence and audit trails',
      'Reduce avoidable spend through prioritisation and visibility',
      'Support governance with clear reporting and controls',
    ],
    recommendedRoutes: [
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Start with immediate risk reduction and statutory actions.',
      },
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'Unify data and responsibilities across a multi-site estate.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Monitor energy and support reporting requirements.',
      },
    ],
    challenges: [
      {
        title: 'Multi-site governance',
        description: 'Complex portfolios need consistent controls, clear ownership, and credible reporting.',
      },
      {
        title: 'Audit readiness',
        description: 'Evidence must be defensible and consistent across buildings, contractors, and departments.',
      },
      {
        title: 'Statutory risk',
        description: 'Fire safety and compliance actions must be tracked and closed with accountability.',
      },
      {
        title: 'Avoidable spend',
        description: 'Without visibility, investment is reactive and waste persists across the estate.',
      },
    ],
    solutions: [
      {
        title: 'FireGuard™ (statutory assurance)',
        bullets: [
          'Accountable workflows and remediation tracking',
          'System monitoring and escalation',
          'Consistent evidence and audit trails',
          'Clear reporting for governance and oversight',
        ],
      },
      {
        title: 'Cortex™ (portfolio control)',
        bullets: [
          'Unify responsibilities, systems, and operational signals',
          'Prioritise actions and spend with evidence',
          'Consistent reporting across sites',
          'Support assurance with clear controls and visibility',
        ],
      },
    ],
    cta: {
      resultStatement:
        'A more governable estate - with consistent evidence, clearer accountability, and fewer compliance surprises.',
      title: 'Strengthen assurance across your portfolio',
      description:
        'Tell us your estate structure and reporting needs. We will recommend the quickest path to audit-ready visibility and risk reduction.',
      primaryCta: { label: 'Talk to us', href: '/contact' },
      secondaryCta: { label: 'Explore FireGuard', href: '/solutions/fireguard' },
    },
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    summary: 'High-occupancy, high-risk environments - with zero tolerance for downtime.',
    description:
      'Keep critical environments safe and compliant while coordinating work across busy, high-occupancy sites.',
    heroImage: '/unifi-assets/corporate/photo-1524758870432-af57e54afa26.webp',
    icon: {
      label: 'Medical cross',
      svgPath:
        'M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4Z',
    },
    keyOutcomes: [
      'Coordinate works around clinical operations and occupancy',
      'Strengthen assurance with clear evidence and ownership',
      'Reduce risk with prioritised, trackable remediation',
    ],
    recommendedRoutes: [
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Prioritise immediate risk reduction and close the loop on actions.',
      },
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'Maintain a single source of truth across sites and teams.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Identify waste and support operational efficiency programmes.',
      },
    ],
    challenges: [
      {
        title: 'Continuous occupancy',
        description: 'Critical spaces are used around the clock, so works and inspections must be coordinated without disrupting care.',
      },
      {
        title: 'High compliance burden',
        description: 'Audit requirements are demanding, and evidence needs to be consistent across departments, sites, and contractors.',
      },
      {
        title: 'Risk escalation',
        description: 'When systems fail, issues must be escalated quickly with clear ownership and tracked remediation.',
      },
      {
        title: 'Operational complexity',
        description: 'Large estates with mixed buildings and responsibilities make it hard to maintain a single source of truth.',
      },
    ],
    solutions: [
      {
        title: 'FireGuard™ (assurance and statutory control)',
        bullets: [
          'Accountable remediation workflows and issue escalation',
          'Consistent evidence and audit trails',
          'Real-time oversight of system status and risk',
          'Clear reporting for governance and leadership teams',
        ],
      },
      {
        title: 'Cortex™ (estate-wide visibility)',
        bullets: [
          'Unified operational picture across sites and teams',
          'Clear responsibilities, actions, and ownership',
          'Evidence-led prioritisation of works and spend',
          'Executive-ready reporting across the portfolio',
        ],
      },
    ],
    cta: {
      resultStatement:
        'Safer, more compliant healthcare environments - with clearer ownership, faster remediation, and defensible evidence.',
      title: 'See how this works across your sites',
      description:
        'Share your priorities and constraints. We will map the fastest route to improved assurance, visibility, and operational control.',
      primaryCta: { label: 'Talk to us', href: '/contact' },
      secondaryCta: { label: 'Explore solutions', href: '/solutions/hub' },
    },
  },
  {
    slug: 'residential',
    title: 'Residential',
    summary: 'Assurance for landlords and managing agents across buildings and residents.',
    description:
      'Support managing agents and landlords with consistent oversight, assurance, and reporting across residential portfolios.',
    icon: {
      label: 'Home',
      svgPath:
        'M12 3 2 12h3v9h6v-6h2v6h6v-9h3L12 3Z',
    },
    keyOutcomes: [
      'Improve visibility across buildings, blocks, and common areas',
      'Support assurance and resident communications with clear records',
      'Reduce risk by prioritising actions and tracking completion',
    ],
    recommendedRoutes: [
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Support fire safety compliance workflows and remediation tracking.',
      },
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'Unify responsibilities and evidence across a portfolio.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Support efficiency initiatives and cost control.',
      },
    ],
    comingSoon: true,
  },
];

export function getSectorBySlug(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
