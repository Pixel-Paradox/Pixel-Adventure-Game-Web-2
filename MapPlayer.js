const coffreA = document.querySelector(".coffre.a");
const coffreB = document.querySelector(".coffre.b");
const player = document.querySelector(".player");
const body = document.body;

let posX = 0;
let posY = 0;

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

let step = 18;

document.addEventListener('keydown', function (event) {

    if (popupDebut.style.display !== 'none') {
        popupDebut.style.display = 'none';
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

        const distanceCoffreA = calculateDistance(player, coffreA);
        const distanceCoffreB = calculateDistance(player, coffreB);

        if (event.key === 'e' && distanceCoffreA < 60 && playerIsInFrontOfChest(player, coffreA)) {
            coffreA.style.backgroundImage = "url('coffreActive.png')";
            step = 100;
            player.style.width = 700 + "px";
            player.style.height = 700 + "px";
        }
        
        if (event.key === 'e' && distanceCoffreB < 60 && playerIsInFrontOfChest(player, coffreB)) {
            coffreB.style.backgroundImage = "url('coffreActive.png')";
            step = 10;
            player.style.width = 50 + "px";
            player.style.height = 50 + "px";
        }

        collision(player.getBoundingClientRect(), coffreA.getBoundingClientRect());
        collision(player.getBoundingClientRect(), coffreB.getBoundingClientRect());
    }
});

function calculateDistance(elem1, elem2) {
    const a = elem1.offsetLeft - elem2.offsetLeft;
    const b = elem1.offsetTop - elem2.offsetTop;
    return Math.sqrt(a * a + b * b);
}

function playerIsInFrontOfChest(player, chest) {
    const playerRect = player.getBoundingClientRect();
    const chestRect = chest.getBoundingClientRect();
    const playerCenterX = playerRect.x + playerRect.width / 2;
    const chestCenterX = chestRect.x + chestRect.width / 2;
    const playerBottom = playerRect.y + playerRect.height;
    const chestTop = chestRect.y;

    return Math.abs(playerCenterX - chestCenterX) < chestRect.width / 2 && playerBottom >= chestTop;
}