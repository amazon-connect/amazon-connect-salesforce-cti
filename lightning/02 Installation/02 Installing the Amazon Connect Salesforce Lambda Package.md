<h2 class="toc">Installing the Amazon Connect Salesforce Lambda Package</h2>

The Amazon Connect Salesforce Lambda package adds considerable
capability to the integration. It includes data connectivity between
Amazon Connect and Salesforce for typical tasks like lookups, case
creation, and updates. Additionally, it adds new features like real-time
and historical data imports, contact trace record imports, recording
import, transcription, and contact analytics functions. These
capabilities are configurable and can be activated or deactivated on a
call-by-call basis.

The Amazon Connect Salesforce Lambda package is delivered via the AWS
Serverless Application Repository. The AWS Serverless Application
Repository enables you to quickly deploy code samples, components, and
complete applications. Each application is packaged with an AWS
Serverless Application Model (SAM) template that defines the AWS
resources used. There is no additional charge to use the Serverless
Application Repository - you only pay for the AWS resources used in the
applications you deploy.

<h3 class="toc">Prerequisite Configuration and Data Collection</h3>

In order to successfully deploy and utilize the functions in the Amazon
Connect Salesforce Lambda package, you will need to validate and
configure some items in your Salesforce Org and gather some information
from your Amazon Connect instance.

-   Check your Salesforce API version

-   Create a new Connected App

-   Create a new API user

-   Gather Amazon Connect information

As you are preparing to deploy the package, it is a good idea to open a
text editor and note information as you configure the environment. We
will point out the items you will need to provide.

<h4 class="toc">Check your Salesforce API Version</h4>

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, type **apex**, then select **Apex
    Classes** from the results

<img src="../media/image56.png" />

3.  Select New

<img src="../media/image57.png" />

4.  Select the Version Settings tab

<img src="../media/image58.png" />

5.  Note the Salesforce.com API version in your notepad

<img src="../media/image59.png" />

<h4 class="toc">Create a New Connected App</h4>

To leverage the full potential of the integration, Salesforce data needs
to be accessed from AWS environment. The package comes with a set of
pre-built AWS Lambda functions to lookup, update and create Salesforce
objects within Amazon Connect Contact Flows. These Lambda function
access Salesforce using the Salesforce REST API.

To get access to the environment, a Connected App must be configured
with OAuth settings enabled.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, type **app manager**, then select **App
    Manager** from the results

3.  In the upper right corner, select **New Connected App**

<img src="../media/image60.png" />

4.  On the New Connected App form, enter a name for the Connected App,
    such as **Amazon Connect Integration** and press tab. This will
    populate the API Name automatically. Then provide a contact email
    address

<img src="../media/image61.png" />

5.  Select the checkbox to **Enable OAuth Settings**

<img src="../media/image62.png" />

6.  Set the **Callback URL** to https://www.salesforce.com

<img src="../media/image63.png" />

7.  In the Selected OAuth Scopes section, select the following and add
    them to the Selected OAuth Scopes:

8.  Access and manage your data (api)

9.  Access your basic information (id, profile, email, address, phone)

10. Select the checkbox for Require Secret for Web Server Flow

11. The **API (Enable OAuth Settings)** section should now look like
    this

<img src="../media/image64.png" />

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

<img src="../media/image65.png" />

22. Select **Save**

<h4 class="toc">Create a new API user</h4>

The Lambda functions authenticate with Salesforce via user credentials.
It is a common practice to create an API user account for this purpose.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, type **profiles**, then select
    **Profiles** from the results

3.  Select New Profile

<img src="../media/image66.png" />

4.  Provide a Profile Name, such as **API_ONLY**

5.  From the **Existing Profile** dropdown, select **System Administrator**
    **NOTE:** You\'re advised to use a full Salesforce License for the
    user to be able to set the below permissions and have full access to
    avoid any other errors.

<img src="../media/image67.png" />

6.  Select **Save** to create the new profile

7.  Once the new profile page opens, select the **System Permissions** button

8. If the Lightning Experience User checkbox is selected, clear it

<img src="../media/image68.png" />

9. Save the system permissions, then go back to Profile Overview

10. Select the *Password Policies* link, click edit

11. Set **User password expire in** to **Never expires** **NOTE:** Failure to this may lead to production outages.

12. Select **Save**

13. In the **Quick Find** field, type **connect**, then select **Manage
    Connected Apps** from the results

<img src="../media/image69.png" />

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

    d.  Username: apiuser@\<yoursalesforcedomain\>.com

    e.  Nickname: apiuser

21. On the right-hand side, set **User License** to **Salesforce**

22. Set Profile to API_ONLY

23. Choose **Save**

24. In **Quick Find**, search for "Permission Sets". Select the **AC_Administrator** permission set.

<img src="../media/lambda-install-0.png" />

25. Select **Manage Assignments**. Add the apiuser you just created to the permission set.

26. A confirmation email with an **activation link** will be sent to the
    email address provided. Choose the link to activate your user and
    set their password

27. Fill out the form to set a password for the API user

28. Select **Change Password**. The API user will log into the
    Salesforce Classic view

29. Access the API user's personal settings by selecting the username in
    the top right corner, then choose **My Settings**

<img src="../media/image70.png" />

30. In the **Quick Find** field, type **security** then select **Reset
    My Security Token** from the results

<img src="../media/image71.png" />

31. Select **Reset Security Token**. Your security token will be emailed
    to you

32. Copy the security token from the email to your notepad

<h4 class="toc">Gather Information from Your Amazon Connect Instance</h4>

The last thing to do before you can install the Amazon Connect
Salesforce Lambda Package is gather some details about your Amazon
Connect instance. These will be used during the package installation.

1.  In a new browser tab, login to the [**AWS
    console**](https://console.aws.amazon.com/)

2.  Navigate to the [Amazon Connect
    Console](https://console.aws.amazon.com/connect/home)

3.  Select your Instance Alias

4.  On the Overview page for your instance, copy the string following
    instance/ in the Instance ARN and paste it to your notepad. This is
    your Instance ID.

<img src="../media/image72.png" />

5.  In the left nav, select **Data storage**

6.  On the **Data storage** page, copy the S3 bucket names for your Call
    recordings and Exported Reports. The bucket name is everything
    preceding the first / in the XX will be stored here sections

<img src="../media/image73.png" />

7.  In the left nav, select **Data streaming**

8.  Note the name of the Kinesis stream configured in the Contact Trace
    Records section, then select **Create a new Kinesis Stream**. This
    will take you to the list of Kinesis streams configured in this
    region.

9.  Select the **Kinesis stream name** that matches what was configured
    in the previous step

10. On the stream detail page, copy the entire value for Stream ARN

<img src="../media/image74.png" />

<h4 class="toc">Store Salesforce Credentials in AWS Secrets Manager</h4>

To ensure that your Salesforce credentials are secure, the Lambdas
require that the credentials are stored in AWS Secrets Manager. AWS
Secrets Manager is a highly secure service that helps you store and
retrieve secrets.

1.  In a new browser tab, login to the AWS console

2.  Make sure you are in the same region as your Amazon Connect
    instance. You can set the region by expanding the region selector in
    the upper right and choosing the region

<img src="../media/image75.png" />

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

<img src="../media/image76.png" />

23. Click Next

24. Give your secret a name, like *SalesforceCredentials*

25. Click Next

26. Make sure **Disable automatic rotation** is checked.

27. Click Next

28. Click Store

29. Select the secret you just created, and copy the Secret ARN

<img src="../media/image77.png" />

30. You should now have all of the information you need to install the
    package

<h3 class="toc">Install the Amazon Connect Salesforce Lambda package</h3>

1.  In a new browser tab, login to the [AWS
    console](https://console.aws.amazon.com/)

2.  Make sure you are in the same region as your Amazon Connect instance

3.  Once you have selected the region, navigate to the [Amazon Connect
    Console](https://console.aws.amazon.com/connect/home)

4.  Verify that the Amazon Connect instance that you wish to configure
    is listed

5.  Once you have verified your Amazon Connect instance, Open the
    [Serverless Application Repository
    Console](https://console.aws.amazon.com/serverlessrepo/home)

6.  In the left navigation, select **Available Applications**

<img src="../media/image78.png" />

7.  In the search area, make sure that **Public applications** is
    selected, check the box for **Show apps that create custom IAM roles
    or resource policies**, and enter **Salesforce** in the search
    field, this will automatically filter the available packages

<img src="../media/image79.png" />

8.  Select AmazonConnectSalesForceLambda

<img src="../media/image80.png" />

9.  When the Application loads, scroll down to the **Application
    settings** section

10. Fill in the parameters using the data you gathered in your notepad
    in the previous section using the following notes:

    a.  **Application name:** You can accept the default here or change
        it as desired

    b.  **CTRKinesisARN:** This is the ARN for the Kinesis stream that
        was configured for Contact Trace Record streaming in Amazon
        Connect. This is the complete ARN. Amazon Kinesis Firehose is
        not supported.

    c.  **ConnectRecordingS3BucketName:** This is the name of the S3
        bucket used to store recordings for your Amazon Connect
        instance. This is ONLY the bucket name, no sub-folders or
        suffixes

    d.  **ConnectReportingS3BucketName:** This is the name of the S3
        bucket used to store exported reports for your Amazon Connect
        instance. This is ONLY the bucket name, no sub-folders or
        suffixes

    e.  **HistoricalReportingImportEnabled:** true \| false - if set to
        true, the package will include a feature to import Amazon
        Connect Queue and Agent Historical Metrics into your Salesforce
        Org. This feature requires you to provide
        **ConnectReportingS3BucketName**

    f.  **LambdaLoggingLevel:** DEBUG \| INFO \| WARNING \| ERROR \|
        CRITICAL - Logging level for Lambda functions

    g.  **PrivateVpcEnabled:** Set to true if functions should be
        deployed to a private VPC. Set VpcSecurityGroupList and
        VpcSubnetList if this is set to true.

    h.  **RealtimeReportingImportEnabled:** true \| false - if set to
        true, the package will include a feature to publish Amazon
        Connect Queue Metrics into your Salesforce Org. This feature
        requires you to provide **AmazonConnectInstanceId**

    i.  **SalesforceAdapterNamespace:** This is the namespace for CTI
        Adapter managed package. The default value is **amazonconnect**.
        If a non-managed package is used, leave this field blank.

    j.  **SalesforceCredentialsKMSKeyARN:** This is the ARN for KMS
        customer managed key that you created in the previous section.

    k.  **SalesforceCredentialsSecretsManagerARN:** This is the ARN for
        the Secrets Manager Secret that you created in the previous
        section.

    l.  **SalesforceHost:** The full domain for your salesforce org. For
        example
        `https://mydevorg-dev-ed.my.salesforce.com`.
        Please make sure that the host starts with `https`, and that the url
        ends with `.my.salesforce.com`. This url can be found in `Setup` -> `My Domain`.

    m.  **SalesforceProduction:** true \| false - True for Production
        Environment, False for Sandbox

    n.  **SalesforceUsername:** The username for the API user that you
        configured in the previous section

    o.  **SalesforceVersion:** This is the Salesforce.com API version
        that you noted in the previous section

    p.  **VpcSecurityGroupList:** The list of SecurityGroupIds for
        Virtual Private Cloud (VPC). Not required if PrivateVpcEnabled
        is set to false.

    q.  **VpcSubnetList:** The list of Subnets for the Virtual Private
        Cloud (VPC). Not required if PrivateVpcEnabled is set to false.

    r.  **AmazonConnectInstanceId:** You Amazon Connect Instance Id.
        Only required if you enable real time reporting

    s.  **AmazonConnectQueueMaxRecords:** Enter record set size for list
        queue query. Max is 100.

    t.  **ContactLensImportEnabled:** true \| false - Set to false if 
        importing Contact Lens into Salesforce should not be enabled.

    u.  **CTREventSourceMappingMaximumRetryAttempts:** Maximum retry
        attempts on failure for lambdas triggered by Kinesis Events.

    v.  **AmazonConnectQueueMetricsMaxRecords:** Enter record set size
        for queue metrics query. Max is 100.

    w.  **PostcallCTRImportEnabled:** true \| false - Set to false if
        importing CTRs into Salesforce should not be enabled on the
        package level. This setting can be disabled on a call-by-call
        basis.

    x.  **PostcallRecordingImportEnabled:** true \| false - Set to false
        if importing call recordings into Salesforce should not be
        enabled on the package level. This setting can be disabled on a
        call-by-call basis.

    y.  **PostcallTranscribeEnabled:** true \| false - Set to false if
        post-call transcription should not be enabled on the package
        level. This setting can be disabled on a call-by-call basis.

    z.  **TranscribeOutputS3BucketName:** This is the S3 bucket where
        Amazon Transcribe stores the output. Typically, this is the same
        bucket that call recordings are stored in, so you can use the
        same value as found in **ConnectRecordingS3BucketName**. Not
        required if PostcallRecordingImportEnabled, 
        PostcallTranscribeEnabled, ContactLensImportEnabled set to false.

    z.  **TranscriptionJobCheckWaitTime:** Time between transcription
        job checks

11. Once you have completed the form, select **Deploy**

12. Deployment will take some time, with status updates being provided
    by the UI. Once it has completely deployed, you will receive a
    notification on the screen

<img src="../media/image81.png" />

<h3 class="toc">Test the Core Functionality</h3>

The package provides a core Lambda function (sfInvokeAPI) that supports
multiple operations, like lookup, create and update. For the initial
validation, sample events are provided within the function. Validating
this function provides a good check that the installation and
configuration is correct.

Validating the lambda functions requires the use of test events to
simulate data coming into the function as it would in a typical
deployment. Each function has a set of test event samples included to
make validation easier.

<h4 class="toc">Validate the core functionality</h4>

1.  In a new browser tab, login to the [**AWS
    console**](https://console.aws.amazon.com/)

2.  Open the [AWS Lambda
    Console](https://console.aws.amazon.com/lambda/home)

3.  In the Filter field, enter sfInvokeAPI and press enter, this will
    filter your list out to the core function that we just installed

<img src="../media/image82.png" />

4.  Select the **function name.** First, we will validate a phone number
    lookup.

5.  In the Environment pane, double-click the event-phoneLookup.json
    file

<img src="../media/image83.png" />

6.  The test even JSON will open in the Lambda editor

7.  Modify the value for sf_phone to match the phone number of the test
    contact you created when you setup the CTI adapter or for any valid
    contact in your Salesforce org\
    NOTE: The phone number must be in [E.164
    format](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-contact-control-panel.html#international-calls-ccp)

<img src="../media/image84.png" />

8.  Select the entire JSON event and copy it, then close the
    **event-phoneLookup.json** tab.

9.  In the top-right corner, select drop-down arrow next to **Test** and
    choose **Configure test events**

<img src="../media/image85.png" />

10. Select the radio button for **Create new test event** and provide an
    event name, for example: **phoneLookup**

11. Select the existing event JSON and **delete** it. Paste the modified
    JSON payload you copied from the **event-phoneLookup.json** file

<img src="../media/image86.png" />

12. Select **Create** to save your test event

13. By default, your new test event should be selected in the drop-down
    list to the left of the Test button.

<img src="../media/image87.png" />

14. Select **Test**

15. If successful, the result will contain fields defined in "sf_fields"
    parameter in the invocation event

<img src="../media/image88.png" />

16. Copy the value for the **Id** key in the response. Next, we are
    going to use that Id to create a Case in Salesforce.

17. In the Environment pane, double-click the **event-create.json**
    file. Replace the existing ContactId value with the ID value you
    copied previously.

<img src="../media/image89.png" />

18. Select the entire JSON event and copy it, then close the
    **event-create.json** tab.

19. In the top-right corner, select drop-down arrow next to **Test** and
    choose **Configure test events**

<img src="../media/image90.png" />

20. Select the radio button for **Create new test event** and provide an
    event name, for example: **createCase**

21. Select the existing event JSON and **delete** it. Paste the modified
    JSON payload you copied from the **event-create.json** file

<img src="../media/image91.png" />

22. Select **Create** to save your test event

23. By default, your new test event should be selected in the drop-down
    list to the left of the Test button.

<img src="../media/image92.png" />

24. Select **Test**

25. If successful, the result will contain the Case Id

<img src="../media/image93.png" />

26. Copy the value for the **Id** key in the response.

27. When we created the case, the **Status was set to New** and the
    **Priority to Low**. We are going to use the update operation to
    close the case.

28. In the Environment pane, double-click the **event-update.json** file
    and replace the existing Case Id in "sf_id" parameter with the new
    one you copied from the last test result

<img src="../media/image94.png" />

29. Select the **entire JSON event** and copy it, then close the
    **event-update.json** tab.

30. In the top-right corner, select drop-down arrow next to **Test** and
    choose **Configure test events

<img src="../media/image95.png" />

31. Select the radio button for **Create new test event** and provide an
    event name, for example: **updateCase**

32. Select the existing event JSON and **delete** it. Paste the modified
    JSON payload you copied from the **event-update.json** file

<img src="../media/image96.png" />

33. Select **Create** to save your test event

34. By default, your new test event should be selected in the drop-down
    list to the left of the Test button.

<img src="../media/image97.png" />

35. Select **Test**

36. If successful, the result will be the **HTTP 204** No Content
    success status response code

<img src="../media/image98.png" />

37. Log in into your Salesforce org and go to the **Service Console**

38. In the search box, change the object type to Cases and type Amazon
    Connect Case, then press enter

<img src="../media/image99.png" />

39. You should find 1 case opened by the API user, and the status should
    be closed

<img src="../media/image100.png" />

40. You have completed core function validation

<h3 class="toc">Allow Amazon Connect to Access the sfInvokeAPI Lambda Function</h3>

Once you have validated function, you can use the Amazon Connect console
to add the sfInvokeAPI Lambda function to your Amazon Connect instance.
This automatically adds resource permissions that allow Amazon Connect
to invoke the function.

<h4 class="toc">Add the Lambda function to your Amazon Connect instance</h4>

1.  In a new browser tab, login to the [**AWS
    console**](https://console.aws.amazon.com/)

2.  Navigate to the [Amazon Connect
    Console](https://console.aws.amazon.com/connect/home)

3.  Select your **Instance Alias**

4.  In the navigation pane, choose **Contact flows**.

<img src="../media/image101.png" />

5.  For **AWS Lambda**, select the function that includes sfInvokeAPI in
    the name

<img src="../media/image102.png" />

6.  Choose **Add Lambda Function**. Confirm that the ARN of the function
    is added under **Lambda Functions**.
    

<img src="../media/image103.png" />

7.  The AWS Lambda function has been added to your Amazon Connect
    instance.
