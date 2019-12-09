var nombre = prompt("Cual es tu nombre?")
var peso = prompt("Cual es tu  peso?");
var planeta = prompt("selecciona un planeta \n 1 es Marte 2 es Jupiter");
var gTierra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.7;


if (planeta == 1) {
  pesoFinal = parseInt(peso * gMarte / gTierra)

  document.write(nombre + ",Tu peso en marte es de <strong>" + pesoFinal + "</strong> kilos.");
}
else if (planeta == 2) {
  pesoFinal = parseInt(peso * gJupiter / gTierra);
  document.write(nombre + ",Tu peso en jupiter es <strong>" + pesoFinal + "</strong> kilos.");
}
else {
  document.write("<strong>Error</strong>,selecciona 1 o 2 para tu planeta.")
}
