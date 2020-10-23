# Amazon Connect CTI Adapter v5 for Salesforce Lightning

Setup and Installation Guide

<p align="center">
  <img src="./media/image1.png" />
</p>

*September, 2020*

*© Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. SPDX-License-Identifier: CC-BY-SA-4.0*

#### Notices

This document is provided for informational purposes only. It represents
AWS's current product offerings and practices as of the date of issue of
this document, which are subject to change without notice. Customers are
responsible for making their own independent assessment of the
information in this document and any use of AWS's products or services,
each of which is provided "as is" without warranty of any kind, whether
express or implied. This document does not create any warranties,
representations, contractual commitments, conditions or assurances from
AWS, its affiliates, suppliers or licensors. The responsibilities and
liabilities of AWS to its customers are controlled by AWS agreements,
and this document is not part of, nor does it modify, any agreement
between AWS and its customers.

#### Abstract

This guide details the integration between Amazon Connect and Salesforce
Lightning. It covers the installation, configuration, and operation of
the two primary components of the integration: the Amazon Connect CTI
Adapter for Salesforce and the AWS Serverless Application Repository for
Amazon Connect Salesforce integration.

<!-- 
In order for the table of contents to work with the PDF generator, make sure the header of the section
the table of contents entry should link to has an id that matches the text of the link, lowercase, and
with dashes (-) in place for spaces. ex. the 'Key Benefits and Requirements' will navigate to a link 
with id 'key-benefits-and-requirements'
-->
Table of Contents
============

- Introduction
  - [Key Benefits and Requirements](01%20Introduction/01%20Key%20Benefits%20and%20Requirements.md)
- Installation
  - [Installing CTI Adapter Managed Package from AppExchange](02%20Installation/01%20Installing%20CTI%20Adapter%20Managed%20Package%20from%20AppExchange.md)
  - [Installing the Amazon Connect Salesforce Lambda Package](02%20Installation/02%20Installing%20the%20Amazon%20Connect%20Salesforce%20Lambda%20Package.md)
  - [Upgrading from an Earlier Version](02%20Installation/03%20Upgrading%20from%20an%20Earlier%20Version.md)
- Configuring and Using CTI Adapter Features
  - [CTI Adapter Configuration](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/01%20CTI%20Adapter%20Configuration.md)
  - [Attributes](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/02%20Attributes.md)
  - [CTI Flows](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/03%20CTI%20Flows.md)
  - [Presence Sync Rules](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/04%20Presence%20Sync%20Rules.md)
- Configuring and Using AWS Serverless Application Repository for Salesforce Features
  - [Accessing the Salesforce API from Amazon Connect Contact Flows Using AWS Lambda](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Accessing%20the%20Salesforce%20API%20from%20Amazon%20Connect%20Contact%20Flows%20Using%20AWS%20Lambda.md)
  - [Amazon Connect Historical Metrics in Salesforce](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/02%20Amazon%20Connect%20Historical%20Metrics%20in%20Salesforce.md)
  - [Amazon Connect Real-Time Metrics in Salesforce](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/03%20Amazon%20Connect%20Real-Time%20Metrics%20in%20Salesforce.md)
  - [Contact Channel Analytics](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/04%20Contact%20Channel%20Analytics.md)
  - [Contact Trace Record Import](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/05%20Contact%20Trace%20Record%20Import.md)
- Appendix A - Required Salesforce Configurations
  - [Configuring My Domain in Salesforce](05%20Appendix%20A%20-%20Required%20Salesforce%20Configurations/01%20Configuring%20My%20Domain%20in%20Salesforce.md)
  - [Configure Salesforce Omnichannel for Testing](05%20Appendix%20A%20-%20Required%20Salesforce%20Configurations/02%20Configure%20Salesforce%20Omnichannel%20for%20Testing.md)
- Appendix B - Configuring Salesforce as Your Identity Provider
  - [Configuration](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuration.md)
- Appendix C - CTI Flow Sources and Events
  - [CTI Flow Sources and Events](07%20Appendix%20C%20-%20CTI%20Flow%20Sources%20and%20Events/01%20CTI%20Flow%20Sources%20and%20Events.md)
- Appendix D - CTI Flow Examples
  - [CTI Flow Examples](08%20Appendix%20D%20-%20CTI%20Flow%20Examples/01%20CTI%20Flow%20Examples.md)
- Appendix E - Integration with Salesforce High Velocity Sales
  - [High Velocity Sales](09%20Appendix%20E%20-%20Integration%20with%20Salesforce%20High%20Velocity%20Sales/01%20High%20Velocity%20Sales.md)
- Appendix F - CTI Flow Blocks
  - [CTI Flow Blocks](10%20Appendix%20F%20-%20CTI%20Flow%20Blocks/01%20CTI%20Flow%20Blocks.md)

Introduction
============

The Amazon Connect CTI integration consists of two components, a
[managed Salesforce package](https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000EJH4yUAH)
and an [AWS Serverless application](https://aws.amazon.com/serverless/serverlessrepo/)
deployed to your AWS environment. The managed package provides the core CTI
integration between Amazon Connect and Salesforce. The Serverless
repository adds to the core CTI integration by providing additional
tools that provide access and analysis of data from both platforms. With
these components, customers can build a deep integration between Amazon
Connect and Salesforce.

<img src="./media/image2.png" />

Release Notes
=============

### 5.3 September 2020
- **Bugfix**: Fix the issue that caused ACSFCCP_CallRecordingTask component to not work.

### 5.1 Late August 2020
- **Bugfix**: Ensure "Get App View" CTI Flow block doesn\'t break the sidebar
- **Enhancement**: Add "queueARN" field to "Dial Number\" CTI Flow block
- **Bugfix**: Ensure some required CTI Flow block fields are not shown as "optional"
- **Bugfix**: Ensure \"Save (or Create) a Record\" block works as expected
- **Bugfix**: Fix the validation error on "CallDurationInSeconds" field in "Create a Task\" block
- **Bugfix**: Fix phantom scrollbar on Windows machines
- **Bugfix**: Fix issue where copying contact attributes to clipboard doesn't work
- **Bugfix**: Fix issue where "saveLog" CTI Flow block throws an error
- **Bugfix**: Fix issue with onOffline  Flow event not firing
- **Bugfix**: Fix various omnichannel presence sync bugs
- **Bugfix**: Ensure the CCP default dimensions are adjusted to CCPv2 defaults
- **Feature:** Add block \"Set Agent Status By Name on Connect.\"

### 5.0 August 2020
- **This release has new features and updates:** Please test and validate version 5.0 in your Salesforce sandbox before upgrading this in production.
- **CTI Flows:** CTI Flows replace Lightning CTI Extensions in allowing customers to build their agent  for Lightning and Classic via a drag  drop UI. Many of the CTI blocks are similar to the Lightning CTI Extension script API calls and can be mapped similarly. Lightning CTI Extension scripts are NOT automatically migrated to CTI Flows. When upgrading the  with existing scripts, it will give you the option to download the existing script for reference before building your CTI Flows. We strongly recommend you validate this install/upgrade in a test environment and fully test the CTI Flows against your previous scripts functionality. Please open a support ticket if there is additional functionality you require from your current scripting implementation.
- **Security Profile improvements:**  AC Administrator, AC Agent, and AC Manager permission sets to enforces objects access and fields level  (FLS) as per Salesforce security guideline for managed package. To  Amazon Connect Objects and fields, user should either one of Amazon Connect permission sets AC Administrator, AC Agent, and AC Manager.
- **Attributes:** Amazon Connect CCP (Contact Control Panel) in Lightning  Classic now display an overlay for showing attributes consistently.
- **AWS Secrets Manager** support for storing Salesforce credentials.
- **VPC Support**: ability to place Lambdas in VPC
- **New Salesforce API integration:** Exposed new operations in sfinvokeapi  read or create Salesforce records(query queryOne, createChatterPost, createChatterComment, lookup_all, delete)
- **Upgrade:** Amazon Connect Streams API bumped up to version 1.5.
- **Bugfix:** Task creation issue for non connect users - Fixed task trigger apex code, added a validation before  security access check for Amazon  managed package objects
- **Bugfix:** Contact interaction  fixed.
- **Other minor bugfixes and improvements**

### 4.5 April 2020
- **This release has new features and updates:** Please test and validate version 4.5 in your Salesforce sandbox before upgrading this in production.
- **Installation / Configuration:** AC_Administrator permission set has been added to manage CTI Configuration in addition to AC_Manager and AC_Agent. See documentation for further information.
- **API:** Updated support for CCPv2 in Classic/Console. See documentation for Call Center settings.
- **Bugfix:** Updated attribute display to resolve duplicated attributes.
- **Security:** Improved control access at the object-level, the record-level, and at the field level.

### 4.4 March 2020
- **This release has significant new features and updates:** Please test and validate version 4.4 in your Salesforce sandbox before upgrading this in production.
- **Documentation:** Guide has been rewritten and restructured based on feedback.
- **Installation / Configuration:** Improved installation and configuration guide
- **Installation / Configuration:** Added Enhanced Agent Logout functionality to Lightning.
- **API:** Updated to the latest Amazon Connect Streams and Chat libraries
- **API:** Additional extensibility methods provided
- **Setup:** Improved Presence Sync Rule editor
- **Setup:** CTI Adapter validation is performed upon initialization and will inform the user of common misconfigurations.
- **Setup:** Additional CTI Script examples are provided.
- **Setup:** The ability to place the lightning transcript view on Task, Contact Channel, and Contact Channel Analytics object has been added.
- **Bugfix:** Updated whitelisting steps to address login popup issue.
- **Bugfix:** OmniChannel workload  data not being usable has been resolved
- **Bugfix:** CTI Attribute issue when processing multiple pieces of contact attribute data has been resolved.
- **Bugfix:** The call transcript now scrolls within a fixed region rather than consuming vertical space.
- **Bugfix:** Finding Task Record in Classic/Console fixed.
- **Security:** The ability to create, update, and delete AC_CtiAdapter, AC_CtiScript, AC_CtiAttribute and AC_PresenceSyncRule records has been removed from the AC_Agent permission set.

### 4.2 December 2019
- **This release has significant new features and updates:** Please test and validate version 4.2 in your Salesforce sandbox before upgrading this in production.
- **Installation / Configuration**: Improved installation and configuration guide
- **API**: Lightning CCP Extension scripts and reference guide
- **Setup**: A default CTI adapter and scripts for click-to-dial, voice contact pop, and chat contact pop are not included in the base installation.
- **Editor**: A more robust script editor is included for use in CTI adapter / script configuration.
- **Bugfix**: SSO issue has been resolved

### 4.1 November 2019
- **This release has significant new features and updates:** Please test and validate version 4.1 in your Salesforce sandbox before upgrading this in production. As we look to simplify documentation, this release introduces a new [**Amazon Connect CTI Adapter v4 for Salesforce Lightning**](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Amazon+Connect+CTI+Adapter+for+Salesforce+Lightning+-+Setup+and+Installation+Guide.pdf) setup and installation guide. Please review this setup guide in detail to see all the latest changes for Lightning CTI Adapter installations.
- **Classic and Console CTI setup guide:** Please use the [**Amazon Connect CTI Adapter v4 for Salesforce   Classic**](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Amazon+Connect+CTI+Adapter+for+Salesforce+Classic+-+Setup+and+Installation+Guide.pdf) setup and installation guide for Classic and Console CTI Adapter installations.
- **Amazon Connect Chat and Contact Control Panel (CCP) v2:** support for Amazon Connect chat and integration of CCP v2. CCP v2 is required for Lightning CTI Adapter installations. CCP v1 is still supported for Classic / Console CTI Adapter installations.
- **Historical and Real-Time Reporting:** updated historical metric functionality with additional metrics and dashboards. Added real-time metrics and dashboards. This functionality requires an update of AWS Serverless Lambda functions for Salesforce.
- **Lightning CCP Extensions and configuration:** We have revamped the approach for the Call Center config and have added a new AC CTI Adapters Lighting config page.
- **High Velocity Sales:** CTI Adapter integration supported for Salesforce High Velocity Sales product.