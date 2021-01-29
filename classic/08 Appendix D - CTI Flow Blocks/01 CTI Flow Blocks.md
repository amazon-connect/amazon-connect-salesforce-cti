<h1 class="toc">Appendix D - CTI Flow Blocks</h1>

### If-else

Change the flow of your script depending on value of fields you fetch or
store. This is a simple \"if-else\" utility for your flow.

### HTTP Request

Make an HTTP request.

### Get Property

Fetches a property from the local data store. You can access a property
you have retrieved from the local store by referring to the return value
of this block.

### Get All Properties

Returns all stored properties.

### Format Phone Number

Formats a phone number for a country code.

### Format Phone Number (E164)

Formats a phone number for a country code in E164 format.

### Format a Date object

Returns a formatted date.

### Is Truthy?

This is a utility to branch your flow depending on the truthiness of a
value.

### Set Property

Assigns a value to a property in the local data store.

### Log to Console

Sends a static or dynamic value from an action to a logger.

### Show Modal

The command to open modal.

### Enable Click To Dial?

The query to determine whether Click to Dial should be enabled.

### Enable Click To Dial

The command to enable Click to Dial.

### Disable Click To Dial

The command to disable Click to Dial.

### Get App View Info

The command to get App View information.

### Get Softphone Layout

The query to get softphone layout.

### Get Agent Workload on Salesforce

Returns the agent\'s current workload.

### Complete High Velocity Sales Work With Task Saved

This methods allow your CTI implementation to communicate with High
Velocity Sales (HVS) to handle HVS work.

### Refresh View

The command to refresh the view.

### Show Softphone Panel

The command to show softphone panel.

### Hide Softphone Panel

The command to hide softphone panel.

### Set Softphone Panel Height

The command to set the height of softphone panel.

### Set Softphone Panel Width

The command to set the width of softphone panel.

### Screenpop Object

The command to open a screenpop with information from object.

### Screenpop Url

The command to screenpop a url in a new browser tab or browser window.

### Screenpop Object Home

The command to screenpop to an object\'s home page.

### Screenpop List

The command to screenpop a list view.

### Screenpop Search

The command to screenpop search results based upon the search input. Not
to be consued with \"Search And Screenpop.\"

### Screenpop New Record

The command to screenpop to a new record of the specified type with
specified default field values.

### Search And Screenpop

This command searches objects specified in the softphone layout for a
given string. Returns search results and screen pops any matching
records. Not to be consued with \"Screenpop Search.\"

### Run Apex

The command to run an apex function.

### Get Agent State from Salesforce

The command to get an agent\'s state.

### Set Agent State on Salesforce

The command to set an agent\'s presence state on Salesforce.

### Login Agent on Salesforce

The command to login an agent on Salesforce.

### Logout Agent on Salesforce

The command to logout an agent on Salesforce.

### Save (or Create) a Record

The command to save or create a Salesforce object.

### Create a Task

The command to create a Task. (The Subject of the task will be a string
made up of upto 3 field values.)

### Is Contact \"Do Not Call\"?

The query to check if the Contact requested not to be called.

### Dial Number

The command to dial a phone number or to conference to an endpoint.

### Mute Agent

The command to mute the agent.

### Unmute Agent

The command to unmute the agent.

### Get Agent Status from Connect

The command to get the current presence status of the agent from
Connect.

### Set Agent Status on Connect

The command to set the current presence status of the agent on Connect.

### Set Agent Status By Name on Connect

The command to set the current presence status of the agent on Connect
by name of the state.

### Set Agent as Available on Connect

The command to set the current state of the agent to \"Available.\"

### Get Quick Connection List

Gets the list of quick connects available to the current agent

### Get Transfer Connection List

Gets the list of quick connects available to the current agent.

### Get Endpoint by Phone Number

Generates and returns an endpoint for a provided phone number.

### Get Available Agent States

Gets all of the available agent states including custom states.

### Get Agent Name

Returns the agent\'s user friendly display name for the agent.

### Get Agent Extension

Returns the phone number that is dialed by Amazon Connect to connect
calls to the agent for incoming and outgoing calls, if softphone is not
enabled.

### Get Agent Deskphone Number

Returns the phone number that is dialed by Amazon Connect to connect
calls to the agent for incoming and outgoing calls, if softphone is not
enabled.

### Is Agent Softphone Enabled?

Checks if agent softphone is enabled. Branches in different directions
if it is or not.

### Change Agent to Softphone

Changes the current agent to softphone mode.

### Change Agent to Deskphone

Changes the current agent to desktop phone mode with the specified phone
number.

### Get Agent Configuration

Returns the phone number that is dialed by Amazon Connect to connect
calls to the agent for incoming and outgoing calls, if softphone is not
enabled.

### Get Agent Dialable Countries

Returns the list of dialable countries for the current agent.

### Create Task Contact

The command to create a task contact that is sent to the provided quick
connect endpoint. The quick connect must be available to any queue the
agent has access too.

### Get Contact Attribute

The command to get value of an attribute from the contact in the current
session.

### Is Voice Contact?

The command to determine if the contact is a voice contact.

### Is Chat Contact?

The command to determine if the contact is a chat contact.

### Is Task Contact?

The command to determine if the contact is an amazon connect task contact.

### Is Contact Inbound?

The command to determine if the contact is inbound.

### Is Contact Transfer?

The command to determine if the contact is transferred.

### Is Callback?

The command to determine if the contact is a queue callback.

### Get Contact Properties

The command to get properties of a contact.

### Get Customer Phone Number

The command to get customer phone number of a contact.

### Get Contact Interaction Metadata

The command to get metadata about a contact interaction.

### Pop Task Contact's Reference Urls

The command to pop any reference urls if the contact is a task.
Returns the number of urls popped.

### Query value

The query to execute an arbitrary SOQL statement and returns the
results.

### Open Salesforce Primary Tab

Opens a new primary tab to display the content of the specified URL.

### Open Salesforce Sub Tab

Opens a new subtab (within a primary tab) that displays the content of a
specified URL.

### Get Focused Primary Tab Object Id

Returns the object ID of the primary tab on which the browser is
focused.

### Get Focused Subtab Object Id

Returns the object ID of the subtab on which the browser is focused.

### Call jQuery Method

Perform a method call on a jQuery selection with your arguments.

### Replace String

Perform a .replace() method on an input string.

### Text Starts With Value

Checks whether a text input starts with one of the values.

### Text Ends With Value

Checks whether a text input ends with one of the values.

### Join Strings

Concatenates 2 values into a string.

### SOQL Query

The query to execute an arbitrary SOQL statement and returns the
results.

### Multiply

Multiply two numbers.

### Divide

Divide two numbers.

### Get Tab Object Map

Returns a map of all visibble primary tabs and their associated objects (if available).

### Close Salesforce Tab

Closes the Salesforce with a given id.

### Delay

Delays execution for a period of time. (Keep in mind that your flow may be stopped if it runs longer than the maximum allowed execution window of 60 seconds.)

### Get Primary Tab Ids

Returns all of the IDs of open primary tabs.

### Get Tabs With Matching Url

Returns the ids of the primary tabs with the url matching a provided string.

### Length

Returns the length of a value.

### Slice

Returns the slice of a value.

### Cast a Value to a Type

Cast an input value to a Javascript type, such as Number or String.

### Get CCP Logs

The command to get the logs of agent from Connect.

### Clear All Properties

Clears all stored properties.

### Unset Property

Removes the value assigned to a property in the local data store.

### Show Attributes

This command displays the contact attributes in the CCP overlay.

### Is Task Contact?

Check if the contact is a task

### Create Task Contact

Creating a new task contact with certain inputs.

### Pop Task Contact's Reference Urls

Pop any reference urls that are related to the task contact
