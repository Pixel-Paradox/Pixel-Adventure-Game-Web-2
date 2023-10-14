if (window.location.protocol != "https:") {
    window.location.protocol="https:";
}  

const popup = document.querySelector(".popup");
const player = document.querySelector(".player");
const audio = document.querySelector(".audio");
const menu = document.querySelector(".menu");
const reprendre = document.querySelector(".reprendre");
const ecran = document.querySelector(".ecran");
const musique = document.querySelector(".musique");
const body = document.body;

let posX = 0;
let posY = 0;

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    const step = 18;

    if (popup.style.display !== 'none') {
        popup.style.display = 'none';
        localStorage.setItem('popupClosed', 'true');
    } else {
        if (event.key === 'w') {
            if (player.offsetTop > 0) {
                posY -= step;
                player.style.top = posY + 'px';
                player.style.backgroundImage = "url('player3.png')";
            }
        } else if (event.key === 's') {
            if (player.offsetTop + player.offsetHeight < body.offsetHeight) {
                posY += step;
                player.style.top = posY + 'px';
                player.style.backgroundImage = "url('player.png')";
            }
        } else if (event.key === 'd') {
            if (player.offsetLeft + player.offsetWidth < body.offsetWidth) {
                posX += step;
                player.style.left = posX + 'px';
                player.style.backgroundImage = "url('player2.png')";
            }
        } else if (event.key === 'a') {
            if (player.offsetLeft > 0) {
                posX -= step;
                player.style.left = posX + 'px';
                player.style.backgroundImage = "url('player4.png')";
            }
        }

        const centerX = window.innerWidth / 2 - player.offsetWidth / 2;
        const centerY = window.innerHeight / 2 - player.offsetHeight / 2;

        const diffX = player.offsetLeft - centerX;
        const diffY = player.offsetTop - centerY;

        window.scrollTo(diffX, diffY);
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        menu.classList.toggle("active");
        body.classList.toggle("active");
    }
});

reprendre.onclick = function() {
    menu.classList.remove("active");
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

if (localStorage.getItem('popupClosed') === 'true') {
    popup.style.display = 'none';
}