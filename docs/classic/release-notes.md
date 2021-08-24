---
id: release-notes
title: Release Notes
---

Important: when upgrading the CTI Adapter, please make sure that the Salesforce Lambdas are also updated to the newest version.

## 5.16 August 2021

- **Feature:** Added a `callIncomingDuration` field to the `Contact Interaction Metadata` CTI Flow block, which captures the time between the call coming into an agent and it being accepted/missed/declined.
- **Feature:** Moved the medialess popout page to be an optional feature. Learn how to enabled it [here](/docs/lightning/03-cti-adapter/01-cti-adapter-configuration#medialess-popout-ccp)
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

When installing v5.15, please **confirm that the application was installed for admins only** (see [installation](/docs/classic/installation/01-installation) for more details). If you did this by accident, then you will have to [manually edit the profiles](/docs/classic/installation/06-cti-adapter-installation-troubleshooting#how-to-remove-permissions-to-visualforce-pages-apex-classes-for-a-desired-profile) to remove the permissions to the objects and pages created by the app.

- **Feature: Guided Setup** The Guided Setup feature helps make the setup process easier. See [Guided Setup](/docs/classic/installation/02-guided-setup) for more details.
- **Feature: Chat Widget Integration for SalesForce Experience Cloud(formerly Community Cloud)** Added VisualForce Page component that allows you to add Amazon Connect Chat Widget in your Salesforce Experience Cloud Site.
- **Enhancement:** Changed the default audio recording component in the Contact Channel Analytics for easier setup. See [Call Recording Playback](/docs/classic/cti-adapter/04-call-recording-playback) for more details. 
- **Enhancement:** Created the ExecuteAwsService service for simpler communication between Salesforce and AWS. **WARNING:** If you are using Contact Lens for audio recording you *must* replace your existing AwsGenerateAudioRecordingUrl named credential with with the ExecuteAwsService named credential. See [here](/docs/classic/installation/01-installation#setting-up-the-executeawsservice-named-credential) for more details.
- **Bug Fix:** Fixed an issue with the lambda package that caused Contact Lens Call Recording Streaming to be broken for redacted calls.
- **Bug Fix:** Fixed an issue that caused the "Clear All Properties" CTI Flow Block to clear properties important to the CTI adpater working.
- **Bug Fix:** Added the `DISCONNECT` field to the `Initiation Method` field in Contact Trace Records.

## 5.14 June 2021

- **Bugfix:** The issue that caused an Attribute label to not display properly in the attributes panel has been fixed.
- **Bugfix:** The issue that caused AC Queue Metrics tab's name showing blank has been fixed.
- **Bugfix:** The issue that caused the Recording Panel button to fail when a url is used for connect instance alias has been fixed.
- **Enhancement:** We now make it possible for voicemail drops to work with queue callbacks.
- **Enhancement:** You can now configure the CT Action Recording Panel's initial state using contact attributes. If you're recording your call, make sure to add an attribute named `RECORDING_STARTED` whose value is `true` in your Contact Flow.
- **Enhancement:** We have added `IfCurrentAgentState` tag to `SetAgentStatusOnSessionEnd` feature, which allows customers to condition this feature on the Agent's current state.

## 5.13 April 2021

- **Feature: CTI Actions - programmable buttons within the CCP overlay**

In this release, we have added a feature called CTI Action which are programmable buttons for your CTI Flows. Each CTI Action is a button that can be programmed to trigger a CTI Flows whose source value is "CTI Action." In addition, CTI Actions can be programmed to ask the agent for additional information via a data entry form. You can use the agent's entry in your CTI Flow with the help of "Get Payload" block. This is a great way to ask your agents to enter ad-hoc data prior to running the CTI Flow to provide additional information as part of a workflow to automate case creation, or start a customer refund process. **If you are upgrading from a previous version of the CTI Adapter, please be sure to review the [additional setup steps required](/docs/classic/cti-adapter/10-cti-actions#upgrading-from-an-earlier-version) for CTI Actions.**

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

- **Feature**: Added custom setting which will allow customers to enable and disable non-essential triggers (They are disabled by default now). [More details in the troubleshooting section](/docs/classic/installation/06-cti-adapter-installation-troubleshooting)
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

### 5.3 September 2020

- **Bugfix**: Fix the issue that caused ACSFCCP_CallRecordingTask component to not work.

### 5.2 September 2020

- **Bugfix**: Fix the issue that prevented users from creating a new record using CTI Flows in Classic.
- **Bugfix**: Fix the issue that caused the contact channel analytics to not get updated at the end of a call.
- **Bugfix**: Fix the contact channel analytics recording view.
- **Feature**: Add a CTI block called "Get Chat Message."
- **Feature**: Add a CTI block called "SOQL Query." This block executes an arbitrary SOQL statement and returns the results.

### 5.1 Late August 2020

- **Bugfix**: Ensure "Get App View" CTI Flow block doesn't break the sidebar
- **Enhancement**: Add "queueARN" field to "Dial Number" CTI Flow block
- **Bugfix**: Ensure some required CTI Flow block fields are not shown as "optional"
- **Bugfix**: Ensure "Save (or Create) a Record" block works as expected
- **Bugfix**: Fix the validation error on "CallDurationInSeconds" field in "Create a Task" block
- **Bugfix**: Fix phantom scrollbar on Windows machines
- **Bugfix**: Fix issue where copying contact attributes to clipboard doesn't work
- **Bugfix**: Fix issue where "saveLog" CTI Flow block throws an error
- **Bugfix**: Fix issue with onOffline CTI Flow event not firing
- **Bugfix**: Fix various omnichannel presence sync bugs
- **Bugfix**: Ensure the CCP default dimensions are adjusted to CCPv2 defaults
- **Feature:** Add block "Set Agent Status By Name on Connect."

### 5.0 August 2020

- **This release has new features and updates:** Please test and validate version 5.0 in your Salesforce sandbox before upgrading this in production.
- **CTI Flows:** CTI Flows replace Lightning CTI Extensions in allowing customers to build their agent workflows for Lightning and Classic via a drag and drop UI. Many of the CTI blocks are similar to the Lightning CTI Extension script API calls and can be mapped similarly. Lightning CTI Extension scripts are NOT automatically migrated to CTI Flows. When upgrading the package with existing scripts, it will give you the option to download the existing script for reference before building your CTI Flows. We strongly recommend you validate this install/upgrade in a test environment and fully test the CTI Flows against your previous scripts functionality. Please open a support ticket if there is additional functionality you require from your current scripting implementation.
- **Security Profile improvements:** Added AC Administrator, AC Agent, and AC Manager permission sets to enforces objects access and fields level security (FLS) as per Salesforce security guideline for managed package. To access Amazon Connect Objects and fields, user should either one of Amazon Connect permission sets AC Administrator, AC Agent, and AC Manager.
- **Attributes:** Amazon Connect CCP (Contact Control Panel) in Lightning and Classic now display an overlay for showing attributes consistently.
- **AWS Secrets Manager** support for storing Salesforce credentials.
- **VPC Support**: ability to place Lambdas in VPC
- **New Salesforce API integration:** Exposed new operations in sfinvokeapi to read or create Salesforce records(query, queryOne, createChatterPost, createChatterComment, lookup_all, delete)
- **Upgrade:** Amazon Connect Streams API bumped up to version 1.5.
- **Bugfix:** Task creation issue for non-connect users - Fixed task trigger apex code, added a validation before evaluate security access check for Amazon Connect managed package objects
- **Bugfix:** Contact interaction duration fixed.
- **Other minor bugfixes and improvements**

### 4.5 April 2020

- **This release has new features and updates:** Please test and validate version 4.5 in your Salesforce sandbox before upgrading this in production.
- **Installation / Configuration:** AC_Administrator role has been added to manage CTI Configuration in addition to AC_Manager and AC_Agent. See documentation for further information.
- **API:** Updated support for CCPv2 in Classic/Console. See documentation for Call Center settings.
- **Bugfix:** Updated attribute display to resolve duplicated attributes.
- **Security:** Improved enforced Salesforce sharing model (record and field level) support.

### 4.4 March 2020

- **This release has significant new features and updates:** Please test and validate version 4.3 in your Salesforce sandbox before upgrading this in production.
- **Documentation:** Guide has been rewritten and restructured based on feedback.
- **Installation / Configuration:** Improved installation and configuration guide
- **Installation / Configuration:** Added Enhanced Agent Logout functionality to Lightning.
- **API:** Updated to the latest Amazon Connect Streams and Chat libraries
- **API:** Additional extensibility methods provided
- **Setup:** Improved Presence Sync Rule editor
- **Setup:** CTI Adapter validation is performed upon initialization and will inform the user of common misconfigurations.
- **Setup:** Additional CTI Script examples are provided.
- **Setup:** The ability to place the lightning transcript view on Task, Contact Channel, and Contact Channel Analytics object has been added.
- **Bugfix:** OmniChannel workload related data not being usable has been resolved.
- **Bugfix:** CTI Attribute issue when processing multiple pieces of contact attribute data has been resolved.
- **Bugfix:** The call transcript now scrolls within a fixed region rather than consuming vertical space.
- **Bugfix:** Finding Task Record in Classic/Console fixed.
- **Security:** The ability to create, update, and delete AC_CtiAdapter, AC_CtiScript, AC_CtiAttribute and AC_PresenceSyncRule records has been removed from the AC_Agent permission set.

### 4.2 December 2019

- **This release has significant new features and updates:** Please test and validate version 4.2 in your Salesforce sandbox before upgrading this in production.
- **Installation / Configuration**: Improved installation and configuration guide
- **API**: Lightning CCP Extension scripts and reference guide
- **Setup**: A default CTI adapter and scripts for click-to-dial, voice contact pop, and chat contact pop are not included in the base installation.
- **Editor**: A more robust script editor is included for use in CTI adapter / script configuration.
- **Bugfix**: SSO issue has been resolved

### 4.1 November 2019

- **This release has significant new features and updates:** Please test and validate version 4.0 in your Salesforce sandbox before upgrading this in production. As we look to simplify documentation, this release introduces a new [**Amazon Connect CTI Adapter v4 for Salesforce Lightning**](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Amazon+Connect+CTI+Adapter+for+Salesforce+Lightning+-+Setup+and+Installation+Guide.pdf) setup and installation guide. Please review this setup guide in detail to see all the latest changes for Lightning CTI Adapter installations.
- **Classic and Console CTI setup guide:** Please use the [**Amazon Connect CTI Adapter v4 for Salesforce Classic**](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Amazon+Connect+CTI+Adapter+for+Salesforce+Classic+-+Setup+and+Installation+Guide.pdf) setup and installation guide for Classic and Console CTI Adapter installations.
- **Amazon Connect Chat and Contact Control Panel (CCP) v2:** support for Amazon Connect chat and integration of CCP v2. CCP v2 is required for Lightning CTI Adapter installations. CCP v1 is still supported for Classic / Console CTI Adapter installations.
- **Historical and Real-Time Reporting:** updated historical metric functionality with additional metrics and dashboards. Added real-time metrics and dashboards. This functionality requires an update of AWS Serverless Lambda functions for Salesforce.
- **Lightning CCP Extensions and configuration:** We have revamped the approach for the Call Center config and have added a new AC CTI Adapters Lighting config page.
- **High Velocity Sales:** CTI Adapter integration supported for Salesforce High Velocity Sales product.

### 3.11 August 2019

- Added support for Salesforce platform encryption
- Fixed issue with logout action not re-rendering the sign-in button
- Fixed documentation issue regarding presence sync sources
- Fixed documentation issue regarding recorded conversations security configuration
- Updated documentation for presence sync rule configuration

### 3.10 July 2019

- Added support for enabling / disabling softphone popout
- Added support for previousWorkloadPct and newWorkloadPct operands in presence sync rules
- Fixed issue with presence sync rules loading

### 3.9 May 2019

- Added support for Opportunities for Task association
- Fixed issue with presence sync rules loading
- Fixed issue with state setting when no presence rules defined
- Fixed issue with Task pop in specific config scenarios

### 3.87 May 2019

- NOTE: The "mini" Task page has been deprecated in this release of the adapter. Users requiring custom functionality may use the page and controller code included in this document as a starting point for a custom Task page of their design.
- Added rules-based configuration of agent presence state between Amazon Connect and Salesforce
- Added enhanced contact attribute display and configuration including clickable hyperlinks, key-value display options, and key-value formatting
- Added option to enable/disable automatic call duration updating on the Task object
- Added functionality to directly pop associated record on click-to-dial avoiding search and pop behavior
- Fixed issue with callback Task pops not occurring in some cases

### 3.7 May 2019

- Unpublished version

### 3.6 April 2019

- NOTE: Automatic association of accounts, contacts, leads, or contacts to call activity (Task) records based upon tab navigation has been deprecated. Automatic association of accounts, contact, leads or contacts to call activity (Task) records when a single match is made via ANI lookup OR by contact attribute is supported.
- NOTE: The "mini" Task page will be deprecated in future releases. The default setting is now "DEFAULT_TASK_LAYOUT".
- NOTE: Automatic pop of Tasks in an object's (Account, Contact, Lead, Case) subtab is only supported with the object (Account, Contact, Lead, Case) is open in a primary tab.
- Added support for queued callback calls
- Added support for specifying call types for which to create Task objects
- Added support for enabling / disabling automatic call duration updates of call activity (Task) objects.
- Fixed issue with secondary click-to-dial in console mode
- Fixed issue with Task pop occurring during call connecting when set to start of call
- Fixed issue with call context data remaining after a call has ended
- Fixed issue with contact attributes being displayed after a call has ended or has been missed
- Fixed issue with click to dial with ani match to multiple Salesforce objects

### 3.1 March 2019

- Added ability to specify DEFAULT_TASK_LAYOUT for the Call Activity Page setting
- Added ability to specify static values used during initial task creation
- Added support for Standard Lightning navigation
- Added support for secondary click-to-dial in Console mode
- Fixed issue with primary tab closing upon call activity (Task) save
- Fixed issue with Case handling and Task association

### 3.0 February 2019

- Removed requirement for Omni-channel to be enabled to perform installation
- Added ability to specify custom ringtone
- Added ability to enable or disable the automatic creation of task (call activity) objects
- Added ability to specify a page to select creation of Lead or Contact when an object with matching ANI is not found
- Added ability specify task (call activity) object pop at the start of call, end of call, or to disable pop
- Added ability to edit task (call activity) subject
- Added automatic setting of whoId and whatId on task (call activity) objects
- Added ability to specify a custom task pop page
- Added ability to include agent friendly name when creating task (call activity) objects for calls delivered to agent queues
- Added ability to add third call participant via click to dial
- Added call attributes display in classic mode
- Fixed call attributes display being persistent when no attributes are defined
- Added ability for automatic task creation on outbound calls
- Upgraded API to amazon connect streams 1.3
- Added support for Lightning Flow Setup

# Further Reading

For additional information, see the following:

- Amazon Connect CTI Adapter for Salesforce:
  <https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EJH4yUAH>

- Amazon Connect User Guide:
  <https://docs.aws.amazon.com/connect/latest/userguide/using-amazon-connect.html>

- Amazon Connect Admin Guide:
  <https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html>

- Amazon Connect API Reference:
  <https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html>

- Amazon Connect Release Notes:
  <https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-release-notes.html>

- Amazon Connect FAQ:
  <https://aws.amazon.com/connect/faqs>
