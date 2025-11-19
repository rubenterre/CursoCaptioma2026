/* Sintaxe JS */

//Variables

var variableVar = "valor"; // variable de ámbito global

let variableLet = "valor"; // variable de ámbito local o específico (Uso recomendado)

const constante = "constante"; // Non podemos modificar su valor posteriormente


// Tipos de datos en JavaScript

let numero = 1234; //Número

let string = "María"; // String

let booleanTrue = true;
let booleanFalse = false; //Booleanos

let array = [1, 2, 3, 4] //Array
let arrayString = ["María", "Juan", "Pepe"] // Array admite todo tipo de datos

let obxecto = {
    nome: "David",
    idade: 23,
    cidade: "Vilagarcía de Arousa"
} //Obxecto

let Null = null; //Nulo
let Indefinido = undefined; //Indefinido

let bigInt = 1234456789n //BigInt

let simbolo = Symbol("id") //Símbolo


//Operadores aritméticos

let suma = 4 + 3;

let resta = 4 - 3;

let multiplicacion = 4 * 3;

let division = 4 / 3;

let modulo = 12 % 2;



//Operadores de comparación

let x = 5;
let y = "5";
console.log(x == y); // Igual sen ter en conta o tipo de dato

let a = 5;
let b = "5";
console.log(a === b); // Igual estrito que ten en conta o tipo de dato

let c = 5;
let d = "5";
console.log(a != b); // Distinto sen ter en conta o tipo de dato

let e = 5;
let f = "5";
console.log(a !== b); // Distinto tendo en conta o tipo de dato

let g = 5;
let h = "5";
console.log(g > h); // Maior que
console.log(g < h); // Menor que
console.log(g >= h); // Maior ou igual que
console.log(g <= h); //Menor ou igual que






// Operadores lóxicos

//Operador AND (&&) devolve true se ambos operandos son true, do contrario devolve false

const idade = 20;
const tenLicencia = true;

if (idade >= 18 && tenLicencia) {
    console.log("Podes conducir."); // Execútase porque ámbalas dúas condicións son true.
} else {
    console.log("Non podes conducir.");
}

//Operador OR (||) devolve true se alomenos un dos operandos é true, do contrario devolve false

const tenTarxeta = false;
const tenPayPal = true;

if (tenTarxeta || tenPayPal) {
    console.log("Podes realizar o pago."); // Execútase porque unha das condicións é true.
} else {
    console.log("Non podes realizar o pago.");
}


//Operador NOT (!) invierte o valor de verdad do seu operando

const acceso = false;

if (!acceso) {
    console.log("Acceso denegado."); // Execútase porque !false é true.
} else {
    console.log("Benvido!");
}






//Comentarios en JavaScript

/* Este é un comentario 
en de varias liñas */

//Comentario dunha soa liña



//Estruturas de control

//Estruturas de control de fluxo

let condition = "";
let expresion = "";

//if
if (condition) {
    //Bloque de código se se cumple a condición
} else {
    //Bloque de código que se executa se non se cumple a condición
}

// else if

if (condition) {

    //Bloque de primeira condición a avaliar

} else if (condition) {

    //Bloque de segunda condición que se avalia se a primeira é verdadeira

} else {

    //Bloque de código alternativo que se executa se unha das condicións non é verdadeira
}


// switch

let value1 = "";
let value2 = "";

switch (expresion) {
    case value1:
        //Bloque de código que queremos executar se se cumple o caso
        break;
    case value2:
        //Bloque de código que queremos executar se se cumple o caso
        break;

    default:
        //Bloque de código alternativo se non se cumple ningún caso
        break;
}



//Estruturas de control de bucle


//for

for (let index = 0; index < array.length; index++) {
    //Bloque de código que queres que se execute no bucle
}

//while

while (condition) {
    //Bloque de código que se executa sempre que se cumpla a condición
}







//Funcións

function nomeFuncion(params) {
    //Bloque de código a executar cando a chamamos
}

nomeFuncion()





//Obxectos de JavaScript

let obxectos = {
    clave: "valor",
    clave2: "valor2"
}


let persoa = {
    nome: "Juan",
    idade: 30,
    cidade: "Santiago de Compostela",
    saudar: function () {
        console.log("Hola, son " + this.nome + " e teño " + this.idade + " anos")
    }
}

console.log(persoa.saudar())


// Array

let arrayVariosDatos = [1, "María", true, { nome: "Juan" }, [1, 2, 3]] //Array admite todo tipo de datos


//JSON

let json = {
    "nome": "Juan",
    "idade": 30
} //JSON admite todo tipo de datos




// Eventos

let boton = document.getElementById("meuBoton");

function cambiarColor() {
    document.querySelector("body").style.backgroundColor = "red";
    boton.style.color = "brown"
}

boton.addEventListener("click", cambiarColor)

// Aplicar tamaño máis grande
function cambiarTamano() {

    boton.style.width = "200px"

}

// Cambiar fondo cun click e logo volver a quitar o fondo con outro click

    document.getElementById("cambiarFondo").addEventListener("click", function () {
     
        if(document.body.classList.contains("azul")){
            document.body.classList.remove("azul") //borramos clase
        }else{
            document.body.classList.add("azul") //ponemos clase
        }
        /* document.body.classList.toggle("azul"); */   
    });