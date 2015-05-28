angular.module('KeApp')
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/', {
					
				})
				.when('/parts', {
					templateUrl: '../partials/parts', 
					controller: 'sshLinkCtrl',
					login: true	
				})
				.otherwise({ redirectTo: '/loadNodes/free'});
		}
	]);