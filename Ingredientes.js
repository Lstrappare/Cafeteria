export class Ingredientes {
  constructor(nombreIngrediente, tipo, cantidad, costo) {
    this.nombreIngrediente = nombreIngrediente;
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.costo = costo;
  }

  actualizarIngredientes(nuevaCantidad) {
    this.cantidad = nuevaCantidad;
  }

  mostrarIngredientes() {
    return `Nombre: ${this.nombreIngrediente}
    Tipo: ${this.tipo}
    Cantidad: ${this.cantidad}
    Costo: ${this.costo}`;
  }

  cargarASaldoSucursal(sucursal, cantidad) {
    sucursal.saldoSucursal += cantidad;
  }

  eliminarIngredientes() {
    this.cantidad = 0;
  }

  restarIngredientes(cantidad) {
    if (this.cantidad >= cantidad) {
      this.cantidad -= cantidad;
    } else {
      console.log("No hay suficiente cantidad de ingredientes.");
    }
  }

  agregarIngredientes(cantidad) {
    this.cantidad += cantidad;
  }

  sumarIngredientes(ingredientes) {
    this.cantidad += ingredientes.cantidad;
  }
}
