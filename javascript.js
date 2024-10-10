document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        if (navLinks[index]) {
            navLinks[index].classList.add("active");
        }
    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
});
function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
}
