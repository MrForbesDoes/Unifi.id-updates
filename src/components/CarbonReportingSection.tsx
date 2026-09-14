import { Section } from './Section';
import { ButtonLink } from './ButtonLink';
import Card from './Card';
import Text from './Text';

const audiences = [
  {
    title: 'Councils and public estates',
    description:
      'Bring schools, buildings and services into one consistent reporting structure while each organisation keeps its own detail.',
  },
  {
    title: 'Schools and academy trusts',
    description:
      'Keep a Climate Action Plan current, measurable and connected to practical action rather than stored in spreadsheets.',
  },
  {
    title: 'Other organisations',
    description:
      'Build a carbon baseline, track progress and turn reporting into a prioritised programme of improvement.',
  },
];

export default function CarbonReportingSection() {
  return (
    <Section backgroundColor="gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 max-w-4xl">
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-unifi-blue">
            Carbon Reporting &amp; Action Planning
          </div>
          <Text as="h2" variant="h2" className="mb-6">
            Turn Carbon Reporting into Coordinated Action
          </Text>
          <Text variant="body" className="mb-4">
            Carbon reporting should do more than document what has already happened. Organised
            properly, it can show where energy is being consumed, identify where support and
            investment are most needed, and create a practical route from targets to measurable
            improvement.
          </Text>
          <Text variant="body">
            Through our partnership with TrackZero, Unifi.id helps councils, schools, academy trusts
            and other organisations bring carbon data, actions and progress into one structured
            platform — without relying on disconnected documents and spreadsheets.
          </Text>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <Card key={audience.title} withImage={false} className="border-unifi-blue/10">
              <Text as="h3" variant="h3" className="mb-2">
                {audience.title}
              </Text>
              <Text variant="body">{audience.description}</Text>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/energy/carbon-reporting">
            Explore Carbon Reporting &amp; TrackZero
          </ButtonLink>
          <ButtonLink href="/energy/monitoring" variant="secondary">
            See How Energy Monitoring Supports It
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
