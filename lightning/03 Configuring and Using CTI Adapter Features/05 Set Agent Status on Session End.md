# Set Agent Status on Session End

This feature automatically sets the status of the agent to "Offline" –– or to any status you choose –– when the agent closes all his Salesforce tabs.

You can configure this feature by heading to the feature panel on your CTI Adapter and clicking new.

<img src="../media/01-new-feature-button.png" />

Then for "AC Feature Name", enter: `SetAgentStatusOnSessionEnd`

<img src="../media/02-new-feature.png" />

You can optionally specify which status the agents should be changed to when they end the session. By default, this is "Offline," but you can configure it using the `Status` setting of the feature.

<img src="../media/03-custom-status.png" />

When turned on, the feature will apply to all agents. If you'd rather have it apply to a small subset, you can configure `IfProfileNameIncludes` setting.

<img src="../media/04-selective-profile-name.png" />

Now only the agents that have "On-Call" in their Connect routing profile name will be shown as "Offline" when they end their session. Note that this value does not need to be an exact match to the profile name. As long as there is an "On-Call" in the profile name, it will work. This allows you to easily configure it for multiple profiles.
