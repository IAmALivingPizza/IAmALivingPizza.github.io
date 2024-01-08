/*
    Student Name: Lucas Rosenberger
    File Name: script.js
    Date: //
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("lucas-logo");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        logo.style.display = "block";
    }
    else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}