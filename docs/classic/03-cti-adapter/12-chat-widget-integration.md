---
id: 12-chat-widget-integration
title: Chat Widget Integration
---
import useBaseUrl from "@docusaurus/useBaseUrl";

SalesForce Experience Cloud allows you to setup a website for your customers easily, with the included template, you can setup a help center, or a customer service website with just a few clicks. Amazon Connect CTI Adapter now provides you a chat-widget component, and you can use it in the Experience Cloud Builder App to add the Amazon Connect Chat Widget to any page you want.
 
To start using this feature, you can either follow the steps below to setup an Experience Cloud Site for testing purpose, or you can skip to the next section if you are already familiar with SalesForce Experience Cloud
 
**Setup experience cloud site:**

* Go to Setup
* Search for Digital Experience
* Enable Digital Experience
* Create a new Site by clicking New button
<img src={useBaseUrl('/img/classic/chatwidget-(0).png')} />
* Choose Help center template to create a new site
<img src={useBaseUrl('/img/lightning/chatwidget-(0).png')} />
* Go to Builder of the new site
<img src={useBaseUrl('/img/lightning/chatwidget-(1).png')} />
* This will be the place to setup chat widget feature in the following sections. You can get yourself familiar with this Builder before moving to the next section.

 
**Setup chat widget for your experience cloud sites.**

* Option 1: Setting up using out-of-box VisualForce page. Choose this if you need the chat widget only on one specific page. 
* Option 2: Setting up using Lightning Component based on VisualForce page. Choose this if you need the chat widget only on one specific page but you don’t have the license for the VisualForce page component in the experience cloud builder. It is a workaround for Option1.
* Option 3: Setting up using custom header. Choose this if you want the chat widget exists across all pages.

 
**Option 1: Setting up using VisualForce page.**
 

* Follow instructions [here](https://docs.aws.amazon.com/connect/latest/adminguide/add-chat-to-website.html) to setup your Chat Widget and copy the script to a text editor.
* Go to Service Console
* Go to AC CTI Adapter
* Go to Features tab
* Click New to create a new Feature
* In the Name field, put FEATURE_CHAT_WIDGET
* In the Value field, input the following key value pairs based on your chat widget script. If you didn’t enable the security feature of chat widget, you don’t need to add the key value pair for authEndpoint

Example ChatWidget key value pairs input
```
{
    "cloudfrontId": "dg9yx063wiiht",
    "widgetId": "5338d219-92c7-427e-8b10-26a8f4dfb3d1",
    "openChatColor": "white",
    "openChatBackgroundColor": "#826359",
    "closeChatColor": "white",
    "closeChatBackgroundColor": "#940eb9",
    "snippetId": "QVFJREFIaUpTVGJkNWhNc0Q1WHpHYnFQTkJyYXN0.....=",
    "authEndpoint": "https://www.yourdomain.com/yourAuthEndpoint"
}
```
The input above is for the following example ChatWidget Script
<img src={useBaseUrl('/img/lightning/chatwidget-(16).png')} />

script:

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
</script>
```

Example Call back function for JWT
```
amazon_connect('authenticate', function(callback) {
  window.fetch('https://www.yourdomain.com/yourAuthEndpoint').then(res => {
    res.json().then(data => {
      callback(data.data);
    });
  });
});
```



* Click Save
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
* Add amazonconnect.AC_ChatWidget( or AC_ChatWidgetWithJWT if you have enabled security for chat widget)
<img src={useBaseUrl('/img/lightning/chatwidget-(6).png')} />
* Click Save
* Go to Enable Apex Class Access and add amazonconnect.AC_ChatWidgetController
<img src={useBaseUrl('/img/lightning/chatwidget-(7).png')} />
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
 

* Follow instructions [here](https://docs.aws.amazon.com/connect/latest/adminguide/add-chat-to-website.html) to setup your Chat Widget and copy the script to a text editor.
* Go to Service Console
* Go to AC CTI Adapter
* Go to Features tab
* Click New to create a new Feature
* In the Name field, put FEATURE_CHAT_WIDGET
* In the Value field, input the following key value pairs based on your chat widget script. If you didn’t enable the security feature of chat widget, you don’t need to add the key value pair for authEndpoint

Example ChatWidget key value pairs input
```
{
    "cloudfrontId": "dg9yx063wiiht",
    "widgetId": "5338d219-92c7-427e-8b10-26a8f4dfb3d1",
    "openChatColor": "white",
    "openChatBackgroundColor": "#826359",
    "closeChatColor": "white",
    "closeChatBackgroundColor": "#940eb9",
    "snippetId": "QVFJREFIaUpTVGJkNWhNc0Q1WHpHYnFQTkJyYXN0.....=",
    "authEndpoint": "https://www.yourdomain.com/yourAuthEndpoint"
}
```
The input above is for the following example ChatWidget Script
<img src={useBaseUrl('/img/lightning/chatwidget-(16).png')} />

script:

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
</script>
```

Example Call back function for JWT
```
amazon_connect('authenticate', function(callback) {
  window.fetch('https://www.yourdomain.com/yourAuthEndpoint').then(res => {
    res.json().then(data => {
      callback(data.data);
    });
  });
});
```

* Click Save
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
* Change Chat Widget URL to ``` <your-website-domain>/apex/amazonconnect__AC_ChatWidget``` if you did not enable the security for the chat widget. If you have enabled security, change it to ``` <your-website-domain>/apex/amazonconnect__AC_ChatWidgetWithJWT```
    * You will have the website domain once it is published. The URL is in Settings→General→Published Status, and the part from `https` to `.com` is your website domain. If you haven’t published it yet, you can update it once it is published and re-publish the website.
    * If you have site name, you need to append `/<site-name>` after your domain name. For example if the published website is `demo-developer-edition.na111.force.com/testing/s/`, your Chat Widget URL should be: 
        * If security disabled --> `demo-developer-edition.na111.force.com/testing/amazonconnect__AC_ChatWidget`
        * If security enabled --> `demo-developer-edition.na111.force.com/testing/amazonconnect__AC_ChatWidgetWithJWT`
* Go to Settings→General→Guest User Profile and click in to the Guest User Profile
<img src={useBaseUrl('/img/lightning/chatwidget-(5).png')} />
* Inside Guest user profile, go to Enabled Visualforce Page Access
* Add amazonconnect.AC_ChatWidget( or AC_ChatWidgetWithJWT if you have enabled security for chat widget)
<img src={useBaseUrl('/img/lightning/chatwidget-(6).png')} />
* Click Save
* Go to Enable Apex Class Access and add amazonconnect.AC_ChatWidgetController
<img src={useBaseUrl('/img/lightning/chatwidget-(7).png')} />
* Click Publish button on the top right to publish the website
<img src={useBaseUrl('/img/lightning/chatwidget-(8).png')} />
* Copy the published website URL in Settings→Published Status
* Go back to Amazon Connect Chat Widget website, add following url to the allow-list Domains:
    * The AC_ChatWidget visualforce page URL, remove everything after .com
    * The published website URL to chat widget allow-list origin, remove everything after .com
*** Verify the change:***
Open your published website in a incognito window, you should be able to use chat widget to chat as a customer and chat to your agent without login
 
 
 
 
 
