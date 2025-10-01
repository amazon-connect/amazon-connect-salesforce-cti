---
id: 17-mini-lightning-adapter
title: Mini Lightning Adapter
---
import useBaseUrl from "@docusaurus/useBaseUrl";

# Setting up the Mini Lightning Adapter

**Note:** This feature is for agents using the native CCP window from Amazon Connect for your instance and opting not to use the CTI Adapter Embedded CCP for SoftPhone.

---

### Steps

1. Go to **Setup > Call Center > ACLightningAdapter**
    1. Update the **CTI Adapter URL** to use `AC_LightningMiniAdapter` instead of `AC_LightningAdapter`
        - Example:  
          `/apex/AC_LightningAdapter?ccpVersion=2` → `/apex/AC_LightningMiniAdapter?ccpVersion=2`
    2. Update the **Softphone Height** to `130`.

2. Go to the **Service Console** and open the **AC CTI Adapter** tab.  

3. Open **ACLightningAdapter** and check/enable **‘Medialess’** under *Details*.  

4. When opening the Phone utility item, you should see the adapter as below:  
    - <img src={useBaseUrl('/img/lightning/MiniLightningAdapter1.png')} />

5. *(Optional)* Setting up a message in the Mini Adapter:
    1. Under **Features** on `ACLightningAdapter`, click **New**.
    2. Set the **AC Feature Name** to `MiniAdapterMessage`.
    3. For **Value**, enter a message you want displayed on the mini adapter above the agent status.  
       - Example: `Use the external window for call control`
    4. **Note:** This message should be a static string value (not something you plan to change often) since it loads into the mini adapter’s UI on page load.
