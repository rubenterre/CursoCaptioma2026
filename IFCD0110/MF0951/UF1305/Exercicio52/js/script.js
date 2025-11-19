document.addEventListener('DOMContentLoaded', function () {

let tarxeta1 = document.getElementById("tarxeta1");
let tarxeta2 = document.getElementById("tarxeta2");
let tarxeta3 = document.getElementById("tarxeta3");

let botonTarxeta1 = document.getElementById("botonTarxeta1");
let botonTarxeta2 = document.getElementById("botonTarxeta2");
let botonTarxeta3 = document.getElementById("botonTarxeta3");

botonTarxeta1.addEventListener("click", function(){
      tarxeta1.style.display = 'block';
      tarxeta2.style.display = 'none';
      tarxeta3.style.display = 'none';
    })

botonTarxeta2.addEventListener("click", function(){
      tarxeta1.style.display = 'none';
      tarxeta2.style.display = 'block';
      tarxeta3.style.display = 'none';
})

botonTarxeta3.addEventListener("click", function(){
      tarxeta1.style.display = 'none';
      tarxeta2.style.display = 'none';
      tarxeta3.style.display = 'block';
})
});
  
  if(display = 'none'){
    tarxeta1.style.display = 'block';
  }