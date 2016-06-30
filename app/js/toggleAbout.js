/*jslint browser:true */
'use strict';

var clickAbout = document.querySelector(".js-about");

function toggleAbout() {
    document.body.classList.add("is--toggle-about");
}

clickAbout.addEventListener("click", toggleAbout, false);
