---
id: 14-medialess
title: Setting up Medialess
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Medialess
The Amazon Connect CTI Adapter enables the operation of a cloud contact center in Salesforce within Virtual Desktop Infrastructure (VDI) environments through the utilization of the Medialess feature. The Medialess feature offers advantages for agents using VDI setups, ensuring that audio is accessible on the agent's local system for an enhanced experience. Enabling Medialess mode configures the Salesforce CCP to operate without media, delivering the necessary data for screen pops, etc. while streaming audio to the local system, dependent on your VDI platform.

### Prerequisites

1. Install Amazon Connect CTI Adapter version v5.16 or higher in your salesforce instance. For more information, see [the guide here](https://amazon-connect.github.io/amazon-connect-salesforce-cti/docs/lightning/notices)

2. Required AC CTI Adapter feature for all VDI Platforms
    1. Log In Salesforce instance

    2. Open the relevant AC CTI Adapter 

    3. In the bottom tabs, select the `Features` section and click `New`.

    4. Set the `AC Feature Name` to be **EnableMedialessPopout**

    5. Set the `Value` to be **Enabled:true**

    6. Ensure that the `Active` checkbox is checked, then hit Save.
