(function() {
	'use strict';
	function homeCtrl($scope, geolocation) {
		geolocation.getLocation()
			.then(function(data) {
				console.log(data);
			})
	}

	angular.module('eventsApp.home.controllers', [])
		.controller('homeCtrl', ['$scope', 'geolocation', homeCtrl])
})();