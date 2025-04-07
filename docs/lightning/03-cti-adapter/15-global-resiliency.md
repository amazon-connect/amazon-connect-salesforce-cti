---
id: 15-global-resiliency
title: Global Resiliency
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Global Resiliency
[Amazon Connect Global Resiliency](https://docs.aws.amazon.com/connect/latest/adminguide//setup-connect-global-resiliency.html) enables you to provide customer service anywhere in the world with the highest reliability, performance, and efficiency. With its distributed telephony features, your contact center can meet international regulatory requirements. Amazon Connect Global Resiliency (ACGR) customers can now set up their CTI Adapter in Salesforce with multi-region support.

### Prerequisites

1. Install Amazon Connect CTI Adapter version v5.27 or higher in your Salesforce instance. For more information, see [the guide here](/docs/lightning/notices).

2. Onboard to ACGR
    1. Please read through the Introduction and Concepts sections of the [Amazon Connect Global Resiliency Workshop](https://catalog.workshops.aws/amazon-connect-global-resiliency/en-US) to ensure this service is right for you.

    2. Allowlist your AWS account by contacting Amazon Connect Solutions Architect or AWS Account Team.

    3. Following the [Onboarding guide](https://catalog.workshops.aws/amazon-connect-global-resiliency/en-US/cli/configuring). After completing the onboarding process, you should have created a Replica Connect Instance, and associated a new or existing phone number to a Traffic Distribution Group (TDG).

3. Set up your CTI Adapter in your Source Region ([Guided Setup](/docs/lightning/installation/02-guided-setup)).

### Set up Global Sign-in with SSO

1. Configure Salesforce SSO with Amazon by following the [Appendix B - Configuring Salesforce as Your Identity Provider](/docs/lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration), and verify the Salesforce agent can Sign in to CCP in Single Region.

2. Get your SAML Global Sign-in URL. This can be done by following Step 1 from the [Global Sign-in](https://docs.aws.amazon.com/connect/latest/adminguide/integrate-idp.html) guide. Alternatively, you can call DescribeInstance via [API](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeInstance.html) or [CLI](https://docs.aws.amazon.com/cli/latest/reference/connect/describe-instance.html), and get your `GlobalSignInEndpoint`.

3. Follow Step 2 and 3 in the [Global Sign-in](https://docs.aws.amazon.com/connect/latest/adminguide/integrate-idp.html#howto-integrate-idp) guide to update your IAM Federation role.

4. Step 4 of the [Global Sign-in](https://docs.aws.amazon.com/connect/latest/adminguide/integrate-idp.html#howto-integrate-idp) guide should already be completed in the previous SSO step. If not, follow Step 16-19 of [Complete the Base Salesforce Configuration](/docs/lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration#complete-the-base-salesforce-configuration).

5. Follow Step 5 and 6 in the [Global Sign-in](https://docs.aws.amazon.com/connect/latest/adminguide/integrate-idp.html#howto-integrate-idp) guide to generate your Assertion Consumer Service (ACS) URL.

6. Copy the ACS URL from step 5 into your Salesforce's `AmazonConnectSAML`
    1. Go to Salesforce **Setup**.
    2. In **Quick Find**, search for **App Manager**.
    3. Find **AmazonConnectSAML**, click `Edit`.
    4. Paste the ACS URL from the step above (Step 5) into the **ACS URL** field under **Web App Settings**.

    <img src={useBaseUrl('/img/lightning/v5.27-gr-1.png')} />

7. Update the previously created IAM `SalesforceConnectRole` role to allow `GetFederationToken` from Instance ARNs from both regions (Step 10 of [Create the IAM Role and Policy](/docs/lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration/#create-the-iam-role-and-policy)). 
    1. To find the ARN of your Connect Instance in the Replica Region, change the region from your [Amazon Connect Console](https://console.aws.amazon.com/connect/home), then select your Instance in the Replica Region.

    <img src={useBaseUrl('/img/lightning/v5.27-gr-2.png')} />

    2. Add your Replica Instance ARN under your `SalesforceConnectPolicy`

    <img src={useBaseUrl('/img/lightning/v5.27-gr-18.png')} />


8. Update the AC CTI Adapter with your SSO URL. Supply the App ID in `SSO Relay State`, no 'RelayState' parameter is needed.

    <img src={useBaseUrl('/img/lightning/v5.27-gr-3.png')} />

    For more details on how to get the SSO URL, refer to guide [Create the Amazon Connect SSO URL](/docs/lightning/appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration#create-the-amazon-connect-sso-url).

9. Associate the Connect Agent to a Traffic Distribution Group (TDG) by following this [guide](https://catalog.workshops.aws/amazon-connect-global-resiliency/en-US/cli/agents#associate-agents-to-instances-across-multiple-aws-regions).

10. After completing the above steps, Salesforce agents should be able to sign into Connect CCP for both regions.


### CTI Adapter Updates

#### Modify the CTI Adapter Object

1. Modify the CTI Adapter's page layout to include `Amazon Connect Instance Arn`
    1. Go to Salesforce **Setup**.
    2. Click on **Object Manager**.
    3. Select **AC CTI Adapter**.
    4. Click the **Page Layouts** and select the current layout used for displaying CTI Adapter. The default layout provided currently is **AC CTI Adapter Layout - August 2020**.
    6. Drag the `Amazon Connect Instance Arn` field on to the page.

    <img src={useBaseUrl('/img/lightning/v5.27-gr-4.png')} />

    7. Save the Page Layout.

2. Modify your AC CTI Adapter
    1. From AC CTI Adapters, select your CTI Adapter.
    2. Update the `Region` and `Amazon Connect Instance Arn` fields of the ACLightningAdapter object.
    3. `Region`: the region of your source instance, e.g.: `us-east-1`.
    4. `Amazon Connect Instance Arn`: the ARN of your source instance, e.g.: `arn:aws:connect:us-east-1:123465171234:instance/12345678-abcd-abcd-abcd-123456789012`.

    <img src={useBaseUrl('/img/lightning/v5.27-gr-5.png')} />

    **Note:** The region in the ARN should match the Region field.



#### Create the AC Replica Instance
1. Access the Amazon Connect Console in your Replica Region
    1. Go to your [Amazon Connect Console](https://console.aws.amazon.com/connect/home).
    2. Change the region to your Replica Region.

    <img src={useBaseUrl('/img/lightning/v5.27-gr-2.png')} />

    3. Select your Replica Instance. You should be able to see your Instance's **Access URL** and **Instance ARN**.

2. Add **AC Replica Instances** to the navigation menu
    1. Expand the navigation menu and click `Edit`.
    2. Click on `Select More Items`.
    3. Search for **AC Replica Instances**.
    4. Click the `+` sign next to **AC Replica Instances**.
    5. Click `Add 1 Nav Item` to add it to the navigation menu.
    6. Click `Save`.

3. Create a new AC Replica Instance
    1. From the navigation menu, select **AC Replica Instances**.
    2. Click `New` to create a new AC Replica Instance.
    3. Fill in the fields:
        1. `Replica Instance Name`: any value.
        2. `Amazon Connect Replica Instance Url`: **Access URL** of the replica Instance.
        3. `Amazon Connect Replica Instance Arn`: **Instance ARN** of the Replica Instance.
        4. `Amazon Connect Replica Instance Region`: Enter your Replica Region, e.g.: `us-west-2`.
        5. `CTI Adapter`: Select your `ACLightningAdapter`.
        6. `Recording Named Credential`: Enter your Named Credential. This is an optional parameter, by default it will be _AmazonConnectAPI_replica_instance_region_, e.g.: `AmazonConnectAPI_us_west_2`.

        **Note:** You need to create a new Named Credential for the Replica Region to receive Call Recording for the Replica Instance.
    
    <img src={useBaseUrl('/img/lightning/v5.27-gr-6.png')} />

    4. Save the AC Replica Instance.


#### Allowlist your Salesforce org into your Replica Instance
1. Get the **Approved domains** from your Source Instance
    1. Go to your [Amazon Connect Console](https://console.aws.amazon.com/connect/home) and change your region to your Source Region.
    2. Select your Connect Instance.
    3. Select the **Approved Origins** from the menu on the left.

    <img src={useBaseUrl('/img/lightning/v5.27-gr-7.png')} />

    4. If you do not have any **Approved domains/Approved origins**, follow the [Allowlist Your Salesforce Org with Amazon Connect](/docs/lightning/installation/03-managed-package-manual-setup#allowlist-your-salesforce-org-with-amazon-connect) guide.

2. Add the same **Approved domains** to your Replica Instance
    1. Go to your [Amazon Connect Console](https://console.aws.amazon.com/connect/home) and change your region to your Replica Region.
    2. Select your Connect Instance.
    3. Select the **Approved Origins** from the menu on the left.
    4. Click `Add domain` to add new domains.

3. The **Approved domains/Approved origins** should be same between your Source Connect Instance and your Replica Connect Instance.

#### Enable Enhanced Logout
Follow the [Enhanced Agent Logout](/docs/lightning/installation/03-managed-package-manual-setup#enhanced-agent-logout) guide to create a `Logout` status for agents. 

**Note**: the `Logout` status only needs to be created in one Connect Instance, the new Agent status will be automatically replicate to the paired Instance within 15 minutes.

#### Create a Feature for Global Resiliency
1. Open the relevant AC CTI Adapter.
2. In the bottom tabs, select the `Features` section and click `New`.
3. Set the `AC Feature Name` to be **GlobalResiliency**.
4. In the `Value` box, provide the following fields:
    1. `GlobalSignInEndpoint`: This field is required. Supply the same ACS URL generated in Step 5 of [Set up Global Sign-in with SSO](/docs/lightning/cti-adapter/15-global-resiliency#set-up-global-sign-in-with-sso)
    2. `RetainAgentStateEnabled`: This field is optional. By default it's set to false.
    
    <img src={useBaseUrl('/img/lightning/v5.27-gr-8.png')} />

**Feature Notes:**
1. The `Active` field can be toggled on or off to enable or disable the Global Resiliency feature. When it is _active_, agents can access the CCP (Contact Control Panel) of both the Source and Replica Region. When it is _inactive_, the CTI adapter will operate as before, only allowing agents to access the Source Instance.
2. The `GlobalSignInEndpoint` will be the same ACS URL generated in Step 5 of [Set up Global Sign-in with SSO](/docs/lightning/cti-adapter/15-global-resiliency#set-up-global-sign-in-with-sso)
3. `RetainAgentStateEnabled` is an optional feature. By default, agent statuses are automatically set to _Offline_ during a region failover. The agent needs to manually set it to _Available_ if they want to operate in the new region. If `RetainAgentStateEnabled` is set to _true_ in the GlobalResiliency feature, the CTI Adapter preserves the agent status. Within 5 seconds of detecting a failover event, the system automatically attempts to restore the agent to their pre-failover status, leading to a smoother failover experience.

---
### Basic Setup Complete

If all the steps above have been completed, Amazon Connect Global Resiliency is now enabled for the given CTI Adapter. Salesforce Agents can now receive calls from both the Source and Replica Regions based on the traffic distribution. The sign-in process remains the same for agents - after logging into Salesforce, they can click "Sign into CCP" from the Phone iFrame.

When the traffic is shifted over, the agents do not need to refresh the page or log out/log in. They will automatically fail over to the Replica Region within 5 minutes. After failing over, the agent status will be set to `Offline` by default, and they need to manually set it to `Available` if they want to operate in the new region. However, if `RetainAgentStateEnabled` is set to **true** in the `GlobalResiliency` feature, then the CTI Adapter will attempt to retain the agent's status during failover. To learn more about how to shift traffic, follow the [Initiating Traffic Distribution Change with the CLI](https://catalog.workshops.aws/amazon-connect-global-resiliency/en-US/cli/migrating) guide.

Additional setup is required to set-up AmazonConnectSalesforceLambda in the Replica Region. This is needed to enable features such as Real Time Metrics, Contact Trace Records, etc. from the Replica Instance.

---


## Additional Setup

### Set up Salesforce Lambda in Replica Region
1. Install the latest Amazon Connect Salesforce Lambda package in your Replica Region ([guide](/docs/lightning/installation/01-installation#amazon-connect-salesforce-lambda-package)).
2. Update your `sfExecuteAwsServiceIamUser` user with a `invokeSfExecuteAWSServicePolicy` policy for the Replica Region Lambda (see Step 3 of [Setting up the ExecuteAwsService Named Credential](/docs/lightning/installation/01-installation#setting-up-the-executeawsservice-named-credential)). The `sfExecuteAwsServiceIamUser` user should already be created. If not, follow Step 1 and 2 of [Setting up the ExecuteAwsService Named Credential](/docs/lightning/installation/01-installation#setting-up-the-executeawsservice-named-credential).

    <img src={useBaseUrl('/img/lightning/v5.27-gr-9.png')} />

3. Create a new legacy `ExecuteAwsService` Named Credential for the Replica Region. 
    1. Follow the [Setting up the ExecuteAwsService Named Credential](/docs/lightning/installation/01-installation#setting-up-the-executeawsservice-named-credential) guide. 
    2. For the `Name` and `Label`, use **ExecuteAwsService** followed by under score of the region, e.g: `ExecuteAwsService_us_west_2`
    3. For `AWS Region`, use your Replica Region, e.g: `us-west-2`
    4. For `AWS Service`, use **Lamda**

    Sample Replica Region Named Credential:

    <img src={useBaseUrl('/img/lightning/v5.27-gr-10.png')} />

    Sample Source Region Named Credential:

     <img src={useBaseUrl('/img/lightning/v5.27-gr-14.png')} />

    **Note:** The `AWS Access Key ID` and `AWS Secret Access Key` of the Replica Region can be the same as the Source Region’s Named Credential, since the two Named Credentials can share the same IAM user.

4. For the [Salesforce API User](/docs/lightning/installation/02-guided-setup#setting-up-the-salesforce-api-user), create a new secret in the Replica Region by following the [Setting up the SecretsManager Secret](/docs/lightning/installation/02-guided-setup#setting-up-the-secretsmanager-secret) guide.

5. S3 buckets and Kinesis streams are regional. To gather information from your Replica Connect Instance, create new S3 buckets and Kinesis streams in the corresponding region. You can gather information by enabling Call recording/Chat transcripts/Exported reports/Data streaming. For more information, see [Gather Amazon Connect information](/docs/lightning/installation/04-salesforce-lambdas-manual-setup#gather-amazon-connect-information).

6. Update your Cloudformation parameters of your **serverlessrepo-AmazonConnectSalesforceLambda** stack
    1. Go to your AWS Console, and search for `CloudFormation`
    2. Change your AWS Region to your Replica Region

    <img src={useBaseUrl('/img/lightning/v5.27-gr-11.png')} />

    3. Select your **serverlessrepo-AmazonConnectSalesforceLambda** stack (it should be created by Step 1 above).
    4. Update the Stack 

    <img src={useBaseUrl('/img/lightning/v5.27-gr-12.png')} />

    5. Select `Use existing template`, and click `Next`
    6. In `Specify stack details`, fill in the fields with the corresponding data.

    <img src={useBaseUrl('/img/lightning/v5.27-gr-13.png')} />

    7. Confirm the changes and Submit the deployment.

7. After setting up your Lambda in the Replica Region with S3 and Kinesis triggers, you should receive `AC Contact Trace Records` and `AC Contact Channel Analytics` from both regions. After upgrading the **AmazonConnectSalesforceLambda** to version `v5.24` in both regions, and the **CTI Adapter** to `v5.27`, you will be able to see the Contact's Region.

`AC Contact Channel Analytics` record from us-west-2

<img src={useBaseUrl('/img/lightning/v5.27-gr-19.png')} />

`AC Contact Channel Analytics` record from us-east-1

<img src={useBaseUrl('/img/lightning/v5.27-gr-20.png')} />

`AC Contact Trace Record` from us-west-2

<img src={useBaseUrl('/img/lightning/v5.27-gr-21.png')} />

For more infomation, see [Contact Channel Analytics](/docs/lightning/salesforce-lambdas/04-contact-channel-analytics) and [Contact Trace Record Import](/docs/lightning/salesforce-lambdas/05-contact-trace-record-import)

### Additional Features

#### Call Recording

1. Ensure Call Recording have been set up in the Source Region. Refer to guide: [Recording Controls](/docs/lightning/cti-adapter/09-recording-controls).

2. Create a new legacy `AmazonConnectAPI` Named Credential for the Replica Region. 
    1. Follow the Recording Controls [Setup](/docs/lightning/cti-adapter/09-recording-controls#setup) guide. 
    2. For the `Name` and `Label`, use **AmazonConnectAPI** followed by under score of the region, e.g: `ExecuteAwsService_us_west_2`
    3. For the `URL`, use the corresponding Connect URL, e.g.: `https://connect.us-west-2.amazonaws.com`
    3. For `AWS Region`, use your Replica Region, e.g: `us-west-2`
    4. For `AWS Service`, use **connect**

    Sample Replica Region Named Credential:

    <img src={useBaseUrl('/img/lightning/v5.27-gr-15.png')} />

    Sample Source Region Named Credential:

    <img src={useBaseUrl('/img/lightning/v5.27-gr-16.png')} />

    **Note:** The `AWS Access Key ID` and `AWS Secret Access Key` of the Replica Region can be the same as the Source Region’s Named Credential, since the two Named Credentials can share the same IAM user.

#### Real time metrics

After upgrading the **CTI Adapter** to `v5.27` and the **AmazonConnectSalesforceLambda** to version `v5.24`, AC Queue Metrics wil contain a new `Region` column to distinguish their regions.

<img src={useBaseUrl('/img/lightning/v5.27-gr-17.png')} />

#### Historical Metrics

To import Historical Metrics data from the Replica Connect Instance, follow the [Amazon Connect Historical Metrics in Salesforce](/docs/lightning/salesforce-lambdas/02-historical-metrics) guide in your Replica Region.

#### Contact Lens Import

To import Contact Lens data from the Replica Connect Instance, follow the [Postcall Contact Lens Import](/docs/lightning/salesforce-lambdas/06-postcall-contact-lens-import#contact-lens-import) guide in your Replica Region.