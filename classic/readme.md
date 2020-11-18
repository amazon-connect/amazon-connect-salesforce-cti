<h1> Amazon Connect CTI Adapter v5 for Salesforce Classic</h1>

<h3 align="center"> Setup and Installation Guide</h3>

<p align="center">
  <img src="./media/image1.png" />
</p>

<h3 align="center"> September, 2020</h3>

_© Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. SPDX-License-Identifier: CC-BY-SA-4.0_

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

This guide provides the steps to setup the integrations between Amazon
Connect and Salesforce using the Amazon Connect CTI Adapter and Amazon
Connect Lambda Package for Salesforce.

<!--
In order for the table of contents to work with the PDF generator, make sure the header of the section
the table of contents entry should link to has an id that matches the text of the link, lowercase, and
with dashes (-) in place for spaces. ex. the 'Key Benefits and Requirements' will navigate to a link
with id 'key-benefits-and-requirements'
-->

# Table of Contents

- Introduction
  - [Key Benefits and Requirements](01%20Introduction/01%20Key%20Benefits%20and%20Requirements.md#key-benefits-and-requirements)
    - [Key Benefits](01%20Introduction/01%20Key%20Benefits%20and%20Requirements.md#key-benefits)
    - [Requirements](01%20Introduction/01%20Key%20Benefits%20and%20Requirements.md#requirements)
- Installation
  - [Installing the Amazon Connect CTI Adapter for Salesforce Package](02%20Installation/01%20Installing%20the%20Amazon%20Connect%20CTI%20Adapter%20for%20Salesforce%20Package.md#installing-the-amazon-connect-cti-adapter-for-salesforce-package)
    - [Lightning Flow Setup Installation](02%20Installation/01%20Installing%20the%20Amazon%20Connect%20CTI%20Adapter%20for%20Salesforce%20Package.md#lightning-flow-setup-installation)
    - [Installing from the Salesforce AppExchange](02%20Installation/01%20Installing%20the%20Amazon%20Connect%20CTI%20Adapter%20for%20Salesforce%20Package.md#installing-from-the-salesforce-appexchange)
    - [Create the Softphone Layout](02%20Installation/01%20Installing%20the%20Amazon%20Connect%20CTI%20Adapter%20for%20Salesforce%20Package.md#create-the-softphone-layout)
    - [Set Access Permissions](02%20Installation/01%20Installing%20the%20Amazon%20Connect%20CTI%20Adapter%20for%20Salesforce%20Package.md#set-access-permissions)
    - [Configure Console Experience](02%20Installation/01%20Installing%20the%20Amazon%20Connect%20CTI%20Adapter%20for%20Salesforce%20Package.md#configure-console-experience)
    - [Configure Classic Experience](02%20Installation/01%20Installing%20the%20Amazon%20Connect%20CTI%20Adapter%20for%20Salesforce%20Package.md#configure-classic-experience)
  - [Installing the Amazon Connect Salesforce Lambda Package](02%20Installation/02%20Installing%20the%20Amazon%20Connect%20Salesforce%20Lambda%20Package.md#installing-the-amazon-connect-salesforce-lambda-package)
    - [Salesforce Lambda Prerequisites](02%20Installation/02%20Installing%20the%20Amazon%20Connect%20Salesforce%20Lambda%20Package.md#salesforce-lambda-prerequisites)
      - [Determine your production Environment](02%20Installation/02%20Installing%20the%20Amazon%20Connect%20Salesforce%20Lambda%20Package.md#determine-your-production-environment)
      - [Determine your Consumer Key and Secret](02%20Installation/02%20Installing%20the%20Amazon%20Connect%20Salesforce%20Lambda%20Package.md#determine-your-consumer-key-and-secret)
      - [Determine your Username, Password and Security Token](02%20Installation/02%20Installing%20the%20Amazon%20Connect%20Salesforce%20Lambda%20Package.md#determine-your-username-password-and-security-token)
      - [Store Salesforce credentials in AWS Secrets Manager](02%20Installation/02%20Installing%20the%20Amazon%20Connect%20Salesforce%20Lambda%20Package.md#store-salesforce-credentials-in-aws-secrets-manager)
    - [Install the Amazon Connect Salesforce Lambda package](02%20Installation/02%20Installing%20the%20Amazon%20Connect%20Salesforce%20Lambda%20Package.md#install-the-amazon-connect-salesforce-lambda-package)
  - [Upgrading from an Earlier Version](02%20Installation/03%20Upgrading%20from%20an%20Earlier%20Version.md#upgrading-from-an-earlier-version)
    - [CTI Adapter Installation Troubleshooting and Common Issues](02%20Installation/04%20CTI%20Adapter%20Installation%20Troubleshooting.md#cti-adapter-installation-troubleshooting-and-common-issues)
- Configuring and Using CTI Adapter Features
  - [CTI Adapter Configuration](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/01%20CTI%20Adapter%20Configuration.md#cti-adapter-configuration)
    - [CTI Adapter Details](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/01%20CTI%20Adapter%20Configuration.md#cti-adapter-details)
    - [Single Sign On Settings](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/01%20CTI%20Adapter%20Configuration.md#single-sign-on-settings)
      - [Identify the SSO URL components](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/01%20CTI%20Adapter%20Configuration.md#identify-the-sso-url-components)
      - [Configure the CTI Lightning Adapter in Salesforce](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/01%20CTI%20Adapter%20Configuration.md#configure-the-cti-lightning-adapter-in-salesforce)
  - [Omnipresence Agent State Sync](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/02%20Omnipresence%20Agent%20State%20Sync.md#omnipresence-agent-state-sync)
    - [Enable Omnichannel](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/02%20Omnipresence%20Agent%20State%20Sync.md#enable-omnichannel)
    - [Create Presence Statuses](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/02%20Omnipresence%20Agent%20State%20Sync.md#create-presence-statuses)
    - [Configure Enabled Service Presences Status Access](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/02%20Omnipresence%20Agent%20State%20Sync.md#configure-enabled-service-presences-status-access)
      - [Amazon Connect System Statuses](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/02%20Omnipresence%20Agent%20State%20Sync.md#amazon-connect-system-statuses)
    - [Configure Presence Status Synchronization Rules](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/02%20Omnipresence%20Agent%20State%20Sync.md#configure-presence-status-synchronization-rules)
      - [Presence Status Configuration Rules](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/02%20Omnipresence%20Agent%20State%20Sync.md#presence-status-configuration-rules)
  - [Contact Attributes Display](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/03%20Contact%20Attributes%20Display.md#contact-attributes-display)
  - [Call Recording Link for Task](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/04%20Call%20Recording%20Link%20for%20Task.md#call-recording-link-for-task)
  - [Call Display on the Account Page](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/05%20Call%20Display%20on%20the%20Account%20Page.md#call-display-on-the-account-page)
  - [Outbound Campaign Calls](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/06%20Outbound%20Campaign%20Calls.md#outbound-campaign-calls)
    - [Create a Queue](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/06%20Outbound%20Campaign%20Calls.md#create-a-queue)
    - [Create a Service Channel](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/06%20Outbound%20Campaign%20Calls.md#create-a-service-channel)
    - [Create a Routing Configuration](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/06%20Outbound%20Campaign%20Calls.md#create-a-routing-configuration)
    - [Outbound Campaign Custom Object Using Salesforce Data Loader](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/06%20Outbound%20Campaign%20Calls.md#outbound-campaign-custom-object-using-salesforce-data-loader)
  - [Amazon Connect Reports in Salesforce](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/07%20Amazon%20Connect%20Reports%20in%20Salesforce.md#amazon-connect-reports-in-salesforce)
  - [CTI Flows](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/08%20CTI%20Flows.md#cti-flows)
    - [Localization](03%20Configuring%20and%20Using%20CTI%20Adapter%20Features/09%20Localization.md#localization)
- Configuring and Using AWS Serverless Application Repository for Salesforce Features
  - [Invoking the Amazon Connect Salesforce Lambda in a Contact Flow](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Invoking%20the%20Amazon%20Connect%20Salesforce%20Lambda%20in%20a%20Contact%20Flow.md#invoking-the-amazon-connect-salesforce-lambda-in-a-contact-flow)
    - [Salesforce Lookup](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Invoking%20the%20Amazon%20Connect%20Salesforce%20Lambda%20in%20a%20Contact%20Flow.md#salesforce-lookup)
    - [Salesforce Create](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Invoking%20the%20Amazon%20Connect%20Salesforce%20Lambda%20in%20a%20Contact%20Flow.md#salesforce-create)
    - [Salesforce Update](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Invoking%20the%20Amazon%20Connect%20Salesforce%20Lambda%20in%20a%20Contact%20Flow.md#salesforce-update)
    - [Salesforce Phone Lookup](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Invoking%20the%20Amazon%20Connect%20Salesforce%20Lambda%20in%20a%20Contact%20Flow.md#salesforce-phone-lookup)
    - [Salesforce query](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Invoking%20the%20Amazon%20Connect%20Salesforce%20Lambda%20in%20a%20Contact%20Flow.md#salesforce-query)
    - [Salesforce queryOne](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Invoking%20the%20Amazon%20Connect%20Salesforce%20Lambda%20in%20a%20Contact%20Flow.md#salesforce-queryone)
    - [Salesforce createChatterPost](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Invoking%20the%20Amazon%20Connect%20Salesforce%20Lambda%20in%20a%20Contact%20Flow.md#salesforce-createchatterpost)
    - [Salesforce createChatterComment](04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/01%20Invoking%20the%20Amazon%20Connect%20Salesforce%20Lambda%20in%20a%20Contact%20Flow.md#salesforce-createchattercomment)
- [Appendix A - CTI Flow Sources and Events](05%20Appendix%20A%20-%20CTI%20Flow%20Sources%20and%20Events/01%20CTI%20Flow%20Sources%20and%20Events.md#appendix-a---cti-flow-sources-and-events)
- [Appendix B - Configuring Salesforce as Your Identity Provider](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#appendix-b---configuring-salesforce-as-your-identity-provider)
  - [Configuration](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#configuration)
    - [Prerequisites](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#prerequisites)
    - [Configuring Salesforce as an Identity Provider](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#configuring-salesforce-as-an-identity-provider)
      - [Setup Identity Provider & Download Metadata](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#setup-identity-provider--download-metadata)
    - [Configure the Identity Provider, Policy, and Role in the AWS Console](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#configure-the-identity-provider-policy-and-role-in-the-aws-console)
      - [Configure the Identity Provider](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#configure-the-identity-provider)
      - [Create the IAM Role and Policy](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#create-the-iam-role-and-policy)
    - [Complete the Base Salesforce Configuration](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#complete-the-base-salesforce-configuration)
      - [Create the Connected App in Salesforce](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#create-the-connected-app-in-salesforce)
    - [Complete the Amazon Connect Configuration](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#complete-the-amazon-connect-configuration)
      - [Add Users to Amazon Connect](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#add-users-to-amazon-connect)
    - [Final Configuration for the Lightning Experience](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#final-configuration-for-the-lightning-experience)
      - [Create the Amazon Connect SSO URL](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#create-the-amazon-connect-sso-url)
      - [Configure the CTI Lightning Adapter in Salesforce For SSO](06%20Appendix%20B%20-%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider/01%20Configuring%20Salesforce%20as%20Your%20Identity%20Provider.md#configure-the-cti-lightning-adapter-in-salesforce-for-sso)
- [Appendix C - CTI Flow Examples](07%20Appendix%20C%20-%20CTI%20Flow%20Examples/01%20CTI%20Flow%20Examples.md#appendix-c---cti-flow-examples)
- [Appendix D - CTI Flow Blocks](08%20Appendix%20D%20-%20CTI%20Flow%20Blocks/01%20CTI%20Flow%20Blocks.md#appendix-d---cti-flow-blocks)

# Introduction

The core functionality of the Amazon Connect CTI Adapter provides a
WebRTC browser-based Contact Control Panel (CCP) within Salesforce. The
Amazon Connect CTI integration consists of two components, a [managed
Salesforce
package](https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000EJH4yUAH)
and an [AWS Serverless
application](https://aws.amazon.com/serverless/serverlessrepo/) deployed
to your AWS environment.

With those components, customers can build a deep integration between
the Amazon Connect contact center platform and Salesforce, the leading
customer relationship management (CRM) platform. The AWS Serverless
application package contains a set of common AWS Lambda functions to be
used by Amazon Connect to interact with Salesforce.

# Release Notes

Important: when upgrading the CTI Adapter, please make sure that the Salesforce Lambdas are also updated to the newest version.

## 5.7 November 2020

- **Feature**: Localization into 9 languages.
- **Feature**: Add callType to return fields of "Get Contact Properties" block
- **Feature**: Add formatted phone number to return fields of "Get Contact Properties" block
- **Feature**: Add script name to CTI flow definition file.
- **Feature**: Remove context from log outputs
- **Bugfix**: Return field of “Open Primary Tab” was value, not id, as specified. We now provide it in both `value` and `id` fields for backward compatibility.
- **Feature**: Make the error message shown when the execution runs too long more informative.
- **Feature**: Make sure the attributes overlay doesn't open automatically when CCP is opened.
  Documentation: "Create and pop that task" default flow is fixed.
- **Bugfix**: update return value of "Get Agent Configuration" block to match the documentation.
- **Feature**: Increase CTI Flow timeout to 10 seconds.
- **Bugfix**: remove the leading wildcard matcher in "Get Salesforce Contact Id" block query. The wildcard matcher caused performance issues with the query. Going forward make sure the phone number is an exact match to the one in file.
- **Bugfix**: Ensure “Join Strings” block does not ignore boolean false values.
- **Bugfix**: Ensure “Log to Console” block does not ignore boolean false values.
- **Feature**: Add uid field on top of the block on the canvas.
- **Bugfix**: Remove the loginWindow object from log output because it errors with "Cannot convert object to primitive value."
- **Bugfix**: ContactChannel object updates to new agent if previous agent rejected or missed a contact
- **Bugfix**: Changing status to logout now correctly logs agent out
- **Feature**: Rename "Enable Click to Dial?" to "Can Make Outbound Calls?".
- **Feature**: CTI Flow Block - math function - “Multiply”
- **Feature**: CTI Flow Block - math function - “Divide“
- **Feature**: CTI Flow Block - “Get Tab Object Map”
- **Feature**: CTI Flow Block - “Close Salesforce Tab”
- **Feature**: CTI Flow Block - “Delay”
- **Feature**: CTI Flow Block - “Get Primary Tab Ids”
- **Feature**: Improve browser log formatting.
- **Feature**: CTI Flow Block - “Get Tabs With Matching Url”
- **Feature**: _Update Connect agent status when all Salesforce tabs are closed_: You can set the agent status to a specific state if the SetAgentStatusOnSessionEnd feature is turned on and the agent’s routing profile name includes the value of IfProfileNameIncludes setting, such as “On-Call.” By default, the agent status is set to “Offline” if the feature is enabled and nothing is specified for IfProfileNameIncludes. If this feature is enabled, the agent will be automatically shown as available when they login to Salesforce and the CCP.
- **Feature**: CTI Flow Block - Length”
- **Feature**: CTI Flow Block - "Slice"
- **Feature**: CTI Flow Block - “Cast a Value to a Type”
- **Bugfix**: Agent is able to accept calls when Medialess is turned on.
- **Feature**: CTI Flow Block - “Get CCP Logs”
  Remove "Initialization" and "Browser" sources

## 5.5 October 2020

- **Feature**: CTI Flow Block - "Clear All Properties"
- **Feature**: CTI Flow Block - "Unset Property"
- **Feature**: CTI Flow Block - "Show All Attributes"
- **Bugfix**: Attributes panel can now display attributes of transferred contacts.

## 5.4 Late September 2020

- **Feature**: You can now provide additional ad-hoc fields to "Create a Task" block. (Note: the values of these fields don't have a lookup dropdown yet.)
- **Feature**: New CTI Block! - You can now create "counters" with the "Update Counter" and read the value of your counters using "Get Counter" block.
- **Feature**: You can now get the number of open tabs from `openAgentTabs` counter.
- **Feature**: You can now compare multiple things using "Is One Of?" block in CTI Flows.
- **Feature**: New CTI Block! - You can now extract a value from a complex value, such as an array or an object, using the "Extract Value" block. (This comes handy when you retrieve a Salesforce object.)
- **Feature**: New CTI Block! - You can use the Salesforce retrieve API to fetch a record from the server by id using "Retrieve Salesforce Record" block.
- **Feature**: New CTI Block! - You can use the "Get Salesforce Contact Id" to fetch the id of a Salesforce contact by its phone number.
- **Feature**: New CTI Block! - You can now show a window alert using "Alert" block.
- **Feature**: New CTI Block! - You can now use create a complex string using string templates and multiple variables with the help of "String Template" block.
- **Bugfix**: When a screenpop is "deferred," the CTI Block used to return an inexact match and the Id field in the return value of the block would be blank. This issue has been fixed in this release.
- **Bugfix**: Presence sync is working again. The current release also reduces the wait threshold between each presence sync update from 1 second to 100ms, i.e. co-occurring events won't get lost anymore (as much).
- **Bugfix**: The encoding issue affecting "SOQL Block" has been fixed. The single quotes in the SOQL query are no longer encoded as HTML entities.
- **Bugfix**: To access the return value of another block, power users use "magic strings," e.g. \$.actions.<blockId>.results.<fieldName>, but these strings used to be cleared in the UI when the block is selected on the canvas. This issue is now fixed.
- **Bugfix**: The spelling of `TaskSubtype` field in "Create a Task" block has been fixed. Your TaskSubtype won't get lost anymore.
- **Bugfix**: Call recording view for a Case has been fixed.
- **Bugfix**: "Is Contact Inbound?" block is working again.
- **Bugfix**: "Is Truthy?" block now works with boolean input values.
- **Bugfix**: Salesforce UI onNavigationChange event listener is working again.
- **Bugfix**: We now alert you to change your instance alias if you try to sign in with instance alias set to "default."

### 5.3 September 2020

- **Bugfix**: Fix the issue that caused ACSFCCP_CallRecordingTask component to not work.

### 5.2 September 2020

- **Bugfix**: Fix the issue that prevented users from creating a new record using CTI Flows in Classic.
- **Bugfix**: Fix the issue that caused the contact channel analytics to not get updated at the end of a call.
- **Bugfix**: Fix the contact channel analytics recording view.
- **Feature**: Add a CTI block called "Get Chat Message."
- **Feature**: Add a CTI block called "SOQL Query." This block executes an arbitrary SOQL statement and returns the results.

### 5.1 Late August 2020

- **Bugfix**: Ensure "Get App View" CTI Flow block doesn\'t break the sidebar
- **Enhancement**: Add "queueARN" field to \"Dial Number\" CTI Flow block
- **Bugfix**: Ensure some required CTI Flow block fields are not shown as \"optional"
- **Bugfix**: Ensure \"Save (or Create) a Record\" block works as expected
- **Bugfix**: Fix the validation error on "CallDurationInSeconds" field in \"Create a Task\" block
- **Bugfix**: Fix phantom scrollbar on Windows machines
- **Bugfix**: Fix issue where copying contact attributes to clipboard doesn't work
- **Bugfix**: Fix issue where "saveLog" CTI Flow block throws an error
- **Bugfix**: Fix issue with onOffline CTI Flow event not firing
- **Bugfix**: Fix various omnichannel presence sync bugs
- **Bugfix**: Ensure the CCP default dimensions are adjusted to CCPv2 defaults
- **Feature:** Add block \"Set Agent Status By Name on Connect.\"

### 5.0 August 2020

- **This release has new features and updates:** Please test and validate version 5.0 in your Salesforce sandbox before upgrading this in production.
- **CTI Flows:** CTI Flows replace Lightning CTI Extensions in allowing customers to build their agent workflows for Lightning and Classic via a drag and drop UI. Many of the CTI blocks are similar to the Lightning CTI Extension script API calls and can be mapped similarly. Lightning CTI Extension scripts are NOT automatically migrated to CTI Flows. When upgrading the package with existing scripts, it will give you the option to download the existing script for reference before building your CTI Flows. We strongly recommend you validate this install/upgrade in a test environment and fully test the CTI Flows against your previous scripts functionality. Please open a support ticket if there is additional functionality you require from your current scripting implementation.
- **Security Profile improvements:** Added AC Administrator, AC Agent, and AC Manager permission sets to enforces objects access and fields level security (FLS) as per Salesforce security guideline for managed package. To access Amazon Connect Objects and fields, user should either one of Amazon Connect permission sets AC Administrator, AC Agent, and AC Manager.
- **Attributes:** Amazon Connect CCP (Contact Control Panel) in Lightning and Classic now display an overlay for showing attributes consistently.
- **AWS Secrets Manager** support for storing Salesforce credentials.
- **VPC Support**: ability to place Lambdas in VPC
- **New Salesforce API integration:** Exposed new operations in sfinvokeapi to read or create Salesforce records(query, queryOne, createChatterPost, createChatterComment, lookup_all, delete)
- **Upgrade:** Amazon Connect Streams API bumped up to version 1.5.
- **Bugfix:** Task creation issue for non-connect users - Fixed task trigger apex code, added a validation before evaluate security access check for Amazon Connect managed package objects
- **Bugfix:** Contact interaction duration fixed.
- **Other minor bugfixes and improvements**

### 4.5 April 2020

- **This release has new features and updates:** Please test and validate version 4.5 in your Salesforce sandbox before upgrading this in production.
- **Installation / Configuration:** AC_Administrator role has been added to manage CTI Configuration in addition to AC_Manager and AC_Agent. See documentation for further information.
- **API:** Updated support for CCPv2 in Classic/Console. See documentation for Call Center settings.
- **Bugfix:** Updated attribute display to resolve duplicated attributes.
- **Security:** Improved enforced Salesforce sharing model (record and field level) support.

### 4.4 March 2020

- **This release has significant new features and updates:** Please test and validate version 4.3 in your Salesforce sandbox before upgrading this in production.
- **Documentation:** Guide has been rewritten and restructured based on feedback.
- **Installation / Configuration:** Improved installation and configuration guide
- **Installation / Configuration:** Added Enhanced Agent Logout functionality to Lightning.
- **API:** Updated to the latest Amazon Connect Streams and Chat libraries
- **API:** Additional extensibility methods provided
- **Setup:** Improved Presence Sync Rule editor
- **Setup:** CTI Adapter validation is performed upon initialization and will inform the user of common misconfigurations.
- **Setup:** Additional CTI Script examples are provided.
- **Setup:** The ability to place the lightning transcript view on Task, Contact Channel, and Contact Channel Analytics object has been added.
- **Bugfix:** OmniChannel workload related data not being usable has been resolved.
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

- **This release has significant new features and updates:** Please test and validate version 4.0 in your Salesforce sandbox before upgrading this in production. As we look to simplify documentation, this release introduces a new [**Amazon Connect CTI Adapter v4 for Salesforce Lightning**](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Amazon+Connect+CTI+Adapter+for+Salesforce+Lightning+-+Setup+and+Installation+Guide.pdf) setup and installation guide. Please review this setup guide in detail to see all the latest changes for Lightning CTI Adapter installations.
- **Classic and Console CTI setup guide:** Please use the [**Amazon Connect CTI Adapter v4 for Salesforce Classic**](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Amazon+Connect+CTI+Adapter+for+Salesforce+Classic+-+Setup+and+Installation+Guide.pdf) setup and installation guide for Classic and Console CTI Adapter installations.
- **Amazon Connect Chat and Contact Control Panel (CCP) v2:** support for Amazon Connect chat and integration of CCP v2. CCP v2 is required for Lightning CTI Adapter installations. CCP v1 is still supported for Classic / Console CTI Adapter installations.
- **Historical and Real-Time Reporting:** updated historical metric functionality with additional metrics and dashboards. Added real-time metrics and dashboards. This functionality requires an update of AWS Serverless Lambda functions for Salesforce.
- **Lightning CCP Extensions and configuration:** We have revamped the approach for the Call Center config and have added a new AC CTI Adapters Lighting config page.
- **High Velocity Sales:** CTI Adapter integration supported for Salesforce High Velocity Sales product.

### 3.11 August 2019

- Added support for Salesforce platform encryption
- Fixed issue with logout action not re-rendering the sign-in button
- Fixed documentation issue regarding presence sync sources
- Fixed documentation issue regarding recorded conversations security configuration
- Updated documentation for presence sync rule configuration

### 3.10 July 2019

- Added support for enabling / disabling softphone popout
- Added support for previousWorkloadPct and newWorkloadPct operands in presence sync rules
- Fixed issue with presence sync rules loading

### 3.9 May 2019

- Added support for Opportunities for Task association
- Fixed issue with presence sync rules loading
- Fixed issue with state setting when no presence rules defined
- Fixed issue with Task pop in specific config scenarios

### 3.87 May 2019

- NOTE: The "mini" Task page has been deprecated in this release of the adapter. Users requiring custom functionality may use the page and controller code included in this document as a starting point for a custom Task page of their design.
- Added rules-based configuration of agent presence state between Amazon Connect and Salesforce
- Added enhanced contact attribute display and configuration including clickable hyperlinks, key-value display options, and key-value formatting
- Added option to enable/disable automatic call duration updating on the Task object
- Added functionality to directly pop associated record on click-to-dial avoiding search and pop behavior
- Fixed issue with callback Task pops not occurring in some cases

### 3.7 May 2019

- Unpublished version

### 3.6 April 2019

- NOTE: Automatic association of accounts, contacts, leads, or contacts to call activity (Task) records based upon tab navigation has been deprecated. Automatic association of accounts, contact, leads or contacts to call activity (Task) records when a single match is made via ANI lookup OR by contact attribute is supported.
- NOTE: The "mini" Task page will be deprecated in future releases. The default setting is now "DEFAULT_TASK_LAYOUT".
- NOTE: Automatic pop of Tasks in an object's (Account, Contact, Lead, Case) subtab is only supported with the object (Account, Contact, Lead, Case) is open in a primary tab.
- Added support for queued callback calls
- Added support for specifying call types for which to create Task objects
- Added support for enabling / disabling automatic call duration updates of call activity (Task) objects.
- Fixed issue with secondary click-to-dial in console mode
- Fixed issue with Task pop occurring during call connecting when set to start of call
- Fixed issue with call context data remaining after a call has ended
- Fixed issue with contact attributes being displayed after a call has ended or has been missed
- Fixed issue with click to dial with ani match to multiple Salesforce objects

### 3.1 March 2019

- Added ability to specify DEFAULT_TASK_LAYOUT for the Call Activity Page setting
- Added ability to specify static values used during initial task creation
- Added support for Standard Lightning navigation
- Added support for secondary click-to-dial in Console mode
- Fixed issue with primary tab closing upon call activity (Task) save
- Fixed issue with Case handling and Task association

### 3.0 February 2019

- Removed requirement for Omni-channel to be enabled to perform installation
- Added ability to specify custom ringtone
- Added ability to enable or disable the automatic creation of task (call activity) objects
- Added ability to specify a page to select creation of Lead or Contact when an object with matching ANI is not found
- Added ability specify task (call activity) object pop at the start of call, end of call, or to disable pop
- Added ability to edit task (call activity) subject
- Added automatic setting of whoId and whatId on task (call activity) objects
- Added ability to specify a custom task pop page
- Added ability to include agent friendly name when creating task (call activity) objects for calls delivered to agent queues
- Added ability to add third call participant via click to dial
- Added call attributes display in classic mode
- Fixed call attributes display being persistent when no attributes are defined
- Added ability for automatic task creation on outbound calls
- Upgraded API to amazon connect streams 1.3
- Added support for Lightning Flow Setup

# Further Reading

For additional information, see the following:

- Amazon Connect CTI Adapter for Salesforce:\
  <https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EJH4yUAH>

- Amazon Connect User Guide:\
  <https://docs.aws.amazon.com/connect/latest/userguide/using-amazon-connect.html>

- Amazon Connect Admin Guide:\
  <https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html>

- Amazon Connect API Reference:\
  <https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html>

- Amazon Connect Release Notes:\
  <https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-release-notes.html>

- Amazon Connect FAQ:\
  <https://aws.amazon.com/connect/faqs>
