---
id: 10-cti-actions
title: CTI Actions
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Customers can now extend their Contact Control Panel (CCP) with customizable buttons called CTI Actions. These buttons can be configured in Salesforce and used to simplify common agent actions. For example, you can add a button that transfers calls to a manager, start and stop recordings, automate case creation, or start a customer refund process. CTI Actions are configured in the CTI Adapter’s Actions Admin panel to execute [CTI Flows](https://aws.amazon.com/blogs/contact-center/automate-agent-workflows-with-salesforce-cti-adapter/) which are process blocks that enable you to easily design agent workflows within our Salesforce integration.

You can configure a CTI Action in the CCP Element Editor page.

<img src={useBaseUrl('/img/classic/ccp-element-editor-02.png')} />

Make sure that you have created a CTI Flow and it uses the source "CTI Action." Only these CTI Flows will be displayed in the dropdown field.

You can optionally specify a payload to pass to the CTI Flow. This allows your agents to enter additional data about the customer or information about the call to pass into the CTI Flow. The CCP Element Editor gives you the ability to add input fields into your form.

<img src={useBaseUrl('/img/classic/ccp-element-editor-03.png')} />

<img src={useBaseUrl('/img/classic/ccp-element-editor-04.png')} />

### CCP Overlay

The **Actions** panel in the CCP overlay drawer displays the CTI Action buttons where your agents have easy access to them as they are interacting with customers.

<img src={useBaseUrl('/img/classic/ccp-overlay-01.png')} />

If a CTI Action requires additional input by the agent, its name will be followed by an arrow and when the agent clicks on this button, it will open the configured form. Otherwise, it will be shown with an "Execute" button next to its name.

<img src={useBaseUrl('/img/classic/ccp-overlay-02-detail.png')} />

### Receiving Data from CTI Flows

In addition to agents sending data to the CTI Flow, they can also receive data from a CTI Flow.. When a CTI Flow sends some information to the CCP overlay, it will be displayed in the Data panel.

<img src={useBaseUrl('/img/classic/ccp-overlay-04-data.png')} />

Here is how you would configure your CTI Flow to send data back to the CCP overlay.

<img src={useBaseUrl('/img/classic/ccp-overlay-6-data.png')} />

## Upgrading from an earlier version

If you are upgrading the Salesforce package from an earlier version of CTI Adapter, there are a few additional steps to follow:

1. Go to Setup
2. In "Quick Find," search for "Picklist Value Sets" and click on the result.
3. Select "AC_CtiScriptSource" on "Picklist Value Sets" page.
4. Scroll down to "Values" section
5. Click "New" to add a new value.
6. In the textarea, enter "ctiAction" and save
7. Scroll down to the new field you added, "ctiAction," and click "Edit."
8. Update the label to "CTI Action" and save.
