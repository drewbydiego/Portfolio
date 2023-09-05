const modalTittle = document.getElementById("portfolio-view-modal-tittle");
const modalP = document.getElementById("portfolio-view-modal-p");
let modalImg = document.getElementById("portfolio-view-modal-img");
let modalLink = document.getElementById("portfolio-view-modal-link");
const modalBtn = document.getElementById("project-details-button");
let url;

const p1 = document.getElementById("p1");
p1.addEventListener("click", () => {
  modal.style.display = "block";
  modalTittle.innerHTML = "CC Templates tool";
  modalP.innerHTML =
    "The CC Templates Tool is a project developed using HTML, CSS, and JavaScript. It serves as a valuable tool for call center agents, providing them with a user-friendly interface to enhance their efficiency and productivity.";
  modalImg.src = "img/Portfolioimg/project1.png";
  url = "https://drewbydiego.github.io/TemplateTool/";
});

const p2 = document.getElementById("p2");
p2.addEventListener("click", () => {
  modal.style.display = "block";
  modalTittle.innerHTML = "Voice recognition";
  modalP.innerHTML =
    "'Voice Recognition' is a dynamic project that leverages HTML, CSS, and JavaScript to create a captivating voice-controlled experience. With just a few clicks, users can effortlessly listen and repeat phrases, as well as have text from a textbox accurately read aloud.";
  modalImg.src = "img/Portfolioimg/project2.png";
  url = "https://drewbydiego.github.io/ReconocimientoDeVoz/";
});
const p3 = document.getElementById("p3");
p3.addEventListener("click", () => {
  modal.style.display = "block";
  modalTittle.innerHTML = "Contact list";
  modalP.innerHTML =
    "The 'Contact List' project is a web application built using HTML, CSS, and vanilla JavaScript. It offers a convenient and intuitive interface for managing and organizing contact information. With the ability to add and store contact details in your browser's local storage, it provides a seamless and hassle-free experience for keeping track of important contacts. ";
  modalImg.src = "img/Portfolioimg/project3.png";
  url = "https://drewbydiego.github.io/AgendaContactos/";
});
const p4 = document.getElementById("p4");
p4.addEventListener("click", () => {
  modal.style.display = "block";
  modalTittle.innerHTML = "Pokedex";
  modalP.innerHTML =
    "This project uses the Poke-api, it displays 6 different pokemon randomly every time You refresh the website using Javascript vanilla.";
  modalImg.src = "img/Portfolioimg/project4.png";
  url = "https://drewbydiego.github.io/Proyecto-4-Pokedex/";
});
const p5 = document.getElementById("p5");
p5.addEventListener("click", () => {
  modal.style.display = "block";
  modalTittle.innerHTML = "Lenguage Translator";
  modalP.innerHTML =
    "The 'Language Translator' project is a web application built with HTML, CSS, and vanilla JavaScript. It leverages an API to enable prompt translation from one language to another. With a user-friendly interface, this project serves as a valuable tool for efficient and productive language translation. Expand your global reach and overcome language barriers with the 'Language Translator' application.";
  modalImg.src = "img/Portfolioimg/project5.png";
  url = "https://drewbydiego.github.io/TranslateAPI/";
});

modalLink.addEventListener("click", () => {
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
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when the user clicks anywhere outside the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
