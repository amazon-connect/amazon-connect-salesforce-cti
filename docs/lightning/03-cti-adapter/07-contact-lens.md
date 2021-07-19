---
id: 07-contact-lens
title: Contact Lens
---

import useBaseUrl from "@docusaurus/useBaseUrl";

CTI Adapter now gives you access to your post-call Contact Lens data on your Salesforce instance. To configure this feature, you must have installed and configure the AWS Serverless application.

Three or four minutes after the call, a new Contact Channel Analytics record is created with the recording url with only the call recording. In another three minutes, this record is updated with Contact Lens recording, transcript and other metadata.

<img src={useBaseUrl('/img/lightning/cca-contact-lens-01.png')} />

The new record is also associated automatically with a Case and Contact through their Amazon Connect contact id. This means that you will be able to configure your case record page with a related list that lists all the calls related to a case.

### Prerequisites

In order to set up Contact Lens you must first follow the steps detailed in the below sections:

1. [Set up ExecuteAwsService Named Credential](/docs/lightning/installation/01-installation#setting-up-the-executeawsservice-named-credential)

2. [Set up Contact Channel Analytics](/docs/lightning/salesforce-lambdas/04-contact-channel-analytics)

### Configuring Related Transcripts List for Case Object

1. Go to the "Setup" section.

2. Search for "Object Manager" in Quick Find.

3. Go into "AC Contact Channel Analytics" object.

4. Click on "Fields & Relationships"

5. Select the "Case" field.

6. Click on "Set Field-Level Security" button.

7. In the "Field-Level Security for Profile" panel, select "Visible" for all the profiles where this field should appear.

8. Click "Save"

9. Click "View Field Accessibility" button.

10. Select "Case" field from "Field accessibility for Field" dropdown.

11. Select the profile for which you want to enable this field.

12. Mark "Field-Level Security" of the field as "Visible" and save.

13. Go to a Case record page.

14. Click on "Edit Page" under the gear button on upper right corner of the page.

15. Select "Related List - Single" from left sidebar, and drop it into "Related" section.

16. Click on the item you just droppped to focus on it.

17. In the right sidebar, select "Case Layout (previewed)"

18. Click on "Related Lists" and find "Transcripts" field in the panel.

<img src={useBaseUrl('/img/lightning/cca-related-list-05.png')} />

19. Drag "Transcripts" into the "Related Lists" section on the body of the page.

20. Click "Save" and return to the page editor.

21. Focus on the item you droppped in step 15 again.

22. In the right sidebar, under the "Related List" dropdown, find and select "Transcripts" field.

23. Click "Save" to save the page layout.

24. Click "Activation..."

25. Go into "App Default." Click on "Assign as App Default."

<img src={useBaseUrl('/img/lightning/cca-related-list-10.png')} />

26. Select the apps you'd like the related list to appear. Click "Next" twice, and then finally click "Save."

Now your related transcripts should appear on the Case record page.

Whenever you update the Amazon Connect contact id of this case, the related list will be updated to associate the transcripts associated with your contact.

Follow the same steps above for Contact.

### Setting up the Audio Recording Streaming

In order to stream Audio in Contact Lens, you must first set up the Audio Recording Streaming feature. It is recommended to use the Guided Setup feature to set up audio recording streaming. 

<img src={useBaseUrl('/img/shared/contactlensaudio0.png')} />

If you do not wish to use the Guided Setup feature, then see below steps for manual setup steps:

#### AWS Side Setup

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

<img src={useBaseUrl('/img/lightning/image270.png')} />

Please note that your secret may also be formatted stored as a "Secret key/value" secret rather than a "Plaintext" secret; both secret types are valid.

6. Navigate to your Salesforce instance. Navigate to setup, then search for "Visualforce pages."

<img src={useBaseUrl('/img/lightning/image283.png')} />

7. Select the **AC_RecordingViewer** visualforce page, and select "preview." Copy the url of the opened page up until `.com`. Make sure not to include any characters after `.com`.

8. Navigate back to aws, to the s3 bucket where your audio recording files are stored. This s3 bucket should be the same bucket as the **ConnectRecordingS3BucketName** parameter to the serverless application.

9. In the bucket details, select the **Permissions** tab and then the **CORS configuration** tab and paste the following. Replace the AllowedOrigin with the url copied in step 9. Additionally, add in the `...lightning.force.com` url to your instance to the configuration.

```json
[
  {
    "AllowedHeaders": ["Access-Control-Allow-Origin"],
    "AllowedMethods": ["GET"],
    "AllowedOrigins": ["{url copied in step 9}", "https://{instanceName}.lightning.force.com/"],
    "ExposeHeaders": []
  }
]
```

<img src={useBaseUrl('/img/lightning/image271.png')} />

10. Select Save

11. Navigate to the "Lambda" aws service. Search for term "sfgenerate" and copy down the full name of the sfGenerateAudioRecordingStreaming lambda. This will be used in the next section.

<img src={useBaseUrl('/img/lightning/image274.png')} />

12. Navigate back to the "Lambda" aws service main page and navigate to the **us-east-1 region**. Select **create function**.

<img src={useBaseUrl('/img/lightning/audiostreaming0.png')} />

13. Enter a function name, like **sfSig4RequestToS3**.

14. Select **change default execution role**, and **use an existing role**. Search for and select _sfSig4RequestToS3Role_.

<img src={useBaseUrl('/img/lightning/audiostreaming1.png')} />

15. Select **create function**. On the next screen, copy and paste the contents from [this file](https://github.com/amazon-connect/amazon-connect-salesforce-cti/blob/main/docs/lightning/04-salesforce-lambdas/sfSig4RequestToS3.js) into the function body, and then select **Deploy**.

16. Select the actions dropdown, and then select **Deploy to Lambda@Edge**.

17. Select the Cloudfront Distribution that was created by the Salesfore Lambdas serverless application, then check off the "I acknowledge..." check box, then select deploy.

<img src={useBaseUrl('/img/lightning/audiostreaming2.png')} />

#### Common Audio Streaming Setup Issues

1. Verify that the Secrets Manager secret contains both the `CloudFrontPrivateKey` and `CloudFrontAccessKeyID` items.

2. Verify that your Cloudfront distribution's behavior is set to use `Trusted Key Groups`, and that the correct Key Group is selected.

<img src={useBaseUrl('/img/shared/audiostreamingkeygroups.png')} />

3. Verify that your Cloudfront distribution's behavior contains the sfSig4RequestToS3 edge lambda

<img src={useBaseUrl('/img/shared/audiostreamingedgelambda.png')} />

4. Verify that your S3 bucket CORS configuration is correct

<img src={useBaseUrl('/img/shared/audiostreamingcorsconfiguration.png')} />

5. Verify that your named credentials are correctly set up

6. Verify that your user is added to the AC_CallRecording permission set

