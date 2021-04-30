module.exports = {
  lightning: [
    'lightning/notices',
    'lightning/release-notes',
    'lightning/01-introduction/01-key-benefits',
    {
      Installation: [
        'lightning/02-installation/01-installing-package-from-appexchange',
        'lightning/02-installation/02-installing-salesforce-lambdas',
        'lightning/02-installation/03-upgrading-from-an-earlier-version',
        'lightning/02-installation/04-adapter-installation-troubleshooting',
      ],
    },
    {
      'CTI Adapter': [
        'lightning/03-cti-adapter/01-cti-adapter-configuration',
        'lightning/03-cti-adapter/02-cti-attributes',
        'lightning/03-cti-adapter/03-cti-flows',
        'lightning/03-cti-adapter/04-presence-sync-rules',
        'lightning/03-cti-adapter/05-localization',
        'lightning/03-cti-adapter/06-set-agent-status-on-session-end',
        'lightning/03-cti-adapter/07-contact-lens',
        'lightning/03-cti-adapter/08-cti-actions',
        'lightning/03-cti-adapter/09-recording-controls',
        'lightning/03-cti-adapter/10-voicemail-drops',
      ],
    },
    {
      'Salesforce Lambdas': [
        'lightning/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas',
        'lightning/04-salesforce-lambdas/02-historical-metrics',
        'lightning/04-salesforce-lambdas/03-real-time-metrics',
        'lightning/04-salesforce-lambdas/04-contact-channel-analytics',
        'lightning/04-salesforce-lambdas/05-contact-trace-record-import',
        'lightning/04-salesforce-lambdas/06-postcall-contact-lens-import',
      ],
    },
    {
      Appendices: [
        {
          'Appendix A: Required Salesforce Configurations': [
            'lightning/05-appendices/appendix-a-required-salesforce-configurations/01-configuring-my-domain',
            'lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel',
          ],
        },
        'lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration',
        'lightning/05-appendices/appendix-c-cti-flow-sources-and-events/01-cti-flow-sources-and-events',
        'lightning/05-appendices/appendix-d-cti-flow-examples/01-cti-flow-examples',
        'lightning/05-appendices/appendix-e-salesforce-high-velocity-sales/01-high-velocity-sales',
        'lightning/05-appendices/appendix-f-cti-flow-blocks/01-cti-flow-blocks',
      ],
    },
  ],
  classic: [
    'classic/notices',
    'classic/release-notes',
    {
      Introduction: [
        'classic/01-introduction/01-key-benefits-and-requirements',
      ],
    },
    {
      Installation: [
        'classic/02-installation/01-installing-the-amazon-connect-cti-adapter',
        'classic/02-installation/02-installing-the-amazon-connect-salesforce-lambdas',
        'classic/02-installation/03-upgrading-from-an-earlier-version',
        'classic/02-installation/04-cti-adapter-installation-troubleshooting',
      ],
    },
    {
      'CTI Adapter': [
        'classic/03-cti-adapter/01-cti-adapter-configuration',
        'classic/03-cti-adapter/02-omnipresence-agent-state-sync',
        'classic/03-cti-adapter/03-contact-attributes-display',
        'classic/03-cti-adapter/04-call-recording-link-for-task',
        'classic/03-cti-adapter/05-call-display-account-page',
        'classic/03-cti-adapter/06-outbound-campaign-calls',
        'classic/03-cti-adapter/07-amazon-connect-reports',
        'classic/03-cti-adapter/08-cti-flows',
        'classic/03-cti-adapter/09-localization',
        'classic/03-cti-adapter/10-cti-actions',
        'classic/03-cti-adapter/11-recording-controls',
      ],
    },
    {
      'Salesforce Lambdas': [
        'classic/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas',
      ],
    },
    {
      Appendices: [
        'classic/05-appendices/01-appendix-a-cti-flow-sources-and-events/01-cti-flow-sources-and-events',
        'classic/05-appendices/02-appendix-b-configuring-salesforce-as-your-identity-provider/01-configuring-salesforce-as-your-identity-provider',
        'classic/05-appendices/03-appendix-c-cti-flow-examples/01-cti-flow-examples',
        'classic/05-appendices/04-appendix-d-cti-flow-blocks/01-cti-flow-blocks',
      ],
    },
  ],
};
