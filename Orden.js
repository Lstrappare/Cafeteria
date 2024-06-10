import { Cuenta } from "./Cuenta.js";

export class OrdenEfectivo {
  constructor(cliente, monto) {
    this.cuenta = new Cuenta(cliente, monto);
  }

  realizarPagoEfectivo(sucursal) {
    // Lógica para realizar el pago en efectivo
    this.cuenta.realizarPago(sucursal);
  }
}

export class OrdenTarjeta {
  constructor(cliente, monto, token) {
    this.cuenta = new Cuenta(cliente, monto);
    this.token = token;
  }

  realizarPagoTarjeta(sucursal) {
    if (this.token && this.token.length === 6) {
      this.cuenta.realizarPago(sucursal);
    } else {
      console.log("Token inválido. El pago no puede ser procesado.");
    }
  }
}

