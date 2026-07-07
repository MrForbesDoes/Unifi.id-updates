import crypto from 'node:crypto';

import { DynamoDBClient, PutItemCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const dynamo = new DynamoDBClient({});
const ses = new SESv2Client({});

const leadForms = {
  demo: {
    label: 'Demo request',
    destinationEmail: 'info@unifi.id',
    requiredFields: ['name', 'email'],
  },
  contact: {
    label: 'Website enquiry',
    destinationEmail: 'info@unifi.id',
    requiredFields: ['name', 'email', 'message'],
  },
  energy_survey: {
    label: 'Energy survey request',
    destinationEmail: 'energy@unifi.id',
    requiredFields: ['name', 'email'],
  },
  energy_contact: {
    label: 'Energy team enquiry',
    destinationEmail: 'energy@unifi.id',
    requiredFields: ['name', 'email', 'message'],
  },
  carbon_reporting_contact: {
    label: 'Carbon reporting enquiry',
    destinationEmail: 'energy@unifi.id',
    requiredFields: ['name', 'email', 'message'],
  },
};

const tableName = process.env.LEADS_TABLE;
const fromEmail = process.env.SES_FROM_EMAIL;
const replyToEmail = process.env.SES_REPLY_TO_EMAIL || fromEmail;
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

export async function handler(event) {
  const origin = event?.headers?.origin || event?.headers?.Origin || '';
  const method = event?.requestContext?.http?.method || event?.httpMethod || 'POST';

  if (method === 'OPTIONS') {
    return respond(204, '', origin);
  }

  if (method !== 'POST') {
    return respond(405, { ok: false, message: 'Method not allowed.' }, origin);
  }

  if (!tableName) {
    return respond(500, { ok: false, message: 'Lead table is not configured.' }, origin);
  }

  if (!fromEmail) {
    return respond(500, { ok: false, message: 'SES sender is not configured.' }, origin);
  }

  let payload;

  try {
    const rawBody = event?.isBase64Encoded
      ? Buffer.from(event.body || '', 'base64').toString('utf8')
      : event?.body || '{}';
    payload = JSON.parse(rawBody);
  } catch {
    return respond(400, { ok: false, message: 'Invalid JSON payload.' }, origin);
  }

  const { formType, data = {}, sourcePage } = payload || {};
  const config = leadForms[formType];

  if (!config) {
    return respond(400, { ok: false, message: 'Unknown form type.' }, origin);
  }

  if (isSpam(data)) {
    return respond(202, { ok: true, message: 'Submission received.' }, origin);
  }

  const missingFields = getMissingFields(config.requiredFields, data);

  if (missingFields.length > 0) {
    return respond(
      400,
      {
        ok: false,
        message: `Missing required field${missingFields.length === 1 ? '' : 's'}: ${missingFields.join(', ')}`,
      },
      origin,
    );
  }

  if (!isEmail(data.email)) {
    return respond(400, { ok: false, message: 'Please enter a valid email address.' }, origin);
  }

  const now = new Date().toISOString();
  const sanitizedData = sanitizeLeadData(data);
  const lead = {
    id: crypto.randomUUID(),
    formType,
    label: config.label,
    destinationEmail: config.destinationEmail,
    sourcePage: sourcePage || null,
    status: 'received',
    emailStatus: 'pending',
    data: sanitizedData,
    createdAt: now,
    updatedAt: now,
  };

  await dynamo.send(
    new PutItemCommand({
      TableName: tableName,
      Item: marshallLead(lead),
    }),
  );

  try {
    const emailResult = await sendLeadEmail({
      to: config.destinationEmail,
      subject: buildSubject(config.label, sanitizedData),
      lead,
    });

    await updateLead(lead.id, {
      status: 'completed',
      emailStatus: 'sent',
      emailProvider: emailResult.provider,
      emailMessageId: emailResult.messageId,
    });

    return respond(201, { ok: true, leadId: lead.id, message: 'Submission received.' }, origin);
  } catch (error) {
    await updateLead(lead.id, {
      status: 'email_failed',
      emailStatus: 'failed',
      emailError: error instanceof Error ? error.message : String(error),
    });

    return respond(
      502,
      {
        ok: false,
        leadId: lead.id,
        message: 'Your details were saved, but the notification email could not be sent.',
      },
      origin,
    );
  }
}

function respond(statusCode, body, origin) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (origin && allowedOrigins.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers.Vary = 'Origin';
  }

  if (body === '') {
    return {
      statusCode,
      headers,
      body: '',
    };
  }

  return {
    statusCode,
    headers,
    body: JSON.stringify(body),
  };
}

function getMissingFields(requiredFields, data) {
  return requiredFields.filter((field) => !String(data[field] || '').trim());
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function isSpam(data) {
  return Boolean(String(data.website || '').trim());
}

function sanitizeLeadData(data) {
  return Object.fromEntries(
    Object.entries(data)
      .filter(([key]) => key !== 'website')
      .map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value]),
  );
}

function buildSubject(label, data) {
  const subject = String(data.subject || label).trim();
  return `[Unifi.id] ${subject}`;
}

function marshallLead(lead) {
  return {
    id: { S: lead.id },
    formType: { S: lead.formType },
    label: { S: lead.label },
    destinationEmail: { S: lead.destinationEmail },
    sourcePage: lead.sourcePage ? { S: lead.sourcePage } : { NULL: true },
    status: { S: lead.status },
    emailStatus: { S: lead.emailStatus },
    data: { S: JSON.stringify(lead.data) },
    createdAt: { S: lead.createdAt },
    updatedAt: { S: lead.updatedAt },
  };
}

async function updateLead(id, updates) {
  const expressionParts = [];
  const attributeNames = {};
  const attributeValues = {};

  for (const [key, value] of Object.entries({
    ...updates,
    updatedAt: new Date().toISOString(),
  })) {
    const nameKey = `#${key}`;
    const valueKey = `:${key}`;
    expressionParts.push(`${nameKey} = ${valueKey}`);
    attributeNames[nameKey] = key;
    attributeValues[valueKey] = { S: String(value) };
  }

  await dynamo.send(
    new UpdateItemCommand({
      TableName: tableName,
      Key: { id: { S: id } },
      UpdateExpression: `SET ${expressionParts.join(', ')}`,
      ExpressionAttributeNames: attributeNames,
      ExpressionAttributeValues: attributeValues,
    }),
  );
}

async function sendLeadEmail({ to, subject, lead }) {
  const bodyLines = [
    `Lead ID: ${lead.id}`,
    `Form type: ${lead.formType}`,
    `Label: ${lead.label}`,
    `Source page: ${lead.sourcePage || 'n/a'}`,
    `Submitted at: ${lead.createdAt}`,
    '',
    'Submitted details:',
    ...Object.entries(lead.data).map(([key, value]) => `${formatLabel(key)}: ${String(value ?? '')}`),
  ];

  const command = new SendEmailCommand({
    FromEmailAddress: fromEmail,
    Destination: {
      ToAddresses: [to],
    },
    ReplyToAddresses: replyToEmail ? [replyToEmail] : undefined,
    Content: {
      Simple: {
        Subject: {
          Data: subject,
        },
        Body: {
          Text: {
            Data: bodyLines.join('\n'),
          },
        },
      },
    },
  });

  const result = await ses.send(command);

  return {
    provider: 'ses',
    messageId: result.MessageId || `ses-${lead.id}`,
  };
}

function formatLabel(key) {
  return key.replace(/[_-]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}
