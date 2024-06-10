import { Empleado } from "./Persona.js";

export class Cobradores extends Empleado {
  constructor(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro) {
    super(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro);
  }

  calcularCambio(total, pago) {
    if (pago >= total) {
      return pago - total;
    } else {
      console.log("Pago insuficiente.");
      return null;
    }
  }

  cargarTarjetaCliente(cliente, monto) {
    cliente.tarjeta.saldo += monto;
  }

  abonarSaldoSucursal(sucursal, cantidad) {
    sucursal.saldoSucursal += cantidad;
  }

  restarCambioSaldoSucursal(sucursal, cantidad) {
    sucursal.saldoSucursal -= cantidad;
  }
}

export class Mesero extends Cobradores {
  constructor(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro) {
    super(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro);
  }

  mandarOrden(orden) {
    // Lógica para enviar la orden a cocina
  }

  cancelarOrden(orden) {
    // Lógica para cancelar una orden
  }
}

export class Repartidor extends Cobradores {
  constructor(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro, numRepartidor, efectivoDado, vehiculo) {
    super(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro);
    this.numRepartidor = numRepartidor;
    this.efectivoDado = efectivoDado;
    this.vehiculo = vehiculo;
    this.entregado = false;
  }

  confirmarEntrega() {
    this.entregado = true;
  }

  cobrar(cliente, monto) {
    if (cliente.tarjeta.activado) {
      cliente.tarjeta.saldo -= monto;
      this.efectivoDado += monto;
      return `Pago recibido con éxito. Efectivo dado: ${this.efectivoDado}`;
    } else {
      return "La tarjeta del cliente no está activada.";
    }
  }
}

export class Cajero extends Cobradores {
  constructor(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro, numeroCaja) {
    super(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro);
    this.numeroCaja = numeroCaja;
  }

  cobrar(cliente, monto) {
    if (cliente.tarjeta.activado) {
      cliente.tarjeta.saldo -= monto;
      return `Cobro realizado con éxito. Saldo actual de la tarjeta: ${cliente.tarjeta.saldo}`;
    } else {
      return "La tarjeta del cliente no está activada.";
    }
  }
}
