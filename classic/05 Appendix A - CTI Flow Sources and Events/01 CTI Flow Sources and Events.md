<h1 class="toc">Appendix A - CTI Flow Sources and Events</h1>

The following sources are defined in the adapter for use with CTI
Scripts:

-   Initialization

    -   onInit -- The CTI adapter has initialized.

-   Amazon Connect Agent

    -   onRefresh -- The Connect agent's data was updated.

    -   onStateChange -- The Connect agent's state changed.

    -   onRoutable -- The Connect agent became available for contacts.

    -   onNotRoutable -- The Connect agent became unavailable for
        contacts.

    -   onOffline -- The Connect agent's state was set to "Offline".

    -   onError -- The Connect agent encountered a system error.

    -   onAfterCallWork -- The Connect agent entered "After Call Work".

    -   onInit -- The Connect agent has logged in.

-   Amazon Connect Voice Contact

    -   onIncoming -- The voice contact is incoming. Note: This event
        fires for queued callback contact only.

    -   onConnecting -- The voice contact is connecting. Note. This
        event fires for inbound and outbound contacts except queued
        callback contacts.

    -   onConnected -- The voice contact is connected.

    -   onEnded -- The voice contact is ended or destroyed.

    -   onRefresh -- The voice contact is updated.

    -   onAccepted -- A voice contact is accepted.

    -   onPending -- The voice contact is pending.

    -   onMissed -- The voice contact is / was missed.

-   Amazon Connect Chat Contact

    -   onConnecting -- The chat contact is connecting.

    -   onConnected -- The chat contact is connected.

    -   onEnded -- The chat contact ended.

    -   onRefresh -- The chat contact is updated.

    -   onAccepted -- The chat contact is accepted.

    -   onPending -- The chat contact is pending.

    -   onMessageReceived -- A message was received from the customer

    -   onMessageSent -- A message was sent to the customer

    -   onMissed -- The chat contact was missed.

-   Amazon Connect Task Contact

    -   onIncoming -- The tasks contact is incoming.
    
    -   onConnecting -- The taks contact is connecting.

    -   onConnected -- The task contact is connected.

    -   onEnded -- The task contact ended.

    -   onRefresh -- The task contact is updated.

    -   onAccepted -- The task contact is accepted.

    -   onPending -- The voice contact is pending.

    -   onMissed -- The task contact was missed.

    -   onTransferInitiated -- When the server has initiated the task transfer.

    -   onTransferSucceeded -- When the task transfer has succeeded.

    -   onTransferFailed -- When the task transfer has failed.

    -   onTaskExpiring -- Triggers 2 hours before the task expires.

    -   onTaskExpired -- When the task has expired.

-   Salesforce Agent

    -   onStateChange -- The Salesforce agent's state changed.

    -   onWorkAccepted -- The Salesforce agent accepted work.

    -   onWorkloadChanged -- The Salesforce agent's workload changed.

-   Salesforce UI

    -   onClickToDial -- A phone number, within the Salesforce UI, was
        clicked.

    -   onNavigationChange

    -   onHvsWorkStart
