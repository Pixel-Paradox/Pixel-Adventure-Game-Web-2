const player = document.querySelector(".player");
const bigmap = document.querySelector(".bigmap");
const sections = document.querySelectorAll(".map");
let posX = 0;
let posY = 0;

document.addEventListener('keydown', function(event) {
    const step = 20;

    if (event.key === 'w') {
        if (player.offsetTop > 0) {
            posY -= step;
            player.style.top = posY + 'px';
        }
    } else if (event.key === 's') {
        let totalSectionsHeight = 0;
        sections.forEach(section => totalSectionsHeight += section.offsetHeight);
        if (player.offsetTop + player.offsetHeight < totalSectionsHeight) {
            posY += step;
            player.style.top = posY + 'px';
        }
    } else if (event.key === 'd') {
        let totalSectionsWidth = 0;
        sections.forEach(section => totalSectionsWidth += section.offsetWidth);
        if (player.offsetLeft + player.offsetWidth < totalSectionsWidth) {
            posX += step;
            player.style.left = posX + 'px';
        }
    } else if (event.key === 'a') {
        if (player.offsetLeft > 0) {
            posX -= step;
            player.style.left = posX + 'px';
        }
    }

    const centerX = window.innerWidth / 2 - player.offsetWidth / 2;
    const centerY = window.innerHeight / 2 - player.offsetHeight / 2;

    const diffX = player.offsetLeft - centerX;
    const diffY = player.offsetTop - centerY;

    window.scrollTo(diffX, diffY);
});