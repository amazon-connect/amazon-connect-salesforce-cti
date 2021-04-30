---
id: 01-key-benefits-and-requirements
title: Key Benefits and Requirements
---

## Key Benefits

The key benefits of the adapter include:

-   **Amazon Connect Voice and Chat:** ability to take voice and chat
    calls in the salesforce agent experience and advanced screen pop on
    the incoming phone number, case, account or contact. Agents can also
    click to dial a number within their contacts.

-   **Single Sign-On support:** seamless login with Connect and
    Salesforce with any standard SAML 2.0 provider.

-   **IVR data dips:** easily inject salesforce data into the customer
    experience. Businesses can offer personalized greetings and dynamic
    routing based on customer information.

-   **Call disposition and activity management:** configure post call
    workflows to support your Agent's after call work.

-   **Omnichannel Presence Sync:** enable Salesforce chat, sms and email
    to share presence with Amazon Connect. Amazon Connect will know when
    an agent is handling a Salesforce chat and make them unavailable for
    a voice call, and vice versa.

-   **Call logging and recording:** Voice and chat interactions can be
    logged as Salesforce activities and Amazon Connect call recordings
    can be played within the Salesforce.

-   **Contact center real-time reports:** display real-time contact
    center metrics within Salesforce from Amazon Connect.

-   **Contact center historical reports:** display historical contact
    center metrics within Salesforce from Amazon Connect.

-   **Lightning CCP extensions:** easily customize and extend behaviors
    within the CTI Adapter such as screenpop and activity management.
    Default scripts along with the API guide provide key examples.

-   **High-velocity sales (HVS):** using Salesforce HVS, enable your
    inside sales team to follow a repeatable pre-define sales cadence
    for your business. It enables sales managers and reps to work on
    prioritize list of prospects and follow best sequence of sales
    outreach activities defined by your sales process.

We recommend that you initially install the package into your Salesforce
sandbox. After the package is installed, you can configure your
Salesforce Call Center configuration within Salesforce.

The next step is to allowlist your Salesforce Visualforce domain within
your Amazon Connect Application integration. This allows cross-domain
access to your Amazon Connect instance.

If you want to quickly get setup with basic CTI capabilities in
Lightning, we suggest you walk through our Salesforce trailhead
available at <https://sfdc.co/Amazon-Connect>.

## Requirements

To successfully create, configure, and implement the Amazon Connect CTI
Adapter for Salesforce, you must ensure that the requirements and
prerequisites described in this section are in place before you start.

### Prerequisites

To install the Amazon Connect CTI package, you must:

1.  Have a running instance of Salesforce Classic, Salesforce Console,
    or Lightning Experience

2.  Create an Amazon Connect instance
    (<https://aws.amazon.com/connect/>)

### Browser Compatibility

Amazon Connect requires WebRTC to enable soft-phone voice media stream
and Websockets to enable soft-phone signaling. Consequently, users are
required to use the latest version of either Google Chrome or Mozilla
Firefox. For more information, please see the Amazon Connect
documentation
(<https://aws.amazon.com/connect/resources/#Documentation>)

### Salesforce Lightning Support

Please note that following features are currently not supported in
Salesforce Lightning:

-   Outbound Campaign Calls using Salesforce Omni can be routed to the
    agent, but the automated screen pops and the dialing of the phone
    number will not work. The agent will have to click on the record
    links to open the records and use Salesforce's Click-to-Dial feature
    to make the phone call.

-   Lightning Standard Navigation is not currently supported in App
    Options for the Amazon Connect CTI Adapter. Console navigation is
    fully supported.
