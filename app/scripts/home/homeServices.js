(function() {
    'use strict';

    function homeFactory($q, $http, facebookEndPoint, geolocation, $window) {
        var methods = {};

        methods.getFacebookEvents = function(geo) {
            var deferred = $q.defer();

            var endPoint = facebookEndPoint.replace('{lat}', geo.coords.latitude);
            endPoint = endPoint.replace('{long}', geo.coords.longitude);

            $http({
                    method: 'get',
                    url: endPoint,
                    timeout: 5000
                })
                .success(function(data) {
                    deferred.resolve(data);
                })
                .catch(function(error) {
                    deferred.reject(error);
                })

            return deferred.promise;
        }

        methods.getLocation = function() {
            return geolocation.getLocation();
        }

        methods.setLocationStorage = function(geo) {
            $window.localStorage.setItem('location', JSON.stringify({
                'lat': geo.latitude,
                'long': geo.longitude
            }));
        }

        methods.getLocationStorage = function() {
            return angular.fromJson($window.localStorage.getItem('location'));
        }

        methods.parseFacebookEvents = function(events) {
            var result = [];
            events.data.forEach(function(val, index) {
                var obj = {};
                obj.id = val.id;
                obj.name = val.name;
                obj.img = val.cover ? val.cover.source : '';
                obj.latitude = val.location.latitude;
                obj.longitude = val.location.longitude;
                obj.description = val.description || '';
                obj.street = val.location.street;
                obj.likes = val.likes;
                obj.show = false;
                obj.icon = '//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

                result.push(obj);
            })

            return result;
        }

        methods

        return methods;
    }

    angular.module('eventsApp.home.services', [])
        .factory('homeFactory', ['$q', '$http', 'facebookEndPoint', 'geolocation', '$window', homeFactory])
})();
