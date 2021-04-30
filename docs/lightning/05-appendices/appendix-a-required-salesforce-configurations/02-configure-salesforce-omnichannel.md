---
id: 02-configure-salesforce-omnichannel
title: Configure Salesforce Omnichannel for Testing
---

import useBaseUrl from "@docusaurus/useBaseUrl";

In order to sync your Connect User status with your Omni-Channel agent
status, you must configure Omni-Channel Presence Syncing. This will make
your Omni-Channel presence status match your Amazon Connect Agent Status
and vice versa.

### Enable Omnichannel

First, we must enable omni-channel. Once you enable Omni-Channel, you
will have access to the other components in Salesforce that will be
required for Omni-Channel setup.

#### Enable Omnichannel in Your Salesforce Org

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, enter omni and choose **Omni-Channel
    Settings** from the results

<img src={useBaseUrl('/img/lightning/image230.png')} />

3.  Select the checkbox for Enable Omni-Channel and choose Save

<img src={useBaseUrl('/img/lightning/image231.png')} />

4.  Omni-Channel is now enabled.

### Configure Presence Statuses

Once you have enabled Omni-Channel, you will need to configure presence
statuses to reflect the different presence states that you wish your
Omni-Channel agents to enter. These do not need to match agent statuses
in Amazon Connect exactly, but it does make it easier to track what you
are doing.

#### Add a Presence Status

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, enter presence and choose **Presence
    Statuses** from the results

<img src={useBaseUrl('/img/lightning/image147.png')} />

3.  In the Presence Statuses page, choose New

4.  Provide a status name, for example Lunch

5.  Set the Status options appropriately, for example, Busy

6.  For Online statuses, you will need to provide a channel. Please
    reference the [Omni-Channel
    documentation](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5)
    for details

7.  Choose Save

<img src={useBaseUrl('/img/lightning/image148.png')} />

8.  Repeat as necessary for all desired statuses

### Configure Profiles to Use the New Statuses

Before agents can use the statuses that have been configured, you will
need to make sure that they have been provided rights to them. This is
done by modifying the profiles assigned to your agents.

#### Modify Profiles to Use New Statuses

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, enter profiles and choose **Profiles**
    from the results

<img src={useBaseUrl('/img/lightning/image149.png')} />

3.  Select the profile assigned to your users

4.  Hover over the Enabled Service Presence Status link and choose Edit

<img src={useBaseUrl('/img/lightning/image150.png')} />

5.  Select the available status from the left, then choose the Add
    button to add it the Enabled Service Presence Statuses field

<img src={useBaseUrl('/img/lightning/image151.png')} />

6.  Select Save

7.  Repeat as necessary for other statuses or profiles.

### Add Omni-Channel to the Utility Bar

To provide agents access to the Omni-Channel tool, you will need to add
it to the Service Console.

#### Add the Omni-Channel Utility Item

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** box, type **App Manager**, then choose **App
    Manager** from the result list.

<img src={useBaseUrl('/img/lightning/image17.png')} />

3.  Expand the drop-down menu associated to Service Console and select
    **Edit**.

<img src={useBaseUrl('/img/lightning/image18.png')} />

4.  Once the **Lightning App Builder** opens, select **Utility Items**
    from the left Navigation

<img src={useBaseUrl('/img/lightning/image19.png')} />

5.  Choose Add Utility Item, then select Omni-Channel

<img src={useBaseUrl('/img/lightning/image232.png')} />

6.  Adjust the order of the utility items as desired and select Save.

7.  Return to the Service Console and refresh your browser.

8.  You should now see the Omni-Channel utility item.

<img src={useBaseUrl('/img/lightning/image233.png')} />
