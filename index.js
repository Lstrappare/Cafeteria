// Objetos
import { BlackMoon } from "./BlackMoon.js";
import { Sucursal } from "./Sucursal.js";
import { Tarjeta } from "./Tarjeta.js";
import { Persona } from "./Persona.js";
import { Cliente } from "./Persona.js";
import { Empleado } from "./Persona.js";
import { Administrador } from "./Persona.js";

const sucursal1 = new Sucursal('Sucursal1', 202034, 900, 'CDMX', 'Sur', '213', '08400', 'Iztacalco', 6, 0, 20, 30);
const miAdministrador = new Administrador(
  "Juan Perez",
  "juan@example.com",
  "password123",
  "Administrador",
  "12345678",
  1, // sucursalID (que podrías usar de otra forma si es necesario)
  5000,
  0,
  6,
  15,
  9,
  30
);



miAdministrador.asignarSucursal(sucursal1);
sucursal1.asignarAdministrador(miAdministrador);

console.table(miAdministrador);
console.table(sucursal1);