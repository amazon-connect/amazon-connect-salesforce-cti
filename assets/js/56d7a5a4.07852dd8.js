"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[8315],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7793:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"01-key-benefits-and-requirements",title:"Key Benefits and Requirements"},c=void 0,l={unversionedId:"classic/introduction/01-key-benefits-and-requirements",id:"classic/introduction/01-key-benefits-and-requirements",isDocsHomePage:!1,title:"Key Benefits and Requirements",description:"Key Benefits",source:"@site/docs/classic/01-introduction/01-key-benefits-and-requirements.md",sourceDirName:"classic/01-introduction",slug:"/classic/introduction/01-key-benefits-and-requirements",permalink:"/amazon-connect-salesforce-cti/docs/classic/introduction/01-key-benefits-and-requirements",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/01-introduction/01-key-benefits-and-requirements.md",version:"current",sidebarPosition:1,frontMatter:{id:"01-key-benefits-and-requirements",title:"Key Benefits and Requirements"},sidebar:"classic",previous:{title:"Release Notes",permalink:"/amazon-connect-salesforce-cti/docs/classic/release-notes"},next:{title:"Installing the CTI Adapter and Salesforce Lambdas",permalink:"/amazon-connect-salesforce-cti/docs/classic/installation/01-installation"}},p=[{value:"Key Benefits",id:"key-benefits",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Browser Compatibility",id:"browser-compatibility",children:[]},{value:"Salesforce Lightning Support",id:"salesforce-lightning-support",children:[]}]}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"key-benefits"},"Key Benefits"),(0,o.kt)("p",null,"The key benefits of the adapter include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Amazon Connect Voice and Chat:")," ability to take voice and chat\ncalls in the salesforce agent experience and advanced screen pop on\nthe incoming phone number, case, account or contact. Agents can also\nclick to dial a number within their contacts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Single Sign-On support:")," seamless login with Connect and\nSalesforce with any standard SAML 2.0 provider.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IVR data dips:")," easily inject salesforce data into the customer\nexperience. Businesses can offer personalized greetings and dynamic\nrouting based on customer information.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Call disposition and activity management:")," configure post call\nworkflows to support your Agent's after call work.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Omnichannel Presence Sync:")," enable Salesforce chat, sms and email\nto share presence with Amazon Connect. Amazon Connect will know when\nan agent is handling a Salesforce chat and make them unavailable for\na voice call, and vice versa.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Call logging and recording:")," Voice and chat interactions can be\nlogged as Salesforce activities and Amazon Connect call recordings\ncan be played within the Salesforce.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Contact center real-time reports:")," display real-time contact\ncenter metrics within Salesforce from Amazon Connect.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Contact center historical reports:")," display historical contact\ncenter metrics within Salesforce from Amazon Connect.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Lightning CCP extensions:")," easily customize and extend behaviors\nwithin the CTI Adapter such as screenpop and activity management.\nDefault scripts along with the API guide provide key examples.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"High-velocity sales (HVS):")," using Salesforce HVS, enable your\ninside sales team to follow a repeatable pre-define sales cadence\nfor your business. It enables sales managers and reps to work on\nprioritize list of prospects and follow best sequence of sales\noutreach activities defined by your sales process."))),(0,o.kt)("p",null,"We recommend that you initially install the package into your Salesforce\nsandbox. After the package is installed, you can configure your\nSalesforce Call Center configuration within Salesforce."),(0,o.kt)("p",null,"The next step is to allowlist your Salesforce Visualforce domain within\nyour Amazon Connect Application integration. This allows cross-domain\naccess to your Amazon Connect instance."),(0,o.kt)("p",null,"If you want to quickly get setup with basic CTI capabilities in\nLightning, we suggest you walk through our Salesforce trailhead\navailable at ",(0,o.kt)("a",{parentName:"p",href:"https://sfdc.co/Amazon-Connect"},"https://sfdc.co/Amazon-Connect"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To successfully create, configure, and implement the Amazon Connect CTI\nAdapter for Salesforce, you must ensure that the requirements and\nprerequisites described in this section are in place before you start."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To install the Amazon Connect CTI package, you must:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Have a running instance of Salesforce Classic, Salesforce Console,\nor Lightning Experience")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an Amazon Connect instance\n(",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/connect/"},"https://aws.amazon.com/connect/"),")"))),(0,o.kt)("h3",{id:"browser-compatibility"},"Browser Compatibility"),(0,o.kt)("p",null,"Amazon Connect requires WebRTC to enable soft-phone voice media stream\nand Websockets to enable soft-phone signaling. Consequently, users are\nrequired to use the latest version of either Google Chrome or Mozilla\nFirefox. For more information, please see the Amazon Connect\ndocumentation\n(",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/connect/resources/#Documentation"},"https://aws.amazon.com/connect/resources/#Documentation"),")"),(0,o.kt)("h3",{id:"salesforce-lightning-support"},"Salesforce Lightning Support"),(0,o.kt)("p",null,"Please note that following features are currently not supported in\nSalesforce Lightning:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Outbound Campaign Calls using Salesforce Omni can be routed to the\nagent, but the automated screen pops and the dialing of the phone\nnumber will not work. The agent will have to click on the record\nlinks to open the records and use Salesforce's Click-to-Dial feature\nto make the phone call.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Lightning Standard Navigation is not currently supported in App\nOptions for the Amazon Connect CTI Adapter. Console navigation is\nfully supported."))))}m.isMDXComponent=!0}}]);