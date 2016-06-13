/*jslint browser:true */

var TweenMax = require("gsap");

var layoutRight = document.getElementsByClassName("layout-right");
var layoutLeft = document.getElementsByClassName("layout-left");
var logo = document.getElementsByClassName("logo");
var introText = document.getElementsByClassName("intro");
var menu = document.querySelector(".menu");
var close = document.querySelector(".menu-close");
var overlay = document.getElementsByClassName("layout-overlay");

var tlSceneOne = new TimelineMax();
var tlSceneTwo = new TimelineMax();
var tlSceneThree = new TimelineMax();

function sceneOne() {
    "use strict";
    tlSceneOne
        .set(layoutLeft, { x: '50%' })
        .set(layoutRight, { x: '100%' })
        .set(logo, { scale: 0.5, opacity: 0, rotationX: 45 })
        .set(introText, { y: '300%', opacity: 0 })
        .add('logo')
        .to(logo, 1, { scale: 1, opacity: 1, rotationX: 360, ease: Power1.easeOut }, 'logo')
        .add('layoutLeft')
        .to(layoutLeft, 0.4, { x: '0%', ease: Power1.easeOut })
        .add('layoutRight')
        .to(layoutRight, 0.4, { x: '0%', ease: Power1.easeOut }, 'layoutLeft+=0.30')
        .to(introText, 1, { y: '0%', opacity: 1 }, 'layoutRight')
}

function sceneTwo() {
    "use strict";
    tlSceneTwo
        .set(overlay, { opacity: 0 })
        .set(overlay, { css: { display: 'block' } })
        .set(menu, { css: { display: 'none' } })
        .set(close, {css: {display: 'block' }})
        .add('overlay')
        .to(overlay, 0.4, { opacity: 1 })
        .to(layoutRight, 0.4, { opacity: 0 }, 'overlay')
        .to(layoutLeft, 0.4, { opacity: 0 }, 'overlay')
}

function sceneThree() {
    "use strict";
    tlSceneThree
        .set(overlay, { css: { display: 'none' } })
        .set(menu, { css: { display: 'block' } })
        .set(close, { css: { display: 'none' } })
        .add('overlay')
        .to(overlay, 0.4, { opacity: 0 })
        .to(layoutRight, 0.4, { opacity: 1 }, 'overlay')
        .to(layoutLeft, 0.4, { opacity: 1 }, 'overlay')
}

document.addEventListener("DOMContentLoaded", sceneOne, false);
menu.addEventListener("click", sceneTwo, false);
close.addEventListener("click", sceneThree, false);



