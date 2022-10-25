/* si () {
    si () {

    } de lo contrario 

 } de lo contrario {
    si () {
        de lo contario
    }
 } */

const ciudadDestino = "Buenos Aires";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Caracas", "Buenos Aires");

let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

//Verifican si el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompanado) {

    //Evaluamos si la ciudad esta diponible para viajar
    if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0)) {
        console.log("Pasajero cumple con los requisitos");
    } else {
        console.log("EL pasajero no cumple con los requisitos mínimos para viajar.");
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino == "Buenos Aires") {
        console.log("Pasajero puede viajar");
    } else {
        console.log("Pasajero no cumple");
    }

}