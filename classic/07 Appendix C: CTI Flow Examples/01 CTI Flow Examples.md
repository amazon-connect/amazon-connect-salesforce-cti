<h1 id="cti-flow-examples"> Appendix C: CTI Flow Examples </h1>

This appendix includes samples scripts that provide different
functionality depending on the event source.

### Voice Contact Screenpop (Legacy Adapter Support)

**Source**: Amazon Connect Voice Contact

**Event**: onConnecting

[Download](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/01-legacy.json)

### Chat Contact Screenpop

**Source**: Amazon Connect Chat Contact

**Event**: onConnecting

[Download](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/02-chat-contact-screenpop.json)

### Click-to-Dial 

**Source**: Amazon Connect Chat Contact

**Event**: onClickToDial

[Download](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/03-click-to-dial.json)

### Screen Pop on Customer Phone Number 

**Source**: Amazon Connect Voice Contact

**Event**: onConnecting

[Download](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/06-screenpop-on-customer.json)

### Screen Pop a Case on Contact Attribute Data (if it exists) or Pop a New Case (if it does not) 

**Source**: Amazon Connect Voice Contact

**Event**: onConnecting

[Download](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/07-screenpop-case.json)

### Create a Task (Call Activity) and Pop That Task 

**Source**: Amazon Connect Voice Contact

**Event**: onConnecting

[Download](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/08-create-task.json)

### Screenpop on Customer Email Address (in contact attribute data) 

**Source**: Amazon Connect Chat Contact

**Event**: onConnecting

[Download](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/09-screenpop-cust-email.json)

### Create a Task (Call Activity) and Pop That Task 

**Source**: Amazon Connect Chat Contact

**Event**: onConnecting

[Download](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/08-create-task.json)

### Default CTI Flows

The following zip file includes default flows, which are automatically
added and activated on new installations of the package. However, if you
are upgrading from an earlier version you may need to replace your
legacy script with the new flow.

[Download](https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/DefaultFlows-json.zip)
