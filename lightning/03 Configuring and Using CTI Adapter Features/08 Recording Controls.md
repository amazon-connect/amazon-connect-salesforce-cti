<h2 class="toc">Recording Controls</h2>

Recording Controls panel in the CCP Overlay allows your agents to control the recording behavior of the call.

<img src="../media/ccp-overlay-5-recording.png" />

This can be useful when you don't want to record every call, and give the agent the ability to pause and resume a recording.

Note that once a recording is stopped, it cannot be restarted. After starting a recording, you should use pause/resume button to control it.

## Setup

First, create an IAM user and give it the managed policy `AmazonConnect_FullAccess`.

<img src="../media/ccp-overlay-7-iam.png" />

Copy the access key and secret of this user (from the "Security credentials" tab.) Next, go to your Salesforce instance Setup section. Search for Named Credentials in the left sidebar, and create a new credential named `AmazonConnectAPI`. (The name and the label should be identical.)

<img src="../media/ccp-overlay-6-named-credentials.png" />

Fill in `https://connect.us-east-1.amazonaws.com` as the url. For Identity Type, select "Named Principal" and for "Authentication Protocol" select "AWS Signature Version 4." Then fill in the "AWS Access Key Id" and "AWS Access Secret" fields with your IAM user credentials. And for AWS Region, use the region of your Connect instance. And for the AWS Service, fill in `connect`.
