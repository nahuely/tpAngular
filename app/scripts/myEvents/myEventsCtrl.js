(function() {
	'use strict';
	function myEventsCtrl($scope, myEventsFactory) {
		$scope.events = myEventsFactory.getLocalStorage("data");
	}

	angular.module('eventsApp.myEvents.controllers', [])
		.controller('myEventsCtrl', ['$scope', 'myEventsFactory', myEventsCtrl])
})();