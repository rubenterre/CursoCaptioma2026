// Exercicio 53 - 1

/*
Notas:

Sobresaínte: 9
Notable: 7
Aprobado: 5
Insuficiente: 0 

*/


function mostrarResultado() {
  const name = document.getElementById("nome").value.trim();
  const note = document.getElementById("note").value;
  let resultados = document.getElementById("resultados");


  // Validar rango de notas (opcional)
  if (note < 0 || note > 10) {
    resultados.textContent = "A nota debe estar entre 0 e 10";
    resultados.style.color = "red";
    return;
  }

  // Determinar calificación

    if (note === 10) {
        resultados.textContent = `${name} é sobresaínte`;
    } else if( note >= 9){
       resultados.textContent = `${name} é sobresaínte`;
    } else if( note >= 7){
       resultados.textContent = `${name} é notable`;
    } else if( note >= 5){
       resultados.textContent = `${name} é aprobado`;
    } else if( note < 5){
       resultados.textContent = `${name} é insuficiente`;
    }

}