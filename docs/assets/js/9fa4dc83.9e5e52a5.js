"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[5733],{45002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>y,toc:()=>h});var n=a(87462),s=(a(67294),a(3905)),o=a(26389),i=a(94891),r=a(75190),l=a(47507),c=a(24310),d=a(63303),m=(a(75035),a(85162));const p={id:"rebase-models-program-rebase-put",title:"Rebase Models",description:"Re-calculate the base/global models used in action recommendations.",sidebar_label:"Rebase Models",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Program Configuration"],description:"Re-calculate the base/global models used in action recommendations.\nIn most cases, this should be done no more than once per 24 hours\nwhen (a) new products/actions/services are added to the global event store,\nor (b) program configuration changes have been posted and are ready for publishing.\nIndividual user data is not impacted by this process.\n**NOTE: this action may take up to 60 seconds to complete**",operationId:"rebase_models_program_rebase_put",parameters:[{required:!0,schema:{title:"Program-Id",type:"string"},name:"program-id",in:"header"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"SuccessMessage",required:["result"],type:"object",properties:{result:{title:"Result",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{APIKeyHeader:[]}],method:"put",path:"/program/rebase",securitySchemes:{APIKeyHeader:{type:"apiKey",in:"header",name:"access_token"}},info:{title:"ActionHub.ai API",description:'\n# Introduction\n_Improve user engagement with real-time "Next Best Action" recommendations using ActionHub.ai from Lifecycle Science._\nActionHub delivers consumer action recommendations,\nmessage orchestration, and content personalization in a variety of \nmarketing and product development use cases. ActionHub uses\nanonymized event logging to optimize category and asset recommendations for any\nuser based on their own engagement history.\nThe ActionHub API provides authenticated systems with program owners access to \nthe real-time retention and engagement engine built by Lifecycle Science. \n\nOnly two API call integrations are needed to get started:\n\n1. `[POST] /events` for logging user engagement events\n1. `[GET] /users/<user_id>/actions` to retrieve user recommended actions.\n\n\nAll of the other API resources available in the ActionHub system provide optional configuration and optimization features.\nAn API Key and Program ID are necessary to access the API. Contact Lifecycle Science support to obtain.\n',termsOfService:"https://docs.actionhub.ai/terms/",contact:{name:"Darryl Kanouse",url:"https://lifecyclescience.com/",email:"darryl@lifecyclescience.com"},license:{name:"Contact Lifecycle Science",url:"https://lifecyclescience.com/"},version:"0.0.2"},postman:{name:"Rebase Models",description:{content:"Re-calculate the base/global models used in action recommendations.\nIn most cases, this should be done no more than once per 24 hours\nwhen (a) new products/actions/services are added to the global event store,\nor (b) program configuration changes have been posted and are ready for publishing.\nIndividual user data is not impacted by this process.\n**NOTE: this action may take up to 60 seconds to complete**",type:"text/plain"},url:{path:["program","rebase"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"program-id",value:""},{key:"Accept",value:"application/json"}],method:"PUT",auth:{type:"apikey",apikey:[{type:"any",value:"access_token",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"docs/api/actionhub-ai-api",custom_edit_url:null},u=void 0,y={unversionedId:"api/rebase-models-program-rebase-put",id:"api/rebase-models-program-rebase-put",title:"Rebase Models",description:"Re-calculate the base/global models used in action recommendations.",source:"@site/docs/api/rebase-models-program-rebase-put.api.mdx",sourceDirName:"api",slug:"/api/rebase-models-program-rebase-put",permalink:"/docs/api/rebase-models-program-rebase-put",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"rebase-models-program-rebase-put",title:"Rebase Models",description:"Re-calculate the base/global models used in action recommendations.",sidebar_label:"Rebase Models",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Program Configuration"],description:"Re-calculate the base/global models used in action recommendations.\nIn most cases, this should be done no more than once per 24 hours\nwhen (a) new products/actions/services are added to the global event store,\nor (b) program configuration changes have been posted and are ready for publishing.\nIndividual user data is not impacted by this process.\n**NOTE: this action may take up to 60 seconds to complete**",operationId:"rebase_models_program_rebase_put",parameters:[{required:!0,schema:{title:"Program-Id",type:"string"},name:"program-id",in:"header"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"SuccessMessage",required:["result"],type:"object",properties:{result:{title:"Result",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{APIKeyHeader:[]}],method:"put",path:"/program/rebase",securitySchemes:{APIKeyHeader:{type:"apiKey",in:"header",name:"access_token"}},info:{title:"ActionHub.ai API",description:'\n# Introduction\n_Improve user engagement with real-time "Next Best Action" recommendations using ActionHub.ai from Lifecycle Science._\nActionHub delivers consumer action recommendations,\nmessage orchestration, and content personalization in a variety of \nmarketing and product development use cases. ActionHub uses\nanonymized event logging to optimize category and asset recommendations for any\nuser based on their own engagement history.\nThe ActionHub API provides authenticated systems with program owners access to \nthe real-time retention and engagement engine built by Lifecycle Science. \n\nOnly two API call integrations are needed to get started:\n\n1. `[POST] /events` for logging user engagement events\n1. `[GET] /users/<user_id>/actions` to retrieve user recommended actions.\n\n\nAll of the other API resources available in the ActionHub system provide optional configuration and optimization features.\nAn API Key and Program ID are necessary to access the API. Contact Lifecycle Science support to obtain.\n',termsOfService:"https://docs.actionhub.ai/terms/",contact:{name:"Darryl Kanouse",url:"https://lifecyclescience.com/",email:"darryl@lifecyclescience.com"},license:{name:"Contact Lifecycle Science",url:"https://lifecyclescience.com/"},version:"0.0.2"},postman:{name:"Rebase Models",description:{content:"Re-calculate the base/global models used in action recommendations.\nIn most cases, this should be done no more than once per 24 hours\nwhen (a) new products/actions/services are added to the global event store,\nor (b) program configuration changes have been posted and are ready for publishing.\nIndividual user data is not impacted by this process.\n**NOTE: this action may take up to 60 seconds to complete**",type:"text/plain"},url:{path:["program","rebase"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"program-id",value:""},{key:"Accept",value:"application/json"}],method:"PUT",auth:{type:"apikey",apikey:[{type:"any",value:"access_token",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"docs/api/actionhub-ai-api",custom_edit_url:null},sidebar:"actionHubApi",previous:{title:"Get All Programs",permalink:"/docs/api/get-all-programs-programs-get"},next:{title:"Get Program",permalink:"/docs/api/get-program-program-get"}},g={},h=[{value:"Rebase Models",id:"rebase-models",level:2}],b={toc:h};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"rebase-models"},"Rebase Models"),(0,s.kt)("p",null,"Re-calculate the base/global models used in action recommendations.\nIn most cases, this should be done no more than once per 24 hours\nwhen (a) new products/actions/services are added to the global event store,\nor (b) program configuration changes have been posted and are ready for publishing.\nIndividual user data is not impacted by this process.\n",(0,s.kt)("strong",{parentName:"p"},"NOTE: this action may take up to 60 seconds to complete")),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Program-Id",type:"string"},name:"program-id",in:"header"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Result",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))),(0,s.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))))))))),(0,s.kt)(c.Z,{collapsible:!1,name:"msg",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Error Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);