angular.module('Studynote-controller')
	.controller('testController', ['$scope',
		function($scope) {
			console.log('.....');
			$scope.displayWhatever = function() {
				console.log('done!');
			}
		}
	])
	.controller('displayController', ['$scope',
		function($scope) {
			console.log('omg');
		}
	])