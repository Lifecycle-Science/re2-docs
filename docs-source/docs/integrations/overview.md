---
sidebar_position: 1
title: Integration Overview
---

# RE2 Integration

:::caution

This documentation is a work in progress.

:::


The RE2 tag is not an analytics tracker.
The RE2 tag does not require cookies - you provide the identity key used

The RE2 Tag can either be added directly to you site, or you can deploy using Google Tag Manager.


## Direct Integration

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

## Integration with Google Tag Manager (GTM)

event?
