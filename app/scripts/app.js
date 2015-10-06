'use strict';

angular
  .module('eventsApp', [
    'geolocation',
    'uiGmapgoogle-maps',
    'ui.router',
    'eventsApp.routes',
    'eventsApp.contact',
    'eventsApp.home',
    'eventsApp.myEvents'
  ])