---
id: 04-salesforce-lambdas-manual-setup
title: Setting Up The Salesforce Lambdas Manually
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Below are manual setup instructions for the Salesforce Lambdas.

<img src={useBaseUrl('/img/classic/image100.png')} />

## Salesforce Lambda Prerequisites

Consider the following prerequisites before you install the Lambda
package.

### Determine your production Environment

In your installation notes, enter the value for "Production Environment"
as "true" or "false", depending on whether the Salesforce environment
that you are deploying the package into is a production or a sandbox.
For Production, enter "true". For Sandbox enter "false".

### Determine your Consumer Key and Secret

To leverage the full potential of the integration, Salesforce data needs
to be accessed from AWS environment. The AWS Serverless package comes
with a set of pre-built queries to lookup, update and create Salesforce
objects within Amazon Connect Contact Flows, in form of AWS Lambda
functions.

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

a.  Access the identity URL service (id, profile, email, address, phone)

b.  Manage user data via APIs (api)

8.  Select the checkbox "Require Secret for Web Server Flow", and the checkbox "Require Secret For Refresh Token Flow"

<img src={useBaseUrl('/img/classic/image105.png')} />

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

### Determine your Username, Password and Security Token

The authentication of the Lambda Functions requires valid user
credentials. It is a common practice to create an API user account for
this purpose.

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

<img src={useBaseUrl('/img/shared/usersetup1.png')} />

8.  If the Lightning Experience User checkbox is selected, clear it

<img src={useBaseUrl('/img/classic/image117.png')} />

9. Save the system permissions, then go back to Profile Overview

10. Select the _Password Policies_ link, click edit

<img src={useBaseUrl('/img/shared/usersetup2.png')} />

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

### Store Salesforce credentials in AWS Secrets Manager

To ensure that your Salesforce credentials are secure, the Lambdas
require that the credentials are stored in AWS Secrets Manager. AWS
Secrets Manager is a highly secure service that helps you store and
retrieve secrets.

1.  In a new browser tab, login to the AWS console

2.  Make sure you are in the same region as your Amazon Connect
    instance. You can set the region by expanding the region selector in
    the upper right and choosing the region

<img src={useBaseUrl('/img/classic/image129.png')} />

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

9.  For the encryption key, click "Add new key"

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

19. Navigate back to the Secrets Manager setup tab

20. Select the key you just created

<img src={useBaseUrl('/img/classic/image130.png')} />

21. Click Next

22. Give your secret a name, like *SalesforceCredentials*

23. Click Next

24. Make sure **automatic rotation** is disabled.

25. Click Next

26. Click Store

27. Select the secret you just created, and copy the Secret ARN

<img src={useBaseUrl('/img/classic/image131.png')} />

28. You should now have all of the information you need to install the
    package

## Install the Amazon Connect Salesforce Lambda package

1.  Login into your AWS Account

2.  Navigate AWS Serverless Application Repository
    (<https://aws.amazon.com/serverless/serverlessrepo/>)

<img src={useBaseUrl('/img/classic/image132.png')} />

3.  Click on the Search (magnifying glass) and type in Amazon Connect
    Salesforce.

<img src={useBaseUrl('/img/classic/image133.png')} />

4.  Select AmazonConnectSalesForceLambdas and click "Deploy"

<img src={useBaseUrl('/img/classic/image134.png')} />

5.  Fill in all Salesforce related fields in "Configure application
    parameters".\
    All values should be available in your installation notes:

<img src={useBaseUrl('/img/classic/image135.png')} />

<img src={useBaseUrl('/img/classic/image136.png')} />

6.  The Lambda package includes additional features which can be enabled
    or disabled, based on particular use-case:

    a.  *PostcallCTRImportEnabled* -- if set to true, the package will
        include a feature to import Amazon Connect CTRs into your
        Salesforce Org. Once enabled, you can decide which CTR records
        should be imported, by setting a custom attribute
        (*postcallCTRImportEnabled*) in your Contact Flow. This feature
        requires you to provide *CTRKinesisARN*.

    b.  *PostcallRecordingImportEnabled* -- if set to true, the package
        will include a feature to import Amazon Connect Call Recording
        (wav) files into your Salesforce Org. This feature is not
        required if you only need a call recording link in your
        Salesforce Org. Once enabled, you can decide which Call
        Recordings should be imported, by setting a custom attribute
        (*postcallRecordingImportEnabled*) in your Contact Flow. This
        feature requires you to provide: *CTRKinesisARN,
        ConnectRecordingS3BucketName* and *TranscribeOutputS3BucketName*

    c.  *PostcallTranscribeEnabled* -- if set to true, the package will
        include a feature to transcribe Amazon Connect Call Recordings,
        using Amazon Transcribe, and provide Speech Analytics, using
        Amazon Comprehend, then import results into your Salesforce Org.
        Once enabled, you can decide which Call Recordings should be
        transcribed and analyzed, by setting custom attributes
        (*postcallTranscribeEnabled*, *postcallTranscribeLanguage* and
        *postcallTranscribeComprehendAnalysis*) in your Contact Flow.
        This feature requires you to provide: *CTRKinesisARN,
        ConnectRecordingS3BucketName* and *TranscribeOutputS3BucketName*

    d.  *RealtimeReportImportEnabled* -- if set to true, the package
        will include a feature to publish Amazon Connect Queue Metrics
        into your Salesforce Org. This feature requires you to provide
        *AmazonConnectInstanceId*

    e.  *HistoricalReportingImportEnabled* -- if set to true, the
        package will include a feature to import Amazon Connect Queue
        and Agent Historical Metrics into your Salesforce Org. This
        feature requires you to provide *ConnectReportingS3BucketName*

    f.  *CTRKinesisARN* -- please set Amazon Kinesis Stream ARN that is
        attached to you Amazon Connect instance as Contact Trace Records
        destination. Amazon Kinesis Firehose is not supported. This
        parameter is mandatory for certain features, please see above.

    g.  *ConnectRecordingS3BucketName* -- this is the S3 bucket where
        Amazon Connect stores call recordings. This parameter is
        mandatory for certain features, please see above.

    h.  *ConnectReportingS3BucketName* -- this is the S3 bucket name
        where Amazon Connect stores schedule reports. This parameter is
        mandatory for Historical Reporting Import.

    i.  *AmazonConnectInstanceId* -- this parameter is mandatory for
        Realtime Reporting Import

    j.  *TranscribeOutputS3BucketName* -- this is the S3 bucket where
        Amazon Transcribe stores the output. You can use an existing
        bucket, or create a new one, as the installation process doesn't
        create one for you. This parameter in mandatory certain
        features, please see above.

    k.  *SalesforceHost:* The full domain for your salesforce org. For
        example
        `https://mydevorg-dev-ed.my.salesforce.com`.
        Please make sure that the host starts with `https`, and that the url
        ends with `.my.salesforce.com`. This url can be found in `Setup` -> `My Domain`.

7.  Once completed, click "Deploy" function:

<img src={useBaseUrl('/img/classic/image137.png')} />

8.  The package provides a single Lambda function (sfInvokeAPI) that
    supports multiple operations, like lookup, create and update. For
    the initial validation, sample events are provided within the
    function. Click on the function name and check the list of files in
    the editor.

<img src={useBaseUrl('/img/classic/image138.png')} />

9.  To validate a phone number lookup, double-click on
    event-phoneLookup.json file and copy the text in your clipboard.

<img src={useBaseUrl('/img/classic/image139.png')} />

10. In the top-right corner, click the drop-down arrow next to the
    "Test" button and select "Configure test events"

<img src={useBaseUrl('/img/classic/image140.png')} />

11. Select "Create new test event", set Event name (i.e. phoneLookup)
    and paste the JSON payload you've copied in the previous step.

<img src={useBaseUrl('/img/classic/image141.png')} />

12. Click "Create" button

13. From the drop-down list, select your "eventLookup" and click "Test"
    button

<img src={useBaseUrl('/img/classic/image142.png')} />

14. If successful, the result will contain fields defined in "sf_fields"
    parameter in the invocation event

<img src={useBaseUrl('/img/classic/image143.png')} />

15. As a next step, we are going to use the ContactId provided and
    create a Case in Salesforce. Double-click on "event-create.json"
    file and set the ContactId value from the previous step. Copy the
    JSON text into your clipboard.

<img src={useBaseUrl('/img/classic/image144.png')} />

16. In the top-right corner, click the drop-down arrow next to the
    "Test" button and select "Configure test events"

<img src={useBaseUrl('/img/classic/image145.png')} />

17. Select "Create new test event", set Event name (i.e. createCase) and
    paste the JSON payload you've copied in the previous step.

<img src={useBaseUrl('/img/classic/image146.png')} />

18. Click "Create" button

19. From the drop-down list, select your "createCase" and click "Test"
    button

<img src={useBaseUrl('/img/classic/image147.png')} />

20. If successful, the result will contain a Case Id for newly created
    case:

<img src={useBaseUrl('/img/classic/image148.png')} />

21. As defined in the event payload, Status is "New" and Priority is
    "Low". We are going to use the update operation to close the case.
    Copy the Case Id provided in the previous step, then double-click on
    "event-update.json" file and paste the Case Id in "sf_id" parameter:

<img src={useBaseUrl('/img/classic/image149.png')} />

22. In the top-right corner, click the drop-down arrow next to the
    "Test" button and select "Configure test events"

<img src={useBaseUrl('/img/classic/image150.png')} />

23. Select "Create new test event", set Event name (i.e. closeCase) and
    paste the JSON payload you've copied in the previous step.

<img src={useBaseUrl('/img/classic/image151.png')} />

24. Click "Create" button

25. From the drop-down list, select your "closeCase" and click "Test"
    button

<img src={useBaseUrl('/img/classic/image152.png')} />

26. If successful, the result will be HTTP code 204 ("No Content"
    success code):

<img src={useBaseUrl('/img/classic/image153.png')} />

27. Login in to Salesforce and search for Case and it's details. The
    Case status should be "Closed".