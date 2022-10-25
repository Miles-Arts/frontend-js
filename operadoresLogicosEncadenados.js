/*si ( a && b || c ) {


si ( ciudadEstabaDisponible && edadPasajero > 18 || acompañado ) {
    
}*/

const ciudadDestino = "Buenos Aires";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Caracas", "Buenos Aires");

let edadPasajero = 18;
let estaAcompanado = false;
let tienePasaporte = true;
let estaCasado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

// a && b || c 

if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 && edadPasajero >= 18 && tienePasaporte && !estaCasado) {
    console.log("Pasajero cumple con los requisitos");
} else {
    console.log("EL pasajero no cumple con los requisitos mínimos para viajar.");
}
