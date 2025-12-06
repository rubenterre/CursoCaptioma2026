/* Problema 1 */

const ferrari = {
    "Ferrari 296 GTB":{
        "imaxe": "./assets/img/296GTB.avif",
        "logo": "./assets/img/Logo_296GTB.avif",
        "motor": "V6 Biturbo + MGUK(eléctrico)",
        "potencia": "830CV (610CV + 220CV)",
        "aceleración": "0 a 100km/h en 2,9s"
    },
    "Ferrari 812 GTS":{
        "imaxe": "./assets/img/812GTS.avif",
        "logo": "./assets/img/Logo_812GTS.avif",
        "motor": "V12 Biturbo",
        "potencia": "730CV",
        "aceleración": "0 a 100km/h en 2,9s"
    },
    "Ferrari SF90 Spider":{
        "imaxe": "./assets/img/SF90_Spider.avif",
        "logo": "./assets/img/Logo_SF90_Spider.avif",
        "motor": "V8 Biturbo + 3 motores MGU-K(eléctrico)",
        "potencia": "1000CV (780CV + 220CV*3)",
        "aceleración": "0 a 100km/h en 2,5s"
    },
    "Ferrari Purosangue":{
        "imaxe": "./assets/img/Purosangue.avif",
        "logo": "./assets/img/Logo_Purosangue.avif",
        "motor": "V12 + MGUK(eléctrico)",
        "potencia": "725CV",
        "aceleración": "0 a 100km/h en 3,5s"
    }
}

let logoCoche = document.getElementById("logoCoche");
let modelo = document.getElementById("modelo");
let motor = document.getElementById("motor");
let potencia = document.getElementById("potencia");
let aceleracion = document.getElementById("aceleracion");


function cambiarCoche(coche) {

    switch (coche) {
        case "Ferrari 296 GTB":
            logoCoche.src = ferrari["Ferrari 296 GTB"].logo;
            logoCoche.alt = ferrari["Ferrari 296 GTB"];
            modelo.src = ferrari["Ferrari 296 GTB"].imaxe;
            motor.textContent = ferrari["Ferrari 296 GTB"].motor;
            potencia.textContent = ferrari["Ferrari 296 GTB"].potencia;
            aceleracion.textContent = ferrari["Ferrari 296 GTB"].aceleración;
            document.getElementById("boton1").classList.add("active");
            document.getElementById("boton2").classList.remove("active");
            document.getElementById("boton3").classList.remove("active");
            document.getElementById("boton4").classList.remove("active");
            break;
        case "Ferrari 812 GTS":
            logoCoche.src = ferrari["Ferrari 812 GTS"].logo;
            logoCoche.alt = ferrari["Ferrari 812 GTS"];
            modelo.src = ferrari["Ferrari 812 GTS"].imaxe;
            motor.textContent = ferrari["Ferrari 812 GTS"].motor;
            potencia.textContent = ferrari["Ferrari 812 GTS"].potencia;
            aceleracion.textContent = ferrari["Ferrari 812 GTS"].aceleración;
            document.getElementById("boton1").classList.remove("active");
            document.getElementById("boton2").classList.add("active");
            document.getElementById("boton3").classList.remove("active");
            document.getElementById("boton4").classList.remove("active");
            break;
    
        case "Ferrari SF90 Spider":
            logoCoche.src = ferrari["Ferrari SF90 Spider"].logo;
            logoCoche.alt = ferrari["Ferrari SF90 Spider"];
            modelo.src = ferrari["Ferrari SF90 Spider"].imaxe;
            motor.textContent = ferrari["Ferrari SF90 Spider"].motor;
            potencia.textContent = ferrari["Ferrari SF90 Spider"].potencia;
            aceleracion.textContent = ferrari["Ferrari SF90 Spider"].aceleración;
            document.getElementById("boton1").classList.remove("active");
            document.getElementById("boton2").classList.remove("active");
            document.getElementById("boton3").classList.add("active");
            document.getElementById("boton4").classList.remove("active");
            break;
        case "Ferrari Purosangue":
            logoCoche.src = ferrari["Ferrari Purosangue"].logo;
            logoCoche.alt = ferrari["Ferrari Purosangue"];
            modelo.src = ferrari["Ferrari Purosangue"].imaxe;
            motor.textContent = ferrari["Ferrari Purosangue"].motor;
            potencia.textContent = ferrari["Ferrari Purosangue"].potencia;
            aceleracion.textContent = ferrari["Ferrari Purosangue"].aceleración;
            document.getElementById("boton1").classList.remove("active");
            document.getElementById("boton2").classList.remove("active");
            document.getElementById("boton3").classList.remove("active");
            document.getElementById("boton4").classList.add("active");
            break;
        default:
            break;
    }
    
}


document.getElementById("boton1").addEventListener("click", function(){
    let modeloCoche = document.getElementById("boton1").getAttribute("data-coche");
    console.log(modeloCoche);
    cambiarCoche(modeloCoche)
});

document.getElementById("boton2").addEventListener("click", function(){
    let modeloCoche = document.getElementById("boton2").getAttribute("data-coche");
    console.log(modeloCoche);
    cambiarCoche(modeloCoche)
});

document.getElementById("boton3").addEventListener("click", function(){
    let modeloCoche = document.getElementById("boton3").getAttribute("data-coche");
    console.log(modeloCoche);
    cambiarCoche(modeloCoche)
});

document.getElementById("boton4").addEventListener("click", function(){
    let modeloCoche = document.getElementById("boton4").getAttribute("data-coche");
    console.log(modeloCoche);
    cambiarCoche(modeloCoche)
});
