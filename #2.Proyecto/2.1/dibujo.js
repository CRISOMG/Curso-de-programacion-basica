var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, ) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
boton.addEventListener("keydown", dibujoPorClick)


function dibujoPorClick() {
  // var lineas = parseInt(texto.value);
  // var ancho = d.width;
  // var espacio = ancho / lineas;
  // var i;
  // var f;
  // var w;
  // for (var l = 0; l < lineas; l++//for es similar que while(l <= lineas)//
  // for (var l = 0; l <= lineas; l++)
  // {
  //   i = espacio * l;
  //   f = espacio * (l + 1);
  //   w = 300 - (l * espacio);

  //   dibujarLinea("grey", 0, i, f, 300);
  //   dibujarLinea("grey", i, 0, 300, f);
  //   dibujarLinea("red", w, 0, 0, f);
  //   dibujarLinea("blue", 300, w, f, 300);
  //   console.log("lineas " + l);
  // }
}
dibujarLinea("black", 0, 100, 300, 100)
dibujarLinea("black", 0, 150, 300, 150)
dibujarLinea("black", 0, 200, 300, 200)
dibujarLinea("black", 100, 0, 100, 300)
dibujarLinea("black", 150, 0, 150, 300)
dibujarLinea("black", 200, 0, 200, 300)
var r = 10;
function dibujarCirculo(f) {
  dibujarLinea("black", 150, 150, f, f)
}
