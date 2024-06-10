import { Ingredientes } from "./Ingredientes.js";

export class Inventario {
  constructor(estado) {
    this.estado = estado;
    this.solicitudes = [];
    this.ingredientes = [];
  }

  mostrarEstado() {
    return `Estado del inventario: ${this.estado}`;
  }

  mostrarSolicitudes() {
    return `Solicitudes pendientes: ${this.solicitudes}`;
  }

  mostrarIngredientes() {
    let ingredientesStr = "";
    this.ingredientes.forEach((ingrediente, index) => {
      ingredientesStr += `Ingrediente ${index + 1}: ${ingrediente.mostrarIngredientes()}\n`;
    });
    return ingredientesStr;
  }

  agregarIngrediente(ingrediente) {
    this.ingredientes.push(ingrediente);
  }
}
