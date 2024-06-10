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

import { DireccionCliente } from "./DireccionCliente.js";
export class Cliente extends Persona {
  constructor(nombre, correo, contrasenia, diaDeNacimiento, mesDeNacimiento) {
    super(nombre, correo, contrasenia);
    this.diaDeNacimiento = diaDeNacimiento;
    this.mesDeNacimiento = mesDeNacimiento;
    this.tarjeta = new Tarjeta(false, 0, 0);
    this.direccion = new DireccionCliente();
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

  asignarSueldos(rol, sueldo, periodoDePago) {
    this.rol = rol;
    this.sueldo = sueldo;
    this.periodoDePago = periodoDePago;
    console.log(`Se ha asignado el sueldo de ${sueldo} al empleado ${this.nombre} con rol de ${rol}. El periodo de pago es ${periodoDePago}.`);
  }

  generarToken() {
    return Math.floor(Math.random() * 1000000);
  }
  
  cargarSueldo(monto) {
    this.totalCobrado += monto;
    console.log(`Se ha cargado ${monto} al sueldo del empleado ${this.nombre}. El sueldo total ahora es ${this.totalCobrado}.`);
  }
}

import { Sucursal } from "./Sucursal.js"

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
        this.sucursal = null;
    }

    asignarSucursal(sucursal){
      this.sucursal = sucursal;
    }

    controlarInventario(inventario, cantidad, nombreIngrediente) {
      const ingredienteExistente = inventario.mostrarIngredientes().find(
        (ingrediente) => ingrediente.nombreIngrediente === nombreIngrediente
      );
    
      if (ingredienteExistente) {
        ingredienteExistente.cantidad += cantidad;
        console.log(`Se ha añadido ${cantidad} unidades de ${nombreIngrediente} al inventario.`);
      } else {
        console.log(`El ingrediente ${nombreIngrediente} no existe en el inventario.`);
      }
    }
    
    agregarNuevoEmpleado(empleados, nuevoEmpleado) {
      empleados.push(nuevoEmpleado);
      console.log(`Nuevo empleado ${nuevoEmpleado.nombre} agregado con éxito.`);
    }
    
  eliminarEmpleado(empleados, empleadoAEliminar) {
      const index = empleados.findIndex((empleado) => empleado.dNI === empleadoAEliminar.dNI);
      if (index !== -1) {
        empleados.splice(index, 1);
        console.log(`Empleado ${empleadoAEliminar.nombre} eliminado con éxito.`);
      } else {
        console.log(`No se encontró al empleado ${empleadoAEliminar.nombre}.`);
      }
    }
    
  modificarEmpleado(empleadoAModificar, nuevoSueldo) {
      empleadoAModificar.sueldo = nuevoSueldo;
      console.log(`Empleado ${empleadoAModificar.nombre} modificado con nuevo sueldo de ${nuevoSueldo}.`);
    }
  
  agregarSucursal(sucursales, nuevaSucursal) {
      sucursales.push(nuevaSucursal);
      console.log(`Nueva sucursal ${nuevaSucursal.nombreSucursal} agregada con éxito.`);
    }
    
  agregarIngredientes(inventario, ingredientes) {
    inventario.agregarIngredientes(ingredientes);
    console.log(`Ingredientes agregados al inventario.`);
  }
    
  cambiarHorarioSucursal(sucursal, nuevaHoraApertura, nuevoMinutoApertura, nuevaHoraCierre, nuevoMinutoCierre) {
    sucursal.cambiarHoraAperturaYCierre(nuevaHoraApertura, nuevoMinutoApertura, nuevaHoraCierre, nuevoMinutoCierre);
    console.log(`Horario de la sucursal ${sucursal.nombreSucursal} modificado.`);
    }
    
  modificarSueldo(empleado, nuevoSueldo) {
    empleado.sueldo = nuevoSueldo;
    console.log(`Sueldo de ${empleado.nombre} modificado a ${nuevoSueldo}.`);
  }
    
  formularAlimentos(alimentos) {
    // ToDo 
    console.log("Alimentos formulados y agregados al menú.");
  }
    
  restringirZonasDeEntrega(repartidores, zona, repartidor) {
    const repartidorEnZona = repartidores.find((r) => r.numRepartidor === repartidor.numRepartidor);
      if (repartidorEnZona) {
        repartidorEnZona.zonaRestringida = zona;
        console.log(`Zona de entrega restringida para repartidor ${repartidor.numRepartidor}.`);
      } else {
        console.log(`Repartidor ${repartidor.numRepartidor} no encontrado.`);
      }
    }
}

export class Cocinero extends Empleado {
  constructor(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro) {
    super(nombre, correo, contrasenia, rol, dNI, sucursalID, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro);
  }


  finalizarOrden(orden) {
    console.log(`La orden ${orden} ha sido finalizada.`);
  }

  solicitarIngredientes(ingredientes) {
    const solicitud = `Solicitud de ingredientes: ${ingredientes.join(", ")}`;
    this.inventario.agregarSolicitud(solicitud);
  }
}
