<h1 class="toc">Key Benefits and Requirements</h1>

<h2 class="toc">Key Benefits</h2>

The key benefits of the Amazon Connect CTI Adapter are:

-   **Amazon Connect Voice and Chat:** ability to take voice and chat
    calls in the salesforce agent experience and advanced screen pop on
    the incoming phone number, case, account or contact. Agents can also
    click to dial a number within their contacts.

-   **Single Sign-On support:** seamless login with Connect and
    Salesforce with any standard SAML 2.0 provider.

-   **Call disposition and activity management:** configure post call
    workflows to support your Agent's after call work.

-   **Call logging and recording:** Voice and chat interactions can be
    logged as Salesforce activities and Amazon Connect call recordings
    can be played within the Salesforce.

-   **Omnichannel Presence Sync:** enable Salesforce chat, sms and email
    to share presence with Amazon Connect. Amazon Connect will know when
    an agent is handling a Salesforce chat and make them unavailable for
    a voice call, and vice versa.

-   **CTI Flows:** easily customize and extend behaviors within the CTI
    Adapter such as screenpop and activity management. Default flows
    along with the API guide provide key examples.

-   **High-velocity sales (HVS):** using Salesforce HVS, enable your
    inside sales team to follow a repeatable pre-define sales cadence
    for your business. It enables sales managers and reps to work on
    prioritize list of prospects and follow best sequence of sales
    outreach activities defined by your sales process.

The key benefits of the AWS Serverless Application Repository for
Salesforce are:

-   **Access Salesforce Data:** easily inject salesforce data into the
    customer experience. Businesses can offer personalized greetings and
    dynamic routing based on customer information, create new objects,
    update existing records, and delete items based on customer choices
    in the IVR.

-   **Contact center real-time reports:** display real-time contact
    center metrics within Salesforce from Amazon Connect.

-   **Contact center historical reports:** display historical contact
    center metrics within Salesforce from Amazon Connect.

-   **Contact analytics:** transcribe voice calls and perform analysis
    of the conversations using AI to surface sentiment, keywords,
    syntax, entities, etc.

We recommend that you initially install and configure the package into
your Salesforce sandbox. This will allow you to test the integration,
become more familiar with it, and modify it to your needs prior to
deploying it to your production org.

If you are using Lighting, you can get a head start by working through
the [Build an Amazon Connect Integration Salesforce
Trailhead](https://trailhead.salesforce.com/en/content/learn/projects/build-an-amazon-connect-integration).

<h2 class="toc">Requirements</h2>

To successfully deploy, configure, and implement the Amazon Connect
integration with Salesforce, you must ensure that the following
requirements and prerequisites are in place before.

### Prerequisites - Amazon Connect CTI Adapter

In order to successfully install and configure the Amazon Connect CTI
Adapter from the AppExchange you will need:

1.  Salesforce

    a. Salesforce org with Lightning experience

    b. My Domain configured and deployed to users

2.  An Amazon Connect instance

3.  SAML Details (If using SAML)

### Prerequisites - AWS Serverless Application Repository for Salesforce

In order to successfully install and configure the Salesforce functions
from the Serverless Application Repository, you will also need:

1.  A Kinesis stream configured for your Amazon Connect contact trace
    records (CTRs)

2.  Salesforce:

    a. An API user account

    b. A new Connected App

### Browser Compatibility

Amazon Connect requires WebRTC to enable soft-phone voice media stream
and Websockets to enable soft-phone signaling. Consequently, users are
required to use the latest version of either Google Chrome or Mozilla
Firefox. For more information, please see the [Amazon Connect
documentation](https://aws.amazon.com/connect/resources/#Documentation).

### Salesforce Lightning Support

Please note that following features are currently not supported in
Salesforce Lightning:

-   Outbound Campaign Calls using Salesforce Omni can be routed to the
    agent, but the automated screen pops and the dialing of the phone
    number will not work. The agent will have to click on the record
    links to open the records and use Salesforce's Click-to-Dial feature
    to make the phone call.

-   Lightning Standard Navigation is not currently supported in App
    Options for the Amazon Connect CTI Adapter.
