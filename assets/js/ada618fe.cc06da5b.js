"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[9064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(n),m=i,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),o=n(4996);const r={id:"06-outbound-campaign-calls",title:"Outbound Campaign Calls"},c=void 0,l={unversionedId:"classic/cti-adapter/06-outbound-campaign-calls",id:"classic/cti-adapter/06-outbound-campaign-calls",title:"Outbound Campaign Calls",description:"The package allows for running Outbound Call Campaigns using Salesforce",source:"@site/docs/classic/03-cti-adapter/06-outbound-campaign-calls.md",sourceDirName:"classic/03-cti-adapter",slug:"/classic/cti-adapter/06-outbound-campaign-calls",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/06-outbound-campaign-calls",draft:!1,editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/06-outbound-campaign-calls.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"06-outbound-campaign-calls",title:"Outbound Campaign Calls"},sidebar:"classic",previous:{title:"Call Display on the Account Page",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/05-call-display-account-page"},next:{title:"Amazon Connect Reports in Salesforce",permalink:"/amazon-connect-salesforce-cti/docs/classic/cti-adapter/07-amazon-connect-reports"}},s={},u=[{value:"Create a Queue",id:"create-a-queue",level:2},{value:"Create a Service Channel",id:"create-a-service-channel",level:2},{value:"Create a Routing Configuration",id:"create-a-routing-configuration",level:2},{value:"Outbound Campaign Custom Object Using Salesforce Data Loader",id:"outbound-campaign-custom-object-using-salesforce-data-loader",level:2}],p={toc:u};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The package allows for running Outbound Call Campaigns using Salesforce\nOmni Channel routing and Amazon Connect. To enable outbound campaigns,\nthe Custom Object called ",(0,i.kt)("strong",{parentName:"p"},"Amazon Connect Call Campaign"),", which comes\nbundled with the Adapter, must be configured to be routed by Salesforce\nOmni."),(0,i.kt)("p",null,"Outbound call campaigns are a feature of the package that utilizes\nOmni-Channel routing and Amazon Connect. To use the Call Campaigns, we\nmust first configure the following items:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Queue for users to manage a workload and configure it for\nthe custom object.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Service Channel and configure it for the custom object.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Routing Configuration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Associate the Routing Configuration with the Agents and the Queue.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Presence Status and Configuration and assign it to the\nUsers."))),(0,i.kt)("p",null,'First, we must enable omni-channel. To do this, navigate to "Setup" and\ntype "omni" into the Quick Find box, then select "Omni-Channel Settings"\nfrom the menu.'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image91.png")}),(0,i.kt)("p",null,'Place a check in the checkbox for "Enable Omni-Channel".'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image92.png")}),(0,i.kt)("h2",{id:"create-a-queue"},"Create a Queue"),(0,i.kt)("p",null,'Navigate to "Setup" and type "queue" into the Quick Find box, then\nselect "Queues" from the menu.'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image225.png")}),(0,i.kt)("p",null,"You may see some entries if you are already using Omni-Channel for other\nthings in your instance. We want to create a new queue for the purpose\nof handling these outbound call campaigns."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image226.png")}),(0,i.kt)("p",null,'On the Queues screen, click the "New" button. Fill-in the required\nfields and then scroll down the screen until you see "Supported\nObjects". Select the Amazon Connect Call Campaign object and click the\n"Add" button.'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image227.png")}),(0,i.kt)("p",null,'Scroll down to the Queue members to select the members of the queue. You\ncan assign the queue by Public Groups, Roles, Roles and Subordinates, or\nUsers. If you need to wade through many users, groups, or roles, feel\nfree to use the "Find" feature.'),(0,i.kt)("p",null,"Once you have found the entity you'd like to add, select it and click\nAdd, just like we did with the object in the previous step."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image228.png")}),(0,i.kt)("p",null,"Now, our queue has been created and assigned to users."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image229.png")}),(0,i.kt)("h2",{id:"create-a-service-channel"},"Create a Service Channel"),(0,i.kt)("p",null,'Click into the Setup search box in the left navigation panel and type\n"Service Channel". Then click "Service Channels".'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image230.png")}),(0,i.kt)("p",null,'Click "New" to create our new Service Channel.'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image231.png")}),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image232.png")}),(0,i.kt)("p",null,"In the new Service Channel form, enter your desired Service Channel Name\n(step 1). The Developer Name field will auto-populate based on the\nService Channel Name content. Then, select the ","[Amazon Connect Call\nCampaign]","{.ul} object (step 2). Finally, save the new Service Channel\n(step 3)."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image233.png")}),(0,i.kt)("h2",{id:"create-a-routing-configuration"},"Create a Routing Configuration"),(0,i.kt)("p",null,'Now, we need to create a routing configuration. Enter "routing" into the\nsearch box in the left navigation and click "Routing Configurations".'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image234.png")}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'On the Routing Configurations landing page, click "',(0,i.kt)("strong",{parentName:"li"},"New"),'".')),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image235.png")}),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image236.png")}),(0,i.kt)("p",null,"Enter the Routing Configuration Name (step 1), and the Developer Name\nwill auto-populate. If you'd like to set an Overflow Assignee, you can\noptionally do that at this point. The overflow assignee will receive\nwork if your organization reaches its Omni-Channel limits. This setting\nhas no effect until the limits are reached."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image237.png")}),(0,i.kt)("p",null,'Next, you must configure the Routing Settings.\nFirst, (step 1) enter the priority of the work across the Omni-Channel\nqueues. Second (step 2), select the model to use to act as the\ntie-breaker between agents. Third, (step 3) specify the units of\ncapacity or percentage of capacity of the work items in the queue.\nFinally, (step 4), click "Save".'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image238.png")}),(0,i.kt)("p",null,"You have created your Routing Configuration."),(0,i.kt)("p",null,'Now, we need to assign the Routing Configuration to our queue. From the\nQuick Find in Setup, enter "queues" and then select "Queues" (step 1).'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image239.png")}),(0,i.kt)("p",null,'Click on the "Edit" link next in the row of the queue that was created\nearlier (step 2).'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image240.png")}),(0,i.kt)("p",null,"Use the magnifying glass button to search for our new Routing\nConfiguration created earlier."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image241.png")}),(0,i.kt)("p",null,"Select our Routing Configuration from the Lookup window."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image242.png")}),(0,i.kt)("p",null,'Click "Save" to store our changes.'),(0,i.kt)("p",null,"The next steps are to create and configure the Presence Statuses."),(0,i.kt)("h2",{id:"outbound-campaign-custom-object-using-salesforce-data-loader"},"Outbound Campaign Custom Object Using Salesforce Data Loader"),(0,i.kt)("p",null,"The following is a description of the steps using the Salesforce Data\nLoader to insert outbound call campaign records. The Data Loader can be\nobtained from ",(0,i.kt)("a",{parentName:"p",href:"https://dataloader.io/"},"https://dataloader.io/")),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image243.png")}),(0,i.kt)("p",null,'Start by exporting the call campaign custom object. From the Data Loader\nUI, click the "Export" button. You will be prompted to Login. Select\nOAuth as the method and then provide your Salesforce login credentials.'),(0,i.kt)("p",null,"From the list of Salesforce objects select the ",(0,i.kt)("strong",{parentName:"p"},"Amazon Connect Call\nCampaign")," and export it to CSV file."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image244.png")}),(0,i.kt)("p",null,"Next, we need the Object ID of the Queue that was created earlier. To\nobtain that, use the Data Loader to extract a listing of Queues. You\nwill want to query for the QueueId."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image245.png")}),(0,i.kt)("p",null,"In this example, we want to pop Contact records when the outbound call\nis presented to the agent, so let's export a list of Contact to be\ncalled."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image246.png")}),(0,i.kt)("p",null,"Query for all or specific Contacts, based on pre-defined criteria. At a\nminimum, you will need to extract a list of the Id and Phone number of\nthe Contact."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image247.png")}),(0,i.kt)("p",null,'Using the data extracted in the Queue listing and the Contact listing\nfiles, construct the outbound campaign, by using the first file what was\nexported as a template. Open the exported "',(0,i.kt)("strong",{parentName:"p"},"Amazon Connect Call\nCampaign"),'" in a spreadsheet application, such as Microsoft Excel, and\nbuild a list of Contacts to be called.'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image248.png")}),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("strong",{parentName:"p"},"OWNERID")," column contains the QueueId\nobtained from the export of Queues. The ",(0,i.kt)("strong",{parentName:"p"},"CONTACT","_","_","C")," column contains\nthe Id of the Contact we want presented to the agent, when the outbound\ncall is initiated, and the ",(0,i.kt)("strong",{parentName:"p"},"PHONE_NUMBER","_","_","C")," field contains the\nphone number to be automatically dialed by Amazon Connect CCP."),(0,i.kt)("p",null,'Once you have built the campaign file, save it as a CSV file and then\nimport it into Salesforce, using the Data Loader. Select "',(0,i.kt)("strong",{parentName:"p"},"Amazon\nConnect Call Campaign"),'" as the target of the upload.'),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image249.png")}),(0,i.kt)("p",null,"Once the campaign has been uploaded, the campaign records will be added\nto the queue and the agents who are assigned to that queue should start\nreceiving the outbound requests in their Omni-Channel widget."),(0,i.kt)("img",{src:(0,o.Z)("/img/classic/image250.png")}))}g.isMDXComponent=!0}}]);