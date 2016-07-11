/*jslint browser:true */
(function () {
    "use strict";

    var clickAbout = document.querySelector(".js-about");
    var clickMenu = document.querySelector(".js-menu-close");
   
    function toggleAbout() {
        document.body.classList.add("is--toggle-about");
        document.body.classList.remove("loaded");
    }

    function toggleNav() {
        document.body.classList.toggle("is--toggle-nav");
        document.body.classList.remove("is--toggle-about");
        document.body.classList.add("loaded");
    }

    clickMenu.addEventListener("click", toggleNav, false);
    clickAbout.addEventListener("click", toggleAbout, false);

}());