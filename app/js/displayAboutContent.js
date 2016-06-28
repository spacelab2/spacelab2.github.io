/*jslint browser:true */
'use strict';

var clickAbout = document.querySelector(".js-about");
var overlay = document.querySelector(".js-display-overlay");
var aboutContent = document.querySelectorAll(".js-about-content");
var mainHalf = document.querySelectorAll(".js-main");
var contentIntro = document.querySelector(".content--is-intro");
var contentAbout = document.querySelector(".js-about-content");
var menuOpen = document.querySelector(".js-menu-open");
var menuClose = document.querySelector(".js-menu-close");
var nav = document.querySelector(".js-nav");
var main = document.querySelector(".js-main-overlay");
var tlSceneThree = new TimelineMax();

function sceneThree() {
    tlSceneThree
      .set(overlay, { css: { display: 'block' } })
      .set(mainHalf, { css: { display: 'none' } })
      .set(nav, { css: { display: 'none' } })
      .set(menuClose, { css: { display: 'block' } })
      .set(menuOpen, { css: { display: 'none' } })
      .set(contentAbout, { css: { display: 'flex' } })
      .set(main, {css: { display: 'block'}})
};

clickAbout.addEventListener("click", sceneThree, false);