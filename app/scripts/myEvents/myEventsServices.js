(function() {
    'use strict';

    function myEventsFactory($window) {
        var methods = {};

        methods.getLocalStorage = function(key) {
            return angular.toJson($window.localStorage.getItem(key));
        }

        methods.setLocalStorage = function(obj, key) {
            var newArray = this.getLocalStorage(key);

            if(newArray.length == 0){
            	newArray = [];       
            }

            newArray.push(obj);
            $window.localStorage.setItem(key, angular.fromJson(newArray));
        }
        
        return methods;
    }

    angular.module('eventsApp.myEvents.services', [])
        .factory('myEventsFactory', ['$window', myEventsFactory])
})();
