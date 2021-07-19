---
id: 04-call-recording-playback
title: Call Recording Playback
---

import useBaseUrl from "@docusaurus/useBaseUrl";

The Adapter comes with a Visualforce component that provides users with
the ability to download a call recording created within Amazon Connect
from a Salesforce page. You can play the call recordings on either the 
Contact Channel Analytics page or the Task page.

### Cloudformation Template

To make sure that the AWS resources are set up, make sure that the
_PostcallRecordingImportEnabled_ parameter is set to true in your
Cloudformation stack:

<img src={useBaseUrl('/img/lightning/image266.png')} />

> **Note:** If you are expecting more than 1000 concurrent calls, you may have to increase the timeout for the `sfCTRTrigger` lambda.

### Enabling call recording streaming

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

9.  After a minute or so, the recording should import.

### Adding users to the AC_CallRecording permission set

This step is only necessary for non admin user accounts.

1. In the setup search box, search for "Permission sets". Select the "AC_CallRecording" permission set. Select "Manage Assignments".

<img src={useBaseUrl('/img/lightning/image278.png')} />

2. Select "Add Assignments". Add the users that should have access to the audio recordings and select "assign".

<img src={useBaseUrl('/img/lightning/image279.png')} />

### Enable call recording streaming on the Contact Channel Analytics page

1. Navigate to the Sales Console, and select the **+** button on the top bar.

<img src={useBaseUrl('/img/classic/ccacallrecording0.png')} />

2. Select **AC Contact Channel Analytics**.

<img src={useBaseUrl('/img/classic/ccacallrecording1.png')} />

3. Select into a record and then select **Edit Layout**.

<img src={useBaseUrl('/img/classic/ccacallrecording2.png')} />

4. Select **Visualforce Pages** and then drag **AC_RecordingViewer** into your desired location.

<img src={useBaseUrl('/img/classic/ccacallrecording3.png')} />

5. Select **Save**, and observe that the audio recording component in the Contact Channel Analytics page.

<img src={useBaseUrl('/img/classic/ccacallrecording4.png')} />

### Enable call recording streaming on the Task page

The below steps will add an audio recording component to tasks created from [this CTI flow](/docs/classic/appendices/appendix-c-cti-flow-examples/01-cti-flow-examples#create-a-task-call-activity-and-pop-that-task) (or any tasks with the CallObject field set to the contactId of the call).

1. Click into a task in your Salesforce org

2. Click "Edit Layout"

<img src={useBaseUrl('/img/classic/taskcallrecording1.png')} />

3. Drag the "ACSFCCP_CallRecordingTask" item to the desired are of the layout to have that information appear on the agent's screen.

<img src={useBaseUrl('/img/classic/taskcallrecording2.png')} />

<img src={useBaseUrl('/img/classic/taskcallrecording3.png')} />

4. To have access to the recording, the user must have an active session with Amazon Connect. This can be achieved by either logging in to the CCP softphone, or by logging in to Amazon Connect outside of Salesforce. After the session is established, a page refresh should make the player appear.