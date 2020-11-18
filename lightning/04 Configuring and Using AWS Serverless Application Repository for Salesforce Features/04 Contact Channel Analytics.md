<h2 class="toc">Contact Channel Analytics</h2>

In addition to the CTI adapter's native ability to provide direct
playback links to call recordings in Amazon Connect, the AWS Serverless
Application Repository for Salesforce includes several functions that
allow you to process recordings, perform quality analytics functions,
and bring data into Salesforce.

This processing is done post-call, using the Contact Trace Record (CTR)
as the initiation path. The following quality analytics options are
available:

-   **Call Recording Import:** imports the actual audio file into
    Salesforce. This option is not mandatory for the others to function.

-   **Recording Transcript:** you can choose to have your call
    recordings transcribed to text and presented in a visual format that
    resembles a chat conversation. This allows for quick scanning of a
    call to identify key segments of conversation. This option is
    required if you wish to include the next level of analysis

-   **AI-Driven Contact Analysis:** once the recordings have been
    transcribed to text, you can also indicate that you wish to do
    further analysis of the conversation using [Amazon
    Comprehend](https://aws.amazon.com/comprehend/). Available options
    are:

    -   **Sentiment Analysis:** returns the overall sentiment of the
        conversation (Positive, Negative, Neutral, or Mixed).

    -   **Keyphrase Extraction:** returns the key phrases or talking
        points and a confidence score to support that this is a key
        phrase.

    -   **Language Detection:** returns the dominant language with a
        confidence score to support that a language is dominant

    -   **Custom Entities:** allows you to customize the AI to identify
        terms that are specific to your domain

    -   **Syntax Analysis:** analyze the transcript using tokenization
        and Parts of Speech (PoS), and identify word boundaries and
        labels like nouns and adjectives within the text.

<h3 class="toc">Prerequisite Setup</h3>

#### Cloudformation Template

To make sure that the AWS resources are set up, make sure that the
*PostcallRecordingImportEnabled* parameter is set to true in your
Cloudformation stack:

<img src="../media/image266.png" />

#### AWS Side Setup

1. In a **root AWS account**, navigate to "My Security Credentials" in the AWS console.

<img src="../media/image267.png" />

2. Under "Cloudfront Key Pairs," select **Create New Key Pair**

<img src="../media/image268.png" />

3. In the modal that then pops up, select **Download Private Key File**. Then, copy down the **Access Key ID**.

<img src="../media/image269.png" />

4. Copy and paste the contents of the private key .pem file into a text editor. Replace every newline character with a space, and then delete the last character. This is most easily done using a "find and replace" feature in your text editor.
The resulting string of text should resemble the following:

```
-----BEGIN RSA PRIVATE KEY----- (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (under 64 character string) -----END RSA PRIVATE KEY-----
```

5. Navigate to the "Secrets Manager" service. Select the **SalesforceCredentials**. 

6. Under the "Secret value" tab, select "Retrieve secret value" and then "Edit".

7. For the **CloudFrontPrivateKey** field, copy and paste the modified contents of the private key .pem file. For the **CloudFrontAccessKeyID** field, copy and paste the **Access Key Id** you recorded above. Your Secrets Manager Secret should look like the following:

<img src="../media/image270.png" />

Please note that your secret may also be formatted stored as a "Secret key/value" secret rather than a "Plaintext" secret; both secret types are valid.

8. Navigate to your Salesforce instance. Navigate to setup, then search for "Visualforce pages."

<img src="../media/image283.png" />

9. Select the **AC_RecordingViewer** visualforce page, and select "preview." Copy the url of the opened page up until ".com".

10. Navigate back to aws, to the s3 bucket where your audio recording files are stored. This s3 bucket should be the same bucket as the **ConnectRecordingS3BucketName** parameter to the serverless application.

11. In the bucket details, select the **Permissions** tab and then the **CORS configuration** tab and paste the following. Replace the AllowedOrigin with the url copied in step 9.

```json
[
    {
        "AllowedHeaders": [
            "Access-Control-Allow-Origin"
        ],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "{url copied in step 9}"
        ],
        "ExposeHeaders": []
    }
]
```

<img src="../media/image271.png" />

12. Select Save

13. Navigate to the "IAM" aws service. Select **Add User**.

<img src="../media/image272.png" />

14. Give your IAM user a name, like **sfInvokeGenerateAudioRecordingStreamingURLIAMUser**. For the "AWS Access Type", select **Programmatic access**.

<img src="../media/image273.png" />

15. Select Next, then select "Attach existing policies directly." Search for **invokeSfGenerateAudioRecordingStreamingURLPolicy** and select it.

16. Create the user, then copy down the **Access key ID** and the **Secret access key**. These keys will be used in the next section.

<img src="../media/image284.png" />

17. Navigate to the "Lambda" aws service. Search for term "sfgenerate" and copy down the full name of the sfGenerateAudioRecordingStreaming lambda. This will be used in the next section.

<img src="../media/image274.png" />

18. Navigate back to the "Lambda" aws service main page and navigate to the **us-east-1 region**. Select **create function**.

<img src="../media/audiostreaming0.png" />

19. Enter a function name, like **sfSig4RequestToS3**. 

20. Select **change default execution role**, and **use an existing role**. Search for and select *sfSig4RequestToS3Role*.

<img src="../media/audiostreaming1.png" />

21. Select **create function**. On the next screen, copy and paste the contents from [this file](./sfSig4RequestToS3.js) into the function body, and then select **Deploy**.

22. Select the actions dropdown, and then select **Deploy to Lambda@Edge**.

23. Select the Cloudfront Distribution that was created by the Salesfore Lambdas serverless application, then check off the "I acknowledge..." check box, then select deploy.

<img src="../media/audiostreaming2.png" />

#### Salesforce Side Setup

1. In Salesforce Setup, search for "Named Credentials." Select **New Named Credential.**

2. For the **Name** and **Label**, enter AwsGenerateAudioRecordingURL.

3. In the **URL** section, enter `https://lambda.{awsRegion}.amazonaws.com/2015-03-31/functions/{lambdaFunctionName}/invocations/`-- replace {awsRegion} with the awsRegion your serverless application resides in (for example, us-east-1), and replace {lambdaFunctionName} with the full name of the sfGenerateAudioRecordingStreaming lambda you recorded in the previous section.

4. For **Identity Type** select **Named Principal**. For the **Authentication Protocol**, select **AWS Signature Version 4**. Fill in the **Access key ID** you recorded in the previous section as "AWS Access Key ID", the **Secret access key** as the "AWS Secret Access Key", the AWS Region, and "lambda" as the "AWS Service."

<img src="../media/image275.png" />

5. Select **save**.

6. In the setup search box, search for "Permission sets". Select the "AC_CallRecording" permission set. Select "Manage Assignments".

<img src="../media/image278.png" />

7. Select "Add Assignments". Add the users that should have access to the audio recordings and select "assign".

<img src="../media/image279.png" />

<h3 class="toc">Call Recording Import</h3>

You can import Call Recordings into your Salesforce Org. This
allows for easy access to the recordings from within Salesforce and can
be used in conjunction with the other contact channel analytics features
to provide a complete view of the customer interaction.

The import of call recordings is not required to activate the other
contact channel analytics features. Additionally, the import will
consume storage in your Salesforce Org, approximately 2MB per minute.

Once enabled during the AWS Serverless Application Repository for
Salesforce, recording import is activated on a call by call basis by
adding a specific contact attribute. This attribute is used during
Contact Trace Record processing to trigger the call import.

NOTE: After Call Work time is a part of the Contact Trace Record. As
such, CTRs are not generated until the agent leaves the after call work
state. If you are not seeing a recording import, please make sure the
agent has completed the call and left the after call work state.

<h4 class="toc">Enabling call recording import</h4>

1.  Login to your Amazon Connect instance as an Administrator

2.  From the left navigation, choose **Routing** then select **Contact
    flows**

    
<img src="../media/image201.png" />

3.  Open the contact flow that you want to use to enable call recording
    import. This contact flow must have Amazon Connect's native
    recording turned on.

4.  In you contact flow, before you transfer to queue, add a new **Set
    contact attributes** block

5.  Configure the block to set a contact attribute as follows:

    a.  **Destination key:** postcallRecordingImportEnabled

    b.  **Value:** true

<img src="../media/image202.png" />

6.  **Save** the Set contact attributes block. Make sure it is
    appropriately connected to your contact flow, and **Publish** the
    flow.

7.  Wait approximately 2 minutes to give the contact flow time to
    publish.

8.  Place a call, connect to your agent, speak for a few moments to test
    the audio, then end the call. Make sure the agent exits after call
    work

9.  After a minute or so, the recording should import.

<h4 class="toc">Adding Contact Channel Analytics to the Service Console</h4>

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose **Edit**.

    
<img src="../media/image40.png" />

3.  On the Edit Service Console App Navigation Items page, select **Add
    More Items**

    
<img src="../media/image41.png" />

4.  Select the **+** next to **AC Contact Channel Analytics**

5.  Select **Add 1 Nav Item**

6.  Change the order of your Navigation Items if desired, then choose
    **Save**

    
<img src="../media/image203.png" />

7.  Once the save completes, expand the **navigation menu** by selecting
    the down arrow and choose **AC Contact Channel Analytics**

    
<img src="../media/image204.png" />

8.  Change the list view from Recently Viewed to **All**

<img src="../media/image205.png" />

9.  Once the view refreshes, you should see your record(s)

<img src="../media/image206.png" />

10. Select the recording to open it

11. In the Notes & Attachments section, you will see the recording file
    attached.

    
<img src="../media/image207.png" />

12. NOTE: The recording playback, waveform, and transcript views are
    only active when you also choose to activate recording transcripts.

<h3 class="toc">Recording Transcripts</h3>

Enabling the Recording Transcripts activates a process to run your
contact recordings through Amazon Transcribe which uses a deep learning
process to convert text to speech accurately and quickly. In addition,
this process also creates a visual waveform of the recording, enables
the in-app recording playback, and provides a visual representation of
the conversation.

Once enabled during the AWS Serverless Application Repository for
Salesforce, recording transcription is activated on a call by call basis
by adding a specific contact attribute. This attribute is used during
Contact Trace Record processing to trigger the transcription.

<h4 class="toc">Enabling recording transcription</h4>

1.  Login to your Amazon Connect instance as an Administrator

2.  From the left navigation, choose **Routing** then select **Contact
    flows**

    
<img src="../media/image201.png" />

3.  Open the contact flow that you want to use to enable call
    transcription. This contact flow must have Amazon Connect's native
    recording turned on, since the transcription is dependent on it.

4.  In you contact flow, before you transfer to queue, add a new **Set
    contact attributes** block

5.  Configure the block to set two contact attributes as follows:

    1.  Attribute 1: enables the transcription process

        a.  **Destination key**: postcallTranscribeEnabled

        b.  **Value**: true

    2.  Attribute 2: specifies the transcription language

        -a. **Destination key**: postcallTranscribeLanguage

        b. **Value**: en-US (See [Amazon Transcribe API
            Reference](https://docs.aws.amazon.com/transcribe/latest/dg/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-LanguageCode)
            for valid language codes)

<img src="../media/image208.png" />

6.  **Save** the Set contact attributes block. Make sure it is
    appropriately connected to your contact flow, and **Publish** the
    flow.

7.  Wait approximately 2 minutes to give the contact flow time to
    publish.

8.  Place a call, connect to your agent, speak for a few moments from
    both the agent and the customer side to generate a good transcript,
    then end the call. Make sure the agent exits after call work

9.  The transcription will take at least as long as the call did. Wait
    an appropriate amount of time for the transcription to be available.

<h4 class="toc">Accessing transcriptions</h4>

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose AC Contact Channel Analytics. If you have not previously
    added AC Contact Channel Analytics to the navigation menu, complete
    the steps found in 
    [Adding Contact Channel Analytics to the Service Console](#adding-contact-channel-analytics-to-the-service-console).

    
<img src="../media/image209.png" />

3.  Change the list view from Recently Viewed to **All**

<img src="../media/image205.png" />

4.  Once the view refreshes, you should see your record(s)

<img src="../media/image210.png" />

5.  Select a record to view the details.

6.  Once the record opens, note the recording waveform, playback
    controls, and the visual version of the transcription

    
<img src="../media/image211.png" />

7.  Also note that the transcriptions for each side of the conversation
    are also included as attachments.

<h3 class="toc">AI Driven Contact Analysis</h3>

Enabling the AI Driven Contact Analysis function allows you to process
the transcribed text using [Amazon
Comprehend](https://aws.amazon.com/comprehend/). Amazon Comprehend is a
natural language processing service that uses machine learning to find
insights and relationships in text.

Once enabled during the AWS Serverless Application Repository for
Salesforce, contact analysis is activated on a call by call basis by
adding a specific contact attribute. This attribute is used during
Contact Trace Record processing to trigger the Amazon Comprehend task.

There are five functions available with the integration. Each function
is triggered by a code. You can use one code in your contact attribute,
or string multiple together as a comma separated list. The available
codes and their functions are:

-   **snt = Sentiment Analysis**

-   **kw = Keyphrase Extraction**

-   **dl = Language Detection**

-   **ne = Custom Entities**

-   **syn = Syntax Analysis**

<h4 class="toc">Enabling AI Driven Contact Analysis</h4>

1.  Login to your Amazon Connect instance as an Administrator

2.  From the left navigation, choose **Routing** then select **Contact
    flows**

    
<img src="../media/image201.png" />

3.  Open the contact flow that you want to use to enable AI Driven
    Contact Analytics. This contact flow must have Amazon Connect's
    native recording turned on, and transcription enabled as these are
    both prerequisites for the analytics function.

4.  In you contact flow, before you transfer to queue, add a new **Set
    contact attributes** block

5.  Configure the block to set a contact attribute as follows:

    a.  **Destination key:** postcallTranscribeComprehendAnalysis

    b.  **Value:** snt,dl,kw,syn

        - In this example, we are performing sentiment analysis,
        language detection, and keyphrase
        extraction
            

<img src="../media/image212.png" />

6.  **Save** the Set contact attributes block. Make sure it is
    appropriately connected to your contact flow, and **Publish** the
    flow.

7.  Wait approximately 2 minutes to give the contact flow time to
    publish.

8.  Place a call, connect to your agent, speak for a few moments from
    both the agent and the customer side to generate a good transcript,
    then end the call. Make sure the agent exits after call work

9.  The contact analysis runs after the transcription, which will take
    at least as long as the call did. Wait an appropriate amount of time
    for the analysis to be available.

<h4 class="toc">Accessing the AI Driven Contact Analysis</h4>

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose AC Contact Channel Analytics. If you have not previously
    added AC Contact Channel Analytics to the navigation menu, complete
    the steps found in
    [Adding Contact Channel Analytics to the Service Console](#adding-contact-channel-analytics-to-the-service-console).

    
<img src="../media/image209.png" />

3.  Change the list view from Recently Viewed to **All**

<img src="../media/image205.png" />

4.  Once the view refreshes, you should see your record(s)

<img src="../media/image210.png" />

5.  Select a record to view the details.

6.  Once the record opens, note the Keywords, Sentiment, and Dominant
    Language

    
<img src="../media/image213.png" />