(function() {
    'use strict';

    function myEventsFactory($window) {
        var methods = {};

        methods.getLocalStorage = function(key) {
            var array = angular.fromJson($window.localStorage.getItem(key));

            for(var i=0;i<array.length; i++){
                if(array[i].img == ""){
                    array[i].img == 'http://www.placehold.it/200x200';
                }
            }

            return array;
        }

        methods.deleteFromLocalStorage = function(key, id){
            var newArray = this.getLocalStorage(key);

            for(var i=0; i < newArray.length; i++){
                if(newArray[i].id == id){
                    newArray.splice(newArray[i], 1)
                }
            }

            $window.localStorage.setItem(key, angular.toJson(newArray));
            
            return newArray;
        }
        methods.goFacebook = function(obj){
            console.log(this)
            $window.open('http://www.facebook.com/'+obj.id,'_blank');
        }

        return methods;
    }

    angular.module('eventsApp.myEvents.services', [])
        .factory('myEventsFactory', ['$window', myEventsFactory])
})();