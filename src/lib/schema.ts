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
    url: 'https://unifi.id/',
    description:
      'unifi.id is a movement-intelligence and decarbonisation platform that helps buildings and schools unify occupancy, fire safety, energy, and compliance data into one verifiable system.',
  };
}
