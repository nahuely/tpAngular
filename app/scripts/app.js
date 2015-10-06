'use strict';

/**
 * @ngdoc overview
 * @name eventsAppApp
 * @description
 * # eventsAppApp
 *
 * Main module of the application.
 */
angular
  .module('eventsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'geolocation',
    'uiGmapgoogle-maps',
    'ui.router',
    'eventsApp.routes',
    'eventsApp.contact',
    'eventsApp.home',
    'eventsApp.myEvents'
  ])