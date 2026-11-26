let estadoProcesado = false;

function alternarComparador() {
  const texto = document.getElementById("comparador-texto");
  const img = document.getElementById("img-comparador");
  estadoProcesado = !estadoProcesado;

  if (estadoProcesado) {
    texto.textContent =
      "Vista actual: Después del procesamiento con OpenCV (Filtro Gaussiano, Bordes Canny y Umbralización Otsu).";
    if (img) {
      img.src = "assets/imagenes_opencv/procesado_opencv.png";
      img.alt = "Resultados de procesamiento clásico con OpenCV";
    }
  } else {
    texto.textContent =
      "Vista actual: Imagen original con ruido (sin procesar).";
    if (img) {
      img.src = "assets/imagenes_opencv/original.png";
      img.alt = "Imagen original sin procesar";
    }
  }
}

function mostrarPistaEtica() {
  const destino = document.getElementById("pista-etica");
  destino.textContent =
    "Guía de análisis: revisa si los datos cubren distintos niveles de iluminación, ángulos o grupos humanos, y qué pasa si el sistema falla en medicina, autos o industria.";
}