angular.module('Ke-controller')
	.controller('testController', ['$scope',
		function($scope) {
			console.log('fuk');
			$scope.displayWhatever = function() {
				console.log('done!');
			}
		}
	])