class Banco {

  constructor(n, c, s) {
    this.nombre = n;
    this.cuenta = c;
    this.saldo = s;
  }
  imprimir() {
    document.write(`<p>Banco:${this.nombre} <br> cuenta:${this.cuenta} <br> saldo:$${this.saldo}</p>`);
  }
}

class BancoDestino extends Banco {
  constructor(n, c, s) {
    super(n, c, s)
  }
}
