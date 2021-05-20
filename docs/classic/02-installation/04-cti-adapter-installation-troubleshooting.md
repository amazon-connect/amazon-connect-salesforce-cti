---
id: 04-cti-adapter-installation-troubleshooting
title: CTI Adapter Installation Troubleshooting and Common Issues
---

import useBaseUrl from "@docusaurus/useBaseUrl";

#### I upgraded my adapter to v5.10, but I cannot see the CCP Config changes

There is a bug with Salesforce that doesn't update a page layout when you upgrade a package. To fix this, go to Setup and search for `Objects` and click the option under `Create`. Once you're on the Custom Object page, search for the `AC CTI Adapter` object and click on it. Then go into `Page Layouts` and click `Edit` on the layout you are using (Typically `AC CTI Adapter Layout - August 2020`).  Then, drag and drop the `Audio Device Settings` and `Page Layout Settings` into the desired spot on the page. Finally hit save.

<img src={useBaseUrl('/img/lightning/troubleshooting2.png')} />

#### Error “refused to run the JavaScript URL because it violates the following Content Security Policy directive...”

This is an allowlisting issue, please review the installation and ensure that both URLs are properly allowlisted.

#### Error “refused to frame” Visualforce page

<img src={useBaseUrl('/img/classic/troubleshooting0.png')} />

This can happen if the customer has checked “Enable clickjack protection” on Salesforce session settings. The solution is to uncheck that. 

<img src={useBaseUrl('/img/classic/troubleshooting1.png')} />

#### I upgraded my adapter to v5, but I don’t see the CTI Flows feature.

See the [Upgrading from an Earlier Version](/docs/classic/02-installation/03-upgrading-from-an-earlier-version) section of the installation guide.

#### I upgraded my adapter from v3 to v5 and we lost some screenpop functionality.

All screenpop functionality native to v3 now needs to be recreated using CTI Flows. Please review the [CTI Flow Examples](/docs/classic/05-appendices/03-appendix-c-cti-flow-examples/01-cti-flow-examples) for more details, all screenpop functionality from v3 has been recreated.

#### Certain picklists are missing picklist items.

When upgrading from a version of the package to a higher version of the package in which new picklist items were added to a picklist, those new picklist items won't be installed. This is a [known Salesforce issue](https://salesforce.stackexchange.com/questions/207367/i-have-a-managed-package-if-i-add-values-a-picklist-will-my-customers-get-it-o).
