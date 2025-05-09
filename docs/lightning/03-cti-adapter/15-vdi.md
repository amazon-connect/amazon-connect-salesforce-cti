---
id: 15-vdi
title: Setting up VDI
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Setting Up Audio Optimized Virtual Desktop Infrastructures (VDI)

The CTI Adapter enables agents to leverage Citrix and Amazon Workspaces remote desktop applications to offload audio processing to their local device and to automatically redirect audio to CTI Adapter opened in remote application. 

#### Audio Optimization

- In order to know about audio improvement in CCP using Citrix VDI, refer to [Amazon Connect audio optimization for Citrix cloud desktops](https://docs.aws.amazon.com/connect/latest/adminguide/using-ccp-vdi-citrix-step-by-step.html). Additionally, refer to [System Requirements](https://docs.aws.amazon.com/connect/latest/adminguide/using-ccp-vdi-citrix-step-by-step.html#using-ccp-vdi-citrix-step-by-step-requirements) for using the Citrix United Communications SDK with Amazon Connect
 
- To learn more about how to optimize audio in Amazon Workspaces, refer to [AWS WorkSpace audio optimization support](https://docs.aws.amazon.com/workspaces/latest/userguide/amazon_connect_support.html). Note that currently we only support integration with WSP Windows workspaces. Read [here](https://docs.aws.amazon.com/workspaces/latest/adminguide/group_policy.html) to learn more.

#### CTI Adapter Configuration for VDI

Once the Citrix Workspace is ready to use, make the below changes in CTI Adapter which can be used in the workspace. 

1. Log in to Salesforce instance 

2. Open the relevant AC CTI Adapter.

    a. In the bottom tabs, select the `Features` section and click `New`.

5. Set the `AC Feature Name` to be VDIPlatform

6. Set the `Value` to be `Name:CITRIX` or `Name:AWS_WORKSPACE`.

    a. Ensure that the `Active` checkbox is checked, then hit __Save__.

8. Refresh the browser tab and launch the SoftPhone to log in to CCP.

9. Verify the configuration by initiating a Voice contact. 

#### Important Notes for Citrix Users

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
