let topNav = document.getElementById("top-nav");
let topNavUl = document.getElementById("top-nav").firstElementChild;
let toggleNav = document.getElementById("nav-toggle-svg");

toggleNav.addEventListener("click", (e) => {
    topNavUl.classList.toggle("flex");
    if (topNav.style.width == "100%") {
        topNav.style.animation = "width-reverse 100ms linear";
        topNav.style.width = 0;
    }
    else {
        topNav.style.animation = "width 100ms linear";
        topNav.style.width = "100%";
    }
});