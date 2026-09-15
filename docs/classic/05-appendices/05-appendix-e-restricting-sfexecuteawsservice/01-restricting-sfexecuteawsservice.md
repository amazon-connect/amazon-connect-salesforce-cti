---
id: 01-restricting-sfexecuteawsservice
title: "Appendix E: Restricting Access to sfExecuteAWSService"
---

Setting the **SalesforceExecuteAWSServiceUser** parameter on your Salesforce Lambda stack is a required security measure. It grants the CTI Adapter's dedicated IAM user permission to invoke the `sfExecuteAWSService` function, making that user the intended and only externally reachable path to the function.

The CTI Adapter reaches the function as a single IAM user, through the `ExecuteAwsService` Named Credential. Naming that user in the parameter adds an **Allow** for it to the function's resource policy.

> **What this does and does not cover** — A resource policy Allow grants access; it cannot deny it. Principals **inside** your AWS account that already hold `lambda:InvokeFunction` — an administrator, for example — can still invoke the function whether or not this parameter is set. The parameter governs access from outside the account, and it makes the CTI Adapter's user the only identity you have deliberately granted.
>
> To limit access from inside the account:
>
> - Do not grant `lambda:InvokeFunction` on this function to any other principal. Keep the *invokeSfExecuteAWSServicePolicy* managed policy attached only to the CTI Adapter's IAM user.
> - Disable or delete the function once setup is complete, as described in [Post-Setup Cleanup](/docs/classic/installation/01-installation#post-setup-cleanup-recommended). This is the most reliable option, because the function is only needed during initial setup.

This is a single parameter change. No code change, no Salesforce-side change, no redeploy.

## When to use this

Follow this appendix if your stack was deployed without a value for **SalesforceExecuteAWSServiceUser**. New installations set it during deployment instead — see [Restrict invocation of sfExecuteAWSService](/docs/classic/installation/04-salesforce-lambdas-manual-setup#restrict-invocation-of-sfexecuteawsservice) in the Salesforce Lambdas setup guide.

## Identify the IAM user

The value is the **name** of the IAM user you created in [Setting up the ExecuteAwsService Named Credential](/docs/classic/installation/01-installation#setting-up-the-executeawsservice-named-credential). The install guide suggests the name `sfExecuteAwsServiceIamUser`, but that is only a suggestion, so confirm which user your org actually uses:

1. In Salesforce, go to **Setup > Quick Find > Named Credentials** and open the `ExecuteAwsService` credential. Note the **AWS Access Key ID**.
2. In the AWS IAM console, go to **Users**, open each candidate user and check **Security credentials**. The user listing that access key is the one to name in the parameter.

Enter the **username**, not the ARN. The user must be in the same AWS account as the stack.

If you no longer have this IAM user — for example because you followed the [Post-Setup Cleanup](/docs/classic/installation/01-installation#post-setup-cleanup-recommended) recommendation and deleted it — create it again by following steps 1 through 4 of [Setting up the ExecuteAwsService Named Credential](/docs/classic/installation/01-installation#setting-up-the-executeawsservice-named-credential), then update the `ExecuteAwsService` Named Credential in Salesforce with the new **Access Key ID** and **Secret Access Key** before continuing.

If you later delete the user again as part of cleanup, clear this parameter back to blank in a stack update **before** deleting it. Otherwise the function's permission refers to a user that no longer exists and a later stack update that recreates that permission will fail.

## Update the stack

- Navigate to the serverlessrepo-AmazonConnectSalesforceLambda stack in CloudFormation.
- Select the **Update stack** dropdown and select **Create a change set**.
- Keep the default options for Step 1, **Standard Change Set** and **Use existing template**, then select **Next**.
- Scroll down to the **SalesforceExecuteAWSServiceUser** parameter and enter the IAM username.
- Keep everything else unchanged and click **Next**.
- Click the acknowledge section at the bottom and click **Next**.
- Review the change set and confirm that the only change is a new permission added to the `sfExecuteAWSService` function, then select **Create change set**.

> **Note** — The change set shows you which resources will change. It does not check the value you entered, so a clean change set does not mean the username is spelled correctly.

- Wait for the change set to be created, then click **Execute change set**.
- Keep the Rollback plan on the defaulted selections and click **Execute change set** again.
- Wait for the update to complete.

## Amazon Connect Global Resiliency

Each region runs its own stack, so repeat the update for the replica-region stack. Use the same IAM username in both, matching the shared `sfExecuteAwsServiceIamUser` described in [Global Resiliency](/docs/classic/cti-adapter/16-global-resiliency).
