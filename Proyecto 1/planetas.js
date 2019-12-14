//var usuario = Number(prompt("¿Cual es tu peso?"))
numberController()
function numberController(){
  if(!usuario){
    alert("Coloca un numero porfavor!")
    usuario = Number(prompt("¿Cual es tu peso?"))
    numberController()
  }
}
function pesoEnMarte(n){
  var peso = n * 3.7 / 9.8;
  return peso 
}
const marte = document.querySelector(".marte")
marte.addEventListener("click", writeM)

function writeM(){
  console.log(usuario);
  
  //marte.innerText = pesoEnMarte(usuario)
}

function pesoEnJupiter(n){
  var peso = n * 24.8 / 9.8;
  return peso 
}
const jupiter = document.querySelector(".jupiter")
function writeJ(){
  jupiter.innerHTML = pesoEnJupiter(usuario)
}
