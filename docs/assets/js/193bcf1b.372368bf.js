"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[2826],{61709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var i=a(87462),n=(a(67294),a(3905)),r=a(26389),s=a(94891),o=a(75190),l=a(47507),c=a(24310),m=a(63303),p=(a(75035),a(85162));const d={id:"get-all-programs-programs-get",title:"Get All Programs",description:"Get the program configuration settings used in processing and reporting events and actions.",sidebar_label:"Get All Programs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Program Configuration"],description:"Get the program configuration settings used in processing and reporting events and actions.",operationId:"get_all_programs_programs_get",parameters:[{required:!1,schema:{title:"Program-Id",type:"string"},name:"program-id",in:"header"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"ProgramList",required:["programs"],type:"object",properties:{programs:{title:"Programs",type:"array",items:{title:"Program",required:["program_id","program_name"],type:"object",properties:{program_id:{title:"Program Id",type:"string"},program_name:{title:"Program Name",type:"string"},high_engagement_threshold:{title:"High Engagement Threshold",exclusiveMinimum:1,type:"integer",description:"This value is the number of actions establishing a user as 'highly engaged'\n            (your best customers) for the purposes of inclusion in the engagement model. \n        "},event_relevance_decay:{title:"Event Relevance Decay",exclusiveMinimum:2,type:"integer",description:"This value is the number of days for events to lose half their weight\n            (also called event half-life), implemented as a decay curve over time.\n            This value is used to account for recency relevance so newer actions \n            can carry extra weight in calculations.\n            "},action_weight_floor:{title:"Action Weight Floor",exclusiveMaximum:1,type:"number",description:"This value is the minimum user action recommendation weight required \n            for the action to be included in the final recommendations. Higher numbers bring higher\n            confidence in the recommendations but also limit the number of recommendations \n            provided.\n        "},description:{title:"Description",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{APIKeyHeader:[]}],method:"get",path:"/programs",securitySchemes:{APIKeyHeader:{type:"apiKey",in:"header",name:"access_token"}},info:{title:"ActionHub.ai API",description:'\n# Introduction\n_Improve user engagement with real-time "Next Best Action" recommendations using ActionHub.ai from Lifecycle Science._\nActionHub delivers consumer action recommendations,\nmessage orchestration, and content personalization in a variety of \nmarketing and product development use cases. ActionHub uses\nanonymized event logging to optimize category and asset recommendations for any\nuser based on their own engagement history.\nThe ActionHub API provides authenticated systems with program owners access to \nthe real-time retention and engagement engine built by Lifecycle Science. \n\nOnly two API call integrations are needed to get started:\n\n1. `[POST] /events` for logging user engagement events\n1. `[GET] /users/<user_id>/actions` to retrieve user recommended actions.\n\n\nAll of the other API resources available in the ActionHub system provide optional configuration and optimization features.\nAn API Key and Program ID are necessary to access the API. Contact Lifecycle Science support to obtain.\n',termsOfService:"https://docs.actionhub.ai/terms/",contact:{name:"Darryl Kanouse",url:"https://lifecyclescience.com/",email:"darryl@lifecyclescience.com"},license:{name:"Contact Lifecycle Science",url:"https://lifecyclescience.com/"},version:"0.0.2"},postman:{name:"Get All Programs",description:{content:"Get the program configuration settings used in processing and reporting events and actions.",type:"text/plain"},url:{path:["programs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"program-id",value:""},{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"access_token",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api/actionhub-ai-api",custom_edit_url:null},g=void 0,u={unversionedId:"api/get-all-programs-programs-get",id:"api/get-all-programs-programs-get",title:"Get All Programs",description:"Get the program configuration settings used in processing and reporting events and actions.",source:"@site/docs/api/get-all-programs-programs-get.api.mdx",sourceDirName:"api",slug:"/api/get-all-programs-programs-get",permalink:"/docs/api/get-all-programs-programs-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-programs-programs-get",title:"Get All Programs",description:"Get the program configuration settings used in processing and reporting events and actions.",sidebar_label:"Get All Programs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Program Configuration"],description:"Get the program configuration settings used in processing and reporting events and actions.",operationId:"get_all_programs_programs_get",parameters:[{required:!1,schema:{title:"Program-Id",type:"string"},name:"program-id",in:"header"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"ProgramList",required:["programs"],type:"object",properties:{programs:{title:"Programs",type:"array",items:{title:"Program",required:["program_id","program_name"],type:"object",properties:{program_id:{title:"Program Id",type:"string"},program_name:{title:"Program Name",type:"string"},high_engagement_threshold:{title:"High Engagement Threshold",exclusiveMinimum:1,type:"integer",description:"This value is the number of actions establishing a user as 'highly engaged'\n            (your best customers) for the purposes of inclusion in the engagement model. \n        "},event_relevance_decay:{title:"Event Relevance Decay",exclusiveMinimum:2,type:"integer",description:"This value is the number of days for events to lose half their weight\n            (also called event half-life), implemented as a decay curve over time.\n            This value is used to account for recency relevance so newer actions \n            can carry extra weight in calculations.\n            "},action_weight_floor:{title:"Action Weight Floor",exclusiveMaximum:1,type:"number",description:"This value is the minimum user action recommendation weight required \n            for the action to be included in the final recommendations. Higher numbers bring higher\n            confidence in the recommendations but also limit the number of recommendations \n            provided.\n        "},description:{title:"Description",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{APIKeyHeader:[]}],method:"get",path:"/programs",securitySchemes:{APIKeyHeader:{type:"apiKey",in:"header",name:"access_token"}},info:{title:"ActionHub.ai API",description:'\n# Introduction\n_Improve user engagement with real-time "Next Best Action" recommendations using ActionHub.ai from Lifecycle Science._\nActionHub delivers consumer action recommendations,\nmessage orchestration, and content personalization in a variety of \nmarketing and product development use cases. ActionHub uses\nanonymized event logging to optimize category and asset recommendations for any\nuser based on their own engagement history.\nThe ActionHub API provides authenticated systems with program owners access to \nthe real-time retention and engagement engine built by Lifecycle Science. \n\nOnly two API call integrations are needed to get started:\n\n1. `[POST] /events` for logging user engagement events\n1. `[GET] /users/<user_id>/actions` to retrieve user recommended actions.\n\n\nAll of the other API resources available in the ActionHub system provide optional configuration and optimization features.\nAn API Key and Program ID are necessary to access the API. Contact Lifecycle Science support to obtain.\n',termsOfService:"https://docs.actionhub.ai/terms/",contact:{name:"Darryl Kanouse",url:"https://lifecyclescience.com/",email:"darryl@lifecyclescience.com"},license:{name:"Contact Lifecycle Science",url:"https://lifecyclescience.com/"},version:"0.0.2"},postman:{name:"Get All Programs",description:{content:"Get the program configuration settings used in processing and reporting events and actions.",type:"text/plain"},url:{path:["programs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"program-id",value:""},{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"access_token",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api/actionhub-ai-api",custom_edit_url:null},sidebar:"actionHubApi",previous:{title:"Program Configuration",permalink:"/docs/api/program-configuration"},next:{title:"Rebase Models",permalink:"/docs/api/rebase-models-program-rebase-put"}},h={},y=[{value:"Get All Programs",id:"get-all-programs",level:2}],v={toc:y};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-all-programs"},"Get All Programs"),(0,n.kt)("p",null,"Get the program configuration settings used in processing and reporting events and actions."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{required:!1,schema:{title:"Program-Id",type:"string"},name:"program-id",in:"header"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful Response")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"programs"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"program_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Program Id",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"program_name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Program Name",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"high_engagement_threshold",required:!1,deprecated:void 0,schemaDescription:"This value is the number of actions establishing a user as 'highly engaged'\n            (your best customers) for the purposes of inclusion in the engagement model. \n        ",schemaName:"High Engagement Threshold",qualifierMessage:"**Possible values:** `> 1`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"event_relevance_decay",required:!1,deprecated:void 0,schemaDescription:"This value is the number of days for events to lose half their weight\n            (also called event half-life), implemented as a decay curve over time.\n            This value is used to account for recency relevance so newer actions \n            can carry extra weight in calculations.\n            ",schemaName:"Event Relevance Decay",qualifierMessage:"**Possible values:** `> 2`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"action_weight_floor",required:!1,deprecated:void 0,schemaDescription:"This value is the minimum user action recommendation weight required \n            for the action to be included in the final recommendations. Higher numbers bring higher\n            confidence in the recommendations but also limit the number of recommendations \n            provided.\n        ",schemaName:"Action Weight Floor",qualifierMessage:"**Possible values:** `< 1`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"description",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Description",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "programs": [\n    {\n      "program_id": "string",\n      "program_name": "string",\n      "high_engagement_threshold": 0,\n      "event_relevance_decay": 0,\n      "action_weight_floor": 0,\n      "description": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Validation Error")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"detail"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"loc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("span",{className:"badge badge--info"},"anyOf"),(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))),(0,n.kt)(p.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"integer")))))))))),(0,n.kt)(c.Z,{collapsible:!1,name:"msg",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Error Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);