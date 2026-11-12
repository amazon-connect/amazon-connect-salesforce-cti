---
id: 01-installation
title: Installing the CTI Adapter and Salesforce Lambdas
---

import useBaseUrl from "@docusaurus/useBaseUrl";

### Amazon Connect Salesforce CTI Adapter Managed Package

The Amazon Connect CTI Adapter for Salesforce provides the core
integration between the two platforms. It embeds the Amazon Connect
Contact Control Panel into Salesforce which provides telephony control
as well as access to event data coming from Amazon Connect. Using this
adapter, you can configure screen pops based on customer data, automate
contact center telephony functions like click-to-dial, and establish
presence syncing rules for integration with Salesforce Omni-Channel.
This is the base of the integration.

The first step in the deployment of the integration is to install the
Amazon Connect CTI Adapter managed package from the AppExchange
Marketplace.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find**, type **AppExchange** (the results will
    populate without hitting enter)

3.  Select **AppExchange Marketplace** from the links provided

4.  In the AppExchange window, enter **Amazon Connect** into the
    **Search AppExchange** field and press enter

5.  In the **Search Results**, select **Amazon Connect CTI Adapter**

<img src={useBaseUrl('/img/shared/image09.png')} />

6.  On the **Amazon Connect CTI Adapter** detail page, select **Get It
    Now**

<img src={useBaseUrl('/img/lightning/image4.png')} />

7.  If you are presented with the Log In to AppExchange screen, select
    **Open Login Screen**. You should then be presented with an Allow
    Access Screen. Choose **Allow**

<img src={useBaseUrl('/img/lightning/image5.png')} />

8.  On the **Where do you want to install Amazon Connect CTI Adapter**
    page, choose the **Install Here** button in the Install in This Org
    section

<img src={useBaseUrl('/img/lightning/image6.png')} />

9.  On the **Confirm installation details** screen, fill out the **Tell
    us about yourself** form, check the box to **agree with the terms
    and conditions**, and optionally select the box to **allow the
    provider to contact you**. Then select **Confirm and Install**

<img src={useBaseUrl('/img/lightning/image7.png')} />

10. Select **Install for Admins Only**, then choose **Install**. **THIS SELECTION IS VERY IMPORTANT** - if you select the wrong option, then standard users may have access to objects and pages that they shouldn't have access to.

<img src={useBaseUrl('/img/lightning/image8.png')} />

11. The CTI Adapter will take some time to install. While it installs,
    you will be presented with the **This app is taking a long time to
    install screen.**

12. Choose **Done**.

<img src={useBaseUrl('/img/lightning/image9.png')} />

13. Once you receive confirmation that the **installation has
    completed** via email, return to the browser

14. Close the **Amazon Connect CTI Adapter** detail page (if still open)

15. In Quick Find, enter **Installed**, then select Installed Packages
    from the result

<img src={useBaseUrl('/img/lightning/image10.png')} />

16. Once the **Installed Packages** page opens, validate that the
    **Amazon Connect -- Universal Package** is installed

<img src={useBaseUrl('/img/lightning/image11.png')} />

### Amazon Connect Salesforce Lambda package

The Amazon Connect Salesforce Lambda package adds considerable
capability to the integration. It includes data connectivity between
Amazon Connect and Salesforce for typical tasks like lookups, case
creation, and updates. Additionally, it adds new features like real-time
and historical data imports, contact trace record imports, recording
import, transcription, and contact analytics functions. These
capabilities are configurable and can be activated or deactivated on a
call-by-call basis.

The Amazon Connect Salesforce Lambda package is delivered via the AWS
Serverless Application Repository. The AWS Serverless Application
Repository enables you to quickly deploy code samples, components, and
complete applications. Each application is packaged with an AWS
Serverless Application Model (SAM) template that defines the AWS
resources used. There is no additional charge to use the Serverless
Application Repository - you only pay for the AWS resources used in the
applications you deploy.

To install the Lambda package, first complete the [Managed Package Manual Setup](/docs/classic/installation/03-managed-package-manual-setup).
Then follow the [Salesforce Lambdas Manual Setup](/docs/classic/installation/04-salesforce-lambdas-manual-setup) guide from the start. It tells you which data to
collect, and which parameters to set before you deploy.

### Upgrading from a Guided Setup installation

Guided Setup is retired.
If you used Guided Setup, start to remove the resources that you created for it before you upgrade the Salesforce Lambdas.
See [Appendix E: Removing the Guided Setup Resources](/docs/classic/appendices/appendix-e-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice).
