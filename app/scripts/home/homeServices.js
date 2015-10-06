(function() {
	'use strict';

	function homeFactory() {
		var methods = {};

		methods.getFacebookEvents = function(geo) {
			var defered = q.defer();
			$http.get('')
		}
	

		return methods;
	}

	angular.module('eventsApp.home.services', [])
		.factory('homeFactory', ['$q', '$http', homeFactory])
})();