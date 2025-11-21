let audioActual = null;

// Función para reproducir o son e que se pulsas un novo son se pare o anterior
function reproducirSonido(nombreSonido) {

  if (audioActual) {
    audioActual.pause();
    audioActual = null;
  }

  audioActual = new Audio(nombreSonido);
  audioActual.play()
}


/* Función básica do exercicio
 */
/* function reproducirSonido(nombreSonido) {
    let audio = new Audio(nombreSonido);
    audio.play();
}  */