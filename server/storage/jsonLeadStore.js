const fs = require('fs/promises');
const path = require('path');

class JsonLeadStore {
  constructor(filePath = path.join(__dirname, '..', 'data', 'leads.json')) {
    this.filePath = filePath;
    this.queue = Promise.resolve();
  }

  async create(lead) {
    return this.withLock(async () => {
      const leads = await this.readAll();
      leads.push(lead);
      await this.writeAll(leads);
      return lead;
    });
  }

  async update(id, updates) {
    return this.withLock(async () => {
      const leads = await this.readAll();
      const index = leads.findIndex((lead) => lead.id === id);

      if (index === -1) {
        throw new Error(`Lead not found: ${id}`);
      }

      leads[index] = {
        ...leads[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };

      await this.writeAll(leads);
      return leads[index];
    });
  }

  async readAll() {
    try {
      const raw = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(raw);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      }

      throw error;
    }
  }

  async writeAll(leads) {
    await fs.mkdir(path.dirname(this.filePath), { recursive: true });
    await fs.writeFile(this.filePath, JSON.stringify(leads, null, 2) + '\n');
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

module.exports = { JsonLeadStore };
