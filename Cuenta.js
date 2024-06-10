export class Cuenta {
  constructor(cliente, monto) {
    this.cliente = cliente;
    this.monto = monto;
  }

  realizarPago(sucursal) {
    if (this.monto > 0 && sucursal instanceof Sucursal) {
      // Verificar si el cliente tiene suficiente saldo
      if (this.cliente.tarjeta.saldo >= this.monto) {
        this.cliente.tarjeta.saldo -= this.monto;
        sucursal.saldoSucursal += this.monto;
        console.log(`Pago realizado correctamente. Saldo actual de la sucursal: ${sucursal.saldoSucursal}`);
      } else {
        console.log("Saldo insuficiente en la tarjeta del cliente.");
      }
    } else {
      console.log("Monto inválido o sucursal no válida.");
    }
  }
}
