// Get the image element
const image = document.getElementById('rotate-image');

// Set the initial rotation angle to 0 degrees
let rotationAngle = 0;

// Define a function to rotate the image
function rotateImage() {
    

    if (window.innerWidth<=820) {
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

