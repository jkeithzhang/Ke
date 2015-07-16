angular.module('StudynoteApp')
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/create',
					controller: 'testController',
					public: true
				})
				.otherwise({ redirectTo: '/'});
		}
	]);