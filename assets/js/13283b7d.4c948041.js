"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[1355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),o=n(4996);const r={id:"12-chat-widget-integration",title:"Chat Widget Integration"},l=void 0,c={unversionedId:"classic/cti-adapter/12-chat-widget-integration",id:"classic/cti-adapter/12-chat-widget-integration",title:"Chat Widget Integration",description:"SalesForce Experience Cloud allows you to setup a website for your customers easily, with the included template, you can setup a help center, or a customer service website with just a few clicks. Amazon Connect CTI Adapter now provides you a chat-widget component, and you can use it in the Experience Cloud Builder App to add the Amazon Connect Chat Widget to any page you want.",source:"@site/docs/classic/03-cti-adapter/12-chat-widget-integration.md",sourceDirName:"classic/03-cti-adapter",slug:"/classic/cti-adapter/12-chat-widget-integration",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/12-chat-widget-integration",draft:!1,editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/12-chat-widget-integration.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"12-chat-widget-integration",title:"Chat Widget Integration"},sidebar:"classic",previous:{title:"Recording Controls",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/11-recording-controls"},next:{title:"Wisdom Integration",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/13-wisdom-integration"}},s={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SalesForce Experience Cloud allows you to setup a website for your customers easily, with the included template, you can setup a help center, or a customer service website with just a few clicks. Amazon Connect CTI Adapter now provides you a chat-widget component, and you can use it in the Experience Cloud Builder App to add the Amazon Connect Chat Widget to any page you want. "),(0,i.kt)("p",null,"The screenshot below shows an example of having the chat widget added to a help center website. Please note that this feature does not support ",(0,i.kt)("strong",{parentName:"p"},"Build Your Own(LWR)")," and ",(0,i.kt)("strong",{parentName:"p"},"Salesforce Tabs + Visualforce")," template."),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(10).png")}),"To start using this feature, you can either follow the steps below to setup an Experience Cloud Site for testing purpose, or you can skip to the next section if you are already familiar with SalesForce Experience Cloud. **Setup experience cloud site:**",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to Setup"),(0,i.kt)("li",{parentName:"ul"},"Search for Digital Experience"),(0,i.kt)("li",{parentName:"ul"},"Enable Digital Experience"),(0,i.kt)("li",{parentName:"ul"},"Create a new Site by clicking New button",(0,i.kt)("img",{src:(0,o.Z)("/img/classic/chatwidget-(0).png")})),(0,i.kt)("li",{parentName:"ul"},"Choose Help center template to create a new site",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(0).png")})),(0,i.kt)("li",{parentName:"ul"},"Go to Builder of the new site",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(1).png")})),(0,i.kt)("li",{parentName:"ul"},"This will be the place to setup chat widget feature in the following sections. You can get yourself familiar with this Builder before moving to the next section.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setup chat widget for your experience cloud sites.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Option 1: Setting up using out-of-box VisualForce page. Choose this if you need the chat widget only on one specific page. "),(0,i.kt)("li",{parentName:"ul"},"Option 2: Setting up using Lightning Component based on VisualForce page. Choose this if you need the chat widget only on one specific page but you don\u2019t have the license for the VisualForce page component in the experience cloud builder. It is a workaround for Option1."),(0,i.kt)("li",{parentName:"ul"},"Option 3: Setting up using custom header. Choose this if you want the chat widget exists across all pages.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Option 1: Setting up using VisualForce page.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow instructions ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/connect/latest/adminguide/add-chat-to-website.html"},"here")," to setup your Chat Widget and copy the script to a text editor."),(0,i.kt)("li",{parentName:"ul"},"Go to Service Console"),(0,i.kt)("li",{parentName:"ul"},"Go to AC CTI Adapter. If the CTI Adapter Owner is ",(0,i.kt)("inlineCode",{parentName:"li"},"Amazon Connect - Universal Package"),", please update it to yourself or any other real user."),(0,i.kt)("li",{parentName:"ul"},"Go to Features tab"),(0,i.kt)("li",{parentName:"ul"},"Click New to create a new Feature"),(0,i.kt)("li",{parentName:"ul"},"In the Name field, put FEATURE_CHAT_WIDGET"),(0,i.kt)("li",{parentName:"ul"},"In the Value field, input the following key value pairs based on your chat widget script. If you didn\u2019t enable the security feature of chat widget, you don\u2019t need to add the key value pair for authEndpoint")),(0,i.kt)("p",null,"Example ChatWidget key value pairs input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "cloudfrontId": "dg9yx063wiiht",\n    "widgetId": "5338d219-92c7-427e-8b10-26a8f4dfb3d1",\n    "openChatColor": "white",\n    "openChatBackgroundColor": "#826359",\n    "closeChatColor": "white",\n    "closeChatBackgroundColor": "#940eb9",\n    "snippetId": "QVFJREFIaUpTVGJkNWhNc0Q1WHpHYnFQTkJyYXN0.....=",\n    "authEndpoint": "https://www.yourdomain.com/yourAuthEndpoint"\n}\n')),(0,i.kt)("p",null,"The input above is for the following example ChatWidget Script"),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(16).png")}),(0,i.kt)("p",null,"script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<script type=\"text/javascript\">\n  (function(w, d, x, id){\n    s=d.createElement('script');\n    s.src='https://dg9yx063wiiht.cloudfront.net/amazon-connect-chat-interface-client.js';\n    s.async=1;\n    s.id=id;\n    d.getElementsByTagName('head')[0].appendChild(s);\n    w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };\n  })(window, document, 'amazon_connect', '5338d219-92c7-427e-8b10-26a8f4dfb3d1');\n  amazon_connect('styles', { openChat: { color: 'white', backgroundColor: '#826359'}, closeChat: { color: 'white', backgroundColor: '#940eb9'} });\n  amazon_connect('snippetId', 'QVFJREFIaUpTVGJkNWhNc0Q1WHpHYnFQTkJyYXN0.....=');\n<\/script>\n")),(0,i.kt)("p",null,"Example Call back function for JWT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"amazon_connect('authenticate', function(callback) {\n  window.fetch('https://www.yourdomain.com/yourAuthEndpoint').then(res => {\n    res.json().then(data => {\n      callback(data.data);\n    });\n  });\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click Save"),(0,i.kt)("li",{parentName:"ul"},"Go to Setup"),(0,i.kt)("li",{parentName:"ul"},"Go to VisualForce page"),(0,i.kt)("li",{parentName:"ul"},"Select AC_ChatWidget"),(0,i.kt)("li",{parentName:"ul"},"Click Preview"),(0,i.kt)("li",{parentName:"ul"},"You should see a chat icon on the right bottom corner. If not, check browser console for error messages"),(0,i.kt)("li",{parentName:"ul"},"Copy the AC_ChatWidget visualforce page URL."),(0,i.kt)("li",{parentName:"ul"},"Go to your Experience Cloud Builder",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(2).png")})),(0,i.kt)("li",{parentName:"ul"},"Open Components",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(3).png")})),(0,i.kt)("li",{parentName:"ul"},"Drag and drop Visualforce Page to your page. If you didn\u2019t enable chat widget security, you need to change the Visualforce Page Name to AC_ChatWidget. If you enabled security for ChatWidget, change it to AC_ChatWidgetWithJWT",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(4).png")})),(0,i.kt)("li",{parentName:"ul"},"Go to Settings\u2192General\u2192Guest User Profile and click in to the Guest User Profile",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(5).png")})),(0,i.kt)("li",{parentName:"ul"},"Inside Guest user profile, go to Enabled Visualforce Page Access"),(0,i.kt)("li",{parentName:"ul"},"Add amazonconnect.AC_ChatWidget( or AC_ChatWidgetWithJWT if you have enabled security for chat widget)",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(6).png")})),(0,i.kt)("li",{parentName:"ul"},"Click Save"),(0,i.kt)("li",{parentName:"ul"},"Go to Enable Apex Class Access and add amazonconnect.AC_ChatWidgetController",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(7).png")})),(0,i.kt)("li",{parentName:"ul"},"Click Publish button on the top right to publish the website",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(8).png")})),(0,i.kt)("li",{parentName:"ul"},"Copy the published website URL in Settings\u2192Published Status"),(0,i.kt)("li",{parentName:"ul"},"Go back to Amazon Connect Chat Widget website, add following url to the allow-list Domains:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The AC_ChatWidget visualforce page URL, remove everything after .com"),(0,i.kt)("li",{parentName:"ul"},"The published website URL to chat widget allow-list origin, remove everything after .com"))),(0,i.kt)("li",{parentName:"ul"},"Go to Setup\u2192Sharing Settings. Search for AC CTI Adapter Sharing Rules. Create a new Rule for Guest user so that they have the object access. Make sure in Step2 the Rule Type is Guest user access, the Steps 3 you put a proper criteria, for testing purpose you can put CTI Adapter Name not equal to 1. In Step 4 Share with the Guest user profile of the community website you are working on, and change the Access level to Read Only",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(9).png")}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"}," Verify the change:")),"\nOpen your published website in a incognito window, you should be able to use chat widget to chat as a customer and chat to your agent without login\nNote: If you want to setup chat widget for authorized user group only, you could change the settings to the guest profile to the authorized user profile."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Option 2: Setting up using out-of-box Lightning Component.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow instructions ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/connect/latest/adminguide/add-chat-to-website.html"},"here")," to setup your Chat Widget and copy the script to a text editor."),(0,i.kt)("li",{parentName:"ul"},"Go to Service Console"),(0,i.kt)("li",{parentName:"ul"},"Go to AC CTI Adapter. If the CTI Adapter Owner is ",(0,i.kt)("inlineCode",{parentName:"li"},"Amazon Connect - Universal Package"),", please update it to yourself or any other real user."),(0,i.kt)("li",{parentName:"ul"},"Go to Features tab"),(0,i.kt)("li",{parentName:"ul"},"Click New to create a new Feature"),(0,i.kt)("li",{parentName:"ul"},"In the Name field, put FEATURE_CHAT_WIDGET"),(0,i.kt)("li",{parentName:"ul"},"In the Value field, input the following key value pairs based on your chat widget script. If you didn\u2019t enable the security feature of chat widget, you don\u2019t need to add the key value pair for authEndpoint")),(0,i.kt)("p",null,"Example ChatWidget key value pairs input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "cloudfrontId": "dg9yx063wiiht",\n    "widgetId": "5338d219-92c7-427e-8b10-26a8f4dfb3d1",\n    "openChatColor": "white",\n    "openChatBackgroundColor": "#826359",\n    "closeChatColor": "white",\n    "closeChatBackgroundColor": "#940eb9",\n    "snippetId": "QVFJREFIaUpTVGJkNWhNc0Q1WHpHYnFQTkJyYXN0.....=",\n    "authEndpoint": "https://www.yourdomain.com/yourAuthEndpoint"\n}\n')),(0,i.kt)("p",null,"The input above is for the following example ChatWidget Script"),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(16).png")}),(0,i.kt)("p",null,"script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<script type=\"text/javascript\">\n  (function(w, d, x, id){\n    s=d.createElement('script');\n    s.src='https://dg9yx063wiiht.cloudfront.net/amazon-connect-chat-interface-client.js';\n    s.async=1;\n    s.id=id;\n    d.getElementsByTagName('head')[0].appendChild(s);\n    w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };\n  })(window, document, 'amazon_connect', '5338d219-92c7-427e-8b10-26a8f4dfb3d1');\n  amazon_connect('styles', { openChat: { color: 'white', backgroundColor: '#826359'}, closeChat: { color: 'white', backgroundColor: '#940eb9'} });\n  amazon_connect('snippetId', 'QVFJREFIaUpTVGJkNWhNc0Q1WHpHYnFQTkJyYXN0.....=');\n<\/script>\n")),(0,i.kt)("p",null,"Example Call back function for JWT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"amazon_connect('authenticate', function(callback) {\n  window.fetch('https://www.yourdomain.com/yourAuthEndpoint').then(res => {\n    res.json().then(data => {\n      callback(data.data);\n    });\n  });\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click Save"),(0,i.kt)("li",{parentName:"ul"},"Go to Setup"),(0,i.kt)("li",{parentName:"ul"},"Go to VisualForce page"),(0,i.kt)("li",{parentName:"ul"},"Select AC_ChatWidget"),(0,i.kt)("li",{parentName:"ul"},"Click Preview"),(0,i.kt)("li",{parentName:"ul"},"You should see a chat icon on the right bottom corner. If not, check browser console for error messages"),(0,i.kt)("li",{parentName:"ul"},"Copy the AC_ChatWidget visualforce page URL."),(0,i.kt)("li",{parentName:"ul"},"Go to your Experience Cloud Builder",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(2).png")})),(0,i.kt)("li",{parentName:"ul"},"Open Components",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(3).png")})),(0,i.kt)("li",{parentName:"ul"},"Drag and drop iFrame Component to your page",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(12).png")})),(0,i.kt)("li",{parentName:"ul"},"Change Chat Widget URL to ",(0,i.kt)("inlineCode",{parentName:"li"}," <your-website-domain>/apex/amazonconnect__AC_ChatWidget")," if you did not enable the security for the chat widget. If you have enabled security, change it to ",(0,i.kt)("inlineCode",{parentName:"li"}," <your-website-domain>/apex/amazonconnect__AC_ChatWidgetWithJWT"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You will have the website domain once it is published. The URL is in Settings\u2192General\u2192Published Status, and the part from ",(0,i.kt)("inlineCode",{parentName:"li"},"https")," to ",(0,i.kt)("inlineCode",{parentName:"li"},".com")," is your website domain. If you haven\u2019t published it yet, you can update it once it is published and re-publish the website."),(0,i.kt)("li",{parentName:"ul"},"If you have site name, you need to append ",(0,i.kt)("inlineCode",{parentName:"li"},"/<site-name>")," after your domain name. For example if the published website is ",(0,i.kt)("inlineCode",{parentName:"li"},"demo-developer-edition.na111.force.com/testing/s/"),", your Chat Widget URL should be: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If security disabled --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"demo-developer-edition.na111.force.com/testing/amazonconnect__AC_ChatWidget")),(0,i.kt)("li",{parentName:"ul"},"If security enabled --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"demo-developer-edition.na111.force.com/testing/amazonconnect__AC_ChatWidgetWithJWT")))))),(0,i.kt)("li",{parentName:"ul"},"Go to Settings\u2192General\u2192Guest User Profile and click in to the Guest User Profile",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(5).png")})),(0,i.kt)("li",{parentName:"ul"},"Inside Guest user profile, go to Enabled Visualforce Page Access"),(0,i.kt)("li",{parentName:"ul"},"Add amazonconnect.AC_ChatWidget( or AC_ChatWidgetWithJWT if you have enabled security for chat widget)",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(6).png")})),(0,i.kt)("li",{parentName:"ul"},"Click Save"),(0,i.kt)("li",{parentName:"ul"},"Go to Enable Apex Class Access and add amazonconnect.AC_ChatWidgetController",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(7).png")})),(0,i.kt)("li",{parentName:"ul"},"Click Publish button on the top right to publish the website",(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/chatwidget-(8).png")})),(0,i.kt)("li",{parentName:"ul"},"Copy the published website URL in Settings\u2192Published Status"),(0,i.kt)("li",{parentName:"ul"},"Go back to Amazon Connect Chat Widget website, add following url to the allow-list Domains:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"* The AC_ChatWidget visualforce page URL, remove everything after .com\n* The published website URL to chat widget allow-list origin, remove everything after .com\n")),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"}," Verify the change:")),"\nOpen your published website in a incognito window, you should be able to use chat widget to chat as a customer and chat to your agent without login")))}d.isMDXComponent=!0}}]);