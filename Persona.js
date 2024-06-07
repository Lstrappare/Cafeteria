// El objeto cliente se compone de una tarjeta;
import { Tarjeta } from "./Tarjeta.js";

export class Persona {
  constructor(nombre, correo, contrasenia) {
    this.nombre = nombre;
    this.correo = correo;
    this.contrasenia = contrasenia;
  }

  iniciarSesion(correo, contrasenia) {
    if (this.correo === correo && this.contrasenia === contrasenia) {
      console.log(`Bienvenido ${this.nombre}`);
    } else {
      console.log("Credenciales incorrectas");
    }
  }

  verPerfil() {
    return `Nombre: ${this.nombre}
    Correo: ${this.correo}
    Contraseña: ${this.contrasenia}`;
  }
}

export class Cliente extends Persona {
  constructor(nombre, correo, contrasenia, diaDeNacimiento, mesDeNacimiento) {
    super(nombre, correo, contrasenia);
    this.diaDeNacimiento = diaDeNacimiento;
    this.mesDeNacimiento = mesDeNacimiento;
    this.tarjeta = new Tarjeta(false, 0, 0);
  }

  ordenarAlimentos() {
    //ToDo: Hasta que este creado Orden
  }

  activarTarjeta(activar, asignarToken, saldo) {
    this.tarjeta = new Tarjeta(activar, asignarToken, saldo);
  }
  
  mostrarTarjeta() {
    return `Activada: ${this.tarjeta.activado}
            Token: ${this.tarjeta.token}
            Saldo: ${this.tarjeta.saldo}`;
  }
}

export class Empleado extends Persona {
  constructor(
    nombre,
    correo,
    contrasenia,
    rol,
    dNI,
    sucursalID,
    sueldo,
    totalCobrado,
    mesDeCobro,
    diaDeCobro,
    horaDeCobro,
    minutoDeCobro,
  ) {
    super(nombre, correo, contrasenia);
    this.rol = rol;
    this.dNI = dNI;
    this.sucursalID = sucursalID;
    this.sueldo = sueldo;
    this.totalCobrado = totalCobrado;
    this.mesDeCobro = mesDeCobro;
    this.diaDeCobro = diaDeCobro;
    this.horaDeCobro = horaDeCobro;
    this.minutoDeCobro = minutoDeCobro;
  }
  
  activarTarjetaCte(cliente, bonificacion) {
    if (!cliente.tarjeta.activado) { 
      cliente.activarTarjeta(true, this.generarToken(), bonificacion);
      console.log("Tarjeta activada con éxito.");
    } else {
      console.log("Esta tarjeta ya está activada.");
    }
  }

  otorgarSaldoCliento(cliente, monto) {
    if(cliente.tarjeta.activado){
      cliente.tarjeta.saldo += monto;
    } else {
      console.log(`No se puede recargar a esta tarjeta porque no esta activada`)
    }
  }

  asignarSueldos(rol, sueldo, periodoDePago){
    // ToDo Asignar un periodo de pago, ya sea quincenal o mensual
    
  }


  generarToken() {
    return Math.floor(Math.random() * 1000000);
  }
  
  cargarSueldo() {
    
  }
}


export class Administrador extends Empleado {
  constructor(
    nombre,
    correo,
    contrasenia,
    rol,
    dNI,
    sucursalID,
    sueldo,
    totalCobrado,
    mesDeCobro,
    diaDeCobro,
    horaDeCobro,
    minutoDeCobro
    ) {
      super(
        nombre, 
        correo, 
        contrasenia, 
        rol, 
        dNI, 
        sucursalID, 
        sueldo,
        totalCobrado,
        mesDeCobro,
        diaDeCobro,
        horaDeCobro,
        minutoDeCobro
        )
    }
}