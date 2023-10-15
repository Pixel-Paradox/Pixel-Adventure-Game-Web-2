/*if (window.location.protocol != "https:") {
    window.location.protocol="https:";
}*/

/*if (window.matchMedia("(max-width: 425px)").matches) {
    window.location.href = "https://github.com/Pixel-Paradox/Pixel-Adventure-Game-Web";
}*/

const popupDebut = document.querySelector(".popupDebut");

if (localStorage.getItem('popupClosed') === 'true') {
    popupDebut.style.display = 'none';
}