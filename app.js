const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//end  section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//ScrollMagic
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 9, {opacity: 1}, {opacity: 0});
let scene2 = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0
})
 .setTween(textAnim)
 .addTo(controller);

//video animation
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);
  video.currentTime = delay;
}, 33.3);
