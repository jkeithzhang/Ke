angular.module('Studynote-controller')
	.controller('testController', ['$scope',
		function($scope) {
			$scope.init = function() {
				// code here. 
				var stage = new createjs.Stage("demoCanvas");
				var circle = new createjs.Shape();
				circle.graphics.beginFill("#FF0").drawPolyStar(235, 100, 30, 5, 0.6, -90);
				stage.addChild(circle);
				stage.update();
			    $scope.moveUp = function() {
			        console.log(circle.y);
			        //Will cause the circle to wrap back
			        if (circle.y > -70) { 
			        	circle.y -= 10; 
			        }
			        stage.update();
			    }
			    $scope.moveDown = function() {
			        circle.y += 10;
			        //Will cause the circle to wrap back
			        // if (circle.x > stage.canvas.width) { circle.x = 0; }
			        stage.update();
			    }
			    $scope.moveLeft = function() {
			        circle.x -= 10;
			        //Will cause the circle to wrap back
			        // if (circle.x > stage.canvas.width) { circle.x = 0; }
			        stage.update();
			    }
			    $scope.moveRight = function() {
			        circle.x += 10;
			        //Will cause the circle to wrap back
			        // if (circle.x > stage.canvas.width) { circle.x = 0; }
			        stage.update();
			    }


				// createjs.Tween.get(circle, { loop: true })
				//   .to({ x: 200 }, 1000, createjs.Ease.getPowInOut(4))
				//   .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
				// createjs.Ticker.setFPS(60);
				// createjs.Ticker.addEventListener("tick", stage);

				//haha
			 //    var mystage = new createjs.Stage("haha");
			 //    var mycircle = new createjs.Shape();
			 //    mycircle.graphics.beginFill("#FF0").drawPolyStar(100, 100, 50, 5, 0.6, -90);			    //Set position of Shape instance.
			 //    mycircle.x = mycircle.y = 50;
			 //    mystage.addChild(mycircle);
			 //    mystage.update();

			}
		}
	])
	.controller('displayController', ['$scope',
		function($scope) {
			console.log('omg');
		}
	])