alert("funciona")

class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}

var caja = []; {
  caja.push(new Billete(50, 20));
  caja.push(new Billete(20, 5));
  caja.push(new Billete(10, 10));
  caja.push(new Billete(5, 4));
  caja.push(new Billete(2, 10));
  caja.push(new Billete(1, 10));
}
var entregado = [];

var dineroCaja = 0;

for (var c of caja) {
  dineroCaja += (c.valor * c.cantidad);
}


var dinero = document.getElementById("dinero")
var dar = parseInt(dinero.value);

extraer.addEventListener("click", entregarDinero);

function entregarDinero() {
  if (dineroCaja > 0 && dar < dineroCaja) {
    for (var b of caja) {

      if (dar > 0) {

        div = Math.floor(dar / b.valor);

        if (div > b.cantidad) {
          papeles = b.cantidad;
        }
        else {
          papeles = div;
        }

        entregado.push(new Billete(b.valor, papeles));
        dar = dar - (b.valor * papeles);

      }
    }

  }

  var dineroDado = 0;

  for (var e of entregado) {

    if (e.cantidad > 0 && dar < dineroCaja) {
      console.log(e.cantidad + " billetes de $" + e.valor);
      dineroCaja -= e.valor * e.cantidad;
      dineroDado += e.valor * e.cantidad;
      console.log("Dinero total dado:$" + dineroDado + ", Restante en caja:$" + dineroCaja + ".");
    }
    else if (dar >= dineroCaja) {
      alert("No hay en caja");
    }
  }
}
