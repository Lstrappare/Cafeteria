export class DireccionCliente {
  constructor(estado, calleCliente, numeroCasa, codigoPostal, delegacion, descripcion) {
    this.estado = estado;
    this.calleCliente = calleCliente;
    this.numeroCasa = numeroCasa;
    this.codigoPostal = codigoPostal;
    this.delegacion = delegacion;
    this.descripcion = descripcion;
  }

  actualizarDireccion(estado, calleCliente, numeroCasa, codigoPostal, delegacion, descripcion) {
    this.estado = estado;
    this.calleCliente = calleCliente;
    this.numeroCasa = numeroCasa;
    this.codigoPostal = codigoPostal;
    this.delegacion = delegacion;
    this.descripcion = descripcion;
    console.log("Dirección actualizada correctamente.");
  }

  mostrarDireccion() {
    return `Estado: ${this.estado}
    Calle: ${this.calleCliente}
    Número: ${this.numeroCasa}
    Código Postal: ${this.codigoPostal}
    Delegación: ${this.delegacion}
    Descripción: ${this.descripcion}`;
  }

  validarEstado() {
    const estadosPermitidos = ["CDMX"];
    return estadosPermitidos.includes(this.estado);
  }

  validarDelegacion() {
    const delegacionesCDMX = ["Álvaro Obregón", "Azcapotzalco", "Benito Juárez", "Coyoacán", "Cuajimalpa de Morelos", "Cuauhtémoc", "Gustavo A. Madero", "Iztacalco", "Iztapalapa", "Magdalena Contreras", "Miguel Hidalgo", "Milpa Alta", "Tláhuac", "Tlalpan", "Venustiano Carranza", "Xochimilco"];
    return this.estado === "CDMX" && delegacionesCDMX.includes(this.delegacion);
  }
}
