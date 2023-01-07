"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[3969],{99053:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var i=a(87462),r=(a(67294),a(3905)),n=a(26389),o=a(94891),s=a(75190),l=a(47507),m=a(24310),c=a(63303),p=(a(75035),a(85162));const d={id:"create-program-programs-post",title:"Create Program",description:"Create Program",sidebar_label:"Create Program",hide_title:!0,hide_table_of_contents:!0,api:{tags:["System Administration"],operationId:"create_program_programs_post",parameters:[{required:!1,schema:{title:"Program-Id",type:"string"},name:"program-id",in:"header"}],requestBody:{content:{"application/json":{schema:{title:"NewProgram",required:["program_name"],type:"object",properties:{program_id:{title:"Program Id",type:"string"},program_name:{title:"Program Name",type:"string"},high_engagement_threshold:{title:"High Engagement Threshold",exclusiveMinimum:1,type:"integer",description:"This value is the number of actions establishing a user as 'highly engaged'\n            (your best customers) for the purposes of inclusion in the engagement model. \n        "},event_relevance_decay:{title:"Event Relevance Decay",exclusiveMinimum:2,type:"integer",description:"This value is the number of days for events to lose half their weight\n            (also called event half-life), implemented as a decay curve over time.\n            This value is used to account for recency relevance so newer actions \n            can carry extra weight in calculations.\n            "},action_weight_floor:{title:"Action Weight Floor",exclusiveMaximum:1,type:"number",description:"This value is the minimum user action recommendation weight required \n            for the action to be included in the final recommendations. Higher numbers bring higher\n            confidence in the recommendations but also limit the number of recommendations \n            provided.\n        "},description:{title:"Description",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"NewProgramResponse",required:["api_key","program_id"],type:"object",properties:{api_key:{title:"Api Key",type:"string"},program_id:{title:"Program Id",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{APIKeyHeader:[]}],description:"Create Program",method:"post",path:"/programs",securitySchemes:{APIKeyHeader:{type:"apiKey",in:"header",name:"access_token"}},jsonRequestBodyExample:{program_id:"string",program_name:"string",high_engagement_threshold:0,event_relevance_decay:0,action_weight_floor:0,description:"string"},info:{title:"ActionHub.ai API",description:'\n# Introduction\n_Improve user engagement with real-time "Next Best Action" recommendations using ActionHub.ai from Lifecycle Science._\nActionHub delivers consumer action recommendations,\nmessage orchestration, and content personalization in a variety of \nmarketing and product development use cases. ActionHub uses\nanonymized event logging to optimize category and asset recommendations for any\nuser based on their own engagement history.\nThe ActionHub API provides authenticated systems with program owners access to \nthe real-time retention and engagement engine built by Lifecycle Science. \n\nOnly two API call integrations are needed to get started:\n\n1. `[POST] /events` for logging user engagement events\n1. `[GET] /users/<user_id>/actions` to retrieve user recommended actions.\n\n\nAll of the other API resources available in the ActionHub system provide optional configuration and optimization features.\nAn API Key and Program ID are necessary to access the API. Contact Lifecycle Science support to obtain.\n',termsOfService:"https://docs.actionhub.ai/terms/",contact:{name:"Darryl Kanouse",url:"https://lifecyclescience.com/",email:"darryl@lifecyclescience.com"},license:{name:"Contact Lifecycle Science",url:"https://lifecyclescience.com/"},version:"0.0.2"},postman:{name:"Create Program",description:{type:"text/plain"},url:{path:["programs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"program-id",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"access_token",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/api/actionhub-ai-api",custom_edit_url:null},u=void 0,g={unversionedId:"api/create-program-programs-post",id:"api/create-program-programs-post",title:"Create Program",description:"Create Program",source:"@site/docs/api/create-program-programs-post.api.mdx",sourceDirName:"api",slug:"/api/create-program-programs-post",permalink:"/docs/api/create-program-programs-post",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-program-programs-post",title:"Create Program",description:"Create Program",sidebar_label:"Create Program",hide_title:!0,hide_table_of_contents:!0,api:{tags:["System Administration"],operationId:"create_program_programs_post",parameters:[{required:!1,schema:{title:"Program-Id",type:"string"},name:"program-id",in:"header"}],requestBody:{content:{"application/json":{schema:{title:"NewProgram",required:["program_name"],type:"object",properties:{program_id:{title:"Program Id",type:"string"},program_name:{title:"Program Name",type:"string"},high_engagement_threshold:{title:"High Engagement Threshold",exclusiveMinimum:1,type:"integer",description:"This value is the number of actions establishing a user as 'highly engaged'\n            (your best customers) for the purposes of inclusion in the engagement model. \n        "},event_relevance_decay:{title:"Event Relevance Decay",exclusiveMinimum:2,type:"integer",description:"This value is the number of days for events to lose half their weight\n            (also called event half-life), implemented as a decay curve over time.\n            This value is used to account for recency relevance so newer actions \n            can carry extra weight in calculations.\n            "},action_weight_floor:{title:"Action Weight Floor",exclusiveMaximum:1,type:"number",description:"This value is the minimum user action recommendation weight required \n            for the action to be included in the final recommendations. Higher numbers bring higher\n            confidence in the recommendations but also limit the number of recommendations \n            provided.\n        "},description:{title:"Description",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"NewProgramResponse",required:["api_key","program_id"],type:"object",properties:{api_key:{title:"Api Key",type:"string"},program_id:{title:"Program Id",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{APIKeyHeader:[]}],description:"Create Program",method:"post",path:"/programs",securitySchemes:{APIKeyHeader:{type:"apiKey",in:"header",name:"access_token"}},jsonRequestBodyExample:{program_id:"string",program_name:"string",high_engagement_threshold:0,event_relevance_decay:0,action_weight_floor:0,description:"string"},info:{title:"ActionHub.ai API",description:'\n# Introduction\n_Improve user engagement with real-time "Next Best Action" recommendations using ActionHub.ai from Lifecycle Science._\nActionHub delivers consumer action recommendations,\nmessage orchestration, and content personalization in a variety of \nmarketing and product development use cases. ActionHub uses\nanonymized event logging to optimize category and asset recommendations for any\nuser based on their own engagement history.\nThe ActionHub API provides authenticated systems with program owners access to \nthe real-time retention and engagement engine built by Lifecycle Science. \n\nOnly two API call integrations are needed to get started:\n\n1. `[POST] /events` for logging user engagement events\n1. `[GET] /users/<user_id>/actions` to retrieve user recommended actions.\n\n\nAll of the other API resources available in the ActionHub system provide optional configuration and optimization features.\nAn API Key and Program ID are necessary to access the API. Contact Lifecycle Science support to obtain.\n',termsOfService:"https://docs.actionhub.ai/terms/",contact:{name:"Darryl Kanouse",url:"https://lifecyclescience.com/",email:"darryl@lifecyclescience.com"},license:{name:"Contact Lifecycle Science",url:"https://lifecyclescience.com/"},version:"0.0.2"},postman:{name:"Create Program",description:{type:"text/plain"},url:{path:["programs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"program-id",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"access_token",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/api/actionhub-ai-api",custom_edit_url:null},sidebar:"actionHubApi",previous:{title:"System Administration",permalink:"/docs/api/system-administration"},next:{title:"Reset Models",permalink:"/docs/api/reset-models-program-reset-put"}},y={},h=[{value:"Create Program",id:"create-program",level:2}],v={toc:h};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-program"},"Create Program"),(0,r.kt)("p",null,"Create Program"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(s.Z,{className:"paramsItem",param:{required:!1,schema:{title:"Program-Id",type:"string"},name:"program-id",in:"header"},mdxType:"ParamsItem"})))),(0,r.kt)(o.Z,{mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"program_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Program Id",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"program_name",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"Program Name",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"high_engagement_threshold",required:!1,deprecated:void 0,schemaDescription:"This value is the number of actions establishing a user as 'highly engaged'\n            (your best customers) for the purposes of inclusion in the engagement model. \n        ",schemaName:"High Engagement Threshold",qualifierMessage:"**Possible values:** `> 1`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"event_relevance_decay",required:!1,deprecated:void 0,schemaDescription:"This value is the number of days for events to lose half their weight\n            (also called event half-life), implemented as a decay curve over time.\n            This value is used to account for recency relevance so newer actions \n            can carry extra weight in calculations.\n            ",schemaName:"Event Relevance Decay",qualifierMessage:"**Possible values:** `> 2`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"action_weight_floor",required:!1,deprecated:void 0,schemaDescription:"This value is the minimum user action recommendation weight required \n            for the action to be included in the final recommendations. Higher numbers bring higher\n            confidence in the recommendations but also limit the number of recommendations \n            provided.\n        ",schemaName:"Action Weight Floor",qualifierMessage:"**Possible values:** `< 1`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"description",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Description",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"api_key",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Api Key",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"program_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Program Id",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "api_key": "string",\n  "program_id": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation Error")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"loc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"anyOf"),(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"string")))),(0,r.kt)(p.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"integer")))))))))),(0,r.kt)(m.Z,{collapsible:!1,name:"msg",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Error Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);