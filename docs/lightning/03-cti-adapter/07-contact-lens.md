---
id: 07-contact-lens
title: Contact Lens
---

import useBaseUrl from "@docusaurus/useBaseUrl";

CTI Adapter now gives you access to your post-call Contact Lens data on your Salesforce instance. To configure this feature, you must have installed and configure the AWS Serverless application.

Three or four minutes after the call, a new Contact Channel Analytics record is created with the recording url with only the call recording. In another three minutes, this record is updated with Contact Lens recording, transcript and other metadata.

<img src={useBaseUrl('/img/lightning/cca-contact-lens-01.png')} />

The new record is also associated automatically with a Case and Contact through their Amazon Connect contact id. This means that you will be able to configure your case record page with a related list that lists all the calls related to a case.

Please note: to have access to the recording, the user must have an active session with Amazon Connect. This can be achieved by either logging in to the CCP softphone, or by logging in to Amazon Connect outside of Salesforce. After the session is established, a page refresh should allow the user to play the audio.

### Prerequisites

In order to set up Contact Lens you must first follow the steps detailed in the below sections:

1. [Postcall Contact Lens Import](/docs/lightning/salesforce-lambdas/06-postcall-contact-lens-import/)

2. [Set up Contact Channel Analytics](/docs/lightning/salesforce-lambdas/04-contact-channel-analytics)