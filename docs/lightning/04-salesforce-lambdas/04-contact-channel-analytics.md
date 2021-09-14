---
id: 04-contact-channel-analytics
title: Contact Channel Analytics
---

import useBaseUrl from "@docusaurus/useBaseUrl";

In addition to the CTI adapter's native ability to provide direct
playback links to call recordings in Amazon Connect, the AWS Serverless
Application Repository for Salesforce includes several functions that
allow you to process recordings, perform quality analytics functions,
and bring data into Salesforce.

This processing is done post-call, using the Contact Trace Record (CTR)
as the initiation path. The following quality analytics options are
available:

- **Call Recording Streaming:** streams the actual audio file into
  Salesforce. This option is not mandatory for the others to function.

- **Recording Transcript:** you can choose to have your call
  recordings transcribed to text and presented in a visual format that
  resembles a chat conversation. This allows for quick scanning of a
  call to identify key segments of conversation. This option is
  required if you wish to include the next level of analysis

- **AI-Driven Contact Analysis:** once the recordings have been
  transcribed to text, you can also indicate that you wish to do
  further analysis of the conversation using [Amazon
  Comprehend](https://aws.amazon.com/comprehend/). Available options
  are:

  - **Sentiment Analysis:** returns the overall sentiment of the
    conversation (Positive, Negative, Neutral, or Mixed).

  - **Keyphrase Extraction:** returns the key phrases or talking
    points and a confidence score to support that this is a key
    phrase.

  - **Language Detection:** returns the dominant language with a
    confidence score to support that a language is dominant

  - **Custom Entities:** allows you to customize the AI to identify
    terms that are specific to your domain

  - **Syntax Analysis:** analyze the transcript using tokenization
    and Parts of Speech (PoS), and identify word boundaries and
    labels like nouns and adjectives within the text.

If you would like to set up streaming with Contact Lens, please finish the
[Call Recording Streaming](#call-recording-streaming) section below and then
follow the [Contact Lens Streaming](docs/lightning/cti-adapter/07-contact-lens) 
instructions and possibly the [Post Call Contact Lens Import](docs/lightning/salesforce-lambdas/06-postcall-contact-lens-import) 
instructions.

### Call Recording Streaming

You can stream Call Recordings in your Salesforce Org. This
allows for easy access to the recordings from within Salesforce and can
be used in conjunction with the other contact channel analytics features
to provide a complete view of the customer interaction.

The import of call recordings is not required to activate the other
contact channel analytics features.

Once enabled during the AWS Serverless Application Repository for
Salesforce, recording import is activated on a call by call basis by
adding a specific contact attribute. This attribute is used during
Contact Trace Record processing to trigger the call import.

NOTE: After Call Work time is a part of the Contact Trace Record. As
such, CTRs are not generated until the agent leaves the after call work
state. If you are not seeing a recording import, please make sure the
agent has completed the call and left the after call work state.

##### Cloudformation Template

To make sure that the AWS resources are set up, make sure that the
_PostcallRecordingImportEnabled_ parameter is set to true in your
Cloudformation stack:

<img src={useBaseUrl('/img/lightning/image266.png')} />

> **Note:** If you are expecting more than 1000 concurrent calls, you may have to increase the timeout for the `sfCTRTrigger` lambda.

#### Enabling call recording streaming

1.  Login to your Amazon Connect instance as an Administrator

2.  From the left navigation, choose **Routing** then select **Contact
    flows**

<img src={useBaseUrl('/img/lightning/image201.png')} />

3.  Open the contact flow that you want to use to enable call recording
    import. This contact flow must have Amazon Connect's native
    recording turned on.

4.  In you contact flow, before you transfer to queue, add a new **Set
    contact attributes** block

5.  Configure the block to set a contact attribute as follows:

    a. **Destination key:** postcallRecordingImportEnabled

    b. **Value:** true

<img src={useBaseUrl('/img/lightning/image202.png')} />

6.  **Save** the Set contact attributes block. Make sure it is
    appropriately connected to your contact flow, and **Publish** the
    flow.

7.  Wait approximately 2 minutes to give the contact flow time to
    publish.

8.  Place a call, connect to your agent, speak for a few moments to test
    the audio, then end the call. Make sure the agent exits after call
    work

9.  After a minute or so, a new Contact Channel Analytics record should be
    imported, and when opening it, you should be able to stream the audio.
    (See section [Adding Contact Channel Analytics to the Service Console](#adding-contact-channel-analytics-to-the-service-console). below).

#### Adding users to the AC_CallRecording permission set

This step is only necessary for non admin user accounts.

1. In the setup search box, search for "Permission sets". Select the "AC_CallRecording" permission set. Select "Manage Assignments".

<img src={useBaseUrl('/img/lightning/image278.png')} />

2. Select "Add Assignments". Add the users that should have access to the audio recordings and select "assign".

<img src={useBaseUrl('/img/lightning/image279.png')} />


#### Adding Contact Channel Analytics to the Service Console

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose **Edit**.

<img src={useBaseUrl('/img/lightning/image40.png')} />

3.  On the Edit Service Console App Navigation Items page, select **Add
    More Items**

<img src={useBaseUrl('/img/lightning/image41.png')} />

4.  Select the **+** next to **AC Contact Channel Analytics**

5.  Select **Add 1 Nav Item**

6.  Change the order of your Navigation Items if desired, then choose
    **Save**

<img src={useBaseUrl('/img/lightning/image203.png')} />

7.  Once the save completes, expand the **navigation menu** by selecting
    the down arrow and choose **AC Contact Channel Analytics**

<img src={useBaseUrl('/img/lightning/image204.png')} />

8.  Change the list view from Recently Viewed to **All**

<img src={useBaseUrl('/img/lightning/image205.png')} />

9.  Once the view refreshes, you should see your record(s)

<img src={useBaseUrl('/img/lightning/image206.png')} />

10. Select the recording to open it

11. In the top right, you will see a button to stream the recording.

<img src={useBaseUrl('/img/lightning/image207.png')} />

12. NOTE: The recording playback, waveform, and transcript views are
    only active when you also choose to activate recording transcripts.

### Recording Transcripts

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

Make sure the Salesforce user accessing recording transcription are added to the AC_CallRecording permission set, as described in the previous section.

#### Enabling recording transcription

1.  Login to your Amazon Connect instance as an Administrator

2.  From the left navigation, choose **Routing** then select **Contact
    flows**

<img src={useBaseUrl('/img/lightning/image201.png')} />

3.  Open the contact flow that you want to use to enable call
    transcription. This contact flow must have Amazon Connect's native
    recording turned on, since the transcription is dependent on it.

4.  In you contact flow, before you transfer to queue, add a new **Set
    contact attributes** block

5.  Configure the block to set two contact attributes as follows:

    1.  Attribute 1: enables the transcription process

        a. **Destination key**: postcallTranscribeEnabled

        b. **Value**: true

    2.  Attribute 2: specifies the transcription language

        -a. **Destination key**: postcallTranscribeLanguage

        b. **Value**: en-US (See [Amazon Transcribe API
        Reference](https://docs.aws.amazon.com/transcribe/latest/dg/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-LanguageCode)
        for valid language codes)

<img src={useBaseUrl('/img/lightning/image208.png')} />

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

#### Accessing transcriptions

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose AC Contact Channel Analytics. If you have not previously
    added AC Contact Channel Analytics to the navigation menu, complete
    the steps found in
    [Adding Contact Channel Analytics to the Service Console](#adding-contact-channel-analytics-to-the-service-console).

<img src={useBaseUrl('/img/lightning/image209.png')} />

3.  Change the list view from Recently Viewed to **All**

<img src={useBaseUrl('/img/lightning/image205.png')} />

4.  Once the view refreshes, you should see your record(s)

<img src={useBaseUrl('/img/lightning/image210.png')} />

5.  Select a record to view the details.

6.  Once the record opens, note the recording, and the visual version of the transcription

<img src={useBaseUrl('/img/lightning/image211.png')} />

7.  Also note that the transcriptions for each side of the conversation
    are also included as attachments.

### AI Driven Contact Analysis

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

- **snt = Sentiment Analysis**

- **kw = Keyphrase Extraction**

- **dl = Language Detection**

- **ne = Custom Entities**

- **syn = Syntax Analysis**

#### Enabling AI Driven Contact Analysis

1.  Login to your Amazon Connect instance as an Administrator

2.  From the left navigation, choose **Routing** then select **Contact
    flows**

<img src={useBaseUrl('/img/lightning/image201.png')} />

3.  Open the contact flow that you want to use to enable AI Driven
    Contact Analytics. This contact flow must have Amazon Connect's
    native recording turned on, and transcription enabled as these are
    both prerequisites for the analytics function.

4.  In you contact flow, before you transfer to queue, add a new **Set
    contact attributes** block

5.  Configure the block to set a contact attribute as follows:

    a. **Destination key:** postcallTranscribeComprehendAnalysis

    b. **Value:** snt,dl,kw,syn

        - In this example, we are performing sentiment analysis,
        language detection, and keyphrase
        extraction

<img src={useBaseUrl('/img/lightning/image212.png')} />

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

#### Accessing the AI Driven Contact Analysis

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose AC Contact Channel Analytics. If you have not previously
    added AC Contact Channel Analytics to the navigation menu, complete
    the steps found in
    [Adding Contact Channel Analytics to the Service Console](#adding-contact-channel-analytics-to-the-service-console).

<img src={useBaseUrl('/img/lightning/image209.png')} />

3.  Change the list view from Recently Viewed to **All**

<img src={useBaseUrl('/img/lightning/image205.png')} />

4.  Once the view refreshes, you should see your record(s)

<img src={useBaseUrl('/img/lightning/image210.png')} />

5.  Select a record to view the details.

6.  Once the record opens, note the Keywords, Sentiment, and Dominant
    Language

<img src={useBaseUrl('/img/lightning/image213.png')} />
