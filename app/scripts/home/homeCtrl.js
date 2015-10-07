(function() {
    'use strict';

    function homeCtrl($scope, eventos, homeFactory) {
        var vm = this;

        if (eventos) {
            vm.location = homeFactory.getLocationStorage();
            vm.eventosArr = homeFactory.parseFacebookEvents(eventos);
        }
    }

    angular.module('eventsApp.home.controllers', [])
        .controller('homeCtrl', ['$scope', 'eventos', 'homeFactory', homeCtrl])
})();
