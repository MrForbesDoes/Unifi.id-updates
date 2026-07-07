const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { FakeEmailProvider } = require('./email/fakeEmailProvider');
const { leadForms } = require('./leadConfig');
const { JsonLeadStore } = require('./storage/jsonLeadStore');
const { TextLeadStore } = require('./storage/textLeadStore');

loadLocalEnv();

const app = express();
const port = Number(process.env.LEAD_API_PORT || 8787);
const allowedOrigins = (process.env.LEAD_ALLOWED_ORIGINS || 'http://localhost:3000,http://127.0.0.1:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const store = new JsonLeadStore();
const textStore = new TextLeadStore();
const emailProvider = new FakeEmailProvider();
const rateLimitWindowMs = 60 * 1000;
const rateLimitMax = 20;
const rateLimitBuckets = new Map();

app.use(express.json({ limit: '64kb' }));

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
});

app.use('/api/leads', (req, res, next) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip) || { count: 0, resetAt: now + rateLimitWindowMs };

  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + rateLimitWindowMs;
  }

  bucket.count += 1;
  rateLimitBuckets.set(ip, bucket);

  if (bucket.count > rateLimitMax) {
    return res.status(429).json({ ok: false, message: 'Too many submissions. Please try again shortly.' });
  }

  return next();
});

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/leads', async (req, res) => {
  const { formType, data = {}, sourcePage } = req.body || {};
  const config = leadForms[formType];

  if (!config) {
    return res.status(400).json({ ok: false, message: 'Unknown form type.' });
  }

  if (isSpam(data)) {
    return res.status(202).json({ ok: true, message: 'Submission received.' });
  }

  const missingFields = getMissingFields(config.requiredFields, data);

  if (missingFields.length > 0) {
    return res.status(400).json({
      ok: false,
      message: `Missing required field${missingFields.length === 1 ? '' : 's'}: ${missingFields.join(', ')}`,
    });
  }

  if (!isEmail(data.email)) {
    return res.status(400).json({ ok: false, message: 'Please enter a valid email address.' });
  }

  const now = new Date().toISOString();
  const lead = {
    id: crypto.randomUUID(),
    formType,
    label: config.label,
    destinationEmail: config.destinationEmail,
    sourcePage: sourcePage || null,
    status: 'received',
    emailStatus: 'pending',
    data: sanitizeLeadData(data),
    createdAt: now,
    updatedAt: now,
  };

  await store.create(lead);
  await textStore.append(lead);

  try {
    const emailResult = await emailProvider.send({
      to: config.destinationEmail,
      subject: buildSubject(config.label, data),
      lead,
    });

    await store.update(lead.id, {
      status: 'completed',
      emailStatus: 'sent',
      emailProvider: emailResult.provider,
      emailMessageId: emailResult.messageId,
    });

    return res.status(201).json({ ok: true, leadId: lead.id, message: 'Submission received.' });
  } catch (error) {
    await store.update(lead.id, {
      status: 'email_failed',
      emailStatus: 'failed',
      emailError: error.message,
    });

    return res.status(502).json({
      ok: false,
      leadId: lead.id,
      message: 'Your details were saved, but the notification email could not be sent.',
    });
  }
});

app.listen(port, () => {
  console.log(`Lead API listening on http://localhost:${port}`);
});

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

function loadLocalEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');

  if (!fs.existsSync(envPath)) {
    return;
  }

  const envFile = fs.readFileSync(envPath, 'utf8');

  for (const line of envFile.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}
