(function() {
    'use strict';

    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/layout/mainLayout.html',
                abstract: true
            })
            .state('home.main', {
                url: '/main',
                templateUrl: 'views/main.html',
                controller: 'homeCtrl as Main',
                resolve: {
                    eventos: function(homeFactory) {
                        return homeFactory.getLocation()
                            .then(function(location) {
                                homeFactory.setLocationStorage(location.coords);
                                return homeFactory.getFacebookEvents(location);
                            })
                            .then(function(events) {
                                console.log(events)
                                return events;
                            })
                            .catch(function(error) {
                                return error;
                            })
                    }
                }
            })
            .state('home.myevents', {
                url: '/myevents',
                templateUrl: 'views/myevents.html',
                controller: 'myEventsCtrl as myEvents',
                resolve: {
                    eventos: function(myEventsFactory) {
                        return myEventsFactory.getLocalStorage()
                            .catch(function(err) {
                                console.log(err)
                                return err;
                            })
                    }
                }
            })
            .state('home.contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'contactCtrl as Contact'
                    /*,
                                    resolve: {
                                        cotizaciones: function(cotizacionFactory) {
                                            return cotizacionFactory.getCotizaciones()
                                                .then(function(data) {
                                                    return data;
                                                })
                                                .catch(function(err) {
                                                    return err;
                                                })
                                        }
                                    }*/
            })

        $urlRouterProvider.otherwise('/home/main');
    }

    angular.module('eventsApp.routes', [])
        .config(['$stateProvider', '$urlRouterProvider', routes])
})();
