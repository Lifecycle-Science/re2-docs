"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:'RE2 is a marketing system that generates "next best action" recommendations based on first-party data and makes those recommendations available to third-party systems for message orchestration and campaign targeting. Using real-time predictive modeling, RE2 can identify and prioritize the most effective actions for a particular customer to take with the goal of increasing consistent engagement with your brand. As a centrally integrated system, RE2 helps businesses effectively coordinate the delivery of their marketing messages across different channels and touchpoints, including email, social media, websites, and mobile apps.',source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Action Recommendations",permalink:"/docs/actions"}},c={},l=[{value:"How RE2 Works",id:"how-re2-works",level:2},{value:"Getting Started with RE2",id:"getting-started-with-re2",level:2}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'RE2 is a marketing system that generates "next best action" recommendations based on first-party data and makes those recommendations available to third-party systems for message orchestration and campaign targeting. Using real-time predictive modeling, RE2 can identify and prioritize the most effective actions for a particular customer to take with the goal of increasing consistent engagement with your brand. As a centrally integrated system, RE2 helps businesses effectively coordinate the delivery of their marketing messages across different channels and touchpoints, including email, social media, websites, and mobile apps.'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Increase conversion rates with targeted and timely action recommendations")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Improve customer experiences by providing relevant, cohesive marketing content across all channels"))),(0,a.kt)("h2",{id:"how-re2-works"},"How RE2 Works"),(0,a.kt)("p",null,"RE2 uses first party customer engagement data (e.g. item orders, content consumption, etc.) and uses that data to build predictive models based on engagement patterns across the entire customer base. Individual customers (referred to as users in RE2) have individual event histories which are fed into the model, resulting in a scored list of action recommendations. These action recommendations can be determined in real-time and delivered via a low-latency API to any integrated system and used for content selection decision making."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/actions"},"Learn more about Action Recommendations in RE2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/events"},"Learn more about Events Data in RE2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/category/integrations"},"Learn more about RE2 Integrations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api"},"Learn more about the RE2 API"))),(0,a.kt)("h2",{id:"getting-started-with-re2"},"Getting Started with RE2"),(0,a.kt)("p",null,"RE2 is currently still in pre-release development. Please let us know if you are interested in being an early adopter. We are currently offering a free year of our Starter service for brands interested in trying the RE2 beta. You can sign you ",(0,a.kt)("a",{parentName:"p",href:"https://forms.gle/eTwNcCBrPP4H9JWH8"},"here")))}m.isMDXComponent=!0}}]);