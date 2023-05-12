const modalTittle = document.getElementById('portfolio-view-modal-tittle');
const modalP = document.getElementById('portfolio-view-modal-p');
let modalImg = document.getElementById('portfolio-view-modal-img');
let modalLink = document.getElementById('portfolio-view-modal-link');
const modalBtn= document.getElementById('project-details-button');
let url;

const p1 = document.getElementById('p1');
p1.addEventListener('click', ()=>{
    modal.style.display = "block";
    modalTittle.innerHTML = "CC Templates tool";
    modalP.innerHTML = "CC Templates tool project";
    modalImg.src = "img/Portfolioimg/project1.png";
    url = "https://drewbydiego.github.io/TemplateTool/"
});

const p2 = document.getElementById('p2');
p2.addEventListener('click', ()=>{
    modal.style.display = "block";
    modalTittle.innerHTML = "Voice recognition";
    modalP.innerHTML = "Voice recognition project";
    modalImg.src = "img/Portfolioimg/project2.png";
    url = "https://drewbydiego.github.io/ReconocimientoDeVoz/"
});
const p3 = document.getElementById('p3');
p3.addEventListener('click', ()=>{
    modal.style.display = "block";
    modalTittle.innerHTML = "Contact list";
    modalP.innerHTML = "Contact list project";
    modalImg.src = "img/Portfolioimg/project3.png";
    url = "https://drewbydiego.github.io/AgendaContactos/"
});
const p4 = document.getElementById('p4');
p4.addEventListener('click', ()=>{
    modal.style.display = "block";
    modalTittle.innerHTML = "Simple Clock";
    modalP.innerHTML = "Simple Clock project";
    modalImg.src = "img/Portfolioimg/project4.png";
    url = "https://drewbydiego.github.io/RELOJ/"
});
const p5 = document.getElementById('p5');
p5.addEventListener('click', ()=>{
    modal.style.display = "block";
    modalTittle.innerHTML = "Lenguage Translator";
    modalP.innerHTML = "Lenguage Translator project";
    modalImg.src = "img/Portfolioimg/project5.png";
    url = "https://drewbydiego.github.io/TranslateAPI/"
});

modalLink.addEventListener('click', ()=>{
    event.preventDefault();
    window.open(url, "_blank");
});


// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("p1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// Close the modal when the user clicks on <span> (x)
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
