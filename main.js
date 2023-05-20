// Get the image element
const image = document.getElementById('rotate-image');

// Set the initial rotation angle to 0 degrees
let rotationAngle = 0;

// Define a function to rotate the image
function rotateImage() {


    if (window.innerWidth<=800) {
      rotationAngle += 0.20;
    }else{
      rotationAngle += 0.050;
    }
  // Apply the rotation transformation to the image using the CSS transform property
    image.style.transform = `rotate(${rotationAngle}deg)`;

  // Schedule the next rotation frame using requestAnimationFrame
    window.requestAnimationFrame(rotateImage);
}

// Call the rotateImage function to start the rotation animation when the page loads
window.addEventListener('load', ()=>{
  rotateImage()
});


let menu = document.getElementById('menu');
let toggleOpen = document.getElementById("toggle-open");
let toggleClose = document.getElementById("toggle-close");

toggleOpen.addEventListener('click', ()=>{
  toggleMenu();
});
toggleClose.addEventListener('click', ()=>{
  toggleMenu();
});

function toggleMenu(){
  menu.classList.toggle('show-menu');
  if (menu.classList.contains('show-menu')) {
    toggleOpen.style.display = 'none'
    toggleClose.style.display = 'block'
  }else{
    toggleOpen.style.display = 'block'
    toggleClose.style.display = 'none'
  }
}



let home = document.getElementById('home-li');
home.addEventListener('click', ()=>{
  home.classList.add('active');
  about.classList.remove('active');
  Portfolio.classList.remove('active');
  Contact.classList.remove('active');
  toggleMenu();
});

let about = document.getElementById('about-li');
about.addEventListener('click', ()=>{
  home.classList.remove('active');
  about.classList.add('active');
  Portfolio.classList.remove('active');
  Contact.classList.remove('active');
  toggleMenu();

});
let Portfolio = document.getElementById('Portfolio-li');
Portfolio.addEventListener('click', ()=>{
  Portfolio.classList.add('active');
  home.classList.remove('active');
  about.classList.remove('active');
  Contact.classList.remove('active');
  toggleMenu();
});
let Contact = document.getElementById('Contact-li');
Contact.addEventListener('click', ()=>{
  home.classList.remove('active');
  about.classList.remove('active');
  Contact.classList.add('active');
  Portfolio.classList.remove('active');
  toggleMenu();
});


window.addEventListener("scroll", function() {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;


  if(scrollY >512){
    home.classList.remove('active');
    about.classList.add('active');
    Portfolio.classList.remove('active');
    Contact.classList.remove('active');

  }
  if(scrollY >512){
    var iconsContainer = document.querySelector('.icons-container');
    iconsContainer.style.top = '0'; // Establecer la posición final para que los iconos estén visibles antes de la animación
    iconsContainer.classList.add('animate-gravity');
  }

  if(scrollY == 0 && scrollY<512){
    home.classList.add('active');
    about.classList.remove('active');
    Portfolio.classList.remove('active');
    Contact.classList.remove('active');
  }

  if(scrollY >=1141){
    home.classList.remove('active');
    about.classList.remove('active');
    Portfolio.classList.add('active');
    Contact.classList.remove('active');
  }
  if(scrollY >2400){
    home.classList.remove('active');
    about.classList.remove('active');
    Portfolio.classList.remove('active');
    Contact.classList.add('active');
  }


});


window.addEventListener('load', function() {

});

