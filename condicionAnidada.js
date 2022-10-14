console.log("Trabajando con condiciones Anidadas")

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");

console.log(ciudadesDisponibles);

const edadComprador = 25;
const estaAcompanado = true;

if (edadComprador >= 18) {

    console.log("El comprador es mayor de edad");
    console.log(`Ciudades displonibles: ${ciudadesDisponibles}, elegir tu destino`);

} else if (estaAcompanado) {
    console.log(`El Comprador menor de edad esta acompañado por un adulto`);
    console.log(`Ciudades displonibles: ${ciudadesDisponibles}, elegir tu destino`);
} else {
    console.log("Es menor de edad y no esta acompañado");
    console.log(`No hay viajes`);
}
