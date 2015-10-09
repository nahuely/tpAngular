(function() {
    'use strict';

    function homeCtrl($scope, eventos, homeFactory) {
        var vm = this;

        vm.location = homeFactory.getLocationStorage();
        vm.icon = '//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        vm.eventosArr = homeFactory.parseFacebookEvents(eventos);
        vm.map = {
            center: {
                latitude: vm.location.lat,
                longitude: vm.location.long
            },
            zoom: 15,
            markersEvents: {
                click: function(marker, eventName, model) {
                    console.log(marker, eventName, model);
                    vm.windows.model = model;
                    vm.windows.show = true;
                    vm.windows.image = (model.img) ? model.img : '';
                    vm.windows.add = $scope.add
                }
            }
        };

        vm.windows = {
            show: false,
            closeClick: function() {
                this.show = false;
            },
            options: {},
            parent: vm
        }

        vm.add = function() {
            console.log("asda")
        }
    }

    angular.module('eventsApp.home.controllers', [])
        .controller('homeCtrl', ['$scope', 'eventos', 'homeFactory', homeCtrl])
})();
