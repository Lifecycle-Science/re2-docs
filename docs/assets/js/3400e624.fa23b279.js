(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[3649],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},23049:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>A,frontMatter:()=>v,metadata:()=>h,toc:()=>k});var a=n(87462),o=n(67294),r=n(3905);var i=n(86010),l=n(72389),c=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:r,defaultValue:l,values:m,groupId:f,className:b}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,c.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[A,O]=(0,o.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==A&&y.some((t=>t.value===e))&&O(e)}const P=e=>{const t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==A&&(T(t),O(a),null!=f&&w(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},b)},y.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>E.push(e),onKeyDown:I,onClick:P},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":A===t})}),n??t)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function f(e){const t=(0,l.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}var b=n(85162);n(93162);const v={id:"actionhub-ai-api",title:"ActionHub.ai API",description:"# Introduction",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},y=void 0,h={unversionedId:"api/actionhub-ai-api",id:"api/actionhub-ai-api",title:"ActionHub.ai API",description:"# Introduction",source:"@site/docs/api/actionhub-ai-api.info.mdx",sourceDirName:"api",slug:"/api/actionhub-ai-api",permalink:"/docs/api/actionhub-ai-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"actionhub-ai-api",title:"ActionHub.ai API",description:"# Introduction",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"actionHubApi",previous:{title:"ActionHub REST API",permalink:"/docs/category/petstore-api"},next:{title:"Program Configuration",permalink:"/docs/api/program-configuration"}},g={},k=[],w={toc:k};function A(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 0.0.2"),(0,r.kt)("h1",{id:"actionhubai-api"},"ActionHub.ai API"),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'Improve user engagement with real-time "Next Best Action" recommendations using ActionHub.ai from Lifecycle Science.'),"\nActionHub delivers consumer action recommendations,\nmessage orchestration, and content personalization in a variety of\nmarketing and product development use cases. ActionHub uses\nanonymized event logging to optimize category and asset recommendations for any\nuser based on their own engagement history.\nThe ActionHub API provides authenticated systems with program owners access to\nthe real-time retention and engagement engine built by Lifecycle Science. "),(0,r.kt)("p",null,"Only two API call integrations are needed to get started:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[POST] /events")," for logging user engagement events"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[GET] /users/<user_id>/actions")," to retrieve user recommended actions.")),(0,r.kt)("p",null,"All of the other API resources available in the ActionHub system provide optional configuration and optimization features.\nAn API Key and Program ID are necessary to access the API. Contact Lifecycle Science support to obtain."),(0,r.kt)("div",{style:{marginBottom:"2rem"}},(0,r.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,r.kt)(f,{mdxType:"Tabs"},(0,r.kt)(b.Z,{label:"API Key",value:"APIKeyHeader",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Security Scheme Type:"),(0,r.kt)("td",null,"apiKey")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Header parameter name:"),(0,r.kt)("td",null,"access_token")))))))),(0,r.kt)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,r.kt)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,r.kt)("span",null,"Darryl Kanouse: ",(0,r.kt)("a",{href:"mailto:darryl@lifecyclescience.com"},"darryl@lifecyclescience.com")),(0,r.kt)("span",null,"URL: ",(0,r.kt)("a",{href:"https://lifecyclescience.com/"},"https://lifecyclescience.com/"))),(0,r.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,r.kt)("h3",{style:{marginBottom:"0.25rem"}},"Terms of Service"),(0,r.kt)("a",{href:"https://docs.actionhub.ai/terms/"},"https://docs.actionhub.ai/terms/")),(0,r.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,r.kt)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,r.kt)("a",{href:"https://lifecyclescience.com/"},"Contact Lifecycle Science")))}A.isMDXComponent=!0},93162:function(e,t,n){var a,o,r;o=[],a=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){c(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var l=i.URL||i.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):o(c.href)?a(e,t,n):r(c,c.target="_blank")):(c.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(o(e))a(e,n,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){r(l)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var r="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&c||l)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var p=i.URL||i.webkitURL,d=p.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});i.saveAs=c.saveAs=c,e.exports=c},void 0===(r="function"==typeof a?a.apply(t,o):a)||(e.exports=r)}}]);