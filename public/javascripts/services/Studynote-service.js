angular.module('Studynote-service')
	.factory('Load', ['$http', 
		function($http) {
			return {
				get: function() {
					return $http({
						url: '/api/load',
						method: 'GET'
						// params: {node: node}
					});
				}
			};
		}
	]);