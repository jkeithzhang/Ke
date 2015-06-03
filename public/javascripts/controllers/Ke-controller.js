angular.module('Ke-controller')
	.controller('testController', ['$scope',
		function($scope) {
			console.log('.....');
			$scope.displayWhatever = function() {
				console.log('done!');
			}
		}
	])
	.controller()