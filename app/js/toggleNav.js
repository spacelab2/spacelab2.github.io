/*jslint browser:true */
'use strict';

var menuOpen = document.querySelector(".js-menu-open");
var menuClose = document.querySelector(".js-menu-close");

function toggleNav() {
    document.body.classList.toggle("is--toggle-nav");
    document.body.classList.remove("is--toggle-about");
}

menuOpen.addEventListener("click", toggleNav, false);
menuClose.addEventListener("click", toggleNav, false);