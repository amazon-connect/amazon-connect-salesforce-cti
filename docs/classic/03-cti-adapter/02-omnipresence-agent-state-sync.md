---
id: 02-omnipresence-agent-state-sync
title: Omnipresence Agent State Sync
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Amazon Connect CTI Connector supports the bidirectional synchronization
of Amazon Connect agent states with Salesforce omnichannel presence
states.

<img src={useBaseUrl('/img/classic/image90.png')} />

NOTE: After Salesforce Winter ’22 Release, users need to have View Setup and Configuration OR View DeveloperName permission via a profile or permission set to use this feature. See [New Permission Requirements for DeveloperName Field](https://help.salesforce.com/s/articleView?id=000362829&type=1) for more information.

## Enable Omnichannel

In order to sync your Connect User status with your Omni-Channel agent
status, you must configure Omni-Channel Presence Syncing. This will make
your Omni-Channel presence status match your Amazon Connect Agent Status
and vice versa.

First, we must enable omni-channel. To do this, navigate to "Setup" and
type "omni" into the Quick Find box, then select "Omni-Channel Settings"
from the menu.

Note: Presence Sync is not supported for Salesforce Classic Adapters but it is supported for Salesforce Console Adapters. This feature is not turned on by default.

<img src={useBaseUrl('/img/classic/image91.png')} />

Place a check in the checkbox for "Enable Omni-Channel".

<img src={useBaseUrl('/img/classic/image92.png')} />

## Create Presence Statuses

In this step, we need to add and map Presence Statuses to what is
defined in Amazon Connect under Users -\> Agent Status.

<img src={useBaseUrl('/img/classic/image93.png')} />

Open the Setup in your Salesforce Org and type "presence", then select
"Presence Statuses" from the menu. Click the "New" button and add
statuses to match what is defined in Amazon Connect.

<img src={useBaseUrl('/img/classic/image94.png')} />

Each status is flagged as either Online or Busy. For each status that is
marked as Online, you will need to specify a service channel to
associate the presence status.

<img src={useBaseUrl('/img/classic/image95.png')} />

## Configure Enabled Service Presences Status Access

Next, we need to assign access to these statuses by going to Profiles in
Salesforce Setup, and ensure that the agent will be able to access the
statuses that map to their Amazon Connect statuses.

In the Salesforce Setup, under Manage Users, select Profiles, then
select the user profile to edit. Scroll down the page until you find the
section labeled "Enabled Service Presence Status Access".

<img src={useBaseUrl('/img/classic/image96.png')} />

Click the "Edit" button and on the next page, "Add" presence statuses
you want to have enabled for the user.

<img src={useBaseUrl('/img/classic/image97.png')} />

### Amazon Connect System Statuses

The following Amazon Connect CCP statuses are system statuses that can be used in presence sync.
Please note however that these statuses are restricted and you cannot set the Amazon Connect status
to the below.
- Busy - agent is in a call
- Pending - agent is receiving a request for a queue callback
- PendingBusy - agent is receiving call
- CallingCustomer - agent is calling customer
- AfterCallWork - agent is in the after call work screen

## Configure Presence Status Synchronization Rules

The Amazon Connect Salesforce CTI Adapter provides a rules-based
presence status synchronization system allowing for flexibility in
mapping agent states between Amazon Connect and Salesforce Omnichannel.

Presence synchronization actions may be configured based upon manual
agent state changes (agent goes on break), system agent state changes
(answering a call), omnichannel agent work (agent accepts an email), and
omnichannel workload changes (agent completes an email) as examples.

### Presence Status Configuration Rules

Presence Sync Rules are evaluated based on specific events. The
available events are:

-   **Connect Agent State Change:** The Connect agent's state has
    changed.

-   **Salesforce Agent State Change:** The Salesforce agent's state has
    changed.
    - If a rule is set up with this event and the new state is set to "Offline", this will not trigger Salesforce Agent Logout

-   **Salesforce Agent Logout:** The Salesforce agent has logged out 
    - Logging out of Omnichannel does not automatically log you out of Connect or set CCP to offline. If you want this functionality, you will need to set up a Presence Sync rule.
    - Rules triggered by Salesforce Agent Logout will only work if the rule is set to trigger when Salesforce New Agent Status is equal to the exact value "Offline" (case sensitive without quotes)

-   **Salesforce Work Accepted:** The Salesforce agent has accepted
    work.

-   **Salesforce Workload Changed:** The Salesforce agent's workload has
    changed.

Once the event is triggered, the CTI adapter will evaluate the provided
criteria. The criteria is established by comparing Operand A, using
standard comparator options, against Operand B. Possible options for
Operand A and B are:

-   **Connect Agent New State:** The Connect agent's new state value

-   **Connect Agent Old State:** The Connect agent's old (previous)
    state value

-   **Salesforce Agent New State:** The Salesforce agent's new state
    value

-   **Salesforce Service Channel:** The service channel upon which the
    Salesforce agent has accepted work

-   **Salesforce Previous Workload:** The Salesforce agent's previous
    workload

-   **Salesforce Previous Workload Pct:** The Salesforce agent's
    pervious workload expressed as a percent of configured capacity

-   **Salesforce New Workload:** The Salesforce agent's new workload

-   **Salesforce New Workload Pct:** The Salesforce agent's new workload
    expressed as a percent of configured capacity

-   **Salesforce Configured Capacity:** The Salesforce agent's
    configured capacity

-   **Static Value:** The user may provide a value. For example, a
    custom agent state name or other alphanumeric value. When Static
    Value is selected a "Value" field becomes visible to accept the
    users static value input.

Available comparators are:

-   **Equal to:** Are Operand A and Operand B equal

-   **Not equal to:** Are Operand A and Operand B not equal

-   **Greater than:** Is Operand A greater than Operand B

-   **Greater than or equal to:** Is Operand A greater than or equal to
    Operand B

-   **Less than:** Is Operand A less than Operand B

-   **Less than or equal to:** Is Operand A less than or equal to
    Operand B

<img src={useBaseUrl('/img/classic/image98.png')} />

The configuration setting illustrated in the previous example, are
described below:

-   source -- The triggered event. In this case, an Amazon Connect agent
    state change is the triggering event

-   destination -- The target system on which to execute the action

-   criteria -- The values and comparator that will be evaluated to
    determine whether or not to trigger the action

    -   operandA -- The left side of the criteria statement

    -   operandB -- The right side of the criteria statement

    -   comparator -- The comparison operator used to evaluate the
        criteria statement

-   state -- The target agent state of the destination system

Example rule:

<img src={useBaseUrl('/img/classic/image99.png')} />

Summary: This rule is triggered when the Connect agent's state is
changed (Source). If their state is changed to the static value (Operand
B) "Lunch" (Operand B Value), then the Salesforce Agent's state
(Destination) is set to Lunch (Value).
