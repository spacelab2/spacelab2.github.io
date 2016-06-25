/*jslint browser:true */

var TweenMax = require("gsap");

var layoutRight = document.querySelector(".layout-right");
var layoutLeft = document.getElementsByClassName("layout-left");
var logo = document.getElementsByClassName("logo");
var introText = document.getElementsByClassName("intro");
var menu = document.querySelector(".menu");
var close = document.querySelector(".menu-close");
var overlay = document.getElementsByClassName("layout-overlay");
var about = document.querySelector(".about");
var articles = document.querySelector(".articles");
var twitter = document.querySelector(".twitter");
var aboutMe = document.querySelector(".about-me");
var nav = document.querySelector(".nav");


var tlSceneOne = new TimelineMax();
var tlSceneTwo = new TimelineMax();
var tlSceneThree = new TimelineMax();
var tlSceneFour = new TimelineMax();
var tlSceneFive = new TimelineMax();
var tlSceneSix = new TimelineMax();
var tlSceneSeven = new TimelineMax();

function sceneOne() {
    "use strict";
    if (window.matchMedia("(min-width: 600px)").matches) {
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
         .to(introText, 1, { y: '0%', opacity: 1, rotationY: 360 }, 'layoutRight')
    } else {
        tlSceneOne
            .set(logo, { scale: 0.5, opacity: 0, rotationX: 45 })
            .to(logo, 1, { scale: 1, opacity: 1, rotationX: 360, ease: Power1.easeOut })
            .to(logo, 1, { rotationX: 360, ease: Power1.easeOut })
            .to(layoutRight, 1, { rotationY: 360 })
            .to(layoutRight, 1, { backgroundColor: "#052439" })
       }
}

function sceneTwo() {
    "use strict";
    console.log('open');
    if (window.matchMedia("(min-width: 600px)").matches) {
        tlSceneTwo
            .set(overlay, { y: '300%' })
            .set(menu, { css: { display: 'none' } })
            .set(close, { css: { display: 'block' } })
            .set(aboutMe, { css: { display: "none" } })
            .set(nav, { css: { display: 'flex' } })
            .to(close, 1, { rotation: 180 })
            .to(overlay, 1, { y: '0%', opacity: 1 })
            .to(layoutRight, 1, { opacity: 0 })
    } else {
        tlSceneTwo
            .set(menu, { css: { display: 'none' } })
            .set(close, { css: { display: 'block' } })
            .set(aboutMe, { css: { display: "none" } })
            .set(layoutRight, { css: { display: "none" } })
            .set(nav, { css: { display: 'flex' } })
            .to(close, 1, { rotation: 180 })
            .to(overlay, 1, { opacity: 1 })
    }
}

function sceneThree() {
    "use strict";
    console.log('close');
    if (window.matchMedia("(min-width: 600px)").matches) {
        tlSceneThree
            .set(menu, { css: { display: 'block' } })
            .set(close, { css: { display: 'none' } })
            .add('overlay')
            .fromTo(menu, 1, {rotation: 0}, { rotation: 180 })
            .to(overlay, 5, { y: '300%' })
            .to(layoutRight, 0.4, { opacity: 1 }, 'overlay')
            .to(layoutLeft, 0.4, { opacity: 1 }, 'overlay')
    } else {
        tlSceneThree
            .set(menu, { css: { display: 'block' } })
            .set(close, { css: { display: 'none' } })
            .set(layoutRight, { css: { display: 'flex' } })
            .to(overlay, 1, { opacity: 0 })
            .to(menu, 1, { rotation: 180 })
    }
}

function sceneFour() {
    "use strict"
    if (window.matchMedia("(min-width: 600px)").matches) {
        tlSceneFour
            .to(logo, 0.2, { textShadow: "5px 5px 20px #825b56" })
    }
}

function sceneFive() {
    "use strict"
    if (window.matchMedia("(min-width: 600px)").matches) {
        tlSceneFive
            .to(logo, 0.2, { textShadow: "0px 0px 0px #052439" })
    }
}

function sceneSix() {
    "use strict"
    if (window.matchMedia("(min-width: 600px)").matches) {
        tlSceneSix
            .set(aboutMe, { y: "300%" })
            .set(aboutMe, { css: { display: "block" } })
            .set(nav, { css: { display: "none" } })
            .to(aboutMe, 0.5, { y: "0%", rotationY: 360 })
    } else {
        tlSceneSix
            .set(aboutMe, { css: { display: "block" } })
            .set(nav, { css: { display: "none" } })
            .set(layoutRight, { css: { display: "none" } })
            .to(aboutMe, 0.4, {rotationY: 360 })
    }
}

document.addEventListener("DOMContentLoaded", sceneOne, false);
menu.addEventListener("click", sceneTwo, false);
close.addEventListener("click", sceneThree, false);
layoutRight.addEventListener("mouseover", sceneFour, false);
layoutRight.addEventListener("mouseout", sceneFive, false);
about.addEventListener("click", sceneSix, false);
