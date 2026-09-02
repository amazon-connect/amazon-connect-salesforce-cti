---
id: 01-rollback-to-username-password
title: "Appendix G: Rollback to Username-Password"
---

Rollback is a single parameter change. No secret change, no org change, no redeploy.

One credentials secret serves both modes: `client_credentials` reads only `ConsumerKey` and `ConsumerSecret` and leaves `Password` and `AccessToken` untouched. That is what makes rollback free.

## Steps

Repeat the [Flip the SalesforceAuthMode parameter](/docs/lightning/salesforce-lambdas/07-client-credentials-migration#flip-the-salesforceauthmode-parameter) procedure in the main doc, selecting **password** instead of `client_credentials`.

Then verify — including [Testing step 1](/docs/lightning/salesforce-lambdas/07-client-credentials-migration#step-1--force-a-fresh-token-before-testing-required-not-optional) from the main doc. Clearing `AuthToken` matters just as much in this direction: without it you would be verifying password mode against a token issued under `client_credentials`, and the same false pass applies.

After a genuine token request, two independent signals confirm password mode is actually running:

**Setup > Login History**, filtered to the API user: Login URL is `login.salesforce.com`. If it shows your My Domain host, the stack is still running `client_credentials`.

**CloudWatch logs for sfRealTimeQueueMetrics:**

```
Retrieving new Salesforce OAuth token (auth mode: password)
```

Login History is the more reliable of the two because it is recorded by Salesforce and cannot be produced by a cached token.

## Two actions permanently prevent rollback

Neither is required by this migration, and both are easy to do while tidying up afterwards:

- Disabling "Allow OAuth Username-Password Flows" at the org level.

This does not affect `client_credentials`. That flow uses a different grant and never consults this setting — which is why Salesforce recommends `client_credentials` for orgs created Summer '23 or later, where the username-password flow is already blocked by default. The only consequence of disabling it is that rollback to password mode stops working.

- Deactivating the existing API user instead of reusing it as the Run As user.
- Clearing SalesforceUsername. Permitted and unread in `client_credentials` mode, but a rollback to password mode will fail the template's PasswordModeRequiresUsername assertion if it is empty. Recoverable by resupplying the username, but it turns a one-parameter rollback into a puzzle mid-incident.

Do not do any of the above until `client_credentials` has run cleanly in production long enough that you have decided not to roll back.

Leaving the connected app configured for client credentials is harmless while the stack is in password mode, so there is nothing to undo on the Salesforce side.
