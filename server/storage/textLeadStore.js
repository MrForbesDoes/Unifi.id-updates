const fs = require('fs/promises');
const os = require('os');
const path = require('path');

class TextLeadStore {
  constructor(filePath = process.env.LEAD_TEXT_FILE || path.join(os.homedir(), 'Desktop', 'unifi-lead-submissions.txt')) {
    this.filePath = filePath;
    this.queue = Promise.resolve();
  }

  async append(lead) {
    return this.withLock(async () => {
      await fs.mkdir(path.dirname(this.filePath), { recursive: true });
      await fs.appendFile(this.filePath, formatLead(lead), 'utf8');
      return lead;
    });
  }

  async withLock(operation) {
    const previous = this.queue;
    let release;
    this.queue = new Promise((resolve) => {
      release = resolve;
    });

    await previous;

    try {
      return await operation();
    } finally {
      release();
    }
  }
}

function formatLead(lead) {
  const lines = [
    '============================================================',
    `Submitted: ${lead.createdAt}`,
    `Lead ID: ${lead.id}`,
    `Form: ${lead.label} (${lead.formType})`,
    `Source page: ${lead.sourcePage || 'Unknown'}`,
    `Destination: ${lead.destinationEmail}`,
    '',
    'Submitted details:',
    ...Object.entries(lead.data).map(([key, value]) => `${formatLabel(key)}: ${value}`),
    '',
  ];

  return `${lines.join('\n')}\n`;
}

function formatLabel(key) {
  return key.replace(/[_-]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

module.exports = { TextLeadStore };
