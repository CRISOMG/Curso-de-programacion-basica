var imagenes = [];
imagenes["Cauchin"] = "./images/vaca.webp.png";
imagenes["Pokacho"] = "./images/pollo.png";
imagenes["Tocinauro"] = "./images/cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (pakies of coleccion) {
  pakies.mostrar();
}
