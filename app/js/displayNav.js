/*jslint browser:true */
'use strict';

var overlay = document.querySelector(".js-display-overlay");
var mainHalfRight = document.querySelectorAll(".js-main-right");
var mainHalfLeft = document.querySelectorAll(".js-main-left");
var menuOpen = document.querySelector(".js-menu-open");
var menuClose = document.querySelector(".js-menu-close");
var contentAbout = document.querySelector(".js-about-content");
var main = document.querySelector(".js-main-overlay");
var nav = document.querySelector(".js-nav");
var tlSceneOne = new TimelineMax();
var tlSceneTwo = new TimelineMax();

function sceneOne() {
    tlSceneOne
      .set(overlay, { css: { display: 'block' } })
      .set(mainHalfRight, { css: { display: 'none' } })
      .set(mainHalfLeft, { css: { display: 'none' } })
      .set(menuOpen, { css: { display: 'none' } })
      .set(menuClose, { css: { display: 'block' } })
      .set(contentAbout, { css: { display: 'none' } })
      .set(nav, { css: { display: 'flex' } })
}

function sceneTwo() {
    tlSceneOne
      .set(overlay, { css: { display: 'none' } })
      .set(mainHalfRight, { css: { display: 'block' } })
      .set(mainHalfLeft, { css: { display: 'flex' } })
      .set(menuOpen, { css: { display: 'block' } })
      .set(menuClose, { css: { display: 'none' } })
      .set(contentAbout, { css: { display: 'none' } })
      .set(main, { css: { display: 'flex' } })
    if (window.matchMedia("(min-width: 600px)").matches) {
        tlSceneOne
            .set(mainHalfRight, { css: { display: 'flex' } })
    }
}

menuOpen.addEventListener("click", sceneOne, false);
menuClose.addEventListener("click", sceneTwo, false);