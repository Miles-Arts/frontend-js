console.log("Operador lógico Encadenado")

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");

console.log(ciudadesDisponibles);

const edadComprador = 25;
const estaAcompanado = true;

if (edadComprador >= 18 || estaAcompanado) {

    console.log("Es psoible vender pasajes");
    console.log(`Ciudades displonibles: ${ciudadesDisponibles}, elegir tu destino`);

} else
    console.log("Es menor de edad y no esta acompañado");
console.log(`No hay viajes`);