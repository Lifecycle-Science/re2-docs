/*
f = function(userId, eventType, assetId, labels) {
    alert(userId);
}
*/

/*
re2_program_id = '';
re2_actor_id = '';
re2_consent = true;
re2log('click', asset_id, ['purchase']);
*/


var re2client = {
    events: [],
    sendEvents: function () {
        fetch('https://api.re2.live/events', {
            method: 'POST',headers:{'Content-Type':'application/json','program-id': re2_program_id,},
            body: JSON.stringify(this.events)
        });
    }
}

re2log=function(eventType,assetId,labels=[]){
    re2client.events.push({eventType,assetId,labels})
}
setInterval(function () {
    if(re2client.events.length!=0){
    console.log(re2client.events);
    //re2client.sendEvents();
    re2client.events=[]}}, 6000);


/* 

// Track pageviews on the website
window.addEventListener('load', function () {
    tracker.trackEvent('pageview', {
        url: window.location.href
    });
});

// Track clicks on buttons on the website
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        tracker.trackEvent('click', {
            buttonId: this.id
        });
    });
}

*/