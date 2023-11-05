const audio = document.querySelector(".audio");
const menu = document.querySelector(".menu");
const reprendre = document.querySelector(".reprendre");
const ecran = document.querySelector(".ecran");
const musique = document.querySelector(".musique");
const recommencer = document.querySelector(".recommencer");

document.addEventListener("keydown", function(event) {
    if (event.key === "q") {
        menu.classList.toggle("active");
        body.classList.toggle("active");
    }
});

reprendre.onclick = function() {
    menu.classList.remove("active");
    body.classList.remove("active");
};

let pleinEcranActif = false;

ecran.onclick = function() {
    if (!pleinEcranActif) {
        enterFullscreen();
        pleinEcranActif = true;
        ecran.textContent = "Enlever le pleine écran";
    } else {
        exitFullscreen();
        pleinEcranActif = false;
        ecran.textContent = "Mettre en pleine écran";
    }
};

function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

musique.onclick = function() {
    if (audio.paused) {
        audio.play();
        musique.textContent = "Enlever la musique";
    } else {
        audio.pause();
        musique.textContent = "Mettre la musique";
    }
};

recommencer.onclick = function() {
    location.reload()
    localStorage.clear();
}