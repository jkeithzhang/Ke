angular.module('Ke-controller')
	.controller('testController', ['$scope',
		function($scope) {
			$scope.displayWhatever = function() {
				console.log('done!');
			}
		}
	])