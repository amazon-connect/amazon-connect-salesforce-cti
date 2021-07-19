---
id: 03-managed-package-manual-setup
title: Setting Up The CTI Adapter Managed Package Manually
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Below are manual setup instructions for the Salesforce CTI Adapter Managed Package. After following the below steps, be sure to follow the instructions for setting up the Salesforce Lambdas [here](/docs/lightning/installation/04-salesforce-lambdas-manual-setup).

### Set Access Permissions

All users must be assigned the required permission set to access
Salesforce metadata. The Amazon Connect CTI Adapter includes two
Permission Sets, one for agents and one for managers, that grant users
the appropriate access for their role. More information on assigning
user permissions can be found in the [Salesforce help
documentation](https://help.salesforce.com/articleView?id=perm_sets_mass_assign.htm&type=5).

1.  Log in into your Salesforce org and go to **Setup**

2.  In **Quick Find**, enter **Permission** and select **Permission
    Sets** from the results

3.  Choose **AC_Administrator**, **AC_Agent** or **AC_Manager** as
    appropriate for the user(s)

<img src={useBaseUrl('/img/lightning/image12.png')} />

4.  Choose **Manage Assignments**.

5.  Choose **Add Assignments**.

6.  Select the users to assign the permissions, then choose **Assign**.

<img src={useBaseUrl('/img/lightning/image13.png')} />

7.  Repeat these steps as needed for all users

#### AC_Administrator

<img src={useBaseUrl('/img/lightning/image14.png')} />

#### AC_Manager

<img src={useBaseUrl('/img/lightning/image15.png')} />

#### AC_Agent

<img src={useBaseUrl('/img/lightning/image16.png')} />

### Configure the Lightning Experience

In this guide, we will configure the CTI Adapter for Service Console
(Lightning Experience). You may use the same procedure described in this
section for other applications.

#### Configure Service Console

First, you need to add the CTI softphone to your Service Console.

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

5.  Choose **Add Utility Item**, then select **Open CTI Softphone**.

<img src={useBaseUrl('/img/lightning/image20.png')} />

6.  Change the Label, if desired, then choose **Save**.

#### Allowlist Your Salesforce Org with Amazon Connect

In order to embed the Amazon Connect Contact Control Panel (CCP) into
your Service Console, you need to allowlist two (2) domains for your org
with Amazon Connect. This allows for cross domain access to the
underlying resources required for the CCP to function.

1.  Log in into your Salesforce org and go to **Setup**

2.  Copy the entire URL of this page and past it to a text document.

<img src={useBaseUrl('/img/lightning/image21.png')} />

3.  In the **Quick Find** field, type **visual**, then select **Visual
    Force Pages** from the results

<img src={useBaseUrl('/img/lightning/image22.png')} />

4.  Choose the **AC_LightningAdapter** Visualforce page

<img src={useBaseUrl('/img/lightning/image23.png')} />

5.  On the Visualforce detail page, select the **Preview** button. This
    will open a new browser tab showing the page content, which should
    only be a button labelled Sign in to CCP. Copy the entire URL of
    this page and past it to a text document.

<img src={useBaseUrl('/img/lightning/image24.png')} />

6.  In a new browser tab, login to the [**AWS
    console**](https://console.aws.amazon.com/)

7.  Navigate to the [Amazon Connect
    Console](https://console.aws.amazon.com/connect/home)

8.  Validate that you are in the correct **AWS region** for your
    instance, then select your instance alias from the list of
    instances

<img src={useBaseUrl('/img/lightning/image25.png')} />

9.  Choose **Application Integration** from the left navigation

10. Select + Add origin

11. In the Enter origin URL field, enter the URL of the page that you
    copied in step 2. Only enter the url through the .com, for example:
    <pre>https://XXXXXXXX-dev-ed-.lightning.force.com</pre>

12. Select Add. You should see your org domain listed in the Approved
    origins section.

<img src={useBaseUrl('/img/lightning/image26.png')} />

13. Select + Add origin

14. In the Enter origin URL field, enter the URL of the visualforce page
    that you copied in step 5. Only enter the url through the .com, for
    example:
    <pre>https://XXXXXXXX-dev-ed--amazonconnect.visualforce.com</pre>

15. Select Add. You should see your org domain listed in the Approved
    origins section

<img src={useBaseUrl('/img/lightning/image27.png')} />

#### Modify the Call Center

Now that you have allowlisted the org in the Amazon Connect Console, you
will need to modify the Call Center that was configured in Salesforce
when the AppExchange package was installed. Once you complete the
configuration, you add users to the Call Center to provide access to it.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, enter **Call Center**, then select
    **Call Centers** from the result list

<img src={useBaseUrl('/img/lightning/image28.png')} />

3.  If you see the **Say Hello to Salesforce Call Center** page, select
    **Continue**

4.  Select **AC Lightning Adapter**

<img src={useBaseUrl('/img/lightning/image29.png')} />

5.  On the **AC Lightning Adapter** detail page, select **Edit**

6. Replace the **CTI Adapter URL** with the AC Lightning Adapter visualforce page url you copied in the previous section.

7.  Next, change the values for **Softphone Height** **to 570** and the
    **Softphone Width to 330**, and choose **Save.**

8.  Once you return to the AC Lightning Adapter detail page, choose
    **Manage Call Center Users** in the Call Center Users section

9.  On the **AC Lightning Adapter: Manage Users** page, select **Add
    More Users**.

10.  Set filters (if desired) and then choose **Find**.

11. Select the checkbox next to the user to add, then choose **Add to
    Call Center**.

<img src={useBaseUrl('/img/lightning/image30.png')} />

12. Repeat the steps to add more users.

#### Configure the Toolkit settings

1.  Navigate to **Setup** then in type **Custom Settings** in Quick
    Find

<img src={useBaseUrl('/img/lightning/image31.png')} />

2.  Next to the Toolkit for Amazon Connect custom setting, choose
    **Manage**

<img src={useBaseUrl('/img/lightning/image32.png')} />

3.  Select **New**

<img src={useBaseUrl('/img/lightning/image33.png')} />

4.  On the following page, provide the URL to your Amazon Connect
    instance. This value can be found in your Amazon Connect console.

<img src={useBaseUrl('/img/lightning/amazonconnectconsoleaccessurl.png')} />

<img src={useBaseUrl('/img/lightning/image34.png')} />

You will also see the option to enable and disable certain 
triggers in the package, which you can configure to meet your needs. You
can change these whenever you would like to. For more details, see the troubleshooting section. 

5.  Select **Save**

#### Create the Softphone Layout

Next, we need to create a softphone layout for the solution. The
softphone layout settings will tell the console what resources are
available for screenpop by default and what to do under different match
conditions.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** box, type **Softphone**, then choose
    **Softphone Layouts** from the results

3.  If you are presented with the Get Started message, choose
    **Continue**

4.  On the Softphone Layouts page, choose **New**

<img src={useBaseUrl('/img/lightning/image35.png')} />

5.  Enter a name for the layout, such as **AmazonConnectDefault**, then
    select the **Is Default Layout** checkbox.

<img src={useBaseUrl('/img/lightning/image36.png')} />

6.  Expand **Display these salesforce.com objects** and select objects
    that CTI Connector should be able to search, for a screen-pop query.
    In this example, Case has been added to the default selection,
    allowing search and screen-pop by CaseID.
    

<img src={useBaseUrl('/img/lightning/image37.png')} />

7.  If desired, configure the search behavior to your requirements

<img src={useBaseUrl('/img/lightning/image38.png')} />

8.  Additionally, validate the Screen Pop settings. Please note that the
    default behavior is to not pop a screen if there is more than one
    result

<img src={useBaseUrl('/img/lightning/image39.png')} />

9.  Once you have configured the search behavior, choose **Save**

### Initial CTI Adapter Configuration

Once we have setup the Call Center, we need to do a final configuration
of the CTI Adapter before we can test the basic configuration. This will
tie the Lightning CTI adapter settings to the Call Center.

#### Add the CTI Adapter Console App

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose **Edit**.

<img src={useBaseUrl('/img/lightning/image40.png')} />

3.  On the Edit Service Console App Navigation Items page, select **Add
    More Items**

<img src={useBaseUrl('/img/lightning/image41.png')} />

4.  Select the **+** next to **AC CTI Adapters** and select the **Add 1
    Nav Item** button

<img src={useBaseUrl('/img/lightning/image42.png')} />

5.  If desired, move the **AC CTI Adapters** button up in the navigation
    Items menu by dragging it up or down the list, then choose **Save**
    to save changes

6.  Select **AC CTI Adapters** from navigation menu

7.  If Recently Viewed is selected, select the drop-down and select
    **All** from the List Views menu.

<img src={useBaseUrl('/img/lightning/image43.png')} />

8.  If no ACLightningAdapter entry exists, then select the new button to
    configure your AC CTI adapters, otherwise select the
    **ACLightningAdapter**

9.  Fill out or confirm the Details as follows:

10. CTI Adapter Name: **ACLightningAdapter**

11. Amazon Connect Instance: The url of your Amazon Connect
    Instance. You can find this in the Amazon Connect Console as shown
    below (remove everything after ".com"):

<img src={useBaseUrl('/img/lightning/image44.png')} />

12. Amazon Connect Instance Region: This is the region that your Amazon
    Connect instance is deployed in. For this field, you will enter the
    region code. For example, if you have deployed your Amazon Connect
    instance in US East (N. Virginia), you would enter us-east-1. For a
    list of region codes, please refer to the [AWS Service
    Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html)
    reference

13. Call Center Definition Name: **ACLightningAdapter
    Note:** This is the value of the Internal Name in the call center in
    the Call Center definition

14. Leave all other settings at the default for now, and choose Save

<img src={useBaseUrl('/img/lightning/image45.png')} />

15. **Refresh** the browser

16. In the bottom left corner of the Service Console, select the CTI
    Softphone icon

<img src={useBaseUrl('/img/lightning/image46.png')} />

17. Select the **Sign in to CCP** button. A new window will pop up.
    Enter your Amazon Connect login credentials and select **Sign In**.
    Make sure to allow Microphone access (if asked by browser)
    **NOTE:** At this point, this process will only work for Amazon
    Connect instances configured for local user storage. If you are
    configuring SAML, please follow the SAML setup process in the
    [Single Sign On Settings](/docs/lightning/cti-adapter/01-cti-adapter-configuration#single-sign-on-settings) section before
    continuing.

<img src={useBaseUrl('/img/lightning/image47.png')} />

18. Once Login is successful, the pop-up window will automatically
    close.

19. Expand the status menu and choose Available

<img src={useBaseUrl('/img/lightning/image48.png')} />

20. Make an inbound phone call to your Amazon Connect instance. The CCP
    will alert you to the incoming call and allow you to accept it. Once
    you do, the call will be connected

<img src={useBaseUrl('/img/lightning/image49.png')} />

<img src={useBaseUrl('/img/lightning/image50.png')} />

21. **End the call** and clear the contact

22. Set your agent back to **Available**

#### Enhanced Agent Logout

You can configure an agent status within "Manage agent status" with
"Logout" (case-sensitive) in the status name to enable enhanced agent
logout. When the agent selects that logout status in the Contact Control
Panel, it will first set the agent in an offline status. It will then
logout the agent in Connect and the AWS Console. Here is an example of
the agent status configured within Connect:

<img src={useBaseUrl('/img/lightning/image51.png')} />

Here is an example of an agent selecting the "Logout" status within the
Contact Control Panel:

<img src={useBaseUrl('/img/lightning/image52.png')} />

#### Validate Basic Screenpop

Next, we will add a contact to Salesforce that has your phone number
assigned to it. This will allow us to validate the basic screenpop
functionality that is provided with the CTI adapter.

1.  Select **Contacts** from the dropdown menu

<img src={useBaseUrl('/img/lightning/image53.png')} />

2.  Select **New** from top-right corner

3.  Complete the required fields. Make sure that your phone number is
    entered for the Phone field.

<img src={useBaseUrl('/img/lightning/image54.png')} />

4.  Select **Save**

5.  Close the Contact tab by selecting the X next to the name of the
    contact that you just created


<img src={useBaseUrl('/img/lightning/image55.png')} />

6.  **Refresh** your browser

7.  Place another phone **call** into your instance

8.  The new contact should automatically pop-up as it has been
    recognized by incoming phone number.

