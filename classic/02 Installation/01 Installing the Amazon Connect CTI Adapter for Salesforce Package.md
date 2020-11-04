<h1 class="toc">Installing the Amazon Connect CTI Adapter for Salesforce Package</h1>

<h2 class="toc">Lightning Flow Setup Installation</h2>

1.  Navigate to **Service Setup** within the Lightning UI under the gear
    icon.

2.  Click **View All**

3.  Search for or select **Add Phone Support**

4.  Click **Start** on the **Voice Setup** screen

5.  Under **Select Your Voice Provider**, select Amazon Connect CTI
    Adapter

6.  Agree to the terms and conditions and click Install **Package**

7.  Under **Add Voice Service Provider Details**, add the URL to your
    Amazon Connect instance (see instructions below if you are unsure).
    You will also need to whitelist your Salesforce domain within Amazon
    Connect.

8.  Under **Who's Answering the Phone?**, select the name of the users
    you would like to access the phone configuration. This can be
    modified later under the Call Center configuration.

9.  Click Finish. You can also launch the Amazon Connect Setup Guide.

<h2 class="toc">Installing from the Salesforce AppExchange</h2>

1.  Log in into your Salesforce instance and open **Setup**.

<img src="../media/image2.png" />

2.  Open the [Amazon Connect CTI Package URL](https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000EJH4yUAH), then choose **Install for All Users**.

<img src="../media/image3.png" />

<img src="../media/image4.png" />

<img src="../media/image5.png" />

3.  Choose **Done**. The **Installed Packages** page opens.

<img src="../media/image6.png" />

4.  In the **Quick Find** box, type *Call Center*, then choose **Call Centers**.

<img src="../media/image7.png" />

The Call Centers page opens. You should see 3 Call Center
configurations: Classic, Console and Lightning.

<img src="../media/image8.png" />

<h2 class="toc">Create the Softphone Layout</h2>

Next, we need to create a softphone layout for the solution.

<img src="../media/image9.png" />

6.  In the **Quick Find** box, type *Softphone Layouts*, then choose **Softphone Layouts**.

7.  Choose **New**.

<img src="../media/image10.png" />

8.  Enter a name for the layout, such as *AmazonConnectDefault*, then select the **Is Default Layout** checkbox.

<img src="../media/image11.png" />

9.  Expand "Display these salesforce.com objects" and select objects that CTI Connector should be able to search, for a screen-pop query. In this example, besides default selection, I'm adding "Case", as I want to search and screen-pop by CaseID.

<img src="../media/image12.png" />

10. If necessary, configure the search behavior in the case that one or multiple records are found upon CTI search.

<img src="../media/image13.png" />

11. In this example, keep the default configuration, then choose
    **Save**.

<img src="../media/image14.png" />

<img src="../media/image15.png" />

<h2 class="toc">Set Access Permissions</h2>

All users must be assigned the required permission set to access the
Salesforce metadata included in this package. The Amazon Connect CTI
integration package comes with two Permission Sets, one for agents and
one for managers, that grant the users all necessary access to use the
softphone.

1.  Log in into your Salesforce Org.

2. Navigate to **Setup** \> **Manage Users** \> **Permission Sets**.

<img src="../media/image16.png" />

2.  Choose **AC_Manager**.

<img src="../media/image17.png" />

3.  Choose **Manage Assignments**.

4.  Choose **Add Assignments**.

5.  Select the users to assign the permissions, then choose **Assign**. More information on assigning user permissions can be found at: <https://help.salesforce.com/articleView?id=perm_sets_mass_assign.htm&type=5>

### AC_Administrator

<img src="../media/image18.png" />

### AC_Manager

<img src="../media/image19.png" />

### AC_Agent

<img src="../media/image20.png" />

<h2 class="toc">Configure Console Experience</h2>

For the Console experience, we are going to use Sample Console
application, but the procedure is the same for other applications.

<img src="../media/image21.png" />

In the top navigation bar, select the "+" icon.

<img src="../media/image22.png" />

<img src="../media/image23.png" />

Select "AC CTI Adapters"

Create a new adapter. Fill in the CTI Adapter Name, and Amazon Connect
Instance Alias. For the Call Center Definition Name, type in
ACConsoleAdapter. Select Save.

<img src="../media/image24.png" />

In the Quick Find field, type Visualforce Pages and select Visual Force
Pages:

<img src="../media/image25.png" />

<img src="../media/image26.png" />

As we are currently setting up the Console experience, click on
AC_ConsoleAdapter page.

<img src="../media/image27.png" />

Click on the **Preview** button. A new browser tab will open with the
URL of this page. It's going to be in this format:

<pre>https://sfdcInstance--amazonconnect.visualforce.com/apex/AC_ConsoleAdapter</pre>

This is what we are going to use as "Origin URL" in our Amazon Connect
configuration. From AWS Console, select Amazon Connect service and then
select your Amazon Connect instance:

<img src="../media/image28.png" />

Select "Application Integration" on the left-hand side:

<img src="../media/image29.png" />

Click on "Add origin" link and enter the origin URL

<img src="../media/image30.png" />

Click "Add" button

<img src="../media/image31.png" />

From the Setup screen, type Apps in Quick Find field and select
Build\>Create\>Apps:

<img src="../media/image32.png" />

You will be able to see all applications that are available in your
account.

<img src="../media/image33.png" />

Click "Edit" next to the Sample Console application.

Scroll to the bottom of the page and "Assign to Profiles"

<img src="../media/image34.png" />

In this example, I'm assigning Sample console as Visible to System
Administrator.

Choose **Save**.

From Setup, type Call Centers in the Quick Find field and select Call
Centers.

<img src="../media/image35.png" />

<img src="../media/image36.png" />

Select "Amazon Connect CCP Adapter Console 3.9"

<img src="../media/image37.png" />

If a CCP version 1 user interface is desired, remove the '?ccpVersion=2"
from the CTI Adapter URL. Click on the Save button.

Click on the "Manage Call Center Users" button at the bottom of the
page.

<img src="../media/image38.png" />

<img src="../media/image39.png" />

<img src="../media/image40.png" />

Set filters and click on the Find button. Select the checkbox next to
the user and click "Add to Call Center" button.

<img src="../media/image41.png" />

Repeat the steps to add more users.

<img src="../media/image42.png" />

From the top-right corner, select Sample Console application.

<img src="../media/image43.png" />

In the bottom-right corner, you will be able to see the Phone button.

<img src="../media/image44.png" />

Click on the Phone button to open the softphone pop-up.

<img src="../media/image45.png" />

You will need to Sign in into your Amazon Connect CCP. Click on the Sign
in to CCP button. A new modal pop-up will show, asking you to enter your
credentials.

<img src="../media/image46.png" />

Enter your credentials and click Sign in. Allow Microphone access (if
asked by browser). Once login is successful, the pop-up window will
automatically close.

<img src="../media/image47.png" />

Select "Change status" and select "Available".

<img src="../media/image48.png" />

Make an inbound phone call to your Amazon Connect instance. The CCP is
going to "ring" and you can answer the call.

<img src="../media/image49.png" />

<img src="../media/image50.png" />

<h2 class="toc">Configure Classic Experience</h2>

The Salesforce Classic is the easiest to configure, but it has some
limitations. Most important limitation is that, with Classic layout,
there are no tabs and modal containers, so each time new object is
selected, a full page reload occurs. This full reload causes softphone
to be reloaded too, which could cause an issue in the voice call audio
stream. Because of that, in the Classic environment, we have to run a
separate instance of softphone (CPP) which will carry the audio, while
embedded instance of CCP can be used for call control and screen-pop
functionality.

First, we have to configure Amazon Connect integration.

<img src="../media/image21.png" />

From the top right corner, select the Sales application.

In the top navigation bar, select the "+" icon.

<img src="../media/image22.png" />

<img src="../media/image23.png" />

Select "AC CTI Adapters"

Create a new adapter. Fill in the CTI Adapter Name, and Amazon Connect
Instance Alias. For the Call Center Definition Name, type in
ACClassicAdapter. Select Save.

<img src="../media/image24.png" />

In the Quick Find field, type Visualforce Pages and select Visual Force
Pages:

<img src="../media/image25.png" />

<img src="../media/image26.png" />

As we are currently setting up the Classic experience, click on
AC_ClassicAdapter page

<img src="../media/image51.png" />

Click on the Preview button. New browser tab will open with the URL of
this page. It's going to be in this format:

<pre>https://sfdcInstance--amazonconnect.visualforce.com/apex/AC_ClassicAdapter</pre>

This is what we are going to use as "Origin URL" in our Amazon Connect
configuration. From AWS Console, select Amazon Connect service and then
select your Amazon Connect instance:

<img src="../media/image52.png" />

Select "Application Integration" on the left-hand side:

<img src="../media/image53.png" />

Click on "Add origin" link and enter the origin URL

<img src="../media/image54.png" />

Click "Add" button

<img src="../media/image55.png" />

From the Salesforce Classic layout, select Setup then type Call Centers
in the Quick Find field and select Call Centers.

<img src="../media/image35.png" />

<img src="../media/image36.png" />

Select "Amazon Connect CCP Adapter Classic 3.9"

<img src="../media/image56.png" />

If a CCP version 1 user interface is desired, click on the Edit button
and remove "?ccpVersion=2" from the url and click on the Save button.

Click on the "Manage Call Center Users" button at the bottom of the
page.

<img src="../media/image38.png" />

<img src="../media/image57.png" />

Click on the "Add More Users" button.

<img src="../media/image58.png" />

Set filters and click on the Find button. Select the checkbox next to
the user and click "Add to Call Center" button.

<img src="../media/image59.png" />

Repeat the steps to add more users.

<img src="../media/image60.png" />

From the top-right corner, select Sales application.

<img src="../media/image21.png" />

On the left-hand side, you will be able to see the Phone container.

<img src="../media/image61.png" />

You will need to Sign in into your Amazon Connect CCP. Click on the Sign
in to CCP button. A new browser tab will open, asking you to enter your
credentials.

<img src="../media/image62.png" />

Enter your credentials and click Sign in. Allow Microphone access (if
asked by browser). Once Login is successful, the new tab with CCP will
stay open, as this tab is going to carry the audio for voice calls.

<img src="../media/image63.png" />

Switch back to Salesforce tab in your browser.

<img src="../media/image64.png" />

Select "Change status" and select "Available".

<img src="../media/image65.png" />

Make an inbound phone call to your Amazon Connect instance. The CCP is
going to "ring" and you can answer the call.

<img src="../media/image66.png" />

<img src="../media/image67.png" />

Some CTI Flow features will reload the page the agent is currently on.
The page is fully reloaded, but the softphone preserved the audio
stream, as another instance of CCP was running in the 2^nd^ tab. If the
2nd tab is closed, the audio will be lost. The 2^nd^ CCP instance can
also run in a separate browser window, if preferred.

Go to Salesforce Setup page and type Call Centers in Quick Find, then
select Call Centers.

<img src="../media/image68.png" />

Select "Amazon Connect CCP Classic"

<img src="../media/image69.png" />

Click on the Edit button and find the "Amazon Connect CCP Login Popup"
field. By default, this field is set to "false", which means that Login
Popup will be opened in a 2nd tab. If we change this value to "true",
then Login Popup will be opened in a new browser window.

You may also notice that "Amazon Connect CCP Medialess" field is set to
"true". This basically means that embedded CCP instance will not carry
any media. Set the value to "true" and click on the Save button. Go back
to Sales application. If CCP is already logged in, please log out.

<img src="../media/image70.png" />

Click on the "Sign in to CCP" button and new browser window will open,
asking you for credentials.

<img src="../media/image71.png" />

Enter your credentials and click Sign In. The CCP application will
login, but popup window will stay open and it will host the 2^nd^ CCP
which will carry the audio stream. This window can be minimized or moved
to 2^nd^ screen.

<img src="../media/image72.png" />
