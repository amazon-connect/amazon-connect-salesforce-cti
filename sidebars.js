module.exports = {
  lightning: [
    'lightning/notices',
    'lightning/release-notes',
    'lightning/introduction/01-key-benefits',
    {
      Installation: [
        'lightning/installation/01-installing-package-from-appexchange',
        'lightning/installation/02-installing-salesforce-lambdas',
        'lightning/installation/03-upgrading-from-an-earlier-version',
        'lightning/installation/04-adapter-installation-troubleshooting',
      ],
    },
    {
      'CTI Adapter': [
        'lightning/cti-adapter/01-cti-adapter-configuration',
        'lightning/cti-adapter/02-cti-attributes',
        'lightning/cti-adapter/03-cti-flows',
        'lightning/cti-adapter/04-presence-sync-rules',
        'lightning/cti-adapter/05-localization',
        'lightning/cti-adapter/06-set-agent-status-on-session-end',
        'lightning/cti-adapter/07-contact-lens',
        'lightning/cti-adapter/08-cti-actions',
        'lightning/cti-adapter/09-recording-controls',
        'lightning/cti-adapter/10-voicemail-drops',
      ],
    },
    {
      'Salesforce Lambdas': [
        'lightning/salesforce-lambdas/01-contact-flow-salesforce-lambdas',
        'lightning/salesforce-lambdas/02-historical-metrics',
        'lightning/salesforce-lambdas/03-real-time-metrics',
        'lightning/salesforce-lambdas/04-contact-channel-analytics',
        'lightning/salesforce-lambdas/05-contact-trace-record-import',
        'lightning/salesforce-lambdas/06-postcall-contact-lens-import',
      ],
    },
    {
      Appendices: [
        {
          'Appendix A: Required Salesforce Configurations': [
            'lightning/appendices/appendix-a-required-salesforce-configurations/01-configuring-my-domain',
            'lightning/appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel',
          ],
        },
        'lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration',
        'lightning/appendices/appendix-c-cti-flow-sources-and-events/01-cti-flow-sources-and-events',
        'lightning/appendices/appendix-d-cti-flow-examples/01-cti-flow-examples',
        'lightning/appendices/appendix-e-salesforce-high-velocity-sales/01-high-velocity-sales',
        'lightning/appendices/appendix-f-cti-flow-blocks/01-cti-flow-blocks',
      ],
    },
  ],
  classic: [
    'classic/notices',
    'classic/release-notes',
    {
      Introduction: [
        'classic/introduction/01-key-benefits-and-requirements',
      ],
    },
    {
      Installation: [
        'classic/installation/01-installing-the-amazon-connect-cti-adapter',
        'classic/installation/02-installing-the-amazon-connect-salesforce-lambdas',
        'classic/installation/03-upgrading-from-an-earlier-version',
        'classic/installation/04-cti-adapter-installation-troubleshooting',
      ],
    },
    {
      'CTI Adapter': [
        'classic/cti-adapter/01-cti-adapter-configuration',
        'classic/cti-adapter/02-omnipresence-agent-state-sync',
        'classic/cti-adapter/03-contact-attributes-display',
        'classic/cti-adapter/04-call-recording-link-for-task',
        'classic/cti-adapter/05-call-display-account-page',
        'classic/cti-adapter/06-outbound-campaign-calls',
        'classic/cti-adapter/07-amazon-connect-reports',
        'classic/cti-adapter/08-cti-flows',
        'classic/cti-adapter/09-localization',
        'classic/cti-adapter/10-cti-actions',
        'classic/cti-adapter/11-recording-controls',
      ],
    },
    {
      'Salesforce Lambdas': [
        'classic/salesforce-lambdas/01-contact-flow-salesforce-lambdas',
      ],
    },
    {
      Appendices: [
        'classic/appendices/appendix-a-cti-flow-sources-and-events/01-cti-flow-sources-and-events',
        'classic/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuring-salesforce-as-your-identity-provider',
        'classic/appendices/appendix-c-cti-flow-examples/01-cti-flow-examples',
        'classic/appendices/appendix-d-cti-flow-blocks/01-cti-flow-blocks',
      ],
    },
  ],
};
