(function() {
	'use strict';
	function homeCtrl($scope, geolocation) {
		
	}

	angular.module('eventsApp.home.controllers', [])
		.controller('homeCtrl', ['$scope', 'geolocation', homeCtrl])
})();