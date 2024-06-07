// Objetos
import { BlackMoon } from "./BlackMoon.js";
import { Sucursal } from "./Sucursal.js";
import { Tarjeta } from "./Tarjeta.js";
import { Persona } from "./Persona.js";
import { Cliente } from "./Persona.js";
import { Empleado } from "./Persona.js";
import { Administrador } from "./Persona.js";

const sucursal1 = new Sucursal('Sucursal1', 202034, 900, 'CDMX', 'Sur', '213', '08400', 'Iztacalco', 6, 0, 20, 30);

sucursal1.abonarASaldoTotal(100);

console.log(BlackMoon)

sucursal1.registrarDatosAdmin('Jose', 'jose@gmail.com', 20204149)

console.table(sucursal1)

