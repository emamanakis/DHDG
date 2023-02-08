window.onscroll = function() {scrollFunction()};
const links = document.querySelectorAll('.nav-link');

function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("res-menu").checked = false;
    }
}

document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});