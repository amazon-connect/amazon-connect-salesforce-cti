---
id: 06-set-agent-status-on-session-end
title: Set Agent Status on Session End
---

import useBaseUrl from "@docusaurus/useBaseUrl";

This feature automatically sets the status of the agent to "Offline" –– or to any status you choose –– when the agent closes all his Salesforce tabs. **Disclaimer:** This feature will popup a window to perform the logout functionality. This window must stay open for the feature to work, but it does not have to be visible (i.e. can be put in the background).

You can configure this feature by heading to the feature panel on your CTI Adapter and clicking new.

<img src={useBaseUrl('/img/lightning/01-new-feature-button.png')} />

Then for "AC Feature Name", enter: `SetAgentStatusOnSessionEnd`

<img src={useBaseUrl('/img/lightning/02-new-feature.png')} />

You can optionally specify which status the agents should be changed to when they end the session. By default, this is "Offline," but you can configure it using the `Status` setting of the feature.

<img src={useBaseUrl('/img/lightning/03-custom-status.png')} />

When turned on, the feature will apply to all agents. If you'd rather have it apply to a small subset, you can configure `IfProfileNameIncludes` setting.

<img src={useBaseUrl('/img/lightning/04-selective-profile-name.png')} />

Now only the agents that have "On-Call" in their Connect routing profile name will be shown as "Offline" when they end their session. This setting can accept multiple, comma-separated profile names, as well.

If you would also like to control this feature based on the current state of the agent, you can add the `IfCurrentAgentState` tag to the feature, and assign a comma seperated list of statuses that you would like the feature to execute on.

<img src={useBaseUrl('/img/lightning/05-selective-status-name.png')} />

From this example, only agents who have a current status of "Available" or "At Lunch" will be moved to a state of "Offline" when they end their session.

The example above also utilitzes the `SessionEndTimer` feature as well. This delays the state change for the desired amount of time (default of 5 seconds). In the example above it sets the delay to 20 seconds. This feature is useful to account for agent's with slow internet refreshing their page - with 5 seconds, it may change the state of the agent before the refresh loads all of the assets again, while 20 seconds could be enough time for the assets to load, and stop the state change.

You can also have the Status be set to `Logout`, which will append the functionality of the logout feature mentioned [here](/docs/lightning/installation/01-installing-package-from-appexchange) - logging the agent out of the CCP upon session ending. It will not log the user out if a call is ongoing.

When your agents log back in, they will be shown as "Available" by default. If you'd like to control which status to set your agents, you can configure it with `InitialAgentState` setting.

Note that this feature does not work with Salesforce Pop-Out utilities. This means that it won't be working if CCP is popped out from utility bar. This is because the pop-out window is a different window managed by Salesforce and we are not able to track any session on that window.
