<h1 class="toc">Call Recording Link for Task</h1>

The Adapter comes with a Visualforce component that provides users with
the ability to download a call recording created within Amazon Connect
from a Salesforce page.

##### Cloudformation Template

To make sure that the AWS resources are set up, make sure that the
_PostcallRecordingImportEnabled_ parameter is set to true in your
Cloudformation stack:

<img src="../media/audiostreaming0.png" />

##### AWS Side Setup

1. See [these steps](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html). Follow the sections _Creating key pairs for your signers_, and _Adding a signer to a distribution_.
   Make sure to record the **public key ID**.

2. Copy and paste the contents of the private key .pem file into a text editor. Replace every newline character with a space, and then delete the last character. This is most easily done using a "find and replace" feature in your text editor.
   The resulting string of text should resemble the following:

```
-----BEGIN RSA PRIVATE KEY----- (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (under 64 character string) -----END RSA PRIVATE KEY-----
```

3. Navigate to the "Secrets Manager" service. Select the **SalesforceCredentials**.

4. Under the "Secret value" tab, select "Retrieve secret value" and then "Edit".

5. For the **CloudFrontPrivateKey** field, copy and paste the modified contents of the private key .pem file. For the **CloudFrontAccessKeyID** field, copy and paste the **Access Key Id** you recorded above. Your Secrets Manager Secret should look like the following:

<img src="../media/audiostreaming1.png" />

Please note that your secret may also be formatted stored as a "Secret key/value" secret rather than a "Plaintext" secret; both secret types are valid.

6. Navigate to your Salesforce instance. Navigate to setup, then search for "Visualforce pages."

<img src="../media/audiostreaming2.png" />

7. Select the **ACSFCCP_CallRecordingTask** visualforce page, and select "preview." Copy the url of the opened page up until ".com".

8. Navigate back to aws, to the s3 bucket where your audio recording files are stored. This s3 bucket should be the same bucket as the **ConnectRecordingS3BucketName** parameter to the serverless application.

9. In the bucket details, select the **Permissions** tab and then the **CORS configuration** tab and paste the following. Replace the AllowedOrigin with the url copied in step 9.

```json
[
  {
    "AllowedHeaders": ["Access-Control-Allow-Origin"],
    "AllowedMethods": ["GET"],
    "AllowedOrigins": ["{url copied in step 9}"],
    "ExposeHeaders": []
  }
]
```

<img src="../media/audiostreaming3.png" />

10. Select Save

11. Navigate to the "IAM" aws service. Select **Add User**.

<img src="../media/audiostreaming4.png" />

12. Give your IAM user a name, like **sfInvokeGenerateAudioRecordingStreamingURLIAMUser**. For the "AWS Access Type", select **Programmatic access**.

<img src="../media/audiostreaming5.png" />

13. Select Next, then select "Attach existing policies directly." Search for **invokeSfGenerateAudioRecordingStreamingURLPolicy** and select it.

14. Create the user, then copy down the **Access key ID** and the **Secret access key**. These keys will be used in the next section.

<img src="../media/audiostreaming6.png" />

15. Navigate to the "Lambda" aws service. Search for term "sfgenerate" and copy down the full name of the sfGenerateAudioRecordingStreaming lambda. This will be used in the next section.

<img src="../media/audiostreaming7.png" />

16. Navigate back to the "Lambda" aws service main page and navigate to the **us-east-1 region**. Select **create function**.

<img src="../media/audiostreaming8.png" />

17. Enter a function name, like **sfSig4RequestToS3**.

18. Select **change default execution role**, and **use an existing role**. Search for and select _sfSig4RequestToS3Role_.

<img src="../media/audiostreaming9.png" />

19. Select **create function**. On the next screen, copy and paste the contents from [this file](/lightning/04%20Configuring%20and%20Using%20AWS%20Serverless%20Application%20Repository%20for%20Salesforce%20Features/sfSig4RequestToS3.js) into the function body, and then select **Deploy**.

20. Select the actions dropdown, and then select **Deploy to Lambda@Edge**.

21. Select the Cloudfront Distribution that was created by the Salesfore Lambdas serverless application, then check off the "I acknowledge..." check box, then select deploy.

<img src="../media/audiostreaming10.png" />

##### Salesforce Side Setup

1. In Salesforce Setup, search for "Named Credentials." Select **New Named Credential.**

2. For the **Name** and **Label**, enter AwsGenerateAudioRecordingURL.

3. In the **URL** section, enter `https://lambda.{awsRegion}.amazonaws.com/2015-03-31/functions/{lambdaFunctionName}/invocations/`-- replace {awsRegion} with the awsRegion your serverless application resides in (for example, us-east-1), and replace {lambdaFunctionName} with the full name of the sfGenerateAudioRecordingStreaming lambda you recorded in the previous section.

4. For **Identity Type** select **Named Principal**. For the **Authentication Protocol**, select **AWS Signature Version 4**. Fill in the **Access key ID** you recorded in the previous section as "AWS Access Key ID", the **Secret access key** as the "AWS Secret Access Key", the AWS Region, and "lambda" as the "AWS Service."

<img src="../media/audiostreaming11.png" />

5. Select **save**.

<h4 class="toc">Enabling call recording streaming</h4>

1.  Login to your Amazon Connect instance as an Administrator

2.  From the left navigation, choose **Routing** then select **Contact
    flows**

<img src="../media/audiostreaming12.png" />

3.  Open the contact flow that you want to use to enable call recording
    import. This contact flow must have Amazon Connect's native
    recording turned on.

4.  In you contact flow, before you transfer to queue, add a new **Set
    contact attributes** block

5.  Configure the block to set a contact attribute as follows:

    a. **Destination key:** postcallRecordingImportEnabled

    b. **Value:** true

<img src="../media/audiostreaming13.png" />

6.  **Save** the Set contact attributes block. Make sure it is
    appropriately connected to your contact flow, and **Publish** the
    flow.

7.  Wait approximately 2 minutes to give the contact flow time to
    publish.

To edit the sample Task Page Layout, please follow the steps:

1.  Log in to your Salesforce Org

2.  Navigate to **Setup** then in type _Object Manager_ in Quick Find

<img src="../media/audiostreaming14.png" />

3.  Click on the "Task" object

<img src="../media/audiostreaming15.png" />

4.  Click on the "Page Layouts"

<img src="../media/audiostreaming16.png" />

5.  Click on the "_Task Layout_" and the layout designer will open

<img src="../media/audiostreaming17.png" />

6.  Drag the "ACSFCCP_CallRecording" item to the desired are of the layout to have that information appear on the agent's screen. The following screenshot shows how the Call Details section could appear when placing the "ACSFCCP_CallRecording" item on the required Task layout.

<img src="../media/audiostreaming18.png" />

7.  To have access to the recording, the user must have an active session with Amazon Connect. This can be achieved by either logging in to the CCP softphone, or by logging in to Amazon Connect outside of Salesforce. After the session is established, a page refresh should make the player appear.
