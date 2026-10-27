---
id: 01-restricting-sfexecuteawsservice
title: "Appendix E: Removing the Guided Setup Resources"
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Guided Setup is retired. Use this appendix to remove the resources that you created for it.

> **Warning:** If your CTI Adapter is v5.15 to v5.18, upgrade it to v5.19 or later first. In those versions, audio recording playback uses the `sfExecuteAWSService` function.

## Find the resources to remove

Complete these steps before you upgrade the Salesforce Lambdas.

1. In a new browser tab, login to the [AWS console](https://console.aws.amazon.com/).
2. Navigate to the CloudFormation console.
3. Ensure you are in the correct region.
4. Open each Salesforce Lambda stack. On the **Parameters** tab, write down the value of **SalesforceExecuteAWSServiceUser**. This is the setup IAM user. With Amazon Connect Global Resiliency, repeat steps 3 and 4 in each region.

   <img src={useBaseUrl('/img/lightning/appendix-h-cfn-parameters.png')} />

5. In each Salesforce org, including your sandboxes, go to **Setup**, and search for **Named Credentials**. Write down each Named Credential whose URL starts with `https://lambda.` and contains `sfExecuteAWSService`. This is usually `ExecuteAwsService`. With Amazon Connect Global Resiliency, there is one for each region, for example `ExecuteAwsService_us_west_2`.

6. Open each Named Credential from step 5, and write down its **AWS Access Key ID**. If it uses an External Credential, the key is in the principal of the External Credential. To find the IAM user of a key, run this command. The output shows the `UserName`.

   ```bash
   aws iam get-access-key-last-used --access-key-id <key ID>
   ```

7. Navigate to the IAM console. Go to **Policies**, and search for *invokeSfExecuteAWSServicePolicy*. Open each policy, and write down each user, group, and role on the **Entities attached** tab.

   <img src={useBaseUrl('/img/lightning/appendix-h-iam-policy-search.png')} />

If you found none of these resources, go to [Upgrade the Salesforce Lambdas](#upgrade-the-salesforce-lambdas).

## Before you upgrade

1. Make sure that nothing else uses the access keys from step 6 of [Find the resources to remove](#find-the-resources-to-remove):
   - In each Salesforce org, compare each key with the **AWS Access Key ID** of your other Named Credentials, for example `AmazonConnectAPI`.
   - Run `aws iam get-access-key-last-used --access-key-id <key ID>` for each key. If `ServiceName` is not `lambda` or `N/A`, another application uses the key.

   If another Named Credential or application uses a key, give it its own IAM user and access key first.

2. Navigate to the IAM console. Open each setup IAM user. On the **Security credentials** tab, deactivate each access key.

   <img src={useBaseUrl('/img/lightning/appendix-h-iam-user-keys.png')} />

3. In the IAM console, open each *invokeSfExecuteAWSServicePolicy* policy. On the **Entities attached** tab, detach the policy from each user, group, and role. With Amazon Connect Global Resiliency, repeat this for the policy of each regional stack.

   <img src={useBaseUrl('/img/lightning/appendix-h-iam-policy-entities.png')} />

> **Warning:** Do not delete the `sfExecuteAWSService` function by hand. If you do, a stack update to v5.28 or earlier can fail.

## If you cannot upgrade yet

1. In a new browser tab, login to the [AWS console](https://console.aws.amazon.com/).
2. Navigate to the Lambda console.
3. Ensure you are in the correct region.
4. Search for `sfExecuteAWSService`, and open the function.

   <img src={useBaseUrl('/img/lightning/appendix-h-lambda-search.png')} />

5. Select **Throttle**, then select **Confirm**. With Amazon Connect Global Resiliency, repeat steps 3 to 5 in each region.

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

Upgrade the Salesforce Lambdas to v5.29 or later. Follow [Upgrading the Salesforce Lambdas](/docs/classic/installation/05-upgrading-from-an-earlier-version#upgrading-the-salesforce-lambdas). With Amazon Connect Global Resiliency, upgrade the stack in each region.

If you deploy the package with the AWS CLI, or with a parent template that uses `AWS::Serverless::Application` or the AWS CDK, remove the **SalesforceExecuteAWSServiceUser** parameter.

## After you upgrade

1. In a new browser tab, login to the [AWS console](https://console.aws.amazon.com/).
2. Navigate to the Lambda console.
3. Ensure you are in the correct region.
4. Search for `sfExecuteAWSService`. Make sure that no function is found. With Amazon Connect Global Resiliency, repeat steps 3 and 4 in each region.

   If a function is found:
   - If you deployed a new stack, complete [Removing the Previous Lambda Package](/docs/lightning/installation/05-upgrading-from-an-earlier-version#removing-the-previous-lambda-package).
   - If the function is in a nested stack, update its root stack.

5. Make sure that the integration operates. Then, in each Salesforce org, delete the Named Credentials from step 5 of [Find the resources to remove](#find-the-resources-to-remove), and their External Credentials. Do not delete `AmazonConnectAPI`. If Salesforce does not let you delete a Named Credential, delete it after you upgrade the CTI Adapter to v5.34 or later.
6. Navigate to the IAM console. Delete each setup IAM user and its access keys. Do not delete a user that a person or another application uses.
7. In the IAM console, search for *invokeSfExecuteAWSServicePolicy* again. Delete each policy that remains, if its stack is deleted or at version v5.29 or later.
8. Optional: navigate to the CloudWatch console. Delete the log group whose name starts with `/aws/lambda/` and contains `sfExecuteAWSService`.
