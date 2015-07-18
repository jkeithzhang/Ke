angular.module('Studynote-controller')
	.controller('testController', ['$scope',
		function($scope) {
			$scope.init = function() {
				// code here. 
				var stage = new createjs.Stage("demoCanvas");
				var circle = new createjs.Shape();
				circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 30);
				circle.x = 50;
				circle.y = 50;
				stage.addChild(circle);
				createjs.Tween.get(circle, { loop: true })
				  .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
				  .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
				  .to({ alpha: 0, y: 225 }, 100)
				  .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
				  .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
				createjs.Ticker.setFPS(60);
				createjs.Ticker.addEventListener("tick", stage);


				//haha
			 //    var mystage = new createjs.Stage("haha");
			 //    var mycircle = new createjs.Shape();
			 //    mycircle.graphics.beginFill("#FF0").drawPolyStar(100, 100, 50, 5, 0.6, -90);			    //Set position of Shape instance.
			 //    mycircle.x = mycircle.y = 50;
			 //    mystage.addChild(mycircle);
			 //    mystage.update();

				
				// // mycircle.addEventListener("mousedown", handleTick);
				// createjs.Ticker.addEventListener("tick", handleTick);
			 //    function handleTick() {
			 //     	//Circle will move 10 units to the right.
			 //        mycircle.x += 10;
			 //        //Will cause the mycircle to wrap back
			 //        if (mycircle.x > stage.canvas.width) { mycircle.x = 0; }
			 //        mystage.update();
			 //    }				
				// function handlePress(event) {	
				//     alert("mousemove");
				// }
			}
		}
	])
	.controller('displayController', ['$scope',
		function($scope) {
			console.log('omg');
		}
	])