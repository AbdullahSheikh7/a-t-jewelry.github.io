let topNav = document.getElementById("top-nav");
let toggleNav = document.getElementById("nav-toggle-svg");

toggleNav.addEventListener("click", (e) => {
    topNav.classList.toggle("top-0");
});