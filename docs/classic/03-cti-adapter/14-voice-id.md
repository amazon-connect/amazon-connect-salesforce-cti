---
id: 14-voice-id
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
<img src={useBaseUrl('/img/classic/voiceid1.png')} />
5. Enter the domain of Amazon Connect instance in the Url field (if it doesn't exist already).
6. Click save.

After following the above steps, `AC_VoiceIdChannel__c` records will start to be created on calls where Voice Id is active. These records can be viewed in the AC Voice Id Channel tab:

<img src={useBaseUrl('/img/classic/voiceidclassic0.png')} />
<img src={useBaseUrl('/img/classic/voiceidclassic1.png')} />