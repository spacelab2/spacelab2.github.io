/*jslint browser:true */
(function () {
    "use strict";

    var clickAbout = document.querySelector(".js-about");
    var menuOpen = document.querySelector(".js-menu-open");
    var menuClose = document.querySelector(".js-menu-close");

    function toggleAbout() {
        document.body.classList.add("is--toggle-about");
    }

    function toggleNav() {
        document.body.classList.toggle("is--toggle-nav");
        document.body.classList.remove("is--toggle-about");
    }

    menuOpen.addEventListener("click", toggleNav, false);
    menuClose.addEventListener("click", toggleNav, false);
    clickAbout.addEventListener("click", toggleAbout, false);
    console.log('yo');

   

}());