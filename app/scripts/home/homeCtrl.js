(function() {
    'use strict';

    function homeCtrl($scope, eventos, homeFactory) {
        var vm = this;

        if (eventos) {
            vm.location = homeFactory.getLocationStorage();
            vm.icon = '//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
            vm.eventosArr = homeFactory.parseFacebookEvents(eventos);
            vm.map = {
                center: {
                    latitude: vm.location.lat,
                    longitude: vm.location.long
                },
                zoom: 15
            };
            console.log(vm.eventosArr)
        }
    }

    angular.module('eventsApp.home.controllers', [])
        .controller('homeCtrl', ['$scope', 'eventos', 'homeFactory', homeCtrl])
})();
