---
id: 09-recording-controls
title: Recording Controls
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Recording Controls panel in the CCP Overlay allows your agents to control the recording behavior of the call.

<img src={useBaseUrl('/img/shared/ccp-overlay-5-recording.png')} />

This can be useful when you don't want to record every call, and give the agent the ability to pause and resume a recording.

Note that once a recording is stopped, it cannot be restarted. After starting a recording, you should use pause/resume button to control it.

This panel is disabled by default. You can enable it by adding `FEATURE_RECORDING_PANEL` feature flag to your CTI Adapter, with the setting `Enabled:true`.

## Setup

First, create an IAM user and give it the managed policy `AmazonConnect_FullAccess`.

<img src={useBaseUrl('/img/shared/ccp-overlay-7-iam.png')} />

Copy the access key and secret of this user (from the "Security credentials" tab.) Next, go to your Salesforce instance Setup section. Search for Named Credentials in the left sidebar, and create a new credential named `AmazonConnectAPI`. (The name and the label should be identical.)

<img src={useBaseUrl('/img/shared/ccp-overlay-6-named-credentials.png')} />

Fill in `https://connect.{region}.amazonaws.com` as the url. The region in the url needs to match the region for your connect instance / CTI Adapter, so if the CTI Adapter region is `us-west-2`, your url should be: `https://connect.us-west-2.amazonaws.com`

For Identity Type, select "Named Principal" and for "Authentication Protocol" select "AWS Signature Version 4." Then fill in the "AWS Access Key Id" and "AWS Access Secret" fields with your IAM user credentials. And for AWS Region, use the region of your Connect instance. And for the AWS Service, fill in `connect`.

## Using Recording Controls with Contact Flows
This feature can sometimes cause issues if an existing contact flow manages call recording, which is common with Contact Lens. If you’re using this feature with Contact Channel Analytics or Contact Trace Records enabled, make sure your amazon connect contact flow does not enable call recording by default. If you still wish to generate Contact Channel Analytics / Contact Trace Records, then you should disable call recording in the contact flow block and leave the other settings the same. For reference, here is a valid configuration with Contact Lens and CTR enabled:

<img src={useBaseUrl('/img/lightning/recordingcontrolscontactflows1.png')} />

<img src={useBaseUrl('/img/lightning/recordingcontrolscontactflows2.png')} />


## Recording Named Credential

Starting with version v5.23.3, you now have an area in the CTI Adapter to specify the recording Named Credential you wish to use with the adapter. Follow the instructions in the "Setup" section above to create the Named Credentials. Once you have the names for the Named Credentials, add them directly to the Adapters you wish to use.

### CTI Adapter Named Credential Location:
<img src={useBaseUrl('/img/lightning/ctiadapterGR-1.png')} />

Note: In v5.22+, if you have "Recording Controls" enabled and you do not explicitly set a Named Credential on the CTI Adapter, it will assume "AmazonConnectAPI" by default.

## Synchronizing Recording State with Contact Attributes

The Connect API does not provide a way for us to check that the recording has already been started when a call is answered. This may result in the UI panel falling out of sync with the actual state of the contact. If you have configured your contacts to be recorded automatically, using the Contact Flow, you must take care to add a contact attribute to indicate that:

> Attribute Name: RECORDING_STARTED
> Attribute Value: true

If you have configured this attribute, then the recording controls will be in sync with the recording state.
