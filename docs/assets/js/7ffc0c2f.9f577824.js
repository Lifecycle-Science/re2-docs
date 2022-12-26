"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[3406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2},i='"Next Electronics Purchase Recommendation"',s={unversionedId:"program-examples/electronics-store",id:"program-examples/electronics-store",title:'"Next Electronics Purchase Recommendation"',description:"This documentation is a work in progress.",source:"@site/docs/program-examples/electronics-store.md",sourceDirName:"program-examples",slug:"/program-examples/electronics-store",permalink:"/docs/program-examples/electronics-store",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:'"Next Streaming Movie Recommendation"',permalink:"/docs/program-examples/movies_uk_1"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Event Source",id:"event-source",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Outliers &amp; Caveats",id:"outliers--caveats",level:3},{value:"Output Examples",id:"output-examples",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"next-electronics-purchase-recommendation"},'"Next Electronics Purchase Recommendation"'),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This documentation is a work in progress.")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("h3",{id:"event-source"},"Event Source"),(0,n.kt)("p",null,"The source data for this program included: 420,718 timestamped line items (events) for 203,478 known customers (users) from a catalog of 11,558 total products (assets). The majority of users, 87.6%, have 3 or fewer purchases - more that half only have one purchase. For this program our objective is to drive users to 4+ purchase actions to join the highly engaged cohort in the top 12%.\nThe full source data set is available here: ",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/mkechinov/ecommerce-purchase-history-from-electronics-store"},"https://www.kaggle.com/datasets/mkechinov/ecommerce-purchase-history-from-electronics-store")),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,'(See  for an explination for how these configuration options impact program output.)\nhigh_engagement_threshold = 4 ("Highly engaged customers" are those in the top decile (10%) for total products purchased, which for this electronics store is 4+ distinct items.)'),(0,n.kt)("h3",{id:"outliers--caveats"},"Outliers & Caveats"),(0,n.kt)("p",null,"For program assets, this data source does not include full product names to map to the product ids. Therefore, a string that combines category with brand will be used for the asset names in this program."),(0,n.kt)("h2",{id:"output-examples"},"Output Examples"))}u.isMDXComponent=!0}}]);