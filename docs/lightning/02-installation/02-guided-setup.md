---
id: 02-guided-setup
title: Setting Up The CTI Adapter Using Guided Setup
---

import useBaseUrl from "@docusaurus/useBaseUrl";

<img src={useBaseUrl('/img/shared/guidedsetup0.png')} />

In order to navigate to the Guided Setup feature, perform the following steps (NOTE: If you are not an admin user then you must first add yourself to the AC_Administrator permission set, see [here](./02-guided-setup#add-users-to-a-permission-set) for more details):

1. Navigate to the Service Console in your Salesforce instance.

2. Click the drawdown button in the Service Console navigation bar, and select **Edit**.

<img src={useBaseUrl('/img/shared/guidedsetup1.png')} />

3. In the proceeding popup, select **Add More Items**.

<img src={useBaseUrl('/img/shared/guidedsetup2.png')} />

4. Click the **+** button next to **AC Guided Setup**, then add the item and **save**.

5. Select the newly added **AC Guided Setup** button in the drawdown menu.

<img src={useBaseUrl('/img/shared/guidedsetup3.png')} />

## Guided Setup Prerequisites

The below sections are linked to from the Guided Setup feature. Only perform the below steps when the
Guided Setup feature links to them.

### Create Named Credential

See [here](/docs/lightning/installation/01-installation#setting-up-the-executeawsservice-named-credential) for instructions on setting up the Named Credential.

### Create Connected App

To get access to the environment, a Connected App must be configured
with OAuth settings enabled.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, type **app manager**, then select **App
    Manager** from the results

3.  In the upper right corner, select **New Connected App**

<img src={useBaseUrl('/img/lightning/image60.png')} />

4.  On the New Connected App form, enter a name for the Connected App,
    such as **Amazon Connect Integration** and press tab. This will
    populate the API Name automatically. Then provide a contact email
    address

<img src={useBaseUrl('/img/lightning/image61.png')} />

5.  Select the checkbox to **Enable OAuth Settings**

<img src={useBaseUrl('/img/lightning/image62.png')} />

6.  Set the **Callback URL** to https://www.salesforce.com

<img src={useBaseUrl('/img/lightning/image63.png')} />

7.  In the Selected OAuth Scopes section, select the following and add
    them to the Selected OAuth Scopes:

8.  Access and manage your data (api)

9.  Access your basic information (id, profile, email, address, phone)

10. Select the checkbox for Require Secret for Web Server Flow

11. The **API (Enable OAuth Settings)** section should now look like
    this

<img src={useBaseUrl('/img/lightning/image64.png')} />

12. Select **Save** at the bottom of the screen.

13. Select **Continue** on the New Connected App page

14. You should now be at the new app's page

15. Copy the value for **Consumer Key** to your notepad

16. Select **Click to reveal** next to Consumer Secret and copy the
    value to your notepad

17. At the top of the detail page, select **Manage**

18. On the Connected App Detail page, select the **Edit Policies**
    button

19. Set Permitted Users to **Admin approved users are pre-authorized**
    and choose OK on the pop-up dialog

20. Set IP Relaxation to **Relax IP restrictions**

21. The OAuth Policies section should now look like the following

<img src={useBaseUrl('/img/lightning/image65.png')} />

22. Select **Save**

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

1.  Log in into your Salesforce org and go to **Setup**

2.  In **Quick Find**, enter **Permission** and select **Permission
    Sets** from the results

3.  Choose **AC_Administrator**, **AC_Agent** or **AC_Manager** as
    appropriate for the user(s)

<img src={useBaseUrl('/img/lightning/image12.png')} />

4.  Choose **Manage Assignments**.

5.  Choose **Add Assignments**.

6.  Select the users to assign the permissions, then choose **Assign**.

<img src={useBaseUrl('/img/lightning/image13.png')} />

7.  Repeat these steps as needed for all users

#### AC_Administrator

<img src={useBaseUrl('/img/lightning/image14.png')} />

#### AC_Manager

<img src={useBaseUrl('/img/lightning/image15.png')} />

#### AC_Agent

<img src={useBaseUrl('/img/lightning/image16.png')} />

### Configure the Toolkit settings

1.  Navigate to **Setup** then in type **Custom Settings** in Quick
    Find

<img src={useBaseUrl('/img/lightning/image31.png')} />

2.  Next to the Toolkit for Amazon Connect custom setting, choose
    **Manage**

<img src={useBaseUrl('/img/lightning/image32.png')} />

3.  Select **New**

<img src={useBaseUrl('/img/lightning/image33.png')} />

4.  On the following page, provide the URL to your Amazon Connect
    instance. This value can be found in your Amazon Connect console.

<img src={useBaseUrl('/img/lightning/amazonconnectconsoleaccessurl.png')} />

<img src={useBaseUrl('/img/lightning/image34.png')} />

5.  You will also see the option to enable and disable certain 
triggers in the package, which you can configure to meet your needs. You
can change these whenever you would like to. For more details, see below

These are options we provide that allow you to toggle certain functionality in the adapter.
- CCA Case Trigger - This trigger looks for any ContactChannelAnalytics records that could be related to a updated/inserted Case, and creates a relationsihp between the two records. This trigger uses batching to process the update requests.
- CCA Contact Trigger - This trigger looks for any ContactChannelAnalytics records that could be related to a updated/inserted Contact, and creates a relationsihp between the two records. This trigger uses batching to process the update requests.
- Case Contact CCA Trigger - This trigger looks for any Case/Contact records that could be related to an updated/inserted ContactChannelAnalytics record, and creates a relationsihp between the records.
- Task Trigger - This trigger creates a ContactChannel record for any inserted/updated task that with a `CallObject` field that does not currently have a ContactChannel record created before.

6.  Select **Save**

### Create the Softphone Layout

The softphone layout settings will tell the console what resources are
available for screenpop by default and what to do under different match
conditions.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** box, type **Softphone**, then choose
    **Softphone Layouts** from the results

3.  If you are presented with the Get Started message, choose
    **Continue**

4.  On the Softphone Layouts page, choose **New**

<img src={useBaseUrl('/img/lightning/image35.png')} />

5.  Enter a name for the layout, such as **AmazonConnectDefault**, then
    select the **Is Default Layout** checkbox.

<img src={useBaseUrl('/img/lightning/image36.png')} />

6.  Expand **Display these salesforce.com objects** and select objects
    that CTI Connector should be able to search, for a screen-pop query.
    In this example, Case has been added to the default selection,
    allowing search and screen-pop by CaseID.

<img src={useBaseUrl('/img/lightning/image37.png')} />

7.  If desired, configure the search behavior to your requirements

<img src={useBaseUrl('/img/lightning/image38.png')} />

8.  Additionally, validate the Screen Pop settings. Please note that the
    default behavior is to not pop a screen if there is more than one
    result

<img src={useBaseUrl('/img/lightning/image39.png')} />

9.  Once you have configured the search behavior, choose **Save**


### Retrieve the Salesforce API Version

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, type **apex**, then select **Apex
    Classes** from the results

<img src={useBaseUrl('/img/lightning/image56.png')} />

3.  Select New

<img src={useBaseUrl('/img/lightning/image57.png')} />

4.  Select the Version Settings tab

<img src={useBaseUrl('/img/lightning/image58.png')} />

5.  Note the Salesforce.com API version in your notepad. The pattern of this value is ```vXX.X```.

<img src={useBaseUrl('/img/lightning/image59.png')} />

### Setting up the Salesforce API User

The Lambda functions authenticate with Salesforce via user credentials.
It is a common practice to create an API user account for this purpose.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, type **profiles**, then select
    **Profiles** from the results

3.  Select New Profile

<img src={useBaseUrl('/img/lightning/image66.png')} />

4.  Provide a Profile Name, such as **API_ONLY**

5.  From the **Existing Profile** dropdown, select **System Administrator**
    **NOTE:** You\'re advised to use a full Salesforce License for the
    user to be able to set the below permissions and have full access to
    avoid any other errors.

<img src={useBaseUrl('/img/lightning/image67.png')} />

6.  Select **Save** to create the new profile

7.  Once the new profile page opens, select the **Edit** button

8.  Scroll down to the Administrative Permissions section

9.  If the Lightning Experience User checkbox is selected, clear it

<img src={useBaseUrl('/img/lightning/image68.png')} />

10. Scroll down to the **Password Policies** section at the bottom of
    the page

11. Set **User password expire in** to **Never expires**
    **NOTE:** Failure to this may lead to production outages.

12. Select **Save**

13. In the **Quick Find** field, type **connect**, then select **Manage
    Connected Apps** from the results

<img src={useBaseUrl('/img/lightning/image69.png')} />

14. Select the app you have created earlier, **Amazon Connect
    Integration**

15. In the profiles section, select **Manage Profiles**

16. Select the new **API_Only** profile that you just created

17. Select **Save** at the bottom of the page

18. In the **Quick Find** field, type **users** then select **Users**
    from the results

19. Select New User

20. Set the required fields as:

    a.  Last Name: apiuser

    b.  Alias: apiuser

    c.  Email: provide a valid email address

    d.  Username: apiuser@<yoursalesforcedomain\>.com

    e.  Nickname: apiuser

21. On the right-hand side, set **User License** to **Salesforce**

22. Set Profile to API_ONLY

23. Choose **Save**

24. In **Quick Find**, search for "Permission Sets". Select the **AC_Administrator** permission set.

<img src={useBaseUrl('/img/lightning/lambda-install-0.png')} />

25. Select **Manage Assignments**. Add the apiuser you just created to the permission set.

26. A confirmation email with an **activation link** will be sent to the
    email address provided. Choose the link to activate your user and
    set their password

27. Fill out the form to set a password for the API user

28. Select **Change Password**. The API user will log into the
    Salesforce Classic view

29. Access the API user's personal settings by selecting the username in
    the top right corner, then choose **My Settings**

<img src={useBaseUrl('/img/lightning/image70.png')} />

30. In the **Quick Find** field, type **security** then select **Reset
    My Security Token** from the results

<img src={useBaseUrl('/img/lightning/image71.png')} />

31. Select **Reset Security Token**. Your security token will be emailed
    to you

32. Copy the security token from the email to your notepad

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

### Test the Salesforce Lambda Core Functionality

The package provides a core Lambda function (sfInvokeAPI) that supports
multiple operations, like lookup, create and update. For the initial
validation, sample events are provided within the function. Validating
this function provides a good check that the installation and
configuration is correct.

Validating the lambda functions requires the use of test events to
simulate data coming into the function as it would in a typical
deployment. Each function has a set of test event samples included to
make validation easier.

#### Validate the core functionality

1.  In a new browser tab, login to the [**AWS
    console**](https://console.aws.amazon.com/)

2.  Open the [AWS Lambda
    Console](https://console.aws.amazon.com/lambda/home)

3.  In the Filter field, enter sfInvokeAPI and press enter, this will
    filter your list out to the core function that we just installed

<img src={useBaseUrl('/img/lightning/image82.png')} />

4.  Select the **function name.** First, we will validate a phone number
    lookup.

5.  In the Environment pane, double-click the event-phoneLookup.json
    file

<img src={useBaseUrl('/img/lightning/image83.png')} />

6.  The test even JSON will open in the Lambda editor

7.  Modify the value for sf_phone to match the phone number of the test
    contact you created when you setup the CTI adapter or for any valid
    contact in your Salesforce org\
    NOTE: The phone number must be in [E.164
    format](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-contact-control-panel.html#international-calls-ccp)

<img src={useBaseUrl('/img/lightning/image84.png')} />

8.  Select the entire JSON event and copy it, then close the
    **event-phoneLookup.json** tab.

9.  In the top-right corner, select drop-down arrow next to **Test** and
    choose **Configure test events**

<img src={useBaseUrl('/img/lightning/image85.png')} />

10. Select the radio button for **Create new test event** and provide an
    event name, for example: **phoneLookup**

11. Select the existing event JSON and **delete** it. Paste the modified
    JSON payload you copied from the **event-phoneLookup.json** file

<img src={useBaseUrl('/img/lightning/image86.png')} />

12. Select **Create** to save your test event

13. By default, your new test event should be selected in the drop-down
    list to the left of the Test button.

<img src={useBaseUrl('/img/lightning/image87.png')} />

14. Select **Test**

15. If successful, the result will contain fields defined in "sf_fields"
    parameter in the invocation event

<img src={useBaseUrl('/img/lightning/image88.png')} />

16. Copy the value for the **Id** key in the response. Next, we are
    going to use that Id to create a Case in Salesforce.

17. In the Environment pane, double-click the **event-create.json**
    file. Replace the existing ContactId value with the ID value you
    copied previously.

<img src={useBaseUrl('/img/lightning/image89.png')} />

18. Select the entire JSON event and copy it, then close the
    **event-create.json** tab.

19. In the top-right corner, select drop-down arrow next to **Test** and
    choose **Configure test events**

<img src={useBaseUrl('/img/lightning/image90.png')} />

20. Select the radio button for **Create new test event** and provide an
    event name, for example: **createCase**

21. Select the existing event JSON and **delete** it. Paste the modified
    JSON payload you copied from the **event-create.json** file

<img src={useBaseUrl('/img/lightning/image91.png')} />

22. Select **Create** to save your test event

23. By default, your new test event should be selected in the drop-down
    list to the left of the Test button.

<img src={useBaseUrl('/img/lightning/image92.png')} />

24. Select **Test**

25. If successful, the result will contain the Case Id

<img src={useBaseUrl('/img/lightning/image93.png')} />

26. Copy the value for the **Id** key in the response.

27. When we created the case, the **Status was set to New** and the
    **Priority to Low**. We are going to use the update operation to
    close the case.

28. In the Environment pane, double-click the **event-update.json** file
    and replace the existing Case Id in "sf_id" parameter with the new
    one you copied from the last test result

<img src={useBaseUrl('/img/lightning/image94.png')} />

29. Select the **entire JSON event** and copy it, then close the
    **event-update.json** tab.

30. In the top-right corner, select drop-down arrow next to **Test** and
    choose **Configure test events

<img src={useBaseUrl('/img/lightning/image95.png')} />

31. Select the radio button for **Create new test event** and provide an
    event name, for example: **updateCase**

32. Select the existing event JSON and **delete** it. Paste the modified
    JSON payload you copied from the **event-update.json** file

<img src={useBaseUrl('/img/lightning/image96.png')} />

33. Select **Create** to save your test event

34. By default, your new test event should be selected in the drop-down
    list to the left of the Test button.

<img src={useBaseUrl('/img/lightning/image97.png')} />

35. Select **Test**

36. If successful, the result will be the **HTTP 204** No Content
    success status response code

<img src={useBaseUrl('/img/lightning/image98.png')} />

37. Log in into your Salesforce org and go to the **Service Console**

38. In the search box, change the object type to Cases and type Amazon
    Connect Case, then press enter

<img src={useBaseUrl('/img/lightning/image99.png')} />

39. You should find 1 case opened by the API user, and the status should
    be closed

<img src={useBaseUrl('/img/lightning/image100.png')} />

40. You have completed core function validation

### Allow Amazon Connect to Access the sfInvokeAPI Lambda Function

Once you have validated function, you can use the Amazon Connect console
to add the sfInvokeAPI Lambda function to your Amazon Connect instance.
This automatically adds resource permissions that allow Amazon Connect
to invoke the function.

#### Add the Lambda function to your Amazon Connect instance

1.  In a new browser tab, login to the [**AWS
    console**](https://console.aws.amazon.com/)

2.  Navigate to the [Amazon Connect
    Console](https://console.aws.amazon.com/connect/home)

3.  Select your **Instance Alias**

4.  In the navigation pane, choose **Contact flows**.

<img src={useBaseUrl('/img/lightning/image101.png')} />

5.  For **AWS Lambda**, select the function that includes sfInvokeAPI in
    the name

<img src={useBaseUrl('/img/lightning/image102.png')} />

6.  Choose **Add Lambda Function**. Confirm that the ARN of the function
    is added under **Lambda Functions**.
    

<img src={useBaseUrl('/img/lightning/image103.png')} />

7.  The AWS Lambda function has been added to your Amazon Connect
    instance.
