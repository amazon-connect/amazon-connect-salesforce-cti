---
id: 02-historical-metrics
title: Amazon Connect Historical Metrics in Salesforce
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Amazon Connect can generate a number of historical metric reports to
monitor efficiency and utilization, agent performance, and other
information about your contact center. Amazon Connect provides you the
ability to schedule execution and export of reports, in comma separated
value (CSV) format, to the S3 bucket of your choice. This enables broad
compatibility across many analytics and WFM tools.

With the AWS Serverless Repository for Salesforce, you can configure the
automatic import of reporting data from Amazon Connect into Salesforce.
Two different historical reports are available to transport Agent and
Queue interval data from Amazon Connect to Salesforce. Once these have
been configured and scheduled, you will begin to see data available in
the reports that have been included with the CTI Adapter.

### Configuring the AWS Services

When you configure schedule reports to run in Amazon Connect, they are
saved to your reporting Amazon S3 bucket upon execution. As a part of
the schedule configuration, you can determine the frequency with which
data is exported. The standard configuration is for execution every 30
minutes; however you can increase the interval time to suit your
requirements.

Once you have the reports configured and scheduled, you will then need
to activate the trigger for the reports bucket that will invoke an AWS
Lambda function included in the AWS Serverless Repository for
Salesforce. This function will process the report and import the data to
Salesforce.

#### Configuring the Historical Reports in Amazon Connect

1.  Login to your Amazon Connect instance as an Administrator

2.  From the left navigation, choose **Metrics and Quality** then select
    **Historical metrics**

    
<img src={useBaseUrl('/img/lightning/image178.png')} />

3.  On the **Historical metrics** page, select Contact metrics

<img src={useBaseUrl('/img/lightning/image179.png')} />

4.  Once the **Historical metrics: Queues** report loads, select the cog
    in the upper right to edit the report

5.  On the **Interval & Tim**e range tab, set the parameters as follows:

    a.  Interval: 30 minutes

    b.  Time Zone: UTC

    c.  Time Range: Last 24 Hours

6.  Leave the **Groupings** and **Filters** tabs set to their defaults

7.  Select the **Metrics** Tab.

8.  Select ALL selectable options

9.  Select **Apply**

10. Once the report saves, select the dropdown menu next to the Save
    button and choose Schedule

11. Set the name as **sfIntervalQueue** and choose **Continue**

12. On the **Note** screen, choose **Continue**

13. On the **Recurrence** tab in the Schedule Report setup, set the
    options as:

    a.  Generate this report: Hourly

    b.  Every: 0.5 hour(s)

    c.  Starting at: 1AM

    d.  For the Previous: 0.5 hour(s)

<img src={useBaseUrl('/img/lightning/image180.png')} />

14. Select the **Delivery Options** tab

15. In the Prefix field, enter **SFDC/Queue**

<img src={useBaseUrl('/img/lightning/image181.png')} />

16. Note the File name. The file name contains the bucket, path, and
    filename that will be used when executing the report. You will use
    the **bucket name** and **path** in later steps.

    
<img src={useBaseUrl('/img/lightning/image182.png')} />

17. Choose **Create**

18. Once the report is created, from the left navigation, choose
    **Metrics and Quality** then select **Historical metrics**
    
<img src={useBaseUrl('/img/lightning/image178.png')} />

19. On the **Historical metrics** page, select **Agent performance

<img src={useBaseUrl('/img/lightning/image183.png')} />

20. Once the **Historical metrics: Agents** report loads, select the cog
    in the upper right to edit the report

21. On the **Interval & Tim**e range tab, set the parameters as follows:

    a.  Interval: 30 minutes

    b.  Time Zone: UTC

    c.  Time Range: Last 24 Hours

22. Leave the **Groupings** and **Filters** tabs set to their defaults

23. Select the **Metrics** Tab.

24. Select ONLY the following metrics (deselect any others):
    -   After contact work time

    -   Agent on contact tome

    -   Agent idle time

    -   Non-Productive Time

    -   Average after contact work time

    -   Average handle time

    -   Average customer hold time

    -   Average agent interaction and customer hold time

    -   Average agent interaction time

    -   Contacts agent hung up first

    -   Contacts consulted

    -   Contacts handled

    -   Contacts handled incoming

    -   Contacts handled outbound

    -   Contacts put on hold

    -   Contacts hold disconnect

    -   Contacts transferred out

    -   Contacts transferred out internal

    -   Contacts transferred out external

    -   Error status time

    -   Agent answer rate

    -   Agent non-response

    -   Occupancy

    -   Online time

    -   Agent interaction and hold time

    -   Agent interaction time

    -   Average outbound agent interaction time

    -   Average outbound after contact work time

25. Select **Apply**

26. Once the report saves, select the dropdown menu next to the Save
    button and choose Schedule

27. Set the name as **sfIntervalAgent** and choose **Continue**

28. On the **Note** screen, choose **Continue**

29. On the **Recurrence** tab in the Schedule Report setup, set the
    options as:

    a.  Generate this report: Hourly

    b.  Every: 0.5 hour(s)

    c.  Starting at: 1AM

    d.  For the Previous: 0.5 hour(s)

<img src={useBaseUrl('/img/lightning/image184.png')} />

30. Select the **Delivery Options** tab

31. In the Prefix field, enter **SFDC/Agent**

<img src={useBaseUrl('/img/lightning/image185.png')} />

32. Note the File name. The file name contains the bucket, path, and
    filename that will be used when executing the report. You will use
    the **bucket name** and **path** in later steps.

    
<img src={useBaseUrl('/img/lightning/image186.png')} />

33. Choose **Create**

Once you have created the two reports and set their schedule, the next
thing you will need to do is to configure a trigger that executes a
Lambda function when the report is generated and stored in S3.

#### Creating the AWS Lambda Trigger for the Queue Data

1.  In a new browser tab, login to the [AWS
    console](https://console.aws.amazon.com/)

2.  Open the [AWS Lambda
    Console](https://console.aws.amazon.com/lambda/home)

3.  In the Add filter field of the AWS Lambda console, enter
    sfIntervalQueue and press enter to filter the list of functions

4.  Select the Lambda function that includes sfIntervalQueue in the name

5.  Expand the Designer section

6.  Select Add trigger

<img src={useBaseUrl('/img/lightning/image187.png')} />

7.  In Trigger configuration, select S3 from the dropdown list

<img src={useBaseUrl('/img/lightning/image188.png')} />

8.  Referring to the notes from the report configuration earlier, select
    the appropriate bucket

9.  Change the Event type to PUT

10. Referring to the notes from the report configuration earlier, set
    the Prefix to the path value for your report

11. Set the Suffix to .csv

12. The trigger configuration should now be similar to the following:

<img src={useBaseUrl('/img/lightning/image189.png')} />

13. Select **Add**

14. If everything has been configured correctly, you should receive a
    success message.

#### Creating the AWS Lambda Trigger for the Agent Data

1.  In a new browser tab, login to the [AWS
    console](https://console.aws.amazon.com/)

2.  Open the [AWS Lambda
    Console](https://console.aws.amazon.com/lambda/home)

3.  In the Add filter field of the AWS Lambda console, enter
    sfIntervalAgent and press enter to filter the list of functions

4.  Select the Lambda function that includes sfIntervalAgent in the name

5.  Expand the Designer section

6.  Select Add trigger

<img src={useBaseUrl('/img/lightning/image187.png')} />

7.  In Trigger configuration, select S3 from the dropdown list

<img src={useBaseUrl('/img/lightning/image188.png')} />

8.  Referring to the notes from the report configuration earlier, select
    the appropriate bucket

9.  Change the Event type to PUT

10. Referring to the notes from the report configuration earlier, set
    the Prefix to the path value for your report

11. Set the Suffix to .csv

12. The trigger configuration should now be similar to the following:

<img src={useBaseUrl('/img/lightning/image190.png')} />

13. Select **Add**

14. If everything has been configured correctly, you should receive a
    success message.

### Verifying the Data Import in Salesforce

Once you have configured the reports and added the triggers, you should
start to see data in Salesforce after \~30 minutes. The Amazon Connect
CTI Adapter comes with a predefined set of reports. These reports can be
customized and additional reports can be created by leveraging the
imported data.

#### Viewing Amazon Connect Reports in Salesforce

1.  Log in into your Salesforce org and go to the **Service Console**

2.  Expand the **navigation menu** by selecting the down arrow and
    choose **Reports**

3.  In the left Navigation, select **All Folders**

4.  Select the **Amazon Connect Reports** folder

<img src={useBaseUrl('/img/lightning/image191.png')} />

5.  In the list of reports, choose Average Handle Time queue report

<img src={useBaseUrl('/img/lightning/image192.png')} />

6.  Once the report loads, you should see data (provided calls have
    queued in this Amazon Connect instance today)
    
<img src={useBaseUrl('/img/lightning/image193.png')} />
