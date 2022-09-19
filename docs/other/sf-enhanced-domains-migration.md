---
id: sf-enhanced-domains-migration
title: Salesforce Enhanced Domains - CTI Adapter Migration steps
---

import useBaseUrl from "@docusaurus/useBaseUrl";

As part of the Spring ’23 Salesforce platform release, Salesforce is modifying the Salesforce domain format. In order to incorporate this change, you will need to make select modifications to your CTI Adapter / Salesforce Lambdas configuration. See [here](https://help.salesforce.com/s/articleView?id=sf.domain_name_enhanced.htm&type=5) for official notes from Salesforce.

To be clear, not all steps below are required immediately (some features will continue working without following the below steps). But it is highly recommended to follow the below steps since Salesforce is at liberty to change functionality of deprecated features whenever they like.

<img src={useBaseUrl('/img/shared/enhanced-domains-1.png')} />

### Enabling Enhanced Domains

Below are steps on how to enable enhanced domains. Without enabling this feature manually, these changes will be enforced as part of the Spring ’23 release.

1. In your Salesforce instance, navigate to **Setup**.
2. Navigate to the **My Domain** page
3. In the **Step 3: Deploy Your New Domain** section, Select **Deploy New Domain**.

### Re-Allowlisting domains

Because domains are being changed, you must re-allowlist your domains - follow the instructions [here](https://amazon-connect.github.io/amazon-connect-salesforce-cti/docs/lightning/installation/03-managed-package-manual-setup#allowlist-your-salesforce-org-with-amazon-connect).

### Change Serverless Application SalesforceHost parameter

One of the [parameters](https://amazon-connect.github.io/amazon-connect-salesforce-cti/docs/lightning/installation/04-salesforce-lambdas-manual-setup#install-the-amazon-connect-salesforce-lambda-package) in the AmazonConnectSalesforceLambda serverless repo package is **SalesforceHost** (the url to your Salesforce instance). This parameter must be changed. This can be done by changing the parameter and redeploying the lambdas. Alternatively, if you do not wish to redeploy the lambdas, you can modify the lambda environment variables manually.

1. In the AWS console, navigate to the CloudFormation service
2. Select the appropriate CloudFormation stack (default name is serverlessrepo-AmazonConnectSalesforceLambda)
3. Select the **Update** button
4. Select **Next**
5. Change the **SalesforceHost** parameter to the appropriate host
6. Update the stack

### SAML

You must reconfigure SAML once enabling enhanced domains - see directions [here](https://amazon-connect.github.io/amazon-connect-salesforce-cti/docs/lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration/#create-the-iam-role-and-policy). In particular, you must re-upload the metadata file to AWS IAM, and change the CTI Adapter SSO URL.

### Chat Widget Integration

You must re-fetch the Chat Widget Visualforce page URL and re-allow list the URL - see instructions [here](https://amazon-connect.github.io/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/11-chat-widget-integration).
