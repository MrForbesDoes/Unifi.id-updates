class FakeEmailProvider {
  async send({ to, subject, lead }) {
    if (lead.data.simulateEmailFailure === 'true') {
      throw new Error('Simulated fake email delivery failure.');
    }

    const message = [
      '',
      '--- Fake lead email ---',
      `To: ${to}`,
      `Subject: ${subject}`,
      `Lead ID: ${lead.id}`,
      `Form type: ${lead.formType}`,
      `Stored at: ${lead.createdAt}`,
      'Payload:',
      JSON.stringify(lead.data, null, 2),
      '--- End fake lead email ---',
      '',
    ].join('\n');

    console.log(message);

    return {
      provider: 'fake',
      messageId: `fake-${lead.id}`,
    };
  }
}

module.exports = { FakeEmailProvider };
