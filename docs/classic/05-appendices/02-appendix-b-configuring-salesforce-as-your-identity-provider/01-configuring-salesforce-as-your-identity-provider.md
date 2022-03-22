---
id: 01-configuring-salesforce-as-your-identity-provider
title: "Appendix B: Configuring Salesforce as Your Identity Provider"
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Amazon Connect supports Security Assertion Markup Language (SAML 2.0) to
enable single sign on(SSO). Salesforce can act as a single sign on
identity provider to service providers, allowing end users to easily and
securely access many web and mobile applications with one login. By
establishing the SSO integration between Amazon Connect and Salesforce,
you will be able to seamlessly login to Salesforce and the same
credentials will be used to auto-login to Amazon Connect.

## Configuration

### Prerequisites

To complete the SSO integration between Salesforce and Amazon Connect,
you need:

1.  An Amazon Connect Instance configured for SAML authentication

2.  Appropriate AWS permissions to create Identity and Access Management
    (IAM) roles and policies

3.  Administrator permissions for your Salesforce Org

4.  Amazon Connect CTI Adapter AppExchange package installed and
    configured

### Configuring Salesforce as an Identity Provider

First, we need to enable Salesforce to act as an identity provider
(IdP). An IdP performs end user authentication and provides the
credentials to the requesting service provider. In this case, Salesforce
server as the IdP and Amazon Connect the service provider, while being
embedded in Salesforce.

#### Setup Identity Provider & Download Metadata

1.  Log in into your Salesforce org and go to **Setup**.

2.  In the **Quick Find** field, type **Identity Provider,** then select
    **Identity Provider** from the result list

3.  Identity Provider may be enabled by default. If not, choose **Enable
    Identity Provider**, then select the appropriate certificate and
    select Save.

<img src={useBaseUrl('/img/classic/image306.png')} />

4.  Choose **Download Metadata** and save the file to your computer.

<img src={useBaseUrl('/img/classic/image307.png')} />

### Configure the Identity Provider, Policy, and Role in the AWS Console

Next, you need to configure the identity provider (Salesforce) in the
AWS console and provide access to Amazon Connect via IAM policies and
roles. This allows AWS to acknowledge Salesforce as the identity
provider and to provide users authenticated through Salesforce with the
access required to login to Amazon Connect.

#### Configure the Identity Provider

1.  Login to the [**AWS console**](https://console.aws.amazon.com/)

2.  Open the [AWS identity and Access Management (IAM)
    Console](https://console.aws.amazon.com/iam/home)

3.  Select **Identity providers**

<img src={useBaseUrl('/img/classic/image308.png')} />

4.  Choose **Create Provider**

5.  On the Configure Provider screen, select **SAML** as the Provider
    Type

<img src={useBaseUrl('/img/classic/image309.png')} />

6.  Set the Provider Name to **SalesforceConnect**

7.  Import the metadata file you downloaded previously by selecting
    Choose File and navigating to the downloaded metadata file.

8.  Select Next Step

9.  Choose Create

10. The Identity provider has been created

#### Create the IAM Role and Policy

1.  Login to the [**AWS console**](https://console.aws.amazon.com/)

2.  Open the [AWS identity and Access Management (IAM)
    Console](https://console.aws.amazon.com/iam/home)

3.  Select **Roles,** then choose **Create role**

4.  Choose **SAML 2.0 federation**

5.  In the SAML provider dropdown, select the provider you just created,
    which should be named **SalesforceConnect**

6.  Select the radio button for **Allow programmatic and AWS Management
    Console access**. The Attribute and Value fields should
    auto-populate

<img src={useBaseUrl('/img/classic/image310.png')} />

7.  Select **Next: Permissions**

8.  On the Attach permissions policies page, select **Create policy.**
    This will open a new browser tab**.**

9.  Choose the **JSON** tab to switch to the JSON editor

10. Replace the existing JSON with the following:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Statement1",
            "Effect": "Allow",
            "Action": "connect:GetFederationToken",
            "Resource": [
                "**YOUR ARN**/user/${aws:userid}"
            ]
        }
    ]
}
```

11. Replace \*\*YOUR ARN\*\* with the ARN of your Amazon Connect
    instance. To find your Amazon Connect instance ARN:

12. Open a new tab in your browser and navigate to [Amazon Connect
    Console](https://console.aws.amazon.com/connect/home)

13. Click on the name (alias) of your Amazon Connect instance

14. Copy the Instance ARN and paste it to your computer's notepad (you
    will use it in a few places)

15. Choose **Review policy**

16. Set the Name to **SalesforceConnectPolicy**

17. Select **Create Policy**

18. Once the Policy has been created, close the tab, go back to the
    original (Role) tab in your browser and select the **Refresh**
    button (do not refresh the browser)

19. In the search field, enter **SalesforceConnectPolicy** and select
    the box to attach the policy.

<img src={useBaseUrl('/img/classic/image311.png')} />

20. Choose **Next: Tags** and set tags if desired, then choose **Next:
    Review**

21. Name the Role **SalesforceConnectRole** and provide a description if
    you like

22. Select Create role

### Complete the Base Salesforce Configuration

Next, you need to configure a Connect App in Salesforce and provide
further configuration to complete the SAML integration.

#### Create the Connected App in Salesforce

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, type **Apps** and select
    **Build-\>Create-\>Apps**

3.  Select New Connected App

4.  Provide a name for the Connected App, such as **AmazonConnectSAML,**
    then press tab and the API Name should auto-populate

5.  Provide an email contact address

<img src={useBaseUrl('/img/classic/image312.png')} />

6.  In the Web App Settings section, choose **Enable SAML**

7.  Leave Start URL empty

8.  Set Entity Id to the same name that you gave the Identity Provider
    in the IAM console, which should be **SalesforceConnect**

9.  Set ACS URL as **https://signin.aws.amazon.com/saml**

10. Set Subject Type as **Persistent ID**

<img src={useBaseUrl('/img/classic/image313.png')} />

11. Choose **Save**. The screen should refresh and the new Connected App
    should be displayed

12. Scroll down to the **Custom Attributes** section and select **New**

13. Set Key as
    **https://aws.amazon.com/SAML/Attributes/RoleSessionName**

14. Set Value as **$User.Email**

15. Select **Save**

<img src={useBaseUrl('/img/classic/image314.png')} />

16. Select New again to configure another custom attribute

17. Set Key as **https://aws.amazon.com/SAML/Attributes/Role**

18. The Value is going to be a combination of the Indentity Provider and
    IAM Role ARNs.

    a.  In a new tab, open the [AWS identity and Access Management (IAM)
        Console](https://console.aws.amazon.com/iam/home)

    b.  On the left navigation, select **Identity providers**

    c.  Select the Identity provider you created earlier, which should
        be named **SalesforceConnect**

    d.  Copy the **Provider ARN** to your computer's notepad

    e.  Return to the IAM console and select **Roles**

    f.  Select the Role you created earlier, which should be
        **SalesforceConnectRole**

    g.  Copy the **Role ARN** to your computer's notepad

    h.  Format the combined value as follows:

        'Identity Provider ARN' & ',' & 'Role ARN'

    i.  Paste the formatted value into the Custom Attribute Value

19. Select **Save**

<img src={useBaseUrl('/img/classic/image315.png')} />

20. At the top of the Connected App description, select **Manage**

21. Scroll down to the **SAML login Information** section

22. Copy the **IdP-Initiated Login URL** to your computer's notepad

23. Scroll down to find the Profiles section, then select **Manage
    Profiles**

24. Select a profile from the list, for example System Administrator for
    testing purposes

25. Choose **Save**

26. Open a new tab in your browser and navigate to IdP-Initiated Login
    URL that you copied in an earlier step

27. The browser will redirect to AWS Console and log you in
    automatically as a federated user
        **Note:** you may be able to see AWS services, but you should have
    no configuration rights.

<img src={useBaseUrl('/img/classic/image316.png')} />

28. The Federated Login consists of the Role name and your Salesforce
    email address.

29. Initial validation is complete

### Complete the Amazon Connect Configuration

The last step in the SAML setup is to add users to Amazon Connect that
exist in your Salesforce org, then validate login. It is critical that
the usernames for both platforms match exactly.

#### Add Users to Amazon Connect

1.  In a new browser tab, login to the [AWS
    console](https://console.aws.amazon.com/)

2.  Open the [Amazon Connect
    Console](https://console.aws.amazon.com/connect/home)

3.  Select the name (alias) of your Amazon Connect instance

4.  Choose **Login as administrator**

<img src={useBaseUrl('/img/classic/image317.png')} />

5.  Within the Amazon Connect administration portal, select **Users**
    then choose **User Management**

6.  Click **Add New Users**

7.  Leave **Create and setup a new user** selected and choose **Next**

8.  Complete the First and Last name fields as appropriate

9.  Set the login name to match the **Email Address** of your Salesforce
    user

10. Set the **Routing Profile**. In this example, the default Basic
    Routing Profile is shown

11. Set the **Security Profile**. In this example, *Admin* is shown

<img src={useBaseUrl('/img/classic/image318.png')} />

12. Select **Save**

13. Select **Create Users**

14. Repeat this process as required for your staff

### Final Configuration for the Lightning Experience

Now that all of the underlying pieces are in place, the last steps are
to create the Amazon Connect Single Sign On URL and validate that it
works correctly, then configure the Lightning CTI adapter and login the
agent.

#### Create the Amazon Connect SSO URL

You create the Amazon Connect SSO URL by combining the IdP-Initiated
Login URL that you copied earlier, and a relay state URL that will
redirect the authenticated user to your Amazon Connect instance.

The 'RelayState' will be in the following format (replace `us-west-2` with the region you are using):

<pre>https://us-west-2.console.aws.amazon.com/connect/federate/<b>InstanceId</b>?destination=%2Fconnect%2Fccp</pre>

1.  To begin, format the relay state URL by replacing InstanceId
    with your Instance Id. To find your Amazon Connect Instance Id:

    a.  Open a new tab in your browser and navigate to the [Amazon
        Connect Console](https://console.aws.amazon.com/connect/home)

    b.  Click on the name (alias) of your Amazon Connect

    c.  From the Instance ARN, copy the portion after the '/'. This is
        the Instance Id

<img src={useBaseUrl('/img/classic/image319.png')} />

2.  Concatenate the 'IdP-Initiated Login URL' and the 'RelayState', by
    combining the two with "&RelayState=" in between, for example:

<pre>https://mXXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid&RelayState=https://us-west-2.console.aws.amazon.com/connect/federate/<b>InstanceId</b>?destination=%2Fconnect%2Fccp</pre>

3.  This is the Final SSO URL, needed for the Amazon Connect Lightning
    CTI Adapter Configuration.

4.  To validate this URL:

    a.  Open a new tab in the same browser that you are logged into
        Salesforce

    b.  Paste the fully concatenated URL into the new browser and press
        enter

    c.  You should automatically login and be redirected to the Amazon
        Connect Contact Control Panel.

5.  Once you validate the full URL, you are ready to add it to the
    Lightning Adapter

#### Configure the CTI Lightning Adapter in Salesforce For SSO

Now we are ready to complete the last step in the configuration process:
Adding the SSO settings for Salesforce to the Lightning Adapter. This
will configure the adapter to authenticate via SSO and redirect to the
Amazon Connect Contact Control Panel once authentication completes.

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose **AC CTI Adapters**.

<img src={useBaseUrl('/img/classic/image83.png')} />

3.  Select **ACLightningAdapter**

4.  Scroll down to the Single SignOn (SSO) section and choose the pencil
    icon of either field to edit

<img src={useBaseUrl('/img/classic/image84.png')} />

5.  For the SSO Url, copy the first part of the SSO URL that you created
    previously, up to the first question mark (do not copy the question
    mark), for example:

    `https://mXXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid&RelayState=https://us-west-2.console.aws.amazon.com/connect/federate/<b>InstanceId</b>?destination=%2Fconnect%2Fccp`

6.  Paste this portion of the URL into the **SSO Url** field

<img src={useBaseUrl('/img/classic/image85.png')} />

7.  For the SSO Relay State, copy everything AFTER the question mark (do
    not copy the question mark), for example:

    `https://mXXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid&RelayState=https://us-west-2.console.aws.amazon.com/connect/federate/<b>InstanceId</b>?destination=%2Fconnect%2Fccp`

8.  Paste this portion of the URL into the **SSO Relay State** field

<img src={useBaseUrl('/img/classic/image86.png')} />

9.  Choose **Save**

> **Note: With the new Amazon Connect instance urls (`*.my.connect.aws`) you must put the full URL into the `Amazon Connect Instance` field in the AC CTI Adapter record for SSO to work. Ex: using `https://myinstance.my.connect.aws` instead of `my instance`.**

10. **Refresh** your browser to make the changes take effect

    a.  **NOTE:** If you receive a blocked popup warning, select the
        warning and change the setting to always allow popups from your
        Salesforce org, then refresh the browser again


<img src={useBaseUrl('/img/classic/image87.png')} />

11. After a few seconds, a new window should pop up for a moment. This
    window is performing the authentication and setting your session
    cookie. Once it does this, it will close automatically.

<img src={useBaseUrl('/img/classic/image88.png')} />

12. Once the authentication window closes, select the **phone icon** in
    the console toolbar to open the CCP
    Note: You may also receive popups to allow notifications and
    microphone access. Please accept both.

13. You should now see the authenticated and logged in CCP

<img src={useBaseUrl('/img/classic/image89.png')} />

Configuration is complete
