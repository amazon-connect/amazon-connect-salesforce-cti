"use strict";(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[2816],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,g=h["".concat(l,".").concat(p)]||h[p]||f[p]||i;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return r}});var o=n(2263),a=n(3919);function i(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,r=i.forcePrependBaseUrl,s=void 0!==r&&r,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9813:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return f},default:function(){return p}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=n(4996),s=["components"],l={id:"06-set-agent-status-on-session-end",title:"Set Agent Status on Session End"},u=void 0,c={unversionedId:"lightning/cti-adapter/06-set-agent-status-on-session-end",id:"lightning/cti-adapter/06-set-agent-status-on-session-end",isDocsHomePage:!1,title:"Set Agent Status on Session End",description:'This feature automatically sets the status of the agent to "Offline" \u2013\u2013 or to any status you choose \u2013\u2013 when the agent closes all his Salesforce tabs. Disclaimer: This feature will popup a window to perform the logout functionality. This window must stay open for the feature to work, but it does not have to be visible (i.e. can be put in the background).',source:"@site/docs/lightning/03-cti-adapter/06-set-agent-status-on-session-end.md",sourceDirName:"lightning/03-cti-adapter",slug:"/lightning/cti-adapter/06-set-agent-status-on-session-end",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/06-set-agent-status-on-session-end",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/06-set-agent-status-on-session-end.md",version:"current",sidebarPosition:6,frontMatter:{id:"06-set-agent-status-on-session-end",title:"Set Agent Status on Session End"},sidebar:"lightning",previous:{title:"Localization",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/05-localization"},next:{title:"Contact Lens",permalink:"/amazon-connect-salesforce-cti/docs/lightning/cti-adapter/07-contact-lens"}},f=[],h={toc:f};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'This feature automatically sets the status of the agent to "Offline" \u2013\u2013 or to any status you choose \u2013\u2013 when the agent closes all his Salesforce tabs. ',(0,i.kt)("strong",{parentName:"p"},"Disclaimer:")," This feature will popup a window to perform the logout functionality. This window must stay open for the feature to work, but it does not have to be visible (i.e. can be put in the background)."),(0,i.kt)("p",null,"You can configure this feature by heading to the feature panel on your CTI Adapter and clicking new."),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/01-new-feature-button.png")}),(0,i.kt)("p",null,'Then for "AC Feature Name", enter: ',(0,i.kt)("inlineCode",{parentName:"p"},"SetAgentStatusOnSessionEnd")),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/02-new-feature.png")}),(0,i.kt)("p",null,'You can optionally specify which status the agents should be changed to when they end the session. By default, this is "Offline," but you can configure it using the ',(0,i.kt)("inlineCode",{parentName:"p"},"Status")," setting of the feature."),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/03-custom-status.png")}),(0,i.kt)("p",null,"When turned on, the feature will apply to all agents. If you'd rather have it apply to a small subset, you can configure ",(0,i.kt)("inlineCode",{parentName:"p"},"IfProfileNameIncludes")," setting."),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/04-selective-profile-name.png")}),(0,i.kt)("p",null,'Now only the agents that have "On-Call" in their Connect routing profile name will be shown as "Offline" when they end their session. This setting can accept multiple, comma-separated profile names, as well.'),(0,i.kt)("p",null,"If you would also like to control this feature based on the current state of the agent, you can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"IfCurrentAgentState")," tag to the feature, and assign a comma seperated list of statuses that you would like the feature to execute on."),(0,i.kt)("img",{src:(0,r.Z)("/img/lightning/05-selective-status-name.png")}),(0,i.kt)("p",null,'From this example, only agents who have a current status of "Available" or "At Lunch" will be moved to a state of "Offline" when they end their session.'),(0,i.kt)("p",null,"The example above also utilitzes the ",(0,i.kt)("inlineCode",{parentName:"p"},"SessionEndTimer")," feature as well. This delays the state change for the desired amount of time (default of 5 seconds). In the example above it sets the delay to 20 seconds. This feature is useful to account for agent's with slow internet refreshing their page - with 5 seconds, it may change the state of the agent before the refresh loads all of the assets again, while 20 seconds could be enough time for the assets to load, and stop the state change."),(0,i.kt)("p",null,"You can also have the Status be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Logout"),", which will append the functionality of the logout feature mentioned ",(0,i.kt)("a",{parentName:"p",href:"/docs/lightning/installation/01-installing-package-from-appexchange"},"here")," - logging the agent out of the CCP upon session ending. It will not log the user out if a call is ongoing."),(0,i.kt)("p",null,'When your agents log back in, they will be shown as "Available" by default. If you\'d like to control which status to set your agents, you can configure it with ',(0,i.kt)("inlineCode",{parentName:"p"},"InitialAgentState")," setting."),(0,i.kt)("p",null,"Note that this feature does not work with Salesforce Pop-Out utilities. This means that it won't be working if CCP is popped out from utility bar. This is because the pop-out window is a different window managed by Salesforce and we are not able to track any session on that window."))}p.isMDXComponent=!0}}]);