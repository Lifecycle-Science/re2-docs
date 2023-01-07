"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[6439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},g),{},{components:n})):r.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:10,title:"WordPress Integration"},i="Integrating RE2 with WordPress Sites",l={unversionedId:"integrations/wordpress",id:"integrations/wordpress",title:"WordPress Integration",description:"RE2 is in pre-release development. This documentation is a work in progress.",source:"@site/docs/integrations/wordpress.md",sourceDirName:"integrations",slug:"/integrations/wordpress",permalink:"/docs/integrations/wordpress",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"WordPress Integration"},sidebar:"tutorialSidebar",previous:{title:"Braze Integration",permalink:"/docs/integrations/braze"},next:{title:"Program Examples",permalink:"/docs/category/program-examples"}},s={},c=[{value:"Event Capture",id:"event-capture",level:2},{value:"Direct Tag installation",id:"direct-tag-installation",level:3},{value:"Use Google Tag Manger",id:"use-google-tag-manger",level:3},{value:"Install Google Tag Manager",id:"install-google-tag-manager",level:4}],g={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrating-re2-with-wordpress-sites"},"Integrating RE2 with WordPress Sites"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"RE2 is in pre-release development. This documentation is a work in progress.")),(0,a.kt)("p",null,"You can use a WordPress site to collect event data."),(0,a.kt)("h2",{id:"event-capture"},"Event Capture"),(0,a.kt)("p",null,"You can either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install client-side tags directly"),(0,a.kt)("li",{parentName:"ul"},"Use Google Tag Manager to manage tag installation")),(0,a.kt)("h3",{id:"direct-tag-installation"},"Direct Tag installation"),(0,a.kt)("p",null,"You need the code which we can give you."),(0,a.kt)("h3",{id:"use-google-tag-manger"},"Use Google Tag Manger"),(0,a.kt)("p",null,"You need to set some stuff up."),(0,a.kt)("h4",{id:"install-google-tag-manager"},"Install Google Tag Manager"),(0,a.kt)("p",null,"To install Google Tag Manager on your WordPress website, you will first need to create a Google Tag Manager account and obtain your GTM code. Once you have your code, you can follow these steps to install it on your WordPress site:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to your WordPress website and go to your admin dashboard."),(0,a.kt)("li",{parentName:"ol"},'From the left-hand menu, select "Plugins" and then click "Add New".'),(0,a.kt)("li",{parentName:"ol"},'In the search field, type "Google Tag Manager for WordPress" and hit enter.'),(0,a.kt)("li",{parentName:"ol"},'From the search results, select the "Google Tag Manager for WordPress" plugin by Thomas Geiger and click "Install Now".'),(0,a.kt)("li",{parentName:"ol"},'After the plugin has been installed, click "Activate".'),(0,a.kt)("li",{parentName:"ol"},'Once the plugin is activated, go to the "Settings" section in the left-hand menu and click on "Google Tag Manager".'),(0,a.kt)("li",{parentName:"ol"},'In the "Google Tag Manager" settings page, enter your GTM code and click "Save Changes".')),(0,a.kt)("p",null,"After following these steps, Google Tag Manager should be installed on your WordPress website. Keep in mind that it may take some time for the changes to take effect."))}p.isMDXComponent=!0}}]);