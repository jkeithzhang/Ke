// init controller
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
					triggerElement: "#trigger1"
				})
				.setTween("#animate1", 0.5, {x:100}) // trigger a TweenMax.to tween
				// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
				.addTo(controller);