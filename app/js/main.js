var gsap = require('gsap');

var circleOne = document.getElementsByClassName('circle-one');
TweenMax.from(circleOne, 2, {
    opacity: 0,
    scale: 0,
    ease: Bounce.easeOut
});


var lines = document.getElementsByClassName('line');
TweenMax.staggerFrom(lines, 2, {
    opacity: 0,
    y: 200,
    rotation: 360,
    scale: 2,
    delay: 2
}, 0.2);