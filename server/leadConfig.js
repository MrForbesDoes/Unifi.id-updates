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
};

module.exports = { leadForms };
