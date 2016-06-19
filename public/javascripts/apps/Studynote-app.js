angular.module('StudynoteApp')
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/studynote-main',
					controller: 'testController',
					public: true
				})
				.otherwise({ redirectTo: '/'});
		}
	]);