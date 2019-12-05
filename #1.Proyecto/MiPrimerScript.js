var name = prompt("Cual es tu nombre?")
var usuario = prompt("Cual es tu  peso?");
var peso = parseInt(usuario);
var planeta = parseInt(prompt("selecciona un planeta \n 1 es Marte 2 es Jupiter"));
var gTierra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.7;


if(planeta == 1)
{
   pesoFinal = peso * gMarte / gTierra
   
  document.write(name + ",Tu peso en marte es <strong>" + pesoFinal + "</strong> kilos.");
}
else if(planeta == 2)
{
  pesoFinal = peso * gJupiter / gTierra;
   pesoFinal = parseInt(pesoFinal);
  document.write(name + ",Tu peso en jupiter es <strong>" + pesoFinal + "</strong> kilos.");
}
else
{
    document.write("<red>Error</red>,selecciona 1 o 2 para tu planeta.")
}
