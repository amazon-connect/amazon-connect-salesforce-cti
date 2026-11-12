---
id: 02-guided-setup
title: Guided Setup (Retired)
---

Starting with CTI Adapter v5.34 and Salesforce Lambdas v5.29, Guided Setup is no longer available. This change does not affect how your existing integration operates, unless your CTI Adapter is v5.15 to v5.18. We retired Guided Setup to make your integration more secure. If you have an earlier CTI Adapter version, do not use its Guided Setup wizard.

Guided Setup used a setup function in the Salesforce Lambdas (`sfExecuteAWSService`), and a separate AWS Identity and Access Management (IAM) user and access keys. It used them to set up resources in your AWS account from Salesforce. Your integration does not use Guided Setup. When you remove its access, your Salesforce org has fewer connections to your AWS account. Before you upgrade, read the steps below.

> **Warning:** Salesforce Lambdas v5.29 also has other changes that can affect your contact flows. Before you upgrade, read [Contact flow changes in Salesforce Lambdas v5.29](/docs/lightning/release-notes#contact-flow-changes-in-salesforce-lambdas-v529).

## What you need to do

- If you set up the CTI Adapter for the first time, follow these guides in this order:
  1. [Managed Package Manual Setup](/docs/lightning/installation/03-managed-package-manual-setup)
  2. [Salesforce Lambdas Manual Setup](/docs/lightning/installation/04-salesforce-lambdas-manual-setup)
- If your CTI Adapter is v5.15 to v5.18, upgrade it to v5.19 or later first. Do this before you remove the Guided Setup resources, and before you upgrade the Salesforce Lambdas. CTI Adapter v5.15 to v5.18 uses the setup function to play recordings in the Contact Lens audio player. If you do not upgrade it first, that player stops.
- If you used Guided Setup before, remove these items:
  - The setup IAM user and its access keys
  - The Named Credential, usually `ExecuteAwsService`
  - The policy that Guided Setup used

  If another Named Credential or application uses the setup IAM user or one of its keys, give it its own IAM user and access key first. Do not delete a user that a person or another application uses. [Appendix H: Removing the Guided Setup Resources](/docs/lightning/appendices/appendix-h-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice) shows the steps. Do some steps before you upgrade the Salesforce Lambdas. Do the other steps after the upgrade.
- If you use the AWS CLI, a parent template, or the AWS CDK to upgrade, remove the **SalesforceExecuteAWSServiceUser** parameter. See [Upgrade the Salesforce Lambdas](/docs/lightning/appendices/appendix-h-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice#upgrade-the-salesforce-lambdas).
- If you cannot upgrade the Salesforce Lambdas to v5.29 yet, do these steps:
  1. Make sure that your CTI Adapter is not v5.15 to v5.18. If it is, upgrade the CTI Adapter first.
  2. Throttle the setup function, as [the appendix](/docs/lightning/appendices/appendix-h-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice#if-you-cannot-upgrade-yet) shows.

  Do not delete the function by hand. If you delete it, an update to Salesforce Lambdas v5.28 or earlier can fail. If you already deleted it, see [If you already deleted the function](/docs/lightning/appendices/appendix-h-restricting-sfexecuteawsservice/01-restricting-sfexecuteawsservice#if-you-already-deleted-the-function).
