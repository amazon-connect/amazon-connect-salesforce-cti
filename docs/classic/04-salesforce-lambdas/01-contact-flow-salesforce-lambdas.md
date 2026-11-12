---
id: 01-contact-flow-salesforce-lambdas
title: Invoking the Amazon Connect Salesforce Lambda in a Contact Flow
---

import useBaseUrl from "@docusaurus/useBaseUrl";

The Amazon Connect Contact Flow defines the routing behaviour within
Amazon Connect, allowing contact center administrators to customize call
flow behaviour such as playing prompts, invoking Lambda functions for
data lookup, and sending the call to different queues based on various
conditions. As a result, Contact Flows are expected to be highly
customized for each organization. While the Adapter package does not
provide any Contact Flows, there are some best practices that are worth
highlighting when utilizing the Adapter.

The key element that enables Contact Flow integration is the AWS Lambda
function. A Lambda function is a serverless piece of code that is
invoked by the Contact Flow. Typically, Lambda functions are used to
update or retrieve information from databases or APIs, as well as
integrating with other systems. Lambda function can return any data
processed to the Contact Flow where it can be used for decision making.

Since Salesforce is highly customizable, the same Salesforce object in a
different environment may have different fields associated with it. As a
result, we can expect objects to have different requirements for how
they are retrieved, updated and created. The CTI Adapter was built to be
able to query Salesforce objects regardless of how they have been
customized. The user of the Adapter must therefore ensure they are
passing the appropriate parameters to the Lambda functions provided as
part of the Adapter.

The Lambda function supports different operations, based on the
mandatory input parameter "sf_operation".

## Salesforce Lookup

This operation is invoked by setting "sf_operation" to "lookup". In this
case, the Lambda function queries Salesforce for objects based on the
parameters passed to it.

-   "**sf_object**" parameter contains Salesforce Object, like Case, Contact etc.

-   "**sf_fields**" parameter contains a set of fields to be returned in a result. For example, if we are querying Case, we might specify "Id, IsClosed, Subject", or if we are querying Contact, we might specify "Id, Name, Email"

-   Specify a conditional parameter, for example "CaseNumber" or "homephone". Multiple values may be sent and they will be applied with "AND" operator.

In version v5.29 and later of the Salesforce Lambda package, lookup checks the object name and the
field names before it runs the query. A request with an unknown object or field name takes the Error
branch. In "**sf_fields**", use plain field names or relationship paths, for example `Account.Name`.
After you add a field in Salesforce, lookup can take up to 15 minutes to accept it.

In version v5.29 and later of the Salesforce Lambda package, lookup compares the full value. The `%`
and `_` characters in a value are ordinary characters, not wildcards. For mobilephone and homephone,
lookup matches the phone number as before.

In the Amazon Connect Contact Flow Designer, add *Integrate \> Invoke
AWS Lambda function* block. Set 'sfInvokeAPI' Lambda ARN and make sure
you have granted Amazon Connect to invoke the Lambda Function.

Example for phone number lookup:

<img src={useBaseUrl('/img/classic/image154.png')} />

<img src={useBaseUrl('/img/classic/image155.png')} />

<img src={useBaseUrl('/img/classic/image156.png')} />

<img src={useBaseUrl('/img/classic/image157.png')} />

A result example:

<img src={useBaseUrl('/img/classic/image158.png')} />

Example for Case lookup:

<img src={useBaseUrl('/img/classic/image159.png')} />

<img src={useBaseUrl('/img/classic/image160.png')} />

<img src={useBaseUrl('/img/classic/image161.png')} />

<img src={useBaseUrl('/img/classic/image162.png')} />

A result example:

<img src={useBaseUrl('/img/classic/image163.png')} />

## Salesforce Create

This operation is invoked by setting "sf_operation" to "create". In this
case, the Lambda function creates a Salesforce object based on the
parameters passed to it.

-   "**sf_object**" parameter contains Salesforce to be created, like Case.

-   Specify additional parameters for the Salesforce object to be created. Please be sure to include all parameters required to create the Salesforce object.

In version v5.29 and later of the Salesforce Lambda package, create checks the object name before it
sends the request. A request with an unknown object takes the Error branch.

In the Amazon Connect Contact Flow Designer, add *Integrate \> Invoke
AWS Lambda function* block. Set 'sfInvokeAPI' Lambda ARN and make sure
you have granted Amazon Connect to invoke the Lambda Function.

An example for Case creation:

<img src={useBaseUrl('/img/classic/image164.png')} />

<img src={useBaseUrl('/img/classic/image165.png')} />

<img src={useBaseUrl('/img/classic/image166.png')} />

<img src={useBaseUrl('/img/classic/image167.png')} />

<img src={useBaseUrl('/img/classic/image168.png')} />

Contact Id is usually received as a result of a previous phone lookup,
but it can be also stored as an Attribute (i.e. sf_contact_id)

<img src={useBaseUrl('/img/classic/image169.png')} />

<img src={useBaseUrl('/img/classic/image170.png')} />

A result example (providing the newly created Case Id):

<img src={useBaseUrl('/img/classic/image171.png')} />

## Salesforce Update

This operation is invoked by setting "sf_operation" to "update". In this
case, the Lambda function updates a Salesforce object based on the
parameters passed to it.

-   "**sf_object**" parameter contains Salesforce to be updated, like Case.

-   Specify additional parameters for the Salesforce object to be created. Parameters must include `sf_object` and `sf_id`.

In version v5.29 and later of the Salesforce Lambda package, update checks the object name before it
sends the request. A request with an unknown object takes the Error branch.

In the Amazon Connect Contact Flow Designer, add *Integrate \> Invoke
AWS Lambda function* block. Set 'sfInvokeAPI' Lambda ARN and make sure
you have granted Amazon Connect to invoke the Lambda Function.

An example for Case update:

<img src={useBaseUrl('/img/classic/image172.png')} />

<img src={useBaseUrl('/img/classic/image173.png')} />

<img src={useBaseUrl('/img/classic/image174.png')} />

Case Id is usually received as a result of a previous case lookup, but
it can be also stored as an Attribute (i.e. sf_case_id)

<img src={useBaseUrl('/img/classic/image175.png')} />

A result example (HTTP Status Code):

<img src={useBaseUrl('/img/classic/image176.png')} />

204 is "No Content" success code

## Salesforce Phone Lookup

This operation is invoked by setting "sf_operation" to "phoneLookup". In
this case, the Lambda function queries Salesforce for Contacts based on
the parameter passed to it.

It uses the Salesforce Object Search Language (SOSL) to construct
text-based search queries against the search index, which gives
significant performance improvement when searching phone number fields.

-   "**sf_phone**" parameter contains the phone number to search.

-   "**sf_fields**" parameter contains a set of fields to be returned in a result. As it searches for Contacts, we might specify "Id, Name, Email"

In the Amazon Connect Contact Flow Designer, add *Integrate \> Invoke
AWS Lambda function* block. Set 'sfInvokeAPI' Lambda ARN and make sure
you have granted Amazon Connect to invoke the Lambda Function.

Example for phone number lookup:

<img src={useBaseUrl('/img/classic/image177.png')} />

<img src={useBaseUrl('/img/classic/image156.png')} />

<img src={useBaseUrl('/img/classic/image178.png')} />

A result example:

<img src={useBaseUrl('/img/classic/image158.png')} />

## Salesforce query

Version v5.29 of the Salesforce Lambda package removes this operation. Change each flow that
uses it before you upgrade. After the upgrade, a flow that calls it takes the Error branch. To
search for text, use [Salesforce search](#salesforce-search) or
[Salesforce searchOne](#salesforce-searchone). To find records by their field values, use
[Salesforce Lookup](#salesforce-lookup).

## Salesforce queryOne

Version v5.29 of the Salesforce Lambda package removes this operation. Change each flow that
uses it before you upgrade. After the upgrade, a flow that calls it takes the Error branch. To
search for text, use [Salesforce search](#salesforce-search) or
[Salesforce searchOne](#salesforce-searchone). To find records by their field values, use
[Salesforce Lookup](#salesforce-lookup).

## Salesforce createChatterPost

This operation is invoked by setting "sf_operation" to
"createChatterPost" (case sensitive). In this case, the Lambda function
uses the Salesforce Connect REST API to create a chatter post (see
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

-   sf_message: "Please help me with case {{caseId}}"

-   caseId: 1234

Will result in the message: "Please help me with case 1234".

In the contact flow example below, we leave a chatter post on a contact.

<img src={useBaseUrl('/img/classic/image182.png')} />

<img src={useBaseUrl('/img/classic/image183.png')} />

<img src={useBaseUrl('/img/classic/image184.png')} />

<img src={useBaseUrl('/img/classic/image185.png')} />

(full text of the value is "I had a problem during the call. My contact id is {{contactId}}.")

The operation returns a response of:

```json
{
    "Id": "0D503000000ILY5CAO"
}
```

<img src={useBaseUrl('/img/classic/image186.png')} />
the Subject:

## Salesforce createChatterComment

This operation is invoked by setting "sf_operation" to
"createChatterComment" (case sensitive). In this case, the Lambda
function uses the Salesforce Connect REST to create a chatter comment
(see [here](https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)).
For createChatterComment, the following parameters are required:

-   sf_feedElementId

-   sf_commentType

-   sf_commentMessage

(refer to the api reference for value types)

Any additional parameters will replace text values in the
sf_commentMessage so that messages can be dynamic based on values stored
within the contact flow. For example, the parameter set:

-   sf_commentMessage: "Please help me with case {{ caseId }}"

-   caseId: 1234

In the contact flow example below, we leave a comment on a chatter post.

<img src={useBaseUrl('/img/classic/image187.png')} />

<img src={useBaseUrl('/img/classic/image188.png')} />

<img src={useBaseUrl('/img/classic/image189.png')} />

The operation returns a response of:

```json
{
    "Id": "0D703000000ChhNCAS"
}
```

See the chatter post appear attached to the Subject:

<img src={useBaseUrl('/img/classic/image190.png')} />

Salesforce search
-------------------------------

This operation is invoked by setting "sf_operation" to
"search" (case sensitive). In this case, the Lambda
function uses the Salesforce REST to perform a parameterized search
(see
[here](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm)).
For search, the following parameters are required:

-   q

-   sf_fields

-   sf_object

The following parameter is optional:

-   overallLimit

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

<img src={useBaseUrl('/img/classic/image320.png')} /> 58

<img src={useBaseUrl('/img/classic/image321.png')} /> 59

<img src={useBaseUrl('/img/classic/image322.png')} /> 60

<img src={useBaseUrl('/img/classic/image323.png')} /> 61

<img src={useBaseUrl('/img/classic/image324.png')} /> 62

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

Salesforce searchOne
-------------------------------

This operation is invoked by setting "sf_operation" to
"searchOne" (case sensitive). In this case, the Lambda
function uses the Salesforce REST to perform a parameterized search
(see
[here](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm)).
For search, the following parameters are required:

-   q

-   sf_fields

-   sf_object

In version v5.29 and later of the Salesforce Lambda package, searchOne checks `q`, `sf_object`, and
`sf_fields` with the same rules as [Salesforce search](#salesforce-search). Version v5.29 removes
the `where` parameter in the same way as search. To find records by their field values, use
[Salesforce Lookup](#salesforce-lookup). If a flow needs a text search and a field filter together,
use your own Lambda function.

See the below example:

<img src={useBaseUrl('/img/classic/image326.png')} />

<img src={useBaseUrl('/img/classic/image327.png')} />

<img src={useBaseUrl('/img/classic/image322.png')} />

<img src={useBaseUrl('/img/classic/image323.png')} />

The operation returns a response of:

```json
{
    "Id": "50001000001BIn6AAG",
    "Subject": "test subject unique", 
    "Status": "New", 
    "sf_count": 1
}
```
