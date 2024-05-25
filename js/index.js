// Get all variables 
const lightContanier = document.querySelector('.lightContanier');
const images = Array.from(document.querySelectorAll('.item img'));
const lightBox = document.querySelector('.lightBox');
const closeItem = document.getElementById('close');
const prevItem = document.getElementById('prev');
const nextItem = document.getElementById('next');

// const outLetContanier=lightContanier.innerWidth-lightBox.innerWidth;
// console.log(outLetContanier.innerWidth);
let currentIndex = 0;


//for loop at node list to make it as array 
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (e) {
        // other solve using This Keyword

        let CurrentSrc = this.getAttribute('src');
        lightBox.style.backgroundImage = `url(${CurrentSrc})`

        // this is another way to get the current source 

        // / let currentSrc=e.target.getAttribute('src');
        // / lightBox.style.backgroundImage=`url(${currentSrc})`;

        currentIndex = images.indexOf(e.target);

        lightContanier.classList.remove('d-none') // show the light container
    })

}

// use icon to close the light Box Container

closeItem.addEventListener('click', closeSlide);

nextItem.addEventListener('click', nextSlide);

prevItem.addEventListener('click', prevSlide);

function closeSlide() {
    lightContanier.classList.add('d-none'); // rmove the light Container
}

function nextSlide() {
    currentIndex++;

    if (currentIndex >= images.length)
        currentIndex = 0;
    let currentSrc = images[currentIndex].getAttribute('src');
    lightBox.style.backgroundImage = `url(${currentSrc})`
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0)
        currentIndex = images.length - 1;
    let currentSrc = images[currentIndex].getAttribute('src');
    lightBox.style.backgroundImage = `url(${currentSrc})`
}
// lightContanier.addEventListener('click',closeSlide);
// console.log(lightBox.outWidth);

document.addEventListener('keydown', function (e) {

    if (e.key == 'ArrowRight')
        nextSlide();

    if (e.key == 'ArrowLeft')
        prevSlide();

    if (e.key == 'Escape')
        closeSlide();
})

lightContanier.addEventListener('click', (e) => {
    if (e.target!=lightBox&&e.target!=nextItem&&e.target!=prevItem)
        closeSlide();
})