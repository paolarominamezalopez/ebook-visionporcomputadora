let estadoProcesado = false;

function alternarComparador() {
  const texto = document.getElementById("comparador-texto");
  estadoProcesado = !estadoProcesado;

  if (estadoProcesado) {
    texto.textContent =
      "Vista actual: Después del procesamiento (filtro / bordes / umbral con OpenCV). Aquí podrás mostrar tu imagen procesada.";
  } else {
    texto.textContent =
      "Vista actual: Imagen original (sin procesar).";
  }
}

function mostrarPistaEtica() {
  const destino = document.getElementById("pista-etica");
  destino.textContent =
    "Guía de análisis: revisa si el conjunto de datos representa distintos tonos de piel, iluminación, ángulos o contextos (medicina, autos, industria) y qué ocurre ante un error.";
}