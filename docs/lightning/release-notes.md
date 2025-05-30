---
id: release-notes
title: Release Notes
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Important Notes

### Google Chrome third-party cookies support

The CTI Adapter v5.21 now provides support for third party cookies (see [Amazon Connect third party cookie documentation](https://docs.aws.amazon.com/connect/latest/adminguide/admin-3pcookies.html)). After you upgrade to the latest version of the CTI Adapter (v5.21+), agents will be prompted to allow third-party cookies from Amazon Connect: 
1. When agents open the CCP within the CTI Adapter, a new **Allow access to cookies** banner appears. It has one action button: **Grant access**.
2. When agents choose **Grant access**, the browser displays a prompt to authorize the use of third-party cookies.
3. Agents must select **Allow** on this second pop-up, and then proceed to log in.

**Note**: If the agent does not follow steps above, please see [our documentation](https://docs.aws.amazon.com/connect/latest/adminguide/admin-3pcookies.html#upgrade3p-agent-exp) on how to resolve.

### Summer '23 Release
The Salesforce summer release '23 blocks Username-Password Flow by default (see more details [here](https://help.salesforce.com/s/articleView?id=release-notes.rn_security_username-password_flow_blocked_by_default.htm&release=244&type=5)). If your org uses this version of Salesforce, please unblock the flow by following [these](/docs/lightning/installation/02-guided-setup#allowing-the-api-user-to-authenticate-using-password) instructions.

### Salesforce Enhanced Domains
Salesforce is making changes to the instance domains on account of the [enhanced domains](https://help.salesforce.com/s/articleView?id=sf.domain_name_enhanced_enable.htm&type=5) feature in the Spring 23 release. Once this feature is enabled, you must migrate the CTI adapter to using these new domains. See [here](/docs/other/sf-enhanced-domains-migration) for migration instructions.

### Spring '22 Release
The Salesforce Spring '22 release introduces a change that will likely cause an install or update to any version of the adapter before 5.18 to fail. In addition if you are using the `ac_PhoneCallListView` component in any version of the adapter, the loading of your component may fail. This component has been depricated in v5.18.

### WebRTC Plan-B Deprecation
The Plan-B deprecation should not affect any current users of the CTI Adapter, as we utilize the embedded CCP and do not build in connect-rtc-js seperately.

### Installing as Admin
Please **confirm that the application was installed for admins only** (see [installation](/docs/lightning/installation/01-installation) for more details). If you did this by accident, then you will have to [manually edit the profiles](/docs/lightning/installation/06-adapter-installation-troubleshooting#how-to-remove-permissions-to-visualforce-pages-apex-classes-for-a-desired-profile) to remove the permissions to the objects and pages created by the app. If you are updating the package, please verify that all users have the proper AC permission set. We strongly recommend when installing or upgrading to a new version of the CTI Adapter, customers thoroughly test the new version in a staging or test environment before deploying it to production to ensure compatibility and stability.

**Important:** When upgrading the CTI Adapter, please make sure that the Salesforce Lambdas are a [compatible version](/docs/lightning/installation/04-salesforce-lambdas-manual-setup#compatibility-table). Also review the [CTI Adapter Installation Troubleshooting and Common Issues](/docs/lightning/installation/06-adapter-installation-troubleshooting) section for known issues and troubleshooting.

### Important notes for CTI Flow Builders

#### Migrating CTI Flows to CTI Adapter v5.0+

CTI Flows in v5.0+ replaces Lightning CTI Extensions in version v4.x allowing you to build your agent interface for both Lightning and Classic using a drag-and-drop UI. Many of the CTI blocks in CTI Flows correspond to the API calls in the previous Lightning CTI Extensions, making it easy to map them. However, your existing Lightning CTI Extension scripts will not be automatically migrated to CTI Flows. During the upgrade, you’ll have the option to download your existing scripts for reference as you rebuild them in CTI Flows. We highly recommend testing this version in a staging/non-production environment to ensure new CTI Flows match the functionality of your previous scripts. If you need additional functionality from your current scripts, please open a support ticket.

#### Improved Phone Number Handling with Updated Library (v5.22+)

We've upgraded the `libphonenumber-js` library to the latest version, expanding support for various area codes that were previously causing call failures. This update ensures greater accuracy and compatibility when handling phone numbers globally.

This upgrade introduces a breaking change to how you access parsed phone numbers within your CTI flows. While the previous path (`$.contact.parsedNumber.phone`) retrieved the phone number of the currenct contact, we recommend using the following updated paths for better reliability:

  * **International Number:** `$.contact.parsedNumber.number`
  * **National Number:** `$.contact.parsedNumber.nationalNumber`

Please review your existing CTI flows and update any JSON paths referencing parsed phone numbers to ensure seamless functionality. 

For detailed information about the `libphonenumber-js` library and its features, please visit: [https://gitlab.com/catamphetamine/libphonenumber-js](https://gitlab.com/catamphetamine/libphonenumber-js)

## 5.27 April 2025

---
**NOTE**

Before installing this version, please install this [patch](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tKY000000gUAI) first to remove references to older components unused in the application which were removed on 5.27. Salesforce requires a two-step upgrade for removing components.

---

- **Feature:** [Amazon Connect Global Resiliency](https://docs.aws.amazon.com/connect/latest/adminguide/setup-connect-global-resiliency.html) support: customers can now set up their CTI Adapter in Salesforce with their Connect replica instance, enabling agents’ CCP to failover to the specified traffic distribution set by Connect Admin. [See Documentation](/docs/lightning/03-cti-adapter/16-global-resiliency.md)
- **Bug Fix:** Fixed an issue for `Show modal` CTI Flow block, updated documentation.
- **Bug Fix:** Fixed an issue for `Clear properties` CTI Flow block (recordingNamedCredential uncleared).
- **Bug Fix:** AC Contact Trace Record and AC Contact Channel supports initiation method for monitoring and “Get Contact Properties” CTI Flow block. Updated to include isMonitor (returns true if it is a monitoring contact).
- **Bug Fix:** Disable echo cancellation field and permission set — Voice quality issue.
- **Bug Fix:** If the agent has an ongoing contact, the Popout CCP in the Medialess feature will no longer close when the browser tab containing Salesforce Service Console where the embedded CCP is present, is refreshed or closed.
- **Bug Fix:** Includes multiparty chat bug fix wherein only the first chat contact is getting used on CTI Actions.

## 5.24 August 2024
- **Feature:** Amazon Workspaces Support: CTI Adapter now provides audio optimization for Amazon Workspaces. [See Documentation](/docs/lightning/cti-adapter/15-vdi#setting-up-audio-optimized-virtual-desktop-infrastructure-vdi).
- **Bug Fix:** Fixed an issue where our Contact Channel Analytics Records would display an error prompt when viewed in the Lightning App Builder.
- **Bug Fix:** Fixed an issue where our Contact Channel interaction duration data would show erroneous values for missed calls.

## 5.23.3 July 2024
- **Enhancement:** Added cron-job scheduler for batch processing of triggers ([Link to Documentation](/docs/lightning/installation/03-managed-package-manual-setup#configure-the-schedule-for-batch-jobs-for-triggers))
- **Enhancement:** Recording Controls: Resolved an issue where the recording controls feature would use the default named credential regardless of what was passed.
- **Enhancement:** A new value for Initiation method of a contact 'EXTERNAL_OUTBOUND` added as an item in the picklist for Contact Trace Records ([Link to AWS Documentaton](https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html)). 
- **Bug Fix:** Fixed the issue of Call Recordings not being rendered on Tasks and Cases pages.
- **Bug Fix:** Fixed infinite buffering of Contact Lens Data on the Contact Channel Analytics page.
- **Bug Fix:** Fixed the issue that prevented the use of custom Named Credentials names with recording controls, as part of the enhancements introduced in v5.22 ([link to documentation](/docs/lightning/cti-adapter/09-recording-controls#recording-named-credential)).

## 5.22 February 2024

- **Known Issue in v5.22 - Playback of Connect call recordings on Lightning Task or Case:** If you are utilizing the CTI Adapter's functionality for enabling call recording streaming and playback on the Lightning Task or Case page, we recommend not upgrading to CTI Adapter version 5.22 as we have discovered an issue where the playback of the call recording does not work as expected. The release v5.23.3 has the fix for this issue, and hence we advise customers to pause upgrading to v5.22.  If you have upgraded to v5.22, the workaround is to use the [Connect Contact Channel Analytics (CCA)](/docs/lightning/salesforce-lambdas/04-contact-channel-analytics) page to access call recordings. To view recordings associated with a specific task or case, please copy the CallObject property and utilize it as a filter on the contactId field within CCAs.

  In order to view the recordings for a Task, perform the below steps. Note that these are similar for Cases.

  * Ensure Contact Channel Analytics is configured within the Salesforce environment, if not already done. Refer to the CTI Adapter documentation for guidance on setting up CCAs.
  * Navigate to the task for which you wish to access the recording. Copy the value of the "Call Object Identifier" field from the user interface. For any task to display call recordings, it must have a valid call identifier value. If this field is not visible in the UI, ensure it is added to the Tasks layout. Follow the [provided guide](https://help.salesforce.com/s/articleView?id=sf.admin_local_name_fields_lex.htm&type=5) to add the field to the layout.
  <img src={useBaseUrl('/img/lightning/v5.22-bug-img2.png')} />
  * Once you have copied the call identifier object to the clipboard, proceed to the CCA pages and utilize the Salesforce Filter to paste the value, isolating the CCA recording associated for the contact. Click on the CCA record to view the call recording.
  <img src={useBaseUrl('/img/lightning/v5.22-bug-img3.png')} />
  <img src={useBaseUrl('/img/lightning/v5.22-bug-img1.png')} />

- **Note:** If you wish to use the v5.22 lambdas, you will need to upgrade your CTI Adapter to v5.22. Consult the [compatibility chart](/docs/lightning/installation/04-salesforce-lambdas-manual-setup#compatibility-table).
- **Feature:** Citrix Support: CTI Adapter now provides audio optimization for Citrix Workspace. [See Documentation](/docs/lightning/cti-adapter/14-medialess#setting-up-audio-optimized-virtual-desktop-infrastructure-vdi).
- **Feature:** Early Get User Media(GUM): Enabled support for the CCP feature EarlyGUM. [See Documentation](/docs/lightning/cti-adapter/01-cti-adapter-configuration#update-the-cti-adapter-details)
- **Feature:** Trigger multi-contact chat events: CTI Adapter enables users to trigger events on selected contact while handling multiple chats simultaneously. [See Documentation](cti-adapter/11-chat-widget-integration#trigger-multi-contact-chat-events).
- **Enhancement:** Amazon Q: Amazon Q has undergone a change and goes by a new name. As such, it has been reflected in our documentation. Here is the documentation for [Amazon Q](https://aws.amazon.com/q/)
- **Enhancement:** Recording Controls: Updated the Recording Controls feature to allow users to specify the Named Credential they want to use per CTI Adapter in the "Recording Named Credential" field. This field will not be use if this feature is enabled. If the feature is enabled but no value is provided, a default value of "AmazonConnectAPI" will be assumed.
- **Enhancement:** Salesforce Lambdas: 
  - Provided support for queue names with special characters.
  - Updated the Salesforce Lambdas to support new fields for Agent Performance, Historic Queue Metrics, and Contact Lens.
- **Enhancement:** Troubleshooting: Added new section with additional troubleshooting for known problems
- **Enhancement:** Triggers:
  - Fixed typo in CCA Case Trigger + CCA Contact Trigger
- **Enhancement:** Presence Sync:
  - Clarified in our documentation that Presence Sync is not supported in Salesforce Classic adapters. It's listed under the section for Salesforce classic, so this was done to prevent confusion
- **Bug Fix:** AC Contact Channels: `InteractionDuration` value will be updated only once after the call ends.
- **Bug Fix:** Phone numbers: Upgraded the library responsible for formatting numbers to latest version to support calls to more regions.
- **Bug Fix:** Guided Setup: Improved the process to allowlist user URLs.
- **Bug Fix:** Recording Controls: Recording Controls tab will now be visible on the first session load in the user's salesforce instance.
- **Documentation Change:** Medialess: Created new documentation page for setting up medialess ([Link to page](/docs/lightning/cti-adapter/14-medialess)).
- **Documentation Change:** Historical Metrics: Added clarifying information to setup historical metrics.
- **Documentation Change:** Upgrading from an earlier version: Added new documentation on upgrading [Salesforce Lambdas](docs/lightning/installation/05-upgrading-from-an-earlier-version)
- **Documentation Change:** CTI Flow Blocks: Updated with latest CTI Flow blocks. Added new section about accessing CTI flow block values ([Link to section](/docs/lightning/cti-adapter/03-cti-flows#accessing-cti-flow-block-values)).
  
## 5.21.1 November 2023

- **Bug fix:** Google Chrome third party cookie support for GovCloud instances: The v5.21.1 patch includes updated third party cookie support for GovCloud instances. 
- **Enhancement:** [Python 3.10 runtime](https://aws.amazon.com/blogs/compute/python-3-10-runtime-now-available-in-aws-lambda/) now available in Amazon Connect Salesforce Lambda package v5.19.7 to address AWS ending support for Python 3.7 in AWS Lambda.

## 5.21 October 2023

- **Enhancement:** Google Chrome third party cookie support : Salesforce CTI Adapter v5.21 enables requests for third party cookies within Salesforce domains to support Amazon Connect. See [Amazon Connect third party cookie documentation](https://docs.aws.amazon.com/connect/latest/adminguide/admin-3pcookies.html) for further information.

## 5.20.1 July 2023

- **Enhancement:** Amazon Connect Streams API Upgrade : The Amazon Connect Streams API has been upgraded to version 2.2.0 for improved performance and functionality.
- **Enhancement:** CCP Element Editor Permission Change : For CCP Element Editor, editing features was previously available to users assigned to permission sets Agent (AC_Agent), Manager (AC_Manager), and Administrator (AC_Administrator). Starting from this version, only users with the Administrator permission set (AC_Administrator) will be able to view and edit feature. This change is designed to restrict modification access of CCP Overlay Elements.
- **Enhancement:** Chat Widget Integration Setup Process Changes: The setup process for Chat Widget Integration has been updated to enhance the integration experience and security.
- **Backward Incompatibility Notice::** Chat Widget Integration Update : Customers who have previously set up Chat Widget Integration will need to redo the setup process due to changes introduced in this version. This ensures compatibility with the latest enhancements.*Note: To avoid any downtime of feature, set up should be completed before upgrading the version*
- **Security:** Improved Amazon Connect Instance Security : Throttling mechanisms have been introduced to enhance the security of Amazon Connect Instances, ensuring a safer environment for users and their data.

## 5.19 April 2022

- **Enhancement:** replace call recording audio streaming via cloudfront distribution with the connect native get-recording endpoint. This change makes it so that the cloudfront infrastructure and associated setup process is no longer necessary. Please note that this change will remove audio recording infrastructure from your AWS account, please make sure to test this change before fully deploying.
- **Enhancement:** add IgnorePermissionSet setting to FEATURE_WISDOM_PANEL feature. The setting determines whether the AC_CallRecording/AC_Administrator permission set is checked before showing Wisdom to the logged in user.
- **Bug fix:** CTI Flows on contact events will fire after the page was reloaded during a contact’s life cycle
- **Bug fix:** Fixed an issue where we would create a CCACase or CCAContact batch job even if there were no updates to any related fields.

## 5.18 January 2022

- **Bug Fix:** Updated the **Get Salesforce Contact ID** block to accept E.164 numbers.
- **Bug Fix:** Fixed **onMessage** event name and label which was causing CTI flows to not trigger.
- **Bug Fix:** Fixed stray template tag in `ac_contactChannelListView` causing Spring ’22 package installation failure.
- **Bug Fix:** Depricated `ac_PhoneCallListView` LWC, as it is an artifact of an old version of the adapter and was causing Spring ’22 package installation failure.
- **Bug Fix:** Fixed issue where switching contact tabs didn’t update the CCP overlay attributes.
- **Bug Fix:** Fixed issue where some `sfInvoke` operations were returning complex JSON objects that don't work with Connect Contact Flows


## 5.17 November 2021

- **Feature:** Added the integration with Wisdom, which delivers articles and article recommendations to agents. See [here](/docs/lightning/cti-adapter/12-amazonq-integration) for more details.
- **Feature:** Added the integration with Voice id, which provides real-time caller authentication. See [here](/docs/lightning/cti-adapter/13-voice-id) for more details.
- **Bug Fix:** Fixed a bug where CTI Actions would only load if you switched overlay tabs. Now they will load immediately.
- **Bug Fix:** Fixed a few bugs with Contact Attributes Overlay.
  - Where you needed to set they would not populate in the overlay unless the CTI Attribute Name value was the same as the contact attribute key.
  - Selecting DisplayValue of `Key` did not show just the Key value.
  - When using the ShowAllAttributes feature, the already configured CTI Attributes did not maintain the same HTML formatting as before.
- **Bug Fix:** Fixed a bug where DialedNumber__c was not filled on outbound calls.
- **Bug Fix:** Fixed a bug where Update Contact Attributes didn't work for Chat or Task contacts.
- **Bug Fix:** Fixed a bug where the CTI Flow payload would only contain the CTI Action Additional Data when both CTI Action Payload and Additional Data are configured. Now the CTI Flow payload will have both the CTI Action Payload and Additional Data
- **Enhancement:** Added two new CTI Flow Blocks - Destroy Live Contact and Clear Contact.


## 5.16 August 2021

- **Feature:** Added a `callIncomingDuration` field to the `Contact Interaction Metadata` CTI Flow block, which captures the time between the call coming into an agent and it being accepted/missed/declined.
- **Feature:** Moved the medialess popout page to be an optional feature. Learn how to enabled it [here](/docs/lightning/cti-adapter/01-cti-adapter-configuration#medialess-popout-ccp)
- **Bug Fix:** Fixed an issue where the `callInteractionDuration` would be too large if the call is missed. It is now defaulted to 0 if the call is not picked up.
- **Bug Fix:** Fixed an issue with the medialess adapter where media was still coming through the adapter and causing audio quality issues. Now, when the medialess option is checked, this will disable the allowFramedSoftphone option in CCP config, and media will not be sent through the CCP embedded on Salesforce.
- **Bug Fix:** Fixed an issue where Agents couldn't see some CTI Actions if more than 20 CTI Actions are set up. Now, a scroll bar should appear to navigate to all of them.
- **Bug Fix:** Fixed an issue with the isInbound CTI Flow block, which would return false if the Customer hangs up the error before the Agent could answer the call, even if it was inbound.
- **Bug Fix:** Fixed an issue with the InitialAgentStatus sub-feature of SetAgentStatusOnSessionEnd, which would not follow the IfProfileNameIncludes condition.
- **Bug Fix:** Fixed an issue with CCP overlay where if no additional data is added, including Title, Instructions and Fields, the right pointing caret icon will be displayed for detailed form view. Now the execute button will be displayed in this case.
- **Bug Fix:** Fixed an issue with CCP overlay where the order parameter was not affecting the sorting of the CTI Actions in the overlay.
- **Bug Fix:** Fixed an issue with the CCP Element Editor where typing the CTI Action name first caused the cursor to move out of the input box.
- **Bug Fix:** Fixed an issue with the Set Agent Salesforce State CTI Flow block.

## 5.15 July 2021

When installing v5.15, please **confirm that the application was installed for admins only** (see [installation](/docs/lightning/installation/01-installation) for more details). If you did this by accident, then you will have to [manually edit the profiles](/docs/lightning/installation/06-adapter-installation-troubleshooting#how-to-remove-permissions-to-visualforce-pages-apex-classes-for-a-desired-profile) to remove the permissions to the objects and pages created by the app.

- **Feature: Guided Setup** The Guided Setup feature helps make the setup process easier. See [Guided Setup](/docs/lightning/installation/02-guided-setup) for more details.
- **Feature: Chat Widget Integration for SalesForce Experience Cloud(formerly Community Cloud)** Added VisualForce Page component that allows you to add Amazon Connect Chat Widget in your Salesforce Experience Cloud Site.
- **Enhancement:** Changed the default audio recording component in the Contact Channel Analytics for easier setup. See [Contact Channel Analytics](/docs/lightning/salesforce-lambdas/04-contact-channel-analytics) for more details.
- **Enhancement:** Created the ExecuteAwsService service for simpler communication between Salesforce and AWS. **WARNING:** If you are using Contact Lens for audio recording you *must* replace your existing AwsGenerateAudioRecordingUrl named credential with with the ExecuteAwsService named credential. See [here](/docs/lightning/installation/01-installation#setting-up-the-executeawsservice-named-credential) for more details.
- **Bug Fix:** Fixed an issue with the lambda package that caused Contact Lens Call Recording Streaming to be broken for redacted calls.
- **Bug Fix:** Fixed an issue that caused the "Clear All Properties" CTI Flow Block to clear properties important to the CTI adpater working.
- **Bug Fix:** Added the `DISCONNECT` field to the `Initiation Method` field in Contact Trace Records.

## 5.14 June 2021

- **BugFix:** Added batch processing to CCA Case Trigger and CCA Contact Trigger.
- **Bugfix:** The issue that caused an Attribute label to not display properly in the attributes panel has been fixed.
- **Bugfix:** The issue that caused AC Queue Metrics tab's name showing blank has been fixed.
- **Bugfix:** The issue that caused the Recording Panel button to fail when a url is used for connect instance alias has been fixed.
- **Enhancement:** We now make it possible for voicemail drops to work with queue callbacks.
- **Enhancement:** You can now configure the CT Action Recording Panel's initial state using contact attributes. If you're recording your call, make sure to add an attribute named `RECORDING_STARTED` whose value is `true` in your Contact Flow.
- **Enhancement:** We have added `IfCurrentAgentState` tag to `SetAgentStatusOnSessionEnd` feature, which allows customers to condition this feature on the Agent's current state.

## 5.13 April 2021

- **Feature: CTI Actions - programmable buttons within the CCP overlay**

In this release, we have added a feature called CTI Action which are programmable buttons for your CTI Flows. Each CTI Action is a button that can be programmed to trigger a CTI Flows whose source value is "CTI Action." In addition, CTI Actions can be programmed to ask the agent for additional information via a data entry form. You can use the agent's entry in your CTI Flow with the help of "Get Payload" block. This is a great way to ask your agents to enter ad-hoc data prior to running the CTI Flow to provide additional information as part of a workflow to automate case creation, or start a customer refund process. **If you are upgrading from a previous version of the CTI Adapter, please be sure to review the [additional setup steps required](/docs/lightning/cti-adapter/08-cti-actions#upgrading-from-an-earlier-version) for CTI Actions.**

- **Feature: CTI Actions: recording API integration within the CCP overlay**

The CTI Adapter now includes integration with Connect's recording API. This feature allows the agent to control when to start and stop recording a call. Once the recording has started, they can also pause and resume it. For example, agents can pause a recording before asking for sensitive information from your customers. Once the agent stops a recording, you cannot start it again. Use pause/resume buttons after you've started recording a call to control the recording.

- **Enhancement: Voicemail Drops (beta)**

The **[beta Voicemail Drops](/docs/lightning/cti-adapter/10-voicemail-drops)** feature now integrates with CTI Actions. In the beta, voicemail drops were loaded directly into the CCP Overlay. As of 5.13, you will need to create a CTI Action, and use the newly added "Leave a Voicemail" block in the CTI Flow where you can configure the specific voicemail drop and the quick connect name to use for the voicemail.

- **Feature: CCP Overlay: Data panel to receive data from CTI Flows.**

You can now send data from a CTI Flow to the CCP Overlay. The Data panel on CCP Overlay will display any object you pass it from "Send Data to CCP Overlay" block.

- **Feature: CTI Flow Blocks: "Start Recording" and "Stop Recording"**

With "Start Recording" and "Stop Recording" blocks, you can control the voice recording of the call within your CTI Flows.

- **Feature: CTI Flow Block: "Update Contact Attributes"**

You can now update contract attributes using CTI Flows. This block accepts a list of key-value pairs and assigns them to the currently active contact. It may come handy for passing Case id and other important information to the next agent when transferring a call.

- **Feature: CTI Flow Block: "Get Payload"**

The `payload` object contains the arguments passed to the CTI Flow. Now you will be able to use "Get Payload" block to reference a payload key as an input in other blocks on your CTI Flow.

- **Feature: CTI Flow Block: "Send Data to CCP Overlay"**

This block allows you to send data to your agent from a CTI flow. The agent will see this information in the CCP Overlay in a panel entitled "Data."

- **Feature: CTI Flow Block: "Leave a Voicemail"**

This block works with the beta Voicemail Drops feature. When you configure the voicemailDropName and quickConnectName, it will pass the contact to an IVR to leave a voicemail on the agent's behalf.

- **Feature: CTI Flow Block: "Get Salesforce Lead ID":** This block allows you to get a Salesforce lead by using a phone number.

- **Enhancement:** "Get Salesforce Contact Id" block now uses FIND syntax to search across multiple fields.

- **BugFix:** For the `SetAgentStatusOnSessionEnd` feature, it would occasionally fail if the agent hadn't interacted with the webpage. We solve this by creating a popout to monitor the agent session.

- **Enhancement:** For the `SetAgentStatusOnSessionEnd` attribute, you can now specify multiple values.

- **Enhancement:** When `SetAgentStatusOnSessionEnd` feature is enabled, you can now configure which state the agent should be shown as when they login with the InitialAgentState setting.

- **Enhancement:** When `SetAgentStatusOnSessionEnd` feature is enabled, you can now configure which agent to logout when all tabs are closed by setting the Status to Logout.

- **Bugfix:** Addressed issue that caused CTI Flows to be run on every open Salesforce tab.

- **Bugfix:** Addressed an issue in "Get Salesforce Contact Id" block that caused the query to fail if the phone number was in E164 format.

- **Enhancement**: Added the onDestroy Event to certain CTI Flow Sources

## 5.12 March 2021

- **Feature**: Added custom setting which will allow customers to enable and disable non-essential triggers (They are disabled by default now). [More details in the troubleshooting section](/docs/lightning/installation/06-adapter-installation-troubleshooting)
- **Bugfix**: Addressed additional trigger issue that prevented orgs with 200k+ CCA records from updating Case and Contact records.
- **Bugfix**: Addressed issue where AC Permission sets did not include the CustomerEndpointAddress field for the ContactChannelAnalytics object.
- **Bugfix**: Addressed issue where AC Permission sets did not include the MedialessPopout page.

## 5.11 March 2021

- **Bugfix**: Addressed trigger issue that prevented community and partner users from updating Contact and Case records.

## 5.10 February 2021

- **Feature**: _Contact Control Panel (CCP) Audio Device settings option._ Admins can toggle Phone type settings and the new [Audio Devices settings](https://docs.aws.amazon.com/connect/latest/adminguide/audio-device-settings.html) for agents to see on their CCP. [Audio Device settings](https://docs.aws.amazon.com/connect/latest/adminguide/audio-device-settings.html) allow the agents to choose audio devices for their speaker, microphone, and ringer.
- **Feature**: _Custom Ringtone for chat_. Admins can configure a custom ringtone for chat (separate from CCP) from the CTI Adapter configuration page.
- **Enhancement**: The Salesforce built-in Cross Site Request Forgery (CSRF) protection is enabled for Visualforce pages in the CTI Adapter package which improves organizational security to protect against cross site request forgeries.
- **Bugfix**: Decision blocks no longer requires both sockets to be connected.
- **Bugfix**: Click to Dial stopped working after first use until the agent refreshed the page.
- **Bugfix**: Error that prevented Contact Lens app resources from being hosted on a different domain than the Salesforce instance.
- **Bugfix**: Error that prevented Contact Lens app from displaying intermittently when Transcribe was enabled.
- **Bugfix**: Changed the logic for the IsContactTransfer CTI Flow Block which always returned true.
- **Bugfix**: Medialess popout not closing after Salesforce tabs are closed.
- **Bugfix**: Login window did not close automatically after logging into Connect.
- **Bugfix**: Unable to upgrade the package if the Case or Contact object contained encrypted fields.

## 5.9 December 2020

- **Feature**: Contact Lens Integration
- **Feature**: Tasks Integration - Added the Amazon Connect Task Contact as a source to CTI Flow in addition to Task specific events
- **Feature**: CTI Block - Is Task Contact? - Check if the contact is a task
- **Feature**: CTI Block - Create Task Contact - Creating a new task contact with certain inputs.
- **Feature**: CTI Block - Pop Task Contact's Reference Urls - Pop any reference urls that are related to the task contact
- Upgraded Salesforce API to v50.0.
- **Feature update**: If you have CCP open on multiple tabs, CTI Flows will be executed only on one of them. The execution will be performed on the current tab, by default. If the agent is currently looking at a different site, a random tab will be selected to perform the execution.
- **Enhancement**: $User.ProfileId is now available through "userProfile" property.
- **Enhancement**: CTI Flow execution timeout window has been increased to 60 seconds.
- **Feature update**: When the CCP popout is opened, we now ask for a confirmation before refreshing or closing the tab that opened it. Note that if you do close the original tab, the pop out might also be closed.
- **Bugfix**: Voicemail Drops feature has been fixed.
- **Bugfix**: CTI Flow "Open Subtab" block has been fixed.

## 5.7 November 2020

- **Feature update**: Change audio recording feature in the Contact Channel Analytics page to use an audio streaming approach. Please review the updated [Contact Channel Analytics](/docs/lightning/salesforce-lambdas/04-contact-channel-analytics) section for the setup details.
- **Feature**: Add permission set specifically for the audio recording feature
- **Feature**: Localization into 9 languages.
- **Feature**: Add callType to return fields of "Get Contact Properties" block
- **Feature**: Add formatted phone number to return fields of "Get Contact Properties" block
- **Feature**: Add script name to CTI flow definition file.
- **Feature**: Remove context from log outputs
- **Bugfix**: Return field of “Open Primary Tab” was value, not id, as specified. We now provide it in both `value` and `id` fields for backward compatibility.
- **Feature**: Make the error message shown when the execution runs too long more informative.
- **Feature**: Make sure the attributes overlay doesn't open automatically when CCP is opened.
  Documentation: "Create and pop that task" default flow is fixed.
- **Bugfix**: update return value of "Get Agent Configuration" block to match the documentation.
- **Feature**: Increase CTI Flow timeout to 10 seconds.
- **Bugfix**: remove the leading wildcard matcher in "Get Salesforce Contact Id" block query. The wildcard matcher caused performance issues with the query. Going forward make sure the phone number is an exact match to the one in file.
- **Bugfix**: Ensure “Join Strings” block does not ignore boolean false values.
- **Bugfix**: Ensure “Log to Console” block does not ignore boolean false values.
- **Feature**: Add uid field on top of the block on the canvas.
- **Bugfix**: Remove the loginWindow object from log output because it errors with "Cannot convert object to primitive value."
- **Bugfix**: ContactChannel object updates to new agent if previous agent rejected or missed a contact
- **Bugfix**: Changing status to logout now correctly logs agent out
- **Feature**: Rename "Enable Click to Dial?" to "Can Make Outbound Calls?".
- **Feature**: CTI Flow Block - math function - “Multiply”
- **Feature**: CTI Flow Block - math function - “Divide“
- **Feature**: CTI Flow Block - “Get Tab Object Map”
- **Feature**: CTI Flow Block - “Close Salesforce Tab”
- **Feature**: CTI Flow Block - “Delay”
- **Feature**: CTI Flow Block - “Get Primary Tab Ids”
- **Feature**: Improve browser log formatting.
- **Feature**: CTI Flow Block - “Get Tabs With Matching Url”
- **Feature**: _Update Connect agent status when all Salesforce tabs are closed_: You can set the agent status to a specific state if the SetAgentStatusOnSessionEnd feature is turned on and the agent’s routing profile name includes the value of IfProfileNameIncludes setting, such as “On-Call.” By default, the agent status is set to “Offline” if the feature is enabled and nothing is specified for IfProfileNameIncludes. If this feature is enabled, the agent will be automatically shown as available when they login to Salesforce and the CCP.
- **Feature**: CTI Flow Block - Length”
- **Feature**: CTI Flow Block - "Slice"
- **Feature**: CTI Flow Block - “Cast a Value to a Type”
- **Bugfix**: Agent is able to accept calls when Medialess is turned on.
- **Feature**: CTI Flow Block - “Get CCP Logs”
  Remove "Initialization" and "Browser" sources
- **Feature**: Allow users to specify Amazon Connect Instance url in CTI Adapter details in addition to Amazon Connect Instance Alias

## 5.5 October 2020

- **Feature**: CTI Flow Block - "Clear All Properties"
- **Feature**: CTI Flow Block - "Unset Property"
- **Feature**: CTI Flow Block - "Show All Attributes"
- **Bugfix**: Attributes panel can now display attributes of transferred contacts.

## 5.4 Late September 2020

- **Feature**: You can now provide additional ad-hoc fields to "Create a Task" block. (Note: the values of these fields don't have a lookup dropdown yet.)
- **Feature**: New CTI Block! - You can now create "counters" with the "Update Counter" and read the value of your counters using "Get Counter" block.
- **Feature**: You can now get the number of open tabs from `openAgentTabs` counter.
- **Feature**: You can now compare multiple things using "Is One Of?" block in CTI Flows.
- **Feature**: New CTI Block! - You can now extract a value from a complex value, such as an array or an object, using the "Extract Value" block. (This comes handy when you retrieve a Salesforce object.)
- **Feature**: New CTI Block! - You can use the Salesforce retrieve API to fetch a record from the server by id using "Retrieve Salesforce Record" block.
- **Feature**: New CTI Block! - You can use the "Get Salesforce Contact Id" to fetch the id of a Salesforce contact by its phone number.
- **Feature**: New CTI Block! - You can now show a window alert using "Alert" block.
- **Feature**: New CTI Block! - You can now use create a complex string using string templates and multiple variables with the help of "String Template" block.
- **Bugfix**: When a screenpop is "deferred," the CTI Block used to return an inexact match and the Id field in the return value of the block would be blank. This issue has been fixed in this release.
- **Bugfix**: Presence sync is working again. The current release also reduces the wait threshold between each presence sync update from 1 second to 100ms, i.e. co-occurring events won't get lost anymore (as much).
- **Bugfix**: The encoding issue affecting "SOQL Block" has been fixed. The single quotes in the SOQL query are no longer encoded as HTML entities.
- **Bugfix**: To access the return value of another block, power users use "magic strings," e.g. `\$.actions.<blockId>.results.<fieldName>`, but these strings used to be cleared in the UI when the block is selected on the canvas. This issue is now fixed.
- **Bugfix**: The spelling of `TaskSubtype` field in "Create a Task" block has been fixed. Your TaskSubtype won't get lost anymore.
- **Bugfix**: Call recording view for a Case has been fixed.
- **Bugfix**: "Is Contact Inbound?" block is working again.
- **Bugfix**: "Is Truthy?" block now works with boolean input values.
- **Bugfix**: Salesforce UI onNavigationChange event listener is working again.
- **Bugfix**: We now alert you to change your instance alias if you try to sign in with instance alias set to "default."

## 5.3 September 2020

- **Bugfix**: Fix the issue that caused ACSFCCP_CallRecordingTask component to not work.

## 5.1 Late August 2020

- **Bugfix**: Ensure "Get App View" CTI Flow block doesn't break the sidebar
- **Enhancement**: Add "queueARN" field to "Dial Number" CTI Flow block
- **Bugfix**: Ensure some required CTI Flow block fields are not shown as "optional"
- **Bugfix**: Ensure "Save (or Create) a Record" block works as expected
- **Bugfix**: Fix the validation error on "CallDurationInSeconds" field in "Create a Task" block
- **Bugfix**: Fix phantom scrollbar on Windows machines
- **Bugfix**: Fix issue where copying contact attributes to clipboard doesn't work
- **Bugfix**: Fix issue where "saveLog" CTI Flow block throws an error
- **Bugfix**: Fix issue with onOffline Flow event not firing
- **Bugfix**: Fix various omnichannel presence sync bugs
- **Bugfix**: Ensure the CCP default dimensions are adjusted to CCPv2 defaults
- **Feature:** Add block "Set Agent Status By Name on Connect."

## 5.0 August 2020

- **This release has new features and updates:** Please test and validate version 5.0 in your Salesforce sandbox before upgrading this in production.
- **CTI Flows:** CTI Flows replace Lightning CTI Extensions in allowing customers to build their agent for Lightning and Classic via a drag drop UI. Many of the CTI blocks are similar to the Lightning CTI Extension script API calls and can be mapped similarly. Lightning CTI Extension scripts are NOT automatically migrated to CTI Flows. When upgrading the with existing scripts, it will give you the option to download the existing script for reference before building your CTI Flows. We strongly recommend you validate this install/upgrade in a test environment and fully test the CTI Flows against your previous scripts functionality. Please open a support ticket if there is additional functionality you require from your current scripting implementation.
- **Security Profile improvements:** AC Administrator, AC Agent, and AC Manager permission sets to enforces objects access and fields level (FLS) as per Salesforce security guideline for managed package. To Amazon Connect Objects and fields, user should either one of Amazon Connect permission sets AC Administrator, AC Agent, and AC Manager.
- **Attributes:** Amazon Connect CCP (Contact Control Panel) in Lightning Classic now display an overlay for showing attributes consistently.
- **AWS Secrets Manager** support for storing Salesforce credentials.
- **VPC Support**: ability to place Lambdas in VPC
- **New Salesforce API integration:** Exposed new operations in sfinvokeapi read or create Salesforce records(query queryOne, createChatterPost, createChatterComment, lookup_all, delete)
- **Upgrade:** Amazon Connect Streams API bumped up to version 1.5.
- **Bugfix:** Task creation issue for non connect users - Fixed task trigger apex code, added a validation before security access check for Amazon managed package objects
- **Bugfix:** Contact interaction fixed.
- **Other minor bugfixes and improvements**

## 4.5 April 2020

- **This release has new features and updates:** Please test and validate version 4.5 in your Salesforce sandbox before upgrading this in production.
- **Installation / Configuration:** AC_Administrator permission set has been added to manage CTI Configuration in addition to AC_Manager and AC_Agent. See documentation for further information.
- **API:** Updated support for CCPv2 in Classic/Console. See documentation for Call Center settings.
- **Bugfix:** Updated attribute display to resolve duplicated attributes.
- **Security:** Improved control access at the object-level, the record-level, and at the field level.

## 4.4 March 2020

- **This release has significant new features and updates:** Please test and validate version 4.4 in your Salesforce sandbox before upgrading this in production.
- **Documentation:** Guide has been rewritten and restructured based on feedback.
- **Installation / Configuration:** Improved installation and configuration guide
- **Installation / Configuration:** Added Enhanced Agent Logout functionality to Lightning.
- **API:** Updated to the latest Amazon Connect Streams and Chat libraries
- **API:** Additional extensibility methods provided
- **Setup:** Improved Presence Sync Rule editor
- **Setup:** CTI Adapter validation is performed upon initialization and will inform the user of common misconfigurations.
- **Setup:** Additional CTI Script examples are provided.
- **Setup:** The ability to place the lightning transcript view on Task, Contact Channel, and Contact Channel Analytics object has been added.
- **Bugfix:** Updated allowlisting steps to address login popup issue.
- **Bugfix:** OmniChannel workload data not being usable has been resolved
- **Bugfix:** CTI Attribute issue when processing multiple pieces of contact attribute data has been resolved.
- **Bugfix:** The call transcript now scrolls within a fixed region rather than consuming vertical space.
- **Bugfix:** Finding Task Record in Classic/Console fixed.
- **Security:** The ability to create, update, and delete AC_CtiAdapter, AC_CtiScript, AC_CtiAttribute and AC_PresenceSyncRule records has been removed from the AC_Agent permission set.

## 4.2 December 2019

- **This release has significant new features and updates:** Please test and validate version 4.2 in your Salesforce sandbox before upgrading this in production.
- **Installation / Configuration**: Improved installation and configuration guide
- **API**: Lightning CCP Extension scripts and reference guide
- **Setup**: A default CTI adapter and scripts for click-to-dial, voice contact pop, and chat contact pop are not included in the base installation.
- **Editor**: A more robust script editor is included for use in CTI adapter / script configuration.
- **Bugfix**: SSO issue has been resolved

## 4.1 November 2019

- **This release has significant new features and updates:** Please test and validate version 4.1 in your Salesforce sandbox before upgrading this in production. As we look to simplify documentation, this release introduces a new [**Amazon Connect CTI Adapter v4 for Salesforce Lightning**](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Amazon+Connect+CTI+Adapter+for+Salesforce+Lightning+-+Setup+and+Installation+Guide.pdf) setup and installation guide. Please review this setup guide in detail to see all the latest changes for Lightning CTI Adapter installations.
- **Classic and Console CTI setup guide:** Please use the [**Amazon Connect CTI Adapter v4 for Salesforce Classic**](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Amazon+Connect+CTI+Adapter+for+Salesforce+Classic+-+Setup+and+Installation+Guide.pdf) setup and installation guide for Classic and Console CTI Adapter installations.
- **Amazon Connect Chat and Contact Control Panel (CCP) v2:** support for Amazon Connect chat and integration of CCP v2. CCP v2 is required for Lightning CTI Adapter installations. CCP v1 is still supported for Classic / Console CTI Adapter installations.
- **Historical and Real-Time Reporting:** updated historical metric functionality with additional metrics and dashboards. Added real-time metrics and dashboards. This functionality requires an update of AWS Serverless Lambda functions for Salesforce.
- **Lightning CCP Extensions and configuration:** We have revamped the approach for the Call Center config and have added a new AC CTI Adapters Lighting config page.
- **High Velocity Sales:** CTI Adapter integration supported for Salesforce High Velocity Sales product.
