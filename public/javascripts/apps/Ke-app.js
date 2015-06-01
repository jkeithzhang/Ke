angular.module('KeApp')
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/test', {
					templateUrl: 'partials/why',
					controller: 'testController',
					public: true
				})
				.otherwise({ redirectTo: '/'});
		}
	]);