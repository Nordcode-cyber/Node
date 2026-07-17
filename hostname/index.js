import { hostname, type } from "node:os";

console.log(`¡Hola mundo! Ejecutando en ${hostname} bajo ${type}`);
import { uptime } from "node:os";

const hours = Math.floor(uptime() / 60 / 60);
const RTF = new Intl.RelativeTimeFormat("es-ES");
const time = RTF.format(-hours, "hours");

console.log(`¡Hola mundo! Ejecutando en un sistema encendido ${time}`);
