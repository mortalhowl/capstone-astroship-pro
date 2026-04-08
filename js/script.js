
const btnDropdown = document.getElementById("dropdown");
const down = document.getElementById("chevronDown");
const up = document.getElementById("chevronUp");
const dropMenu = document.getElementById("dropMenu");
const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav");
const xmark = document.getElementById("xmark");
const bars = document.getElementById("bars");

// header
btnDropdown.addEventListener("click", () => {
    const isHidden = dropMenu.classList.toggle("hidden");
    down.style.display = isHidden ? "inline" : "none";
    up.style.display = isHidden ? "none" : "inline";
})

hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("hidden");
    bars.style.display = isOpen ? "inline" : "none";
    xmark.style.display = isOpen ? "none" : "inline";
})

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        document.getElementById("isBlur").classList.add("active");
    } else {
        document.getElementById("isBlur").classList.remove("active");
    }
})