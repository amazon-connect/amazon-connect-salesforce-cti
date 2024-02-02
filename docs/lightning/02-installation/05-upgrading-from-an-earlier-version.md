---
id: 05-upgrading-from-an-earlier-version
title: Upgrading from an Earlier Version
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Upgrading the Salesforce Lambdas
The Amazon Connect Salesforce Lambda (ACSF Lambda) package contains a set of common Lambda functions to be used by Amazon Connect to interact with Salesforce, allowing lookup, create and update operations for different Salesforce objects, like Contacts and Cases. Upgrading the Salesforce lambdas is necessary if you have an existing lambda package and you wish to upgrade to a newer runtime version.

To upgrade your lambdas to use the new python version, continue reading.

### Deploying the New Lambda Package

Gather the data in your lambda CloudFormation stack. 
1. In a new browser tab, login to the [AWS console](https://console.aws.amazon.com/).
2. Navigate to the CloudFormation console.
3. Ensure you are in the correct region.
4. If you are not already on the Stacks page, click Stacks listed in the left-hand navigation pane.
    * It should look similar to this
    * <img src={useBaseUrl('/img/lightning/lambdacf1.png')} />
5. Find and click the previously-deployed stack in the list.
6. In the split panel that appears for the stack, click on the Parameters tab.
7. The list of parameters used for the previously-deployed stack will appear.
    * <img src={useBaseUrl('/img/lightning/lambdacf2.png')} />

Verify the information you used to create the lambdas. For a refresher, this would be the information you found as part of [Prerequisite Configuration and Data Collection](/docs/lightning/installation/04-salesforce-lambdas-manual-setup/#prerequisite-configuration-and-data-collection), [Finding your salesforce version](/docs/lightning/installation/04-salesforce-lambdas-manual-setup/#check-your-salesforce-api-version), and [Gather Amazon Connect Information](/docs/lightning/installation/04-salesforce-lambdas-manual-setup/#gather-amazon-connect-information).

Once you have verified and gathered all of the information, you will install the salesforce lambda package. Instructions on how to install the lambda package [can be found here](/docs/lightning/installation/04-salesforce-lambdas-manual-setup/#install-the-amazon-connect-salesforce-lambda-package), and instructions on testing the lambda package after installation [can be found here](/docs/lightning/installation/04-salesforce-lambdas-manual-setup/#test-the-core-functionality)

### Removing the Previous Lambda Package

At this point, you now have the newer version of the lambda package and the older version of the lambda package. We now want to remove the original lambda package. but this needs to be done with care since this lambda package was configured to work with the connect and salesforce instances. Before removing the old lambda package, we must first do two (2) things

#### Unlink the sfInvokeAPI Function

1. In a new browser tab, login to the [AWS console](https://console.aws.amazon.com/).
2. Navigate to the Amazon Connect Console.
3. Select your Instance Alias.
4. In the navigation pane, choose "Flows".
    * <img src={useBaseUrl('/img/lightning/connectflowpane1.png')} />

Once in the "Flows" pane of the Connect console of the instance to be configured, verify that the previous Lambda function is listed, then remove it by clicking “Remove.” 
<img src={useBaseUrl('/img/lightning/connectflowpane2.png')} />

After the old Lambda function has been removed, proceed with the remaining steps:

1. For AWS Lambda, select the function that includes sfInvokeAPI from the new lambda package in the name.
2. Choose Add Lambda Function. Confirm that the function is added under Lambda Functions.
3. The AWS Lambda function has been added to your Amazon Connect instance!

#### Remove triggers from the Lambda functions of the previously-deployed stack

In the documentation steps [“Amazon Connect Historical Metrics in Salesforce”](/docs/lightning/salesforce-lambdas/02-historical-metrics) and [“Postcall Contact Lens Import”](/docs/lightning/salesforce-lambdas/06-postcall-contact-lens-import), you are instructed to create AWS Lambda Triggers for certain Lambda functions in order to store relevant data in S3 bucket folders. If the Lambdas of the previously-deployed stack have triggers which point to the same file path (i.e., S3 bucket, Prefix, and Suffix) that is listed in the documentation instructions, this will prevent the creation of triggers for new Lambda functions pointing to that same path. 

To delete the old triggers, 

1. In a new browser tab, login to the AWS console.
2. Navigate to the Lambda console.
3. Navigate to a specific function which holds an old trigger.
    * <img src={useBaseUrl('/img/lightning/deletetrigger1.png')} /> 
4. For each function, go to its Configuration tab (under the Function overview) and ensure you are in the Triggers tab (in the left-hand side, listed under General Configuration). Clicking on the rectangle with the S3 bucket icon (representing the trigger) in the Function overview should also bring you to the correct pane.
    * <img src={useBaseUrl('/img/lightning/deletetrigger2.png')} /> 
5. Once there, click the Details arrow to expand the details section and verify that the trigger you see has the same file path you wish to reclaim for your new Lambda function. If so, click its checkbox and then click delete in the upper right-hand corner of the Triggers pane.
    * <img src={useBaseUrl('/img/lightning/deletetrigger3.png')} />
    * <img src={useBaseUrl('/img/lightning/deletetrigger4.png')} />   
6. Repeat this process (step 3 - step 5) for each old Lambda function until all the file paths you wish to use are freed up. Those file paths will now be available for use in the Amazon Connect Salesforce Lambda setup steps which involve creating triggers.  

#### Delete the Previously-Deployed Stack

Once you have confirmed your successful upgrade of the Amazon Connect Salesforce Lambda, you may delete your previously-deployed stack of the older version of the Lambda package. To delete the previously-deployed stack, 

1. In a new browser tab, login to the AWS console.
2. Navigate to the CloudFormation console.
3. Ensure you are in the correct region.
4. If you are not already on the Stacks page, click Stacks listed in the left-hand navigation pane.
    * <img src={useBaseUrl('/img/lightning/lambdacf1.png')} />
5. Find and click the previously-deployed stack in the list.
6. In the split panel that appears for the stack, validate in the Stack info tab that the selected stack is the one you wish to delete.
    * <img src={useBaseUrl('/img/lightning/deletelambdastack1.png')} />
7. Click the Delete button in the split panel, then Delete in the pop-up confirmation message that appears.
    * <img src={useBaseUrl('/img/lightning/deletelambdastack2.png')} />
8. The stack will then begin to be deleted. This may take a few minutes; it is not necessary to stay on the page.
9. Confirm that the stack was successfully completed. If you have navigated away from the page, change the Filter status at the top of the Stacks list to Deleted, and verify that the previously-deployed Lambda stack appears marked DELETE_COMPLETE.
    * <img src={useBaseUrl('/img/lightning/deletelambdastack3.png')} />



## Upgrading the CTI Adapter
If you are upgrading from an earlier version of CTI Adapter, there are a
few additional things you need to do.

### AC CTI Adapter
1.  Go to the **Setup** section and search for **Object Manager**.

2.  In Object Manager section, search for "AC CTI"

<img src={useBaseUrl('/img/lightning/image104.png')} />

3.  Open up **AC CTI Adapter**

4.  On the left sidebar, click on **Page Layouts**

5.  Click on **Page Layout Assignment**

6.  On the next page, click on **Edit Assignments**

7.  Click on the grey bar at the top of the table to select all rows.

<img src={useBaseUrl('/img/lightning/image105.png')} />

<img src={useBaseUrl('/img/lightning/image106.png')} />

8.  Open the **Page Layout to Use** dropdown and select **AC CTI Adapter
    Layout -- August 2020**.

9.  Click **Save** and go back to **Page Layouts**.

10. Click on the dropdown next to the item labelled **AC CTI Adapter
    Layout** and click **Delete**.

11. Confirm **Yes** in the next dialogue where you will be asked "Are
    you sure?"

12. If you see a screen titled **Deletion Problems**, find and click
    **Delete**.

<img src={useBaseUrl('/img/lightning/image107.png')} />

13. You will be asked which layout you want to replace it with. Select
    **AC CTI Adapter Layout -- August 2020** and click **Replace.**

<img src={useBaseUrl('/img/lightning/image108.png')} />

### AC CTI Script
Now we are going to do the same thing for **AC CTI Script Layout**.

1.  Open up **AC CTI Script Layout**

2.  On the left sidebar, click on **Page Layouts**

3.  Click on **Page Layout Assignment**

4.  On the next page, click on **Edit Assignments**

5.  Click on the grey bar at the top of the table to select all rows.

<img src={useBaseUrl('/img/lightning/image109.png')} />

<img src={useBaseUrl('/img/lightning/image110.png')} />

6.  Open the **Page Layout to Use** dropdown and select **AC CTI Flow
    Layout**.

7.  Click **Save** and go back to **Page Layouts**.

8.  Click on the dropdown next to the item labelled **AC CTI Script
    Layout** and click **Delete**.

9.  Confirm **Yes** in the next dialogue where you will be asked "Are
    you sure?"

10. If you see a screen titled **Deletion Problems**, find and click
    **Delete**.

<img src={useBaseUrl('/img/lightning/image107.png')} />

11. You will be asked which layout you want to replace it with. Select
    **AC CTI Flow Layout** and click **Replace.**

<img src={useBaseUrl('/img/lightning/image111.png')} />

12. Go to your **CTI Adapter**.

13. Click on any of the CTI Flows and scroll down to the section labeled
    **CTI Flow**. You should see something like this:

<img src={useBaseUrl('/img/lightning/image112.png')} />

14. Click **Download** and save your script before clicking
    **Continue**.

15. Use the CTI Block primitives in the editor to re-create your script
    as a CTI Flow.

16. Refer to the Sample Flows in the Appendix of this manual.
