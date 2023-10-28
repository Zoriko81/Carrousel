const barreDroite = document.querySelector(".droite");
const barreGauche = document.querySelector(".gauche");
const image = document.querySelector(".image");
const nombre = document.querySelector(".position");
let position = 1;

// function update(position, image, nombre) {
//     image.src = `img/${position}.jpg`
//     nombre.innerHTML = `Image : ${position} / 7`
// }

// barreDroite.addEventListener("click", () => { 
//     if (position < 7) {
//         position++;
//         update(position, image, nombre);
//     }
//     else {
//         position = 1;
//         update(position, image, nombre);
// });

document.onkeydown = function(event) {
    switch (event.key) {
        case "ArrowRight":
        if (position < 7) {
            image.classList.remove("carrouselAnim");
            void image.offsetWidth; 
            image.classList.add("carrouselAnim");
            position++
            image.src = `img/${position}.jpg`
            nombre.innerHTML = `Image : ${position} / 7`
        }
        else {
            image.classList.remove("carrouselAnim");
            void image.offsetWidth; 
            image.classList.add("carrouselAnim");
            position = 1
            image.src = `img/${position}.jpg`
            nombre.innerHTML = `Image : ${position} / 7`
            }
        break;
        case "ArrowLeft":
            if (position == 1) {
                image.classList.remove("carrouselAnim");
                void image.offsetWidth; 
                image.classList.add("carrouselAnim");
                position = 7
                image.src = `img/${position}.jpg`
                nombre.innerHTML = `Image : ${position} / 7`
            }
            else if (position > 1) {
                image.classList.remove("carrouselAnim");
                void image.offsetWidth; 
                image.classList.add("carrouselAnim");
                position--
                image.src = `img/${position}.jpg`
                nombre.innerHTML = `Image : ${position} / 7`
                }
        break;
    }
};

// document.addEventListener("keydown", function(event) {
//     if (event.key == "ArrowRight"){
//         if (position < 7) {
//             position++
//             image.src = `img/${position}.jpg`
//             nombre.innerHTML = `Image : ${position} / 7`
//         }
//         else {
//             position = 1
//             image.src = `img/${position}.jpg`
//             nombre.innerHTML = `Image : ${position} / 7`
//             }
//     }
//     });

//     document.addEventListener("keydown", function(event) {
//         if (event.key == "ArrowLeft"){
//             if (position == 1) {
//                 position = 7
//                 image.src = `img/${position}.jpg`
//                 nombre.innerHTML = `Image : ${position} / 7`
//             }
//             else if (position > 1) {
//                 position--
//                 image.src = `img/${position}.jpg`
//                 nombre.innerHTML = `Image : ${position} / 7`
//                 }
//         }
//         });


barreDroite.addEventListener("click", () => { 
    if (position < 7) {
        image.classList.remove("carrouselAnim");
        void image.offsetWidth; 
        image.classList.add("carrouselAnim");
        position++
        image.src = `img/${position}.jpg`
        nombre.innerHTML = `Image : ${position} / 7`
    }
    else {
        image.classList.remove("carrouselAnim");
        void image.offsetWidth; 
        image.classList.add("carrouselAnim");
        position = 1
        image.src = `img/${position}.jpg`
        nombre.innerHTML = `Image : ${position} / 7`
        }
});


barreGauche.addEventListener("click", () => { 
    if (position == 1) {
        image.classList.remove("carrouselAnim");
        void image.offsetWidth; 
        image.classList.add("carrouselAnim");
        position = 7
        image.src = `img/${position}.jpg`
        nombre.innerHTML = `Image : ${position} / 7`
    }
    else if (position > 1) {
        image.classList.remove("carrouselAnim");
        void image.offsetWidth; 
        image.classList.add("carrouselAnim");
        position--
        image.src = `img/${position}.jpg`
        nombre.innerHTML = `Image : ${position} / 7`
        }
});

