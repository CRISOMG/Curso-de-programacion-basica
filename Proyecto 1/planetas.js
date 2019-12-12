// var nombre = prompt("Cual es tu nombre?")
// var peso = prompt("Cual es tu  peso?");
// var planeta = prompt("selecciona un planeta \n 1 es Marte 2 es Jupiter");
// var gTierra = 9.8;
// var gMarte = 3.7;
// var gJupiter = 24.7;


// if (planeta == 1) {
//   pesoFinal = peso * gMarte / gTierra
//   pesoFinal = parseInt(pesoFinal)

//   document.write(`${nombre},Tu peso en marte es de ${pesoFinal} kilos.`);
// }
// else if (planeta == 2) {
//   pesoFinal = parseInt(peso * gJupiter / gTierra);
//   document.write(`${nombre},Tu peso en Jupiter es de ${pesoFinal} kilos.`);
// }
// else {
//   document.write("<strong>Error</strong>,selecciona 1 o 2 para tu planeta.")
// }

// var usuario = prompt("cual es tu peso?")
var n = 58;

function pesoEnMarte(n){
  var peso = n * 3.7 / 9.8;
  return peso 
}

const actionM = document.querySelector("#marte")
actionM.addEventListener("click",writeM)

const marte = document.querySelector("#marte")
function writeM(){
  marte.innerHTML = parseInt(pesoEnMarte(usuario))
}



function pesoEnJupiter(n){
  var peso = n * 24.8 / 9.8;
  return peso 
}

const actionJ = document.querySelector("#jupiter")
actionM.addEventListener("click",writeJ)

const jupiter = document.querySelector("#jupiter")
function writeJ(){
  jupiter.innerHTML = parseInt(pesoEnJupiter(usuario))
}
