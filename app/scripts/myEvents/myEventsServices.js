(function() {
    'use strict';

    function myEventsFactory($window) {
        var methods = {};

        methods.getLocalStorage = function(key) {
            return angular.toJson($window.localStorage.getItem(key));
        }

        methods.deleteFromLocalStorage = function(key, id){
            var newArray = this.getLocalStorage();

            for(var i=0; i < newArray.length; i++){
                if(newArray[i].id == id){
                    newArray = newArray.splice(newArray[i], 1)
                }
            }

            $window.localStorage.setItem(key, angular.fromJson(newArray));
            
            return newArray;
        }
        methods.getFacebook = function(obj){
            console.log(this)
            window.open('www.facebook.com/'+obj.id,'_blank');
        }

        return methods;
    }

    angular.module('eventsApp.myEvents.services', [])
        .factory('myEventsFactory', ['$window', myEventsFactory])
})();