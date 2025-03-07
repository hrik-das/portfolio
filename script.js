const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const headerMenu = document.querySelector("header ul");
const menuButton = document.querySelector(".menu-btn");
const headerMenuItems = document.querySelectorAll("li a");

menuButton.addEventListener("click", function() {
    headerMenu.classList.toggle("show");
});

headerMenuItems.forEach(function(item) {
    item.addEventListener("click", function() {
        headerMenu.classList.remove("show");
    });
});