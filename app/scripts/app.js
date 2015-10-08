'use strict';

angular
  .module('eventsApp', [
    'geolocation',
    'ui.router',
    'eventsApp.routes',
    'eventsApp.contact',
    'eventsApp.home',
    'ngMap',
    'eventsApp.myEvents'
  ])
  .value('facebookEndPoint', 'https://graph.facebook.com/v2.4/search?fields=id,name,location,description,cover,category,hours,likes&limit=100&type=place&q=fiesta&center={lat},{long}&distance=1000&access_token=664638550345805|x9PCxuryIKkddL4rI2f6_iLXQ2Q&__before_id=enc_AdBEJotiUCFbZAxiuO5VE6gHPzidOfHGHshjkHmK23pZARxqaT74aHbOaJobIXMH3bQ5Xu6I7ZBA94QNJZAegKs70dEe')