console.log("Trabajando con condiciones")

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");

console.log(ciudadesDisponibles);

const edadComprador = 25;


if (edadComprador >= 18) {

    console.log("El comprador es mayor de edad");
    console.log(`Ciudades displonibles: ${ciudadesDisponibles}, elegir tu destino`);
} else {
    console.log("Es menor de edad");
    console.log(`No hay viajes`);
}


//console.log("Es menor de edad")
console.log("Mayor que")
console.log(edadComprador >= 18);
console.log(edadComprador > 18);
console.log(edadComprador <= 18);
console.log(edadComprador < 18);
console.log(edadComprador == 18);
console.log(edadComprador != 18);