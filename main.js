const burger = document.getElementById("burger");
const navbarLinks = document.querySelector(".navbar-links");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    nav.classList.toggle("active");
});
