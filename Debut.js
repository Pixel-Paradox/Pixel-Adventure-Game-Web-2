if (window.location.protocol != "https:") {
    window.location.protocol="https:";
}

const popupDebut = document.querySelector(".popupDebut");

if (localStorage.getItem('popupClosed') === 'true') {
    popupDebut.style.display = 'none';
}