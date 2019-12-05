// var inBank = new Banco("Mercantil","Corriente",200);
// inBank.imprimir();
//
// var outBank = new BancoDestino("Mercantil","ahorro",10);
// outBank.imprimir();

var inBanco = {
  nombre: "Mercantil",
  usuario:"cristian",
  cuenta: true,
  saldo: 200
}
var outBanco = {
  nombre: "Mercantil",
  usuario:"trinidad",
  cuenta: true,
  saldo: 10
}
console.log(inBanco,outBanco);


//solo se pueden hacer transferencias de 9-12 y de 15-20 horas
var hora_actual = "16:30";
var monto = 0;
var impuesto = 0;
var transferencia = false;

var horario = {
  matutinoEmpieza:"9:00",
  matutinoTermina:"12:30",
  vespertinoEmpieza:"15:00",
  vespertinoTermina:"20:30"
}

//este if es una locura (o.o)

if((horario.matutinoEmpieza>hora_actual && horario.matutinoTermina<hora_actual)
                                        ||
 (horario.vespertinoEmpieza>hora_actual && horario.vespertinoTermina<hora_actual))
{
  console.log("horario: permitido");

    if (inBanco.cuenta === outBanco.cuenta)
      {
          // if para colocar impuesto $
            if (!inBanco.nombre === outBanco.nombre)
          {
            impuesto += monto * 0.02;
            monto += impuesto;
            console.log(`con impuesto de $${impuesto}`);
          }
            else
          {
            console.log("sin impuestos")
          }
          transferencia = true;
      }
}

else{ console.log("horario: no permitido") }


function transferir(bancocliente,bancodestino,monto)
{
  if(transferencia && bancocliente.saldo >= monto)
    {
      bancocliente.saldo -= monto;
      bancodestino.saldo += monto;
      console.log(`se transfirio $${monto} de ${bancocliente.usuario} a ${bancodestino.usuario}`);
      console.log(bancocliente,bancodestino);
    }
  else
    {
      console.log("no puedes transferir");
    }
}

transferir(inBanco,outBanco,50)
