// // init controller
var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
// 					triggerElement: "#trigger1"
// 				})
// 				.setTween("#s2", 0.5, {x:100, opacity:0}) // trigger a TweenMax.to tween
// 				// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
// 				.addTo(controller);
// 				
windowHeight = $(window).innerHeight();        

new ScrollMagic.Scene({triggerElement: '#s2', 
                 duration: windowHeight/4}
               )
                .setTween( TweenMax.to("span", 1, {ease: Linear.easeInOut, autoAlpha: 1, x:100, y:-100}) )
                .addTo(controller);

// var scene2 = new ScrollMagic.Scene({
//   triggerHook: "onLeave",
//   triggerElement: "#s2",
//   // duration: windowHeight*4.5
//   duration: 10
// })
// .setPin("#s2")
// .addTo(controller);