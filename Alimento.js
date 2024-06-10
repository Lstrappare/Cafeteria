import { Ingredientes } from "./Ingredientes.js";

export class Alimento {
  constructor(nombreAlimento, seccionMenu, precio, horasProduccion, minutosProduccion, segundosProduccion, cantidadProduccion, cantidadIngredientes, tipoAlimento) {
    this.nombreAlimento = nombreAlimento;
    this.seccionMenu = seccionMenu;
    this.precio = precio;
    this.tiempoProduccion = {
      horas: horasProduccion,
      minutos: minutosProduccion,
      segundos: segundosProduccion
    };
    this.cantidadProduccion = cantidadProduccion;
    this.cantidadIngredientes = cantidadIngredientes;
    this.tipoAlimento = tipoAlimento;
  }

  mostrarAlimentos() {
    return `Nombre: ${this.nombreAlimento}
    Sección de menú: ${this.seccionMenu}
    Precio: ${this.precio}
    Tiempo de producción: ${this.tiempoProduccion.horas} horas, ${this.tiempoProduccion.minutos} minutos, ${this.tiempoProduccion.segundos} segundos
    Cantidad producida: ${this.cantidadProduccion}
    Cantidad de ingredientes: ${this.cantidadIngredientes}
    Tipo de alimento: ${this.tipoAlimento}`;
  }

  mostrarPrecio() {
    return `El precio de ${this.nombreAlimento} es de ${this.precio}`;
  }

  formularConIngredientesAlimentos(ingredientes) {
    if (this.cantidadIngredientes === ingredientes.length) {
      let costoTotal = 0;
      ingredientes.forEach(ingrediente => {
        costoTotal += ingrediente.costo;
      });
      return costoTotal;
    } else {
      return "La cantidad de ingredientes no coincide.";
    }
  }

  restarIngredientes(ingredientes) {
    ingredientes.forEach(ingrediente => {
      ingrediente.restarIngredientes(this.cantidadIngredientes);
    });
  }
}
