"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[9312],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,k=u["".concat(i,".").concat(g)]||u[g]||m[g]||s;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),s=a(4996);const o={id:"04-presence-sync-rules",title:"Presence Sync Rules"},l=void 0,i={unversionedId:"lightning/cti-adapter/04-presence-sync-rules",id:"lightning/cti-adapter/04-presence-sync-rules",title:"Presence Sync Rules",description:"The CTI Adapter supports bidirectional synchronization of agent state",source:"@site/docs/lightning/03-cti-adapter/04-presence-sync-rules.md",sourceDirName:"lightning/03-cti-adapter",slug:"/lightning/cti-adapter/04-presence-sync-rules",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/04-presence-sync-rules",draft:!1,editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/04-presence-sync-rules.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"04-presence-sync-rules",title:"Presence Sync Rules"},sidebar:"lightning",previous:{title:"CTI Flow",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/03-cti-flows"},next:{title:"Localization",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/05-localization"}},p={},c=[{value:"Configuring Statuses",id:"configuring-statuses",level:3},{value:"Amazon Connect System Statuses",id:"amazon-connect-system-statuses",level:3},{value:"Create Presence Statuses in Amazon Connect",id:"create-presence-statuses-in-amazon-connect",level:3},{value:"Create an Amazon Connect status",id:"create-an-amazon-connect-status",level:4},{value:"Create Presence Statuses in Salesforce",id:"create-presence-statuses-in-salesforce",level:3},{value:"Create a Salesforce presence status",id:"create-a-salesforce-presence-status",level:4},{value:"Configure Enabled Service Presences Status Access in Salesforce",id:"configure-enabled-service-presences-status-access-in-salesforce",level:4},{value:"Configure Presence Sync Rules",id:"configure-presence-sync-rules",level:3},{value:"Create a Presence Sync Rule",id:"create-a-presence-sync-rule",level:4}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The CTI Adapter supports bidirectional synchronization of agent state\nbetween Amazon Connect and Salesforce Omnichannel. This allows you to\ntightly control agent availability for different contact/media types\ndependent on current agent state. This section of the guide assumes that\nyou have Omnichannel configured appropriately. If you do not and wish to\ntest this function, please refer to the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/lightning/appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel"},"Configure Salesforce Omnichannel for Testing"),"."),(0,r.kt)("p",null,"NOTE: In order for Presence Sync to work, the CTI Adapter must be\nconfigured to allow it. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/lightning/cti-adapter/01-cti-adapter-configuration"},"CTI Adapter Details"),"\nfor more information."),(0,r.kt)("p",null,"NOTE: After Salesforce Winter \u201922 Release, users need to have View Setup and Configuration OR View DeveloperName permission via a profile or permission set to use this feature. See ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=000362829&type=1"},"New Permission Requirements for DeveloperName Field")," for more information."),(0,r.kt)("p",null,"Presence Sync Rules are evaluated based on specific events. The\navailable events are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Connect Agent State Change:")," The Connect agent's state has\nchanged.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce Agent State Change:")," The Salesforce agent's state has\nchanged.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce Agent Logout:")," The Salesforce agent has logged out.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce Work Accepted:")," The Salesforce agent has accepted\nwork.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce Workload Changed:")," The Salesforce agent's workload has\nchanged."))),(0,r.kt)("p",null,"Once the event is triggered, the CTI adapter will evaluate the provided\ncriteria. The criteria is established by comparing Operand A, using\nstandard comparator options, against Operand B. Possible options for\nOperand A and B are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Connect Agent New State:")," The Connect agent's new state value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Connect Agent Old State:")," The Connect agent's old (previous)\nstate value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce Agent New State:")," The Salesforce agent's new state\nvalue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce Service Channel:")," The service channel upon which the\nSalesforce agent has accepted work")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce Previous Workload:")," The Salesforce agent's previous\nworkload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce Previous Workload Pct:")," The Salesforce agent's\npervious workload expressed as a percent of configured capacity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce New Workload:")," The Salesforce agent's new workload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce New Workload Pct:")," The Salesforce agent's new workload\nexpressed as a percent of configured capacity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Salesforce Configured Capacity:")," The Salesforce agent's\nconfigured capacity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Static Value:"),' The user may provide a value. For example, a\ncustom agent state name or other alphanumeric value. When Static\nValue is selected a "Value" field becomes visible to accept the\nusers static value input.'))),(0,r.kt)("p",null,"Available comparators are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Equal to:")," Are Operand A and Operand B equal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Not equal to:")," Are Operand A and Operand B not equal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Greater than:")," Is Operand A greater than Operand B")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Greater than or equal to:")," Is Operand A greater than or equal to\nOperand B")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Less than:")," Is Operand A less than Operand B")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Less than or equal to:")," Is Operand A less than or equal to\nOperand B"))),(0,r.kt)("h3",{id:"configuring-statuses"},"Configuring Statuses"),(0,r.kt)("p",null,"Presence Sync Rules require statuses in both Amazon Connect and\nSalesforce. In this example, we will add two additional statuses to each\nside of the configuration and prepare rules that sync both clients to\nthe same state regardless of which agent sets the status. Essentially,\nyou will configure the status sync similar to the following example:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"When a sets status to b"),(0,r.kt)("th",{parentName:"tr",align:null},"Set x to y"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amazon Connect sets status to Available"),(0,r.kt)("td",{parentName:"tr",align:null},"Omnichannel to Available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Omnichannel sets status to Available"),(0,r.kt)("td",{parentName:"tr",align:null},"Amazon Connect to Available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amazon Connect sets status to Working -- Phone"),(0,r.kt)("td",{parentName:"tr",align:null},"Omnichannel to Working -- Phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Omnichannel sets status to Working -- Media"),(0,r.kt)("td",{parentName:"tr",align:null},"Amazon Connect to Working - Media")))),(0,r.kt)("h3",{id:"amazon-connect-system-statuses"},"Amazon Connect System Statuses"),(0,r.kt)("p",null,"The following Amazon Connect CCP statuses are system statuses that can be used in presence sync.\nPlease note however that these statuses are restricted and you cannot set the Amazon Connect status\nto the below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Busy - agent is in a call"),(0,r.kt)("li",{parentName:"ul"},"Pending - agent is receiving a request for a queue callback"),(0,r.kt)("li",{parentName:"ul"},"PendingBusy - agent is receiving call"),(0,r.kt)("li",{parentName:"ul"},"CallingCustomer - agent is calling customer"),(0,r.kt)("li",{parentName:"ul"},"AfterCallWork - agent is in the after call work screen")),(0,r.kt)("h3",{id:"create-presence-statuses-in-amazon-connect"},"Create Presence Statuses in Amazon Connect"),(0,r.kt)("p",null,"Agents are responsible for setting their status in the Contact Control\nPanel (CCP). Typically, the only time an agent\\'s status changes is when\nthey manually change it in the CCP however Presence Sync Rules can\nautomate the process when conditions are met."),(0,r.kt)("p",null,"Amazon Connect provides two default status values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Available")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Offline"))),(0,r.kt)("p",null,"You can change the name of these values, and you can add new ones. For\nexample, you might add a status for Lunch, and another for Training.\nThese and the default status values will be used for reporting, metrics,\nand resource management."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," When you add a new status, it will always be ",(0,r.kt)("strong",{parentName:"p"},"Custom"),", not\nroutable."),(0,r.kt)("h4",{id:"create-an-amazon-connect-status"},"Create an Amazon Connect status"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to your Amazon Connect instance as an Administrator")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the left navigation, choose ",(0,r.kt)("strong",{parentName:"p"},"Users"),", then select ",(0,r.kt)("strong",{parentName:"p"},"Agent\nstatus")))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image145.png")}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add new agent status"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide a Status name and Description. Leave the Enabled checkbox\nselected."))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image146.png")}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Select Save. Repeat as desired for the remaining statuses that you\nwish to add.")),(0,r.kt)("h3",{id:"create-presence-statuses-in-salesforce"},"Create Presence Statuses in Salesforce"),(0,r.kt)("p",null,"You will need to configure presence statuses to reflect the different\npresence states that you wish your Omni-Channel agents to enter. These\ndo not need to match agent statuses in Amazon Connect exactly, but it\ndoes make it easier to track what you are doing."),(0,r.kt)("h4",{id:"create-a-salesforce-presence-status"},"Create a Salesforce presence status"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,r.kt)("strong",{parentName:"p"},"Setup"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Quick Find")," field, enter presence and choose ",(0,r.kt)("strong",{parentName:"p"},"Presence\nStatuses")," from the results"))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image147.png")}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Presence Statuses page, choose New")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide a status name, for example Lunch")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the Status options appropriately, for example, Busy"),(0,r.kt)("p",{parentName:"li"},"a.  For Online statuses, you will need to provide a channel. Please\nreference the ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5"},"Omni-Channel\ndocumentation"),"\nfor details")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Save"))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image148.png")}),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Repeat as necessary for all desired statuses")),(0,r.kt)("h4",{id:"configure-enabled-service-presences-status-access-in-salesforce"},"Configure Enabled Service Presences Status Access in Salesforce"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",(0,r.kt)("strong",{parentName:"p"},"Setup"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Quick Find")," field, enter profiles and choose ",(0,r.kt)("strong",{parentName:"p"},"Profiles"),"\nfrom the results"))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image149.png")}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the profile assigned to your users")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Hover over the Enabled Service Presence Status link and choose Edit"))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image150.png")}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Select the available status from the left, then choose the Add\nbutton to add it the Enabled Service Presence Statuses field")),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image151.png")}),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select Save")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat as necessary for other statuses or profiles."))),(0,r.kt)("h3",{id:"configure-presence-sync-rules"},"Configure Presence Sync Rules"),(0,r.kt)("p",null,"The CTI Adapter provides a rules-based presence status synchronization\nsystem allowing for flexibility in mapping agent states between Amazon\nConnect and Salesforce Omni-Channel."),(0,r.kt)("p",null,"Presence synchronization actions may be configured based upon manual\nagent state changes (agent goes on break), system agent state changes\n(answering a call), omnichannel agent work (agent accepts an email), and\nomnichannel workload changes (agent completes an email) as examples."),(0,r.kt)("p",null,"As the scope of presence sync rules can vary wildly, this example will\nshow you how to change state based on Amazon Connect agent state change\nand Salesforce agent state change."),(0,r.kt)("h4",{id:"create-a-presence-sync-rule"},"Create a Presence Sync Rule"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to the ",(0,r.kt)("strong",{parentName:"p"},"Service Console"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Expand the ",(0,r.kt)("strong",{parentName:"p"},"navigation menu")," by selecting the down arrow and\nchoose ",(0,r.kt)("strong",{parentName:"p"},"AC CTI Adapters"),"."))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image114.png")}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"ACLightningAdapter"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to the ",(0,r.kt)("strong",{parentName:"p"},"Presence Sync Rules")," section")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"New")," to create a new presence sync rule")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide a ",(0,r.kt)("strong",{parentName:"p"},"Presence Sync Rule Name")," to identify the use case of\nthis rule. For example: Connect agent switches to Lunch"))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image152.png")}),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Source, select ",(0,r.kt)("strong",{parentName:"p"},"Connect Agent State Change"),", and select\n",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Operand A, choose ",(0,r.kt)("strong",{parentName:"p"},"Connect Agent New State"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the Comparator to ",(0,r.kt)("strong",{parentName:"p"},"Equal to"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set Operand B to ",(0,r.kt)("strong",{parentName:"p"},"Static Value"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Operand B Value, enter ",(0,r.kt)("strong",{parentName:"p"},"Lunch")," (Or whatever state you have\ncreated in Amazon Connect)**"))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image153.png")}),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Destination, choose ",(0,r.kt)("strong",{parentName:"p"},"Salesforce Agent State"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the Value to ",(0,r.kt)("strong",{parentName:"p"},"Lunch")," (Or whatever state you have configured in\nSalesforce)\n",(0,r.kt)("strong",{parentName:"p"},"NOTE:")," the static value for Salesforce Omni-Channel status is the\nDeveloper Name, not the Status Name")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refresh your browser")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the bottom left corner of the Service Console, select the CTI\nSoftphone icon"))),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image46.png")}),(0,r.kt)("ol",{start:19},(0,r.kt)("li",{parentName:"ol"},"Set your Amazon Connect agent status to Lunch")),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image154.png")}),(0,r.kt)("ol",{start:20},(0,r.kt)("li",{parentName:"ol"},"Observe that the Omni-Channel status switches to Lunch")),(0,r.kt)("img",{src:(0,s.Z)("/img/lightning/image155.png")}),(0,r.kt)("ol",{start:21},(0,r.kt)("li",{parentName:"ol"},"Repeat this process as desired to configure your presence sync\nrules.")))}u.isMDXComponent=!0}}]);