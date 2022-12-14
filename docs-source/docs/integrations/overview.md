---
sidebar_position: 1
title: Overview
---

# ActionHub Integration Overview

There are two areas of integration employed by ActionHub:

1. [**Event source integration (Inbound)**](#event-source-integration-inbound) - your product, app, storefront, or CDP
2. [**Action recommenation integration (Outbound)**](#action-recommenation-integration-outbound) - your marketing systems, email, push, in product messaging 

ActionHub offers pre-buiilt integrations (apps and services) for both inbound and outbound data flows. ActionHub also has a robust API which can be used for custom integration and development (Growth+ plans).

:::caution

ActionHub is in pre-release development. The following documentation is a work in progress.

:::

## Event Source Integration (Inbound)

:::info
Background: [Learn more about Events in ActionHub](/docs/events)
:::

### Official ActionHub Platform Apps (*Preferred Method*)

* The Official ActionHub Shopify App
* More coming...

### Integration with Google Tag Manager (GTM)


### Direct On-site Tagging

Notes; The ActionHub tag is not an analytics tracker and should not be used for UX analysis. The ActionHub tag does not require cookies - you provide the identity key used

For direct implementation, please add the following tag code in the `<head></head>` portion of your web page.
```javascript
<script src="https://tags.re2.live/re2-web.js"></script>
<script>
  re2_program_id = 'PROGRAM_ID'; // <-- replace with your program id
  re2_actor_id = 'USER_ID'; // <!-- the id of the individual or organanization related to this event
  re2_consent = true; // <-- flag for you to confifm you have aquired approriate consent
</script>
```

To start capturing events, simply add the following code wherever you ...

`re2log(<event_tyep>, <asset_id>, <labels>);`

```javascript
// Track pageviews on the website
window.addEventListener('load', function() {
  re2log('viewpage', window.location.href);
});
```

## Action recommenation integration (Outbound)

Official ActionHub Platform Apps (Preferred Method)​

The Official ActionHub Shopify App
More coming...


