// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const shuffleBtn = document.querySelector(".shuffle");
const bioArea = document.querySelector(".about-info");

// Set Initial State of Menu
let showMenu = false;
let shuffled = false;

menuBtn.addEventListener("click", toggleMenu);
shuffleBtn.addEventListener("click", shuffle);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        //Set Menu State
        showMenu = false;
    }
}

function shuffle() {
    if (!shuffled) {
        bioArea.classList.add("shuffled");
        shuffled = true;
    } else {
        bioArea.classList.remove("shuffled");
        shuffled = false;
    }
}
