type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'unifi.id',
    alternateName: ['Unifi.id', 'Unifi ID', 'Unifid', 'Unifi'],
    url: 'https://unifi.id/',
    logo: 'https://unifi.id/unifi-assets/unifid-logo.png',
    description:
      'unifi.id is a movement-intelligence and decarbonisation platform that helps buildings and schools unify occupancy, fire safety, energy, and compliance data into one verifiable system.',
  };
}

const SITE = 'https://unifi.id';

type ServiceSchemaInput = {
  name: string;
  description: string;
  /** Site-relative path, e.g. "/energy/monitoring/". */
  path: string;
  serviceType: string;
  /** Buyer types the page is written for, e.g. "Local authorities". */
  audiences?: string[];
  /** Search phrases the service is known by, used as alternate names. */
  alternateNames?: string[];
};

/**
 * Service markup for the Energy Solutions pages. Describes only what the page
 * already says, with the provider tied back to the Organization in the layout.
 */
export function buildServiceSchema({
  name,
  description,
  path,
  serviceType,
  audiences = [],
  alternateNames = [],
}: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    ...(alternateNames.length ? { alternateName: alternateNames } : {}),
    description,
    serviceType,
    url: `${SITE}${path}`,
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    provider: {
      '@type': 'Organization',
      name: 'unifi.id',
      url: `${SITE}/`,
    },
    ...(audiences.length
      ? {
          audience: audiences.map((audienceType) => ({ '@type': 'Audience', audienceType })),
        }
      : {}),
  };
}

/** Breadcrumb trail for a page. Pass items from the root down, ending with the page itself. */
export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}
