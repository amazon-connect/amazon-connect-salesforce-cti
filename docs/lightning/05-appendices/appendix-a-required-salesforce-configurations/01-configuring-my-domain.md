---
id: 01-configuring-my-domain
title: Configuring My Domain in Salesforce
---

import useBaseUrl from "@docusaurus/useBaseUrl";

The latest CTI adapter includes several lighting components that provide
a better administrative user experience. Salesforce requires that My
Domain be enabled to make use of lightning components. Setting up My
Domain is a fairly simple setup, but it does require some time for the
changes to propagate, so it will be helpful to complete this
configuration in advance of your CTI adapter deployment.

### Register Your Domain

Step 1 in the process is registering your domain in Salesforce. This
allows you to check availability of the domain and complete the
registration process. It will take some amount of time for the
registration to complete.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, enter **My Domain**, then select **My
    Domain** from the result list

<img src={useBaseUrl('/img/lightning/image223.png')} />

3.  In the **My Domain Step 1** section, enter your desired domain name
    and select **Check Availability** to determine if the domain is
    available.

<img src={useBaseUrl('/img/lightning/image224.png')} />

4.  If the domain is not available, you will need to try a different
    name.

5.  If the domain is available, select **Register Domain

<img src={useBaseUrl('/img/lightning/image225.png')} />

6.  The domain registration process will begin. You will receive an
    email once it is complete. Once you receive the confirmation, you
    may continue with the next section.

<img src={useBaseUrl('/img/lightning/image226.png')} />

### Deploy the Domain to Your Users

Once the domain registration process completes, you then need to deploy
the domain to your users.

1.  Log in into your Salesforce org and go to **Setup**

2.  In the **Quick Find** field, enter **My Domain**, then select **My
    Domain** from the result list

<img src={useBaseUrl('/img/lightning/image223.png')} />

3.  In the **My Domain Step 2** section, note the domain name, then
    select the **Log in** button to login using the new domain.

<img src={useBaseUrl('/img/lightning/image227.png')} />

4.  Once the login completes, you should see your new domain in the
    address bar of your browser. You should also be returned to the My
    Domain configuration.

5.  Select the Deploy to Users button to deploy your domain

<img src={useBaseUrl('/img/lightning/image228.png')} />

6.  You should get a popup message that warns you about the domain
    deployment. Select OK.

<img src={useBaseUrl('/img/lightning/image229.png')} />

7.  Deployment should now be complete