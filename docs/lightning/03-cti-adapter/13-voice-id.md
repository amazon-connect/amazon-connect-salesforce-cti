---
id: 13-voice-id
title: Voice Id
---
import useBaseUrl from "@docusaurus/useBaseUrl";

The Amazon Connect CTI Adapter allows for integration with Amazon Connect Voice Id.

The integration between Voice Id and the CTI Adapter first requires that Voice Id is set up in the Amazon Connect instance that the CTI Adapter is integrated with. See [here](https://docs.aws.amazon.com/connect/latest/adminguide/voice-id.html) for full instructions.

Before proceeding with the below, please ensure that Voice Id works as expected in a standalone CCP.

**Enabling the Voice Id Trigger:**

1. In Setup, search for Custom Settings.
2. Click on Custom Settings, and click Manage on the row with the `Toolkit for Amazon Connect` setting
3. Click into your setting (or create one if it doesn't exist)
<img src={useBaseUrl('/img/shared/voiceid0.png')} />
4. Search and assign the toolkit for either your profile or user, and then uncheck Disable the Voice Id Channel Trigger
<img src={useBaseUrl('/img/shared/voiceid1.png')} />
5. Enter the domain of Amazon Connect instance in the Url field (if it doesn't exist already).
6. Click save.

After following the above steps, `AC_VoiceIdChannel__c` records will start to be created on calls where Voice Id is active. These records can be viewed in the AC Voice Id Channel tab:

<img src={useBaseUrl('/img/shared/voiceid2.png')} />

**Adding Voice Id Components:**
Add the Voice Id component to the contacts page:
1. Navigate to Contacts list, and create a contact with the phone number you’ll use for testing.
2. Click into the created Contact page, on the right-top corner, click the Setup icon and then click Edit Page.
<img src={useBaseUrl('/img/shared/voiceid3.png')} />
3. Find `ac_VoiceIdChannelListView` in the custom components list, drag and drop it into the page.
<img src={useBaseUrl('/img/shared/voiceid4.png')} />
4. Save and return to the record page. Click activate and assign as Org Default if prompted.
<img src={useBaseUrl('/img/shared/voiceid5.png')} />

Add the Voice Id component to the Task/Cases page:
1. Open the task record page, and Edit Page (same steps as Contacts).
2. Find `ac_VoiceIdChannelDetailView` in the custom components list, drag and drop it into the page.
3. Save and return to the record page. Click activate and assign as App Default if prompted.
<img src={useBaseUrl('/img/shared/voiceid6.png')} />
