var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWidth = 9;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}

// Para dibujar con las teclas
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32
};
var x = 200;
var y = 200;

document.addEventListener("keydown", dibujarTeclado);
function dibujarTeclado(evento) {
  var color = "#34495e";
  var movimiento = 8;

  switch (evento.keyCode) {
    case teclas.LEFT:
      dibujarLinea("color", x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

    case teclas.UP:
      dibujarLinea("color", x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea("color", x, y, x + movimiento, y, papel);
      x = x + movimiento;

      break;

    case teclas.DOWN:
      dibujarLinea("#color", x, y, x, y + movimiento, papel);
      y = y + movimiento;

      break;
  }
}

// Para dibujar con el mouse,OJO los valores de X y Y se modificaran.

var click = 0;

document.addEventListener("mousedown", clickDown);
function clickDown() {
  click = click + 1;
  console.log(click);
}

document.addEventListener("mouseup", clickUp);
function clickUp() {
  click = click - 1;
  console.log(click);
}

cuadrito.addEventListener("mousemove", clickMove);
function clickMove(m) {
  if (click == 1) {
    x = m.x - 479;
    y = m.y - 82;
    dibujarLinea("black", x, y, x - 7, y - 7);
    console.log(x, y);
  }
}
alert("puedes dibujar con click y con las flechas del teclado");
alert("Si se bugea recarga la pagina con ctrl+r");
alert("Y no te muevas tan rapido.");
