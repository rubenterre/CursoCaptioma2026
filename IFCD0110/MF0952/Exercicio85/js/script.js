/* Menu hover active desktop */

const links = document.querySelectorAll(".header__a");

links.forEach(enlace => {
  enlace.addEventListener("click", function () {
    links.forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});

/* Menu mobile */

const menu = document.getElementById("menu");
const desplegable = document.getElementById("desplegable");

function abrirMenu() {

  desplegable.classList.toggle("show")

}

menu.addEventListener("click", abrirMenu)