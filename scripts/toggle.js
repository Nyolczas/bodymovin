var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  }, 
  bm = select('#bm'),    
    animData = {
		wrapper: bm,
		animType: 'svg',
		loop: false,
		prerender: false,
		autoplay: false,
		path: '../data/data.json'
	}, anim;

	anim = bodymovin.loadAnimation(animData);
 anim.addEventListener('DOMLoaded', onDOMLoaded);
 anim.setSpeed(15);

function onDOMLoaded(e){
  
 bm.onclick = function(e){
  if(anim.currentFrame > 0){
   anim.playSegments([anim.currentFrame, 0], true);
   TweenMax.to('.eggGroup', 1, {
    x:0,
    ease:Elastic.easeOut.config(0.9,0.38)
   })   
  } else {
   TweenMax.to('.eggGroup', 1.4, {
    x:73,
    ease:Elastic.easeOut.config(0.9,0.38)
   })
   anim.playSegments([anim.currentFrame, 120], true)
  }
 }
}

