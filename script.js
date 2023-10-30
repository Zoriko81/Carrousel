// Selecteur + variables
const barreDroite = document.querySelector(".droite");
const barreGauche = document.querySelector(".gauche");
const image = document.querySelector(".image");
const nombre = document.querySelector(".position");
const maxPosition = 7;
let position = 1;

// La fonction pour changer d'image
function update(position, image, nombre, maxPosition) {
    image.classList.remove("carrouselAnim");
    void image.offsetWidth; 
    image.classList.add("carrouselAnim");
    image.src = `img/${position}.jpg`;
    nombre.innerHTML = `Image : ${position} / ${maxPosition}`;
}

// Les changement aves les boutons*/
barreDroite.addEventListener("click", () => { 
    if (position < maxPosition) {
        position++;
        update(position, image, nombre, maxPosition);
    }
    else {
        position = 1;
        update(position, image, nombre, maxPosition);
    }
});

barreGauche.addEventListener("click", () => { 
    if (position == 1) {
        position = maxPosition
        update(position, image, nombre, maxPosition);
    }
    else if (position > 1) {
        position--
        update(position, image, nombre, maxPosition);
        }
});


// Les changement avec les flèches du clavier
document.onkeydown = function(event) {
    switch (event.key) {
        case "ArrowRight":
        if (position < maxPosition) {
            position++
            update(position, image, nombre, maxPosition);
        }
        else {
            position = 1
            update(position, image, nombre, maxPosition);
            }
        break;
        case "ArrowLeft":
            if (position == 1) {
                position = maxPosition
                update(position, image, nombre, maxPosition);
            }
            else if (position > 1) {
                position--
                update(position, image, nombre, maxPosition);
                }
        break;
    }
};

