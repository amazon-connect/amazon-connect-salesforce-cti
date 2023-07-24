---
id: 11-chat-widget-integration
title: Chat Widget Integration
---
import useBaseUrl from "@docusaurus/useBaseUrl";

SalesForce Experience Cloud allows you to setup a website for your customers easily, with the included template, you can setup a help center, or a customer service website with just a few clicks. Amazon Connect CTI Adapter now provides you a chat-widget component, and you can use it in the Experience Cloud Builder App to add the Amazon Connect Chat Widget to any page you want. 

The screenshot below shows an example of having the chat widget added to a help center website. Please note that this feature does not support **Build Your Own(LWR)** and **Salesforce Tabs + Visualforce** template.

<img src={useBaseUrl('/img/lightning/chatwidget-(10).png')} />
 
To start using this feature, you can either follow the steps below to setup an Experience Cloud Site for testing purpose, or you can skip to the next section if you are already familiar with SalesForce Experience Cloud.
 
**Setup experience cloud site:**

* Go to Setup
* Search for Digital Experience
* Enable Digital Experience
<img src={useBaseUrl('/img/lightning/chatwidget-001.png')} />
* Create a new Site by clicking New button
<img src={useBaseUrl('/img/lightning/chatwidget-002.png')} />
* Choose Help center template to create a new site
<img src={useBaseUrl('/img/lightning/chatwidget-(0).png')} />
* Go to Builder of the new site
<img src={useBaseUrl('/img/lightning/chatwidget-(1).png')} />
* This will be the place to setup chat widget feature in the following sections. You can get yourself familiar with this Builder before moving to the next section.

**Setup Chat Widget in Amazon Connect**
* Follow instructions [here](https://docs.aws.amazon.com/connect/latest/adminguide/add-chat-to-website.html) to setup your Chat Widget and copy the script to a text editor.
* Example of Script:

```
<script type="text/javascript">
  (function(w, d, x, id){
    s=d.createElement('script');
    s.src='https://dg9yx063wiiht.cloudfront.net/amazon-connect-chat-interface-client.js';
    s.async=1;
    s.id=id;
    d.getElementsByTagName('head')[0].appendChild(s);
    w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
  })(window, document, 'amazon_connect', '5338d219-92c7-427e-8b10-26a8f4dfb3d1');
  amazon_connect('styles', { openChat: { color: 'white', backgroundColor: '#826359'}, closeChat: { color: 'white', backgroundColor: '#940eb9'} });
  amazon_connect('snippetId', 'QVFJREFIaUpTVGJkNWhNc0Q1WHpHYnFQTkJyYXN0.....=');
  amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);
</script>
```

* Example Call back function for JWT
```
amazon_connect('authenticate', function(callback) {
  window.fetch('https://www.yourdomain.com/yourAuthEndpoint').then(res => {
    res.json().then(data => {
      callback(data.data);
    });
  });
});
```

**Create Required Visualforce Pages**
* Navigate to the Salesforce Setup by clicking on the gear icon in the top-right corner of the page.
* In the Setup menu, search for "Visualforce Pages" in the quick find box and click on that.
* On the "Visualforce Pages" page, click on the "New" button.
* According to Security selected above in  Amazon Connect Chat Widget website:
    * If Enabled: Provide name like "AC_ChatWidgetWithJWT" in the "Label" field & "Name" field for your Visualforce page.
    * If Disabled:  Provide name like "AC_ChatWidget" in the "Label" field & "Name" field for your Visualforce page.
    * *Note: Going forward in documentation, Use the same name which you mention here in place of "AC_ChatWidgetWithJWT" or "AC_ChatWidget".*
* Check the box front of "Available for Lightning Experience, Experience Builder sites, and the mobile app" field.
* Copy the below snippet in text editor and replace comments with mentioned script copied from [here](/docs/classic/03-cti-adapter/12-chat-widget-integration.md#Setup Chat Widget in Amazon Connect).
    * For "AC_ChatWidgetWithJWT" Visual force page:
```
<apex:page id="AC_ChatWidgetWithJWT" showHeader="false" sideBar="false" docType="html-5.0">
  <html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" lang="en">
 
  <head>
    <apex:slds />
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="text/javascript">
 
      <!-- Add Chat widget script here -->
      <!-- Add Call back function for JWT here -->  
    </script>
  </head>
  </html>
</apex:page>
```
Example:

```
<apex:page id="AC_ChatWidgetWithJWT" showHeader="false" sideBar="false" docType="html-5.0">
  <html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" lang="en">

  <head>
    <apex:slds />
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="text/javascript">
      <!-- Add Chat widget script here -->
      (function(w, d, x, id){
        s=d.createElement('script');
        s.src='https://dg9yx063wiiht.cloudfront.net/amazon-connect-chat-interface-client.js';
        s.async=1;
        s.id=id;
        d.getElementsByTagName('head')[0].appendChild(s);
        w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
      })(window, document, 'amazon_connect', '5338d219-92c7-427e-8b10-26a8f4dfb3d1');
      amazon_connect('styles', { openChat: { color: 'white', backgroundColor: '#826359'}, closeChat: { color: 'white', backgroundColor: '#940eb9'} });
      amazon_connect('snippetId', 'QVFJREFIaUpTVGJkNWhNc0Q1WHpHYnFQTkJyYXN0.....=');
      amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);

      <!-- Add Call back function for JWT here -->
      amazon_connect('authenticate', function(callback) {
        window.fetch('https://www.yourdomain.com/yourAuthEndpoint').then(res => {
          res.json().then(data => {
            callback(data.data);
          });
        });
      });
    </script>
  </head>
  </html>
</apex:page>
```
*
    * For "AC_ChatWidget" Visual force page:

```
<apex:page id="AC_ChatWidget" showHeader="false" sideBar="false" docType="html-5.0">
  <html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" lang="en">

  <head>
    <apex:slds />
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="text/javascript">
      <!-- Add Chat widget script here -->
    </script>
  </head>
  </html>
</apex:page>
```
Example:

```
<apex:page id="AC_ChatWidget" showHeader="false" sideBar="false" docType="html-5.0">
  <html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" lang="en">

  <head>
    <apex:slds />
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="text/javascript">
      <!-- Add Chat widget script here -->
      (function(w, d, x, id){
        s=d.createElement('script');
        s.src='https://dg9yx063wiiht.cloudfront.net/amazon-connect-chat-interface-client.js';
        s.async=1;
        s.id=id;
        d.getElementsByTagName('head')[0].appendChild(s);
        w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
      })(window, document, 'amazon_connect', '5338d219-92c7-427e-8b10-26a8f4dfb3d1');
      amazon_connect('styles', { openChat: { color: 'white', backgroundColor: '#826359'}, closeChat: { color: 'white', backgroundColor: '#940eb9'} });
      amazon_connect('snippetId', 'QVFJREFIaUpTVGJkNWhNc0Q1WHpHYnFQTkJyYXN0.....=');
      amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);
    </script>
  </head>
  </html>
</apex:page>
```
* Final page should look like below image. Click on Save button. <img src={useBaseUrl('/img/lightning/chatwidget-(17).png')} />

 
**Setup chat widget for your experience cloud sites.**

* Option 1: Setting up using out-of-box VisualForce page. Choose this if you need the chat widget only on one specific page. 
* Option 2: Setting up using Lightning Component based on VisualForce page. Choose this if you need the chat widget only on one specific page but you don’t have the license for the VisualForce page component in the experience cloud builder. It is a workaround for Option1.
* Option 3: Setting up using custom header. Choose this if you want the chat widget exists across all pages.

 
**Option 1: Setting up using VisualForce page.**
* Go to Setup
* Go to VisualForce page
* Select AC_ChatWidget
* Click Preview
* You should see a chat icon on the right bottom corner. If not, check browser console for error messages
* Copy the AC_ChatWidget visualforce page URL.
* Go to your Experience Cloud Builder
<img src={useBaseUrl('/img/lightning/chatwidget-(2).png')} />
* Open Components
<img src={useBaseUrl('/img/lightning/chatwidget-(3).png')} />
* Drag and drop Visualforce Page to your page. If you didn’t enable chat widget security, you need to change the Visualforce Page Name to AC_ChatWidget. If you enabled security for ChatWidget, change it to AC_ChatWidgetWithJWT
<img src={useBaseUrl('/img/lightning/chatwidget-(4).png')} />
* Go to Settings→General→Guest User Profile and click in to the Guest User Profile
<img src={useBaseUrl('/img/lightning/chatwidget-(5).png')} />
* Inside Guest user profile, go to Enabled Visualforce Page Access
* Add AC_ChatWidget( or AC_ChatWidgetWithJWT if you have enabled security for chat widget)
  <img src={useBaseUrl('/img/lightning/chatwidget-(6).png')} />
* Click Save
* Click Publish button on the top right to publish the website
<img src={useBaseUrl('/img/lightning/chatwidget-(8).png')} />
* Copy the published website URL in Settings→Published Status
* Go back to Amazon Connect Chat Widget website, add following url to the allow-list Domains:
    * The AC_ChatWidget visualforce page URL, remove everything after .com
    * The published website URL to chat widget allow-list origin, remove everything after .com
* Go to Setup→Sharing Settings. Search for AC CTI Adapter Sharing Rules. Create a new Rule for Guest user so that they have the object access. Make sure in Step2 the Rule Type is Guest user access, the Steps 3 you put a proper criteria, for testing purpose you can put CTI Adapter Name not equal to 1. In Step 4 Share with the Guest user profile of the community website you are working on, and change the Access level to Read Only
<img src={useBaseUrl('/img/lightning/chatwidget-(9).png')} />

*** Verify the change:***
Open your published website in a incognito window, you should be able to use chat widget to chat as a customer and chat to your agent without login
Note: If you want to setup chat widget for authorized user group only, you could change the settings to the guest profile to the authorized user profile.

**Option 2: Setting up using out-of-box Lightning Component.**

* Go to Setup
* Go to VisualForce page
* Select AC_ChatWidget
* Click Preview
* You should see a chat icon on the right bottom corner. If not, check browser console for error messages
* Copy the AC_ChatWidget visualforce page URL.
* Go to your Experience Cloud Builder
<img src={useBaseUrl('/img/lightning/chatwidget-(2).png')} />
* Open Components
<img src={useBaseUrl('/img/lightning/chatwidget-(3).png')} />
* Drag and drop iFrame Component to your page
<img src={useBaseUrl('/img/lightning/chatwidget-(12).png')} />
* Change Chat Widget URL to ``` <your-website-domain>/AC_ChatWidget``` if you did not enable the security for the chat widget. If you have enabled security, change it to ``` <your-website-domain>/AC_ChatWidgetWithJWT```
    * You will have the website domain once it is published. The URL is in Settings→General→Published Status, and the part from `https` to `.com` is your website domain. If you haven’t published it yet, you can update it once it is published and re-publish the website.
    * If you have site name, you need to append `/<site-name>` after your domain name. For example if the published website is `demo-developer-edition.na111.force.com/testing/s/`, your Chat Widget URL should be: 
        * If security disabled --> `demo-developer-edition.na111.force.com/testing/AC_ChatWidget`
        * If security enabled --> `demo-developer-edition.na111.force.com/testing/AC_ChatWidgetWithJWT`
* Go to Settings→General→Guest User Profile and click in to the Guest User Profile
<img src={useBaseUrl('/img/lightning/chatwidget-(5).png')} />
* Inside Guest user profile, go to Enabled Visualforce Page Access
* Add AC_ChatWidget( or AC_ChatWidgetWithJWT if you have enabled security for chat widget)
<img src={useBaseUrl('/img/lightning/chatwidget-(6).png')} />
* Click Save
* Click Publish button on the top right to publish the website
<img src={useBaseUrl('/img/lightning/chatwidget-(8).png')} />
* Copy the published website URL in Settings→Published Status
* Go back to Amazon Connect Chat Widget website, add following url to the allow-list Domains:
    * The AC_ChatWidget visualforce page URL, remove everything after .com
    * The published website URL to chat widget allow-list origin, remove everything after .com
*** Verify the change:***
Open your published website in a incognito window, you should be able to use chat widget to chat as a customer and chat to your agent without login
 
 
 
 
 
