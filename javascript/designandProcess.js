document.addEventListener("DOMContentLoaded", function () {

const lightbox = document.createElement('section');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);




lightbox.style.display = "none";
const container = document.querySelectorAll('.MainContainer')
const cards = document.querySelectorAll('.category') 
container.forEach((cards) => {
    cards.addEventListener('click', e => {
        
  const newBox = document.createElement('section')
  const image = document.createElement('img')
 
  
  newBox.class = "newBox";
   newBox.src =  newBox.src;
     
    while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild)
    }

    lightbox.appendChild(newBox)
            console.log("clicked");
        lightbox.classList.add('active')
        lightbox.style.display = "block";
        


    });
});

lightbox.addEventListener('click', e => {
        if(e.target !== e.currentTarget) return;
        
            console.log("clicked");
       lightbox.style.display = "none";
       lightbox.classList.remove('active');
        


    });


});