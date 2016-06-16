angular.module('Ke-controller')
	.controller('testController', ['$scope',
		function($scope) {
			//1st project
			$scope.title1 = "VENTUS";
			$scope.slides1 = [
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
			//2nd project
			$scope.title2 = "LABOOK";
			$scope.slides2 = [
				{
					image: 'images/labook1.jpg'
				},
				{
					image: 'images/labook2.jpg'
				},
				{
					image: 'images/labook3.jpg'
				}
			];
		}
	])
	.controller('displayController', ['$scope',
		function($scope) {
			console.log('omg');
		}
	])