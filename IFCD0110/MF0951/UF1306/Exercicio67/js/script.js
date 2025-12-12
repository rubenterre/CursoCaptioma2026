var rellax = new Rellax('.rellax');


/* Menu mobile */

const menuButton = document.getElementById("menuButton");
const headerNav = document.getElementById("headerNav");

function abrirMenu() {
    
    headerNav.classList.toggle("show")
    
}

menuButton.addEventListener("click", abrirMenu)