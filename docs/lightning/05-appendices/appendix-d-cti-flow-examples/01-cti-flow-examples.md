---
id: 01-cti-flow-examples
title: "Appendix D: CTI Flow Examples"
---

import useBaseUrl from "@docusaurus/useBaseUrl";

### Voice Contact Screenpop (Legacy Adapter Support)

**Source**: Amazon Connect Voice Contact

**Event**: onConnecting

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/01-legacy.json')} download="01-legacy.json">Download</a>

### Chat Contact Screenpop

**Source**: Amazon Connect Chat Contact

**Event**: onConnecting

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/02-chat-contact-screenpop.json')} download="02-chat-contact-screenpop.json">Download</a>

### Click-to-Dial 

**Source**: Salesforce UI

**Event**: onClickToDial

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/03-click-to-dial.json')} download="03-click-to-dial.json">Download</a>

### Screen Pop on Customer Phone Number 

**Source**: Amazon Connect Voice Contact

**Event**: onConnecting

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/06-screenpop-on-customer.json')} download="06-screenpop-on-customer.json">Download</a>

### Screen Pop a Case on Contact Attribute Data (if it exists) or Pop a New Case (if it does not) 

**Source**: Amazon Connect Voice Contact

**Event**: onConnecting

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/07-screenpop-case.json')} download="07-screenpop-case.json">Download</a>

### Create a Task (Call Activity) and Pop That Task 

**Source**: Amazon Connect Voice Contact

**Event**: onConnecting

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/08-create-task.json')} download="08-create-task.json">Download</a>

### Screenpop on Customer Email Address (in contact attribute data) 

**Source**: Amazon Connect Chat Contact

**Event**: onConnecting

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/09-screenpop-cust-email.json')} download="09-screenpop-cust-email.json">Download</a>

### Create a Task (Call Activity) and Pop That Task 

**Source**: Amazon Connect Chat Contact

**Event**: onConnecting

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/08-create-task.json')} download="08-create-task.json">Download</a>

### Create a Task (Call Activity) and Pop That Task using CTI Actions

**Source**: CTI Action

**Event**: N/A

[More details](/docs/lightning/cti-adapter/08-cti-actions#example)

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/10-Create+Callback+Task.json')} download="10-Create+Callback+Task.json">Download</a>

### Create a Record on Chat Connected and Screenpop

**Source**: Amazon Connect Chat Contact

**Event**: onConnected

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/11-SalesforceContactCreation.json')} download="11-SalesforceContactCreation.json">Download</a>

### Screenpop Chat Contact on View

**Source**: Amazon Connect Chat Contact

**Event**: onViewContact

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/12-ScreenPopContact-MultiChat.json')} download="12-ScreenPopContact-MultiChat.json">Download</a>

### Default CTI Flows

The following zip file includes default flows, which are automatically
added and activated on new installations of the package. However, if you
are upgrading from an earlier version you may need to replace your
legacy script with the new flow.

<a target="_blank" href={useBaseUrl('/json/cti-flow-examples/shared/DefaultFlows.zip')} download="DefaultFlows.zip">Download</a>
