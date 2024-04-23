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

### Set Up for CITRIX VDI Platform

CTI Adapter enables agents to leverage Citrix remote desktop applications to offload audio processing to their local device and to automatically redirect audio to CTI Aadpter opened in remote application. In order to know about audio improvement in CCP using VDI, refer to [Amazon Connect audio optimization for Citrix cloud desktops](https://docs.aws.amazon.com/connect/latest/adminguide/using-ccp-vdi-citrix-step-by-step.html). Additionally, refer to [System Requirements](https://docs.aws.amazon.com/connect/latest/adminguide/using-ccp-vdi-citrix-step-by-step.html#using-ccp-vdi-citrix-step-by-step-requirements) for using the Citrix Unitied Communications SDK with Amazon Connect

1. Log in to Salesforce instance 

2. Open the relevant AC CTI Adapter.

    a. In the bottom tabs, select the `Features` section and click `New`.

5. Set the `AC Feature Name` to be VDIPlatform

6. Set the `Value` to be `Name:CITRIX`

    a. Ensure that the `Active` checkbox is checked, then hit __Save__.

8. Refresh the browser tab and launch the SoftPhone to log in to CCP.

9. Verify the configuration by initiating a Voice contact. 

<div class="grey-box"> Note that once this feature is active in CTI Adapter, the CCP can be only used in a CITRIX environment, otherwise it will show an error as shown below. 

<img src={useBaseUrl('/img/lightning/ccp-in-vdi-in-local.png')} />
</div> 
<div class="grey-box">
  The Device Settings for the CCP which is opened in a Citrix environment, cannot be managed directly from the CCP level itself. In order to change the device settings for the CCP, for example changing the device input device, it has to be done from the OS level settings</div> 
<div class="grey-box">
  A VDI Platform should be set only if the Medialess settings are disabled. Therefore, if you want to set any VDI Platfrom, then disable Medialess from CTI Adapter. Similarly, if you want to use Medialess Settings, then first disable VDI Platfrom Settings from Features </div> 


### Set Up for Other VDI Platforms

1. Login into your VDI environment.
2. Log In Salesforce instance 
3. Open the relevant AC CTI Adapter.
4. In the details section, activate the "Medialess" option by marking the checkbox.
5. Refresh the browser. Launch the SoftPhone and log in to CCP.
6. Upon signing in, click the Toggle Embedded CCP button located within the Softphone's CCP. Close all CCP instances except the one within the Salesforce CTI Adapter. Ensure that your virtual environment mirrors the configuration shown in the following image.

    * <img src={useBaseUrl('/img/lightning/vdimedialess1.png')} />

7. Go to your Local System and login to Amazon Connect (e.g. login in connect https://youraccount.my.connect.aws/) and open Native CCP by clicking on Contact Control Panel. 
    
    * <img src={useBaseUrl('/img/lightning/vdimedialess2.png')} /> 

8. Verify the configuration by initiating a Voice contact. All media, including audio, will be transmitted through the Native CCP on your local desktop. The CCP within the CTI Adapter of the Virtual Environment can be employed for contact management.

9. Important: Ensure that both CCP instances are open when handling contacts. One CCP should be within the SoftPhone in the Salesforce CTI Adapter of the virtual environment, and the second CCP should be the native CCP on your local system.
