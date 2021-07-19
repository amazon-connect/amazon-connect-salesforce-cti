---
id: 02-guided-setup
title: Setting Up The CTI Adapter Using Guided Setup
---

import useBaseUrl from "@docusaurus/useBaseUrl";

<img src={useBaseUrl('/img/shared/guidedsetup0.png')} />

In order to navigate to the Guided Setup feature, perform the following steps (NOTE: If you are not an admin user then you must first add yourself to the AC_Administrator permission set, see [here](./02-guided-setup#add-users-to-a-permission-set) for more details):

1. Navigate to the Setup section in your Salesforce instance.

2. Search for Visualforce Pages, and select **AC_GuidedSetup**.

3. Select **Preview**.

## Guided Setup Prerequisites

The below sections are linked to from the Guided Setup feature. Only perform the below steps when the
Guided Setup feature links to them.

### Create Named Credential

See [here](/docs/classic/installation/01-installation#setting-up-the-executeawsservice-named-credential) for instructions on setting up the Named Credential.

### Create Connected App

The Lambda function access Salesforce using the Salesforce REST API. To
get access to the environment, a Connected App must be configured with
OAuth settings enabled.

1.  Log in to Salesforce

2.  Navigate to Setup \> Create \> Apps

<img src={useBaseUrl('/img/classic/image101.png')} />

3.  Click on the "New" button for the Connected Apps at the bottom of the page

4.  In the following form, fill out the Connected App Name, API Name and Contact Email with values of your choice. We recommend "Amazon Connect Integration" as the Connected App Name and the default value for the API name.

<img src={useBaseUrl('/img/classic/image102.png')} />

5.  Select the checkbox next to "Enable OAuth Settings" as shown below.

<img src={useBaseUrl('/img/classic/image103.png')} />

6.  Ensure the Callback URL is set to <https://www.salesforce.com>

<img src={useBaseUrl('/img/classic/image104.png')} />

7.  Ensure Selected OAuth Scopes has the following values selected:

a.  Access and manage your data (api)

b.  Access your basic information (id, profile, email, address, phone)

<img src={useBaseUrl('/img/classic/image105.png')} />

8.  Select the checkbox "Require Secret for Web Server Flow"

<img src={useBaseUrl('/img/classic/image106.png')} />

9.  Click "Save" at the bottom of the screen.

10. Click "Continue" on the next screen

<img src={useBaseUrl('/img/classic/image107.png')} />

11. Once the app has been created, on the app's detail screen, please copy the "Consumer Key" value to your installation notes

<img src={useBaseUrl('/img/classic/image108.png')} />

12. Select "Click to reveal" next to Consumer Secret and record this value to "Consumer Secret" in your installation notes.

13. Click "Manage" at the top of the page

<img src={useBaseUrl('/img/classic/image109.png')} />

14. On the page that appears, click "Edit Policies"

15. Set "Permitted Users" to "Admin approved users are pre-authorizes"

<img src={useBaseUrl('/img/classic/image110.png')} />

16. Click "OK" on the pop-up dialog:

<img src={useBaseUrl('/img/classic/image111.png')} />

17. Set "IP Relaxation" to "Relax IP restrictions"

<img src={useBaseUrl('/img/classic/image112.png')} />

18. Click "Save"

## Guided Setup Additional Instructions

The below sections are linked to from the Guided Setup feature. Only perform the below steps when the
Guided Setup feature links to them.

### Retrieve Amazon Connect Instance Url

1.  Navigate to the [Amazon Connect
    Console](https://console.aws.amazon.com/connect/home)

2.  Select your Instance Alias

3.  On the Overview page for your instance, copy the Login URL up until the `/` (if your login url has one).

<img src={useBaseUrl('/img/shared/guidedsetup4.png')} />

### Add users to the Call Center

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, enter **Call Center**, then select
    **Call Centers** from the result list

<img src={useBaseUrl('/img/lightning/image28.png')} />

3.  If you see the **Say Hello to Salesforce Call Center** page, select
    **Continue**

4.  Select **AC Lightning Adapter**

<img src={useBaseUrl('/img/lightning/image29.png')} />

5.  On the **AC Lightning Adapter** detail page, select **Edit**

6.  On the **AC Lightning Adapter: Manage Users** page, select **Add
    More Users**.

7.  Set filters (if desired) and then choose **Find**.

8. Select the checkbox next to the user to add, then choose **Add to
    Call Center**.

<img src={useBaseUrl('/img/lightning/image30.png')} />

9. Repeat the steps to add more users.

### Add users to a Permission Set

All users must be assigned the required permission set to access
Salesforce metadata. The Amazon Connect CTI Adapter includes two
Permission Sets, one for agents and one for managers, that grant users
the appropriate access for their role. More information on assigning
user permissions can be found in the [Salesforce help
documentation](https://help.salesforce.com/articleView?id=perm_sets_mass_assign.htm&type=5).

1.  Log in into your Salesforce Org.

2. Navigate to **Setup** \> **Manage Users** \> **Permission Sets**.

<img src={useBaseUrl('/img/classic/image16.png')} />

2.  Choose **AC_Manager**.

<img src={useBaseUrl('/img/classic/image17.png')} />

3.  Choose **Manage Assignments**.

4.  Choose **Add Assignments**.

5.  Select the users to assign the permissions, then choose **Assign**. More information on assigning user permissions can be found at: <https://help.salesforce.com/articleView?id=perm_sets_mass_assign.htm&type=5>

#### AC_Administrator

<img src={useBaseUrl('/img/classic/image18.png')} />

#### AC_Manager

<img src={useBaseUrl('/img/classic/image19.png')} />

#### AC_Agent

<img src={useBaseUrl('/img/classic/image20.png')} />

### Create the Softphone Layout

Next, we need to create a softphone layout for the solution.

<img src={useBaseUrl('/img/classic/image9.png')} />

1.  In the **Quick Find** box, type *Softphone Layouts*, then choose **Softphone Layouts**.

2.  Choose **New**.

<img src={useBaseUrl('/img/classic/image10.png')} />

3.  Enter a name for the layout, such as *AmazonConnectDefault*, then select the **Is Default Layout** checkbox.

<img src={useBaseUrl('/img/classic/image11.png')} />

4.  Expand "Display these salesforce.com objects" and select objects that CTI Connector should be able to search, for a screen-pop query. In this example, besides default selection, I'm adding "Case", as I want to search and screen-pop by CaseID.

<img src={useBaseUrl('/img/classic/image12.png')} />

5. If necessary, configure the search behavior in the case that one or multiple records are found upon CTI search.

<img src={useBaseUrl('/img/classic/image13.png')} />

6. In this example, keep the default configuration, then choose
    **Save**.

<img src={useBaseUrl('/img/classic/image14.png')} />

<img src={useBaseUrl('/img/classic/image15.png')} />

### Retrieve the Salesforce API Version

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, type **apex**, then select **Apex
    Classes** from the results

<img src={useBaseUrl('/img/lightning/image56.png')} />

3.  Select New

<img src={useBaseUrl('/img/lightning/image57.png')} />

4.  Select the Version Settings tab

<img src={useBaseUrl('/img/lightning/image58.png')} />

5.  Note the Salesforce.com API version in your notepad

<img src={useBaseUrl('/img/lightning/image59.png')} />

### Setting up the Salesforce API User

The Lambda functions authenticate with Salesforce via user credentials.
It is a common practice to create an API user account for this purpose.

1.  Log in to Salesforce

2.  Navigate to Setup \> Manage Users \> Profiles

3.  Click "New Profile"

4.  Enter the Profile Name (i.e. "API Only")

5.  Select the existing profile to clone (The integration user\'s access to just those objects required for the integration)

<img src={useBaseUrl('/img/classic/image113.png')} />

NOTE: You\'re advised to use a full Salesforce License for the user to
be able to set the below permissions and have full access to avoid any
other errors.

6.  Click "Save". A New Profile is created:

<img src={useBaseUrl('/img/classic/image114.png')} />

7.  Once the new profile page opens, select the **System Permissions** button

8.  If the Lightning Experience User checkbox is selected, clear it

<img src={useBaseUrl('/img/classic/image117.png')} />

9. Save the system permissions, then go back to Profile Overview

10. Select the _Password Policies_ link, click edit

<img src={useBaseUrl('/img/classic/image115.png')} />

11. Set **User password expire in** to **Never expires** **NOTE:** Failure to this may lead to production outages.

<img src={useBaseUrl('/img/classic/image116.png')} />

12. Select **Save**

13. Navigate to Setup \> Manage Apps \> Connected Apps

14. Select the app you have created in the previous step (i.e. Amazon Connect Integration)

<img src={useBaseUrl('/img/classic/image118.png')} />

15. Click "Manage Profiles"

<img src={useBaseUrl('/img/classic/image119.png')} />

16. Ensure the "API Only" profile is selected:

<img src={useBaseUrl('/img/classic/image120.png')} />

17. Click "Save" at the bottom of the page

18. Navigate to Setup \> Manage Users \> Users

19. Click "New User"

<img src={useBaseUrl('/img/classic/image121.png')} />

20. Set necessary fields: Last Name, Alias, Email, Username, Nickname

<img src={useBaseUrl('/img/classic/image122.png')} />

21. On the right-hand side, set the User License and Profile

<img src={useBaseUrl('/img/classic/image123.png')} />

22. Click "Save"

23. In **Quick Find**, search for "Permission Sets". Select the **AC_Administrator** permission set.

<img src={useBaseUrl('/img/classic/lambda-install-0.png')} />

24. Select **Manage Assignments**. Add the apiuser you just created to the permission set.

25. A confirmation email will be sent, with an activation link. Click the link to activate your user.

<img src={useBaseUrl('/img/classic/image124.png')} />

Change (set) a password for apiuser (Considered a strong that contains
at least 20 random characters):

<img src={useBaseUrl('/img/classic/image125.png')} />

26. Click "Change Password"

27. Access the apiuser personal settings by selecting the username in the top right corner, then "My Settings".

<img src={useBaseUrl('/img/classic/image126.png')} />

28. Type "Security Token" in the Quick Find box and click "Reset My Security Token".

<img src={useBaseUrl('/img/classic/image127.png')} />

29. Your security token will be emailed to you

<img src={useBaseUrl('/img/classic/image128.png')} />

30. Copy the security token from the email in to your installation notes for the "Access Token" value.

### Setting up the SecretsManager Secret

To ensure that your Salesforce credentials are secure, the Lambdas
require that the credentials are stored in AWS Secrets Manager. AWS
Secrets Manager is a highly secure service that helps you store and
retrieve secrets.

1.  In a new browser tab, login to the AWS console

2.  Make sure you are in the same region as your Amazon Connect
    instance. You can set the region by expanding the region selector in
    the upper right and choosing the region

<img src={useBaseUrl('/img/lightning/image75.png')} />

3.  Navigate to the [Secrets Manager
    console](https://console.aws.amazon.com/secretsmanager/home)

4.  Select **Secrets**

5.  Select **Store a new secret**

6.  Select **Other types of secrets**

7.  Make sure **Secret key/value** is selected

8.  Enter key value pairs that match the following:

    a.  **Key:** Password, **Value:** the password for the API user that
        you configured in the previous section

    b.  **Key:** ConsumerKey, **Value:** the Consumer Key for the
        Connected App you created in the previous section

    c.  **Key:** ConsumerSecret, **Value:** the Consumer Secret for the
        Connected App you created in the previous section

    d.  **Key:** AccessToken, **Value:** this is the access token for
        the API user that you configured in the previous section

9.  For the encryption key, click **Add new key**

10. Select **Create Key**

11. Make sure key type is set to **symmetric**

12. Give your key an **alias**, like
    *SalesforceCredentialsSecretsManagerKey*

13. Click Next

14. Select administrators you want to have access permission to change
    the key policy. Make sure you are being as restrictive as possible

15. Click Next

16. Select the users and roles you want to have access to the Salesforce
    credentials in Secrets Manager. Make sure you are being as
    restrictive as possible

17. Click Next

18. Click Finish

19. Click on the managed key that you just created (which is
    *SalesforceCredentialsSecretsManagerKey* in this case).

20. Note down the ARN. This is SalesforceCredentialsKMSKeyARN that will
    be used later when installing the Amazon Connect Salesforce Lambda
    package.

21. Navigate back to the Secrets Manager setup tab

22. Select the key you just created

<img src={useBaseUrl('/img/lightning/image76.png')} />

23. Click Next

24. Give your secret a name, like *SalesforceCredentials*

25. Click Next

26. Make sure **Disable automatic rotation** is checked.

27. Click Next

28. Click Store

29. Select the secret you just created, and copy the Secret ARN

<img src={useBaseUrl('/img/lightning/image77.png')} />
