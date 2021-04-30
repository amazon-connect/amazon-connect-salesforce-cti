---
id: 06-set-agent-status-on-session-end
title: Set Agent Status on Session End
---

This feature automatically sets the status of the agent to "Offline" –– or to any status you choose –– when the agent closes all his Salesforce tabs. **Disclaimer:** This feature will popup a window to perform the logout functionality. This window must stay open for the feature to work, but it does not have to be visible (i.e. can be put in the background).

You can configure this feature by heading to the feature panel on your CTI Adapter and clicking new.

<img src="/img/lightning/01-new-feature-button.png" />

Then for "AC Feature Name", enter: `SetAgentStatusOnSessionEnd`

<img src="/img/lightning/02-new-feature.png" />

You can optionally specify which status the agents should be changed to when they end the session. By default, this is "Offline," but you can configure it using the `Status` setting of the feature.

<img src="/img/lightning/03-custom-status.png" />

When turned on, the feature will apply to all agents. If you'd rather have it apply to a small subset, you can configure `IfProfileNameIncludes` setting.

<img src="/img/lightning/04-selective-profile-name.png" />

Now only the agents that have "On-Call" in their Connect routing profile name will be shown as "Offline" when they end their session. This setting can accept multiple, comma-separated profile names, as well.

You can also have the Status be set to `Logout`, which will append the functionality of the logout feature mentioned [here](/docs/lightning/02-installation/01-installing-package-from-appexchange) - logging the agent out of the CCP upon session ending. It will not log the user out if a call is ongoing.

When your agents log back in, they will be shown as "Available" by default. If you'd like to control which status to set your agents, you can configure it with `InitialAgentState` setting.

Note that this feature does not work with Salesforce Pop-Out utilities. This means that it won't be working if CCP is popped out from utility bar. This is because the pop-out window is a different window managed by Salesforce and we are not able to track any session on that window.
