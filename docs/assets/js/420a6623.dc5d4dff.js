"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[2559],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),g=o(a),s=r,k=g["".concat(d,".").concat(s)]||g[s]||u[s]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},11712:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1},i='"Next Streaming Movie Recommendation"',m={unversionedId:"program-examples/movies_uk_1",id:"program-examples/movies_uk_1",title:'"Next Streaming Movie Recommendation"',description:"This documentation is a work in progress.",source:"@site/docs/program-examples/movies_uk_1.md",sourceDirName:"program-examples",slug:"/program-examples/movies_uk_1",permalink:"/docs/program-examples/movies_uk_1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Program Examples",permalink:"/docs/category/program-examples"},next:{title:'"Next Electronics Purchase Recommendation"',permalink:"/docs/program-examples/electronics-store"}},d={},o=[{value:"Overview",id:"overview",level:2},{value:"Event Source",id:"event-source",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Outliers &amp; Caveats",id:"outliers--caveats",level:3},{value:"Output Examples",id:"output-examples",level:2},{value:"User ffea3c44fc",id:"user-ffea3c44fc",level:3},{value:"Input: User History",id:"input-user-history",level:4},{value:"Output: Recommended Movies",id:"output-recommended-movies",level:4},{value:"Output: Recommended Categories/Tags",id:"output-recommended-categoriestags",level:4},{value:"User fffeac83be",id:"user-fffeac83be",level:3},{value:"Input: User History",id:"input-user-history-1",level:4},{value:"Output: Recommended Movies",id:"output-recommended-movies-1",level:4},{value:"Output: Recommended Categories/Tags",id:"output-recommended-categoriestags-1",level:4}],p={toc:o};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"next-streaming-movie-recommendation"},'"Next Streaming Movie Recommendation"'),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This documentation is a work in progress.")),(0,r.kt)("p",null,'Recommending the "next best" movie to continue engagement using anonymized movie watch history of opted-in Netflix users (UK).'),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"event-source"},"Event Source"),(0,r.kt)("p",null,"The data sources is from a limited time period. The movie catalog only contains movies through 2017.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/vodclickstream/netflix-audience-behaviour-uk-movies"},"https://www.kaggle.com/datasets/vodclickstream/netflix-audience-behaviour-uk-movies")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The tagging strategy is based on two hypothesis: (1) Users prefer movies by category, and (2) users prefer moves from certain eras. These hypothesis suggest movie categories and release year would be valuable event tags and are used in this case."),(0,r.kt)("h3",{id:"outliers--caveats"},"Outliers & Caveats"),(0,r.kt)("p",null,'A general caveat about streaming services: The same movies can be viewed across a number of platforms. If a user watches a movie on Hulu for example, the event will not be logged in Netflix data and therefore would (a) not be used to influence recommendations, and (b) possible be recommended as a "next best movie", even though the user has already seen it.\nA specific caveat about this example: The source data set is date late 2017. Because we have chosen to favor recency, popular new releases in 2017 (e.g. La La Land) carry extra weight in thier recommendations.'),(0,r.kt)("h2",{id:"output-examples"},"Output Examples"),(0,r.kt)("p",null,"The below examples show how the system responded for three sample users. Each example includes (1) the event history logged for the given user, (2) the recommended actions, and (3) the weighted tags."),(0,r.kt)("h3",{id:"user-ffea3c44fc"},"User ffea3c44fc"),(0,r.kt)("h4",{id:"input-user-history"},"Input: User History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("th",{parentName:"tr",align:null},"verb"),(0,r.kt)("th",{parentName:"tr",align:null},"asset","_","id"),(0,r.kt)("th",{parentName:"tr",align:null},"asset","_","name"),(0,r.kt)("th",{parentName:"tr",align:null},"tags"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-12-13 04:53:36"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"c7c911ea47"),(0,r.kt)("td",{parentName:"tr",align:null},"Shark Tale"),(0,r.kt)("td",{parentName:"tr",align:null},"Animation, Adventure, Comedy, Family, Fantasy, 2004")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-12-11 04:58:54"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"736a4c633f"),(0,r.kt)("td",{parentName:"tr",align:null},"Get Hard"),(0,r.kt)("td",{parentName:"tr",align:null},"Comedy, Crime, 2015")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-12-07 00:03:07"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"f1fccba87c"),(0,r.kt)("td",{parentName:"tr",align:null},"Shrek 2"),(0,r.kt)("td",{parentName:"tr",align:null},"Animation, Adventure, Comedy, Family, Fantasy, Romance, 2004")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-12-04 06:20:52"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"e013ab5a31"),(0,r.kt)("td",{parentName:"tr",align:null},"Arthur Christmas"),(0,r.kt)("td",{parentName:"tr",align:null},"Animation, Adventure, Comedy, Family, Fantasy, 2011")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-12-03 21:32:58"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"e013ab5a31"),(0,r.kt)("td",{parentName:"tr",align:null},"Arthur Christmas"),(0,r.kt)("td",{parentName:"tr",align:null},"Animation, Adventure, Comedy, Family, Fantasy, 2011")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-11-30 01:53:07"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"71c8779809"),(0,r.kt)("td",{parentName:"tr",align:null},"Gnomeo and Juliet"),(0,r.kt)("td",{parentName:"tr",align:null},"Animation, Adventure, Comedy, Family, Romance, 2011")))),(0,r.kt)("h4",{id:"output-recommended-movies"},"Output: Recommended Movies"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"verb"),(0,r.kt)("th",{parentName:"tr",align:null},"asset","_","id"),(0,r.kt)("th",{parentName:"tr",align:null},"asset","_","name"),(0,r.kt)("th",{parentName:"tr",align:"right"},"weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"cbe1f989b7"),(0,r.kt)("td",{parentName:"tr",align:null},"Shrek"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9.4855")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"5723d3932d"),(0,r.kt)("td",{parentName:"tr",align:null},"Shrek the Third"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2.8275")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"f8799ae38b"),(0,r.kt)("td",{parentName:"tr",align:null},"The Christmas Chronicles"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.8524")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"d8fe485619"),(0,r.kt)("td",{parentName:"tr",align:null},"Shrek Forever After"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.6351")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"22d2b55a4b"),(0,r.kt)("td",{parentName:"tr",align:null},"Madagascar 3: Europe's Most Wanted"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.5886")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"6f5b8bea7d"),(0,r.kt)("td",{parentName:"tr",align:null},"The Secret Life of Pets"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.4184")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"bc8d908142"),(0,r.kt)("td",{parentName:"tr",align:null},"Madagascar"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.307")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"80dac1a953"),(0,r.kt)("td",{parentName:"tr",align:null},"Hop"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.2437")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"13de65e022"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloudy with a Chance of Meatballs 2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.1097")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"712eae4a7b"),(0,r.kt)("td",{parentName:"tr",align:null},"Charlie and the Chocolate Factory"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.0656")))),(0,r.kt)("h4",{id:"output-recommended-categoriestags"},"Output: Recommended Categories/Tags"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "tags": [ { "Comedy": 2.0201 }, { "Animation": 1.6805 }, { "Adventure": 1.6805 }, { "Family": 1.6805 }, { "Fantasy": 1.348 }, { "2011": 1.0027 }, { "2004": 0.6778 }, { "Romance": 0.6694 }, { "2015": 0.3396 }, { "Crime": 0.3396 } ] }')),(0,r.kt)("h3",{id:"user-fffeac83be"},"User fffeac83be"),(0,r.kt)("h4",{id:"input-user-history-1"},"Input: User History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("th",{parentName:"tr",align:null},"verb"),(0,r.kt)("th",{parentName:"tr",align:null},"asset","_","name"),(0,r.kt)("th",{parentName:"tr",align:null},"tags"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-09-21 04:18:18"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"To the Bone"),(0,r.kt)("td",{parentName:"tr",align:null},"Drama, 2017")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-09-19 04:03:08"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"Fight Club"),(0,r.kt)("td",{parentName:"tr",align:null},"Drama, 1999")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-09-11 04:26:18"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"The Paedophile Next Door"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentary, 2014")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-08-17 03:20:48"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"True Story"),(0,r.kt)("td",{parentName:"tr",align:null},"Crime, Drama, Mystery, 2015")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-08-15 04:50:55"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"The Big Short"),(0,r.kt)("td",{parentName:"tr",align:null},"Biography, Comedy, Drama, History, 2015")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-08-12 04:50:44"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"Son of Saul"),(0,r.kt)("td",{parentName:"tr",align:null},"Drama, War, 2015")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-08-12 04:03:15"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"Amanda Knox"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentary, Crime, 2016")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-08-11 04:09:41"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"Amanda Knox"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentary, Crime, 2016")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-08-10 14:15:41"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"Enemy at the Gates"),(0,r.kt)("td",{parentName:"tr",align:null},"Drama, History, War, 2001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017-08-10 03:35:36"),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"127 Hours"),(0,r.kt)("td",{parentName:"tr",align:null},"Biography, Drama, 2011")))),(0,r.kt)("h4",{id:"output-recommended-movies-1"},"Output: Recommended Movies"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"verb"),(0,r.kt)("th",{parentName:"tr",align:null},"asset","_","id"),(0,r.kt)("th",{parentName:"tr",align:null},"asset","_","name"),(0,r.kt)("th",{parentName:"tr",align:"right"},"weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"b08e01920a"),(0,r.kt)("td",{parentName:"tr",align:null},"Abducted in Plain Sight"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.0872")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"e847f14da5"),(0,r.kt)("td",{parentName:"tr",align:null},"Black Mirror: Bandersnatch"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.8878")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"271e85e3b3"),(0,r.kt)("td",{parentName:"tr",align:null},"The Wolf of Wall Street"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.8119")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"ef19c8c41d"),(0,r.kt)("td",{parentName:"tr",align:null},"La La Land"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.4663")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"5f8a24a2ac"),(0,r.kt)("td",{parentName:"tr",align:null},"Polar"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.4628")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"0f3b137f4e"),(0,r.kt)("td",{parentName:"tr",align:null},"War Machine"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.3964")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"2f2da39c9c"),(0,r.kt)("td",{parentName:"tr",align:null},"Irreplaceable You"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.3911")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"da66d6bb36"),(0,r.kt)("td",{parentName:"tr",align:null},"IO"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.3891")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"8f8e4beb9f"),(0,r.kt)("td",{parentName:"tr",align:null},"Snowden"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.337")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"9909872dfc"),(0,r.kt)("td",{parentName:"tr",align:null},"The Propaganda Game"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.3339")))),(0,r.kt)("h4",{id:"output-recommended-categoriestags-1"},"Output: Recommended Categories/Tags"),(0,r.kt)("p",null,"A weighted tag collection is also available to additional personalization."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "tags": [ { "Drama": 1.932 }, { "Documentary": 0.8245 }, { "2015": 0.8133 }, { "Crime": 0.8112 }, { "History": 0.5402 }, { "Biography": 0.54 }, { "2016": 0.5389 }, { "War": 0.5386 }, { "2017": 0.2911 }, { "1999": 0.29 }, { "2014": 0.2856 }, { "Mystery": 0.2723 }, { "Comedy": 0.2713 }, { "2001": 0.2689 }, { "2011": 0.2687 } ] }')),(0,r.kt)("p",null,"User 1\nUser History"),(0,r.kt)("p",null,"Recommended Movies\nBased on the configuration, movies already streamed are excluded.\nRecommended Categories/Tags"))}u.isMDXComponent=!0}}]);