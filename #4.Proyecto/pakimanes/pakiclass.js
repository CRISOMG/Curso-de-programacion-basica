class Pakiman{

   constructor(n,v,a)
   {
     this.nombre = n;
     this.vida = v;
     this.ataque = a;
     this.imagen = new Image();
     this.imagen.src = imagenes[this.nombre];
   }
   mostrar()
   {
     document.body.appendChild(this.imagen);
     document.write("<br/><strong>" + this.nombre + "</strong><br>");
     document.write("vida: " + this.vida + "<br/>");
     document.write("ataque: " + this.ataque + "<hr/>");
   }
   hablar()
   {
     alert(this.nombre);
   }
}
