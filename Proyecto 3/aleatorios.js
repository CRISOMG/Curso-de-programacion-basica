var canvas = document.getElementById("canvas");
var papel = canvas.getContext("2d");
// imagenes
var fondo = {
  url: "./images/tile.png",
  loaded: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo)
function cargarFondo() {
  fondo.loaded = true;
  dibujar();
}

var vacas = {
  url: "./images/vaca.webp.png",
  loaded: false
}
vacas.imagen = new Image();
vacas.imagen.src = vacas.url;
vacas.imagen.addEventListener("load", cargarVacas);
function cargarVacas() {
  vacas.loaded = true;
  dibujar();
}

var cerdo = {
  url: "./images/cerdo.png",
  loaded: false
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
function cargarCerdo() {
  cerdo.loaded = true;
  dibujar();
}

var pollo = {
  url: "./images/pollo.png",
  loaded: false
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
function cargarPollo() {
  pollo.loaded = true;
  dibujar()
}

// posiciones fijas aleatorias de las vacas,asi para que cada vez que mueva
//
{
  xv = aleatorio(0, 6) * 70; yv = aleatorio(0, 7) * 45;
  xv2 = aleatorio(0, 6) * 70; yv2 = aleatorio(0, 7) * 45;
  xv3 = aleatorio(0, 6) * 70; yv3 = aleatorio(0, 7) * 45;
  xv4 = aleatorio(0, 6) * 70; yv4 = aleatorio(0, 7) * 45;
  xv5 = aleatorio(0, 6) * 70; yv5 = aleatorio(0, 7) * 45;
  xv6 = aleatorio(0, 6) * 70; yv6 = aleatorio(0, 7) * 45;
  xv7 = aleatorio(0, 6) * 70; yv7 = aleatorio(0, 7) * 45;
  xv8 = aleatorio(0, 6) * 70; yv8 = aleatorio(0, 7) * 45;
}

function dibujar() {
  if (fondo.loaded) {
    papel.drawImage(fondo.imagen, 0, 0)
  }

  if (vacas.loaded) {
    papel.drawImage(vacas.imagen, xv, yv);
    papel.drawImage(vacas.imagen, xv2, yv2);
    papel.drawImage(vacas.imagen, xv3, yv3);
    papel.drawImage(vacas.imagen, xv4, yv4);
    papel.drawImage(vacas.imagen, xv5, yv5);
    papel.drawImage(vacas.imagen, xv6, yv6);
    papel.drawImage(vacas.imagen, xv7, yv7);
    papel.drawImage(vacas.imagen, xv8, yv8);

  }

  if (cerdo.loaded) {
    papel.drawImage(cerdo.imagen, xc, yc);
  }

  if (pollo.loaded) {
    papel.drawImage(pollo.imagen, xp, yp);
  }
}

function aleatorio(min, max) {
  var result;
  result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

//mover cerdo y pollo

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  W: 87,
  A: 65,
  S: 83,
  D: 68
};
{
  var xc = aleatorio(1, 420);
  var yc = aleatorio(1, 420);
  var xp = aleatorio(1, 420);
  var yp = aleatorio(1, 420);
}
document.addEventListener("keyup", moverCerdo);
function moverCerdo(mover) {
  var movimiento = 20;
  switch (mover.keyCode) {
    case teclas.UP:
      yc = yc - movimiento;
      dibujar()
      break;
    case teclas.DOWN:
      yc = yc + movimiento;
      dibujar()
      break;
    case teclas.LEFT:
      xc = xc - movimiento;
      dibujar();
      break;
    case teclas.RIGHT:
      xc = xc + movimiento;
      dibujar();
  }
}

document.addEventListener("keyup", moverPollo);
function moverPollo(p) {
  var move = 30;
  switch (p.keyCode) {
    case teclas.W:
      yp = yp - move;
      dibujar();
      break;
    case teclas.A:
      xp = xp - move;
      dibujar();
      break;
    case teclas.S:
      yp = yp + move;
      dibujar();
      break;
    case teclas.D:
      xp = xp + move;
      dibujar();
      break;
  }
}
