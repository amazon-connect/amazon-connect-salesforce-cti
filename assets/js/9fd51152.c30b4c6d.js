"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[7410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(a),u=i,h=g["".concat(l,".").concat(u)]||g[u]||d[u]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905)),o=a(4996);const r={id:"06-adapter-installation-troubleshooting",title:"CTI Adapter Installation Troubleshooting and Common Issues"},s=void 0,l={unversionedId:"lightning/installation/06-adapter-installation-troubleshooting",id:"lightning/installation/06-adapter-installation-troubleshooting",title:"CTI Adapter Installation Troubleshooting and Common Issues",description:"I upgraded my adapter to v5.10, but I cannot see the CCP Config changes",source:"@site/docs/lightning/02-installation/06-adapter-installation-troubleshooting.md",sourceDirName:"lightning/02-installation",slug:"/lightning/installation/06-adapter-installation-troubleshooting",permalink:"/amazon-connect-salesforce-cti/docs/lightning/installation/06-adapter-installation-troubleshooting",draft:!1,editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/02-installation/06-adapter-installation-troubleshooting.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"06-adapter-installation-troubleshooting",title:"CTI Adapter Installation Troubleshooting and Common Issues"},sidebar:"lightning",previous:{title:"Upgrading from an Earlier Version",permalink:"/amazon-connect-salesforce-cti/docs/lightning/installation/05-upgrading-from-an-earlier-version"},next:{title:"CTI Adapter Details",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/01-cti-adapter-configuration"}},c={},p=[{value:"I upgraded my adapter to v5.10, but I cannot see the CCP Config changes",id:"i-upgraded-my-adapter-to-v510-but-i-cannot-see-the-ccp-config-changes",level:4},{value:"Error \u201crefused to run the JavaScript URL because it violates the following Content Security Policy directive...\u201d",id:"error-refused-to-run-the-javascript-url-because-it-violates-the-following-content-security-policy-directive",level:4},{value:"Error \u201crefused to frame\u201d Visualforce page",id:"error-refused-to-frame-visualforce-page",level:4},{value:"What are the Disable X Trigger options in the Custom Settings?",id:"what-are-the-disable-x-trigger-options-in-the-custom-settings",level:4},{value:"I upgraded my adapter to v5, but I don\u2019t see the CTI Flows feature.",id:"i-upgraded-my-adapter-to-v5-but-i-dont-see-the-cti-flows-feature",level:4},{value:"I upgraded my adapter from v3 to v5 and we lost some screenpop functionality.",id:"i-upgraded-my-adapter-from-v3-to-v5-and-we-lost-some-screenpop-functionality",level:4},{value:"The CCP doesn\u2019t show up in service console and I instead see the following image:",id:"the-ccp-doesnt-show-up-in-service-console-and-i-instead-see-the-following-image",level:4},{value:"Certain picklists are missing picklist items.",id:"certain-picklists-are-missing-picklist-items",level:4},{value:"How to remove permissions to Visualforce pages, Apex classes for a desired profile",id:"how-to-remove-permissions-to-visualforce-pages-apex-classes-for-a-desired-profile",level:4}],d={toc:p};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"i-upgraded-my-adapter-to-v510-but-i-cannot-see-the-ccp-config-changes"},"I upgraded my adapter to v5.10, but I cannot see the CCP Config changes"),(0,i.kt)("p",null,"There is a bug with Salesforce that doesn't update a page layout when you upgrade a package. To fix this, go to Setup and search for ",(0,i.kt)("inlineCode",{parentName:"p"},"Object Manager"),". Once you're on the Object Manager page, search for the ",(0,i.kt)("inlineCode",{parentName:"p"},"AC CTI Adapter")," object and click on it. Then go into ",(0,i.kt)("inlineCode",{parentName:"p"},"Page Layouts")," and click on the layout you are using (Typically ",(0,i.kt)("inlineCode",{parentName:"p"},"AC CTI Adapter Layout - August 2020"),").  Then, drag and drop the ",(0,i.kt)("inlineCode",{parentName:"p"},"Audio Device Settings")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Page Layout Settings")," into the desired spot on the page. Finally, hit save."),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/troubleshooting3.png")}),(0,i.kt)("h4",{id:"error-refused-to-run-the-javascript-url-because-it-violates-the-following-content-security-policy-directive"},"Error \u201crefused to run the JavaScript URL because it violates the following Content Security Policy directive...\u201d"),(0,i.kt)("p",null,"This is an allowlisting issue, please review the installation and ensure that both URLs are properly allowlisted."),(0,i.kt)("h4",{id:"error-refused-to-frame-visualforce-page"},"Error \u201crefused to frame\u201d Visualforce page"),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/troubleshooting0.png")}),(0,i.kt)("p",null,"This can happen if the customer has checked \u201cEnable clickjack protection\u201d on Salesforce session settings. The solution is to uncheck that. "),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/troubleshooting1.png")}),(0,i.kt)("h4",{id:"what-are-the-disable-x-trigger-options-in-the-custom-settings"},"What are the Disable X Trigger options in the Custom Settings?"),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/troubleshooting4.png")}),(0,i.kt)("p",null,"These are options we provide that allow you to toggle certain functionality in the adapter."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CCA Case Trigger - This trigger looks for any ContactChannelAnalytics records that could be related to a updated/inserted Case, and creates a relationsihp between the two records. This trigger uses batching to process the update requests."),(0,i.kt)("li",{parentName:"ul"},"CCA Contact Trigger - This trigger looks for any ContactChannelAnalytics records that could be related to a updated/inserted Contact, and creates a relationsihp between the two records. This trigger uses batching to process the update requests."),(0,i.kt)("li",{parentName:"ul"},"Case Contact CCA Trigger - This trigger looks for any Case/Contact records that could be related to an updated/inserted ContactChannelAnalytics record, and creates a relationsihp between the records."),(0,i.kt)("li",{parentName:"ul"},"Task Trigger - This trigger creates a ContactChannel record for any inserted/updated task that with a ",(0,i.kt)("inlineCode",{parentName:"li"},"CallObject")," field that does not currently have a ContactChannel record created before.")),(0,i.kt)("h4",{id:"i-upgraded-my-adapter-to-v5-but-i-dont-see-the-cti-flows-feature"},"I upgraded my adapter to v5, but I don\u2019t see the CTI Flows feature."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/lightning/installation/05-upgrading-from-an-earlier-version"},"Upgrading from an Earlier Version")," section of the installation guide."),(0,i.kt)("h4",{id:"i-upgraded-my-adapter-from-v3-to-v5-and-we-lost-some-screenpop-functionality"},"I upgraded my adapter from v3 to v5 and we lost some screenpop functionality."),(0,i.kt)("p",null,"All screenpop functionality native to v3 now needs to be recreated using CTI Flows. Please review the ",(0,i.kt)("a",{parentName:"p",href:"/docs/lightning/appendices/appendix-d-cti-flow-examples/01-cti-flow-examples"},"CTI Flow Examples")," for more details, all screenpop functionality from v3 has been recreated."),(0,i.kt)("h4",{id:"the-ccp-doesnt-show-up-in-service-console-and-i-instead-see-the-following-image"},"The CCP doesn\u2019t show up in service console and I instead see the following image:"),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/troubleshooting2.png")}),(0,i.kt)("p",null,"Copy the full url of the lightning adapter visualforce page into the call center."),(0,i.kt)("h4",{id:"certain-picklists-are-missing-picklist-items"},"Certain picklists are missing picklist items."),(0,i.kt)("p",null,"When upgrading from a version of the package to a higher version of the package in which new picklist items were added to a picklist, those new picklist items won't be installed. This is a ",(0,i.kt)("a",{parentName:"p",href:"https://salesforce.stackexchange.com/questions/207367/i-have-a-managed-package-if-i-add-values-a-picklist-will-my-customers-get-it-o"},"known Salesforce issue"),"."),(0,i.kt)("h4",{id:"how-to-remove-permissions-to-visualforce-pages-apex-classes-for-a-desired-profile"},"How to remove permissions to Visualforce pages, Apex classes for a desired profile"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Setup"),' and search for "Profiles".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the desired profile.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select either ",(0,i.kt)("strong",{parentName:"p"},"Visualforce Page Access")," or ",(0,i.kt)("strong",{parentName:"p"},"Apex Class Access"),"."))),(0,i.kt)("img",{src:(0,o.Z)("/img/shared/removepermissionstroublshooting0.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Edit")," and remove any desired permissions. All permissions can be removed because permissions are managed through permission sets, not through profiles.")))}g.isMDXComponent=!0}}]);