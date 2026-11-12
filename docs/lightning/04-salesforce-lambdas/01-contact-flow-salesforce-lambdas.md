---
id: 01-contact-flow-salesforce-lambdas
title: Accessing the Salesforce API from Amazon Connect Contact Flows Using AWS Lambda
---

import useBaseUrl from "@docusaurus/useBaseUrl";

The most commonly used feature of the AWS Serverless Application
Repository for Salesforce is accessing/updating Salesforce data using
the sfInvokeAPI Lambda function. This function allows an Amazon Connect
contact flow to perform the following operations against your Salesforce
org:

-   **Lookup:** queries Salesforce for objects based on the parameters
    passed to it

-   **Create:** creates a Salesforce object based on the parameters
    passed to it

-   **Update:** updates a Salesforce object based on the parameters
    passed to it

-   **Phone Lookup:** uses Salesforce Object Search Language (SOSL) to
    construct text-based search queries against the search index, which
    gives significant performance improvement when searching phone
    number fields.

-   **Delete:** deletes a Salesforce object based on the parameters
    passed to it

-   **CreateChatterPost:** creates a chatter post.

-   **CreateChatterComment:** creates a chatter comment.

-   **Search:** performs a search against the Salesforce instance, returning all results.

-   **SearchOne:** performs a search against the Salesforce instance, returning at most one result.

**NOTE:** naming of the Lambda function will vary based on template
data, but sfInvokeAPI will always be a part of the name.

When you invoke this Lambda function from your contact flows, you will
need to pass along parameters that inform the function as to which
Salesforce operation you wish to execute, as well as pass along any
required parameters. Depedning on your use case, this can require
reference to the [Salesforce REST
API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm)
or the [Salesforce Connect REST
API](https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm)
documentation. The core parameters are:

-   **sf_operation:** specifies with operation to run. Options are
    lookup, lookup_all, create, update, phoneLookup, delete,
    createChatterPost, createChatterComment, search, searchOne

-   **sf_object:** defines what type of object you are referencing.
    Examples include Case, Contact, Task, etc.

-   **sf_fields:** the fields you want to receive back from Salesforce
    when an operation completes successfully

-   **sf_id:** the unique identifier for a Salesforce object. Typically
    used in update operations

-   **sf_phone:** contains the phone number used to search when
    performing a phone lookup

### Salesforce Lookup

This operation is invoked by setting **sf_operation** to **lookup**. In
this case, the Lambda function queries Salesforce for objects based on
the parameters passed to it. For lookup, the following parameters are
required:

-   sf_object

-   sf_fields

Any additional parameters passed will be evaluated as conditional
arguments for the lookup.

In version v5.29 and later of the Salesforce Lambda package, lookup and lookup_all check the object
name and the field names before they run the query. A request with an unknown object or field name
takes the Error branch. In sf_fields, use plain field names or relationship paths, for example
`Account.Name`. After you add a field in Salesforce, lookup and lookup_all can take up to 15 minutes
to accept it.

In version v5.29 and later of the Salesforce Lambda package, lookup and lookup_all compare the full
value. The `%` and `_` characters in a value are ordinary characters, not wildcards. For mobilephone
and homephone, lookup and lookup_all match the phone number as before.

Note that this operation only returns the first item of the query
results. If you want to have all results returned from Salesforce, set
**sf_operation** to **lookup_all**.

In the contact flow example below, we are looking for a specific case
based on customer input.

<img src={useBaseUrl('/img/lightning/image156.png')} />

This operation returns a response of:

```json
{
    "Id": "5006g00000AaIs7AAF",
    "sf_count": 1
}
```

For **lookup_all** the operation returns a response of:

```json
{
    "sf_records_0_Id": "5006g00000AaIs7AAF",
    "sf_records_1_Id": "5006g00000AaIs7AAE",
    "sf_count": 2
}
```

Note that `sf_count` is the count of records matched and not the count of fields in the response. This means all fields that start with `sf_records_i_` count as one record. If the query above returned the Name as well as the Id the response will be:

```json
{
    "sf_records_0_Id": "5006g00000AaIs7AAF",
    "sf_records_0_Name": "Name0",
    "sf_records_1_Id": "5006g00000AaIs7AAE",
    "sf_records_1_Name": "Name1",
    "sf_count": 2
}
```

### Salesforce Create

This operation is invoked by setting **sf_operation** to **create**. In
this case, the Lambda function creates a Salesforce object based on the
parameters passed to it. For create, the following parameters are
required:

-   sf_object

-   Specify additional parameters for the Salesforce object to be
    created. Please be sure to include all parameters required to create
    the Salesforce object.

In version v5.29 and later of the Salesforce Lambda package, create checks the object name before it
sends the request. A request with an unknown object takes the Error branch.

In the contact flow example below, we creating a new case based on
customer input.

<img src={useBaseUrl('/img/lightning/image157.png')} />

This operation returns a response of:

```json
{
    "Id": "5006g00000BLqurAAD"
}
```

### Salesforce Update

This operation is invoked by setting **sf_operation** to **update**. In
this case, the Lambda function updates a Salesforce object based on the
parameters passed to it. For update, the following parameters are
required:

-   sf_object

-   sf_id

-   Specify additional parameters for the Salesforce object to be
    created. Please be sure to include all parameters required to create
    the Salesforce object.

In version v5.29 and later of the Salesforce Lambda package, update checks the object name before it
sends the request. A request with an unknown object takes the Error branch.

In the contact flow example below, we are updating a specific case.

<img src={useBaseUrl('/img/lightning/image158.png')} />

This operation returns a response of:

```json
{
    "Status": "204"
}
```

The "204" status indicates a success.

### Salesforce Phone Lookup

This operation is invoked by setting **sf_operation** to
**phoneLookup**. In this case, the Lambda function uses Salesforce
Object Search Language (SOSL) to construct text-based search queries.
For phoneLookup, the following parameters are required:

-   sf_phone

-   sf_fields

In the contact flow example below, we look for a customer by phone
number.

<img src={useBaseUrl('/img/lightning/image159.png')} />

This operation returns a response of:

```json
{
    "Id": "5006g00000BLqurAAD",
    "sf_count": "1",
    "Name": "Jim Smith"
}
```

### Salesforce Delete

This operation is invoked by setting **sf_operation** to **delete**. In
this case, the Lambda function deletes a Salesforce object based on the
parameters passed to it. For delete, the following parameters are
required:

-   sf_object

-   sf_id

In version v5.29 and later of the Salesforce Lambda package, delete checks the object name before it
sends the request. A request with an unknown object takes the Error branch.

In the contact flow example below, we deleting an existing case based on
customer input.

<img src={useBaseUrl('/img/lightning/image160.png')} />
<img src={useBaseUrl('/img/lightning/image161.png')} />

This operation returns a response of:

```json
{
    "Response": "None"
}
```

### Salesforce query

Version v5.29 of the Salesforce Lambda package removes this operation. Change each flow that
uses it before you upgrade. After the upgrade, a flow that calls it takes the Error branch. To
search for text, use [Salesforce search](#salesforce-search) or
[Salesforce searchOne](#salesforce-searchone). To find records by their field values, use
[Salesforce Lookup](#salesforce-lookup).

### Salesforce queryOne

Version v5.29 of the Salesforce Lambda package removes this operation. Change each flow that
uses it before you upgrade. After the upgrade, a flow that calls it takes the Error branch. To
search for text, use [Salesforce search](#salesforce-search) or
[Salesforce searchOne](#salesforce-searchone). To find records by their field values, use
[Salesforce Lookup](#salesforce-lookup).

### Salesforce createChatterPost

This operation is invoked by setting **sf_operation** to
**createChatterPost** (case sensitive). In this case, the Lambda
function uses the Salesforce Connect REST API to create a chatter post
(see
[here](https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_item.htm)).
For createChatterPost, the following parameters are required:

-   sf_feedElementType

-   sf_subjectId

-   sf_messageType

-   sf_message

The following parameter is optional:

-   sf_mention

(refer to the api reference for value types)

Any additional parameters will replace text values in the sf_message so
that messages can be dynamic based on values stored within the contact
flow. For example, the parameter set:

-   sf_message: "Please help me with case `caseId`"

-   caseId: 1234

Will result in the message: "Please help me with case 1234".

In the contact flow example below, we leave a chatter post on a contact.

<img src={useBaseUrl('/img/lightning/image166.png')} />

<img src={useBaseUrl('/img/lightning/image167.png')} />

<img src={useBaseUrl('/img/lightning/image168.png')} />

<img src={useBaseUrl('/img/lightning/image169.png')} />

<img src={useBaseUrl('/img/lightning/image170.png')} />

(full text of the value is "I had a problem during the call. My contact
id is `contactId`.")

<img src={useBaseUrl('/img/lightning/image171.png')} />

The operation returns a response of:

```json
{
    "Id": "0D503000000ILY5CAO"
}
```

See the chatter post appear attached to the Subject:

<img src={useBaseUrl('/img/lightning/image172.png')} />

### Salesforce createChatterComment

This operation is invoked by setting **sf_operation** to
**createChatterComment** (case sensitive). In this case, the Lambda
function uses the Salesforce Connect REST to create a chatter comment
(see
[here](https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)).
For createChatterComment, the following parameters are required:

-   sf_feedElementId

-   sf_commentType

-   sf_commentMessage

(refer to the api reference for value types)

Any additional parameters will replace text values in the
sf_commentMessage so that messages can be dynamic based on values stored
within the contact flow. For example, the parameter set:

-   sf_commentMessage: "Please help me with case ` caseId `"

-   caseId: 1234

In the contact flow example below, we leave a comment on a chatter post.

<img src={useBaseUrl('/img/lightning/image173.png')} />

<img src={useBaseUrl('/img/lightning/image174.png')} />

<img src={useBaseUrl('/img/lightning/image175.png')} />

<img src={useBaseUrl('/img/lightning/image176.png')} />

The operation returns a response of:

```json
{
    "Id": "0D703000000ChhNCAS"
}
```

See the chatter post appear attached to the Subject:

<img src={useBaseUrl('/img/lightning/image177.png')} />

### Salesforce search

This operation is invoked by setting **sf_operation** to
**search** (case sensitive). In this case, the Lambda
function uses the Salesforce REST to perform a parameterized search
(see
[here](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm)).
For search, the following parameters are required:

-   q

-   sf_fields

-   sf_object

The following parameter is optional:

-   overallLimit

(refer to the api reference for value types)

In version v5.29 and later of the Salesforce Lambda package, search checks these parameters before
it sends the request. A request that does not obey these rules takes the Error branch:

-   `q` must have 1 to 1,000 characters without the spaces at the start and the end. It can
    contain letters and digits in any language, accent marks that are part of a letter, underscores,
    spaces, and these characters: `. @ , + - ' ( ) # / & :`. Search does not accept other
    characters, for example wildcards and double quotes.

-   Search does not accept AND, OR, or NOT as a separate word in `q`, in any letter case. Spaces,
    parentheses, and the start and the end of `q` separate the words. For example, `Smith and Sons`
    takes the Error branch, but `Anderson` does not.

-   `sf_object` must be an object that the Salesforce API user can read. Each plain field name in
    `sf_fields` must be a field of that object, and `sf_fields` must have at least one field. You
    can also use relationship paths, for example `Account.Name`. Search does not accept field
    functions, such as `toLabel`, or aliases. After you add a field in Salesforce, search can take
    up to 15 minutes to accept it.

-   `overallLimit` must be a whole number from 1 to 2,000. Use digits only, for example `500`.

Version v5.29 removes the `where` parameter. The Lambda finds the parameter in any letter case, for
example `Where`. A request with a `where` value that has text other than spaces takes the Error
branch. A `where` value that is empty or has only spaces has no effect. To find records by their
field values, use [Salesforce Lookup](#salesforce-lookup). If a flow needs a text search and a field
filter together, use your own Lambda function.

See the below example:

<img src={useBaseUrl('/img/lightning/image258.png')} />

<img src={useBaseUrl('/img/lightning/image259.png')} />

<img src={useBaseUrl('/img/lightning/image260.png')} />

<img src={useBaseUrl('/img/lightning/image261.png')} />

<img src={useBaseUrl('/img/lightning/image262.png')} />

The operation returns a response of:

```json
{
    "sf_records_0_Id": "50001000001B9e6AAG",
    "sf_records_0_Subject": "test subject",
    "sf_records_0_Status": "New",
    "sf_records_1_Id": "50001000001B9eWAAS",
    "sf_records_1_Subject": "test subject",
    "sf_records_1_Status": "New",
    "sf_records_2_Id": "50001000001BDgiAAG",
    "sf_records_2_Subject": "test subject",
    "sf_records_2_Status": "New",
    "sf_count": 3
}
```

Note that `sf_count` is the count of records matched and not the count of fields in the response. This means all fields that start with `sf_records_i_` count as one record.

### Salesforce searchOne

This operation is invoked by setting **sf_operation** to
**searchOne** (case sensitive). In this case, the Lambda
function uses the Salesforce REST to perform a parameterized search
(see
[here](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm)).
For search, the following parameters are required:

-   q

-   sf_fields

-   sf_object

(refer to the api reference for value types)

In version v5.29 and later of the Salesforce Lambda package, searchOne checks `q`, `sf_object`, and
`sf_fields` with the same rules as [Salesforce search](#salesforce-search). Version v5.29 removes
the `where` parameter in the same way as search. To find records by their field values, use
[Salesforce Lookup](#salesforce-lookup). If a flow needs a text search and a field filter together,
use your own Lambda function.

See the below example:

<img src={useBaseUrl('/img/lightning/image264.png')} />

<img src={useBaseUrl('/img/lightning/image265.png')} />

<img src={useBaseUrl('/img/lightning/image260.png')} />

<img src={useBaseUrl('/img/lightning/image261.png')} />

The operation returns a response of:

```json
{
    "Id": "50001000001BIn6AAG",
    "Subject": "test subject unique", 
    "Status": "New", 
    "sf_count": 1
}
```
