//console.log("Operador lógico Encadenado")

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");

//console.log(ciudadesDisponibles);

const edadComprador = 5;
const estaAcompanado = true;// booleano
const tienePasaje = true;

if (edadComprador >= 18 || estaAcompanado) {
    //Aca se ejecuta si el comprador es mayor de edad 18 años.

    console.log("Es posible vender pasajes");
    console.log(`Ciudades disponibles: ${ciudadesDisponibles}, elegir tu destino: \n`);
} else {
    console.log("Es menor de edad y no esta acompañado");
    console.log(`No hay viajes`);
}

//Proceso de embarque
console.log(`Proceso de embarque: \n \n`);
if (tienePasaje && (edadComprador >= 18 || estaAcompanado)) {
    console.log(`Comprador con pasaje`);
} else {
    console.log(`El usuario no tiene pasaje`);
}