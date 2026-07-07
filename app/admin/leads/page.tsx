import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import Link from 'next/link';
import { notFound } from 'next/navigation';

const execFileAsync = promisify(execFile);

export const dynamic = 'force-dynamic';

type DynamoString = { S: string };
type DynamoNull = { NULL: boolean };
type DynamoItem = Record<string, DynamoString | DynamoNull | undefined>;

type LeadFieldValue = string | number | boolean | null;

type LeadRow = {
  id: string;
  createdAt: string;
  updatedAt: string;
  formType: string;
  label: string;
  sourcePage: string;
  destinationEmail: string;
  status: string;
  emailStatus: string;
  submittedData: Array<{ key: string; value: LeadFieldValue }>;
};

export default async function LeadsAdminPage() {
  if (process.env.NODE_ENV === 'production' && process.env.ENABLE_LEADS_ADMIN !== 'true') {
    notFound();
  }

  const result = await getRecentLeads();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
              Local Admin
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Recent lead submissions
            </h1>
            <p className="mt-4 text-base leading-7 text-white/72 sm:text-lg">
              Read-only view of recent records from DynamoDB table <code className="text-white">leads-submissions</code>.
              Refresh the page after a test form submission to verify the record landed.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/energy/carbon-reporting"
              className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Open test form
            </Link>
            <Link
              href="/admin/leads"
              className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Refresh list
            </Link>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <StatCard label="Records shown" value={String(result.rows.length)} />
          <StatCard label="Table" value="leads-submissions" />
          <StatCard label="Region" value="eu-west-2" />
          <StatCard label="Profile" value="unifi" />
        </div>

        {result.error ? (
          <div className="rounded-[2rem] border border-red-500/30 bg-red-500/10 p-6">
            <h2 className="text-lg font-semibold">Could not load DynamoDB submissions</h2>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-white/75">
              {result.error}
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-[0.18em] text-white/65">
                  <tr>
                    <th className="px-4 py-4 font-medium">Created</th>
                    <th className="px-4 py-4 font-medium">Form</th>
                    <th className="px-4 py-4 font-medium">Submitted details</th>
                    <th className="px-4 py-4 font-medium">Source page</th>
                    <th className="px-4 py-4 font-medium">Destination</th>
                    <th className="px-4 py-4 font-medium">Status</th>
                    <th className="px-4 py-4 font-medium">Lead ID</th>
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((row) => (
                    <tr key={row.id} className="border-b border-white/10 last:border-b-0">
                      <td className="px-4 py-4 align-top text-white/80">
                        <div>{formatTimestamp(row.createdAt)}</div>
                        <div className="mt-1 text-xs text-white/55">{row.updatedAt ? `Updated ${formatTimestamp(row.updatedAt)}` : ''}</div>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <div className="font-medium text-white">{row.label}</div>
                        <div className="mt-1 text-xs text-white/60">{row.formType}</div>
                      </td>
                      <td className="px-4 py-4 align-top">
                        {row.submittedData.length > 0 ? (
                          <dl className="space-y-2">
                            {row.submittedData.map((field) => (
                              <div key={`${row.id}-${field.key}`} className="rounded-xl border border-white/10 bg-black/10 px-3 py-2">
                                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                                  {formatFieldLabel(field.key)}
                                </dt>
                                <dd className="mt-1 whitespace-pre-wrap break-words text-sm text-white">
                                  {formatFieldValue(field.value)}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        ) : (
                          <span className="text-white/50">No submitted fields</span>
                        )}
                      </td>
                      <td className="px-4 py-4 align-top text-white/80">{row.sourcePage || 'n/a'}</td>
                      <td className="px-4 py-4 align-top text-white/80">{row.destinationEmail}</td>
                      <td className="px-4 py-4 align-top">
                        <div className="font-medium text-white">{row.status}</div>
                        <div className="mt-1 text-xs text-white/60">{row.emailStatus}</div>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <code className="text-xs text-white/75">{row.id}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
      <div className="text-xs uppercase tracking-[0.2em] text-white/55">{label}</div>
      <div className="mt-3 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

async function getRecentLeads() {
  try {
    const { stdout } = await execFileAsync(
      `${process.env.HOME}/.local/bin/aws`,
      [
        'dynamodb',
        'scan',
        '--profile',
        'unifi',
        '--region',
        'eu-west-2',
        '--table-name',
        'leads-submissions',
        '--projection-expression',
        'id, createdAt, updatedAt, formType, label, sourcePage, destinationEmail, #status, emailStatus, #data',
        '--expression-attribute-names',
        '{"#status":"status","#data":"data"}',
        '--max-items',
        '25',
      ],
      {
        env: {
          ...process.env,
          AWS_PAGER: '',
        },
      },
    );

    const parsed = JSON.parse(stdout) as { Items?: DynamoItem[] };
    const rows = (parsed.Items || [])
      .map(mapLeadItem)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

    return { rows, error: '' };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { rows: [] as LeadRow[], error: message };
  }
}

function mapLeadItem(item: DynamoItem): LeadRow {
  return {
    id: getString(item.id),
    createdAt: getString(item.createdAt),
    updatedAt: getString(item.updatedAt),
    formType: getString(item.formType),
    label: getString(item.label),
    sourcePage: getString(item.sourcePage),
    destinationEmail: getString(item.destinationEmail),
    status: getString(item.status),
    emailStatus: getString(item.emailStatus),
    submittedData: parseSubmittedData(getString(item.data)),
  };
}

function getString(value: DynamoString | DynamoNull | undefined) {
  if (!value || 'NULL' in value) {
    return '';
  }

  return value.S;
}

function formatTimestamp(value: string) {
  if (!value) {
    return 'n/a';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function parseSubmittedData(value: string) {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as Record<string, LeadFieldValue>;

    return Object.entries(parsed)
      .filter(([, fieldValue]) => {
        if (fieldValue === null) {
          return true;
        }

        return String(fieldValue).trim() !== '';
      })
      .map(([key, fieldValue]) => ({ key, value: fieldValue }));
  } catch {
    return [{ key: 'raw', value }];
  }
}

function formatFieldLabel(key: string) {
  return key.replace(/[_-]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatFieldValue(value: LeadFieldValue) {
  if (value === null) {
    return 'null';
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  return String(value);
}
