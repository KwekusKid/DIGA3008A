document.addEventListener("DOMContentLoaded", function () {

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.style.display = "none";
const images = document.getElementsByClassName('accordion-content')
images.forEach(image => {
image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    lightbox.appendChild(img)
})
})

})
