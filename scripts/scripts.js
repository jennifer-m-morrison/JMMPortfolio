//  Student Name: Jennifer Morrison
//  Date: December 4, 2023
//  Class: Web 210 - Portfolio Project
//  File Name: scripts.js

// Define Variables
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const hamIcon = document.querySelector(".menuIcon");

// Toggle Function for Hamburger Menu to display links and correct icon
function toggleHamIcon() {
    if (menu.classList.contains("showlinks")) {
        menu.classList.remove("showlinks");
        closeIcon.style.display = "none";
        hamIcon.style.display = "block";
    } 
    else {
        menu.classList.add("showlinks");
        closeIcon.style.display = "block";
        hamIcon.style.display = "none";
    }
}

//Calls Toggle Function when Hamburger Menu is clicked
hamburger.addEventListener("click", toggleHamIcon);

menuItems.forEach(  
    function (menuItem) {
        menuItem.addEventListener("click", toggleHamIcon);
    }
)