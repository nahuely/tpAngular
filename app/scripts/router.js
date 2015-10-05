(function() {
	'use strict';

	function routes($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'layout/layout.html',
				abstract: true
			})
			.state('home.cotizacion', {
				url: '/cotizacion',
				views: {
					'tab-cotizacion': {
						templateUrl: 'cotizacion/cotizacionView.html',
						controller: 'homeCotizacion as Cotizacion',
						resolve: {
							cotizaciones: function(cotizacionFactory) {
								return cotizacionFactory.getCotizaciones()
									.then(function(data) {
										return data;
									})
									.catch(function(err) {
										return err;
									})
							}
						}
					}
				}				
			})
			.state('home.myEvents', {
				url: '/calculadora',
				views: {
					'tab-calculadora': {
						templateUrl: 'calculadora/calculadoraView.html',
						controller: 'homeCalc as Calculadora'
					}
				}
			})
			.state('home.aboutUs', {
				url: '/ahorro',
				views: {
					'tab-ahorro': {
						templateUrl: 'ahorro/ahorroView.html',
						controller: 'homeAhorro as Ahorro'
					}
				}
			})

		$urlRouterProvider.otherwise('/home/cotizacion');
	}

	angular.module('eventsApp.routes', [])
		.config(['$stateProvider', '$urlRouterProvider', routes])
})();