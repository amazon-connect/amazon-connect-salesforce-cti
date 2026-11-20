---
id: 01-restricting-sfexecuteawsservice
title: "Appendix H: Removing the Guided Setup Resources"
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Guided Setup is retired. Use this appendix to remove the resources that you created for it.

> **Warning:** If your CTI Adapter is v5.15 to v5.18, you must upgrade it before you start. This is also true if you cannot upgrade the Salesforce Lambdas to v5.29 yet. In those versions, audio recording playback uses the `sfExecuteAWSService` function.

If you plan to upgrade the Salesforce Lambdas, upgrade the CTI Adapter to v5.34 or later before you start. If you cannot upgrade the Salesforce Lambdas to v5.29 yet, go to [If you cannot upgrade yet](#if-you-cannot-upgrade-yet).

## Find the resources to remove

Complete these steps before you upgrade the Salesforce Lambdas.

1. In a new browser tab, log in to the [AWS console](https://console.aws.amazon.com/).
2. Navigate to the CloudFormation console.
3. Make sure that you are in the AWS Region of your Amazon Connect instance.
4. Open each Salesforce Lambda stack. On the **Parameters** tab, write down the value of **SalesforceExecuteAWSServiceUser**. This is the setup IAM user. With Amazon Connect Global Resiliency, repeat steps 3 and 4 in each Region.

   <img src={useBaseUrl('/img/lightning/appendix-h-cfn-parameters.png')} />

5. In each Salesforce org, including your sandboxes, go to **Setup**, and search for **Named Credentials**. Write down each Named Credential whose URL starts with `https://lambda.` and contains `sfExecuteAWSService`. This is usually `ExecuteAwsService`. With Amazon Connect Global Resiliency, there is one for each Region, for example `ExecuteAwsService_us_west_2`.

6. Open each Named Credential from step 5, and select **Edit**. Write down its **AWS Access Key ID**. Then select **Cancel**. The detail page does not show the key. If it uses an External Credential, the key is in the principal of the External Credential. To find the IAM user of a key, run this command. The output shows the `UserName`.

   ```bash
   aws iam get-access-key-last-used --access-key-id <key ID>
   ```

7. Navigate to the IAM console. Go to **Policies**, and search for *invokeSfExecuteAWSServicePolicy*. Open each policy, and write down each user, group, and role on the **Entities attached** tab.

   <img src={useBaseUrl('/img/lightning/appendix-h-iam-policy-search.png')} />

If you found none of these resources, go to [Upgrade the Salesforce Lambdas](#upgrade-the-salesforce-lambdas).

## Before you upgrade

1. Make sure that nothing else uses the access keys from step 6 of [Find the resources to remove](#find-the-resources-to-remove):
   - In each Salesforce org, compare each key with the **AWS Access Key ID** of your other Named Credentials, for example `AmazonConnectAPI`. The key shows on the **Edit** page of each Named Credential.
   - Run `aws iam get-access-key-last-used --access-key-id <key ID>` for each key. This command shows only the last use of the key. If `ServiceName` is not `lambda` or `N/A`, another application uses the key. For a fuller check, search the AWS CloudTrail event history for the key ID. Search each Region that you use. Also search US East (N. Virginia), where CloudTrail records IAM events. Event history shows only management events from the last 90 days. It does not show data events, for example Lambda invocations. Guided Setup used the key only for Lambda invocations. So if event history shows an event for the key, a person or another application used the key.

   If another Named Credential or application uses a key, give it its own IAM user and access key first.

2. Navigate to the IAM console. Open each setup IAM user. On the **Security credentials** tab, deactivate each access key.

   <img src={useBaseUrl('/img/lightning/appendix-h-iam-user-keys.png')} />

3. In the IAM console, open each *invokeSfExecuteAWSServicePolicy* policy. On the **Entities attached** tab, detach the policy from each user, group, and role. With Amazon Connect Global Resiliency, repeat this for the policy of each regional stack.

   <img src={useBaseUrl('/img/lightning/appendix-h-iam-policy-entities.png')} />

> **Warning:** Do not delete the `sfExecuteAWSService` function by hand. If you do, a stack update to v5.28 or earlier can fail.

## If you cannot upgrade yet

> **Warning:** If your CTI Adapter is v5.15 to v5.18, upgrade it before you do these steps. If you do not, audio recording playback stops. Upgrade it to v5.19 or later, to a version that the [compatibility table](/docs/lightning/installation/04-salesforce-lambdas-manual-setup#compatibility-table) lists for your Salesforce Lambdas version. If no v5.19 or later row lists your Salesforce Lambdas version, choose any CTI Adapter v5.19 or later. Then upgrade the Salesforce Lambdas to a version that the table lists for it.

1. In a new browser tab, log in to the [AWS console](https://console.aws.amazon.com/).
2. Navigate to the Lambda console.
3. Make sure that you are in the AWS Region of your Amazon Connect instance.
4. Search for `sfExecuteAWSService`, and open the function.

   <img src={useBaseUrl('/img/lightning/appendix-h-lambda-search.png')} />

5. Select **Throttle**, then select **Confirm**. Throttle sets the reserved concurrency of the function to 0, so nothing can invoke it. With Amazon Connect Global Resiliency, repeat steps 3 to 5 in each Region.

   <img src={useBaseUrl('/img/lightning/appendix-h-lambda-concurrency.png')} />

## If you already deleted the function

If the stack is in the `UPDATE_ROLLBACK_FAILED` state, continue the rollback, and skip the missing function. Use the name of your stack. For a nested stack, see [Continue rolling back from failed nested stack updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks).

```bash
aws cloudformation continue-update-rollback \
  --stack-name serverlessrepo-AmazonConnectSalesforceLambda \
  --resources-to-skip sfExecuteAWSService
```

Do not update the stack with a template that still contains the function, for example with **Use existing template**.

## Upgrade the Salesforce Lambdas

Make sure that your CTI Adapter is v5.34 or later. Then upgrade the Salesforce Lambdas to v5.29 or later. Follow [Upgrading the Salesforce Lambdas](/docs/lightning/installation/05-upgrading-from-an-earlier-version#upgrading-the-salesforce-lambdas). With Amazon Connect Global Resiliency, upgrade the stack in each Region.

If you deploy the package with the AWS CLI, or with a parent template that uses `AWS::Serverless::Application` or the AWS CDK, remove the **SalesforceExecuteAWSServiceUser** parameter.

## After you upgrade

1. In a new browser tab, log in to the [AWS console](https://console.aws.amazon.com/).
2. Navigate to the Lambda console.
3. Make sure that you are in the AWS Region of your Amazon Connect instance.
4. Search for `sfExecuteAWSService`. Make sure that no function is found. With Amazon Connect Global Resiliency, repeat steps 3 and 4 in each Region.

   If a function is found:
   - If you deployed a new stack, complete [Removing the Previous Lambda Package](/docs/lightning/installation/05-upgrading-from-an-earlier-version#removing-the-previous-lambda-package).
   - If the function is in a nested stack, update its root stack.

5. Make sure that the integration operates. Then, in each Salesforce org, delete the Named Credentials from step 5 of [Find the resources to remove](#find-the-resources-to-remove). If a Named Credential has an External Credential, delete the External Credential too. A legacy Named Credential has none. Do not delete `AmazonConnectAPI`. If Salesforce does not let you delete a Named Credential, make sure that your CTI Adapter is v5.34 or later, and try again.
6. Navigate to the IAM console. Delete each setup IAM user and its access keys. Do not delete a user that a person or another application uses. When the console asks you to confirm, enter `confirm`.
7. In the IAM console, search for *invokeSfExecuteAWSServicePolicy* again. Delete each policy that remains, if its stack is deleted or at version v5.29 or later.
8. Optional: navigate to the CloudWatch console. Delete the log group whose name starts with `/aws/lambda/` and contains `sfExecuteAWSService`. With Amazon Connect Global Resiliency, repeat this step in each Region.
