angular.module('Ke-controller')
	.controller('testController', ['$scope',
		function($scope) {
			$scope.slides = [
				{
					image: 'images/ventus1.jpg'
				},
				{
					image: 'images/ventus2.jpg'
				},
				{
					image: 'images/ventus3.jpg'
				},
				{
					image: 'images/ventus4.jpg'
				},
				{
					image: 'images/ventus5.jpg'
				},
			];
		}
	])
	.controller('displayController', ['$scope',
		function($scope) {
			console.log('omg');
		}
	])