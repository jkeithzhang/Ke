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
			//2nd project
			$scope.title3 = "TS-HELPER";
			$scope.slides3 = [
				{
					image: 'images/tsh1.jpg'
				},
				{
					image: 'images/tsh2.jpg'
				},
				{
					image: 'images/tsh3.jpg'
				},
				{
					image: 'images/tsh4.jpg'
				},
				{
					image: 'images/tsh5.jpg'
				},
				{
					image: 'images/tsh6.jpg'
				},
				{
					image: 'images/tsh7.jpg'
				}
			];
		}
	])
	.controller('displayController', ['$scope',
		function($scope) {
			console.log('omg');
		}
	])