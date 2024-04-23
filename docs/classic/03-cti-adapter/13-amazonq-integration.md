---
id: 13-amazonq-integration
title: Amazon Q Integration
---
import useBaseUrl from "@docusaurus/useBaseUrl";

The Amazon Connect CTI Adapter allows for integration with Amazon Connect Amazon Q. We still support reference to Amazon Q's old name "Wisdom" for now, but we will not support it in CTI Adapter version 5.23 and onwards.

<img src={useBaseUrl('/img/shared/amazonq0.png')} />

The integration between Amazon Q and the CTI Adapter first requires that Amazon Q is set up in the Amazon Connect instance that the CTI Adapter is integrated with. See [here](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html) for full instructions.

Before proceeding with the below, please ensure that Amazon Q articles are properly showing up in your Amazon Q instance for the specific user you are testing.

**Amazon Q Permission Sets:**

Salesforce users accessing Amazon Q in Salesforce must belong to either the *AC_AmazonQ* permission set, or the *AC_Administrator* permission set.

1. In *setup*, search for and select *permission sets*.
2. Select either the *AC_AmazonQ* or the *AC_Administrator* permission set
3. Select *Manage Assignments*, and add all relevant users to the permission set of choice.

**Setting up Amazon Connect Amazon Q in the CCP Overlay:**

1. Navigate to your CTI Adapter
2. Scroll down to the Features section and create a new feature
<img src={useBaseUrl('/img/classic/amazonqclassic0.png')} />
3. Create a new feature with the following values:
    - AC Feature Name - FEATURE_AMAZONQ_PANEL
    - Value - Enabled: true
<img src={useBaseUrl('/img/classic/amazonqclassic1.png')} />

4. In addition, you can also include the `IgnorePermissionSet` setting to the value of the feature on a new line. This setting will show Amazon Q if it is enabled regardless of whether the
logged in user belongs to the *AC_AmazonQ* or the *AC_Administrator* permission set. This setting is required if the logged in user has the `View Setup and Configuration` profile setting set to false.
    - IgnorePermissionSet: true

<img src={useBaseUrl('/img/shared/amazonq10.png')} />

5. Open the ccp, observe that there is a tab with Amazon Q in the CCP Overlay.

<img src={useBaseUrl('/img/shared/amazonq0.png')} />

Amazon Q can be popped out into a new window by pressing pop out button.

<img src={useBaseUrl('/img/shared/amazonq3.png')} />

**Accessing the Tabbed Version of Amazon Q:**

Amazon Q is also accessible in Tabbed form.

<img src={useBaseUrl('/img/classic/amazonqclassic2.jpg')} />
<img src={useBaseUrl('/img/classic/amazonqclassic3.png')} />

**Accessing the Component Version of Amazon Q:**

The final method of accessing Amazon Q in Salesforce is through the Amazon Q component.

1. Navigate to Object Manager in Setup in Lightning
2. Select either Task or Case (note: the Amazon Q component is embeddable in other pages as well, but you may need to write custom classes in order to do so.)
3. Select *Page Layouts*
4. Select the appropriate layout
5. Select *Visualforce Pages* in the top component
<img src={useBaseUrl('/img/shared/amazonq8.png')} />
6. Click and drag the appropriate Amazon Q visualforce page into the desired location
7. Save the layout
8. Navigate to a task page
<img src={useBaseUrl('/img/classic/amazonqclassic4.jpg')} />
