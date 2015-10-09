(function() {
    'use strict';

    function myEventsCtrl($scope, myEventsFactory) {
        // vm = vISTA MODelO
        var vm = this;
        vm.events = myEventsFactory.getLocalStorage('data');

        vm.remove = function(evento) {
            myEventsFactory.deleteFromLocalStorage('data', evento.id);
        }

        vm.goFace = function(evento){
            myEventsFactory.goFacebook(evento);
        }
    }

    angular.module('eventsApp.myEvents.controllers', [])
        .controller('myEventsCtrl', ['$scope', 'myEventsFactory', myEventsCtrl])
})();