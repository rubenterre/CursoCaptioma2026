const estudantes = ["Juan", "María", "Pedro", "Ana","Luís", "Elena", "Carlos", "Laura"];

document.getElementById("lista").innerHTML = `<strong>Lista orixinal:</strong> ${estudantes.join(", ")}`;


/* Actividade 1 */

const estudantesLonxitude = estudantes.filter( estudante => estudante.length >= 4 );
document.getElementById("exercicio1").innerHTML = `<strong>Lista de estudantes de máis de 4 letras:</strong> ${estudantesLonxitude.join(", ")}`;

/* Actividade 2 */

const estudantesMaiusculas = estudantes.map( estudante => estudante.toUpperCase());
document.getElementById("exercicio2").innerHTML = `<strong>Lista de estudantes en maiúsculas:</strong> ${estudantesMaiusculas.join(", ")}`;

/* Actividade 3 */
const estudanteEliminado = estudantes.pop(estudantes);
document.getElementById("exercicio3").innerHTML = `<strong>Lista de estudante eliminado:</strong> ${estudantes.join(", ")}`;

/* Actividade 4 */
const estudanteNovo = "Francisco";
const listaEstudantes = estudantes.push(estudanteNovo);
document.getElementById("exercicio4").innerHTML = `<strong>Lista de estudantes novo alumno:</strong> ${estudantes.join(", ")}`;

/* Actividade 5 */
const porcionEstudantes = estudantes.slice(2,5);
document.getElementById("exercicio5").innerHTML = `<strong>Lista de porción de estudantes:</strong> ${porcionEstudantes.join(", ")}`;

/* Actividade 6 */

const novaEstudante = "Irene";
const estudantePrincipio = estudantes.unshift(novaEstudante);
document.getElementById("exercicio6").innerHTML = `<strong>Lista estudantes nova principio:</strong> ${estudantes.join(", ")}`;

/* Actividade 7 */

const estudantesNovos = ["Paula", "Raul"];
const estudantesEngadidos = estudantes.concat(estudantesNovos);
document.getElementById("exercicio7").innerHTML = `<strong>Lista estudantes novos:</strong> ${estudantesEngadidos.join(", ")}`