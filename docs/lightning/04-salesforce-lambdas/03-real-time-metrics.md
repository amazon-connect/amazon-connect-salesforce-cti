---
id: 03-real-time-metrics
title: Amazon Connect Real-Time Metrics in Salesforce
---

import useBaseUrl from "@docusaurus/useBaseUrl";

The CTI adapter includes real-time reporting tools which provide
visibility into critical data which help improve the utilization of your
agents and allows insight into overall queue performance. Once you have
deployed the AWS Serverless Application Repository for Salesforce your
Amazon Connect instance will push real-time metric data to Salesforce
every 15 seconds. This data can be viewed from two tools that were
included with the CTI Adapter installation.

The first view, AC Queue Metrics queue provides details about current
queue staffing and the distribution of contacts by queue. The second
view, AC Real Time Queue Metrics, allows you to select a specific queue
and view the real-time metrics for that queue.

### Deployment and Configuration

Once you have deployed the AWS Serverless Application Repository for
Salesforce and provided the appropriate credentials, there is no further
configuration required to make the data flow work. The only remaining
task is to add the real-time views to your Salesforce console.

#### Adding Real-Time Reports to the Service Console

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose **Edit**.

    
<img src={useBaseUrl('/img/lightning/image40.png')} />

3.  On the Edit Service Console App Navigation Items page, select **Add
    More Items**

    
<img src={useBaseUrl('/img/lightning/image41.png')} />

4.  Select the **+** next to **AC Queue Metrics** and **AC Real Time
    Queue Metrics**

5.  Select **Add 2 Nav Items**

6.  Change the order of your Navigation Items if desired, then choose
    **Save**

    
<img src={useBaseUrl('/img/lightning/image194.png')} />

7.  Once the save completes, expand the **navigation menu** by selecting
    the down arrow and choose **AC Queue Metrics**

    
<img src={useBaseUrl('/img/lightning/image195.png')} />

8.  The AC Queue Metrics view will display and any relevant data will
    update every 15 seconds.

    
<img src={useBaseUrl('/img/lightning/image196.png')} />

9.  Scroll down to view the **AC Contact Metrics Dashboard

<img src={useBaseUrl('/img/lightning/image197.png')} />

10. Expand the **navigation menu** by selecting the down arrow and
    choose **AC Real Time Queue Metrics

    
<img src={useBaseUrl('/img/lightning/image198.png')} />

11. Change the List View to **ALL**

<img src={useBaseUrl('/img/lightning/image199.png')} />

12. Select a queue to view the detailed real-time statistics for that
    specific queue

    
<img src={useBaseUrl('/img/lightning/image200.png')} />