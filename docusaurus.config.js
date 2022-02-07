module.exports = {
  title: 'Amazon Connect Salesforce CTI Adapter',
  tagline: 'Setup and Installation Guide',
  url: 'https://amazon-connect.github.io/amazon-connect-salesforce-cti/',
  baseUrl: '/amazon-connect-salesforce-cti/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'amazon-connect',
  projectName: 'amazon-connect-salesforce-cti',
  themeConfig: {
    navbar: {
      title: 'v5.18',
      logo: {
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/lightning/notices',
          label: 'Lightning',
          position: 'left',
        },
        {
          to: 'docs/classic/notices',
          label: 'Classic',
          position: 'left',
        },
        {
          href: '/docs/other/earlier-versions',
          label: 'Earlier Versions',
          position: 'right',
        },
        {
          href: 'https://github.com/amazon-connect/amazon-connect-salesforce-cti/tree/main/pdf',
          label: 'PDF',
          position: 'right',
        },
        {
          href: 'https://github.com/amazon-connect/amazon-connect-salesforce-cti',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: 'ea20bc7278c46a0a0c12a518a6aa7c04',
      indexName: 'amazon-connect-salesforce-cti'
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Links',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Amazon.com, Inc. or its affiliates. All Rights Reserved.`,
    },
    sidebarCollapsible: false,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/amazon-connect/amazon-connect-salesforce-cti',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/amazon-connect/amazon-connect-salesforce-cti',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
