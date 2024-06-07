// Obtener la hora actual (Depende del servidor)
const horaActual = new Date().getHours();
const minutosActuales = new Date().getMinutes();

// Administrador
import { Administrador } from './Persona.js'

export class Sucursal {
    constructor(nombreSucursal, idSucursal, saldoSucursal, estado, calle, numeroCalle,
               codigoPostal, delegacion, horaApertura, minutoApertura, horaCierre, minutoCierre) {
      this.nombreSucursal = nombreSucursal;
      this.idSucursal = idSucursal;
      this.abierto = false;
      this.saldoSucursal = saldoSucursal;
      this.estado = estado;
      this.calle = calle;
      this.numeroCalle = numeroCalle;
      this.codigoPostal = codigoPostal;
      this.delegacion = delegacion;
      this.horaApertura = horaApertura;
      this.minutoApertura = minutoApertura;
      this.horaCierre = horaCierre;
      this.minutoCierre = minutoCierre;
      this.empleados = [];
      this.administrador = new Administrador('Admin(default)', 'default@default.com', '76482hdsjkka', 'Administrador', 0, idSucursal, 0, 0, 1, 1, 0, 0);
    }

    aperturaOCierreAutomatico() { 
      if ((horaActual > this.horaApertura || (horaActual === this.horaApertura && 
                                             minutosActuales >= this.minutoApertura)) &&
         (horaActual < this.horaCierre || (horaActual === this.horaCierre && 
                                           minutosActuales < this.minutoCierre))) {
        console.log(`La sucursal ${this.nombreSucursal} está abierta 
        en el estado de ${this.estado}. Son las ${horaActual} y ${minutosActuales}`);
        this.abierto = true;
      } else {
        console.log(`La sucursal ${this.nombreSucursal} está cerrada en el estado 
        de ${this.estado} por ser las ${horaActual} y ${minutosActuales}`);
        this.abierto = false;
      }
      return this.abierto;
    }
    /*
    Muestra toda la información de la sucursal
    */
    mostrarInfoSucursal() {
      return `El nombre de la sucursal es: ${this.nombreSucursal}
      su id es: ${this.idSucursal} 
      abierto: ${this.aperturaOCierreAutomatico()}
      su saldo es: ${this.saldoSucursal}
      su estado es: ${this.estado} 
      su calle es: ${this.calle}
      su numero de calle es: ${this.numeroCalle} 
      su codigo postal es: ${this.codigoPostal}
      su delegacion es: ${this.delegacion} 
      su hora de apertura es: ${this.horaApertura}
      su minuto de apertura es: ${this.minutoApertura}
      su hora de cierre es: ${this.horaCierre}
      su minuto de cierre es: ${this.minutoCierre}`;
    }
    /*
    Modifica el estado de apertura de la sucursal manualmente,
    si la sucursal está abierta, se cierra, y viceversa.
    */
    aperturaOCierreManual() {
      if(this.abierto === true){
        console.log('Acabas de cerrar la sucursal');
        this.abierto = false;
      } else {
        console.log('Acabas de abrir la sucursal');
        this.abierto = true;
      }
    }

    cambiarHoraAperturaYCierre(horaApertura, minutoApertura, horaCierre, minutoCierre){
      this.horaApertura = horaApertura;
      this.minutoApertura = minutoApertura;
      this.horaCierre = horaCierre;
      this.minutoCierre = minutoCierre;
    }

    mostrarSaldoSucursal(){
      return this.saldoSucursal;
    }

    abonarASaldoTotal(cantidad) {
      if(this.saldoSucursal > 0 && cantidad <= this.saldoSucursal){
        BlackMoon.saldoTotal += cantidad;
        this.saldoSucursal -= cantidad;
        console.log(`Se ha abonado ${cantidad} al saldo total de BlackMoon con éxito`);
      } else {
        console.log(`No se ha podido abonar la cantidad ${cantidad} al saldo total de 
        BlackMoon ${this.saldoSucursal > 0 ? 'porque no cuentas con saldo suficiente' : 
                    'porque el saldo de la sucursal es de 0'}`);
      }
    }
    registrarDatosAdmin(nombre, correo, dNI){
      this.administrador = new Administrador(nombre, correo, dNI);
    }
  }