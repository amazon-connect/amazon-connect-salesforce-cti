---
id: 01-high-velocity-sales
title: "Appendix E: Integration with Salesforce High Velocity Sales"
---

import useBaseUrl from "@docusaurus/useBaseUrl";

### What is High Velocity Sales?

Salesforce HVS (HVS) is a process for your inside sales team to follow a
repeatable pre-defined sales cadence for your business. It enables sales
managers and representatives to work on a prioritized list of prospects
and follow best sequence of sales outreach activities as defined by your
sales process.

### Enabling the Integration with High Velocity Sales

In order to make HVS works for your connect users, you must enable High
Velocity Sales in your Salesforce Org.

#### Enable High Velocity Sales

1.  From Setup, enter High Velocity Sales in the Quick Find box, then
    select High Velocity Sales.

2.  Toggle "Enable High Velocity Sales Features" from disable to enable
    state

<img src={useBaseUrl('/img/lightning/image249.png')} />

### Call Outcomes for Branching

In this step, you can define call disposition values which can be used
to branch sales cadence to define next best action for your sales
process.

#### Define Call Outcomes for Branching

1.  From Setup, enter High Velocity Sales in the Quick Find box, then
    select High Velocity Sales.

2.  Edit the Define Call Outcomes for Branching.

3.  Enter the call result values used by your org next to related call
    outcomes.

<img src={useBaseUrl('/img/lightning/image250.png')} />

### Assign HVS permission sets to Connect Users

For creating Sales Cadence, you need to have **High Velocity Sales
Cadence Creator** permission set otherwise assign the **High Velocity
Sales User** permission set to sales users.

#### Assign the permission set

1.  From Setup, enter permission Sets in Quick Find box, and then select
    Permission Sets.

2.  Select permission set, then click Manage Assignments to assign the
    permission set to users.

### Create Sales Cadence

In HVS application, you will need to create a Sales Cadence based on
Sales process

Create a Sales Cadence

1.  Choose **Sales Cadence** from navigation menu.

2.  Click the down arrow button then click **New**

3.  Enter name and description. Click **Save** button which opens
    **Sales Cadence** builder screen.

<img src={useBaseUrl('/img/lightning/image251.png')} />

4.  Click + sign in the builder to add a step. Choose a type of step you
    want to add for your sales cadence. Once you finish adding steps,
    click the **Activate** button. Once a sales cadence is active, you
    can add leads, contact, and personal accounts to Sales Cadence.

<img src={useBaseUrl('/img/lightning/image252.png')} />

### Assigning Prospects

You can assign a prospect to a Sales Cadence either on a prospect detail
page or through an automated flow. In this example, using prospect
detail page to assign a sales cadence.

<img src={useBaseUrl('/img/lightning/image253.png')} />

Click **Add to Sales Cadence** button to add this prospect to a Sales
Cadence.

### Create and Map Dispositions

In this step you need to add a disposition field on Activity object and
map disposition options to what is defined in HVS call outcomes. In this
example, I am going to create a picklist field and add it to default
task page layout to track disposition value for each call.

#### Create and map disposition fields

1.  Go to the Setup screen then click **Object Manager**

2.  Click **Activity Object**

3.  In Fields and Relationships section select **New**

4.  Select a picklist field and choose **Next**

5.  Enter require information and add HVS call outcomes as picklist
    options.

6.  Select all default options and add this filed on Task page layout.
    (If there is already a field called **Call Result** on Task Page
    layout then remove it from the page layout.)

7.  Choose **Save**

<img src={useBaseUrl('/img/lightning/image254.png')} />

### Setup CTI Flows for High Volume Sales

Next you will need to create a new set of CTI Flows for High Volume
Sales.

#### Configuring the CTI Flow

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose **AC CTI Adapters**.

<img src={useBaseUrl('/img/lightning/image114.png')} />

3.  Select **ACLightningAdapter**

4.  Scroll down to the **Scripts** section

5.  Select New to create a new CTI Flow

<img src={useBaseUrl('/img/lightning/image255.png')} />

6.  In the **CTI Flow Name** field, enter **Voice onHvsWorkStart**

7.  Make sure the checkbox for **Active** is selected

8.  For the **Source**, select **Salesforce UI**

9.  For the **Event**, select **onHvsWorkStart**

10. Provide a **Description**

11. Click **Save**.

12. Scroll down and click on the link **Voice onHvsWorkStart.**

13. <a target="_blank" href={useBaseUrl('/json/lightning/onHvsWorkStart.json')} download="onHvsWorkStart.json">Download this file</a>

14. Click **Upload** and find the file you just downloaded. You should now
    see this:\*\*

<img src={useBaseUrl('/img/lightning/image256.png')} />

15. Click **Save.** This creates a CTI Flow that is invoked when you start a HVS work and capture the workId for the third CTI Flow below.

16. Go back to the CTI Adapter page and select **New** in CTI Flows
    section to create another CTI Flow.

<img src={useBaseUrl('/img/lightning/image255.png')} />

17. In the **CTI Flow Name** field, enter **HVS Voice onConnecting**

18. Make sure the checkbox for **Active** is selected

19. For the **Source**, select **Amazon Connect Voice Contact**

20. For the **Event**, select **onConnecting**

21. Provide a **Description** and Save

22. Scroll down and click on the link **HVS Voice onConnecting.**

23. <a target="_blank" href={useBaseUrl('/json/lightning/onConnecting.json')} download="onConnecting.json">Download this file</a>

24. Click **Upload** and find the file you just downloaded. You should now
    see this:

<img src={useBaseUrl('/img/lightning/image257.png')} />

25. Click **Save.** This creates a CTI Flow creates task for the voice contact and save the taskId for the third CTI Flow below. If you already have a CTI Flow that creates task for voice contact, you do not need to add this one but just need to add a `Set Property` CTI Block to save the taskId

26. Go back to the CTI Adapter page and select **New** in CTI Flows
    section to create another CTI Flow.

<img src={useBaseUrl('/img/lightning/image255.png')} />

27. In the **CTI Flow Name** field, enter **HVS Voice onRoutable.**

28. Make sure the checkbox for **Active** is selected

29. For the **Source**, select **Amazon Connect Agent**

30. For the **Event**, select **onRoutable**

31. Provide a **Description** and Save

32. Scroll down and click on the link **HVS Voice onRoutable**

33. <a target="_blank" href={useBaseUrl('/json/lightning/onRoutable.json')} download="onRoutable.json">Download this file</a>

34. Click **Upload** and find the file you just downloaded. You should now
    see this:

<img src={useBaseUrl('/img/lightning/image284.png')} />

35. Click **Save.** This CTI Flow is executed before your agent is back to routable and retrieves the call result based on the task Id you set in the second CTI Flow, and use it to complete the HVS work

36. Once you've created the flows refresh your browser and the new
    scripts will take effect.

### Expected Behavior
1. Adding Lead to the Sales Cadence you created
<img src={useBaseUrl('/img/lightning/image285.png')} />
2. Make a call to the lead using the call button
<img src={useBaseUrl('/img/lightning/image286.png')} />
3. A outbound call is made and a task is created and popup
<img src={useBaseUrl('/img/lightning/image287.png')} />
4. While agent is in After Call Work status, Agent update the Call Result of the popup task and click Save.
<img src={useBaseUrl('/img/lightning/image288.png')} />
5. Agent click Close Contact to be available for the next call. The third CTI Flow will be invoked to retrieve the call result and the Sales Cadence Steps for this lead will be updated (highlighted in red below). The popup task should be linked to the lead as well (highlighted in orange below).
<img src={useBaseUrl('/img/lightning/image289.png')} />