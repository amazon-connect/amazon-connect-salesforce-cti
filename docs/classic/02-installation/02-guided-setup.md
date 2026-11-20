---
id: 02-guided-setup
title: Guided Setup (Retired)
---

Starting with CTI Adapter v5.34 and Salesforce Lambdas v5.29, Guided Setup is no longer available. This change does not affect how your existing integration operates, unless your CTI Adapter is v5.15 to v5.18. We retired Guided Setup to remove AWS access that your integration does not need after setup. If you have an earlier CTI Adapter version, do not use its Guided Setup wizard.

Guided Setup used a setup function in the Salesforce Lambdas (`sfExecuteAWSService`), and a separate AWS Identity and Access Management (IAM) user and access keys. It used them to set up resources in your AWS account from Salesforce. If your CTI Adapter is v5.19 or later, your contact flows and agents do not depend on Guided Setup. Its removal does not change how your contact center handles contacts. When you remove its access, your Salesforce org has fewer connections to your AWS account. Before you upgrade, read the steps below.

> **Warning:** Salesforce Lambdas v5.29 also has other changes that can affect your contact flows. Before you upgrade, read [Contact flow changes in Salesforce Lambdas v5.29](/docs/classic/release-notes#contact-flow-changes-in-salesforce-lambdas-v529).

## What you need to do

- If you set up the CTI Adapter for the first time, follow these guides in this order:
  1. [Managed Package Manual Setup](/docs/classic/installation/03-managed-package-manual-setup)
  2. [Salesforce Lambdas Manual Setup](/docs/classic/installation/04-salesforce-lambdas-manual-setup)
- Upgrade the CTI Adapter to v5.34 first. Then upgrade the Salesforce Lambdas to v5.29.
- If your CTI Adapter is v5.15 to v5.18, you must use this order. You must also upgrade the CTI Adapter before you remove the Guided Setup resources. Those versions use the setup function to play recordings in the Contact Lens audio player. If you do not upgrade the CTI Adapter first, that player stops.
- If you used Guided Setup before, remove these items:
  - The setup IAM user and its access keys
  - The Named Credential, usually `ExecuteAwsService`
  - The policy that Guided Setup used

  If another Named Credential or application uses the setup IAM user or one of its keys, give it its own IAM user and access key first. Do not delete a user that a person or another application uses. [Appendix E: Removing the Guided Setup Resources](/docs/classic/appendices/appendix-e-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice) shows the steps. Complete its [Find the resources to remove](/docs/classic/appendices/appendix-e-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice#find-the-resources-to-remove) and [Before you upgrade](/docs/classic/appendices/appendix-e-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice#before-you-upgrade) sections before you upgrade the Salesforce Lambdas. Complete its [After you upgrade](/docs/classic/appendices/appendix-e-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice#after-you-upgrade) section last.
- If you use the AWS CLI, a parent template, or the AWS CDK to upgrade, remove the **SalesforceExecuteAWSServiceUser** parameter. See [Upgrade the Salesforce Lambdas](/docs/classic/appendices/appendix-e-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice#upgrade-the-salesforce-lambdas).
- If you set the **SalesforceExecuteAWSServiceUser** parameter: earlier versions of these docs said that this parameter was a required security measure. It gave one IAM user permission to invoke the setup function. Version v5.29 removes the setup function, so the parameter is no longer necessary.
- If you cannot upgrade the Salesforce Lambdas to v5.29 yet, do these steps:
  1. Make sure that your CTI Adapter is not v5.15 to v5.18. If it is, upgrade it to v5.19 or later first. Choose a version that the [compatibility table](/docs/classic/installation/04-salesforce-lambdas-manual-setup#compatibility-table) lists for your Salesforce Lambdas version. If no v5.19 or later row lists your Salesforce Lambdas version, choose any CTI Adapter v5.19 or later. Then upgrade the Salesforce Lambdas to a version that the table lists for it.
  2. Throttle the setup function, as [the appendix](/docs/classic/appendices/appendix-e-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice#if-you-cannot-upgrade-yet) shows.

  Do not delete the function by hand. If you delete it, an update to Salesforce Lambdas v5.28 or earlier can fail. If you already deleted it, see [If you already deleted the function](/docs/classic/appendices/appendix-e-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice#if-you-already-deleted-the-function).
