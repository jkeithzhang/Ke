angular.module('KeApp')
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/project-demo',
					controller: 'testController',
					public: true
				})
				.otherwise({ redirectTo: '/'});
		}
	]);